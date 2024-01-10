#include <bits/stdc++.h>
using namespace std;

long long fib(long long n, vector<long long> &dp){
    if(n <= 1) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = fib(n-1, dp) + fib(n-2, dp);
}

int main(){
    long long n;
    cin >> n;
    vector<long long> dp(n+1, -1);
    cout << fib(n, dp) << endl;
}