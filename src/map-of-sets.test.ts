import { MapOfSets } from '@/map-of-sets';

describe('map-of-sets', () => {
  describe('.add()', () => {
    it('adds items to different maps', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key2', 'value2');
      expect(mapset.toArray('key1')).toEqual(['value1']);
      expect(mapset.toArray('key2')).toEqual(['value2']);
    });

    it('can add multiple items per map', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key1', 'value2');
      mapset.add('key2', 'value3');
      mapset.add('key2', 'value4');
      expect(mapset.toArray('key1')).toEqual(['value1', 'value2']);
      expect(mapset.toArray('key2')).toEqual(['value3', 'value4']);
    });

    it('can add the same items in multiple maps', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key2', 'value1');
      expect(mapset.toArray('key1')).toEqual(['value1']);
      expect(mapset.toArray('key2')).toEqual(['value1']);
    });

    it('does not add the same items in the same map', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key1', 'value1');
      expect(mapset.toArray('key1')).toEqual(['value1']);
    });
  });

  describe('.has()', () => {
    it('returns true when item exists in the requested map', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      expect(mapset.has('key1', 'value1')).toEqual(true);
    });

    it('returns false when item does not exists in the requested map', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      expect(mapset.has('key1', 'value2')).toEqual(false);
    });

    it('returns false when item does not exists in the requested map, but exists in other maps', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key2', 'value2');
      expect(mapset.has('key1', 'value2')).toEqual(false);
    });
  });

  describe('.delete()', () => {
    it('removes an existing item from the requested map', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      expect(mapset.has('key1', 'value1')).toEqual(true);
      mapset.delete('key1', 'value1');
      expect(mapset.has('key1', 'value1')).toEqual(false);
    });

    it('does not remove same items from the other maps', () => {
      const mapset = new MapOfSets<string, string>();
      mapset.add('key1', 'value1');
      mapset.add('key2', 'value1');
      expect(mapset.has('key2', 'value1')).toEqual(true);
      mapset.delete('key1', 'value1');
      expect(mapset.has('key2', 'value1')).toEqual(true);
    });
  });
});
