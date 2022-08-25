# TS-Land

This project is a TypeScript Template for [Adventure.land](https://Adventure.land)

## Configuration

Configure your build output in the [Webpack config](webpack.config.js).

For example an config which builds 4 bundles for 4 different characters could look like this:
```js
...
entry: {
    "Character1": path.resolve(__dirname, 'src/Character1.ts'),
    "Character2": path.resolve(__dirname, 'src/Character2.ts'),
    "Character3": path.resolve(__dirname, 'src/Character3.ts'),
    "Character4": path.resolve(__dirname, 'src/Character4.ts'),
},
...
```

## Compilation

Run
```
npm run build
```
to bundle the code.

## Output

```
dist
│   Character1.js
│   Character2.js
│   Character3.js
│   Character4.js
```

## Integration

These could then be sent to the [Adventure.land](https://Adventure.land) server via an automatic hook using something like [vs-land](https://github.com/Homuncoli/vs-land).

# Contact
[Benedikt Danner](mailto:benedikt@danner.eu.com)