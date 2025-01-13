import { TreeNodeProps } from "../dataStructures";
import { separatorFn } from "../cutstomFn/separatorFn";

export const updateTextInTree = (
  root: TreeNodeProps,
  pathArray: string[],
  newText: string,
  maxUpdates: number = 1
): number => {
  let updatedCount = 0;
  if (pathArray.length === 0) {
    if (root.type === "text") {
      root.attributes = newText;
    } else {
      root.children = [
        {
          type: "text",
          tagName: null,
          attributes: newText,
          children: [],
        },
      ];
    }
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
            updatedCount += updateTextInTree(child, tail, newText, maxUpdates);
            break;
          }
          matchedIndex++;
        } else {
          updatedCount += updateTextInTree(child, tail, newText, maxUpdates);
        }
        if (maxUpdates !== undefined && updatedCount >= maxUpdates) {
          break;
        }
      }
    }
  }
  return updatedCount;
};
