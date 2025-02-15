#include<stdio.h>

int main(){
    // // create and write to a file
    // FILE *file = fopen("output.txt", "w");

    // if(file==NULL){
    //     printf("Error opening file");
    //     return 1;
    // }

    // fputs("This is text of the file.\n", file);
    // fclose(file);
    // printf("File created successfully.\n");

    // read from a file
    FILE *file = fopen("output.txt", "r");

    if(file==NULL){
        printf("Error opening file");
        return 1;
    }

    char buffer[100];

    while(fgets(buffer, sizeof(file), file)!=NULL){
        printf("%s", buffer);
    }

    fclose(file);

    return 0;
}