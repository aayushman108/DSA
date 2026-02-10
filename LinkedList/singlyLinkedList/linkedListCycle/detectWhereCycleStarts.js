import { SinglyLinkedList } from "../index.js";

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

const head = list.head;

/**
 * LeetCode Problem: 142. Linked List Cycle II
 * Optimal Solution - Floyd's Tortoise and Hare Algorithm - O(n) time, O(1) space
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let ptr = head;

      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }

      return ptr;
    }
  }

  return null;
};

console.log(detectCycle(head));
