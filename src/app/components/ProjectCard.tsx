import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  image: string | ReactNode;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  category,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <article className="glass-card overflow-hidden flex flex-col">
      <div className="relative h-64 bg-[#161616] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="w-full h-full flex items-center justify-center">
          {typeof image === 'string' ? (
            <div className="relative w-full h-full">
              <Image
                src={image} 
                alt={title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div>
              {image}
            </div>
          )}
        </div>
        
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#101010] border border-[#555] text-[#ffad80] text-xs uppercase tracking-wide rounded">
          {category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-syne font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>

        <div className="mt-auto">
          <Link 
            href={`/concepts/${slug}`}
            className="discovery-link"
          >
            View Concept
          </Link>
        </div>
      </div>
    </article>
  );
}
