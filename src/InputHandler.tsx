import React, { Component } from 'react';
import Touchable from 'rmc-feedback';

export interface PropsType {
  prefixCls: string;
  disabled?: boolean;
  onTouchStart: (e: any) => void;
  onTouchEnd: (e: any) => void;
  role?: string;
  className?: string;
  unselectable?: boolean;
}

export default class InputHandler extends Component<PropsType, {}> {
  render() {
    const {
      prefixCls, disabled, onTouchStart, onTouchEnd, ...otherProps,
    } = this.props;
    return (
      <Touchable
        disabled={disabled}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        activeClassName={`${prefixCls}-handler-active`}
      >
        <span {...otherProps} />
      </Touchable>
    );
  }
}
