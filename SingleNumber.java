package InterviewCodes;

public class SingleNumber {
    public static void main(String[] args) {
        int[] nums={1,1,2,3,4,5,5,4,3};
        findSingleNumber(nums);
    }

    private static void findSingleNumber(int[] nums) {
        int xor=0;
        for(int num:nums)
            xor^=num;
        System.out.println(xor);
    }
}
