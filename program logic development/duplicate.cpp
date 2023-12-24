#include<iostream>
using namespace std;
int duplicate(int array[],int n)
{ 
    int i,j;
    for(j=0;j<n;j++)
    {
    int abhi=array[j];
    for(i=(j+1);i<n;i++)
    {
      if(abhi==array[i])
      cout<<array[i];
      break;
    }
}
}
int main()
{
    int array[10];
    int i,n;
    cout<<"enetr the no of element"<<endl;
    cin>>n;
    cout<<"enter the Element"<<endl;
    for(i=0;i<n;i++)
    {
        cin>>array[i];
    }
    duplicate(array,n);
}