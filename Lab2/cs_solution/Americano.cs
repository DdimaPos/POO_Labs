class Americano:Coffee{
    const string name = "Americano";
    int mlOfWater;
    public override void PrintCoffeeDetails(){
        base.PrintCoffeeDetails();
        Console.WriteLine($"Ml of water: {mlOfWater}");
    }
}
