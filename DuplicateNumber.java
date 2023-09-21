package InterviewCodes;

import java.util.HashSet;
import java.util.Set;

public class DuplicateNumber {
    public static void main(String[] args) {
        int[] nums = {2, 3, 4, 5, 6, 7, 5, 4, 9, 10};
        System.out.println(duplicateNumber(nums));
    }

    private static int duplicateNumber(int[] nums) {
        int[] n = nums;
        Set set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num))
                return num;
            else
                set.add(num);
        }
        return -1;
    }
}
