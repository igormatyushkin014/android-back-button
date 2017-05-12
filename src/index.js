import React, {
    Component
} from 'react';

import {
    BackAndroid
} from 'react-native';

/**
 * Listens for back button press events.
 * 
 * Simply add this component to scene's layout
 * returned by `render` method and
 * don't forget to implement `onPress` handler.
 * 
 * Example:
 * ```
 * <AndroidBackButton
 *     onPress={() => {
 *         this.props.navigator.pop();
 *         return true;
 *     }}
 * />
 * ```
 * 
 * `onPress` method should return boolean value.
 * Return `false` if you want to close app when
 * user pressed back button.
 * Otherwise, return `true`.
 */
export default class AndroidBackButton extends Component {

    /**
     * Handler for back button press event.
     */
    handlePress: any;

    constructor(props) {
        super(props);

        /**
         * Obtain properties.
         */
        const {onPress} = props;

        /**
         * Initialize back button press handler.
         */
        this.handlePress = () => {
            /**
             * By default, we are not going to exit from app.
             */
            let shouldExitFromApp = false;

            /**
             * If `onPress` is not null,
             * use value returned by this method.
             * When `onPress` returns `false`,
             * it means that we should exit from app.
             */
            if (onPress) {
                shouldExitFromApp = !onPress();
            }

            /**
             * Return result value.
             */
            return !shouldExitFromApp;
        };
    }

    render() {
        /**
         * No needs to display anything.
         */
        return null;
    }

    componentDidMount() {
        /**
         * Add listener for back button press event.
         */
        BackAndroid.addEventListener(
            hardwareBackPressEventName,
            this.handlePress
        );
    }
    
    componentWillUnmount() {
        /**
         * Remove listener for back button press event.
         */
        BackAndroid.removeEventListener(
            hardwareBackPressEventName,
            this.handlePress
        );
    }
}

/**
 * Defines name for hardware back button press event.
 */
const hardwareBackPressEventName = 'hardwareBackPress';
