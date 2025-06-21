
public class FinancialForecast{

    public static double calculateGrowth(double baseValue, double rate, int years) {
        if (years == 0) return baseValue;
        return calculateGrowth(baseValue, rate, years - 1) * (1 + rate);
    }

    public static double calculateGrowthIterative(double baseValue, double rate, int years) {
        for (int i = 0; i < years; i++) {
            baseValue *= (1 + rate);
        }
        return baseValue;
    }

    public static void main(String[] args) {
        double startAmount = 12000;
        double growthRate = 0.07;
        int duration = 4;

        double recursiveResult = calculateGrowth(startAmount, growthRate, duration);
        double iterativeResult = calculateGrowthIterative(startAmount, growthRate, duration);

        System.out.println("startAmount = 12000");
        System.out.println("growthRate = 0.07");
        System.out.println("duration = 4");
        System.out.printf("Recursive Forecast (Rs.): %.2f%n", recursiveResult);
        System.out.printf("Iterative Forecast (Rs.): %.2f%n", iterativeResult);
    }
}
