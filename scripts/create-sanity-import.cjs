const fs = require('fs');
const path = require('path');

// Create NDJSON format for Sanity import
const documents = [];

// Company Stats
const companyStats = [
  { statName: 'Investment Volume', statValue: '$25M+', description: 'Total investment volume', displayOrder: 1 },
  { statName: 'Properties Managed', statValue: '400+', description: 'Properties under management', displayOrder: 2 },
  { statName: 'Years in Business', statValue: '5+', description: 'Years of experience', displayOrder: 3 },
  { statName: 'Client Satisfaction', statValue: '98%', description: 'Client satisfaction rate', displayOrder: 4 }
];

companyStats.forEach((stat, index) => {
  documents.push({
    _id: `companyStats-${index + 1}`,
    _type: 'companyStats',
    ...stat
  });
});

// Team Members
documents.push({
  _id: 'teamMember-1',
  _type: 'teamMember',
  name: 'Daniel Kennedy',
  title: 'Founder',
  bio: `Daniel Kennedy's passion for real estate began in his early years. He relocated to Austin in 2013, bringing with him a vision for strategic real estate investment and management. With over a decade of diverse real estate expertise, Daniel has established himself as a trusted leader in the Austin market.\n\nDaniel founded Avenue B Development, a custom home building firm that exemplifies his commitment to quality construction and design. His expertise spans investment property acquisition and comprehensive property management services.\n\nAs an active member of NARPM (National Association of Residential Property Managers), Daniel stays at the forefront of industry best practices. He lives in Austin with his wife Renee, a licensed Texas Realtor, and their two daughters, Caila and Faith.`,
  displayOrder: 1
});

// Portfolio Properties
const portfolioProperties = [
  {
    name: 'PMI Austin',
    description: '400 units under management, specializing in single family management across Greater Austin and surrounding areas. Founded in 2019.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'PMI Austin',
    propertyType: 'Property Management Company',
    investmentAmount: '400 units',
    status: 'Active'
  },
  {
    name: 'Flip Homes',
    description: 'Strategic property renovations and resales in high-demand areas.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Residential Investment',
    status: 'Active'
  },
  {
    name: 'Buy and Hold Properties',
    description: 'Long-term rental properties generating consistent cash flow.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Rental Properties',
    status: 'Active'
  },
  {
    name: 'Co-Living Spaces',
    description: 'Modern co-living spaces for professionals and students.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Co-Living',
    status: 'Active'
  },
  {
    name: 'Lions Den Sober Living',
    description: 'Supportive residential facilities for recovery communities.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Single & Multi Family',
    propertyType: 'Sober Living Facilities',
    status: 'Active'
  },
  {
    name: 'Remodelled Homes',
    description: 'Complete home renovations transforming properties into modern living spaces.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Renovation Projects',
    status: 'Active'
  },
  {
    name: 'Tour Homes',
    description: 'Showcase homes demonstrating our construction quality and design capabilities.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Showcase Properties',
    status: 'Active'
  },
  {
    name: 'New Custom Construction',
    description: 'Custom homes tailored to client specifications with premium finishes.',
    location: 'Greater Austin and Surrounding Areas',
    sector: 'Construction',
    propertyType: 'Custom Homes',
    status: 'Active'
  }
];

portfolioProperties.forEach((property, index) => {
  documents.push({
    _id: `portfolioProperty-${index + 1}`,
    _type: 'portfolioProperty',
    ...property
  });
});

// Gallery Items
const galleryItems = [
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Front Exterior',
    description: 'Strategic renovation of this South Austin brick home featuring updated interior spaces and enhanced functionality while maintaining its classic charm.',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Kitchen',
    description: 'Complete kitchen transformation with sage green cabinets, white quartz island, and designer fixtures',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Living Area',
    description: 'Open concept living with floating staircase and contemporary design',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Loft Office',
    description: 'Converted bedroom to sophisticated loft office with modern railings',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '3210 Cupid Dr',
    roomType: 'Master Bathroom',
    description: 'Luxury spa bathroom with glass shower and freestanding tub',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Front Exterior',
    description: 'Beautiful craftsman renovation with white columns and updated siding',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Kitchen',
    description: 'Stunning kitchen with white shaker cabinets and marble countertops',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Living Room',
    description: 'Open living space with updated staircase and hardwood floors',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '4506 Rosedale Ave',
    roomType: 'Kitchen Island & Dining',
    description: 'Large gray kitchen island with marble top and elegant dining area',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Front Exterior',
    description: 'Hill country home renovation preserving natural beauty',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Kitchen',
    description: 'Modern kitchen with marble countertops and floating shelves',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '1900 Yaupon Valley Rd',
    roomType: 'Living Room',
    description: 'Transformed living space with exposed white beams',
    category: 'Residential',
    yearCompleted: '2023'
  },
  {
    propertyName: '5401 Grover Ave',
    roomType: 'New Construction',
    description: 'Stunning contemporary two-unit property built in 2019 in Brentwood neighborhood',
    category: 'New Construction',
    yearCompleted: '2019'
  }
];

galleryItems.forEach((item, index) => {
  documents.push({
    _id: `galleryItem-${index + 1}`,
    _type: 'galleryItem',
    ...item
  });
});

// Create NDJSON file
const ndjson = documents.map(doc => JSON.stringify(doc)).join('\n');
const outputPath = path.join(__dirname, 'sanity-import.ndjson');
fs.writeFileSync(outputPath, ndjson);

console.log('✅ Created sanity-import.ndjson file!');
console.log('\nTo import this data into Sanity:');
console.log('1. Go to your Sanity Studio (https://kennedy-equity.sanity.studio/)');
console.log('2. In the top menu, click the "Vision" icon (looks like an eye)');
console.log('3. Click "Import" in the top right');
console.log('4. Select the sanity-import.ndjson file');
console.log('5. Click "Import documents"');
console.log('\nNote: You\'ll still need to upload images manually after import.');