export class Dictionary {
    id: number
    name: string
    checked: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.checked = false;
    }
}