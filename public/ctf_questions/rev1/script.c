#include <stdio.h>
#include <string.h>

const int flag_ints[] = {102, 108, 97, 103, 123, 115, 49, 109, 112, 108, 51, 95, 100, 51, 99, 111, 109, 112, 49, 108, 49, 110, 103, 125, 0};

void print_flag() {
    for (int i = 0; flag_ints[i] != 0; i++) {
        printf("%c", (char)flag_ints[i]);
    }
    printf("\n");
}

int main() {
    char input[100];
    printf("Enter the secret code: ");
    scanf("%99s", input);

    if (strcmp(input, "letmein123") == 0) {
        printf("Congrats! Here is your flag: ");
        print_flag();
    } else {
        printf("Wrong input!\n");
    }

    return 0;
}
