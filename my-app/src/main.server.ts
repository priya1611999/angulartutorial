import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Appcomponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Appcomponent, config, context);

export default bootstrap;
