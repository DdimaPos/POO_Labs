//lib to handle json
using Newtonsoft.Json;
//classes for each universe


class Program
{
    static void Main(string[] args)
    {
        string path = "./resources/input.json";
        string fileContent = File.ReadAllText(path);

        //deserialize the content
        var deserializedObject = JsonConvert.DeserializeObject<Root>(fileContent);
        //save the creatures by their own lists
        var creatureLists = new CreaturesLists
        {
            Star_wars = new List<Creature>(),
            Marvel = new List<Creature>(),
            Lord_of_Rings = new List<Creature>(),
            Hitchhickers = new List<Creature>()
        };
        if (deserializedObject?.Input != null)
        {

            foreach (var val in deserializedObject.Input)
            {
                switch (Clasify.ClassifyCreatures(val))
                {
                    case "Marvel":
                        creatureLists.Marvel.Add(val);
                        break;
                    case "Star Wars":
                        creatureLists.Star_wars.Add(val);
                        break;
                    case "Lord of the Rings":
                        creatureLists.Lord_of_Rings.Add(val);
                        break;
                    case "Hitchhiker's Guide":
                        creatureLists.Hitchhickers.Add(val);
                        break;
                    default:
                        Console.WriteLine($"Unknown universe: ${val.id}");
                        break;
                }
            }
        }
        SaveUniverseToJson(creatureLists.Marvel, "Marvel");
        SaveUniverseToJson(creatureLists.Star_wars, "Star_Wars");
        SaveUniverseToJson(creatureLists.Lord_of_Rings, "Lord_of_the_Rings");
        SaveUniverseToJson(creatureLists.Hitchhickers, "Hitchhickers");
    }
    static void SaveUniverseToJson(List<Creature> creatures, string universeName)
    {
        string json = JsonConvert.SerializeObject(creatures, Formatting.Indented);

        string filename = $"./resources/{universeName}_creatures.json";

        File.WriteAllText(filename, json);
    }
}
public class Creature
{
    public int id;
    public bool? isHumanoid { get; set; }
    public string? planet { get; set; }
    public int? age { get; set; }
    public string[]? traits { get; set; }
}

public class Root
{
    [JsonProperty("input")]
    public List<Creature>? Input { get; set; }
}
public class CreaturesLists
{
    public List<Creature>? Star_wars { get; set; }
    public List<Creature>? Marvel { get; set; }
    public List<Creature>? Lord_of_Rings { get; set; }
    public List<Creature>? Hitchhickers { get; set; }
}
