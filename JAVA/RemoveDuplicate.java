package InterviewCodes;

import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicate {
    public static void main(String[] args) {
        String arr="aarrhghdfgrthetfr";
        removedDuplicate(arr);
//        printDuplicateOccurence(arr);
    }
    private static void removedDuplicate(String arr) {
        StringBuilder sb=new StringBuilder();
        Set set=new HashSet<>();
        for(char chr:arr.toCharArray()){
            if(!set.contains(chr)){
                set.add(chr);
                sb.append(chr);
            }
        }

        System.out.println(sb);
    }
//    private static void printDuplicateOccurence(int arr[]){
//        Map<Integer,Integer> occurence=new HashMap();
//        for(int num:arr)
//            occurence.put(num,occurence.getOrDefault(num,0)+1);
//        for(Map.Entry entry:occurence.entrySet()){
//            int value=(int)entry.getKey();
//            int count=(int)entry.getValue();
//            if(count>1)
//                System.out.println("DuplicateValue: "+value);
//        }
//    }
}
