import java.util.HashMap;
import java.util.Map;

public class InventoryManager {

    // Inventory stored as a HashMap with productId as key
    private static final Map<Integer, Product> inventory = new HashMap<>();

    static void addProduct(Product product) {
        if (inventory.containsKey(product.productId)) {
            System.out.println("Product ID already exists. Use update instead.");
        } else {
            inventory.put(product.productId, product);
            System.out.println(" Product added: " + product.productName);
        }
    }

    public static void updateProduct(int id, int quantity, double price) {
        Product prod = inventory.get(id);
        if (prod != null) {
            prod.quantity = quantity;
            prod.price = price;
            System.out.println(" Product updated: " + prod.productName);
        } else {
            System.out.println(" Product not found with ID: " + id);
        }
    }

    public static void deleteProduct(int id) {
        if (inventory.remove(id) != null) {
            System.out.println(" Product deleted: ID " + id);
        } else {
            System.out.println(" Product not found with ID: " + id);
        }
    }

    public static void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println(" Inventory is empty.");
        } else {
            System.out.println(" Inventory List:");
            for (Product p : inventory.values()) {
                System.out.println(p);
            }
        }
    }

    public static void main(String[] args) {
        // Add some products
        addProduct(new Product(101, "Laptop", 5, 75000));
        addProduct(new Product(102, "Mouse", 30, 499));
        addProduct(new Product(103, "Keyboard", 15, 999));

        System.out.println("\n Initial Inventory:");
        displayInventory();

        // Update a product
        System.out.println("\n Updating product 102...");
        updateProduct(102, 25, 450);

        System.out.println("\n Inventory after update:");
        displayInventory();

        // Delete a product
        System.out.println("\n Deleting product 103...");
        deleteProduct(103);

        System.out.println("\n Final Inventory:");
        displayInventory();
    }

    // Inner class for Product
    static class Product {
        int productId;
        String productName;
        int quantity;
        double price;

        public Product(int productId, String productName, int quantity, double price) {
            this.productId = productId;
            this.productName = productName;
            this.quantity = quantity;
            this.price = price;
        }

        @Override
        public String toString() {
            return productId + " - " + productName + " | Qty: " + quantity + " | Rs." + price;
        }
    }
}
