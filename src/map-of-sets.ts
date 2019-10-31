export class MapOfSets<A, B> {
  private readonly map: Map<A, Set<B>>;

  constructor() {
    this.map = new Map();
  }

  public add(a: A, b: B) {
    let set = this.map.get(a);
    if (!set) {
      set = new Set();
      this.map.set(a, set);
    }
    set.add(b);
  }

  public has(a: A, b: B) {
    const set = this.map.get(a);
    if (!set) {
      return false;
    }
    return set.has(b);
  }

  public delete(a: A, b: B) {
    const set = this.map.get(a);
    if (!set) {
      return;
    }
    set.delete(b);
    if (set.size === 0) {
      this.map.delete(a);
    }
  }

  public toArray(a: A) {
    const set = this.map.get(a);
    if (!set) {
      return [];
    }
    return Array.from(set);
  }
}
