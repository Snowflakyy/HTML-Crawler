import { workerData, parentPort } from "worker_threads";
import { runDFSLocally } from "./runDFSLocally";

const { node, tagName, atr, depth, maxDepth } = workerData;
const attributeFlag = !!atr;

try {
  const result = runDFSLocally(
    node,
    tagName,
    atr,
    depth,
    maxDepth,
    attributeFlag
  );
  parentPort?.postMessage(result);
} catch (error: any) {
  console.error("Error in worker:", error);
  parentPort?.postMessage({ error: error.message });
}
