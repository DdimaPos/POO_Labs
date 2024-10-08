//lib to handle json
using Newtonsoft.Json;
//define the classes for each universe and corresponding data
public class MarvelUniverse{
    public static List<string> Planets = new List<string> { "Asgard"};//, "Earth", };
    public static List<string> Traits = new List<string> { "BLONDE", "TALL"};
    public static int EarthMaxAge=100;
    public static int AsgardianMaxAge = 5000;
    public static bool isHumanoid = true;
}

public class StarWarsUniverse{
    public static List<string> Planets = new List<string> { "Kashyyyk", "Endor" };
    public static List<string> Traits = new List<string> { "HAIRY", "TALL", "SHORT" };
    public static int WookieMaxAge = 400;
    public static int EwokMaxAge = 400;
    public bool isHumanoid = false;
}

public class HitchhikersUniverse{
    public static List<string> Planets = new List<string> { "Betelgeuse", "Vogsphere" };
    public static List<string> Traits = new List<string> { "EXTRA_ARMS", "EXTRA_HEAD", "GREEN", "BULKY" };
    public static int BetelgeusianMaxAge = 100;
    public static int VogonMaxAge = 200;
    public bool isHumanoidBetel = true;
    public bool ishumanoidVogon = false;
}

public class LordOfTheRingsUniverse{
    public static List<string> Planets = new List<string> {"Earth"}; 
    public static List<string> Traits = new List<string> { "SHORT", "BULKY", "POINTY_EARS" };
    public static int DwarfMaxAge = 200;
    public static int ElfMaxAge = int.MaxValue;
    public bool isHumanoid=true;
}

class Program{
    static string ClassifyCreatures(Creature creature){
        int marvelness = 0, starwarness = 0, hitchness = 0, ringness =0;

        //check planet
        if (creature.planet != null){
            if (MarvelUniverse.Planets.Contains(creature.planet)) marvelness++;
            if (StarWarsUniverse.Planets.Contains(creature.planet)) starwarness++;
            if (HitchhikersUniverse.Planets.Contains(creature.planet)) hitchness++;
            if (LordOfTheRingsUniverse.Planets.Contains(creature.planet)) ringness++;
        }
        //check traits
        foreach (var trait in creature.traits ?? Array.Empty<string>()){
            if (MarvelUniverse.Traits.Contains(trait)) marvelness++;
            if (StarWarsUniverse.Traits.Contains(trait)) starwarness++;
            if (LordOfTheRingsUniverse.Traits.Contains(trait)) ringness++;
            if (HitchhikersUniverse.Traits.Contains(trait)) hitchness++;
        }

        //check age
        //marvel
        //if(creature.planet == "Earth" && creature.age <= MarvelUniverse.EarthMaxAge) marvelness++;
        if(creature.planet == "Asgard" && creature.age <= MarvelUniverse.AsgardianMaxAge) marvelness++;
        //starwars
        
        if(creature.planet == "Kashyyk" && creature.age <= StarWarsUniverse.WookieMaxAge) starwarness++;
        if(creature.planet == "Endor" && creature.age <= StarWarsUniverse.EwokMaxAge) starwarness++;

        //hitchhickers
        if(creature.planet == "Betelgeuse" && creature.age <= HitchhikersUniverse.BetelgeusianMaxAge) hitchness++;
        if(creature.planet == "Vogsphere" && creature.age <= HitchhikersUniverse.VogonMaxAge) hitchness++;
        //lord of the rings
        if(creature.planet == "Earth" && creature.age <= LordOfTheRingsUniverse.DwarfMaxAge) ringness++;


        int maxPoints = Math.Max(Math.Max(marvelness, starwarness), Math.Max(ringness, hitchness));

        if (maxPoints == marvelness) return "Marvel";
        if (maxPoints == starwarness) return "Star Wars";
        if (maxPoints == ringness) return "Lord of the Rings";
        if (maxPoints == hitchness) return "Hitchhiker's Guide";
        return "undetermined";
    }
    static void Main(string[] args){
        string path="./resources/input.json";
        string fileContent =File.ReadAllText(path);
        
        //deserialize the content
        var deserializedObject = JsonConvert.DeserializeObject<Root>(fileContent);
        
        foreach(var val in deserializedObject.Input){
            Console.WriteLine($"{val.id} {ClassifyCreatures(val)}");
        }
    }
}

public class Creature{
    public int id;
    public bool? isHumanoid {get; set;}
    public string? planet {get; set;}
    public int? age {get; set;}
    public string[]? traits {get; set;}
}

public class Root{
    //tell C# to convert 'input' property from input file to Input property in class 
    [JsonProperty("input")]
    //list of creatures objects
    public List<Creature> Input { get; set; }}
