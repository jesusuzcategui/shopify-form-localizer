# SHOPIFY FORM LOCALIZER.
Created by Jesus Uzcategui ([jesusuzcategui.me](jesusuzcategui.me))

This package allows you to use a selector of available languages ​​for your Shopify store. Take into account that this uses the native functionality of Shopify for the localization of the store, in this case we must use the translate and adapt application.

## Usage
1. First install package:
```bash
npm i --save @uzcateguijesusdev/form-localizer
```
2. Render snippet where you want, for example header:
```liquid
{% render "form-localizer" %}
```
3. Init javascript to registre the webcomponent.
```javascript
//Import main functionality
import { initializeFormLocalizer } from 'form-localizer';
//Execute code.
initializeFormLocalizer()
```
4. If you follow the steps, automatilly you can test the select language.

## Suggestions
If you want change style, you should set styles on the css package.

If you want change HTML, you should change the file snippets/form-localizer.liquid the which was installed on install this package.