import * as fs from "fs"

interface FrequencyMap{
    [char:string]:number;
}
const buildFrequencyMap = (str:string):FrequencyMap=>{
    const freqMap : FrequencyMap ={};
    for(const ch of str){
        freqMap[ch] = (freqMap[ch] || 0) + 1;
    }
    return freqMap;
}
interface HuffmanNodeProps{
    char?:string;
    freq:number;
    left?:HuffmanNode | null;
    right?:HuffmanNode | null;
}
class HuffmanNode implements HuffmanNodeProps{
    char?: string | undefined;
    freq: number;
    left?: HuffmanNode | null | undefined;
    right?: HuffmanNode | null | undefined;
    constructor({char,freq,left=null,right=null}:HuffmanNodeProps){
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;

    }
}

const buildHuffmanTree = (freqMap:FrequencyMap):HuffmanNode=>{
    const nodes = Object.keys(freqMap).map(char=>new HuffmanNode({char,freq:freqMap[char]}));
    while(nodes.length>1){
        nodes.sort((a,b)=>a.freq - b.freq);
        const left = nodes.shift() as HuffmanNode;
        const right = nodes.shift() as HuffmanNode;
        const newNode = new HuffmanNode({freq:left.freq+right.freq,left,right});
        nodes.push(newNode);
    }
    return nodes[0];
}

const buildCodeMap =(root:HuffmanNode):{[char:string]:string}=>{
    const codeMap:{[char:string]:string} = {};
    const dfs = (node:HuffmanNode,code:string)=>{
        if(node.char){
            codeMap[node.char] = code;
            return;
        }
        if(node.left){
            dfs(node.left,code+"0");
        }
        if(node.right){
            dfs(node.right,code+"1");
        }
    }
    dfs(root,"");
    return codeMap;
}

const encode = (str:string,codeMap:{[char:string]:string}):string=>{
    return str.split("").map(ch=>codeMap[ch]).join("");
}
const decode = (str:string,root:HuffmanNode):string=>{
    let result = "";
    let node = root;
    for(const bit of str){
        if(bit === "0"){
            node = node.left as HuffmanNode;
        }else{
            node = node.right as HuffmanNode;
        }
        if(node.char){
            result += node.char;
            node = root;
        }
    }
    return result;
}

const saveArchive = (filepath:string,htmlData:string)=>{
    const freqMap = buildFrequencyMap(htmlData);
    const root = buildHuffmanTree(freqMap);
    const codeMap = buildCodeMap(root);
    const encodedData = encode(htmlData,codeMap);
    const archive = JSON.stringify({root,encodedData});
    fs.writeFileSync(filepath,archive);
    console.log("file saved-> mazna");
}

const readArchive = (filepath:string):string=>{
    const archive = fs.readFileSync(filepath,"utf-8");
    const {root,encodedData} = JSON.parse(archive);
    const htmlData = decode(encodedData,root);
    return htmlData;
}

export {saveArchive,readArchive};

