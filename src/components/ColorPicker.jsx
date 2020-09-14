import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { Typography } from 'antd';
import { chooseBestColor, hexToRGB } from '../helpers';

const { Title } = Typography;

class ColorPicker extends Component {
  state = {
    background: this.props.color,
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ background: color.hex });
  };

  handleChangeComplete = (color) => {
    this.props.setColor(color.hex);
  };

  render() {
    return (
      <>
        <div
          className='swatch'
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.background }}
        >
          <Title
            level={5}
            className='swatch__color'
            style={{ color: chooseBestColor(hexToRGB(this.state.background)) }}
          >
            {this.state.background}
          </Title>
        </div>
        {this.state.displayColorPicker && (
          <div className='popover'>
            <div className='cover' onClick={this.handleClose} />
            <ChromePicker
              onChange={this.handleChange}
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
              className='picker'
              disableAlpha
            />
          </div>
        )}
      </>
    );
  }
}

export default ColorPicker;
