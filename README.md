# react-router-navigation-confirm

## Table of Contents

- [Installation](#Installation)
- [General Usage](#General-Usage)
- [API](#API)
- [Demo](#Demo)
- [License](#License)

## Installation

To install this component you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/):

    $ npm install --save react-router-navigation-confirm
    $ yarn add react-router-navigation-confirm

## General Usage

To show confirmation dialog on every navigation you only need to include `<HistoryListener/>` to the root router of your app and `<NavigationConfirmModal/>` to any Route in which you want to display confirmation dialog:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';

import './index.css';


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

2. NavigationConfirmModal - the component that display cinfirmation dialog with to buttons (*Confirm* and *Cancel*) when you try to navigate to other page or Route.