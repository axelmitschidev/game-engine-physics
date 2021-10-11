class Canvas {

  #canvas: HTMLCanvasElement;
  #ctx: CanvasRenderingContext2D;

  constructor (canvas: HTMLCanvasElement, width: number = 500, height: number = 500) {
    this.#canvas = canvas
    this.#canvas.width = width
    this.#canvas.height = height
    this.#ctx = <CanvasRenderingContext2D> this.#canvas.getContext('2d')
  }

  get width () : number {
    return this.#canvas.width
  }

  get height () : number {
    return this.#canvas.height 
  }

  get ctx () : CanvasRenderingContext2D {
    return this.#ctx
  }
  
}

export default Canvas
