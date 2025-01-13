import { Worker } from "worker_threads";

import { runDFSLocally } from "./worker/runDFSLocally";
import { TreeNodeProps } from "./dataStructures";
import { separatorFn } from "./cutstomFn/separatorFn";
let attributeFlag: boolean = false;

// function getTagName(text: string) {
//   return customSubstring(text, 0, customIndexOf(text, "["));
// }

// function getAttributes(text: string) {
//   return customSubstring(
//     text,
//     customIndexOf(text, "[") + 2,
//     customIndexOf(text, "]")
//   );
// }

// function getPosition(text: string) {
//   return parseInt(
//     customSubstring(
//       text,
//       customIndexOf(text, "[") + 1,
//       customIndexOf(text, "]")
//     )
//   );
// }

async function runDFSInWorker(
  node: TreeNodeProps,
  tagName: string,
  atr: string,
  depth: number,
  maxDepth: number
): Promise<TreeNodeProps> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(require.resolve("./worker/worker"), {
      workerData: { node, tagName, atr, depth, maxDepth },
    });
    worker.on("message", (data) => resolve(data));
    worker.on("error", reject);
    worker.on("exit", (code: any) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function paralllelDFS(
  node: TreeNodeProps,
  tagName: string,
  atr: string,
  depth: number,
  maxDepth: number,
  result: TreeNodeProps[] | undefined
) {
  if (
    depth >= maxDepth ||
    typeof node.children === undefined ||
    node.children?.length === 0
  ) {
    result = runDFSLocally(node, tagName, atr, depth, maxDepth, attributeFlag);
    return result;
  }
  const promises = node.children?.map((child: TreeNodeProps) =>
    runDFSInWorker(child, tagName, atr, depth + 1, maxDepth)
  );
  if (promises !== undefined) {
    const results = await Promise.all(promises);
    if (results) return results.flat();
  }
  return;
}

async function findNodeByPath(
  nodes: TreeNodeProps[],
  path: string[],
  depth: number = 0,
  maxDepth: number
): Promise<TreeNodeProps | TreeNodeProps[] | undefined> {
  // let position = -1;
  // let tagName = path[0];
  // atr = "";
  // attributeFlag = false;
  let result: TreeNodeProps[] = [];
  // if (customIncludes(path[0], "[")) {
  //   tagName = getTagName(path[0]);
  //   if (path[0][customIndexOf(path[0], "[") + 1] === "@") {
  //     attributeFlag = true;
  //     atr = getAttributes(path[0]);
  //   } else {
  //     attributeFlag = false;
  //     position = getPosition(path[0]);
  //   }
  // }
  let { tagName, attribute, attributeFlag, position } = separatorFn(path[0]);
    //html/body/div/p
  if (tagName === "*") tagName = "any";
  if (path.length === 1) {
    for (const node of nodes) {
      const partialResult = await paralllelDFS(
        node,
        tagName,
        attribute,
        depth,
        maxDepth,
        result
      );
      result = result.concat(partialResult ?? []);
    }
    return position !== -1 ? result[position] : result;
  }

  path.shift();

  let nextNodes: TreeNodeProps[] = [];
  for (const node of nodes) {
    if (node.children) {
      for (const child of node.children) {
        if (tagName === "any") {
          nextNodes.push(child);
        }
        if (child.tagName === tagName) {
          if (attributeFlag) {
            if (attribute === child.attributes) {
              nextNodes.push(child);
            }
          } else {
            nextNodes.push(child);
          }
        }
      }
    }
  }
  return findNodeByPath(
    position !== -1 ? [nextNodes[position]] : nextNodes,
    path,
    depth + 1,
    maxDepth
  );
}

function getRelativePath(node: TreeNodeProps, pathArray: string[]) {
  let maxDepth = pathArray.length;

  let nodes = [node];
  return findNodeByPath(nodes, pathArray, 0, maxDepth);
}

export async function runDFSHandler(node: TreeNodeProps, pathArray: string[]) {
  try {
    return await getRelativePath(node, pathArray);
  } catch (error) {
    console.error("Error in runDFSHandler:", error);
    throw error;
  }
}
