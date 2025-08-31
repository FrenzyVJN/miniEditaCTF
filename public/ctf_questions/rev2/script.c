#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const int flag_ints[] = {101, 100, 105, 116, 97, 67, 84, 70, 123, 112, 51, 103, 114, 101, 115, 115, 105, 110, 103, 95, 115, 105, 109, 112, 108, 101, 125, 0};

void print_flag() {
    for (int i = 0; flag_ints[i] != 0; i++) {
        printf("%c", (char)flag_ints[i]);
    }
    printf("\n");
}

int main() {
    unsigned long target_val = 0xdeadbeef;
    unsigned long key = rand();

    printf("Enter a number: ");
    
    unsigned long input;
    scanf("%lu", &input);

    if ((input ^ (unsigned long)key) == target_val) {
        printf("Congrats! Here is your flag: ");
        print_flag();
    } else {
        printf("Nope, try again!\n");
    }

    return 0;
}
