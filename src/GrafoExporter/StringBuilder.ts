export class StringBuilder {
    private _lines: string[] = [];
  
    append(line: string = ""): void {
      this._lines.push(line);
    }

    toString(): string {
      return this._lines.join("");
    }
  }

  export default StringBuilder;