let devServerPort: number = 8080;

export interface IConfig {
  databaseName: string;
  databaseUrl: string;
  debugLog: boolean;
  serverPort: number;
  serverUrl: string;
}

let devConfig: IConfig = {
  databaseName: "coffeeboy",
  databaseUrl: "mongodb://localhost/" + this.databaseName,
  debugLog: false,
  serverPort: devServerPort,
  serverUrl: "http://localhost:" + devServerPort
};

export function config(): IConfig {
  "use strict";
  switch (process.env.NODE_ENV) {
    case "development":
      return devConfig;
    default:
      throw "No config found for environment " + process.env.NODE_ENV;
  }
};
