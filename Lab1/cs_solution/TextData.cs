using System.Text.RegularExpressions;

record TextData(
    string fileName,
    string Text,
    int nOfVowels,
    int nOfConsonants,
    int nOfLetters,
    int nOfSentences,
    string longestWord
    )
{

    public static TextData ProcessText(string fileName, string text)
    {
        int vows = CountVows(text);
        int cons = CountCons(text);
        int letters = vows + cons;
        int nsent = CountSentences(text);
        string? longestWord = FindLongWord(text);
        return new TextData(fileName, text, vows, cons, letters, nsent, longestWord ?? "");
    }

    private static int CountVows(string text) =>
        text.Count(val => "aeuiohAEUIOH".Contains(val));

    private static int CountCons(string text) =>
        text.Count(val => char.IsAsciiLetter(val) && !"aeuiohAEUIOH".Contains(val));

    private static int CountSentences(string text) =>
        Regex.Matches(text, @"[!?.](/s | $)").Count;
    
    private static string? FindLongWord(string text){
        MatchCollection matches = Regex.Matches(text, @"\w+");
        return matches
            .Cast<Match>()
            .OrderByDescending(m => m.Length)
            .FirstOrDefault()?.Value;
    } 

}
