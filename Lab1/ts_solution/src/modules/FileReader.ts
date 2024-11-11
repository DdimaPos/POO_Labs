import { promises as fs } from "fs";
import { TextData } from "./TextData";
export class FileReader {
    static async ReadFileData(paths: string[]): Promise<TextData[]> {
        const dataList: TextData[] = [];

        for (const path of paths) {
            try {
                const text = await fs.readFile(path, "utf-8");
                dataList.push(TextData.ProcessText(path, text));
            } catch (err) {
                throw new Error(`Error occurred: ${err}`);
            }
        }
        return dataList;
    }
}
