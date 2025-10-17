'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function ConsultationPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectTimeline: '',
    budgetRange: '',
    propertyStatus: '',
    stylePreferences: [] as string[],
    specialFeatures: [] as string[],
    additionalNotes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Consultation Request Received!',
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
  };

  const handleStylePreferenceChange = (style: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      stylePreferences: checked
        ? [...prev.stylePreferences, style]
        : prev.stylePreferences.filter(s => s !== style),
    }));
  };

  const handleSpecialFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      specialFeatures: checked
        ? [...prev.specialFeatures, feature]
        : prev.specialFeatures.filter(f => f !== feature),
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Your consultation request has been received. Our team will contact you within 24 hours to schedule your free consultation.
            </p>
            <p className="text-gray-600 mb-8">
              We&apos;re excited to help bring your dream cabin to life!
            </p>
            <Button
              onClick={() => window.location.href = '/'}
              size="lg"
              className="bg-amber-700 hover:bg-amber-800"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-gray-900 to-amber-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-white/90">
            Tell us about your dream cabin and let&apos;s make it a reality together
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timeline">Project Timeline *</Label>
                  <Select
                    value={formData.projectTimeline}
                    onValueChange={(value) => setFormData({ ...formData, projectTimeline: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6_months">Within 6 Months</SelectItem>
                      <SelectItem value="6_12_months">6-12 Months</SelectItem>
                      <SelectItem value="1_2_years">1-2 Years</SelectItem>
                      <SelectItem value="2_years_plus">2+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200k_300k">$200k - $300k</SelectItem>
                      <SelectItem value="300k_400k">$300k - $400k</SelectItem>
                      <SelectItem value="400k_500k">$400k - $500k</SelectItem>
                      <SelectItem value="500k_plus">$500k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="property">Property Status *</Label>
                  <Select
                    value={formData.propertyStatus}
                    onValueChange={(value) => setFormData({ ...formData, propertyStatus: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select property status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="land_owned">I Own the Land</SelectItem>
                      <SelectItem value="land_searching">Searching for Land</SelectItem>
                      <SelectItem value="land_under_contract">Land Under Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Style Preferences */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Style Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="rustic_traditional"
                    checked={formData.stylePreferences.includes('rustic_traditional')}
                    onCheckedChange={(checked) =>
                      handleStylePreferenceChange('rustic_traditional', checked as boolean)
                    }
                  />
                  <Label htmlFor="rustic_traditional" className="cursor-pointer">
                    Rustic Traditional
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="modern_rustic"
                    checked={formData.stylePreferences.includes('modern_rustic')}
                    onCheckedChange={(checked) =>
                      handleStylePreferenceChange('modern_rustic', checked as boolean)
                    }
                  />
                  <Label htmlFor="modern_rustic" className="cursor-pointer">
                    Modern Rustic
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="luxury_lodge"
                    checked={formData.stylePreferences.includes('luxury_lodge')}
                    onCheckedChange={(checked) =>
                      handleStylePreferenceChange('luxury_lodge', checked as boolean)
                    }
                  />
                  <Label htmlFor="luxury_lodge" className="cursor-pointer">
                    Luxury Lodge
                  </Label>
                </div>
              </div>
            </div>

            {/* Special Features */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Features</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="stone_fireplace"
                    checked={formData.specialFeatures.includes('stone_fireplace')}
                    onCheckedChange={(checked) =>
                      handleSpecialFeatureChange('stone_fireplace', checked as boolean)
                    }
                  />
                  <Label htmlFor="stone_fireplace" className="cursor-pointer">
                    Stone Fireplace
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="wraparound_porch"
                    checked={formData.specialFeatures.includes('wraparound_porch')}
                    onCheckedChange={(checked) =>
                      handleSpecialFeatureChange('wraparound_porch', checked as boolean)
                    }
                  />
                  <Label htmlFor="wraparound_porch" className="cursor-pointer">
                    Wraparound Porch
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="loft_bedroom"
                    checked={formData.specialFeatures.includes('loft_bedroom')}
                    onCheckedChange={(checked) =>
                      handleSpecialFeatureChange('loft_bedroom', checked as boolean)
                    }
                  />
                  <Label htmlFor="loft_bedroom" className="cursor-pointer">
                    Loft Bedroom
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="custom_millwork"
                    checked={formData.specialFeatures.includes('custom_millwork')}
                    onCheckedChange={(checked) =>
                      handleSpecialFeatureChange('custom_millwork', checked as boolean)
                    }
                  />
                  <Label htmlFor="custom_millwork" className="cursor-pointer">
                    Custom Millwork
                  </Label>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Information</h2>
              <Label htmlFor="notes">Tell us more about your vision</Label>
              <Textarea
                id="notes"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Share any additional details about your dream cabin..."
                className="mt-2 min-h-32"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Request Free Consultation'
              )}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
