//lib to handle json
using Newtonsoft.Json;
//libs to read the file
using System;
using System.Collections.Generic;
using System.IO;



class Program{
    static void Main(string[] args){
        string path="./resources/input.json";
        string fileContent =File.ReadAllText(path);
        
        //deserialize the content
        var deserializedObject = JsonConvert.DeserializeObject<Root>(fileContent);
        
        foreach(var val in deserializedObject.Input){
            Console.WriteLine($"{val.id} {val.isHumanoid} {val.planet} {val.age} {val.traits}");
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
