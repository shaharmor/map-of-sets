export class MapOfSets<A, B> {
  private readonly map: Map<A, Set<B>>;

  constructor() {
    this.map = new Map<A, Set<B>>();
  }

  public add(a: A, b: B): void {
    let set = this.map.get(a);
    if (!set) {
      set = new Set();
      this.map.set(a, set);
    }
    set.add(b);
  }

  public has(a: A, b: B): boolean {
    const set = this.map.get(a);
    if (!set) {
      return false;
    }
    return set.has(b);
  }

  public delete(a: A, b: B): void {
    const set = this.map.get(a);
    if (!set) {
      return;
    }
    set.delete(b);
    if (set.size === 0) {
      this.map.delete(a);
    }
  }

  public toArray(a: A): B[] {
    const set = this.map.get(a);
    if (!set) {
      return [];
    }
    return Array.from(set);
  }
}
