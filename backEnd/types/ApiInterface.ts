import { TreeNode } from "../dataStructures";

export interface RunDFSRequestBody {
  tree: TreeNode; // Or replace `any` with your actual TreeNode type
  path: string;
  text?: string;
}
export interface SetDFSRequestBody extends RunDFSRequestBody {
  text: string;
}
export interface DomCopyRequestBody {
  tree: TreeNode;
  pathToCopy: string;
  pathToPaste: string;
}
export interface DomReqestBody {
  pageContent: string;
  divRoot: string;
  node: TreeNode;
}