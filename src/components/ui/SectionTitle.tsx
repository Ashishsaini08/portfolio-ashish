"use client";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-bold text-netflix-white mb-4 px-4 md:px-8 lg:px-12">
      {title}
    </h2>
  );
}
