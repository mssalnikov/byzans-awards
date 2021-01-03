import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Image, Box } from "@quarkly/widgets";
import StatsIcon from "./StatsIcon";
import Stat1 from "./Stat1";
import { FaRegComments, FaRegComment } from "react-icons/fa";
const defaultProps = {
	"sm-display": "grid",
	"sm-width": "240px",
	"sm-height": "540px",
	"sm-grid-auto-rows": "auto  auto auto",
	"sm-background": "--color-byzansCr",
	"sm-border-radius": "20px",
	"sm-align-items": "center",
	"sm-justify-content": "center",
	"sm-justify-items": "center",
	"sm-padding": "10px 20px 10px 20px",
	"md-display": "grid",
	"md-width": "auto",
	"md-height": "auto",
	"md-min-width": "280px",
	"md-border-radius": "20px",
	"md-background": "--color-byzansCr",
	"lg-background": "--color-byzansCr",
	"lg-display": "grid",
	"lg-min-width": "calc(100% - 700px)",
	"lg-min-height": "480px",
	"lg-width": "auto",
	"lg-height": "auto",
	"lg-grid-auto-rows": "auto auto auto",
	"lg-justify-items": "center",
	"lg-justify-content": "center",
	"lg-border-radius": "20px",
	"md-padding": "20px 20px 20px 20px",
	"md-grid-gap": "20px 20px ",
	"sm-align-content": "center",
	"sm-min-width": "240px",
	"display": "grid",
	"grid-auto-rows": "auto auto ",
	"grid-auto-columns": "auto 1fr",
	"align-content": "center",
	"justify-content": "center",
	"align-items": "center",
	"width": "300px",
	"height": "650px",
	"background": "--color-byzansCr",
	"border-radius": "20px",
	"grid-gap": "20px 20px",
	"padding": "20px 20px 20px 20px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"sm-display": "flex",
			"sm-font": "normal normal 500 40px/1 --fontFamily-googleMontserrat",
			"sm-width": "auto",
			"sm-height": "auto",
			"sm-justify-content": "center",
			"sm-color": "--white",
			"sm-align-items": "center",
			"sm-margin": "0 0px 0px 0px",
			"md-display": "flex",
			"md-align-items": "center",
			"md-justify-content": "center",
			"md-font": "normal normal 500 40px/1 --fontFamily-googleMontserrat",
			"lg-font": "normal normal 500 45px/1 --fontFamily-googleMontserrat",
			"lg-color": "--white",
			"md-margin": "0px 0px 0px 0px",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"font": "normal normal 500 50px/1 --fontFamily-googleMontserrat",
			"color": "--white",
			"margin": "0 0px 0px 0px",
			"children": "30"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"sm-min-width": "220px",
			"sm-min-height": "360px",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "center",
			"lg-display": "flex",
			"lg-min-width": "240px",
			"lg-min-height": "380px",
			"display": "flex",
			"justify-self": "center",
			"min-width": "260px",
			"min-height": "380px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"sm-display": "grid",
			"sm-grid-template-rows": "auto auto",
			"sm-grid-template-columns": "1fr",
			"sm-justify-items": "center",
			"sm-margin": "20px 20px 20px 20px",
			"lg-display": "grid",
			"lg-grid-auto-columns": "1fr",
			"lg-grid-auto-rows": "auto auto",
			"lg-grid-template-rows": "auto auto",
			"lg-grid-template-columns": "1fr",
			"lg-grid-gap": "auto auto",
			"lg-grid-column": "auto auto",
			"lg-grid-row": "auto auto",
			"lg-justify-content": "center",
			"lg-justify-items": "center",
			"lg-align-content": "center",
			"lg-width": "auto",
			"lg-height": "auto",
			"lg-min-width": "240px",
			"lg-margin": "20px 20px 20px 20px",
			"lg-align-items": "center",
			"lg-align-self": "center",
			"lg-justify-self": "center",
			"md-margin": "0px 0px 0px 0px",
			"md-grid-gap": "10px 10px",
			"display": "grid",
			"grid-auto-rows": "auto auto",
			"grid-auto-columns": "1fr",
			"align-content": "center",
			"justify-content": "center",
			"justify-items": "center",
			"grid-column": "auto auto",
			"grid-row": "auto auto",
			"align-self": "center",
			"justify-self": "center",
			"width": "calc (100% - 20px)",
			"min-width": "260px",
			"grid-template-columns": "1fr",
			"grid-template-rows": "auto auto",
			"grid-gap": "10px 10px"
		}
	},
	"statsIcon": {
		"kind": "StatsIcon",
		"props": {
			"sm-font": "--iconSm",
			"category": "fa",
			"icon": FaRegComments,
			"md-font": "--iconMd",
			"display": "inline-block",
			"margin-right": "20px"
		}
	},
	"stat1": {
		"kind": "Stat1",
		"props": {
			"sm-font": "--statsSm",
			"sm-display": "flex",
			"sm-align-self": "center",
			"lg-display": "flex",
			"md-font": "--statsMd",
			"lg-font": "normal normal 500 45px/1 --fontFamily-googleMontserrat",
			"lg-text-align": "left",
			"font": "normal normal 500 50px/1 --fontFamily-googleMontserrat",
			"children": "168",
			"display": "inline-block"
		}
	},
	"statsIcon1": {
		"kind": "StatsIcon",
		"props": {
			"sm-font": "--iconSm",
			"category": "fa",
			"icon": FaRegComment,
			"md-font": "--iconMd",
			"display": "inline-block",
			"margin-right": "20px"
		}
	},
	"stat2": {
		"kind": "Stat1",
		"props": {
			"sm-display": "flex",
			"lg-display": "flex",
			"md-font": "--statsMd",
			"lg-font": "normal normal 500 45px/1 --fontFamily-googleMontserrat",
			"lg-text-align": "left",
			"sm-font": "--statsSm",
			"font": "normal normal 500 50px/1 --fontFamily-googleMontserrat",
			"children": "13",
			"display": "inline-block"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"display": "flex",
			"justify-self": "center",
			"justify-content": "center"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "100%",
			"justify-self": "center",
			"justify-content": "center"
		}
	}
};

const IdealBookCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Image {...override("image")} />
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<StatsIcon {...override("statsIcon")} />
				<Stat1 {...override("stat1")} />
			</Box>
			<Box {...override("box2")}>
				<StatsIcon {...override("statsIcon1")} />
				<Stat1 {...override("stat2")} />
			</Box>
		</Box>
		{children}
	</Box>;
};

Object.assign(IdealBookCard, { ...Box,
	defaultProps,
	overrides
});
export default IdealBookCard;