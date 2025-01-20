#include<stdio.h>

int search(int arr[], int target, int low, int high){
    while(low<=high){
        int mid = low + (high-low) / 2;

        if(target==arr[mid]){
            return mid;
        }

        if(target>arr[mid]){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}

int main(){
    int array[] = {3, 4, 5, 6, 7, 8, 9};
    int n = sizeof(array) / sizeof(array[0]);
    int target = 4;
    int result = search(array, target, 0, n - 1);
    (result == -1) ? printf("Not found") : printf("Element is found at index %d", result);
    return 0;
}