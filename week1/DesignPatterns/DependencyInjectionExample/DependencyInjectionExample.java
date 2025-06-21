import java.util.HashMap;
import java.util.Map;

interface CustomerRepository {
    Customer findCustomerById(int id);
}

class Customer {
    private final int id;
    private final String name;

    public Customer(int id, String name) {
        this.id = id;
        this.name = name;
    }
    @Override
    public String toString() {
        return "Customer ID: " + id + ", Name: " + name;
    }
}

class CustomerRepositoryImpl implements CustomerRepository {
    private final Map<Integer, Customer> customerDB = new HashMap<>();

    public CustomerRepositoryImpl() {
        customerDB.put(1, new Customer(1, "Harini"));
        customerDB.put(2, new Customer(2, "Rahul"));
    }

    @Override
    public Customer findCustomerById(int id) {
        return customerDB.getOrDefault(id, null);
    }
}

class CustomerService {
    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository; // Constructor Injection
    }

    public void displayCustomer(int id) {
        Customer customer = repository.findCustomerById(id);
        if (customer != null) {
            System.out.println("Customer Found: " + customer);
        } else {
            System.out.println("Customer not found.");
        }
    }
}

public class DependencyInjectionExample {
    public static void main(String[] args) {
        CustomerRepository repo = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repo);

        service.displayCustomer(1);
        service.displayCustomer(3);
    }
}
