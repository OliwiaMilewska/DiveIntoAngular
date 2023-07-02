// Service to show how provide their own instances of service into components
export class LoggingService {
    lastLog: string = '';

    constructor() { }

    printLog(message: string): void {
        console.log('Now: ' + message);
        console.log('Last: ' + this.lastLog);
        this.lastLog = message;
    }
}
