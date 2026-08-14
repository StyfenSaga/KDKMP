import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
        {title}
      </h2>
      <div className={`w-16 h-1.5 bg-[#C41E3A] rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      <p className={`text-lg text-slate-600 max-w-2xl mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    </div>
  );
}
