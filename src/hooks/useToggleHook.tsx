import { useState } from 'react';
const useToggleHook = () => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    console.log('togle called');
    setValue(!value);
  };

  return { value, toggle };
};

export { useToggleHook };
