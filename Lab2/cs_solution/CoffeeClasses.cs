/*namespace CoffeeClasses
{
    class Coffee
    {
        Intensity CoffeeIntensity;
        const string Name = "Coffee";
        public Coffee(Intensity intensity)
        {
            this.CoffeeIntensity = intensity;
        }
        public virtual void PrintCoffeeDetails()
        {
            Console.WriteLine($"{Name} intensity: {CoffeeIntensity}");
        }
        public Coffee MakeCoffee(string coffeeName = Coffee.Name)
        {
            Console.WriteLine($"Making now a cup of {coffeeName}");
            return this;
        }
    }

    class Americano : Coffee
    {
        const string name = "Americano";
        int MlOfWater;

        public Americano(Intensity intensity, int mlOfWater) : base(intensity)
        {
            this.MlOfWater = mlOfWater;
        }

        public override void PrintCoffeeDetails()
        {
            base.PrintCoffeeDetails();
            Console.WriteLine($"Ml of water: {MlOfWater}");
        }

        public new Americano MakeCoffee(string coffeeName = Americano.name)
        {
            base.MakeCoffee(coffeeName);
            Console.WriteLine($"Adding {MlOfWater} Ml of water");
            return this;
        }
    }

    class Cappuccino : Coffee
    {
        const string name = "Cappuccino";
        public int mlOfMilk;
        public Cappuccino(Intensity intensity, int mlOfMilk) : base(intensity)
        {
            this.mlOfMilk = mlOfMilk;
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

    class PumpkinSpiceLatte : Cappuccino
    {
        const string name = "PumpkinSpiceLatte";
        int mgOfPumpkinSpice;
        public PumpkinSpiceLatte(Intensity intensity, int mlOfMilk, int mgOfPumpkinSpice) : base(intensity, mlOfMilk)
        {
            this.mgOfPumpkinSpice = mgOfPumpkinSpice;
        }
        public override void PrintCoffeeDetails()
        {
            base.PrintCoffeeDetails();
            Console.WriteLine($"Mg of Pumpkin Spice {mgOfPumpkinSpice}");
        }
        public new PumpkinSpiceLatte MakeCoffee(string coffeeName = PumpkinSpiceLatte.name)
        {
            base.MakeCoffee(coffeeName);
            Console.WriteLine($"Add {mgOfPumpkinSpice} Mg of Pumpkin Spice");
            return this;
        }
    }
    class SyrupCappuccino : Cappuccino
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
}*/
