import { TreeNode } from "../dataStructures";
import { nodeToHTML, pathArray } from "../HtmlManipulations";
import { runDFSHandler } from "../paralellDFS";
import { RunDFSRequestBody } from "../types/ApiInterface";

export const printDFS = async ({
  tree,
  path,
}: RunDFSRequestBody): Promise<string> => {
  const result = await runDFSHandler(tree, pathArray(path));
  let htmlOutput: string;
  if (Array.isArray(result)) {
    htmlOutput = result.map((node) => nodeToHTML(node as TreeNode)).join("");
  } else {
    htmlOutput = nodeToHTML(result as TreeNode);
  }
  return htmlOutput;
};