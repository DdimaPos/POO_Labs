class FileReader{
    public static List<TextData> ReadFileData(string[] paths){
        List<TextData> dataList = new List<TextData>();
        foreach(var path in paths){
            try{
                string text = File.ReadAllText(path);
                dataList.Add(TextData.ProcessText(Path.GetFileName(path), text));
            }catch(FileNotFoundException err){
                throw new FileNotFoundException($"Error: File {path} can't be found \n{err.Message}");
            }
        } 
        return dataList;
    }
}
