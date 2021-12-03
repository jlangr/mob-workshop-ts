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
      const lastName = nameParts[2]
      const firstName = nameParts[0]
      var middleInitial = nameParts[1][0]
      middleInitial = nameParts[1].length == 0 ? middleInitial : `${middleInitial}.`
      return `${lastName}, ${firstName} ${middleInitial}.`
    }
    return name
  }
}

export default NameNormalizer
