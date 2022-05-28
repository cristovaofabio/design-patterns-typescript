import { ImageEditor } from "./image-editor";
import { MementoProtocol } from "./memento-protocol";

export class ImageEditorBackupManager {
    private mementos: MementoProtocol[] = [];

    constructor(
        private readonly imageEditor: ImageEditor
    ) { }

    backup(): void {
        console.log('Backup finished!');
        this.mementos.push(this.imageEditor.save());
    }

    undo(): void {
        const memento = this.mementos.pop();

        if (!memento) {
            console.log('No mementos');
            return;
        }

        this.imageEditor.restore(memento);
        console.log(`Backup ${memento.getName()} - restore completed`);
    }

    showMementos(): void {
        for (const memento of this.mementos) {
            console.log(memento);
        }
    }
}