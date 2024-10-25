import { Display } from "./Display";
export class Assistant {
    public Name: string;
    private assignedDisplays: Display[];

    constructor(asName: string) {
        this.Name = asName;
        this.assignedDisplays = [];
    }
    AssignDisplay(display: Display): void {
        this.assignedDisplays.push(display);
        console.log(`${display.Model} assigned`)
    }
    Assist(): void {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`Assisting with display comparisons for ${this.Name}:`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        for (let i = 0; i < this.assignedDisplays.length - 1; i++) {
            this.assignedDisplays[i].CompareWithMonitor(this.assignedDisplays[i + 1]);
            console.log(`\n`);
        }
    }
    BuyDisplay(display: Display): Display | null {
        const index = this.assignedDisplays.indexOf(display);

        if (index !== -1) {
            this.assignedDisplays.splice(index, 1);
            console.log(`${display.Model} has been removed from the list`);
            return display;
        } else {
            console.log(`${display.Model} is not in the list.\n`);
            return null;
        }
    }
}
