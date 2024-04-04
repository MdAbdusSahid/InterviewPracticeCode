class ReverseOnlyLetters{
  public static void main(String[] args) {
  	String str="md-abdus-sahid";
    System.out.println(reverseString(str));
  }
  public static String reverseString(String str){
  	char[] ch=str.toCharArray();
    int start=0;
    int end=ch.length-1;
    while(start<end){
    	if(!Character.isLetter(ch[start]))
        	start++;
        else if(!Character.isLetter(ch[end]))
        	end--;
            else{
    	char temp=ch[start];
        ch[start]=ch[end];
        ch[end]=temp;
        start++;
        end--;
        }
    }
    return new String(ch);
  }
}
