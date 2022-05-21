import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Bob', 'bobTyson');
    console.log('two seconds to finish...');
    console.log(await user.getAddress());
}

clientCode();
