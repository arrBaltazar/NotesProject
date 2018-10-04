
public class Fibonacci {

	public static void main(String args[]){
	
	int first = 0;
	int second = 1;
	int next = 0;
	int end=100;
	
	System.out.print(first+" " + second+" ");
	
	
	while(next<end){
		next=first+second;
		first=second;
		second=next;
		System.out.print(next+ " ");
	}
			
			
	
	}
}
