#include<stdio.h>
#include<stdlib.h>

#define MAX 10

int count = 0;

// create a stack
typedef struct{
  int items[MAX];
  int top;
} st;

// create an empty stack
void createEmptyStack(st *s){
  s->top = -1;
}

// check if stack is full
int isFull(st *s){
  if(s->top == MAX-1){
    return 1;
  }else{
    return 0;
  }
}

// check if stack is empty
int isEmpty(st *s){
  if(s->top == -1){
    return 1;
  }else{
    return 0;
  }
}

// add element to the stack
void push(st *s, int newItem){
  if(isFull(s)){
    printf("Stack is full");
    printf("\n");
  }else{
    s->top++;
    s->items[s->top] = newItem;
  }
  count++;
}

// remove element from the stack
void pop(st *s){
  if(isEmpty(s)){
    printf("Stack is empty");
    printf("\n");
  }else{
    printf("Item popped = %d", s->items[s->top]);
    s->top--;
  }
  count--;
}

// print element of the stack
void printStack(st *s){
  printf("Stack: ");
  for(int i=0; i<count; i++){
    printf("%d ", s->items[i]);
  }
  printf("\n");
}

int main(){
  st *s = malloc(sizeof(st));

  createEmptyStack(s);

  push(s, 1);
  push(s, 2);
  push(s, 3);
  push(s, 4);
  push(s, 5);
  push(s, 6);
  push(s, 7);
  push(s, 8);
  push(s, 9);
  push(s, 10);

  printStack(s);

  pop(s);
  pop(s);

  printf("\nAfter popping out\n");
  printStack(s);

  free(s);

  return 0;
}