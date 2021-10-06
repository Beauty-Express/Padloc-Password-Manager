import { randomString, chars } from "@padloc/core/src/util";
import { generatePassphrase, AVAILABLE_LANGUAGES } from "@padloc/core/src/diceware";
import { translate as $l } from "@padloc/locale/src/translate";
import { animateElement } from "../lib/animation";
import { app } from "../globals";
import { Dialog } from "./dialog";
import { Slider } from "./slider";
import { ToggleButton } from "./toggle-button";
import { Select } from "./select";
import "./icon";
import "./button";
import { property, query } from "lit/decorators.js";
import { css, html } from "lit";

export type GeneratorMode = "words" | "chars";

import "./scroller";

const separators = [
    {
        value: "-",
        label: () => $l("Dash") + " ( - )",
    },
    {
        value: "_",
        label: () => $l("Underscore") + " ( _ )",
    },
    {
        value: "/",
        label: () => $l("Slash") + " ( / )",
    },
    {
        value: " ",
        label: () => $l("Space") + " (   )",
    },
];

export class Generator extends Dialog<void, string> {
    @property()
    value: string = "";

    @property()
    mode: GeneratorMode = "words";

    @query("#separator")
    private _separator: Select<string>;

    @query("#language")
    private _language: Select<string>;

    @query("#wordCount")
    private _wordCount: Slider;

    @query("#lower")
    private _lower: ToggleButton;

    @query("#upper")
    private _upper: ToggleButton;

    @query("#numbers")
    private _numbers: ToggleButton;

    @query("#other")
    private _other: ToggleButton;

    @query("#length")
    private _length: Slider;

    @query(".result")
    private _result: HTMLDivElement;

    static styles = [
        ...Dialog.styles,
        css`
            .result {
                font-family: var(--font-family-mono);
                text-align: center;
                font-size: 120%;
                overflow-wrap: break-word;
                font-weight: bold;
                padding: 20px;
                margin: var(--gutter-size);
                cursor: pointer;
            }

            .result > .hint {
                margin: 8px 0 -12px 0;
                font-size: var(--font-size-micro);
                color: var(--color-shade-3);
            }
        `,
    ];

    renderContent() {
        const { value } = this;
        return html`
            <div class="padded header">
                <div class="huge text-centering padded">${$l("Generate Password")}</div>
                <div class="horizontal evenly spacing stretching layout">
                    <pl-button
                        class="slim ghost"
                        .toggled=${this.mode === "words"}
                        @click=${() => this._selectMode("words")}
                    >
                        ${$l("passphrase")}
                    </pl-button>
                    <pl-button
                        class="slim ghost"
                        .toggled=${this.mode === "chars"}
                        @click=${() => this._selectMode("chars")}
                    >
                        ${$l("random string")}
                    </pl-button>
                </div>
            </div>

            <pl-scroller class="stretch">
                <div class="padded">
                    <div ?hidden=${this.mode !== "words"} class="spacing vertical layout">
                        <pl-select id="separator" .options=${separators} .label=${$l("Word Separator")}></pl-select>

                        <pl-select id="language" .options=${AVAILABLE_LANGUAGES} .label=${$l("Language")}></pl-select>

                        <pl-slider id="wordCount" unit=" ${$l("words")}" value="4" min="3" max="6"></pl-slider>
                    </div>

                    <div ?hidden=${this.mode !== "chars"} class="vertical spacing layout">
                        <pl-toggle-button id="lower" label="a-z" reverse></pl-toggle-button>

                        <pl-toggle-button id="upper" label="A-Z" reverse></pl-toggle-button>

                        <pl-toggle-button id="numbers" label="0-9" reverse></pl-toggle-button>

                        <pl-toggle-button id="other" label="?()/%..." reverse></pl-toggle-button>

                        <pl-slider
                            id="length"
                            label="${$l("length")}"
                            value="20"
                            min="5"
                            max="50"
                            class="item"
                        ></pl-slider>
                    </div>

                    <div class="centering layout">
                        <pl-icon icon="arrow-down" class="large"></pl-icon>
                    </div>

                    <div class="result" @click=${() => this._generate()}>
                        <div>${value}</div>

                        <div class="tiny padded subtle">${$l("Click To Shuffle")}</div>
                    </div>
                </div>
            </pl-scroller>

            <footer class="padded horizontal evenly stretching spacing layout">
                <pl-button class="primary" @click=${() => this._confirm()}>${$l("Use")}</pl-button>
                <pl-button @click=${() => this.dismiss()}>${$l("Discard")}</pl-button>
            </footer>
        `;
    }

    firstUpdated() {
        this._lower.active = this._upper.active = this._numbers.active = true;
    }

    async show(): Promise<string> {
        await this.updateComplete;
        this._generate();
        return super.show();
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", () => this._generate());
    }

    async _generate() {
        const separator = this._separator?.value || "-";
        const language = this._language?.value || app.state.device.locale;

        switch (this.mode) {
            case "words":
                this.value = await generatePassphrase(this._wordCount.value, separator, [language]);
                break;
            case "chars":
                let charSet = "";
                this._lower.active && (charSet += chars.lower);
                this._upper.active && (charSet += chars.upper);
                this._numbers.active && (charSet += chars.numbers);
                this._other.active && (charSet += chars.other);
                this.value = charSet ? await randomString(this._length.value, charSet) : "";
                break;
        }

        animateElement(this._result, { animation: "bounce" });
    }

    private _confirm() {
        this.done(this.value);
    }

    private _selectMode(mode: GeneratorMode) {
        this.mode = mode;
        this._generate();
    }
}

window.customElements.define("pl-generator", Generator);
