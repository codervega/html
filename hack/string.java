package hack;

// program to reverse the String
public class string{

    public static void main(String[] args) {
        String s = "i love programming very much";

        StringBuilder reversedString = new StringBuilder(s);
        reversedString.reverse();

        System.out.println("Original String: " + s);
        System.out.println("Reversed String: " + reversedString.toString());
    }
}
