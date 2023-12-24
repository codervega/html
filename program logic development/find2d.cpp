#include<iostream>
using namespace std;
bool ispresent(int arr1[][2],int m,int n,int target)
{
      for(int i=0;i<m;i++)
      {
        for(int j=0;j<n;j++)
        {
            if(arr1[i][j]==target)
            {
                return 1;
            }
        }
      }
      return 0;
}
int main()
{
    int arr1[2][2];
    int arr2[2][2];
    int arr3[2][2];
    cout<<"enter the element in the array 1"<<endl;
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<2;j++)
    {
        cin>>arr1[i][j];
    }
    }
    cout<<"enter the second element"<<endl;
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<2;j++)
    {
        cin>>arr2[i][j];
    }
    }
    int target;
    cout<<"enter the target"<<endl;
    cin>>target;
    if(ispresent(arr1,target,2,2))
    {
        cout<<"present hain";
    }
    else
    {
        cout<<"not present";
    }
}