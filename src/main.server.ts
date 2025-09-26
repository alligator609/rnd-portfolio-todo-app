// main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { BootstrapContext } from '@angular/platform-browser'; // Import BootstrapContext
import { App } from './app/app';

// The bootstrap function must now accept a context argument
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;