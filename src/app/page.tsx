import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Home } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';
import { portfolioProjects, testimonials, companyStats } from '@/data/portfolio';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #166534 50%, #92400e 100%)',
          }}
        />

        {/* Overlay Pattern */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Handcrafted Log Cabins<br />
              <span className="text-amber-300">That Become Family Legacies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              From concept to completion, we build custom log homes that reflect your unique vision and exceed your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 h-auto shadow-2xl"
              >
                <Link href="/consultation">
                  Start Your Dream Cabin Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
              >
                <Link href="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.yearsInBusiness}+</div>
              <div className="text-white/90">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.projectsCompleted}+</div>
              <div className="text-white/90">Cabins Built</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.clientSatisfaction}%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our portfolio of stunning custom log cabins, each uniquely crafted to reflect our clients&apos; dreams
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {portfolioProjects.slice(0, 4).map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Legacy Cabins
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Premium craftsmanship meets personalized service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Craftsmanship</h3>
                <p className="text-gray-600">
                  Over 25 years of experience building premium log cabins with traditional techniques and modern innovations
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Designs</h3>
                <p className="text-gray-600">
                  Every cabin is uniquely designed to match your vision, lifestyle, and the natural beauty of your land
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Service</h3>
                <p className="text-gray-600">
                  From initial consultation to final walkthrough, we&apos;re with you every step of the journey
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Cabin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss your vision and create a custom log home that will become your family&apos;s legacy
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-amber-900 hover:bg-gray-100 text-lg px-8 py-6 h-auto shadow-2xl"
          >
            <Link href="/consultation">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
