namespace CoffeeShop;
internal class SyrupCappuccino : Cappuccino
{
    const string name = "SyrupCappuccino";
    SyrupType syrup;
    public SyrupCappuccino(Intensity intensity, int mlOfMilk, SyrupType syrup) : base(intensity, mlOfMilk)
    {
        this.syrup = syrup;
    }
    public override void PrintCoffeeDetails()
    {
        base.PrintCoffeeDetails();
        Console.WriteLine($"Syrup used : {syrup}");
    }
    public new SyrupCappuccino MakeCoffee(string coffeeName = SyrupCappuccino.name)
    {
        base.MakeCoffee(coffeeName);
        Console.WriteLine($"Add the {syrup} syrup");
        return this; 
    }
}
