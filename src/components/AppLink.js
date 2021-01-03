import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Link, Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "auto",
	"height": "auto",
	"display": "grid",
	"justify-content": "center",
	"align-content": "center",
	"grid-gap": "10px 10px",
	"justify-items": "center",
	"padding": "20px 20px 20px 20px",
	"sm-padding": "20px 20px 20px 20px",
	"sm-grid-gap": "10px 10px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal normal 300 28px/1.2 --fontFamily-googleMontserrat",
			"color": "--byzansCr",
			"display": "flex",
			"margin": "0 0px 0 0px",
			"padding": "20px 20px 20px 20px",
			"justify-self": "center",
			"justify-content": "center",
			"align-items": "center",
			"text-align": "center",
			"sm-font": "--leadSm",
			"children": <>
				In case you don't know what you are doing here: Byzans is the app for book discussions, which allows you to track your books and talk with other users who are reading (or want to read, or have read) the same book as you. This page is dedicated to the most active book clubs and users on Byzans in 2020. Want to join the action?{" "}
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#htpps://onelink.to/byzans",
			"sm-font": "--leadSm",
			"sm-text-decoration-line": "initial",
			"sm-color": "--white",
			"sm-background": "--color-byzansCr",
			"sm-border-width": "2px",
			"sm-border-style": "solid",
			"sm-border-radius": "20px",
			"sm-width": "80%",
			"sm-text-align": "center",
			"sm-height": "120%",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "center",
			"background": "--color-byzansCr",
			"target": "_blank",
			"width": "30%",
			"height": "160%",
			"text-align": "center",
			"color": "--white",
			"text-decoration-line": "initial",
			"font": "normal normal 300 28px/1.2 --fontFamily-googleMontserrat",
			"border-width": "2px",
			"border-style": "solid",
			"border-radius": "20px",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"md-width": "40%",
			"children": "Install the app"
		}
	}
};

const AppLink = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Link {...override("link")} />
		{children}
	</Box>;
};

Object.assign(AppLink, { ...Box,
	defaultProps,
	overrides
});
export default AppLink;