#include<stdio.h>
#include<stdlib.h>

// creating a node
struct node{
    int value;
    struct node *next;
};

// print the linked list
void printLinkedlist(struct node *p){
    while(p != NULL){
        printf("%d ", p->value);
        p = p->next;
    }
};

int main(){
    // initialize nodes
    struct node *head;
    struct node *one = NULL;
    struct node *two = NULL;
    struct node *three = NULL;

    // allocate memory
    one = malloc(sizeof(struct node));
    two = malloc(sizeof(struct node));
    three = malloc(sizeof(struct node));

    // assign value
    one->value = 1;
    two->value = 2;
    three->value = 3;

    // connect nodes
    one->next = two;
    two->next = three;
    three->next = NULL;

    // printing node-value
    head = one;
    printLinkedlist(head);
}