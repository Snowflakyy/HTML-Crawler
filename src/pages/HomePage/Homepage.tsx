import React, { useEffect, useState } from "react";
import {H1,H2,H3,H4,H5,H6,P,A,Image,Input,TableContainer,TableRow,TableCell,Button,DivContainer, InputContainer, ButtonContainer} from "./elements";
import { api } from "../../actions/apiSlice";
import { TreeNode, TreeNodeProps } from "../../assets/dataStructures";
import { useHtmlContent } from "../../context/dynamicContext";
import Parser from "html-react-parser";

//define all the components possible and then append an element accordingly
// export const Homepage = () => {
//   return (
//     <>
//     <S.PTag>Text1</S.PTag>
//     <S.PTag>Text2</S.PTag>
//     {/* <S.PTag id="p3"></S.PTag> */}
//     <S.DivContainer>
//       <div>Text4</div>
//       <S.PTag>Text5</S.PTag>
//     </S.DivContainer>
//     <S.TableContainer>
//       <S.TableRow>
//         <S.TableCell>11</S.TableCell>
//       </S.TableRow>
//       <S.TableRow>
//         <S.TableCell>22</S.TableCell>
//       </S.TableRow>
//     </S.TableContainer>
//     <S.TableContainer id="table2">
//       <S.TableRow>
//         <S.TableCell>33</S.TableCell>
//       </S.TableRow>
//       <S.TableRow>
//         <S.TableCell>44</S.TableCell>
//       </S.TableRow>
//     </S.TableContainer>
//     {/* <S.ATag href="http://https://www.w3schools.com">w3schools</S.ATag> */}
//     <S.img src="img_girl.bmp" />
//     </>
// )
// }

export const Homepage = () => {
  const { pageContent, htmlContent, setHtmlContent } = useHtmlContent();
  const [result, setResult] = useState<string>();
  const [html, setHtml] = useState<string>("");
  const [pathValue, setPathValue] = useState<string>("");
  const [pathPaste, setPathPaste] = useState<string>("");
  const [textToSet, setTextToSet] = useState<string>("");
  const [tree, SetTree] = useState<TreeNodeProps>();
  const initialRoot: TreeNodeProps = {
    type: "element",
    tagName: "root",
    attributes: {},
    children: [],
  };
  const newRoot = new TreeNode(initialRoot);
  useEffect(() => {
    const data = {
      pageContent: pageContent,
      divRoot: htmlContent,
      node: newRoot,
    };
    api
      .DomCrawler("http://localhost:4000/dom")
      .fetchTree(data)
      .then((response) => {
        SetTree(response.data.tree);
        setHtmlContent(response.data.dom);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);
  const executePrint = (path: string) => {
    const data = {
      tree: tree!,
      path: path,
    };
    if (tree) {
      api
        .DomCrawler("http://localhost:4000/run-dfs")
        .print(data)
        .then((response) => {
          setResult(response.data.dom);
        });
    }
  };

  const executeSet = (path: string, text: string) => {
    const data = {
      tree: tree!,
      path: path,
      text: text,
    };
    if (tree) {
      api
        .DomCrawler("http://localhost:4000/run-dfs")
        .set(data)
        .then((response) => {
          SetTree(response.data.tree);
          setHtmlContent(response.data.dom);
        });
    }
  };
  const executeCopy = (pathToCopy: string, pathToPaste: string) => {
    const data = {
      tree: tree!,
      pathToCopy: pathToCopy,
      pathToPaste: pathToPaste,
    };
    api
      .DomCrawler("http://localhost:4000/dom-copy")
      .copy(data)
      .then((response) => {
        SetTree(response.data.tree);
        setHtmlContent(response.data.dom);
      });
  };
  const executeLoad = () =>{
    const data = {
      tree:null
    }
    api.DomCrawler("http://localhost:4000/dom-sample").load(data).then((response)=>{
      setHtmlContent(response.data.dom);
    })
  }
  const executeSave = () =>{
    const data = {
      tree:tree!!
    }
    api.DomCrawler("http://localhost:4000/dom-sample").load(data).then((response)=>{
    })
  }

  return (
    <>
      {Parser(htmlContent)}
      <DivContainer>
        <InputContainer>
          <Input
            onChange={(e: any) => setPathValue(e.target.value)}
            placeholder="Enter path"
          />
          <Input
            onChange={(e: any) => setPathPaste(e.target.value)}
            placeholder="Enter path to Paste"
          />
          <Input
            onChange={(e: any) => setTextToSet(e.target.value)}
            placeholder="Enter text"
          />
          <ButtonContainer>
            <Button
              onClick={() => {
                executePrint(pathValue);
              }}
              variant="secondary"
            >
              PRINT
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                executeSet(pathValue, textToSet);
              }}
            >
              SET
            </Button>
            <Button
              onClick={() => {
                executeCopy(pathValue, pathPaste);
              }}
              variant="primary"
            >
              COPY
            </Button>
            <Button
              onClick={() => {
                executeLoad();
              }}
              variant="primary"
            >
              Load Sample
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                executeSave();
              }}
            >
              Save
            </Button>
          </ButtonContainer>
        </InputContainer>
        <P>{pathValue}</P>
        <DivContainer>{result && Parser(result)}</DivContainer>
      </DivContainer>
    </>
  );
};
