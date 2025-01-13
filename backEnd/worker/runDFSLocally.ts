import { TreeNode, TreeNodeProps } from "../dataStructures";

export const runDFSLocally = (
  node: TreeNodeProps,
  tagName: string,
  atr: string,
  depth: number,
  maxDepth: number,
  attributeFlag: boolean,
  result: TreeNodeProps[] = []
) => {
  try {
    if (depth > maxDepth) return;
    if (tagName === "any") {
      result.push(node);
    } else {
      if (node.tagName === tagName) {
        if (attributeFlag) {
          if (atr === node.attributes) {
            result.push(node);
            
          }
        } else {
          result.push(node);
        }
      }
    }
    // if (node.children) {
    //   if (tagName === "any") {
    //     //*
    //     for (const child of node.children) {
    //       result.push(child);
    //     }
    //   } else {
    //     for (const child of node.children) {
    //       if (child.tagName === tagName) {
    //         if (attributeFlag) {
    //           if (atr === child.attributes) {
    //             result.push(child);
    //           }
    //         } else {
    //           result.push(child);
    //         }
    //       }
    //     }
    //   }
      if (node.type !== "text") {
        if(node.children){
        for (const child of node.children) {
          runDFSLocally(child, tagName, atr, depth + 1, maxDepth, attributeFlag);
        }
      
      }
    }
  } catch (error) {
    console.error("Error in runDFSLocally:", error);
    throw error;
  }
  return result;
};