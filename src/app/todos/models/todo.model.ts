export class Todo {
  public id: number;
  public text: string;
  public completion: boolean;

  constructor(text: string) {
    this.id = new Date().getTime(); // ~id from db
    this.text = text;
    this.completion = false; // default
  }
}
