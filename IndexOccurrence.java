package InterviewCodes;

import java.util.ArrayList;
import java.util.List;

public class IndexOccurrence {
    public static void main(String[] args) {
        String haystack="badsadbadsad";
        String needle="sad";
        List occurrence=indexOfOcc(haystack,needle);
        if(!occurrence.isEmpty())
            System.out.println("The word "+needle+" is found index number "+occurrence);
        else
            System.out.println(-1);
    }

    private static List indexOfOcc(String haystack, String needle) {
        List<Integer> occurrence=new ArrayList<>();
        for(int i=0;i<=haystack.length()-needle.length()+1;i++){
            if(haystack.charAt(i)==needle.charAt(0) && haystack.startsWith(needle, i) ){
                
                    occurrence.add(i);
            }
        }
        return occurrence;
    }
}
