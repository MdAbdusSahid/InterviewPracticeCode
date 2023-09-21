package InterviewCodes;

public class StringArrayEquivalent {
    public static void main(String[] args) {
        String[] str1={"abc","xyz"};
        String[] str2={"abc","xyz"};
        System.out.println(helper(str1).equals(helper(str2)));

    }
    private static String helper(String[] words){
        StringBuilder sb=new StringBuilder();
        for(String word:words)
            sb.append(word);
        return sb.toString();
    }
}
