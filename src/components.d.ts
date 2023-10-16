/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PvrButton {
        /**
          * The role of the button
         */
        "buttonRole": "button" | "submit" | "reset";
        "buttonType": "primary" | "secondary" | "tertiary";
    }
    interface PvrComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLPvrButtonElement extends Components.PvrButton, HTMLStencilElement {
    }
    var HTMLPvrButtonElement: {
        prototype: HTMLPvrButtonElement;
        new (): HTMLPvrButtonElement;
    };
    interface HTMLPvrComponentElement extends Components.PvrComponent, HTMLStencilElement {
    }
    var HTMLPvrComponentElement: {
        prototype: HTMLPvrComponentElement;
        new (): HTMLPvrComponentElement;
    };
    interface HTMLElementTagNameMap {
        "pvr-button": HTMLPvrButtonElement;
        "pvr-component": HTMLPvrComponentElement;
    }
}
declare namespace LocalJSX {
    interface PvrButton {
        /**
          * The role of the button
         */
        "buttonRole"?: "button" | "submit" | "reset";
        "buttonType"?: "primary" | "secondary" | "tertiary";
    }
    interface PvrComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "pvr-button": PvrButton;
        "pvr-component": PvrComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pvr-button": LocalJSX.PvrButton & JSXBase.HTMLAttributes<HTMLPvrButtonElement>;
            "pvr-component": LocalJSX.PvrComponent & JSXBase.HTMLAttributes<HTMLPvrComponentElement>;
        }
    }
}
