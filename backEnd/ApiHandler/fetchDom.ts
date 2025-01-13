import { divRootToHtml, parseHTML } from "../HtmlManipulations";
import { injectHTML } from "../HtmlManipulations/injectHTML";
import { buildUniqueMap } from "../HtmlManipulations/setUniqueMap";
import { DomReqestBody } from "../types/ApiInterface";

export const fetchDom = async ({
  node,
  divRoot,
  pageContent,
}: DomReqestBody) => {
  const html = injectHTML(divRoot, pageContent);
  if (!html) {
    throw new Error("Could not inject the content");
  }
  const parsedHtml = parseHTML(html, node);
  const uniqueMap = buildUniqueMap(parsedHtml!!)
  console.log(JSON.parse(JSON.stringify(parsedHtml, null, 2)));
  const resultHtml = await divRootToHtml(parsedHtml!!);
  return { parsedHtml, resultHtml };
};
