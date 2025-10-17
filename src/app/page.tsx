import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Home } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSlideshow from '@/components/HeroSlideshow';
import { portfolioProjects, testimonials, companyStats } from '@/data/portfolio';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Slideshow Background */}
        <HeroSlideshow />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Handcrafted Log Cabins<br />
              <span className="text-amber-300 drop-shadow-lg">That Become Family Legacies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              From concept to completion, we build custom log homes that reflect your unique vision and exceed your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 h-auto shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-600/50"
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
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
              >
                <Link href="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-white/30">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.yearsInBusiness}+</div>
              <div className="text-white/90 font-medium">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-white/30">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.projectsCompleted}+</div>
              <div className="text-white/90 font-medium">Cabins Built</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-white/30">
              <div className="text-4xl font-bold text-amber-300 mb-2">{companyStats.clientSatisfaction}%</div>
              <div className="text-white/90 font-medium">Client Satisfaction</div>
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

          {/* Craftsmanship Showcase Image */}
          <ScrollReveal delay={50}>
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl group">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/generated/craftsmanship-detail.png"
                  alt="Expert craftsmanship detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-all duration-300 group-hover:from-black/70">
                <div className="p-6 sm:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Artisan Quality in Every Detail</h3>
                  <p className="text-base sm:text-lg text-white/90">Traditional techniques perfected over 25 years</p>
                </div>
              </div>
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

          {/* Interior Showcase Section */}
          <ScrollReveal delay={100}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative h-[350px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src="/generated/interior-living-room.png"
                    alt="Luxury log cabin living room interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-all duration-300 group-hover:from-black/80">
                  <div className="p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h4 className="text-2xl font-bold mb-1">Stunning Interiors</h4>
                    <p className="text-white/90">Cathedral ceilings & premium finishes</p>
                  </div>
                </div>
              </div>
              <div className="group relative h-[350px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src="/generated/interior-kitchen.png"
                    alt="Custom log cabin kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-all duration-300 group-hover:from-black/80">
                  <div className="p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h4 className="text-2xl font-bold mb-1">Designer Kitchens</h4>
                    <p className="text-white/90">Custom cabinetry & modern amenities</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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

      {/* Construction Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Watch Your Dream Take Shape
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From foundation to finish, we bring your vision to life with expert precision
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/generated/construction-progress.png"
                  alt="Log cabin construction in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-6 sm:p-8 text-white max-w-3xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">Professional Construction Excellence</h3>
                  <p className="text-base sm:text-lg text-white/90 mb-4">
                    Our experienced team uses proven techniques and quality materials to ensure your cabin stands the test of time. From timber selection to final inspection, every step is executed with meticulous attention to detail.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/30">
                      <div className="text-xs sm:text-sm text-white/80">Timeline</div>
                      <div className="text-lg sm:text-xl font-bold">6-9 Months</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/30">
                      <div className="text-xs sm:text-sm text-white/80">Warranty</div>
                      <div className="text-lg sm:text-xl font-bold">10 Years</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/30">
                      <div className="text-xs sm:text-sm text-white/80">Team Size</div>
                      <div className="text-lg sm:text-xl font-bold">8-12 Pros</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
