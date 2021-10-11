import Canvas from './class/Canvas'
import Element from './class/Element'
import Vector from './class/Vector'

const canvas: Canvas = new Canvas(<HTMLCanvasElement> document.getElementById('canvas'), 1000, 700)
const ctx: CanvasRenderingContext2D = canvas.ctx

const lsElements: Array<Element> = []

const box: Element = new Element(ctx, new Vector(canvas.width / 2, canvas.height / 2))
lsElements.push(box)
const floor: Element = new Element(ctx, new Vector(canvas.width / 2, canvas.height), canvas.width, 100)
floor.fixed = true
lsElements.push(floor)

let secondsPassed: number = 0;
let oldTimeStamp: number = 0;

function update () : void {
  lsElements.forEach(elem => {
    elem.update(secondsPassed)
  })

  if (box.pos.vec[1] >= canvas.height + box.height / 2) {
    box.pos = new Vector(box.pos.vec[0], -box.height)
  }
}

function draw () : void {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  ctx.fillStyle = '#aaa'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  lsElements.forEach(elem => {
    elem.draw()
  })
}

function loop (timeStamp: DOMHighResTimeStamp) : void {
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  update()
  draw()
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)