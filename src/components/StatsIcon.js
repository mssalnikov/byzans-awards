import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {
	"category": "md",
	"icon": MdFace,
	"font": "--iconLg",
	"color": "#ffffff",
	"width": "auto",
	"height": "auto"
};
const overrides = {};

const StatsIcon = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Icon {...rest} />;
};

Object.assign(StatsIcon, { ...Icon,
	defaultProps,
	overrides
});
export default StatsIcon;