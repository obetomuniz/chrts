declare const d3: typeof import("d3")

abstract class ChrtsBaseElement extends HTMLElement {
  protected svg: d3.Selection<SVGSVGElement, unknown, null, undefined>

  constructor() {
    super()
    this.svg = d3.select(this).append("svg")
  }

  connectedCallback() {
    this.render()
  }

  abstract render(): void
}

export default ChrtsBaseElement
