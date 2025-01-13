import { customIncludes, customIndexOf, customSubstring } from "./customFn";
interface separatorResult{
    tagName:string;
    attribute:string;
    attributeFlag:boolean;
    position:number;
}
export const separatorFn = (headPath : string) : separatorResult => {
    let tagName = headPath;
    let attribute = "";
    let attributeFlag = false;
    let position = -1;
    if (customIncludes(headPath, "[")) {
        tagName = getTagName(headPath);
        if (headPath[customIndexOf(headPath, "[") + 1] === "@") {
          attributeFlag = true;
          attribute = getAttributes(headPath);
        } else {
          attributeFlag = false;
          position = getPosition(headPath);
        }
      }
      return {tagName,attribute,attributeFlag,position};
}


const getTagName = (text: string)=> {
    return customSubstring(text, 0, customIndexOf(text, "["));
  }
  
  const getAttributes=(text: string)=> {
    return customSubstring(
      text,
      customIndexOf(text, "[") + 2,
      customIndexOf(text, "]")
    );
  }
  
  const getPosition = (text: string)=> {
    return parseInt(
      customSubstring(
        text,
        customIndexOf(text, "[") + 1,
        customIndexOf(text, "]")
      )
    );
  }