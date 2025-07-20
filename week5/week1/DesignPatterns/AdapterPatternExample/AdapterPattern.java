interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee class 1 (PayPal)
class PayPalGateway {
    public void sendPayment(double amount) {
        System.out.println("Processing payment through PayPal: " + amount);
    }
}

// Adaptee class 2 (Stripe)
class StripeGateway {
    public void makePayment(double amount) {
        System.out.println("Processing payment through Stripe: " + amount);
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
    private final PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal) {
        this.paypal = paypal;
    }

    @Override
    public void processPayment(double amount) {
        paypal.sendPayment(amount);
    }
}

// Adapter for Stripe
class StripeAdapter implements PaymentProcessor {
    private final StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    @Override
    public void processPayment(double amount) {
        stripe.makePayment(amount);
    }
}

// Client/Test class
public class AdapterPattern {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PayPalAdapter(new PayPalGateway());
        PaymentProcessor stripeProcessor = new StripeAdapter(new StripeGateway());

        System.out.println("Using PayPal:");
        paypalProcessor.processPayment(1500);

        System.out.println("\nUsing Stripe:");
        stripeProcessor.processPayment(2200);
    }
}
