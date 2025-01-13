import { TreeNode } from "../dataStructures";
import {
  divRootToHtml,
  pathArray,
  updateTextInTree,
} from "../HtmlManipulations";
import { runDFSHandler } from "../paralellDFS";
import { SetDFSRequestBody } from "../types/ApiInterface";

export const setDFS = async ({
  tree,
  path,
  text,
}: SetDFSRequestBody): Promise<any> => {
  if (text === undefined) text = "";
  const result = await runDFSHandler(tree, pathArray(path));
  let didPaste = false;
  if (result) {
    let totalCount: number;
    let updateCount = 1;
    if (Array.isArray(result)) updateCount = result.length;

    totalCount = updateTextInTree(tree, pathArray(path), text, updateCount);

    if (totalCount === updateCount) {
      didPaste = true;
    }
  }
  if (!didPaste) {
    console.error("Could not paste the text");
  }
  const html = divRootToHtml(tree as TreeNode);
  return html;
};
