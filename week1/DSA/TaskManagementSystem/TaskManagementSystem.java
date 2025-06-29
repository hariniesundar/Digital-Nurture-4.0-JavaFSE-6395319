public class TaskManagementSystem {

    public static class Task {
        int taskId;
        String taskName;
        String status;
        Task next;

        public Task(int taskId, String taskName, String status) {
            this.taskId = taskId;
            this.taskName = taskName;
            this.status = status;
            this.next = null;
        }

        @Override
        public String toString() {
            return taskId + " - " + taskName + " | Status: " + status;
        }
    }

    private Task head = null;

    public void addTask(int taskId, String taskName, String status) {
        Task newTask = new Task(taskId, taskName, status);
        if (head == null) {
            head = newTask;
        } else {
            Task current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newTask;
        }
        System.out.println("Task added.");
    }

    public void searchTask(int id) {
        Task current = head;
        while (current != null) {
            if (current.taskId == id) {
                System.out.println("Found: " + current);
                return;
            }
            current = current.next;
        }
        System.out.println("Task not found.");
    }

    public void deleteTask(int id) {
        if (head == null) {
            System.out.println("Task list is empty.");
            return;
        }

        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task deleted.");
            return;
        }

        Task prev = head;
        Task current = head.next;

        while (current != null) {
            if (current.taskId == id) {
                prev.next = current.next;
                System.out.println("Task deleted.");
                return;
            }
            prev = current;
            current = current.next;
        }

        System.out.println("Task not found.");
    }

    public void listTasks() {
        if (head == null) {
            System.out.println("No tasks available.");
            return;
        }

        Task current = head;
        while (current != null) {
            System.out.println(current);
            current = current.next;
        }
    }

    public static void main(String[] args) {
        TaskManagementSystem manager = new TaskManagementSystem();

        manager.addTask(1, "Complete Assignment", "Pending");
        manager.addTask(2, "Submit Report", "In Progress");
        manager.addTask(3, "Attend Meeting", "Pending");

        System.out.println("\nAll Tasks:");
        manager.listTasks();

        System.out.println("\nSearching for Task with ID 2:");
        manager.searchTask(2);

        System.out.println("\nDeleting Task with ID 1:");
        manager.deleteTask(1);

        System.out.println("\nTasks After Deletion:");
        manager.listTasks();
    }
}
