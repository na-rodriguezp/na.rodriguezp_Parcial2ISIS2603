const host: 'localhost';
const port: '8080';
const appName: 's3-pokemon-api';
const rootApi: 'api';

export const environment = {
  production: false
  baseUrl: `http://${host}:${port}/${appName}/${rootApi}/`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
