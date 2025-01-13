import { TreeNode } from "../dataStructures";
import { HtmlTags, TAG_MAP } from "../tagMap/tagMap";
const isHtmlTag = (tag: string): tag is HtmlTags => {
  return tag in TAG_MAP;
};

export interface TagUniqueMap {
  [tag: string]: string;
}
export const buildUniqueMap = (
  tree: TreeNode,
  uniqueMap: TagUniqueMap = {}
) => {
  console.log("tree:", tree);
  console.log("uniqueMap:", uniqueMap);
  if (isHtmlTag(tree.tagName!!)) {
    const tag = TAG_MAP[tree.tagName];
    if (!uniqueMap[tree.tagName]) uniqueMap[tree.tagName] = tag;
  }
  for (const child of tree.children) {
    buildUniqueMap(child, uniqueMap);
  }
  return uniqueMap;
};
