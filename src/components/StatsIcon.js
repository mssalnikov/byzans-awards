import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {
	"category": "fa",
	"icon": MdFace,
	"color": "#ffffff",
	"sm-size": "38px",
	"md-size": "45px",
	"lg-size": "50px",
	"size": "50px",
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