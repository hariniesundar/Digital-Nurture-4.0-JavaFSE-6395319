import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String stockName, double newPrice);
}

interface Stock {
    void registerObserver(Observer o);
    void deregisterObserver(Observer o);
    void notifyObservers();
}

class StockMarket implements Stock {
    private final List<Observer> observers = new ArrayList<>();
    private String stockName;
    private double price;

    public void setStock(String stockName, double price) {
        this.stockName = stockName;
        this.price = price;
        System.out.println("\n[StockMarket] Price updated for " + stockName + ": " + price);
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
        System.out.println("Observer registered: " + o.getClass().getSimpleName());
    }

    @Override
    public void deregisterObserver(Observer o) {
        observers.remove(o);
        System.out.println("Observer removed: " + o.getClass().getSimpleName());
    }

    @Override
    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(stockName, price);
        }
    }
}

class MobileApp implements Observer {
    @Override
    public void update(String stockName, double newPrice) {
        System.out.println("[MobileApp] " + stockName + " new price: " + newPrice);
    }
}

class WebApp implements Observer {
    @Override
    public void update(String stockName, double newPrice) {
        System.out.println("[WebApp] " + stockName + " new price: " + newPrice);
    }
}

public class ObserverPattern {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        Observer mobile = new MobileApp();
        Observer web = new WebApp();

        market.registerObserver(mobile);
        market.registerObserver(web);

        market.setStock("INFY", 1540.25);
        market.setStock("TCS", 3498.50);

        market.deregisterObserver(web);

        market.setStock("WIPRO", 425.10);
    }
}
