import { Assistant, Display , FileReader, TextData} from "./modules";

class Programm{
    private static Task1(){
        const monitor1 = new Display(1920, 1080, 700, "Monitor1")
        const monitor2 = new Display(2560, 1440, 600, "Monitor2")
        const monitor3 = new Display(3840, 2160, 400, "Monitor3")


        monitor1.CompareWithMonitor(monitor2);
        console.log();
        monitor1.CompareWithMonitor(monitor1);
        console.log();
        monitor3.CompareWithMonitor(monitor2);
        console.log();
        
    }

    private static Task2(args: string[]):void{
       var dataList:TextData[] = FileReader.ReadFileData(args);
       dataList.forEach(data => console.log(data));
    }
    private static Task3(args: string[]){
        var assistant = new Assistant("Assistant1");
        
        const monitor1 = new Display(1920, 1080, 700, "Monitor1")
        const monitor2 = new Display(2560, 1440, 600, "Monitor2")
        const monitor3 = new Display(3840, 2160, 400, "Monitor3")
        
        assistant.AssignDisplay(monitor1);
        assistant.AssignDisplay(monitor2);
        assistant.AssignDisplay(monitor3);

        assistant.Assist();

        assistant.BuyDisplay(monitor3);
        assistant.Assist();
    }
    

    static Main(Args: string[]):void{
        //Programm.Task1();
        //Programm.Task2(Args);
        Programm.Task3(Args);
    }
}
Programm.Main(process.argv.slice(2));
