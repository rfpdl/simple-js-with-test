class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  pop() {
    if(this.top === -1) {
      throw new Error('No item to pop');
    }

    delete this.items[this.top];
    this.top -= 1;
  }

  get peek() {
    return this.items[this.top];
  }
}

module.exports = Stack;