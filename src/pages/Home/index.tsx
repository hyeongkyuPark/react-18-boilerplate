import React, { useState } from 'react';
import { MoleculeTest } from '@molecules';
import { TemplateTest } from '@templates';
import { cn } from '@styles/lib';
import { Button, Input } from '@atoms';
import { IconPlus } from 'assets/svg';

export default function HomePage() {
  const [text, setText] = useState('');

  return (
    <div className={cn('App flex flex-col gap-2')}>
      test
      <Button PrefixIcon={IconPlus}>버튼 테스트</Button>
      <form>
        <Input
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          disabled
          required
        />
        <button type="submit">test</button>
      </form>
      <MoleculeTest />
      <TemplateTest />
      <button type="button">test</button>
    </div>
  );
}
