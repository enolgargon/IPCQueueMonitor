export class PosixMonitor {
  mq = new PosixMQ();

  constructor(public queueName: string) {
    if (queueName.startsWith('/')) {
      this.mq.open({name: this.queueName});
    }
  }

  changeQueueName(queueName: string) {
    if (queueName.startsWith('/')) {
      this.queueName = queueName;
      this.mq.close();
      this.mq.open({name: this.queueName});
    }
  }
}
