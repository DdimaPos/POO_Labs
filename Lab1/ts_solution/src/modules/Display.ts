export class Display {
  constructor(
    public Width: number,
    public Height: number,
    public Ppi: number,
    public Model: string,
  ) {}

  private GetArea = (): number => this.Width * this.Height;

  private ShowResult(result: number, characteristic: string, m: Display): void {
    var answers: { [key: number]: string } = {
      [-1]: `${m.Model} has bigger ${characteristic} than ${this.Model}`,
      [1]: `${this.Model} has bigger ${characteristic} than ${m.Model}`,
      [0]: `Both monitors are of the same size`,
    };
    console.log(answers[result]);
  }

  public CompareSize(m: Display): void {
    var characteristic = "screen size";
    var currentSize = this.GetArea();
    var mSize = m.GetArea();
    var diff = currentSize - mSize;
    if (diff === 0) this.ShowResult(0, characteristic, m);
    if (diff < 0) this.ShowResult(-1, characteristic, m);
    if (diff > 0) this.ShowResult(1, characteristic, m);
  }

  public CompareSharpness(m: Display): void {
    var characteristic = "sharpness";
    var diff = this.Ppi - m.Ppi;
    if (diff === 0) this.ShowResult(0, characteristic, m);
    if (diff < 0) this.ShowResult(-1, characteristic, m);
    if (diff > 0) this.ShowResult(1, characteristic, m);
  }

  public CompareWithMonitor(m: Display) {
    console.log(`Overall comparison of monitors\n
                 --------------------------------`);
    this.CompareSize(m);
    this.CompareSharpness(m);
  }
}
