#include <stdio.h>
#include <math.h>

int main(void) {
  double celsVal;

  printf("Enter your clesius value\n");

  scanf("%lf", &celsVal);

  double fharVal = celsVal * 9/5 + 32;
  printf("%lf", round(fharVal * 10000) / 10000); //Useless!!! WHY WOULD I KEEP THE ROUND IF IT DOES NOT WORKK!!!!!?????!
  return 0;
}
