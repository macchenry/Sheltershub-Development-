
import { Property, PropertyStatus } from './types';

export const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'All Properties', href: '#' },
  { name: 'For Rent', href: '#' },
  { name: 'For Sale', href: '#' },
  { name: 'Agency', href: '#' },
  { name: 'Agent', href: '#' },
  { name: 'Developer', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export const heroImages = [
  'https://i.ibb.co/dwXy9qMp/Carousel-Image-1.jpg',
  'https://i.ibb.co/jvXSSRTm/Carousel-Image-2.jpg',
  'https://i.ibb.co/0RBKCXM3/Carousel-Image-3.jpg',
];

export const adSliderImages = [
    'https://i.ibb.co/dwXy9qMp/Carousel-Image-1.jpg',
    'https://i.ibb.co/jvXSSRTm/Carousel-Image-2.jpg',
    'https://i.ibb.co/0RBKCXM3/Carousel-Image-3.jpg',
];

export const wideAdSliderImages = [
    'https://i.ibb.co/dwXy9qMp/Carousel-Image-1.jpg',
    'https://i.ibb.co/jvXSSRTm/Carousel-Image-2.jpg',
    'https://i.ibb.co/0RBKCXM3/Carousel-Image-3.jpg',
];


const generateProperties = (startId: number, count: number): Property[] => {
    const properties: Property[] = [];
    const newImageUrl = 'https://i.ibb.co/NnZzSLFd/Sample-Card-Image.jpg';
    for (let i = 0; i < count; i++) {
        const isForSale = Math.random() > 0.5;
        properties.push({
            id: startId + i,
            images: [newImageUrl],
            status: isForSale ? PropertyStatus.ForSale : PropertyStatus.ForRent,
            daysAgo: Math.floor(Math.random() * 30) + 1,
            isPremium: Math.random() > 0.7,
            propertyType: 'House',
            name: i === 0 && startId === 1 ? 'Lakeside Estate' : 'Modern Family Home',
            beds: i === 0 && startId === 1 ? 3 : Math.floor(Math.random() * 3) + 2,
            baths: i === 0 && startId === 1 ? 4 : Math.floor(Math.random() * 3) + 2,
            garage: i === 0 && startId === 1 ? 2 : Math.floor(Math.random() * 2) + 1,
            areaSqm: i === 0 && startId === 1 ? 350 : Math.floor(Math.random() * 300) + 100,
            priceGHS: i === 0 && startId === 1 ? 1830055 : Math.floor(Math.random() * 2000000) + 500000,
            priceUSD: i === 0 && startId === 1 ? 150000 : Math.floor(Math.random() * 150000) + 40000,
        });
    }
    // Ensure the first property matches the design reference exactly
    if (startId === 1) {
        properties[0] = {
            id: 1,
            images: [newImageUrl],
            status: PropertyStatus.ForSale,
            daysAgo: 15,
            isPremium: true,
            propertyType: 'House',
            name: 'Lakeside Estate',
            beds: 3,
            baths: 4,
            garage: 2,
            areaSqm: 350,
            priceGHS: 1830055,
            priceUSD: 150000,
        };
    }
    return properties;
}


export const featuredProperties: Property[] = generateProperties(1, 6).map(p => ({ ...p, isPremium: true }));
export const latestProperties: Property[] = generateProperties(7, 6);
export const allPropertiesList: Property[] = generateProperties(13, 12); // Generate 12 properties for the listing page


export const footerLinks = {
    'Property Type': {
        'Residential': [
            { name: 'House for Rent', href: '#' },
            { name: 'House for Sale', href: '#' },
            { name: 'Apartment/Condos for Rent', href: '#' },
            { name: 'Apartment/Condos for Sale', href: '#' },
            { name: 'Land for Sale', href: '#' },
            { name: 'Townhouse for Rent', href: '#' },
            { name: 'Townhouse for Sale', href: '#' },
        ],
        'Commercial': [
            { name: 'Office for Rent', href: '#' },
            { name: 'Office for Sale', href: '#' },
            { name: 'Warehouse', href: '#' },
            { name: 'Industry', href: '#' },
            { name: 'Land for Sale', href: '#' },
            { name: 'Shop for Rent', href: '#' },
            { name: 'Shop for Sale', href: '#' },
        ]
    },
    'About Us': [
        { name: 'About Sheltershub', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
    'Support': [
        { name: 'support@sheltershub.com', href: 'mailto:support@sheltershub.com' },
        { name: 'Safety tips', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    'Our Socials': [
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'YouTube', href: '#' },
        { name: 'Twitter', href: '#' },
    ],
};