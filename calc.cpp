#include <iostream>
#include <string>

int main() {
    char opper;
    float num1;
    float num2;
    std::string exit;
    
    std::cout << "Input Subtraction (-), Multipulcation (*), Addition (+), Or Devision (/)\n";
    std::cin >> opper;
    std::cout << "Enter number 1\n";
    std::cin >> num1;
    std::cout << "Enter number 2\n";
    std::cin >> num2;
    
   

    switch (opper)
    {
    case '+':
        std::cout << "Your number is: " << num1 + num2 << std::endl;
        std::cin >> exit;
        break;
    case '/':
        std::cout << "Your number is: " << num1 / num2 << std::endl;
        std::cin >> exit;
        break;
    case '*':
        std::cout << "Your number is: " << num1 * num2 << std::endl;
        std::cin >> exit;
        break;
    case '-':
        std::cout << "Your number is: " << num1 - num2 << std::endl;
        std::cin >> exit;
        break;
    default:
        std::cout << "That's not a valid opperator!";
        break;
    }


    return 0;
}
