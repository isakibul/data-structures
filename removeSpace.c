#include<stdio.h>
#include<ctype.h>

void remove_extra_spaces(FILE *input, FILE *output){
    char ch;
    int in_space = 0;

    while ((ch = fgetc(input)) != EOF) {
        if (isspace(ch)) {
            if (!in_space) {
                fputc(' ', output);  
                in_space = 1;
            }
        } else {
            fputc(ch, output);
            in_space = 0;
        }
    }
}

int main(){
    FILE *input = fopen("output.txt", "r");
    if(input==NULL){
        printf("Error opening file\n");
        return 1;
    }

    FILE *output = fopen("cleaned_output.txt", "w");
        if(output==NULL){
            printf("Error opening output file\n");
            fclose(input);
            return 1;
        }

    remove_extra_spaces(input, output);

    fclose(input);
    fclose(output);

    printf("Extra spaces removed and saved to 'cleaned_output.txt'.\n");

    return 0;
}