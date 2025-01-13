import React, { useState, useEffect } from "react";
import axios from "axios";
import { TreeNode, TreeNodeProps } from "./assets/dataStructures";
import { useHtmlContent } from "./context/dynamicContext";
import { Homepage } from "./pages";
import Parser from "html-react-parser";
import { content } from "./DynamicContent";
import { set } from "react-hook-form";
import { api } from "./actions/apiSlice";
export const App: React.FC = () => {
  const { pageContent, htmlContent,setHtmlContent } = useHtmlContent();
  const [result, setResult] = useState<string>();

  const [tree,SetTree] = useState<TreeNodeProps>();
  const initialRoot: TreeNodeProps = {
    type: "element",
    tagName: "root",
    attributes: {},
    children: [],
  };
  const newRoot = new TreeNode(initialRoot);
  // useEffect(()=>{
  //   console.log("pageContent is:",pageContent)
  //   const data = {
  //     pageContent:pageContent,
  //     divRoot:content,
  //     node:newRoot,
  //   }
  //   api.DomCrawler("http://localhost:4000/dom").fetchTree(data).then((response) => {
  //     SetTree(response.data.tree);
  //     setHtmlContent(response.data.dom);
  //   }).catch((error:any) => {
  //     console.error(error);
  //   });
  //   // axios.post("http://localhost:4000/dom", data, {
  //   //   headers: { "Content-Type": "application/json" },
  //   // }).then((response) => {
  //   //   SetTree(response.data.tree);
  //   //   setResult(response.data.dom);
  //   //   setHtmlContent(response.data.dom);
  //   // }).catch((error) => {
  //   //   console.error(error);
  //   // });

  // },[])
  
  
  return (  
    <>
<Homepage/>    {/* {result &&<div>Injected HTML: {Parser(result)}</div>} */}
    </>
  )
};


///1. move the injectHtml to the backend -> you pass the initial content and the fullpageContent -> check
//2. you usee the fullPage content to construct the tree and then you return the content 
//  only to update the div root(for later)-> so that you only display the contents of the div root 
// --> you reduce the tree to div with id root using dfs
// you could strip down the path from the full page to recuce it to div with id root
// you useEffect on didMount of every refresh to load the initail content and the tree
//then you fetch the result given on the PRINT,COPY,SET 
//for COPY/RESET you need to update the dom
//for PRINT you return a simple array of nodes to be displayed


//set Tree -> the whole tree starting from the root->html... -> and setHtml -> updates the context to store the div id root contents


