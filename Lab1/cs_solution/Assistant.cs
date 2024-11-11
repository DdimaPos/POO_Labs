public class Assistant
{
    public string Name; 
    private List<Display> assignedDisplays;

    public Assistant(string name)
    {
        Name = name;
        assignedDisplays = new List<Display>();
    }

    public void AssignDisplay(Display display)
    {
        assignedDisplays.Add(display);
        Console.WriteLine($"{display.Model} assigned to {Name}.\n");
    }

    public void Assist()
    {
        Console.WriteLine("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        Console.WriteLine($"Assisting with display comparisons for {Name}:");
        Console.WriteLine("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        for (int i = 0; i < assignedDisplays.Count - 1; i++)
        {
            assignedDisplays[i].CompareWithMonitor(assignedDisplays[i + 1]);
            Console.WriteLine();
        }
    }

    public Display? BuyDisplay(Display display)
    {
        if (assignedDisplays.Remove(display))
        {
            Console.WriteLine($"{display.Model} has been removed from the list");
            return display;
        }
        else
        {
            Console.WriteLine($"{display.Model} is not in the list.\n");
            return null;
        }
    }
}
