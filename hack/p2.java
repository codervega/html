package hack;

// Finding a subarray that adds to a given sum

public class p2 {
    public int sum_1(int arr[]) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }

    public int findIndex(int arr[], int sum) {
        for (int i = 0; i < arr.length; i++) {
            if (sum - arr[i] == 33) {
                return i;
            }
        }
        return -1; 
    }

    public void subArray(int arr[], int index) {
        int[] arr1 = new int[arr.length - 1];
        int j = 0;

        for (int i = 0; i < arr.length; i++) {
            if (i == index) {
                continue;
            } else {
                arr1[j] = arr[i];
                j++;
            }
        }

      
        for (int i = 0; i < arr1.length; i++) {
            System.out.print(arr1[i]+" ");
        }
    }

    public static void main(String[] args) {
        int[] arr = { 1, 4, 20, 3, 10, 5 };
        p2 obj = new p2();

        int sum = obj.sum_1(arr);
        int index = obj.findIndex(arr, sum);

        if (index != -1) {
            System.out.println("Index found at: " + index);
            obj.subArray(arr, index);
        } else {
            System.out.println("No subarray found.");
        }
    }
}
