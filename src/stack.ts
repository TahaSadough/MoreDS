/**
 * A class representing a stack data structure.
 * LIFO (Last In First Out)
 * @template T The type of elements in the stack
 */
export class Stack<T> {
  #items: T[];

  /**
   * Creates an instance of Stack.
   */
  constructor() {
    this.#items = [];
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The size of the stack.
   */
  size(): number {
    return this.#items.length;
  }

  /**
   * Checks if the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  /**
   * Adds a new element to the top of the stack.
   * @param value The value to be added to the stack.
   * @returns True if the value was added successfully.
   * @throws {Error} If the value is undefined.
   */
  push(value: T): boolean {
    if (value === undefined) throw new Error("Value cannot be undefined");
    this.#items.push(value);
    return true;
  }

  /**
   * Removes the top element from the stack and returns it.
   * @returns The removed element.
   * @throws {Error} If the stack is empty.
   */
  pop(): T {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.#items.pop()!;
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack.
   * @throws {Error} If the stack is empty.
   */
  peek(): T {
    if (this.isEmpty()) throw new Error("Cannot peek from empty stack");
    return this.#items[this.#items.length - 1];
  }

  /**
   * Removes all elements from the stack.
   * @returns The new size of the stack (0).
   */
  clear(): number {
    this.#items = [];
    return 0;
  }

  /**
   * Returns all elements in the stack.
   * @returns An array of all elements in the stack.
   * @throws {Error} If the stack is empty.
   */
  getAll(): T[] {
    if (this.isEmpty()) throw new Error("Cannot get all of empty stack");
    return this.#items.reverse();
  }
}
