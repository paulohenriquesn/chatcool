export class Logger {
    static LogRequest(raw: unknown) : void {
        console.log(`Request: ${JSON.stringify(raw)}`)
    }
    static LogError(raw: unknown) : void {
        console.log(`Error: ${JSON.stringify(raw)}`)
    }
}