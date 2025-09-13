const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Sanity client configuration
const client = createClient({
  projectId: '0wzf8jx8',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // You'll need to set this
  apiVersion: '2023-10-01'
});

// Helper function to upload images
async function uploadImage(filePath, title) {
  try {
    const imageFile = fs.readFileSync(filePath);
    const asset = await client.assets.upload('image', imageFile, {
      filename: path.basename(filePath),
      title: title
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    };
  } catch (error) {
    console.error(`Error uploading image ${filePath}:`, error);
    return null;
  }
}

// Company Stats Data
const companyStats = [
  { statName: 'Investment Volume', statValue: '$25M+', description: 'Total investment volume', displayOrder: 1 },
  { statName: 'Properties Managed', statValue: '400+', description: 'Properties under management', displayOrder: 2 },
  { statName: 'Years in Business', statValue: '5+', description: 'Years of experience', displayOrder: 3 },
  { statName: 'Client Satisfaction', statValue: '98%', description: 'Client satisfaction rate', displayOrder: 4 }
];

// Team Members Data
const teamMembers = [
  {
    name: 'Daniel Kennedy',
    title: 'Founder',
    bio: `Daniel Kennedy's passion for real estate began in his early years. He relocated to Austin in 2013, bringing with him a vision for strategic real estate investment and management. With over a decade of diverse real estate expertise, Daniel has established himself as a trusted leader in the Austin market.\n\nDaniel founded Avenue B Development, a custom home building firm that exemplifies his commitment to quality construction and design. His expertise spans investment property acquisition and comprehensive property management services.\n\nAs an active member of NARPM (National Association of Residential Property Managers), Daniel stays at the forefront of industry best practices. He lives in Austin with his wife Renee, a licensed Texas Realtor, and their two daughters, Caila and Faith.`,
    displayOrder: 1
  }
];

// Portfolio Properties Data
const portfolioProperties = [
  {
    name: 'PMI Austin',
    description: '400 units under management, specializing in single family management across Greater Austin and surrounding areas. Founded in 2019.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'PMI Austin',
    propertyType: 'Property Management Company',
    investmentAmount: '400 units',
    status: 'Active',
    imagePath: 'src/assets/portfolio-pmi-austin.jpg'
  },
  {
    name: 'Flip Homes',
    description: 'Strategic property renovations and resales in high-demand areas.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Residential Investment',
    status: 'Active',
    imagePath: 'src/assets/portfolio-flip-homes.jpg'
  },
  {
    name: 'Buy and Hold Properties',
    description: 'Long-term rental properties generating consistent cash flow.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Rental Properties',
    status: 'Active',
    imagePath: 'src/assets/portfolio-buy-hold.jpg'
  },
  {
    name: 'Co-Living Spaces',
    description: 'Modern co-living spaces for professionals and students.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Co-Living',
    status: 'Active',
    imagePath: 'src/assets/portfolio-co-living.jpg'
  },
  {
    name: 'Lions Den Sober Living',
    description: 'Supportive residential facilities for recovery communities.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Sober Living Facilities',
    status: 'Active',
    imagePath: 'src/assets/portfolio-sober-living.jpg'
  },
  {
    name: 'Remodelled Homes',
    description: 'Complete home renovations transforming properties into modern living spaces.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Renovation Projects',
    status: 'Active',
    imagePath: 'src/assets/portfolio-remodeled.jpg'
  },
  {
    name: 'Tour Homes',
    description: 'Showcase homes demonstrating our construction quality and design capabilities.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Showcase Properties',
    status: 'Active',
    imagePath: 'src/assets/portfolio-tour-homes.jpg'
  },
  {
    name: 'New Custom Construction',
    description: 'Custom homes tailored to client specifications with premium finishes.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Custom Homes',
    status: 'Active',
    imagePath: 'src/assets/portfolio-modern-brick.jpg'
  }
];

// Gallery Items Data
const galleryItems = [
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Front Exterior',
    description: 'Strategic renovation of this South Austin brick home featuring updated interior spaces and enhanced functionality while maintaining its classic charm.',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-cupid-exterior-before.jpg',
    afterImagePath: 'src/assets/gallery-cupid-exterior-after.jpg'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Kitchen',
    description: 'Complete kitchen transformation with sage green cabinets, white quartz island, and designer fixtures',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-cupid-kitchen-before.jpg',
    afterImagePath: 'src/assets/gallery-cupid-kitchen-after.jpg'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Living Area',
    description: 'Open concept living with floating staircase and contemporary design',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-cupid-living-before.jpg',
    afterImagePath: 'src/assets/gallery-cupid-living-after.jpg'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Loft Office',
    description: 'Converted bedroom to sophisticated loft office with modern railings',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-cupid-bedroom-before.jpg',
    afterImagePath: 'src/assets/gallery-cupid-loft-after.jpg'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Master Bathroom',
    description: 'Luxury spa bathroom with glass shower and freestanding tub',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-cupid-kitchen-detail-before.jpg',
    afterImagePath: 'src/assets/gallery-cupid-bathroom-after.jpg'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Front Exterior',
    description: 'Beautiful craftsman renovation with white columns and updated siding',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-rosedale-exterior-before.jpg',
    afterImagePath: 'src/assets/gallery-rosedale-exterior-after.jpg'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Kitchen',
    description: 'Stunning kitchen with white shaker cabinets and marble countertops',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-rosedale-kitchen-before.jpg',
    afterImagePath: 'src/assets/gallery-rosedale-kitchen-after.jpg'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Living Room',
    description: 'Open living space with updated staircase and hardwood floors',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-rosedale-living-before.jpg',
    afterImagePath: 'src/assets/gallery-rosedale-living-after.jpg'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Kitchen Island & Dining',
    description: 'Large gray kitchen island with marble top and elegant dining area',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-rosedale-porch-before.jpg',
    afterImagePath: 'src/assets/gallery-rosedale-kitchen-island-after.jpg'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Front Exterior',
    description: 'Hill country home renovation preserving natural beauty',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-yaupon-exterior-before.jpg',
    afterImagePath: 'src/assets/gallery-yaupon-exterior-after.jpg'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Kitchen',
    description: 'Modern kitchen with marble countertops and floating shelves',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-yaupon-kitchen-before.jpg',
    afterImagePath: 'src/assets/gallery-yaupon-kitchen-after.jpg'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Living Room',
    description: 'Transformed living space with exposed white beams',
    category: 'Residential',
    yearCompleted: '2023',
    beforeImagePath: 'src/assets/gallery-yaupon-dining-before.jpg',
    afterImagePath: 'src/assets/gallery-yaupon-living-after.jpg'
  },
  {
    propertyName: '5401 Grover Ave',
    roomType: 'New Construction',
    description: 'Stunning contemporary two-unit property built in 2019 in Brentwood neighborhood',
    category: 'New Construction',
    yearCompleted: '2019',
    beforeImagePath: 'src/assets/gallery-grover-construction-1.jpg',
    afterImagePath: 'src/assets/gallery-grover-exterior-after-new.jpg'
  }
];

// Migration function
async function migrateToSanity() {
  console.log('Starting migration to Sanity...\n');

  // Migrate Company Stats
  console.log('📊 Migrating Company Stats...');
  for (const stat of companyStats) {
    try {
      const doc = {
        _type: 'companyStats',
        ...stat
      };
      const result = await client.create(doc);
      console.log(`✅ Created stat: ${stat.statName}`);
    } catch (error) {
      console.error(`❌ Error creating stat ${stat.statName}:`, error.message);
    }
  }

  // Migrate Team Members
  console.log('\n👥 Migrating Team Members...');
  for (const member of teamMembers) {
    try {
      const doc = {
        _type: 'teamMember',
        ...member
      };
      const result = await client.create(doc);
      console.log(`✅ Created team member: ${member.name}`);
    } catch (error) {
      console.error(`❌ Error creating team member ${member.name}:`, error.message);
    }
  }

  // Migrate Portfolio Properties
  console.log('\n🏠 Migrating Portfolio Properties...');
  for (const property of portfolioProperties) {
    try {
      console.log(`📸 Uploading image for ${property.name}...`);
      const featuredImage = await uploadImage(property.imagePath, property.name);
      
      const doc = {
        _type: 'portfolioProperty',
        name: property.name,
        description: property.description,
        location: property.location,
        sector: property.sector,
        propertyType: property.propertyType,
        investmentAmount: property.investmentAmount,
        status: property.status,
        featuredImage: featuredImage
      };
      
      const result = await client.create(doc);
      console.log(`✅ Created property: ${property.name}`);
    } catch (error) {
      console.error(`❌ Error creating property ${property.name}:`, error.message);
    }
  }

  // Migrate Gallery Items
  console.log('\n🖼️ Migrating Gallery Items...');
  for (const item of galleryItems) {
    try {
      console.log(`📸 Uploading images for ${item.propertyName} - ${item.roomType}...`);
      const beforeImage = await uploadImage(item.beforeImagePath, `${item.propertyName} - ${item.roomType} - Before`);
      const afterImage = await uploadImage(item.afterImagePath, `${item.propertyName} - ${item.roomType} - After`);
      
      const doc = {
        _type: 'galleryItem',
        propertyName: item.propertyName,
        roomType: item.roomType,
        description: item.description,
        category: item.category,
        yearCompleted: item.yearCompleted,
        beforeImage: beforeImage,
        afterImage: afterImage
      };
      
      const result = await client.create(doc);
      console.log(`✅ Created gallery item: ${item.propertyName} - ${item.roomType}`);
    } catch (error) {
      console.error(`❌ Error creating gallery item ${item.propertyName} - ${item.roomType}:`, error.message);
    }
  }

  console.log('\n✨ Migration complete!');
  console.log('Visit https://kennedy-equity.sanity.studio/ to view your content.');
}

// Check if token is set
if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('❌ Error: SANITY_WRITE_TOKEN environment variable is not set.');
  console.log('\nTo get your token:');
  console.log('1. Go to https://www.sanity.io/manage/project/0wzf8jx8/api');
  console.log('2. Click "Add API token"');
  console.log('3. Name it "Migration Token"');
  console.log('4. Set permissions to "Editor"');
  console.log('5. Copy the token');
  console.log('\nThen run:');
  console.log('SANITY_WRITE_TOKEN=your-token-here node scripts/migrate-to-sanity.js');
  process.exit(1);
}

// Run migration
migrateToSanity().catch(console.error);