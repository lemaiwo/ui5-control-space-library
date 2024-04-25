import { ExampleColor } from "be/wl/space/library";
import Example from "be/wl/space/Example";
import Space from "be/wl/space/Space";
import SpaceItem from "be/wl/space/SpaceItem";

// create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
	text: "Example",
	color: ExampleColor.Highlight,
	press: (event) => {
		alert(event.getSource());
	}
}).placeAt("content");

new Space({
	intro:"Hello World",
	logo:"/test-resources/be/wl/space/img/logo.png",
	items:[new SpaceItem({
		title:"Item 1",
		description:"hello Item 1"
	}),new SpaceItem({
		title:"Item 2",
		description:"hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1hello Item 1"
	})]

}).placeAt("content");