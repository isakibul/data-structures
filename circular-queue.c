#include <stdio.h>

#define SIZE 5

int items[SIZE];
int front = -1, rear = -1;

// check if the queue is full
int isFull() {
  if ((front == (rear + 1) % SIZE) || (front == 0 && rear == SIZE - 1)){
    return 1;
  }else{
    return 0;
  }
}

// check if the queue is empty
int isEmpty() {
  if (front == -1){
    return 1;
  }else{
    return 0;
  }
}

// adding an element
void enQueue(int element) {
  if (isFull())
    printf("\n Queue is full!! \n");
  else {
    if (front == -1){
        front = 0;
    };
    rear = (rear + 1) % SIZE;
    items[rear] = element;
    printf("\n Inserted -> %d", element);
  }
}

// removing an element
void deQueue() {
  int element;
  if (isEmpty()) {
    printf("\n Queue is empty !! \n");
    return;
  } else {
    element = items[front];

    if (front == rear) {
      front = -1;
      rear = -1;
    }
    else {
      front = (front + 1) % SIZE;
    }

    printf("\n Deleted element -> %d \n", element);
  }
}

// display the queue
void display() {
  int i;
  if (isEmpty())
    printf(" \n Empty Queue\n");
  else {
    printf("\n Front -> %d ", front);
    printf("\n Items -> ");

    i = front;
    do {
      printf("%d ", items[i]);
      i = (i + 1) % SIZE;
    } while (i != (rear + 1) % SIZE);
    
    printf("\n Rear -> %d \n", rear);
  }
}

int main() {
  deQueue();

  enQueue(1);
  enQueue(2);
  enQueue(3);
  enQueue(4);
  enQueue(5);

  enQueue(6);

  display();
  deQueue();

  display();

  enQueue(7);
  display();

  enQueue(8);

  return 0;
}