class StringReverseWithourReverseMethod{
  public static void main(String[] args) {
  	String str="Hello World";
    System.out.println(reverseString(str));
  }
  public static String reverseString(String str){
  	char[] ch=str.toCharArray();
    int start=0;
    int end=ch.length-1;
    while(start<end){
    	char temp=ch[start];
        ch[start]=ch[end];
        ch[end]=temp;
        start++;
        end--;
    }
    return new String(ch);
  }
}
