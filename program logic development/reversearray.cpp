#include<iostream>
#include<algorithm>
using namespace std;

int merge(int arr[],int arr1[],int n1,int n2,int arr2[])
{
    int i=0,j=0,k=0;
    while(i<n1)
    {
        arr2[k]=arr[i];
        k++;
        i++;
    }
    while(j<n2)
    {
        arr2[k]=arr1[j];
        k++;
        j++;
    }
    sort(arr2,arr2+n1+n2);
    for(i=0;i<n1+n2;i++)
    {
        cout<<arr2[i]<<" ";
    }
}
int main()
{
    int arr[]={1,2,3,4,5,6};
    int n1=sizeof(arr)/sizeof(int);
    int arr1[]={2,16,18};
    int n2=sizeof(arr1)/sizeof(int);
    int arr2[n1+n2];
    merge(arr,arr1,n1,n2,arr2);
    return 0;
}
