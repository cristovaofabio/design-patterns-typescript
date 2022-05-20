import { DeviceImplementation } from "../device/device-implementation";
import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
    volumeUp(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() + 10);
        console.log(`${this.device.getName()} - old volume: ${oldVolume}, new volume: ${this.device.getVolume()}`)
    }

    volumeDown(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() - 10);
        console.log(`${this.device.getName()} - old volume: ${oldVolume}, new volume: ${this.device.getVolume()}`)
    }
}