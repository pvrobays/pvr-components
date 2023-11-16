# pvr-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description            | Type                                     | Default     |
| ------------ | ------------- | ---------------------- | ---------------------------------------- | ----------- |
| `buttonIcon` | `button-icon` |                        | `"cancel" \| "confirm"`                  | `null`      |
| `buttonRole` | `button-role` | The role of the button | `"button" \| "reset" \| "submit"`        | `"button"`  |
| `buttonType` | `button-type` |                        | `"primary" \| "secondary" \| "tertiary"` | `"primary"` |
| `disabled`   | `disabled`    |                        | `boolean`                                | `false`     |


## Slots

| Slot          | Description                                             |
| ------------- | ------------------------------------------------------- |
|               | Slot for the content of the button.                     |
| `"end"`       | Content is placed to the right of the button text.      |
| `"icon-only"` | Should be used on an icon in a button that has no text. |
| `"start"`     | Content is placed to the left of the button text.       |


## Shadow Parts

| Part       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| `"native"` | The native HTML button or anchor element that wraps all child elements. |


## Dependencies

### Depends on

- [pvr-icon](../pvr-icon)

### Graph
```mermaid
graph TD;
  pvr-button --> pvr-icon
  style pvr-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*