public class BuilderPattern {

    public static class Computer {
        private final String CPU;
        private final String RAM;
        private final String storage;
        private final String graphicsCard;

        private Computer(Builder builder) {
            this.CPU = builder.CPU;
            this.RAM = builder.RAM;
            this.storage = builder.storage;
            this.graphicsCard = builder.graphicsCard;
        }

        @Override
        public String toString() {
            return """
                Computer Specs:
                CPU: %s
                RAM: %s
                Storage: %s
                Graphics Card: %s
                """.formatted(
                CPU,
                RAM,
                storage,
                graphicsCard != null ? graphicsCard : "None"
            );
        }

        public static class Builder {
            private String CPU;
            private String RAM;
            private String storage;
            private String graphicsCard;

            public Builder setCPU(String CPU) {
                this.CPU = CPU;
                return this;
            }

            public Builder setRAM(String RAM) {
                this.RAM = RAM;
                return this;
            }

            public Builder setStorage(String storage) {
                this.storage = storage;
                return this;
            }

            public Builder setGraphicsCard(String graphicsCard) {
                this.graphicsCard = graphicsCard;
                return this;
            }

            public Computer build() {
                return new Computer(this);
            }
        }
    }

    public static void main(String[] args) {
        Computer basicComputer = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM("8GB")
                .setStorage("512GB SSD")
                .build();

        Computer gamingComputer = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM("32GB")
                .setStorage("2TB SSD")
                .setGraphicsCard("NVIDIA RTX 3080")
                .build();

        System.out.println("Basic Computer:");
        System.out.println(basicComputer);

        System.out.println("\nGaming Computer:");
        System.out.println(gamingComputer);
    }
}
