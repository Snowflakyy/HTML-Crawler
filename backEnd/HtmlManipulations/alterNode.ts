import { TreeNode } from "../dataStructures";

export const alterNode = (
  node: TreeNode,
  text: string
): TreeNode | undefined => {
  if (node.children) {
    if (node.children[0].type === "text") {
      node.children[0].attributes = text;
      return node;
    }
  }
  return;
};