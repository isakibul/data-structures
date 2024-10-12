#include<stdio.h>

#define SIZE 5

int items[SIZE], front=-1, rear=-1;

// add element to the queue
void enQueue(int value){
    if(rear == SIZE-1){
        printf("Queue is full\n");
    }else{
        if(front == -1){
            front = 0;
        }
        rear++;
        items[rear] = value;
        printf("Inserted %d\n", value);
    }
}

// remove element from the queue
void deQueue(){
    if(front == -1){
        printf("Queue is empty\n");
    }else{
        front++;
        printf("Deleted %d\n", items[front]);
        if(front>rear){
            front=rear=-1;
        }
    }
}

// function to print the queue
void display(){
    if(rear == -1){
        printf("Queue is empty");
    }else{
        printf("Queue element are: ");
        for(int i=front; i<=rear; i++){
            printf("%d ", items[i]);
        }
    }
    printf("\n");
}

int main(){
    deQueue();

    enQueue(1);
    enQueue(2);
    enQueue(3);
    enQueue(4);
    enQueue(5);

    enQueue(6);

    deQueue();

    display();

    return 0;
}