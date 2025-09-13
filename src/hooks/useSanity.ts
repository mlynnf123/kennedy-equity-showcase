import { useQuery } from '@tanstack/react-query';
import { sanityApi, PortfolioProperty, GalleryItem, CompanyStats, TeamMember } from '@/lib/sanity';

// Custom hooks for fetching Sanity data with React Query

export const usePortfolioProperties = (sector?: string) => {
  return useQuery({
    queryKey: ['portfolioProperties', sector],
    queryFn: () => sanityApi.getPortfolioProperties(sector),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGalleryItems = (category?: string) => {
  return useQuery({
    queryKey: ['galleryItems', category],
    queryFn: () => sanityApi.getGalleryItems(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCompanyStats = () => {
  return useQuery({
    queryKey: ['companyStats'],
    queryFn: sanityApi.getCompanyStats,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: sanityApi.getTeamMembers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};