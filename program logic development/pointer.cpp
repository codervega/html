#include<iostream>
using namespace std;
int main()
{
     int a=123;
     int *p=&a;
     int **p2=&p;
     int ***p3=&p2;
     /* now will play with pointers*/
     cout<< "the address of p2 is :"<<p3<<endl<<endl;
     cout<< "the address of p is :"<<p2<<endl<<endl;
     cout<< "the adress is a is :"<<p<<endl<<endl<<endl;
     cout<<"the content in the a is "<<a<<endl;
     cout<<"using the pointer single pointer to retrive the value of a"<<*p<<endl;
     cout<<"using the two star to retrive the value of a"<<**p2<<endl;
}