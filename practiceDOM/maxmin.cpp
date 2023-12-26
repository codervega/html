#include<iostream>
using namespace std;
int intersection(int array1[],int array2[],int n,int m)
{
 int i,j;
 for(i=0;i<n;i++)
 {
    int abhi=array1[i];
    for(j=0;j<n;j++)
    {
        if(abhi==array2[j])
        {
            cout<<array2[j]<<endl;
            array2[j]=-1;
            break;
        }
    }
 }

}

int main()
{
   int array1[50];
   int array2[10];
   int n,m,i,j;
   cout<<"Enter the Number of element present in the array1"<<endl;
   cin>>n; 
   cout<<"enter the elements"<<endl;
   for(i=0;i<n;i++)
   {
    cin>>array1[i];
   }
   cout<<"enter the number of element present in the array2 "<<endl;
   cin>>m;
   cout<<"enter the elemensts "<<endl;
   for(j=0;j<m;j++)
   {
    cin>>array2[j];
   }
   intersection(array1,array2,n,m);
   return 0;
   
}