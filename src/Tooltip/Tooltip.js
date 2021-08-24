import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Styles from "./Tooltip.css";

const propTypes = {
  id: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

const Tooltip = (props) => {
  const { id, children, ...otherProps } = props;
  const node = useRef();
  const [isHovered, setIsHovered] = useState(false);

  let trigger = null;
  let content = null;

  React.Children.forEach(children, (child) => {
    if (!child.type) {
      return;
    }
    if (child.type.displayName === "TooltipTrigger") {
      trigger = React.cloneElement(child, {
        "aria-describedby": id,
        "data-testid": "tooltip-button",
      });
    }

    if (child.type.displayName === "Content") {
      content = React.cloneElement(child, { id });
    }
  });

  return (
    <div
      className={Styles.container}
      data-testid="tooltip"
      ref={node}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {trigger}
      {isHovered && content}
    </div>
  );
};

Tooltip.propTypes = propTypes;

export default Tooltip;
