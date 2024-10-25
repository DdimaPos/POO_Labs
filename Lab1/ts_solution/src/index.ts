import { Display } from "./modules";

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
    public static Main(Args: string[]):void{
        Programm.Task1();
    }
}
Programm.Main(process.argv.slice(2));
