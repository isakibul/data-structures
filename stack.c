#include <stdio.h>
#include <stdlib.h>

#define MAX 10

int count = 0;

// creating a stack
struct stack {
  int items[MAX];
  int top;
};
typedef struct stack st;

void createEmptyStack(st *s) {
  s->top = -1;
}

// check if the stack is full
int isfull(st *s) {
  if (s->top == MAX - 1)
    return 1;
  else
    return 0;
}

// check if the stack is empty
int isempty(st *s) {
  if (s->top == -1)
    return 1;
  else
    return 0;
}

// add elements into stack
void push(st *s, int newItem) {
  if (isfull(s)) {
    printf("Stack is full");
    printf("\n");
  } else {
    s->top++;
    s->items[s->top] = newItem;
  }
  count++;
}

// remove element from stack
void pop(st *s) {
  if (isempty(s)) {
    printf("\n Stack is empty \n");
  } else {
    printf("Item popped = %d", s->items[s->top]);
    s->top--;
  }
  count--;
  printf("\n");
}

// print elements of stack
void printStack(st *s) {
  printf("Stack: ");
  for (int i = 0; i < count; i++) {
    printf("%d ", s->items[i]);
  }
  printf("\n");
}

// driver code
int main() {
  st *s = malloc(sizeof(st));

  createEmptyStack(s);

  push(s, 1);
  push(s, 2);
  push(s, 3);
  push(s, 5);
  push(s, 6);
  push(s, 7);
  push(s, 8);
  push(s, 9);
  push(s, 10);
  push(s, 11);

  printStack(s);

  pop(s);

  printf("\nAfter popping out\n");
  printStack(s);
}