import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { TreeNodeProps } from "../assets/dataStructures";
interface FetchTreeData {
  pageContent: string;
  divRoot: string;
  node: TreeNodeProps;
}
interface PrintData {
  tree: TreeNodeProps;
  path: string;
}
interface SetData extends PrintData {
  text?: string;
}
interface CopyData {
  tree: TreeNodeProps;
  pathToCopy: string;
  pathToPaste: string;
}
interface SampleData {
  tree:TreeNodeProps | null;
}
export const api = {
  DomCrawler(url: string) {
    return {
      fetchTree: async (data: FetchTreeData): Promise<AxiosResponse<any>> => {
        return await axiosInstance.post(url, data);
      },
      print: async (data: PrintData): Promise<AxiosResponse<any>> => {
        return await axiosInstance.post(url, data);
      },
      copy: async (data: CopyData): Promise<AxiosResponse<any>> => {
        return await axiosInstance.post(url, data);
      },
      set: async (data: SetData): Promise<AxiosResponse<any>> => {
        return await axiosInstance.post(url, data);
      },
      load: async(data:SampleData) : Promise<AxiosResponse<any>> =>{
        return await axios.post(url,data)
      }
    };
  },
};
//fetch tree
//print
//copy
//set
