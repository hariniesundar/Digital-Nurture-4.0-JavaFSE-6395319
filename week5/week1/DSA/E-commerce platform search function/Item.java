public class Item {
    int id;
    String name;
    String type;

    public Item(int id, String name, String type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    @Override
    public String toString() {
        return id + " - " + name + " (" + type + ")";
    }
}
