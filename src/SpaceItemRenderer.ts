/*!
 * ${copyright}
 */
import RenderManager from "sap/ui/core/RenderManager";
import SpaceItem from "./SpaceItem";

/**
 * Example renderer.
 * @namespace
 */
export default {
	apiVersion: 2, // usage of DOM Patcher

	/**
	 * Renders the HTML for the given control, using the provided {@link RenderManager}.
	 *
	 * @param rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param control The control instance to be rendered
	 */
	render: function (rm: RenderManager, control: SpaceItem) {
		rm.openStart("article", control).class("space-article").openEnd();
			rm.openStart("h2").openEnd();
			rm.text(control.getTitle());
			rm.close("h2");

			rm.openStart("p").openEnd();
			rm.text(control.getDescription());
			rm.close("p");

			rm.close("article");
	}
};
