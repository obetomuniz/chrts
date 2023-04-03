declare const d3: typeof import("d3")
import ChrtsBaseElement from "../base"
import ChrtsSegment from "../segment"

export class ChrtsBars extends ChrtsBaseElement {
  render() {
    console.log(123, this.style.width, this.style.height)
    const width = parseInt(this.style.width) || 300
    const height = parseInt(this.style.height) || 300

    this.svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)

    const segments = Array.from(
      this.querySelectorAll("chrts-segment")
    ) as ChrtsSegment[]

    const xScale = d3
      .scaleBand()
      .domain(segments.map((_, i) => i.toString()))
      .range([0, width])
      .padding(0.1)

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(segments, (d) => parseInt(d.getAttribute("value")!))!])
      .range([height, 0])

    this.svg
      .selectAll(".bar")
      .data(segments)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (_, i) => xScale(i.toString())!)
      .attr("y", (d) => yScale(parseInt(d.getAttribute("value")!)))
      .attr("width", xScale.bandwidth())
      .attr(
        "height",
        (d) => height - yScale(parseInt(d.getAttribute("value")!))
      )
      .attr("fill", (d) => d.getAttribute("color")!)
  }
}

customElements.define("chrts-bars", ChrtsBars)
export default ChrtsBars
