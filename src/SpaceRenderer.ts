/*!
 * ${copyright}
 */
import RenderManager from "sap/ui/core/RenderManager";
import Space from "./Space";

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
	render: function (rm: RenderManager, control: Space) {
		rm.openStart("div", control).class("star-wars-intro").openEnd();
		rm.openStart("p").class("intro-text").openEnd();
		rm.text(control.getIntro());
		rm.close("p");

		rm.openStart("h2").class("main-logo").openEnd();
		rm.openStart("img").attr("src",control.getLogo()).openEnd();
		rm.close("img");

		rm.close("h2");

		rm.openStart("div").class("main-content").openEnd();
		rm.openStart("div").class("title-content").openEnd();
		for (const item of control.getItems()) {
			rm.renderControl(item);
		}
		rm.close("div");

		rm.close("div");

		rm.close("div");

	}
};
