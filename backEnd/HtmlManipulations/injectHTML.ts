import { customIncludes, customIndexOf, customSubstring } from "../cutstomFn";

export const injectHTML = (
  rootDiv: string,
  pageContent: string
): string | undefined => {
  let startIndex: number;
  let root = `<div id="root">`;
  if (customIncludes(pageContent, root)) {
    startIndex = customIndexOf(pageContent, root) + root.length;
    let contentUntilDiv = customSubstring(pageContent, 0, startIndex);
    let contentAfterDiv = customSubstring(pageContent, startIndex);
    contentUntilDiv += rootDiv;
    return contentUntilDiv + contentAfterDiv;
  }
  return pageContent;
};
