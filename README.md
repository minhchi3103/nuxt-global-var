# nuxt-global-var
A module for nuxtjs that make defining and using variables in component easier by using js object or json file.
### How to use
#### Install
With NPM  
`npm install nuxt-global-var`  
With Yarn  
`yarn add nuxt-global-var`  
#### Basic usage
Firstly, you need to add `nuxt-global-var` to your Nuxt config.
```javascript
// nuxt.config.js

{
  modules: [
    [
      'nuxt-global-var',
      {
        data: {HOST: 'shinryak.site'}
      }
    ]
  ]
}
```
If you defined variables in json, please replace `{HOST: 'shinryak.site'}` with `require("path\to\file.json")`
Now, you can use `nuxt-global-var` in your component
```html
<templete>
	<h1>
		Test nuxt-global-var in component
	</h1>
	<p>
		{{ $get('HOST') }}
	</p>
</templete>
```
### Licence
[MIT License](https://github.com/minhchi3103/nuxt-global-var/blob/master/LICENSE "MIT License")
