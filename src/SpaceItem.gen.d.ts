import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./SpaceItem" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpaceItemSettings extends $ControlSettings {
        title?: string | PropertyBindingInfo;
        description?: string | PropertyBindingInfo;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: (event: SpaceItem$PressEvent) => void;
    }

    export default interface SpaceItem {

        // property: title
        getTitle(): string;
        setTitle(title: string): this;

        // property: description
        getDescription(): string;
        setDescription(description: string): this;

        // event: press

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress(fn: (event: SpaceItem$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: SpaceItem$PressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        detachPress(fn: (event: SpaceItem$PressEvent) => void, listener?: object): this;

        /**
         * Event is fired when the user clicks the control.
         */
        firePress(parameters?: SpaceItem$PressEventParameters): this;
    }

    /**
     * Interface describing the parameters of SpaceItem's 'press' event.
     * Event is fired when the user clicks the control.
     */
    // eslint-disable-next-line
    export interface SpaceItem$PressEventParameters {
    }

    /**
     * Type describing the SpaceItem's 'press' event.
     * Event is fired when the user clicks the control.
     */
    export type SpaceItem$PressEvent = Event<SpaceItem$PressEventParameters>;
}
