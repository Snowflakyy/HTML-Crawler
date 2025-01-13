import { customIncludes, customIndexOf, customSubstring, customTrim, isTagSelfClosed, isValidTagName } from "../cutstomFn";
import { Stack, TreeNode } from "../dataStructures";


export const parseHTML = (html: string, root: TreeNode) => {
    if(customIncludes(html,"lt") || customIncludes(html,"gt")){
      return null;
    }
  const stack = new Stack();
  stack.push(root);
  let currentText = "";
  let isClosed = false;
  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") {
      if (customSubstring(html, i + 1, i + 4) === "!--") {
        // Skip the comment
        const commentEnd = customIndexOf(html, "-->", i + 4);
        if (commentEnd === -1) {
          throw new Error("HTML parsing error: Comment not properly closed");
        }
        i = commentEnd + 2; // Move index to the end of the comment
        continue; // Continue parsing after the comment
      }
      if (customTrim(currentText)) {
        //removing the whitespaces
        stack.peek()?.children.push(
          new TreeNode({
            type: "text",
            tagName: null,
            children: [],
            attributes: currentText,
          })
        );
        currentText = "";
      }

      if (html[i + 1] === "/") {
        let tagName = "";
        i += 2;
        while (html[i] !== ">") {
          tagName += html[i++];
        }
        if (stack.peek()?.tagName !== tagName) {
          throw new Error(
            `Tag mismatch: Expected </${
              stack.peek()?.tagName
            }> but found </${tagName}>`
          );
        }
        stack.pop();
      } else {
        isClosed = false;
        let tagName = "";
        i++;
        while (html[i] !== ">" && html[i] !== " ") {
          tagName += html[i];
          i++;
        }
        let attribute = "";
        while (html[i] !== ">") {
          attribute += html[i];
          i++;
        }
        //must handle an array of attributes
        attribute = customTrim(attribute);
        if (!isTagSelfClosed(tagName)) {
          if (!isValidTagName(tagName)) {
            throw new Error(`Invalid tag name: <${tagName}>`);
          }
          const newNode = new TreeNode({
            type: "element",
            tagName: tagName,
            attributes: attribute,
          });
          stack.peek()?.children.push(newNode);
          stack.push(newNode);
        } else {
          const newNode = new TreeNode({
            type: "element",
            tagName: tagName,
            attributes: attribute,
          });
          stack.peek()?.children.push(newNode);
          isClosed = true;
        }
      }
    } else {
      currentText += html[i];
    }
  }
  
  if (stack.size() < 1) {
    throw new Error("HTML parsing error:Tag's not properly closed");
  }
  return root;
};

