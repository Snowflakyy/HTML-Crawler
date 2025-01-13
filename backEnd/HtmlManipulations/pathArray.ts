import { customSlice, customSplit } from "../cutstomFn";

export const pathArray = (path: string): string[] => {
    const pathArray: string[] = customSplit(path, "/");
    return customSlice(pathArray, 2, pathArray.length);
  };
  