#include<iostream>
using namespace std;
int leftOccurance(int array[],int n,int key)
{
   int start=0;
   int ans;
   int end=n-1;
   int mid=(start+(end-start))/2;
   while(start<=end)
   {
      if(key==array[mid])
      {
        ans=mid;
        end=mid-1;
      }
      else if(key<array[mid])
      {
        end=mid-1;
      }
      else{
        start=mid+1;
      }
      mid=start+(end-start)/2;
   }
   return ans;
}
int rightOccurance(int array[],int n,int key)
{
   int start=0;
   int ans;
   int end=n-1;
   int mid=(start+(end-start))/2;
   while(start<=end)
   {
      if(key==array[mid])
      {
        ans=mid;
        start=mid+1;
      }
      else if(key<array[mid])
      {
        end=mid-1;
      }
      else{
        start=mid+1;
      }
      mid=start+(end-start)/2;
   }
   return ans;
}

int main()
{
    int array[10];
    cout<<"enter the number of element you want ot insert "<<endl;
    int n,i,key;
    cin>>n;
    cout<<"enter the elemnt of array"<<endl;
    for(i=0;i<n;i++)
    {
        cin>>array[i];
    }
    cout<<"enter the key"<<endl;
    cin>>key;
    int abhi=leftOccurance(array,n,key);
    cout<< abhi;
    int shu=rightOccurance(array,n,key);
    cout<< shu;
   
    

}