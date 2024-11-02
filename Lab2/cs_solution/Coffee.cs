class Coffee{
    Intensity CoffeeIntensity;
    const string Name = "Coffee";
    public Coffee(Intensity intensity){
        this.CoffeeIntensity = intensity;
    }
    public virtual void PrintCoffeeDetails(){
        Console.WriteLine($"{Name} intensity: {CoffeeIntensity}");
    }
    public Coffee MakeCoffee(string coffeeName = Coffee.Name){
        Console.WriteLine($"Making now a cup of {coffeeName}");
        return this;
    }
}
