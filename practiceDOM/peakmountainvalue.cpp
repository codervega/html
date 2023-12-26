#include<iostream>
using namespace std;
int peak(int array[],int n,int sqt)
{
    int start=0,ans=0;
    int end=n-1;
    int mid=(start+end)/2;
    while(start<=end)
    {
        if(array[mid]*array[mid]==sqt)
        {
            return array[mid];
        }
        else if(array[mid]*array[mid]>sqt)
        {
            end=mid-1;
        }
        else
        {
            start=mid+1;
        }
        mid=(start+end)/2;
    }
    return -1;
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
    int sqt;
    cout<<"enter the number"<<endl;
    cin>>sqt;
    cout<< peak(array,n,sqt);

    
}