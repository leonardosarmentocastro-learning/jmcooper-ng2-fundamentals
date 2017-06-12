/**
 * NPM Packages.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/**
 * Project packages.
 */
import {AppModule} from './app.module';

/** Bootstraping the application. */
platformBrowserDynamic().bootstrapModule(AppModule);