const Stack = require('../src/Stack');

describe('Stack solution', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can be created', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push item', () => {
    stack.push('x');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('x');
  });

  it('can pop item', () => {
    stack.push('y');
    stack.pop();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can only pop last item', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();

    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('b');
  });

  it('cannot pop without item', () => {
    expect(() => {
      stack.pop();
    }).toThrow(Error);

    expect(() => {
      stack.pop();
    }).toThrow('No item to pop');
  });
});