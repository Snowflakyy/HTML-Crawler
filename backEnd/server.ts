import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  divRootToHtml,
} from "./HtmlManipulations";
import { readArchive, saveArchive } from "./compression/huffmanArchive";
import { domCopy,fetchDom,printDFS,setDFS } from "./ApiHandler";
import { DomCopyRequestBody, DomReqestBody, RunDFSRequestBody } from "./types/ApiInterface";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

app.post(
  "/run-dfs",
  async (req: Request<{}, {}, RunDFSRequestBody>, res: Response) => {
    const { tree, path, text } = req.body;

    try {
      let result: string;
      if (text) {
        result = await setDFS({ tree, path, text });
        res.json({ dom: result, tree: tree });
      } else {
        result = await printDFS({ tree, path });
        res.json({ dom: result });
      }
    } catch (err: any) {
      console.error("Error in /run-dfs endpoint:", err);
      res.status(500).json({ error: err.message });
    }
  }
);
app.post(
  "/dom-copy",
  async (req: Request<{}, {}, DomCopyRequestBody>, res: Response) => {
    const { tree, pathToCopy, pathToPaste } = req.body;

    try {
      const resultHTML = await domCopy({tree,pathToCopy,pathToPaste})
      if (resultHTML) res.json({ tree: tree, dom: resultHTML });
    } catch (err: any) {
      console.error("Error in /dom-copy endpoint:", err);
      res.status(500).json({ error: err.message });
    }
  }
);
//when the ap starts the get reuqest is invoked
app.post("/dom", async (req: Request<{}, {}, DomReqestBody>, res: Response) => {
  const { pageContent, divRoot, node } = req.body;
  try {
        const {parsedHtml,resultHtml} = await fetchDom({pageContent,divRoot,node})
      if (resultHtml) res.json({ tree: parsedHtml, dom: resultHtml });
    }
   catch (err: any) {
    console.error("Error in /dom endpoint:", err);
    res.status(500).json({ error: err.message });
  }
});
app.post("/dom-sample", async (req: Request, res: Response) => {
  const { tree } = req.body;
  if (tree) {
    const divHtml = await divRootToHtml(tree);
    saveArchive("text.txt", divHtml);
    res.json({ success: true });
  } else {
    const htmlResult = readArchive("text.txt");
    if (!htmlResult)
      throw new Error("Error with the deccompression of the file");
    res.json({ dom: htmlResult });
  }
});
app.listen(4000, () => console.log("Backend server running on port 4000"));
export { DomReqestBody };

