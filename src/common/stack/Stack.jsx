import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import {theme} from "../theme/theme";
const {space} = theme

const propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  // make string and behave like inline
  gap: PropTypes.number,
};

const Stack = styled.div(({ left, right, gap = 0 }) => {
  const gapValue = space[gap] || 0;
  
  const justify = 'space-evenly'
  const align =
    left && right
      ? "stretch"
      : left
      ? "flex-start"
      : right
      ? "flex-end"
      : "center";
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gapValue};
  `;
});

Stack.propTypes = propTypes;
Stack.displayName = "Stack"
export default Stack;