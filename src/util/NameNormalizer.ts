/* You might find this useful for one of the later tests:
const numberOfCharactersInString = (s: string, char: string) => {
  const matches = s.match(new RegExp(char, 'g'))
  return matches ? matches.length : []
}
 */

class NameNormalizer {
  normalize(_: string): string {
    return "??"
  }
}

export default NameNormalizer
