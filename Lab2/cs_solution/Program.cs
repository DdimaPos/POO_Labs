enum Intensity {LIGHT, NORMAL, STRONG};
class Pogram{
    public static void Main(string[] args)
    {
        Americano coffee1 = new Americano(Intensity.NORMAL, 12);
        coffee1.MakeCoffee();
        Console.WriteLine("---------------------------");
        
        Cappuccino coffee2 = new Cappuccino(Intensity.STRONG, 12);
        coffee2.MakeCoffee();
        Console.WriteLine("---------------------------");

        PumpkinSpiceLatte coffee3 = new PumpkinSpiceLatte(Intensity.STRONG, 12, 7);
        coffee3.MakeCoffee();
        Console.WriteLine("---------------------------");
    }
}
