import { TreeNode } from "../dataStructures";
import { nodeToHTML, pathArray } from "../HtmlManipulations";
import { runDFSHandler } from "../paralellDFS";
import { buildUniqueMap, TagUniqueMap } from "./setUniqueMap";
    interface divRootReturnProps{
        uniqueMap:TagUniqueMap;
        divRoot:string;
    }
export const divRootToHtml =async (parsedHtml:TreeNode):Promise<string> =>{

     const divRootNode = (await runDFSHandler(
          parsedHtml,
          pathArray(`//html/body/div`)
        )) as TreeNode[];
        const uniqueMap = buildUniqueMap(divRootNode[0])
        console.log("uniqueMap",uniqueMap)
      const divRoot = divRootNode[0]
      return nodeToHTML(divRoot);
    
}