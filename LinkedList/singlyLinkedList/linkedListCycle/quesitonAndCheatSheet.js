/**
 * PATTERN 1: Detect cycle - (LeetCode 141)
 *
 * Use Floyd's Tortoise and Hare Algorithm
 *
 * TEMPLATE:
 * let slow = head;
 * let fast = head;
 *
 * while (fast && fast.next) {
 *   slow = slow.next;
 *   fast = fast.next.next;
 *
 *   if (slow === fast) return true;
 * }
 *
 * return false;
 */

/**
 * PATTERN 2 - FIND WHERE CYCLE STARTS - (LeetCode 142)
 *
 * STEPS:
 * After detecting a cycle:
 * Move one pointer to head,
 * Move both one step,
 * Meeting point = cycle start
 */

/**
 * PATTERN 3: LENGTH OF A LOOP
 *
 * STEPS:
 * After detecting a cycle:
 * Once slow and fast meet, walk around the loop and count
 *
 * Not always a direct LeetCode problem, often an interview follow-up
 */

/**
 * PATTERN 4: REMOVE CYCLE
 * break the loop safely
 *
 * STEPS:
 * Find cycle start
 * Traverse to node before start
 * Set next to null
 *
 * let start = detectCycle(head);
 * let curr = start;
 *
 * while (curr.next !== start) {
 *   curr = curr.next;
 * }
 *
 * curr.next = null;
 */

/**
 * PATTERN 5: FAST-SLOW MATHEMATICAL REASONING - Advanced pattern
 * Find duplicates in arrays, circular structures, etc.
 */

/**
 * MASTER SET OF CYCLE PROBLEMS
 *
 * If you solve these, you’re strong:
 * Must solve
 * 141 — Detect cycle
 * 142 — Cycle start
 * 287 — Find duplicate number - this is secretely a cycle detection problem
 * Bonus
 * 202 — Happy Number (cycle in math)
 * 457 — Circular Array Loop
 */

/**
 * INTEVIEW FLOW
 *
 * Q1: Detect cycle
 * Q2: Find cycle start
 * Q3: Find loop length
 * Q4: Explain why algorithm works
 */

/**
 * MENTAL MODEL CHEAT SHEET
 * When you see a cycle problem, think:
 * STEP 1: Use Floyd's Tortoise and Hare Algorithm
 * STEP 2: Do you want start? length? removal?
 */
