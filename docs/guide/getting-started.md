# Getting Started

## Installation
```
npm install vue-page-guide
```
or
```
yarn add vue-page-guide
```

## Add to Project
```js {4-6}
// main.js
import Vue from 'vue'
import App from './App.vue'
import VPageGuide from 'vue-page-guide'

Vue.use(VPageGuide)
```

Then add the VPageGuide component to your root Vue file (usually App.vue)

```html
<!-- App.vue -->
<VPageGuide v-model="showGuide"/>
```
v-model is a boolean used to hide/show the page guide