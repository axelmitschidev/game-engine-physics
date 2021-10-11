import Vector from "./Vector";

const GRAVITY: number = 1

class Element {

  #pos: Vector
  #vel: Vector
  #acc: Vector
  #width: number
  #height: number
  #ctx: CanvasRenderingContext2D
  #maxSpeed: number
  #fixed: boolean

  constructor (ctx: CanvasRenderingContext2D, pos: Vector = new Vector(), width: number = 50, height: number = 50) {
    this.#pos = pos
    this.#vel = new Vector()
    this.#acc = new Vector()
    this.#width = width
    this.#height = height
    this.#ctx = ctx
    this.#maxSpeed = 50
    this.#fixed = false

    this.#pos.sub(new Vector(this.#width / 2, this.#height / 2))
  }

  public update (t: number = 1) : void {
    if (!this.#fixed) {
      this.#acc.add(new Vector(0, GRAVITY * t))
      if (this.#vel.vec[1] < this.#maxSpeed) {
        this.#vel.add(this.#acc)
      }
      this.#pos.add(this.#vel)
    }
  }

  public draw () : void {
    this.#ctx.fillStyle = '#333'
    this.#ctx.fillRect(this.#pos.vec[0], this.#pos.vec[1], this.#width, this.#height)
  }
  public get pos () : Vector {
    return this.#pos
  }

  public set pos (pos: Vector) {
    this.#pos = pos
  }

  public set vel (vel: Vector) {
    this.#pos = vel
  }

  public get width () : number {
    return this.#width
  }

  public get height () : number {
    return this.#height
  }

  public set fixed (bool: boolean) {
    this.#fixed = bool
  }

  // public static collisionTest (arr: Array<Element>) : void {
  //   arr.forEach(elem1 => {
  //     const arrBuffer: Array<Element> = arr.splice(0, 1)
  //     arrBuffer.forEach(elem2 => {
  //       if (elem1.pos.vec[0] < elem2.pos.vec[0] + elem2.width ||
  //           elem1.pos.vec[0] + elem1.width > elem2.pos.vec[0]) {
  //             elem1
  //           }
  //     })
  //   })
  // }
}

export default Element