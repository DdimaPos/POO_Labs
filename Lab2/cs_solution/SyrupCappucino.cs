enum SyrupType { MACADINA, VANILLA, COCONUT, CARAMEL, CHOCOLATE, POPCORN };
class SyrupCappuccino : Cappuccino
{
    const string name = "SyrupCappuccino";
    SyrupType syrup;
    public override void PrintCoffeeDetails()
    {
        base.PrintCoffeeDetails();
        Console.WriteLine($"Syrup used : {syrup}");
    }
}
