#include <bits/stdc++.h>
using namespace std;

int main(){
    int x = 5, y = 10;
    cout << "Before Swapping: " << x << " " << y << endl;
    x = x ^ y ^ (y = x);
    cout << "After Swapping: " << x << " " << y << endl;
}