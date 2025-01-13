import { TreeNodeProps } from "../dataStructures";
import { separatorFn } from "../cutstomFn/separatorFn";

export const pasteNodeInTree = (
  root: TreeNodeProps,
  pathArray: string[],
  newSubtree: TreeNodeProps,
  parseCount: number = 1
) => {
  let pastedCount = 0;
  const clonedChildren = JSON.parse(JSON.stringify(newSubtree.children ?? []));
  if (pathArray.length === 0) {
    root.children = clonedChildren;
    return 1;
  }
  const [head, ...tail] = pathArray;
  const { tagName, attribute, attributeFlag, position } = separatorFn(head);
  let matchedIndex = 0;
  if (root.children) {
    for (const child of root.children) {
      if (child.tagName === tagName) {
        if (attributeFlag) {
          if (attribute !== child.attributes) {
            continue;
          }
        }
        if (position !== -1) {
          if (matchedIndex === position) {
            pastedCount += pasteNodeInTree(child, tail, newSubtree, parseCount);
            break;
          }
          matchedIndex++;
        } else {
          pastedCount += pasteNodeInTree(child, tail, newSubtree, parseCount);
        }
        if (parseCount !== undefined && pastedCount >= parseCount) {
          break;
        }
      }
    }
  }
  return pastedCount;
};
