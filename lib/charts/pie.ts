declare const d3: typeof import("d3")
import ChrtsBaseElement from "../base"
import ChrtsSegment from "../segment"

export class ChrtsPie extends ChrtsBaseElement {
  render() {
    const width = parseInt(this.style.width) || 300
    const height = parseInt(this.style.height) || 300

    this.svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)

    const radius = Math.min(width, height) / 2
    const segments = Array.from(
      this.querySelectorAll("chrts-segment")
    ) as ChrtsSegment[]

    const pie = d3
      .pie<ChrtsSegment>()
      .value((d) => parseInt(d.getAttribute("value")!))
    const arc = d3
      .arc<d3.PieArcDatum<ChrtsSegment>>()
      .innerRadius(0)
      .outerRadius(radius)

    const g = this.svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)

    g.selectAll(".arc")
      .data(pie(segments))
      .join("path")
      .attr("class", "arc")
      .attr("d", arc)
      .attr("fill", (d) => d.data.getAttribute("color")!)
  }
}

customElements.define("chrts-pie", ChrtsPie)
export default ChrtsPie
