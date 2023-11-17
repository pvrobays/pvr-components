# PVR Components

This is a component library based on web components.
The web components are built using [StencilJS](https://stenciljs.com/).
The project also generates wrappers for:
- HTML/Core ([pvr-components](https://www.npmjs.com/package/pvr-components))
- React ([pvr-components-react](https://www.npmjs.com/package/pvr-components-react))
- Angular (WIP...)
- ...

## Getting Started

### Building

To build the project, run:

```bash
npx lerna run build
```

This will run all the projects in the mono repo which can be found in the `/packages` folder.

### Development

To create new components and run the development server with hot reload, run either:

```bash
cd packages/pvr-components
npm run dev
```

To run stencil in watch mode and show the components in storybook, or

```bash
cd packages/pvr-components
npm run stencil.start
```

to runs stencil in dev mode and show the components with the stencil dev server (hosts the `index.html`).