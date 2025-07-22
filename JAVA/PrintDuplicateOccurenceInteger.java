package InterviewCodes;

import java.util.HashMap;
import java.util.Map;

public class PrintDuplicateOccurenceInteger {
    public static void main(String[] args) {
        int[] arr={10,12,10,23,34,55,44,55,33,44,55,12,13,16,1};
        duplicate(arr);
    }

    private static void duplicate(int[] arr) {
    Map<Integer,Integer> occurence=new HashMap<>();
    for(int num:arr)
        occurence.put(num,occurence.getOrDefault(num,0)+1);
    for(Map.Entry entry:occurence.entrySet()){
        int value=(int)entry.getKey();
        int count=(int)entry.getValue();
        if(count>1)
            System.out.println("Value: "+value+" count: "+count);
    }
    }
}

