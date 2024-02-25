# prismaticss

A style framework for vanilla CSS.

<br>

### Description

Designed for simplicity, made to scale, perfect for custom themes and white labeling.

<br>

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Config](#config)
- [Credits](#credits)
- [Questions](#questions)

<br>

## Installation

```bash
npm install prismaticss
```

<br>

Import `prismaticss` at the top of your primary style sheet.

```css
/* theme.css */

@import 'prismaticss';

@layer theme {
  :root {
    /* theme variables go here */
  }
}
```

<br>

> IMPORTANT<br>
> place the import before any other css rules so it doesn't overwrite your styling.

<br>

## Config

Config is only necessary for custom theming or white labeling.

If you're interested, copy the following code block into your project.

```css
/* theme.css */

@import 'prismaticss';

@layer theme {
  :root {
    /* colors */
    --primary-hue: 0;
    --primary-saturation: 0%;
    --primary-lightness: 5%;

    --secondary-hue: 0;
    --secondary-saturation: 0%;
    --secondary-lightness: 98%;

    --accent-hue: 125;
    --accent-saturation: 100%;
    --accent-lightness: 50%;

    --compliment-hue: 33;
    --compliment-saturation: 100%;
    --compliment-lightness: 50%;

    /* sizes */
    --base-size: 12px;
    --icon-size: 24px;

    /* borders & outlines */
    --border-width: 1px;
    --border-style: solid;
    --border-color: var(--primary-a100);

    --outline-width: 1px;
    --outline-style: solid;
    --outline-color: var(--primary-a100);

    /* fonts */
    --font-family: sans-serif;
    --font-size: 16px;

    /* animations */
    --transition-speed: 200ms;
    --transition-delay: 0ms;

    --transition-timing-function: ease;
    --transition-property: all;

    /* breakpoints */
    --breakpoint-xxl: 1500px;
    --breakpoint-xl: 1200px;
    --breakpoint-l: 1024px;
    --breakpoint-m: 768px;
    --breakpoint-s: 480px;
    --breakpoint-xs: 320px;
  }
}
```

<br>

## Usage

`CSS variables` are the foundation of prismaticss.

```css
/* style.css */

@import './theme.css';

body {
  font-size: var(--font-3);
  background-color: var(--secondary-a50);
  padding: var(--size-200);
}
```

<br>

The expansive library offers a superset of CSS variables, based on your custom theme.

<br>

### Colors

#### Scale

| Light |     |     |     |     |     |     |     |     |     | Dark |
| ----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: |
|    50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950  |

<br>

#### Opacity

To use an alpha color value, prefix the number with an `a`.

| Clear |      |      |      |      |      |      |      |      |      | Solid |
| ----: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ----: |
|   a50 | a100 | a200 | a300 | a400 | a500 | a600 | a700 | a800 | a900 |  a950 |
|    5% |  10% |  20% |  30% |  40% |  50% |  60% |  70% |  80% |  90% |   95% |

<br>

| Prefix          | Example               |
| :-------------- | --------------------- |
| --primary-\*    | var(--primary-a50)    |
| --secondary-\*  | var(--secondary-100)  |
| --accent-\*     | var(--accent-200)     |
| --compliment-\* | var(--compliment-300) |

<br>

### [tailwindcss](https://tailwindcss.com/docs/customizing-colors)

Prismaticss also provides variables for [tailwind'](https://tailwindcss.com/docs/customizing-colors) expertly-crafted color palette.

## Credits

<br>

## Questions

[eliwooddesign on GitHub](https://github.com/eliwooddesign) &nbsp; | &nbsp; [eli@eliwooddesign.com](mailto:eli@eliwooddesign.com)
