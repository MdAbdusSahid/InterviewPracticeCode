package InterviewCodes;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class TwoSum {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 26;

        int[] result = twoSum(nums, target);

        if (result.length == 2) {
            System.out.println("Indices of the two numbers that add up to the target:");
            System.out.println("Index 1: " + result[0]);
            System.out.println("Index 2: " + result[1]);
        } else {
            System.out.println("No solution found.");
        }
    }

    private static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int rem = target - nums[i];
            if (map.containsKey(rem))
                return new int[]{map.get(rem), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}
