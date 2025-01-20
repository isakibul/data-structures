#include <stdio.h>

int binarySearch(int array[], int target, int low, int high) {
  if (high >= low) {
    int mid = low + (high - low) / 2;

    if (target == array[mid]){
        return mid;
    }

    if (target > array[mid]){
        return binarySearch(array, target, mid + 1, high);
    }

    return binarySearch(array, target, low, mid - 1);
  }

  return -1;
}

int main(void) {
  int array[] = {3, 4, 5, 6, 7, 8, 9};
  int n = sizeof(array) / sizeof(array[0]);
  int target = 4;
  int result = binarySearch(array, target, 0, n - 1);
  (result == -1) ?  printf("Not found") : printf("Element is found at index %d", result);
}