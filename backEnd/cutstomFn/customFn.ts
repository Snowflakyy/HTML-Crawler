import { selfClosingTags, validTagNames } from "../../src/assets/tagLists";

/**
 * Interface representing a tree node in the HTML structure.
 */
interface TreeNode {
  type: "text" | "element";
  tagName: string | null;
  attributes: Record<string, string>;
  children: TreeNode[] | string;
}

/**
 * Reads an HTML file from the given file path.
 * @param filePath - The path to the HTML file.
 * @returns The content of the HTML file as a string.
 */
 

/**
 * Prints the tree node structure with indentation.
 * @param node - The tree node to print.
 * @param indent - The indentation level (default is 0).
 */
function printNode(node: TreeNode, indent: number = 0): void {
  const indentation = " ".repeat(indent);
  if (node.type === "text") {
    console.log(
      `${indentation}Node: ${node.type}, Content: "${node.children}"`
    );
  } else {
    console.log(`${indentation}Node: ${node.type}, Tag: ${node.tagName}`);
    if (Array.isArray(node.children)) {
      node.children.forEach((child: TreeNode) => {
        printNode(child, indent + 2);
      });
    }
  }
}

/**
 * Checks if a character is whitespace.
 * @param char - The character to check.
 * @returns `true` if the character is whitespace; otherwise, `false`.
 */
function isWhitespace(char: string): boolean {
  return char === " " || char === "\t" || char === "\n" || char === "\r";
}

/**
 * Trims whitespace or a specified symbol from both ends of a string.
 * @param str - The string to trim.
 * @param symbol - The symbol to trim (optional).
 * @returns The trimmed string.
 */
function customTrim(str: string, symbol?: string): string {
  let start = 0;
  let end = str.length - 1;

  if (symbol === undefined) {
    while (start <= end && isWhitespace(str[start])) {
      start++;
    }

    while (end >= start && isWhitespace(str[end])) {
      end--;
    }
  } else {
    while (start < end && str[start] === symbol) {
      start++;
    }

    while (end > start && str[end] === symbol) {
      end--;
    }
  }

  const trimmed: string = customSubstring(str, start, end + 1);
  return trimmed;
}

/**
 * Extracts a substring from a string between two indices.
 * @param str - The original string.
 * @param start - The starting index.
 * @param end - The ending index (optional).
 * @returns The extracted substring.
 */
function customSubstring(str: string, start: number, end?: number): string {
  if (end === undefined) {
    end = str.length;
  }

  if (start < 0) {
    start = Math.max(str.length + start, 0);
  }

  if (end < 0) {
    end = Math.max(str.length + end, 0);
  }

  start = Math.min(Math.max(start, 0), str.length);
  end = Math.min(Math.max(end, 0), str.length);

  const result: string[] = [];
  for (let i = start; i < end; i++) {
    result.push(str[i]);
  }

  return result.join("");
}

/**
 * Splits a string into an array of substrings using a specified separator.
 * @param str - The string to split.
 * @param separator - The separator string.
 * @returns An array of substrings.
 */
function customSplit(str: string, separator: string): string[] {
  const result: string[] = [];
  let startIndex: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (customSubstring(str, i, i + separator.length) === separator) {
      result.push(customSubstring(str, startIndex, i));
      startIndex = i + separator.length;
      i = startIndex - 1;
    }
  }

  result.push(customSubstring(str, startIndex)); // Add the remaining part after the last separator

  return result;
}

function customSlice(str: string[], startIndex:number, endIndex:number): string[]{
    const result : string[] = [];
    for(let i=startIndex;i<endIndex;i++){
        result.push(str[i])
    }
    return result;
}
/**
 * Concatenates two arrays into a new array.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns A new array containing elements from both arrays.
 */
function customConcat(arr1: any[], arr2: any[]): any[] {
  const result: any[] = [];

  // Copy elements from the first array
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  // Copy elements from the second array
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}

/**
 * Replaces all occurrences of a search string with a replacement string.
 * @param str - The original string.
 * @param search - The string to search for.
 * @param replacement - The string to replace with.
 * @returns The modified string with replacements.
 */
function customReplace(str: string, search: string, replacement: string): string {
  const parts: string[] = customSplit(str, search);
  const result: string = parts.join(replacement);
  return result;
}

/**
 * Finds the index of the first occurrence of a search string in a string.
 * @param str - The string to search within.
 * @param search - The string to search for.
 * @param fromIndex - The index to start searching from (default is 0).
 * @returns The index of the first occurrence, or -1 if not found.
 */
function customIndexOf(str: string, search: string, fromIndex: number = 0): number {
  let startIndex: number = Math.max(fromIndex, 0);

  for (let i = startIndex; i < str.length - search.length + 1; i++) {
    // Check if the substring starting at index i matches the search string
    let found: boolean = true;
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i; // Return the index if the substring is found
    }
  }

  return -1; // Return -1 if the substring is not found
}

/**
 * Determines whether a string contains a specified substring starting from a given index.
 * @param str - The string to search within.
 * @param search - The substring to search for.
 * @param startIndex - The index to start searching from (default is 0).
 * @returns `true` if the substring is found; otherwise, `false`.
 */
function customIncludes(str: string, search: string, startIndex: number = 0): boolean {
  // Use the customIndexOf function to check if the search string exists in the original string
  return customIndexOf(str, search, startIndex) !== -1;
}


/**
 * Checks if a given tag name is valid based on predefined valid tag names.
  * @param tagName - The name of the tag to validate.
 * @returns True if valid, else false.
 */
 function isValidTagName(tagName: string): boolean {
  return validTagNames.includes(tagName.toLowerCase());
}

/**
 * Checks if the given tag name is self-closing.
 * @param tagName - The name of the tag to check.
 * @returns True if self-closing, else false.
 */
 function isTagSelfClosed(tagName: string): boolean {
  return selfClosingTags.includes(tagName.toLowerCase());
}



export {
  customTrim,
  customSplit,
  isValidTagName,
  isTagSelfClosed,
  printNode,
  customConcat,
  customSubstring,
  customSlice,
  customReplace,
  customIndexOf,
  customIncludes,
};
