# android-back-button

<p align="center" >
    <img src="https://github.com/igormatyushkin014/android-back-button/blob/master/img/logo.png" alt="android-back-button" title="android-back-button">
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/android-back-button"><img src="https://img.shields.io/npm/v/android-back-button.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/android-back-button"><img src="https://img.shields.io/npm/dm/android-back-button.svg?style=flat-square"></a>
</p>

## At a Glance

`android-back-button` is a React Native module for hardware back button on Android devices. Component listens for press event and provides developer with simple way to manage it. Fully compatible with iOS.

## Installation

Via `npm`:
```
npm install android-back-button --save
```

Via `yarn`:
```
yarn add android-back-button
```

## Usage

Simply add `AndroidBackButton` component to scene's layout:

```javascript
import React, {
    Component
} from 'react';

import {
    View
} from 'react-native';

import AndroidBackButton from 'android-back-button';

export default class Scene extends Component {

    render() {
        const {navigator} = this.props;
        
        return (
            <View style={styles.container}>
                <AndroidBackButton
                    onPress={() => {
                        navigator.pop();
                        return true;
                    }}
                />
            </View>
        );
    }
}
```

As you can see in example above, `AndroidBackButton` component uses `onPress` property which is a handler for press event on Android hardware back button.

`onPress` method should return boolean value:
- `false` if you want to close app;
- `true` if you want to continue using app.

You can implement any custom behavior inside `onPress` handler which gives you a super-flexible approach for managing navigation inside of app.

## License

`android-back-button` is available under the MIT license. See the [LICENSE](./LICENSE) file for more info.
