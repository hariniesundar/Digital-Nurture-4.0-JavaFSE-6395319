
class Reporter {

    private static Reporter instance;

    private Reporter() {
        System.out.println("Reporter initialized.");
    }

    public static Reporter getInstance() {
        if (instance == null) {
            instance = new Reporter();
        }
        return instance;
    }

    public void writeLog(String message) {
        System.out.println("LOG ENTRY: " + message);
    }
}

public class SingletonPattern {
    public static void main(String[] args) {
        Reporter r1 = Reporter.getInstance();
        Reporter r2 = Reporter.getInstance();

        r1.writeLog("System booted.");
        r2.writeLog("System check completed.");

        if (r1 == r2) {
            System.out.println("Same reporter instance being used");
        } else {
            System.out.println("Different reporter instances");
        }
    }
}
