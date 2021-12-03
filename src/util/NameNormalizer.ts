/* You might find this useful for one of the later tests:
const numberOfCharactersInString = (s: string, char: string) => {
  const matches = s.match(new RegExp(char, 'g'))
  return matches ? matches.length : []
}
 */

class NameNormalizer {
  normalize(name: string): string {
    name = name.trim()
    const nameParts = name.split(' ')
    if (nameParts.length == 2) {
      const reversed = nameParts.reverse()
      return reversed.join(', ')
    } else if (nameParts.length == 3){
      
    }
    return name;
  }
}

export default NameNormalizer
