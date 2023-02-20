#include <cstdlib>
#include <iostream>


using namespace std;
int main() {
    int num1;
    int num2;
    char exit[2];
    int entered;
    cout << "Enter the start point\n";
    cin >> num1;
    cout << "Enter the end point\n";
    cin >> num2;
    
    
    

    //Number generation
    srand(time(nullptr));

    int randNum = rand() % num1 + num2;
    
    do {
        std::cout << "Enter a number! \n";
        std::cin >> entered;
        if (entered != randNum) {
            std::cout << "Wrong number!\n";
        }
    } while (entered != randNum);

    std::cout << "Good number!\n";


    
    
    cin >> exit;
    return 0;
}
