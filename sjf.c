#include <stdio.h>

int main() {
    int n, bt[15], wt[15], temp;
    float total_wt = 0.0;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    printf("Enter burst times of all processes: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &bt[i]);
    }

    // Sort burst times in ascending order
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (bt[j] > bt[j + 1]) {
                temp = bt[j];
                bt[j] = bt[j + 1];
                bt[j + 1] = temp;
            }
        }
    }

    // Calculate waiting times
    wt[0] = 0; // First process has no waiting time
    for (int i = 1; i < n; i++) {
        wt[i] = bt[i - 1] + wt[i - 1];
    }

    // Calculate total waiting time
    for (int i = 0; i < n; i++) {
        total_wt += wt[i];
    }

    float avg_wt = total_wt / n;

    printf("Average waiting time: %.2f\n", avg_wt);

    return 0;
}
