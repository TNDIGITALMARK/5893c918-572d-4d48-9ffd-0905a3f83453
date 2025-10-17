'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/data/portfolio';
import type { PortfolioProject } from '@/types';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.style === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the artistry and craftsmanship behind every custom log cabin we&apos;ve built. Each project tells a unique story of vision, dedication, and timeless quality.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'rustic_traditional' ? 'default' : 'outline'}
              onClick={() => setFilter('rustic_traditional')}
              className={filter === 'rustic_traditional' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              Rustic Traditional
            </Button>
            <Button
              variant={filter === 'modern_rustic' ? 'default' : 'outline'}
              onClick={() => setFilter('modern_rustic')}
              className={filter === 'modern_rustic' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              Modern Rustic
            </Button>
            <Button
              variant={filter === 'luxury_lodge' ? 'default' : 'outline'}
              onClick={() => setFilter('luxury_lodge')}
              className={filter === 'luxury_lodge' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              Luxury Lodge
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found with this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} id={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div
                  className="h-96 rounded-2xl shadow-2xl"
                  style={{ background: project.imageGradient }}
                />
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{project.name}</h2>
                  <p className="text-xl text-amber-700 font-semibold">{project.size.toLocaleString()} sq ft</p>
                </div>

                <p className="text-lg text-gray-700">{project.description}</p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <span className="inline-block px-4 py-2 bg-amber-50 text-amber-800 font-medium rounded-lg">
                    {project.style.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s bring your vision to life with a custom log cabin designed just for you
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
