package InterviewCodes;

public class ReverseInteger {
    public static void main(String[] args) {
        int num=9001;
        reverseNum(num);
    }

    private static void reverseNum(int num) {
        int nums=num;
        int total=0;
        while (nums>0){
            total=total*10+nums%10;
            nums/=10;
        }
        System.out.println(total);
            }
}
