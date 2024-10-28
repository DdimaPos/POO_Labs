public class MarvelUniverse
{
    public static List<string> Planets = new List<string> { "Asgard" };//, "Earth", };
    public static List<string> Traits = new List<string> { "BLONDE", "TALL" };
    public static int AsgardianMaxAge = 5000;
    public static bool isHumanoid = true;
}

public class StarWarsUniverse
{
    public static List<string> Planets = new List<string> { "Kashyyyk", "Endor" };
    public static List<string> Traits = new List<string> { "HAIRY", "TALL", "SHORT" };
    public static int WookieMaxAge = 400;
    public static int EwokMaxAge = 400;
    public bool isHumanoid = false;
}

public class HitchhikersUniverse
{
    public static List<string> Planets = new List<string> { "Betelgeuse", "Vogsphere" };
    public static List<string> Traits = new List<string> { "EXTRA_ARMS", "EXTRA_HEAD", "GREEN", "BULKY" };
    public static int BetelgeusianMaxAge = 100;
    public static int VogonMaxAge = 200;
    public bool isHumanoidBetel = true;
    public bool ishumanoidVogon = false;
}

public class LordOfTheRingsUniverse
{
    public static List<string> Planets = new List<string> { "Earth" };
    public static List<string> Traits = new List<string> { "SHORT", "BULKY", "POINTY_EARS" };
    public static int DwarfMaxAge = 200;
    public static int ElfMaxAge = int.MaxValue;
    public bool isHumanoid = true;
}
