import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import * as fontStyles from '../../../styles/fontsConstants';
import * as colors from '../../../styles/colorConstants';

const styledText = ({
  fontFamily,
  fontSize,
  lineHeight,
  fontColor,
  uppercase,
  underline,
  breakAll,
  letterSpacing
}) => {
  return css`
    line-height: 0px;
    letter-spacing: 0.2px;
    font-style: normal;
    font-stretch: normal;
    color: ${colors.BLACK_COLOR};
    font-family: ${fontStyles.PRIMARY_FONT_REGULAR};
    font-size: 12px;
    text-transform: ${(props) => props.uppercase && 'uppercase'};
    text-decoration: ${(props) => props.underline && 'underline'};
    word-break: ${(props) => (props.breakAll ? 'break-all' : 'break-word')};

    /* Custom Overrides */
    color: ${(props) => {
      if (props.fontColor) return props.fontColor;
    }};

    font-family: ${(props) => {
      if (props.fontFamily) return props.fontFamily;
    }};

    font-size: ${(props) => {
      if (props.fontSize) return props.fontSize;
    }};

    line-height: ${(props) => {
      if (props.lineHeight) return props.lineHeight;
    }};

    letter-spacing: ${(props) => {
      if (props.letterSpacing) return props.letterSpacing;
    }};
    ${(props) => props.customStyle}
  `;
};
const CustomText = styled.span`
  ${(p) => styledText(p)};
`;

CustomText.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontColor: PropTypes.string,
  uppercase: PropTypes.string,
  underline: PropTypes.string,
  breakAll: PropTypes.string,
  letterSpacing: PropTypes.string
};

CustomText.defaultProps = {
  fontFamily: fontStyles.PRIMARY_FONT_BLACK,
  fontSize: fontStyles.TINY_SIZE,
  lineHeight: fontStyles.TINY_LINE_HEIGHT,
  fontColor: colors.BLACK_COLOR,
  upperCase: '',
  underline: '',
  breakAll: 'break-all',
  letterSpacing: 0.2
};

export default CustomText;
