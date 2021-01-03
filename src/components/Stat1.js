import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "--statsSm",
	"width": "auto",
	"height": "auto",
	"text-align": "right",
	"align-self": "center",
	"margin": "0px 0px 0px 0px",
	"color": "#ffffff",
	"word-break": "keep-all",
	"text-indent": "0",
	"hyphens": "none",
	"children": "Some text"
};
const overrides = {};

const Stat1 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Stat1, { ...Text,
	defaultProps,
	overrides
});
export default Stat1;