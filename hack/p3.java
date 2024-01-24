package hack;

public class p3 {
	
	public int product(int arr[]) {
		
		int max=1;
		
		for(int i=0;i<arr.length-1;i++)
		{
			int p=1;
			max=arr[i];
			for(int j=i+1;j<arr.length;j++)
			{
				 if(arr[i]<arr[i]*arr[j]*p)
				 {
					 p=arr[i]*arr[j]*p;
					 max=p;
				 }
				
			}	
	}
		return max;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr= {6,-3,-10,0,2};
		p3 obj=new p3();
		System.out.println(obj.product(arr));
		
	}

}
