export interface TreeNodeProps {
  type: string;
  tagName: string | null;
  attributes?: any;
  children?: TreeNode[];
}
 export class TreeNode implements TreeNodeProps {
  type: string;
  tagName: string | null;
  attributes: any;
  children: TreeNode[];

  constructor({ type, tagName, attributes, children = [] }: TreeNodeProps) {
    this.type = type;
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;
  }
}
export  class Stack {
  #items :TreeNode[];
  #top :number;
  constructor() {
    this.#items = [];
    this.#top = -1;
  }
  push(element : TreeNode) {
    this.#top++;
    this.#items[this.#top] = element;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items[this.#top--];
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items[this.#top] ;
  }
  isEmpty() {
    return this.#top === -1;
  }
  size() {
    return this.#items.length;
  }
  clear() {
    this.#items = [];
    this.#top = -1;
  }
}
