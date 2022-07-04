import { Switch } from '@seifal/ui';

export default function SwitchPage() {
  return (
    <>
      <Switch size="sm" />
      <Switch disabled checked />
      <Switch />
      <Switch size="sm" type="contain" />
      <Switch type="contain" disabled />
      <Switch type="contain" checked disabled />
    </>
  );
}
