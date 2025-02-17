import java.util.*;
public class Main {

    public static void update (int marks[]){

        for (int i=0;i<marks.length;i++){
            marks[i]=marks[i]+1;
        }
    }

    public  static void main (String Args[]){
        int marks[] = {98,99,96};
        update(marks);
    }
    
}