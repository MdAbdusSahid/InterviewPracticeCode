package InterviewCodes;

import java.util.*;

public class MissingNumberPractice {
    public static void main(String[] args) {
        int[] num={1,3,5,7,9};
        List list=missingNumber(num);
        if(!list.isEmpty())
            System.out.println(list);
        else
            System.out.println(0);
    }
    private static List missingNumber(int[] num) {
    List missingNumber=new ArrayList<>();
    Set set=new HashSet();
    int n=Integer.MIN_VALUE;
        System.out.println(n);
    for(int nums:num){
        set.add(nums);
        n=Math.max(n,nums);
    }
        System.out.println(n);
    for(int i=1;i<=n;i++){
        if(!set.contains(i))
            missingNumber.add(i);
    }
    return missingNumber;
    }
}
