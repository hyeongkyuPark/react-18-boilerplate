import { AtomTest } from '@atoms';
import { MoleculeTest } from '@molecules';
import { OrganismTest } from '@organisms';
import { TemplateTest } from '@templates';
import { cn } from 'lib/utils';
import React from 'react';

function App() {
  return (
    <div className={cn('App flex flex-col gap-2')}>
      test
      <AtomTest />
      <MoleculeTest />
      <OrganismTest />
      <TemplateTest />
      <button type="button">test</button>
    </div>
  );
}

export default App;
