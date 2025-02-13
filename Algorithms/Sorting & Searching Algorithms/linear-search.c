#include<stdio.h>

int search(int arr[], int size, int target){
    for(int i=0; i<size; i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

int main(){
    int arr[] = {4, 2, 6, 8, 10};
    int size = sizeof(arr)/sizeof(arr[0]);
    int target = 6;

    int result = search(arr, size, target);

    (result == -1) ? printf("Element not found") : printf("Element found at index: %d", result);
}