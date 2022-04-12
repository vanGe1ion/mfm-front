import { useState } from "react";
import { IToggleView } from "./types";

const useToggleView = (): IToggleView => {
  const [isBlockView, setIsBlockView] = useState<boolean>(false);

  const toggleView = (): void => {
    setIsBlockView((prev) => !prev);
  };

  return { isBlockView, toggleView };
};

export default useToggleView;
