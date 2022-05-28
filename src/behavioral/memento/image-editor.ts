import { Memento } from "./memento";
import { MementoProtocol } from "./memento-protocol";

//Originator
export class ImageEditor {
    constructor(
        private filePath: string,
        private fileFormat: string
    ) { }

    convertFormatTo(format: string): void {
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + format;
    }

    save(): Readonly<MementoProtocol> {
        const date = new Date();
        return new Memento('someName', date, this.filePath, this.fileFormat);
    }

    restore(memento: MementoProtocol): void {
        const concreteMemento = memento as Memento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}
