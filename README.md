# HTML-Crawler 🕷🕸
### FullStack webapp written in React with TypeScript and Express
## A full-fledged webapp that crawl the DOM of an HTML page
- uses multithreaded DFS to traverse the tree
  * traverses also taking into account any attributes embedded into the tag
- has three major commands : print,set,copy
  * print - prints a node/nodes onto the page (e.g //html/body/div[@id="root"/p[1] prints the contents of the second paragraph available)
  * copy - copies the contents of one node onto another(e.g //html/body/div[@id="root"/p[1] onto //html/body/div[@id="root"]/table/tbody/tr/td)
  * set - sets the contents of a given tag to a given text attribute
## Data Structure
### Every TreeNode consists of:
- type {element,text}
- tagName
- attributes
- children
  * array of type TreeNode

### React App runs on "http://localhost:3001"
### BackEnd runs on "http://localhost:4000"

## Bugs to be Fixed:
### Implementation of transformHTML function
- convert element from vanilla Html to custom TypeScript React components
- styled with theme using styled-components
  
