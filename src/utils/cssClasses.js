/**
 * Join array of css classes into a single string
 * e.g ['class-a', null, 'class-b'] will give "class-a class-b"
 * @param Array cssClassesArray
 */

export function cssClasses(cssClassesArray) {
  return cssClassesArray.filter((_) => _).join(" ");
}
