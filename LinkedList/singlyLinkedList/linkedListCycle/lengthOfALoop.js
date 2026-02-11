import { SinglyLinkedList } from "../index.js";

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

list.tail.next = list.get(2);

const head = list.head;

/**
 * LeetCode Problem
 * Brute Force Solution - O(n) time, O(n) space
 */
// function loopLength(head) {
//   let map = new Map();
//   let curr = head;
//   let index = 0;

//   while (curr) {
//     if (map.has(curr)) {
//       return index - map.get(curr);
//     }

//     map.set(curr, index);
//     curr = curr.next;
//     index++;
//   }

//   return 0;
// }

/**
 * LeetCode Problem
 * Optimal Solution - Floyd's Tortoise and Hare Algorithm - O(n) time, O(1) space
 */
function loopLength(head) {
  let slow = head;
  let fast = head;

  // Step 1: Detect cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Step 2: Count loop length
      let count = 1;
      let curr = slow.next;

      while (curr !== slow) {
        count++;
        curr = curr.next;
      }

      return count;
    }
  }

  return 0; // no cycle
}

console.log(loopLength(head));

/**
 * Why Map is used not object?
 *
 * In JavaScript, objects can only have string or symbol keys.
 * If we use an object, the node references would be converted to strings, - [object Object] so multiple node collide
 * Size tracking - Object.keys(obj).length - O(n) - slow
 * Performace is Good
 *
 * Map, on the other hand, can have any type of key, including objects.
 * This allows us to use the node references themselves as keys, which is what we need to detect cycles.
 * Size tracking - map.size - O(1) - fast
 * Performance is better for frequent operations like insertion and deletion
 *
 * Lookup speed - Both are technically O(1); but Map are optimized for fequent insertion and deletion
 *
 * Use Map when keys are dynamic, keys are objects, frequent insert/delete, tracking visited nodes, caching, graph problems
 */
