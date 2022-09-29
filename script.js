import { Node } from "./Node.js";

let node1 = new Node('A');
let node2 = new Node('B');

node1.next = node2;

console.log(node1.next);