enum Intensity {LIGHT, NORMAL, STRONG};
enum SyrupType { MACADINA, VANILLA, COCONUT, CARAMEL, CHOCOLATE, POPCORN };
class Pogram{
    public static void Main(string[] args)
    {
        string[] orders = ["Americano", "Cappuccino"];
        Barista lazyBarista = new Barista();
        lazyBarista.ProcessOrders(orders);
    }
}
