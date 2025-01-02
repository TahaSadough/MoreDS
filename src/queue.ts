/**
 * Queue data structure implementation using FIFO (First In First Out) principle.
 * Elements are added to the end and removed from the front of the queue.
 * @template T The type of elements in the stack
 */
export class Queue<T> {
  /** @private */
  #items: T[];

  /**
   * Creates a new empty queue.
   */
  constructor() {
    this.#items = [];
  }

  /**
   * Returns the current number of elements in the queue.
   * @returns {number} The number of elements in the queue
   */
  size(): number {
    return this.#items.length;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue has no elements, false otherwise
   */
  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  /**
   * Adds a new element to the end of the queue.
   * @param {T} value - The value to add to the queue
   * @throws {Error} When the value is undefined
   */
  enqueue(value: T): boolean {
    if (value === undefined) throw new Error("Value cannot be undefined");
    this.#items.push(value);
    return true;
  }

  /**
   * Removes and returns the element from the front of the queue.
   * @returns {T} The first element in the queue
   * @throws {Error} When attempting to dequeue from an empty queue
   */
  dequeue(): T {
    if (this.isEmpty()) throw new Error("Cannot dequeue from empty queue");
    return this.#items.shift()!;
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns {T} The first element in the queue
   * @throws {Error} When the queue is empty
   */
  peek(): T {
    if (this.isEmpty()) throw new Error("Cannot peek empty queue");
    return this.#items[0];
  }

  /**
   * Removes all elements from the queue.
   * @returns {number} The new size of the queue (0)
   */
  clear(): number {
    this.#items = [];
    return 0;
  }

  /**
   * Returns all elements in the queue as an array.
   * @returns {Array} An array containing all elements in the queue
   */
  getAll(): T[] {
    return this.#items;
  }
}

export default Queue;
