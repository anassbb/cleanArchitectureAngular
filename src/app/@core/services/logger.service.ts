export enum LogLevel {
  off = 0,
  error,
  warning,
  info,
  debug,
}

export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;

export class Logger {
  static level = LogLevel.debug;

  static outputs: LogOutput[] = [];

  constructor(private source?: string) {}

  static enableProductionMode() {
    Logger.level = LogLevel.warning;
  }

  debug(...objects: any[]) {
    this.log(console.log, LogLevel.debug, objects);
  }

  info(...objects: any[]) {
    this.log(console.log, LogLevel.info, objects);
  }

  warn(...objects: any[]) {
    this.log(console.log, LogLevel.warning, objects);
  }

  error(...objects: any[]) {
    this.log(console.log, LogLevel.error, objects);
  }

  private log(func: (...args: any[]) => void, level: LogLevel, objects: any[]) {
    if (level <= Logger.level) {
      const log = this.source ? ["[" + this.source + "]"].concat(objects) : objects;
      func.apply(console, log);
      Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
    }
  }
}
