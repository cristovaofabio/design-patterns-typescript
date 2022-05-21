import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName;
    }

    async getAddress(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    { street: 'Street A', number: 100 },
                    { street: 'Street B', number: 80 },
                ])
            }, 2000);
        });
    }
}