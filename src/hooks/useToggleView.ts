import { useState } from "react";

interface IToggleView {
  isBlockView: boolean;
  toggleView: () => void;
}

const useToggleView = (): IToggleView => {
  const [isBlockView, setIsBlockView] = useState<boolean>(false);

  const toggleView = (): void => {
    setIsBlockView((prev) => !prev);
  };

  return { isBlockView, toggleView };
};

export default useToggleView;
