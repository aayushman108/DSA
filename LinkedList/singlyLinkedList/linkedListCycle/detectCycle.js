import { SinglyLinkedList } from "../index.js";

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

/**
 * When to use array and when to use set
 *
 * Use Array
 * - Order matters
 * - Access by index
 * - Duplicate values are allowed
 * - Problem - checking existence is slow - arr.includes(x) or arr.indexOf(x) is O(n)
 * - Memory usage is less
 * - Commonly used in lists, stacks, queues, sequences
 *
 * Use Set
 * - Order doesn't matter
 * - Access by value
 * - No duplicate values allowed
 * - Checking existence is fast - set.has(x) is O(1)
 * - Memory usage is more
 * - Commonly used in graph traversal, cycle detection, caching, deduplication
 */
