﻿//lib to handle json
using Newtonsoft.Json;
//classes for each universe
using UniverseDefinition;

class Program
{
    static string ClassifyCreatures(Creature creature)
    {
        int marvelness = 0, starwarness = 0, hitchness = 0, ringness = 0;

        //check planet
        if (creature.planet != null)
        {
            if (MarvelUniverse.Planets.Contains(creature.planet)) marvelness++;
            if (StarWarsUniverse.Planets.Contains(creature.planet)) starwarness++;
            if (HitchhikersUniverse.Planets.Contains(creature.planet)) hitchness++;
            if (LordOfTheRingsUniverse.Planets.Contains(creature.planet)) ringness++;
        }
        //check traits
        foreach (var trait in creature.traits ?? Array.Empty<string>())
        {
            if (MarvelUniverse.Traits.Contains(trait)) marvelness++;
            if (StarWarsUniverse.Traits.Contains(trait)) starwarness++;
            if (LordOfTheRingsUniverse.Traits.Contains(trait)) ringness++;
            if (HitchhikersUniverse.Traits.Contains(trait)) hitchness++;
        }

        //marvel
        if (creature.planet == "Asgard" && creature.age <= MarvelUniverse.AsgardianMaxAge) marvelness++;
        //starwars
        if (creature.planet == "Kashyyk" && creature.age <= StarWarsUniverse.WookieMaxAge) starwarness++;
        if (creature.planet == "Endor" && creature.age <= StarWarsUniverse.EwokMaxAge) starwarness++;
        //hitchhickers
        if (creature.planet == "Betelgeuse" && creature.age <= HitchhikersUniverse.BetelgeusianMaxAge) hitchness++;
        if (creature.planet == "Vogsphere" && creature.age <= HitchhikersUniverse.VogonMaxAge) hitchness++;
        //lord of the rings
        if (creature.planet == "Earth" && creature.age <= LordOfTheRingsUniverse.DwarfMaxAge) ringness++;


        int maxPoints = Math.Max(Math.Max(marvelness, starwarness), Math.Max(ringness, hitchness));

        if (maxPoints == marvelness) return "Marvel";
        if (maxPoints == starwarness) return "Star Wars";
        if (maxPoints == ringness) return "Lord of the Rings";
        if (maxPoints == hitchness) return "Hitchhiker's Guide";
        return "undetermined";
    }

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
        foreach (var val in deserializedObject.Input)
        {
            switch (ClassifyCreatures(val))
            {
                case "Marvel":
                    creatureLists.Marvel.Add(val);
                    //push to marvel list
                    break;
                case "Star Wars":
                    creatureLists.Star_wars.Add(val);
                    //push to Star wars list
                    break;
                case "Lord of the Rings":
                    creatureLists.Lord_of_Rings.Add(val);
                    //push to Lord of the rings list
                    break;
                case "Hitchhiker's Guide":
                    creatureLists.Hitchhickers.Add(val);
                    //push to Hitchh list
                    break;
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
    //tell C# to convert 'input' property from input file to Input property in class 
    [JsonProperty("input")]
    public List<Creature> Input { get; set; }
}
public class CreaturesLists
{
    public List<Creature> Star_wars { get; set; }
    public List<Creature> Marvel { get; set; }
    public List<Creature> Lord_of_Rings { get; set; }
    public List<Creature> Hitchhickers { get; set; }
}