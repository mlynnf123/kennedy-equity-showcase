import { createClient } from '@sanity/client';

// Sanity client configuration
// You'll need to replace these with your actual project values after setting up Sanity
export const client = createClient({
  projectId: '0wzf8jx8', // Kennedy Equity project ID
  dataset: 'production',
  useCdn: true, // Use CDN for faster reads
  apiVersion: '2023-10-01', // Use current date in YYYY-MM-DD format
});

// GROQ queries for different content types
export const queries = {
  // Get all portfolio properties
  portfolioProperties: `*[_type == "portfolioProperty"] | order(_createdAt desc) {
    _id,
    name,
    description,
    location,
    sector,
    featuredImage,
    "featuredImageUrl": featuredImage.asset->url,
    "additionalImages": additionalImages[].asset->url,
    propertyType,
    investmentAmount,
    status
  }`,

  // Get portfolio properties by sector
  portfolioPropertiesBySector: (sector: string) => `*[_type == "portfolioProperty" && sector == "${sector}"] | order(_createdAt desc) {
    _id,
    name,
    description,
    location,
    sector,
    featuredImage,
    "featuredImageUrl": featuredImage.asset->url,
    "additionalImages": additionalImages[].asset->url,
    propertyType,
    investmentAmount,
    status
  }`,

  // Get all gallery items
  galleryItems: `*[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    propertyName,
    roomType,
    beforeImage,
    "beforeImageUrl": beforeImage.asset->url,
    afterImage,
    "afterImageUrl": afterImage.asset->url,
    description,
    category,
    yearCompleted
  }`,

  // Get gallery items by category
  galleryItemsByCategory: (category: string) => `*[_type == "galleryItem" && category == "${category}"] | order(_createdAt desc) {
    _id,
    propertyName,
    roomType,
    beforeImage,
    "beforeImageUrl": beforeImage.asset->url,
    afterImage,
    "afterImageUrl": afterImage.asset->url,
    description,
    category,
    yearCompleted
  }`,

  // Get company stats
  companyStats: `*[_type == "companyStats"] | order(displayOrder asc) {
    _id,
    statName,
    statValue,
    description,
    displayOrder
  }`,

  // Get team members
  teamMembers: `*[_type == "teamMember"] | order(displayOrder asc) {
    _id,
    name,
    title,
    bio,
    "photo": photo.asset->url,
    displayOrder
  }`
};

// Types for our content
export interface PortfolioProperty {
  _id: string;
  name: string;
  description?: string;
  location?: string;
  sector: 'PMI Austin' | 'Single & Multi Family' | 'Construction';
  featuredImage: string;
  additionalImages?: string[];
  propertyType?: string;
  investmentAmount?: string;
  status?: 'Active' | 'Completed' | 'Under Management';
}

export interface GalleryItem {
  _id: string;
  propertyName: string;
  roomType?: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
  category?: 'Residential' | 'Commercial' | 'New Construction';
  yearCompleted?: string;
}

export interface CompanyStats {
  _id: string;
  statName: string;
  statValue: string;
  description?: string;
  displayOrder?: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  photo?: string;
  displayOrder?: number;
}

// API functions
export const sanityApi = {
  // Get all portfolio properties
  async getPortfolioProperties(sector?: string): Promise<PortfolioProperty[]> {
    try {
      const query = sector ? queries.portfolioPropertiesBySector(sector) : queries.portfolioProperties;
      return await client.fetch(query);
    } catch (error) {
      console.error('Error fetching portfolio properties:', error);
      return [];
    }
  },

  // Get all gallery items
  async getGalleryItems(category?: string): Promise<GalleryItem[]> {
    try {
      const query = category ? queries.galleryItemsByCategory(category) : queries.galleryItems;
      return await client.fetch(query);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      return [];
    }
  },

  // Get company stats
  async getCompanyStats(): Promise<CompanyStats[]> {
    try {
      return await client.fetch(queries.companyStats);
    } catch (error) {
      console.error('Error fetching company stats:', error);
      return [];
    }
  },

  // Get team members
  async getTeamMembers(): Promise<TeamMember[]> {
    try {
      return await client.fetch(queries.teamMembers);
    } catch (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
  }
};