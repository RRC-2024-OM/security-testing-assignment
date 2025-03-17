public class Greeting {
    public static void main(String[] args) {
        String name = "GitHub Actions";
        greetJava(name);
    }

    public static void greetJava(String name) {
        System.out.println("Hello from Java, " + name + "!");
    }

    // Intentionally introduce a simple potential issue (unused variable)
    public static void anotherMethod() {
        int unusedVariable = 10;
        System.out.println("Another method called.");
    }
}
