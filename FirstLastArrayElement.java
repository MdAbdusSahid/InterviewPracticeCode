package InterviewCodes;

import java.util.Arrays;

public class FirstLastArrayElement {
    public static void main(String[] args) {
        int[] nums = {2, 3, 4, 5, 6, 7, 8, 23, 45, 67, 89, 99};
        int target = 4;
        System.out.println(Arrays.toString(findFirstLastPosition(nums, target)));
    }

    private static int[] findFirstLastPosition(int[] nums, int target) {
        int[] arr=new int[2];
        arr[0]=arr[1]=-1;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==target){
                arr[0]=i;
                if(i<nums.length && nums[i+1]==target){
                    i++;
                    arr[1]=i;
                    break;
                }
            }
        }
        return arr;
    }
}
