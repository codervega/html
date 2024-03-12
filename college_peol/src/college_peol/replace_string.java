// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;

public class WordReplacement {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter the sentence:");
    String sentence = scanner.nextLine();

    System.out.println("Enter the word to replace:");
    String wordToReplace = scanner.next();

    System.out.println("Enter the replacement word:");
    String replacement = scanner.next();

    System.out.println("Original sentence: " + sentence);
    System.out.println("Word to replace: " + wordToReplace);
    System.out.println("Replacement word: " + replacement);

    String replacedSentence = replaceWord(sentence, wordToReplace, replacement);

    System.out.println("Replaced sentence: " + replacedSentence);

    scanner.close();
  }

  public static int customStringLength(String str) {
    int length = 0;
    for (char c : str.toCharArray()) {
      length++;
    }
    return length;
  }

  public static String replaceWord(String sentence, String wordToReplace, String replacement) {
    StringBuilder result = new StringBuilder();
    int i = 0;

    while (i < customStringLength(sentence)) {
      boolean foundMatch = true;
      int j = 0;

      while (j < customStringLength(wordToReplace) && i + j < customStringLength(sentence) && sentence.charAt(i + j) == wordToReplace.charAt(j)) {
        j++;
      }

      if (j == customStringLength(wordToReplace)) {
        result.append(replacement);
        i += customStringLength(wordToReplace);
      } else {
        result.append(sentence.charAt(i));
        i++;
      }
    }

    return result.toString();
  }
}
