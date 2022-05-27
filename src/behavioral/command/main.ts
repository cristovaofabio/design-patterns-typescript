import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

//Receiver
const bedroomLight = new SmartHouseLight('bedroom Light');

//Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);

//Controller
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');
