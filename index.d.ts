import * as React               from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface RadioButtonProps {
    value?: any,
    color?: string,
    style?: StyleProp<ViewStyle>,
    disabled?: boolean
}

interface RadioGroupProps {
    onSelect: Function,
    size?: number,
    thickness?: number,
    selectedIndex?: number,
    style?: StyleProp<ViewStyle>,
    color?: string,
    activeColor?: string,
    borderColor?: string,
    highlightColor?: string
}

declare class RadioGroup extends React.Component<RadioGroupProps, any> {}

declare class RadioButton extends React.Component<RadioButtonProps, any> {}

export { RadioGroup, RadioButton };
