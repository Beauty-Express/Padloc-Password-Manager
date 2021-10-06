import "../../assets/fonts/fonts.css";
import { css } from "lit";

export const narrowWidth = 700;
export const wideWidth = 1200;

export const cssVars = css`
    :host {
        /* HELPER VARIABLES */
        --color-black: #444;
        --color-black-dark: #333;
        --color-black-light: #555;

        --color-white: #ffffff;
        --color-white-dark: #fafafa;
        --color-white-darker: #f1f1f1;

        /* FONTS */
        --font-family: "Nunito";
        --font-family-fallback: sans-serif;
        --font-family-mono: "Space Mono";

        --font-size-base: medium;
        --font-size-small: 0.85em;
        --font-size-tiny: 0.7em;
        --font-size-large: 1.2em;
        --font-size-big: 1.35em;
        --font-size-huge: 1.5em;
        --font-size-giant: 2em;

        /* BASIC COLORS */
        --color-highlight: rgb(59, 183, 249);
        --color-highlight-light: rgb(89, 198, 255);
        --color-highlight-dark: rgb(7, 124, 185);

        --color-highlight-bg: rgb(59, 183, 249, 0.1);

        --color-background: var(--color-white);
        --color-background-light: var(--color-white);
        --color-background-dark: var(--color-white-dark);
        --color-background-darker: var(--color-white-darker);

        --color-foreground: var(--color-black);
        --color-foreground-light: var(--color-black-light);
        --color-foreground-dark: var(--color-black-dark);

        --color-negative: #ff6666;

        --color-shade-1: rgba(0, 0, 0, 0.05);
        --color-shade-2: rgba(0, 0, 0, 0.1);
        --color-shade-3: rgba(0, 0, 0, 0.15);
        --color-shade-4: rgba(0, 0, 0, 0.2);
        --color-shade-5: rgba(0, 0, 0, 0.25);
        --color-shade-6: rgba(0, 0, 0, 0.3);

        --border-width: 1px;
        --border-color: var(--color-shade-2);
        --border-radius: 0.5em;

        /* INPUT ELEMENTS */

        --input-border-color: var(--border-color);
        --input-border-style: solid;
        --input-border-width: 1px;
        --input-color: var(--color-foreground);
        --input-label-color: var(--color-highlight);
        /* --input-border-width: 1px 1px 3px 1px; */

        /* --input-focused-border-color: var(--color-highlight); */
        /* --input-focused-border-style: solid; */
        /* --input-focused-border-width: 1px 1px 3px 1px; */

        /* BUTTONS */

        --button-background: var(--color-shade-1);
        --button-color: var(--color-foreground);
        --button-border-color: transparent;
        --button-border-style: solid;
        --button-border-width: 1px;
        --button-font-weight: 400;
        --button-focus-outline-color: var(--color-highlight);

        --button-toggled-background: var(--color-highlight);
        --button-toggled-color: var(--color-white);
        --button-toggled-border-color: transparent;
        --button-toggled-border-style: solid;
        --button-toggled-border-width: 1px;
        --button-toggled-font-weight: 400;
        --button-toggled-focus-outline-color: var(--color-white);

        --button-primary-background: var(--color-highlight);
        --button-primary-color: var(--color-white);
        --button-primary-border-color: transparent;
        --button-primary-border-style: solid;
        --button-primary-border-width: 1px;
        --button-primary-font-weight: 400;
        --button-primary-focus-outline-color: currentColor;

        --button-ghost-background: var(--color-background);
        --button-ghost-color: var(--color-foreground);
        --button-ghost-border-color: var(--border-color);
        --button-ghost-border-style: solid;
        --button-ghost-border-width: 1px;
        --button-ghost-font-weight: 400;
        --button-ghost-focus-outline-color: var(--color-highlight);

        --button-ghost-toggled-background: var(--button-ghost-background);
        --button-ghost-toggled-color: var(--color-highlight);
        --button-ghost-toggled-border-color: var(--color-highlight-light);
        --button-ghost-toggled-border-style: solid;
        --button-ghost-toggled-border-width: 1px;
        --button-ghost-toggled-font-weight: 600;
        --button-ghost-toggled-focus-outline-color: var(--color-highlight);

        --button-negative-background: var(--color-negative);
        --button-negative-color: var(--color-white);
        --button-negative-border-color: transparent;
        --button-negative-border-style: solid;
        --button-negative-border-width: 1px;
        --button-negative-font-weight: 400;
        --button-negative-focus-outline-color: var(--color-white);

        /* LIST ITEMS */

        --list-item-selected-background: var(--color-highlight-bg);
        --list-item-selected-color: var(--color-highlight-dark);

        /* START SCREEN */
        --start-background: var(--color-background-dark);

        /* MENU */

        --menu-background: var(--color-background-dark);
        --menu-item-selected-background: var(--color-highlight-bg);
        --menu-item-selected-color: var(--color-highlight-dark);
        --menu-item-selected-weight: 600;

        /* APP */
        /* --backdrop-background: var(--highlight-gradient); */
        --backdrop-background: var(--color-background-darker);

        --spacing: 0.5em;

        --menu-width: 250px;

        font-family: var(--font-family), var(--font-family-fallback) !important;
        font-size: var(--font-size-base);
    }

    :host(.theme-light) {
        --color-background: var(--color-white);
        --color-foreground: var(--color-black);
        --color-shade-1: rgba(0, 0, 0, 0.05);
        --color-shade-2: rgba(0, 0, 0, 0.1);
        --color-shade-3: rgba(0, 0, 0, 0.15);
        --color-shade-4: rgba(0, 0, 0, 0.2);
        --color-shade-5: rgba(0, 0, 0, 0.25);
        --color-shade-6: rgba(0, 0, 0, 0.3);
    }

    :host(.theme-dark) {
        --color-background: var(--color-black-dark);
        --color-foreground: var(--color-white);
        --color-shade-1: rgba(255, 255, 255, 0.05);
        --color-shade-2: rgba(255, 255, 255, 0.1);
        --color-shade-3: rgba(255, 255, 255, 0.15);
        --color-shade-4: rgba(255, 255, 255, 0.2);
        --color-shade-5: rgba(255, 255, 255, 0.25);
        --color-shade-6: rgba(255, 255, 255, 0.3);
    }

    @media (prefers-color-scheme: dark) {
        :host {
            --color-background: var(--color-black-dark);
            --color-foreground: var(--color-white);
            --color-shade-1: rgba(255, 255, 255, 0.05);
            --color-shade-2: rgba(255, 255, 255, 0.1);
            --color-shade-3: rgba(255, 255, 255, 0.15);
            --color-shade-4: rgba(255, 255, 255, 0.2);
            --color-shade-5: rgba(255, 255, 255, 0.25);
            --color-shade-6: rgba(255, 255, 255, 0.3);
        }
    }
`;
