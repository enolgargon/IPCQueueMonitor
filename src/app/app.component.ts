import {Component} from '@angular/core';
import {PosixMonitorComponent} from './posix-monitor/posix-monitor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monitors = [];

  constructor() {
    this.createMonitor();
  }

  createMonitor() {
    this.monitors.push(new PosixMonitorComponent());
  }
}
