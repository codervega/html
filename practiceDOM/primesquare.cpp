#include<iostream>
using namespace std;
int main() {
    int num;
    cin >> num;    //Reading input from STDIN
    cout << "Input number is " << num << endl;
  // Writing output to STDOUT
    int i;
   int Ans=0;
  for(i=1;i<num;i++)
  {
    if(i%2!=0)
    {
      Ans=Ans+(i*i);
    }
    
  }
  cout << Ans<<endl;
}