class ChrtsBars extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const segments = Array.from(this.querySelectorAll("chrts-segment"))
    const totalValue = segments.reduce(
      (sum, segment) => sum + parseFloat(segment.getAttribute("value") || "0"),
      0
    )
    const barWidth = 100 / segments.length

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 100 100")
    this.appendChild(svg)

    segments.forEach((segment, index) => {
      const value = parseFloat(segment.getAttribute("value") || "0")
      const barHeight = (value / totalValue) * 100

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      )
      rect.setAttribute("x", `${index * barWidth}`)
      rect.setAttribute("y", `${100 - barHeight}`)
      rect.setAttribute("width", `${barWidth}`)
      rect.setAttribute("height", `${barHeight}`)
      rect.setAttribute("fill", segment.getAttribute("color") || "black")

      svg.appendChild(rect)
    })
  }
}

customElements.define("chrts-bars", ChrtsBars)
export default ChrtsBars
