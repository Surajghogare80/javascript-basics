public class pattern {
    public static void hollow_rectangle(int totrow , int totcol){
        for  (int i=1 ; i<=totrow ; i++){
            
            for (int j=1 ; j<=totcol ; j++){

                if(i==1 || i==totrow || j==1 || j==totcol){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }
        }
    }
    public static void main (String Args[]){
        hollow_rectangle(4 , 5);
    }
    
}
