function compareMaps(
  map1: Map<String, number>,
  map2: Map<String, number>
): boolean {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let key of map1.keys()) {
    if (!map2.has(key) || map1.get(key) !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

function addToMap(s: String) {
  let map = new Map<String, number>();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  return map;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sMap = addToMap(s);
  let tMap = addToMap(t);

  return compareMaps(sMap, tMap);
}
