class Cappuccino : Coffee
{
    const string name = "Cappuccino";
    public int mlOfMilk;
    public Cappuccino(Intensity intensity, int mlOfMilk):base(intensity){
        this.mlOfMilk=mlOfMilk;
    }
    public override void PrintCoffeeDetails()
    {
        base.PrintCoffeeDetails();
        Console.WriteLine($"Ml of Milk: {mlOfMilk}");
    }
    public new Cappuccino MakeCoffee(string coffeeName = Cappuccino.name)
    {
        base.MakeCoffee(coffeeName);
        Console.WriteLine($"Adding {mlOfMilk} Ml of Milk");
        return this;
    }
}
