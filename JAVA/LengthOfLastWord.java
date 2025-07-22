package InterviewCodes;

public class LengthOfLastWord {
    public static void main(String[] args) {
        String str="Hi, Love to watch anime";
        lengthOfLastWord(str);

    }
    private static void lengthOfLastWord(String str) {
        String word=str;
        str.trim();
        int count=0;
        for(int i=str.length()-1;i>=0;i--){
            if(word.charAt(i)!=' ')
                count++;
            else
                break;
        }
        System.out.println(count);
    }
}
