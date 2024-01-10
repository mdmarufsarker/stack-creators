#include <bits/stdc++.h>
using namespace std;

long long fib(long long n){
    long long prev1, prev2;
    prev1 = 1, prev2 = 0;

    for(long long i = 2; i <= n; i++){
        long long curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

int main(){
    long long n;
    cin >> n;
    cout << fib(n) << endl;
}