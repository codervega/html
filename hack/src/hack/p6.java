package hack;

// program to rotate the array clockwise by 2
public class p6 {

    public static void main(String[] args) {
        int[] arr = { 1, 2, 4, 5, 7 };
        int k = 2;

       
        while (k > 0) {
            int temp = arr[arr.length - 1];

           
            for (int i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }

            arr[0] = temp;
            k--;
        }

       
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
