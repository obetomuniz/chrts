# chrts

A simple chart web components library using SVG, CSS, and TypeScript.

## Installation

```bash
npm install chrts
```

## Usage

First, import the library in your JavaScript or TypeScript file:

```typescript
import { ChrtsPie, ChrtsBars, ChrtsGauge, ChrtsSegment } from "chrts"
```

Then, use the components in your HTML:

### Pie Chart

```html
<chrts-pie>
  <chrts-segment color="red" label="Red" value="120"></chrts-segment>
  <chrts-segment color="blue" label="Blue" value="80"></chrts-segment>
</chrts-pie>
```

### Bar Chart

```html
<chrts-bars>
  <chrts-segment color="green" label="Green" value="50"></chrts-segment>
  <chrts-segment color="purple" label="Purple" value="100"></chrts-segment>
</chrts-bars>
```

Each chart component uses the `<chrts-segment>` child component to define its data segments. The `<chrts-segment>` component has three attributes:

- `color`: The color of the segment.
- `label`: The label of the segment.
- `value`: The numerical value of the segment.
