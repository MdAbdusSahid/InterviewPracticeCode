package InterviewCodes;

import java.util.HashMap;
import java.util.Map;

public class PrintDuplicateOccuranceInString {
    public void duplicate(String[] str){
        Map<String,Integer> occurence=new HashMap<>();
        for(String s:str)
            occurence.put(s,occurence.getOrDefault(s,0)+1);
        for(Map.Entry entry:occurence.entrySet()){
            String str1= (String) entry.getKey();
            int in=(int) entry.getValue();
            if(in>1){
                System.out.println("String: "+str1+" Count: "+in);
            }

        }

    }
    public static void main(String[] args) {
        PrintDuplicateOccuranceInString ptr=new PrintDuplicateOccuranceInString();
        String[] arr = { "apple", "banana", "orange", "banana", "apple", "grape", "grape" };
        System.out.println("Duplicate occurrences in the array:");
        ptr.duplicate(arr);
    }
}
