export class Word {
    foreign: string;
    translations: string[]; 

    constructor(foreign: string, translations: string[]) {
        this.foreign = foreign;
        this.translations = translations;
    }
}
