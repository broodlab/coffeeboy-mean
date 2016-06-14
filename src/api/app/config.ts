const databaseName: string = "coffeeboy";
const serverContextPath: string = "/api";
const serverPort: number = 8080;

export const config = {
  databaseName: databaseName,
  databaseUrl: "mongodb://localhost/" + databaseName,
  debugLog: true,
  serverContextPath: serverContextPath,
  serverPort: 8080,
  serverUrl: "http://localhost:" + serverPort + serverContextPath
};
