import Control from "sap/ui/core/Control";
import type { MetadataOptions } from "sap/ui/core/Element";
import SpaceRenderer from "./SpaceRenderer";
/**
 * Constructor for a new <code>be.wl.space.Example</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author lemaiwo
 * @version ${version}
 *
 * @constructor
 * @public
 * @name be.wl.space.Space
 */
export default class Space extends Control {

	constructor(id?: string | $SpaceSettings);
	constructor(id?: string, settings?: $SpaceSettings);
	constructor(id?: string, settings?: $SpaceSettings) {
		super(id, settings);
	}

	static readonly metadata: MetadataOptions = {
		library: "be.wl.space",
		properties: {
			intro: {
				type: "string",
				group: "Data",
				defaultValue: null
			},
			logo: {
				type: "string",
				group: "Data",
				defaultValue: null
			}
		},
		events: {
			/**
			 * Event is fired when the user clicks the control.
			 */
			press: {}
		},
		defaultAggregation:"items",
		aggregations: {

			/**
			 * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
			 */
			items: {
				type: "be.wl.space.SpaceItem",
				multiple: true,
				singularName: "spaceItem",
				bindable: "bindable"
			}
		}
	};
	static renderer: typeof SpaceRenderer = SpaceRenderer;
	onAfterRendering() {
		const numStars = 1000;
		const mainDiv = this.getDomRef() as HTMLElement;

		// For every star we want to display
		for (let i = 0; i < numStars; i++) {
			const { top, left } = this.getRandomPosition(mainDiv);
			mainDiv.append(this.getRandomStar(top, left));
		}
	}
	getRandomStar(top: string, left: string) {
		const star = document.createElement("div");
		star.className = "star";
		star.style.top = top;
		star.style.left = left;
		return star;
	}
	getRandomPosition(element: HTMLElement) {
		return {
			top: `${this.getRandomNumber(element.offsetHeight||1000)}px`,
			left: `${this.getRandomNumber(element.offsetWidth)}px`,
		};
	}
	getRandomNumber(value: number) {
		return Math.floor(Math.random() * value);
	}
	setIntro(value: string) {
		this.setProperty("intro", value, true);
		return this;
	}
	setLogo(value: string) {
		this.setProperty("logo", value, true);
		return this;
	}
}