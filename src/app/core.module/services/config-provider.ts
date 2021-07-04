import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

    private config: any = null;

    // constructor() {
    // }

    public getConfig(key: string): unknown {
        return this.config[key];
    }

    public load(): Promise<boolean> {
        return new Promise((resolvePromise) => {
            // This section can be used to get the data of a particular API that is needed for the initail load of the application like application settings or configuration or dictionary information
            resolvePromise(true);
        });
    }
}
