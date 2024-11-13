using CoffeeShop;
class Barista{
    public void ProcessOrders(string[] orders){
        foreach(var order in orders){
           ServeCoffee(order); 
        }
    }
    public void ServeCoffee(string order){
        switch(order){
            case "Coffee":
                Coffee esspresso = new Coffee(Intensity.NORMAL);
                esspresso.MakeCoffee();
                break;
            case "Americano":
                Americano americano = new Americano(Intensity.NORMAL, 50);
                americano.MakeCoffee();
                break;
            case "Cappuccino":
                Cappuccino cappuccino = new Cappuccino(Intensity.NORMAL, 150);
                cappuccino.MakeCoffee();
                break;
            case "PumpkinSpiceLatte":
                PumpkinSpiceLatte spiceLatte = new PumpkinSpiceLatte(Intensity.NORMAL, 150, 50);
                spiceLatte.MakeCoffee();
                break;
            case "SyrupCappuccino":
                SyrupCappuccino syrupCappuccino = new SyrupCappuccino(Intensity.NORMAL, 150, SyrupType.CARAMEL);
                syrupCappuccino.MakeCoffee();
                break;
            default:
                Console.WriteLine($"Not a valid coffee type: {order}");
            break;
        }
    }
}
