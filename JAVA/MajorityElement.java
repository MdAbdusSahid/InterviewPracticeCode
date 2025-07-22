package InterviewCodes;

public class MajorityElement {
    public static void main(String[] args) {
        int[] num = {2, 3, 4, 5, 6, 4, 5, 3, 4, 2, 3, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2};
        System.out.println(mejorityElement(num));

    }

    private static int mejorityElement(int[] num) {
        int mejorityElement=0;
        int count=0;
        for(int nums:num){
            if(count==0) {
                mejorityElement = nums;
                count++;
            } else if (nums==mejorityElement)
                count++;
            else
                count--;
        }
        int occurence=0;
        for(int nums:num){
            if(mejorityElement==nums)
                occurence++;
        }
        return occurence>= num.length/2?mejorityElement:null;
    }
}
