package hack;

public class p1 {
	public int sec_small(int arr[],int S)
	{
	   int secsmall=arr[0];
	   for(int i=0;i<arr.length;i++)
	   {
		   if( secsmall>arr[i] &&  arr[i]>S)
		   {
			   secsmall=arr[i];
		   }
	   }
	   return  secsmall;
	  
	   
	}
	
	
	public int smal(int arr[])
	{
		int i;
		int small=arr[0];
		for(i=1;i<arr.length;i++)
		{
			if(small>arr[i]) {
				small=arr[i];
			}
		}
		return small;
	}

	public static void main(String[] args) {
		int[] arr= {2};
		p1 obj=new p1();
		int S=obj.smal(arr);
		System.out.println(obj.sec_small(arr,S));
		
	}

}
