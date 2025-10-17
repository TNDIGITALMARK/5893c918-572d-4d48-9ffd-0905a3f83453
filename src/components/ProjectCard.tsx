import Link from 'next/link';
import { PortfolioProject } from '@/types';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: PortfolioProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image with Gradient */}
      <div
        className="h-64 relative overflow-hidden"
        style={{ background: project.imageGradient }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-sm font-semibold text-amber-700">{project.size.toLocaleString()} sq ft</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <Button
          asChild
          variant="ghost"
          className="group/btn w-full justify-between hover:bg-amber-50"
        >
          <Link href={`/portfolio#${project.id}`}>
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
