import Control from "sap/ui/core/Control";
import type { MetadataOptions } from "sap/ui/core/Element";
import SpaceItemRenderer from "./SpaceItemRenderer";
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
 * @name be.wl.space.SpaceItem
 */
export default class SpaceItem extends Control{

	constructor(id?: string | $SpaceItemSettings);
	constructor(id?: string, settings?: $SpaceItemSettings);
	constructor(id?: string, settings?: $SpaceItemSettings) {
		super(id, settings);
	}

	static readonly metadata: MetadataOptions = {
		library: "be.wl.space",
		properties: {
			title: {
				type: "string",
				group: "Data",
				defaultValue: null
			},
			description: {
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
		}
	};
	static renderer: typeof SpaceItemRenderer = SpaceItemRenderer;

	onAfterRendering(): void {
		
		const now = new Date().getTime();
		const page_load_time = now - performance.timing.navigationStart;
		console.log("User-perceived page loading time: " + page_load_time);
	}
	setTitle(value:string){
		this.setProperty("title", value, true); 
		return this;
	}
	setDescription(value:string){
		this.setProperty("description", value, true); 
		return this;
	}
}