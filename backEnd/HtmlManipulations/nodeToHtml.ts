import { TreeNode } from "../dataStructures";
import { HtmlTags, TAG_MAP } from "../tagMap/tagMap";
const isHtmlTag = (tag: string): tag is HtmlTags => {
  return tag in TAG_MAP;
};

export const nodeToHTML = (node: TreeNode): string => {
  if (node.type === "text") {
    return node.attributes ?? "";
  }
  const tag =  node.tagName
  const attributes = node.attributes ? ` ${node.attributes}` : "";
  
  const childrenToHTML = (node.children || [])
  .map((child) => nodeToHTML(child))
  .join("");
  
  if(node.tagName === "root") 
  return `${childrenToHTML}`;
  return `<${tag}${attributes}>${childrenToHTML}</${tag}>`;
};