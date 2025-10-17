import { Testimonial } from '@/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative">
      <Quote className="w-12 h-12 text-amber-200 absolute top-6 right-6" />
      <div className="relative z-10">
        <p className="text-lg text-gray-700 italic mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-amber-700">{testimonial.project}</div>
        </div>
      </div>
    </div>
  );
}
