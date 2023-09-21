package InterviewCodes;

import java.util.Arrays;

public class MissingNumber {
    public static void main(String[] args) {
        int[] nums={1,2,3,4,5,6,7,8,9,10};
        //Arrays.sort(nums);
        int n=nums.length+1;
        int expectedTotal=(n*(n+1)/2);
        int total=0;
        for(int num:nums)
            total+=num;
        System.out.println(expectedTotal-total);
    }
}
