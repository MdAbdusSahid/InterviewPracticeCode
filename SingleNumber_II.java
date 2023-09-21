package InterviewCodes;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class SingleNumber_II {
    public static void main(String[] args) {
        int[] nums = {4, 4, 4, 6, 6, 6, 2, 2, 2, 1};
        singlrNumerII(nums);
    }

    private static int singlrNumerII(int[] nums) {
        int one=0;
        int two=0;
        for(int num:nums){
            one=(one^num)&(~two);
            two=(two^num)&(~two);
    }
        return one;

//    private static void singlrNumerII(int[] nums) {
//        Map<Integer, Integer> countMap = new HashMap<>();
//        for (int num : nums)
//            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
//        int cout = 0;
//        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
//            if (entry.getValue() > 1)
//                cout++;
//            System.out.println(entry.getKey()+" "+ entry.getValue());
//        }
    }
}
