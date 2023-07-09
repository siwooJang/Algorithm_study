#include <iostream>
#include <cstring>
#include <string>
using namespace std;

void Result()
{
    int t;
    scanf("%d",&t);
    
    while(t--){
        long a,b;
        scanf("%ld %ld", &a,&b);
        
        long result=a;
        
        b = b%4+4;
        
        for(long i=2; i<=b; ++i)
            result = (result*a)%10;
        if(result==0) result=10;
        
        printf("%ld\n",result);
    }
}

int main(){
    Result();
    getchar(); getchar();
    return 0;
}