package InterviewCodes;
import java.util.*;

public class RemoveDuplicateLetter {
    public static String removeDuplicateLetters(String s) {
        StringBuilder result = new StringBuilder();
        Set<Character> set = new HashSet<>();
        Map<Character, Integer> occurrences = new HashMap<>(); // Store the occurrences of duplicate characters

        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);
            if (!set.contains(currentChar)) {
                set.add(currentChar);
                result.append(currentChar);
            } else {
                // If the character is a duplicate, update its occurrence count in the occurrences map
                occurrences.put(currentChar, occurrences.getOrDefault(currentChar, 0) + 1);
            }
        }
        // Print the occurrences of duplicate characters
        System.out.println("Duplicate character occurrences:");
        for (Map.Entry<Character, Integer> entry : occurrences.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
        }
        return result.toString();
    }
    public static void main(String[] args) {
        String input = "abracadabra";
        String result = removeDuplicateLetters(input);
        System.out.println("Original string: " + input);
        System.out.println("String after removing duplicates: " + result);
    }
}

