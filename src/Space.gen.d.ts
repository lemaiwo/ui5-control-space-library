import Event from "sap/ui/base/Event";
import SpaceItem from "be/wl/space/SpaceItem";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./Space" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpaceSettings extends $ControlSettings {
        intro?: string | PropertyBindingInfo;
        logo?: string | PropertyBindingInfo;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        items?: SpaceItem[] | SpaceItem | AggregationBindingInfo | `{${string}}`;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: (event: Space$PressEvent) => void;
    }

    export default interface Space {

        // property: intro
        getIntro(): string;
        setIntro(intro: string): this;

        // property: logo
        getLogo(): string;
        setLogo(logo: string): this;

        // aggregation: items

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        getItems(): SpaceItem[];

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        addSpaceItem(items: SpaceItem): this;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        insertSpaceItem(items: SpaceItem, index: number): this;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        removeSpaceItem(items: number | string | SpaceItem): this;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        removeAllItems(): SpaceItem[];

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        indexOfSpaceItem(items: SpaceItem): number;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        destroyItems(): this;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        bindItems(bindingInfo: AggregationBindingInfo): this;

        /**
         * Defines the items contained within this control. <b>Note:</b> Disabled items are not visualized in the list with the available options, however they can still be accessed through the aggregation.
         */
        unbindItems(): this;

        // event: press

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress(fn: (event: Space$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: Space$PressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        detachPress(fn: (event: Space$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        firePress(parameters?: Space$PressEventParameters): this;
    }

    /**
     * Interface describing the parameters of Space's 'press' event.
     * Event is fired when the user clicks the control.
     */
    // eslint-disable-next-line
    export interface Space$PressEventParameters {
    }

    /**
     * Type describing the Space's 'press' event.
     * Event is fired when the user clicks the control.
     */
    export type Space$PressEvent = Event<Space$PressEventParameters>;
}
