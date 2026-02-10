import { Node, SinglyLinkedList } from "./index.js";

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

const head = list.head;

// Brute force solution 1 - O(n) time, O(n) space -> extra memory
// var hasCycle = function (head) {
//   let visited = new Set();
//   let curr = head;

//   while (curr) {
//     if (visited.has(curr)) {
//       return true;
//     }

//     visited.add(curr);
//     curr = curr.next;
//   }

//   return false;
// };

// console.log(hasCycle(head));

// Optimal Solution - Floyd's Tortoise and Hare Algorithm - O(n) time, O(1) space
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

console.log(hasCycle(head));
