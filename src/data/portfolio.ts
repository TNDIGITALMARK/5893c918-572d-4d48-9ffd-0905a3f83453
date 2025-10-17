import { PortfolioProject, Testimonial } from '@/types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'mountain-ridge-retreat',
    name: 'Mountain Ridge Retreat',
    size: 3200,
    description: 'Featuring exposed beam cathedral ceilings and stone fireplace',
    features: ['Cathedral Ceilings', 'Stone Fireplace', 'Exposed Beams', 'Mountain Views'],
    style: 'rustic_traditional',
    imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'lakeside-family-lodge',
    name: 'Lakeside Family Lodge',
    size: 4500,
    description: 'With wraparound porches and custom millwork',
    features: ['Wraparound Porch', 'Custom Millwork', 'Lakefront Access', 'Chef\'s Kitchen'],
    style: 'luxury_lodge',
    imageGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'wilderness-getaway',
    name: 'Wilderness Getaway Cabin',
    size: 1800,
    description: 'Showcasing compact luxury design',
    features: ['Compact Design', 'Luxury Finishes', 'Loft Bedroom', 'Modern Amenities'],
    style: 'modern_rustic',
    imageGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'heritage-homestead',
    name: 'Heritage Style Homestead',
    size: 5200,
    description: 'Displaying traditional craftsmanship techniques',
    features: ['Traditional Craftsmanship', 'Hand-hewn Logs', 'Stone Foundation', 'Vintage Hardware'],
    style: 'rustic_traditional',
    imageGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-and-mike',
    name: 'Sarah & Mike Thompson',
    quote: 'The attention to detail exceeded our wildest expectations',
    project: 'Mountain Ridge Retreat'
  },
  {
    id: 'johnson-family',
    name: 'The Johnson Family',
    quote: 'Our cabin feels like it grew naturally from the landscape',
    project: 'Lakeside Family Lodge'
  },
  {
    id: 'retirement-dream',
    name: 'Robert & Patricia Martinez',
    quote: 'Finally, a home that matches our vision perfectly',
    project: 'Heritage Style Homestead'
  }
];

export const companyStats = {
  yearsInBusiness: 25,
  projectsCompleted: 180,
  clientSatisfaction: 98
};
