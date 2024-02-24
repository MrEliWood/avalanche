import { readFileSync, writeFileSync } from 'node:fs';

const checkForGray = (colorName) => {
    const grays = ['slate', 'gray', 'zinc', 'neutral', 'stone'];
    return grays.includes(colorName);
};

const generateSolidString = (colorName, colorData) => {
    const tempArray = [];

    for (const key in colorData) {
        const shade = key.replace('_', '');
        const value = colorData[key];

        tempArray.push(`--${colorName}-${shade}: hsl(${value});`);
    }

    return tempArray.join('\n\t\t');
};

const generateTransparentString = (colorName, colorData) => {
    const { _600, _950 } = colorData;
    const isGray = checkForGray(colorName);
    const transparentBase = `--${colorName}-base: ${isGray ? _950 : _600};`;

    const tempArray = [transparentBase, ''];

    for (const key in colorData) {
        const alpha = key.replace('_', '').slice(0, -1);

        tempArray.push(`--${colorName}-a${alpha}0: hsl(var(--${colorName}-base) / ${alpha}%);`);
    }

    return tempArray.join('\n\t\t');
};

const generateFileContent = (colorName, colorData) => {
    const solids = generateSolidString(colorName, colorData);
    const transparents = generateTransparentString(colorName, colorData);

    return `/*** DO NOT EDIT **********************************
  file handled by color manager
  changes may be overwritten
**************************************************/

@layer colors {
	:root {
		/* solid */
		${solids}
    
    /* transparent */
		${transparents}
	}
}`;
};

const generateIndex = (fileNames) => {
    const imports = fileNames.map((name) => `@import '${name.slice(1)}';`);
    const fileContent = imports.join('\n');

    writeFileSync('../index.css', fileContent);
};

const generateColorFiles = () => {
    const colorsString = readFileSync(`colors.json`, 'utf-8');

    const colors = JSON.parse(colorsString);
    const { hsl } = colors;

    let i = 1;
    const fileNames = [];

    for (const colorName in hsl) {
        const colorData = hsl[colorName];

        const id = i.toString().padStart(2, '0');

        const fileName = `../src/layers/colors/${id}-${colorName}.css`;
        const fileContent = generateFileContent(colorName, colorData);

        writeFileSync(fileName, fileContent);
        fileNames.push(fileName);
        i++;
    }

    generateIndex(fileNames);
};

generateColorFiles();
