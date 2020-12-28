export class Todo {
  public id: number;
  public text: string;
  public completion: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().getTime(); // ~id from db
    this.completion = false; // default
  }
}
