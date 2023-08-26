import React from 'react';

interface SectionComponentProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionComponent(props: SectionComponentProps) {
  const { title, children } = props;

  return (
    <section className="w-full px-[20px] py-[24px]">
      <h2 className="w-full pb-[4px] border-b border-gray7 text-h2b px-[8px]">
        {title}
      </h2>
      <div className="flex flex-col gap-4 w-full p-[8px]">{children}</div>
    </section>
  );
}
