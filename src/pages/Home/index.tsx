import React from 'react';
import { AtomTest } from '@atoms';
import { MoleculeTest } from '@molecules';
import { TemplateTest } from '@templates';
import { cn } from 'lib/utils';

export default function HomePage() {
  return (
    <div className={cn('App flex flex-col gap-2')}>
      test
      <AtomTest />
      <MoleculeTest />
      <TemplateTest />
      <button type="button">test</button>
    </div>
  );
}
