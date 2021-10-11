class Vector {

  static #idIcrementer: number = 0

  #id: number = 0
  #vec: Array<number> = [0, 0]

  constructor (x: number = 0, y: number = 0) {
    Vector.#idIcrementer++
    this.#vec = [x, y]
    this.#id = Vector.#idIcrementer
  }

  get vec () : Array<number> {
    return this.#vec
  }

  public log () : void {
    console.log(`Vector <${this.#id}> [x: ${this.#vec[0]}, y: ${this.#vec[1]}]`)
  }

  public add(v: Vector) : void {
    this.#vec = [this.#vec[0] + v.vec[0], this.#vec[1] + v.vec[1]]
  }

  public sub(v: Vector) : void {
    this.#vec = [this.#vec[0] - v.vec[0], this.#vec[1] - v.vec[1]]
  }

  public static add(v1: Vector, v2: Vector) : Vector {
    return new Vector(v1.#vec[0] + v2.#vec[0], v1.#vec[1] + v2.#vec[1])
  }

}

export default Vector
