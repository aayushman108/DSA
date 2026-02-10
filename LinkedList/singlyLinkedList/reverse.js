import { Node, SinglyLinkedList } from "./index.js";

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
// console.log("REVERSE PRINT:");
// list.reverse().print();

const head = list.head;

// Brute force solution 1 - O(n) time, O(n) space
// var reverseList = function (head) {
//   let arr = [];
//   let curr = head;

//   // Step 1: Store values
//   while (curr) {
//     arr.push(curr.value);
//     curr = curr.next;
//   }

//   // Step 2: Overwrite in reverse
//   curr = head;
//   let i = arr.length - 1;

//   while (curr) {
//     curr.value = arr[i];
//     i--;
//     curr = curr.next;
//   }

//   return head;
// };

// console.log(list.toArray(reverseList(head)).join(" -> ") + " -> null");

// Brute Force Method 2: Better - Build a New Reversed List - O(n) time, O(n) space
// var reverseList2 = function (head) {
//   let newHead = null;
//   let curr = head;

//   while (curr) {
//     let newNode = new Node(curr.value);
//     newNode.next = newHead;
//     newHead = newNode;
//     curr = curr.next;
//   }

//   return newHead;
// };

// console.log(list.toArray(reverseList2(head)).join(" -> ") + " -> null");

// Optimal Solution - O(n) time, O(1) space
// var reverseList = function (head) {
//   let prev = null;
//   let curr = head;

//   while (curr) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// };

// console.log(list.toArray(reverseList(head)).join(" -> ") + " -> null");

// Recursive Solution - O(n) time, O(n) space (due to call stack)
var reverseListRecursive = function (head) {
  if (!head || !head.next) return head;

  let newHead = reverseListRecursive(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

console.log(list.toArray(reverseListRecursive(head)).join(" -> ") + " -> null");
