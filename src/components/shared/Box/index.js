import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for adding padding or margin
 */
const Box = ({
  className,
  children,
  top,
  right,
  bottom,
  left,
  vertical,
  horizontal,
  all,
  outside,
  inline,
  style
}) => {
  const sProperty = outside ? 'margin' : 'padding';

  return (
    <div
      className={className}
      style={{
        [`${sProperty}Top`]: `${top || vertical || all}px`,
        [`${sProperty}Right`]: `${right || horizontal || all}px`,
        [`${sProperty}Bottom`]: `${bottom || vertical || all}px`,
        [`${sProperty}Left`]: `${left || horizontal || all}px`,
        display: inline ? 'inline' : 'block',
        ...style
      }}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  /** Determine which type of offset should use (default: `padding`) */
  outside: PropTypes.bool,
  /** Determine which type of css `display` behavior should use (default: `block`) */
  inline: PropTypes.bool,
  /** Set value for all directions */
  all: PropTypes.number,
  /** Set value for `top` direction */
  top: PropTypes.number,
  /** Set value for `right` direction */
  right: PropTypes.number,
  /** Set value for `bottom` direction */
  bottom: PropTypes.number,
  /** Set value for `left` direction */
  left: PropTypes.number,
  /** Set value for both (`top` and `bottom`) direction */
  vertical: PropTypes.number,
  /** Set value for both (`left` and `right`) direction */
  horizontal: PropTypes.number
};

Box.defaultProps = {
  outside: false,
  inline: false,
  all: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  vertical: 0,
  horizontal: 0
};

export default Box;
