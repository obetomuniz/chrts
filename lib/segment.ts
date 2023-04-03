class ChrtsSegment extends HTMLElement {
  color: string = ""
  label: string = ""
  value: string = ""
  offset: string = ""

  static get observedAttributes() {
    return ["color", "label", "value", "offset"]
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.setAttributeValue(name, newValue)
  }

  private setAttributeValue(name: string, value: string) {
    switch (name) {
      case "color":
        this.color = value
        break
      case "label":
        this.label = value
        break
      case "value":
        this.value = value
        break
      case "offset":
        this.offset = value
        break
    }
  }
}

export default ChrtsSegment
