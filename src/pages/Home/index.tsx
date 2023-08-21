import React from 'react';
import { MoleculeTest } from '@molecules';
import { TemplateTest } from '@templates';
import { cn } from 'lib/utils';
import { Button } from '@atoms';
import { IconPlus } from 'assets/svg';

export default function HomePage() {
  return (
    <div className={cn('App flex flex-col gap-2')}>
      test
      <Button PrefixIcon={IconPlus}>버튼 테스트</Button>
      <MoleculeTest />
      <TemplateTest />
      <button type="button">test</button>
    </div>
  );
}
