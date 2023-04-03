class ChrtsPie extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const segments = Array.from(this.querySelectorAll("chrts-segment"))

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 100 100")
    this.appendChild(svg)

    const totalValue = segments.reduce(
      (sum, segment) => sum + parseFloat(segment.getAttribute("value") || "0"),
      0
    )
    let accumulatedAngle = 0

    segments.forEach((segment) => {
      const value = parseFloat(segment.getAttribute("value") || "0")
      const segmentAngle = (value / totalValue) * 360

      const startAngle = accumulatedAngle - 90
      const endAngle = accumulatedAngle + segmentAngle - 90

      const largeArcFlag = segmentAngle > 180 ? 1 : 0

      const x1 = 50 + 50 * Math.cos(startAngle * (Math.PI / 180))
      const y1 = 50 + 50 * Math.sin(startAngle * (Math.PI / 180))
      const x2 = 50 + 50 * Math.cos(endAngle * (Math.PI / 180))
      const y2 = 50 + 50 * Math.sin(endAngle * (Math.PI / 180))

      const pathData = `
        M50,50
        L${x1},${y1}
        A50,50 0 ${largeArcFlag},1 ${x2},${y2}
        Z
      `

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      )
      path.setAttribute("d", pathData)
      path.setAttribute("fill", segment.getAttribute("color") || "black")

      svg.appendChild(path)

      accumulatedAngle += segmentAngle
    })
  }
}

customElements.define("chrts-pie", ChrtsPie)
export default ChrtsPie
