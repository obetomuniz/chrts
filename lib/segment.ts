class ChrtsSegment extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.style.display = "none"
  }

  get color(): string {
    return this.getAttribute("color") || ""
  }

  get label(): string {
    return this.getAttribute("label") || ""
  }

  get value(): number {
    return parseFloat(this.getAttribute("value") || "0")
  }
}

customElements.define("chrts-segment", ChrtsSegment)
export default ChrtsSegment
