import java.util.Arrays;
import java.util.Comparator;


public class SearchEngine {

    public static Item findByLinearSearch(Item[] items, String keyword) {
        for (Item item : items) {
            if (item.name.equalsIgnoreCase(keyword)) {
                return item;
            }
        }
        return null;
    }

    public static Item findByBinarySearch(Item[] items, String keyword) {
        int low = 0, high = items.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int result = items[mid].name.compareToIgnoreCase(keyword);
            if (result == 0)
                return items[mid];
            else if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Item[] items = {
            new Item(1, "Monitor", "Electronics"),
            new Item(2, "Notebook", "Stationery"),
            new Item(3, "Phone", "Electronics"),
            new Item(4, "Backpack", "Travel"),
            new Item(5, "Tablet", "Electronics")
        };

        Arrays.sort(items, Comparator.comparing(i -> i.name.toLowerCase()));

        String search = "Tablet";

        Item foundLinear = findByLinearSearch(items, search);
        System.out.println("Linear Search Found: " + (foundLinear != null ? foundLinear : "Not Found"));

        Item foundBinary = findByBinarySearch(items, search);
        System.out.println("Binary Search Found: " + (foundBinary != null ? foundBinary : "Not Found"));
    }
}

