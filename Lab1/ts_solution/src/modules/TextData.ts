export class TextData{
    constructor(
        public fileName: string,
        public text: string,
        public nOfVowels:number,
        public nOfCons:number,
        public nOfLetters:number,       
        public nOfSentences: number,
        public longestWord: string,
    ){}
    static ProcessText(fileName: string, text: string): TextData{
        var vows = this.CountVows(text);
        var cons = this.CountCons(text);
        var letters = vows + cons;
        var nSent = this.CountSentences(text);
        var longestWord = this.FindLongWord(text);
        return new TextData(fileName, text, vows, cons, letters, nSent, longestWord || "")
    }
    static CountVows(text: string):number{
        var vowels = "aeuiohAEUIOH"//["a", "e", "u", "i", "o", "h", "A", "E", "U", "I", "O", "H"]
        return Array.from(text).filter(char => vowels.includes(char)).length;
    }
    
    static CountCons(text: string):number{
        var vowels = ["a", "e", "u", "i", "o", "h", "A", "E", "U", "I", "O", "H"]
        return Array.from(text).filter(char => !vowels.includes(char)).length;
    }
    static CountSentences(text: string):number{
        return (text.match(/[!?.]/g) || []).length;
    }
    static FindLongWord(text:string):string | null {
        const matches = text.match(/\w+/g);

        if (!matches) return null;

        return matches.reduce((longest, current) => 
            current.length > longest.length ? current : longest, "");
    }
    
}
