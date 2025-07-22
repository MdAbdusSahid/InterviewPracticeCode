package InterviewCodes;

import java.util.HashMap;
import java.util.Map;

public class PrintDuplicateOccurenceCharacter {
    public static void main(String[] args) {
        char[] arr={'a', 'b', 'c', 'b', 'a', 'd', 'd'};
        duplicate(arr);
    }

    private static void duplicate(char[] arr) {
        Map<Character,Integer> occurence=new HashMap<>();
        for(char ch:arr)
            occurence.put(ch,occurence.getOrDefault(ch,0)+1);
        for(Map.Entry entry: occurence.entrySet()){
            char dou= (char) entry.getKey();
            int count=(int) entry.getValue();
            if (count>1)
                System.out.println("Character: "+dou+" Count: "+count);

        }
    }
}
