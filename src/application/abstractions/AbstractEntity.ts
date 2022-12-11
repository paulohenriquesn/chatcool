export abstract class AbstractEntity<T> {
  protected constructor(props: T, id?: string) {
    this.id = id ?? undefined;
    this.props = props;
  }

  readonly id?: string;
  protected readonly props: T;
}
