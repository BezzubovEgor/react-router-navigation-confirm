# react-router-navigation-confirm

[![Build Status](https://travis-ci.com/BezzubovEgor/react-router-navigation-confirm.svg?branch=master)](https://travis-ci.com/BezzubovEgor/react-router-navigation-confirm) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![codecov](https://codecov.io/gh/BezzubovEgor/react-router-navigation-confirm/branch/master/graph/badge.svg?token=XAhNiBN2e9)](https://codecov.io/gh/BezzubovEgor/react-router-navigation-confirm)

## Table of Contents

- [react-router-navigation-confirm](#react-router-navigation-confirm)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Demo](#demo)
  - [General Usage](#general-usage)
    - [Basic example](#basic-example)
    - [Custom dialog](#custom-dialog)
  - [API](#api)
    - [**1. `<HistoryListener/>`**](#1-historylistener)
    - [**2. `<NavigationConfirmModal/>`**](#2-navigationconfirmmodal)
    - [**3. `<NavigationConfirm/>`**](#3-navigationconfirm)
  - [License](#license)

## Installation

To install this component you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/):

    $ npm install --save react-router-navigation-confirm
    $ yarn add react-router-navigation-confirm

## Demo

You can see demo and docs on this [site](https://bezzubovegor.github.io/react-router-navigation-confirm).

## General Usage

### Basic example

To show confirmation dialog on every navigation you only need to include `<HistoryListener/>` to the root router of your app and `<NavigationConfirmModal/>` to any Route in which you want to display confirmation dialog:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavigationConfirmModal/>
            <HistoryListener/>
            <App />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
```

1. `HistoryListener` - the component which start to listen all changes of history and help to understand when you go forward and when you go back in the navigation (`NavigationConfirmModal` will work even without HistoryListener, but if you click *forward* browser button, it will go back on the history).

2. `NavigationConfirmModal` - the component that displays confirmation dialog with to buttons (*Confirm* and *Cancel*) when you try to navigate to other page or Route.

### Custom dialog

If you want to create custom dialog you can use `NavigationConfirm` confirm component:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';

const children = ({ onConfirm, onCancel }) => (
    <div>
        <button onClick={ onConfirm }>Confirm</button>
        <button onClick={ onCancel }>Cancel</button>
    </div>
)


ReactDOM.render(
    <BrowserRouter>
        <div>
            <HistoryListener/>
            <NavigationConfirm>
                { children }
            </NavigationConfirm>
            <App />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);

```

`NavigationConfirm` is the component that displays custom children, you should provide function that takes object with `onConfirm` and `onCancel` and return some React element. You can use `onConfirm` to approve navigation ot `onCancel` function to reject it and stay on the same page / Route.

## API

### **1. `<HistoryListener/>`**

| Property | Description | Default | Type | Default |
|:---|:---|:---|:---|:---|
| `children` | React element / node to render into the `HistoryListener` component | `undefined` | `React.ReactNode` | *false* |

### **2. `<NavigationConfirmModal/>`**

| Property | Description | Default | Type | Default |
|:---|:---|:---|:---|:---|
|`children` | React element / node to render into the `NavigationConfirmModal` component | `'Are you sure you want to leave this page?'` | `React.ReactNode` | *false* |
|`confirmText` | Text for confirm button | `'Confirm'` | `string` | *false* |
|`cancelText` | Text for cancel button | `'Cancel'` | `string` | *false* |
|`modalClassName` | modal class name | `'nc-modal'` | `string` | *false* |
|`backdropClassName` | class name for modal backdrop | `'nc-modal__backdrop'` | `string` | *false* |
|`contentClassName` | content class name | `'nc-modal__content'` | `string` | *false* |
|`bodyClassName` | class name for body container | `'nc-modal__body'` | `string` | *false* |
|`footerClassName` | class name for modal footer | `'nc-modal__footer'` | `string` | *false* |
|`buttonClassName` | class name for all modal buttons (applyed for confirm and cancel) | `'nc-modal__button'` | `string` | *false* |
|`buttonConfirmClassName` | confirm button aditional style | `'confirm'` | `string` | *false* |

### **3. `<NavigationConfirm/>`**

| Property | Description | Default | Type | Required |
|:---|:---|:---|:---|:---|
|`children` | function that takes object with `onConfirm` and `onCancel` fields-functions and returns React node to render when user navigate to other page / Route| *no default* | `({ onConfirm: function, onCancel: function }) => React.ReactNode;` | *true* |
|`unloadMsg` | message to show in the confirmation dialog on page unload event (in new versions in browser message alwase takes default messges according browser) | `'msg'` | `string` | *false* |

## License

MIT