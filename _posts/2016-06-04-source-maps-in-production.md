---
layout: post
title:  "Source Maps in production"
date:   2016-06-04 00:00:00 +0300
tags: webpack,express,source maps
---
## What is the article about?

How to leverage the power of source maps in production and not expose your original code to everyone on the net.

## Lets dive in

One day you may want to debug your site in production, but if your code is minified it wont be a great experience. The way to handle it is to use source maps for your minified code.

But if you use source maps in production, then everybody else on the net may use it too - just open a console and here it is deminified source code. Not necessarily. Lets look how it works.

Source maps can be embedded in the bundle. In this case everybody who has access to the bundle has the access to the source maps too.

But source maps can go as a separate file too. In this case, a browser will try to load it if you open a developer console. And you can tell the browser were it should look for the source maps.

There are several ways to do it ([github.com/mozilla/source-map](https://github.com/estools/escodegen/wiki/Source-Map-Usage)):

1. Use an HTTP header when serving the JS file (`X-SourceMap: /path/to/file.js.map`)
2. Append a comment to the JS file (`//#sourceMappingUrl=/path/to/file.js.map`)

## By example

Now lets try it by example, i will go with the second option in the list above. 
(*The full source code is on [github](https://github.com/ggarek/ggarek.github.io/tree/code/source-maps-in-production).*)

I tried to make the project as simple as possible for the sake of brevity. Here is the files listing:

- `src/index.js` - just print something in console
- `src/index.html` - landing page, includes the bundle
- `serve-index.js` - express server to serve bundle and index.html
- `serve-source-maps.js` - express server to serve source maps
- `webpack.config.js`  - webpack config

The main thing happens in the webpack config, here:

```js
new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      // Change default source map footer 
      // for the bundle (were to look for source maps)
      append: `\n//# sourceMappingURL=${sourceMapURL}[url]`,

      // This will alter how reconstructed source files 
      // will appear in the source tree in developer console
      moduleFilenameTemplate: `${sourceURL}[resource-path]`,
      fallbackModuleFilenameTemplate: `${sourceURL}[resource-path]?[hash]`,
    }),
```

The `SourceMapDevToolPlugin` allows to specify the `sourceMappingURL` footer via `append` property. Thus we can tell a browser were to look for source maps.

To run the example, navigate to the project folder and run:

```bash
# to install dependencies
npm i 
# to build the project and start index server
npm start
# to start the source maps server (in the separate term tab)
npm run serve-source-maps
```

## Conclusion

One can use `//#sourceMappingUrl` to specify the location of source maps as absolute url. Which literally means that the bundle and the source maps can be served separately.

To use source maps securely in production, one can serve it from an origin behind a VPN, or from localhost.
In the first case, you need to manage a centralised server to serve source maps. In the second case, every developer can have own local server.

The idea to use localhost to serve source maps may look frightening, but as for now i do not see any potential risks in it. I will immediately update the article if i should discover one.

-------

p.s.: If you found any, please,  drop me a message.

p.s.2: One more thing to note. The variable names will appear in developer console as they are in runtime, meaning that if your code is minified, then you will get "unreadable" callstack and "messed up" variable names. AFAIK, there is yet no way to map minified variable names to names in original source. Though your code is reconstructed.