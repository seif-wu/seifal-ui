import * as React from 'react';

export interface UseControlledPorps<T = unknown> {
  controlled: T | undefined;
  default: T | undefined;
}

export default function useControlled<T>({
  controlled,
  default: defaultProp,
}: UseControlledPorps<T>) {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = React.useCallback(
    (newValue: T | ((prevValue: T | undefined) => T)) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [],
  );

  return [value, setValueIfUncontrolled] as const;
}
