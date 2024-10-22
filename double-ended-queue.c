#include<stdio.h>

#define MAX 5

int deque[MAX];
int front=-1, rear=-1;

int isFull(){
    return ((front == 0 && rear == MAX-1) || (front == rear+1));
}

int isEmpty(){
    return (front == -1);
}

// insert element at the front
void insertFront(int element){
    if(isFull()){
        printf("\nUnable to insert element at front. Queue is full\n");
        return;
    }

    if(front==-1){
        front = 0;
        rear = 0;
    }else if(front == 0){
        front = MAX-1;
    }else{
        front = front-1;
    }

    deque[front] = element;
    printf("\nInserted element %d at the front\n", element);
}

// insert element at the rear
void insertRear(int element){
    if(isFull()){
        printf("\nUnable to insert element at rear. Queue is full\n");
        return;
    }

    if(rear == -1){
        front = 0;
        rear = 0;
    }else if(rear == MAX -1){
        rear = 0;
    }else{
        rear = rear + 1;
    }

    deque[rear] = element;
    printf("\nInserted element %d at the rear\n", element);
}

// delete from the front
void deleteFront(){
    if(isEmpty()){
        printf("\nUnable to delete from front. Queue is empty\n");
        return;
    }

    int removed = deque[front];

    if(front == rear){
        front = -1;
        rear = -1;
    }else if(front == MAX-1){
        front = 0;
    }else{
        front = front+1;
    }

    printf("\nDeleted %d from the front.\n", removed);
}

// delete from the rear
void deleteRear(){
    if(isEmpty()){
        printf("\nUnable to delete at rear. Queue is empty\n");
        return;
    }

    int removed = deque[rear];

    if(front == rear){
        front = -1;
        rear = -1;
    }else if(rear == 0){
        rear = MAX-1;
    }else{
        rear = rear-1;
    }

    printf("\nDeleted %d from the rear.\n", removed);
}

void displayDeque(){
    if(isEmpty()){
        printf("\nDequeue is empty\n");
        return;
    }

    printf("Dequeue elements are: ");
    for(int i=front; i!=rear; i=(i+1)%MAX){
        printf("%d ", deque[i]);
    }
    printf("%d\n", deque[rear]);
}

int main() {
    insertRear(5);
    displayDeque();

    insertFront(15);
    displayDeque();
    
    insertRear(25);
    displayDeque();

    deleteFront();
    displayDeque();

    deleteRear();
    displayDeque();

    return 0;
}