
interface Doc {
    void render();
}

class WordDoc implements Doc {
    @Override   
    public void render() {
        System.out.println("Word document opened.");
    }
}

class PdfDoc implements Doc {
    @Override
    public void render() {
        System.out.println("PDF document opened.");
    }
}

class ExcelDoc implements Doc {
    @Override
    public void render() {
        System.out.println("Excel document opened.");
    }
}

abstract class DocFactory {
    public abstract Doc createDoc();
}

class WordDocFactory extends DocFactory {
    @Override
    public Doc createDoc() {
        return new WordDoc();
    }
}

class PdfDocFactory extends DocFactory {
    @Override
    public Doc createDoc() {
        return new PdfDoc();
    }
}

class ExcelDocFactory extends DocFactory {
    @Override
    public Doc createDoc() {
        return new ExcelDoc();
    }
}

public class FactoryMethodPattern {
    public static void main(String[] args) {
        DocFactory factory1 = new WordDocFactory();
        DocFactory factory2 = new PdfDocFactory();
        DocFactory factory3 = new ExcelDocFactory();

        Doc doc1 = factory1.createDoc();
        Doc doc2 = factory2.createDoc();
        Doc doc3 = factory3.createDoc();

        doc1.render();
        doc2.render();
        doc3.render();
    }
}
