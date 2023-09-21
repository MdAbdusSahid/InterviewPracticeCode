package InterviewCodes;

public class DataEncapulation {
    private String name;
    private int age;

    public String getName(){
        return name;
    }
    public  void setName(String name){
        this.name=name;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age=age;
    }
    public DataEncapulation(String name,int age){
        this.name=name;
        this.age=age;
    }

    public static void main(String[] args) {
        DataEncapulation da=new DataEncapulation("Abdus",25);
        System.out.println(da.getName());
        System.out.println(da.getAge());

//        da.setName("Sahid");
//        da.setAge(25);
//        System.out.println(da.getName());
//        System.out.println(da.getAge());
    }
}
