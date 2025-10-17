export interface PortfolioProject {
  id: string;
  name: string;
  size: number;
  description: string;
  features: string[];
  style: 'rustic_traditional' | 'modern_rustic' | 'luxury_lodge';
  imageGradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  project: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  projectTimeline: string;
  budgetRange: string;
  propertyStatus: string;
  stylePreferences: string[];
  specialFeatures: string[];
  additionalNotes: string;
}
