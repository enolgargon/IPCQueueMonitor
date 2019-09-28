import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posix-monitor',
  templateUrl: './posix-monitor.component.html',
  styleUrls: ['./posix-monitor.component.css']
})
export class PosixMonitorComponent implements OnInit {
  currentMessages = 2000;
  maxMessages = 10000;
  sizeMessages = '10MB';

  id: string;
  queueName: string;

  timeoutFunction;
  errorVisibility = false;

  constructor() {
    this.id = Date.now().toString();
  }

  ngOnInit() {
  }

  queueNameOnChange() {
    if (this.timeoutFunction != null) {
      clearTimeout(this.timeoutFunction);
    }
    this.timeoutFunction = setTimeout(this.queueNameChange.bind(this), 500);
  }

  queueNameChange() {
    this.timeoutFunction = null;
    this.errorVisibility = !this.queueName.startsWith('/');
    alert(this.queueName);
  }
}
