import { Button, Checkbox, Input } from '@atoms';
import React from 'react';
import SectionComponent from './components/Section';

export function ButtonTestComponent() {
  return (
    <div>
      <SectionComponent title="Button">
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button size={28}>Primary</Button>
          <Button size={32}>Primary</Button>
          <Button size={40}>Primary</Button>
          <Button size={48}>Primary</Button>
          <Button size={56}>Primary</Button>
          <Button size={56} isRound>
            Primary
          </Button>
          <Button size={56} disabled>
            Primary
          </Button>
          <Button size={56} isRound disabled>
            Primary
          </Button>
          <Button size={56} isFull>
            Primary
          </Button>
          <Button size={56} isRound isFull>
            Primary
          </Button>
          <Button size={56} disabled isFull>
            Primary
          </Button>
          <Button size={56} isRound disabled isFull>
            Primary
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button buttonColor="primaryGhost" size={28}>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={32}>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={40}>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={48}>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56}>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} isRound>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} disabled>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} isRound disabled>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} isFull>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} isRound isFull>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} disabled isFull>
            PrimaryGhost
          </Button>
          <Button buttonColor="primaryGhost" size={56} isRound disabled isFull>
            PrimaryGhost
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button buttonColor="lightPrimary" size={28}>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={32}>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={40}>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={48}>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56}>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} isRound>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} disabled>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} isRound disabled>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} isFull>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} isRound isFull>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} disabled isFull>
            LightPrimary
          </Button>
          <Button buttonColor="lightPrimary" size={56} isRound disabled isFull>
            LightPrimary
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button buttonColor="gray" size={28}>
            Gray
          </Button>
          <Button buttonColor="gray" size={32}>
            Gray
          </Button>
          <Button buttonColor="gray" size={40}>
            Gray
          </Button>
          <Button buttonColor="gray" size={48}>
            Gray
          </Button>
          <Button buttonColor="gray" size={56}>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} isRound>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} disabled>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} isRound disabled>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} isFull>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} isRound isFull>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} disabled isFull>
            Gray
          </Button>
          <Button buttonColor="gray" size={56} isRound disabled isFull>
            Gray
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button buttonColor="grayGhost" size={28}>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={32}>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={40}>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={48}>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56}>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} isRound>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} disabled>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} isRound disabled>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} isFull>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} isRound isFull>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} disabled isFull>
            GrayGhost
          </Button>
          <Button buttonColor="grayGhost" size={56} isRound disabled isFull>
            GrayGhost
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Button buttonColor="plane" size={28}>
            Plane
          </Button>
          <Button buttonColor="plane" size={32}>
            Plane
          </Button>
          <Button buttonColor="plane" size={40}>
            Plane
          </Button>
          <Button buttonColor="plane" size={48}>
            Plane
          </Button>
          <Button buttonColor="plane" size={56}>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} isRound>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} disabled>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} isRound disabled>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} isFull>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} isRound isFull>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} disabled isFull>
            Plane
          </Button>
          <Button buttonColor="plane" size={56} isRound disabled isFull>
            Plane
          </Button>
        </div>
        <div className="flex items-center gap-2 flex-wrap bg-gray5 p-[8px]">
          <Button buttonColor="planeGhost" size={28}>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={32}>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={40}>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={48}>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56}>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} isRound>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} disabled>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} isRound disabled>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} isFull>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} isRound isFull>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} disabled isFull>
            PlaneGhost
          </Button>
          <Button buttonColor="planeGhost" size={56} isRound disabled isFull>
            PlaneGhost
          </Button>
        </div>
      </SectionComponent>
    </div>
  );
}
export function InputTestComponent() {
  return (
    <div>
      <SectionComponent title="Input">
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Input placeholder="Default Input" />
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Input value="value init" placeholder="Default Input" />
        </div>
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Input value="Disabled" placeholder="Default Input" />
        </div>
      </SectionComponent>
    </div>
  );
}
export function CheckboxTestComponent() {
  return (
    <div>
      <SectionComponent title="Checkbox">
        <div className="flex items-center gap-2 flex-wrap p-[8px]">
          <Checkbox />
          <Checkbox isRound />
          <Checkbox indicatorType="circle" />
          <Checkbox indicatorType="circle" isRound />
          <Checkbox onlyIcon />
          <Checkbox indicatorType="circle" onlyIcon />
          <Checkbox disabled />
          <Checkbox isRound disabled />
          <Checkbox indicatorType="circle" disabled />
          <Checkbox indicatorType="circle" isRound disabled />
          <Checkbox onlyIcon disabled />
          <Checkbox indicatorType="circle" onlyIcon disabled />
          <Checkbox isRound disabled checked />
          <Checkbox indicatorType="circle" disabled checked />
          <Checkbox indicatorType="circle" isRound disabled checked />
          <Checkbox onlyIcon disabled checked />
          <Checkbox indicatorType="circle" onlyIcon disabled checked />
        </div>
      </SectionComponent>
    </div>
  );
}
