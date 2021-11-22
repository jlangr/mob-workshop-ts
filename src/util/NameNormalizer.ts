function numberOfCharactersInString(s: string, char: string) {
  const matches = s.match(new RegExp(char, 'g'))
  return matches ? matches.length : []
}

class ParsedName {
  private readonly _parts: string[]
  private readonly _fullName: string
  private readonly _baseName: string
  private readonly _suffix: string

  constructor(name: string) {
    this._fullName = name.trim()
    this.throwOnExcessCommas()
    const [baseName, suffix] = this._fullName.split(',')
    this._baseName = baseName
    this._suffix = suffix

    this._parts = this._baseName.split(' ')
  }

  baseName() {
    return this._baseName
  }

  isMononym() {
    return this._parts.length === 1
  }

  initial(name: string) {
    return name.length === 1 ? name : `${name[0]}.`
  }

  last() {
    return this._parts.slice(-1)
  }

  first() {
    return this._parts[0]
  }

  isDuonym() {
    return this._parts.length === 2
  }

  middleInitials() {
    return this.middleNames().map(this.initial).join(' ')
  }

  middleNames() {
    return this._parts.slice(1, -1)
  }

  suffix() {
    return this._suffix ? `,${this._suffix}` : ''
  }

  private throwOnExcessCommas() {
    if (numberOfCharactersInString(this._fullName, ',') > 1) throw Error()
  }
}

class NameNormalizer {
  normalize(name: string): string {
    const parsedName = new ParsedName(name)
    if (parsedName.isMononym()) return parsedName.baseName()
    if (parsedName.isDuonym()) return `${parsedName.last()}, ${parsedName.first()}`
    return `${parsedName.last()}, ${parsedName.first()} ${parsedName.middleInitials()}${parsedName.suffix()}`
  }
}

export default NameNormalizer
