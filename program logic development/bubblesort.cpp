 #include<iostream>
 using namespace std;
 int bubblesort(int array[],int n)
 {
    int i,j;
    for(i=1;i<n;i++)
    {
        bool s=false;
        for(j=0;j<n-i;j++)
        {
            if(array[j]>array[j+1])
            {
                swap(array[j],array[j+1]);
                s=true;
            }
        }
        if(s==false)
        break;

    }
    for(i=0;i<n;i++)
    {
        cout<<array[i]<<" ";
    }
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
    bubblesort(array,n);

}