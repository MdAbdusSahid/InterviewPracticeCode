import java.util.Arrays;

public class Anagram (
public static void main(string[] args) (
String strl = "listen";
String str2 "silent";
if (areAnagram(str1, str2))
System.out.println(x:"The string are Anagram");
else
System.out.println(x:"The string are not anagran");
public static boolean areAnagram(string str1, String str2) {
String s1 = str1.replaceA11(regex: "I\s", replacement:"");
String s2 = str2.replaceAll(regex:"I\s", replacement:"");
if (s1.length() l= s2.1ength())
return false;
char[] ch1 = s1.toCharArray();
char[] ch2 = s2.toCharArray(),
Arrays.sort(ch1);
Arrays.sort(ch2);
return Arrays.equals(ch1, ch2);
}
}