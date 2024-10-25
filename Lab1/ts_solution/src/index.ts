import { Assistant, Display, FileReader, TextData } from "./modules";

class Programm {
    static ShowHelp(){
        console.log("Usage: dotnet run <task_number> [filenames]");
        console.log("Available task numbers:");
        console.log("1 - Compare monitors");
        console.log("2 - Read files and process text data");
        console.log("3 - Class Decomposition");
        console.log("4 - Bonus for task 2");
        console.log();
        console.log("Flags:");
        console.log("-h, --help    Display this help information.");
    }
    private static Task1() {
        const monitor1 = new Display(1920, 1080, 700, "Monitor1");
        const monitor2 = new Display(2560, 1440, 600, "Monitor2");
        const monitor3 = new Display(3840, 2160, 400, "Monitor3");

        monitor1.CompareWithMonitor(monitor2);
        console.log();
        monitor1.CompareWithMonitor(monitor1);
        console.log();
        monitor3.CompareWithMonitor(monitor2);
        console.log();
    }

    private static async Task2(args: string[]): Promise<void>{
        var dataList: TextData[] = await FileReader.ReadFileData(args);
        dataList.forEach((data) => console.log(data));
    }
    private static Task3() {
        var assistant = new Assistant("Assistant1");

        const monitor1 = new Display(1920, 1080, 700, "Monitor1");
        const monitor2 = new Display(2560, 1440, 600, "Monitor2");
        const monitor3 = new Display(3840, 2160, 400, "Monitor3");

        assistant.AssignDisplay(monitor1);
        assistant.AssignDisplay(monitor2);
        assistant.AssignDisplay(monitor3);

        assistant.Assist();

        assistant.BuyDisplay(monitor3);
        assistant.Assist();
    }
    private static async Task4(args: string[]): Promise<void> {
        var dataList: TextData[] = await FileReader.ReadFileData(args);
        dataList.forEach((data) => console.log(data));
    }

    static Main(Args: string[]): void {
        if(Args.length == 0 || Args[0] == "-h" || Args[0]=="--help"){
            Programm.ShowHelp();
            return;
        }
        switch (Args[0]){
            case "1":
                this.Task1();
            break;
            case "2":
                this.Task2(Args.slice(1));
            break;
            case "3":
                this.Task3();
            break;
            case "4":
                this.Task4(Args.slice(1));
            break;
        }
    }
}
Programm.Main(process.argv.slice(2));
