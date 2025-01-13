import { divRootToHtml, pasteNodeInTree, pathArray } from "../HtmlManipulations";
import { runDFSHandler } from "../paralellDFS";
import { DomReqestBody } from "../server";
import { DomCopyRequestBody } from "../types/ApiInterface";

export const domCopy = async ({
  tree,
  pathToCopy,
  pathToPaste,
}: DomCopyRequestBody) => {
  const nodeToCopy = await runDFSHandler(tree, pathArray(pathToCopy));
  const nodeToPaste = await runDFSHandler(tree, pathArray(pathToPaste));

  const copyTarget = Array.isArray(nodeToCopy) ? nodeToCopy[0] : nodeToCopy;
  // const pasteTarget = Array.isArray(nodeToPaste) ? nodeToPaste[0] : nodeToPaste;
  if (!copyTarget) {
    console.error("Could not find or paste node");
  }
  let didPaste: boolean = false;
        if (nodeToPaste) {
          let totalCount: number;
          let parseCount = 1;
          if (Array.isArray(nodeToPaste)) {
            parseCount = nodeToPaste.length;
          }
          totalCount = pasteNodeInTree(
            tree,
            pathArray(pathToPaste),
            copyTarget!!,
            parseCount
          );
          if (totalCount === parseCount) {
            didPaste = true;
          }
  
          if (!didPaste) {
            throw new Error("Could not set the Tree");
          }
        }
        const resultHTML = await divRootToHtml(tree);
        return resultHTML
};
