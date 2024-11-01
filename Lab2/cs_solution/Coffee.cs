enum Intensity {LIGHT, NORMAL, STRONG};
class Coffee{
    Intensity coffeeIntensity;
    const string name = "Coffee";

    public virtual void PrintCoffeeDetails(){
        Console.WriteLine($"{name} intensity: {coffeeIntensity}");
    }
}
