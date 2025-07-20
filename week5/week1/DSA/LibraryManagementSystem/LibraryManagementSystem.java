import java.util.Arrays;
import java.util.Comparator;

public class LibraryManagementSystem {

    // Book class with bookId, title, and author
    public static class Book {
        int bookId;
        String title;
        String author;

        public Book(int bookId, String title, String author) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
        }

        @Override
        public String toString() {
            return bookId + " - " + title + " by " + author;
        }
    }

    // Linear search
    public static Book searchByLinear(Book[] books, String targetTitle) {
        for (Book book : books) {
            if (book.title.equalsIgnoreCase(targetTitle)) {
                return book;
            }
        }
        return null;
    }

    // Binary search (on sorted array)
    public static Book searchByBinary(Book[] books, String targetTitle) {
        int low = 0, high = books.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = books[mid].title.compareToIgnoreCase(targetTitle);
            if (cmp == 0)
                return books[mid];
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Book[] books = {
            new Book(101, "Java Programming", "James Gosling"),
            new Book(102, "Python Crash Course", "Eric Matthes"),
            new Book(103, "Clean Code", "Robert C. Martin"),
            new Book(104, "The Pragmatic Programmer", "Andrew Hunt"),
            new Book(105, "Data Structures", "Narasimha Karumanchi")
        };

        // Sort books by title for binary search
        Arrays.sort(books, Comparator.comparing(b -> b.title.toLowerCase()));

        String searchTitle = "Clean Code";

        Book resultLinear = searchByLinear(books, searchTitle);
        System.out.println("Linear Search Result: " + (resultLinear != null ? resultLinear : "Not Found"));

        Book resultBinary = searchByBinary(books, searchTitle);
        System.out.println("Binary Search Result: " + (resultBinary != null ? resultBinary : "Not Found"));
    }
}
