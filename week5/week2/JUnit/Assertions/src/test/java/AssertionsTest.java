import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        int a = 2 + 3;
        int b = 5;

        // Assert equals
        assertEquals(b, a);

        // Assert true
        assertTrue(a >= 5);

        // Assert false
        assertFalse(a < 3);

        // Assert null
        Object obj1 = null;
        assertNull(obj1);

        // Assert not null
        Object obj2 = new Object();
        assertNotNull(obj2);
    }
}
