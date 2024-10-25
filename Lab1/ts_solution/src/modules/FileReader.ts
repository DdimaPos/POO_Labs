import { promises as fs } from "fs";
import { TextData } from "./TextData";
export class FileReader {
    static ReadFileData(paths: string[]): TextData[] {
        var dataList: TextData[] = new Array(paths.length);
        paths.forEach(async (path: string): Promise<void> => {
            try {
                var text = await fs.readFile(path, "utf-8");
                dataList.push(TextData.ProcessText(path, text));
            } catch (err) {
                throw new Error(`Error occured: ${err}`);
            }
        });

        return dataList;
    }
}
