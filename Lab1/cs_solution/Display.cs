class Display
{
    public int Width;
    public int Height;
    public float Ppi;
    public string Model;

    private int GetArea()
    {
        return Width * Height;
    }

    private void ShowResult(int result, string characteristic, Display m){
        switch (result)
        {
            case -1:
                Console.WriteLine($"{m.Model} has bigger {characteristic} than {Model}");
            break;
            case 1:
                Console.WriteLine($"{Model} has bigger {characteristic} than {m.Model}");
                break;
            case 0:
                Console.WriteLine($"Both monitors have the same {characteristic}");
                break;
            default:
                Console.WriteLine($"Couldn't determine the {characteristic}");
                break;
        }
    }

    public Display(int width, int height, float ppi, string model)
    {
        Width = width;
        Height = height;
        Ppi = ppi;
        Model = model;
    }

    public void CompareSize(Display m)
    {
        int currentSize = GetArea();
        int mSize = m.GetArea();
        int result = currentSize.CompareTo(mSize);

        ShowResult(result, "screen size", m);
    }
    public void CompareSharpness(Display m)
    {
        int result = Ppi.CompareTo(m.Ppi);
        ShowResult(result, "sharpness", m);
    }
    public void CompareWithMonitor(Display m)
    {
        Console.WriteLine($"Overall comparison of Monitors ({Model}, {m.Model})");
        Console.WriteLine("---------------------------------");
        CompareSize(m);
        CompareSharpness(m);
    }
}
