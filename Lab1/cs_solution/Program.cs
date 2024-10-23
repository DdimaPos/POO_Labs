class Programm
{
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
    static void Main()
    {
        Task1();
    }
}
