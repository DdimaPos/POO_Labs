class Programm
{
    static void ShowHelp()
    {
        Console.WriteLine("Usage: dotnet run <task_number> [filenames]");
        Console.WriteLine("Available task numbers:");
        Console.WriteLine("1 - Compare monitors");
        Console.WriteLine("2 - Read files and process text data");
        Console.WriteLine("3 - Class Decomposition");
        Console.WriteLine("4 - Bonus for task 2");
        Console.WriteLine();
        Console.WriteLine("Flags:");
        Console.WriteLine("-h, --help    Display this help information.");
    }
    
    static void Task1()
    {
        Display monitor1 = new Display(1920, 1080, 700, "Monitor1");
        Display monitor2 = new Display(2560, 1440, 600, "Monitor2");
        Display monitor3 = new Display(3840, 2160, 400, "Monitor3");

        monitor1.CompareWithMonitor(monitor2);
        Console.WriteLine();
        monitor1.CompareWithMonitor(monitor1);
        Console.WriteLine();
        monitor3.CompareWithMonitor(monitor2);
        Console.WriteLine();
    }
    
    static void Task2(string[] arg)
    {

        List<TextData> dataList = FileReader.ReadFileData(arg);
        foreach (var data in dataList)
        {
            Console.WriteLine(data);
        }
    }
    
    static void Task3()
    {

    }

    static void Task4(string[] arg)
    {
        List<TextData> dataList = FileReader.ReadFileData(arg);
        foreach (var data in dataList)
        {
            Console.WriteLine(data);
        }
    }
    
    static void TaskBonus(string[] args)
    {

    }
    
    static void Main(string[] args)
    {
        if (args.Length == 0 || args[0] == "-h" || args[0] == "--help")
        {
            ShowHelp(); return;
        }
        if (args.Length == 0)
        {
            throw new ArgumentException("No task specified. Please provide a task number.");
        }
        switch (args[0])
        {
            case "1":
                Task1();
                break;
            case "2":
                Task2(args[1..]);
                break;
            case "3":
                Task3();
                break;
            case "4":
                Task4(args[1..]);
                break;
            default:
                throw new ArgumentException("Invalid Argument");
        }

    }
}
