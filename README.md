# Project Setup and README

# NOTE: Due to some restrictions on my computer. I couldn't install some packages. please user `grunt --force` to run this project

## Overview
This project demonstrates how to create a responsive image gallery using HTML5, SCSS, and Vanilla JavaScript. The gallery incorporates lazy loading, grid structure, and image selection functionality without the use of external libraries or plugins. Grunt is used to compile SCSS and JavaScript files.

## Project Structure
```
assignment/
│
├── src/
│   ├── js/
│   │   └── script.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
│
├── build/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── index.html
│
├── package.json
├── Gruntfile.js
└── .gitignore
```

- `src/`: Contains the source files for JavaScript, SCSS, and HTML.
- `dist/`: Contains the compiled output files.
- `package.json`: Includes project dependencies and scripts.
- `Gruntfile.js`: Configuration for Grunt tasks.
- `.gitignore`: Excludes files and directories from version control.

## Getting Started
To set up the project locally, follow these steps:

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```
    cd assignment
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Run Grunt to compile SCSS and JavaScript files:
    ```
    grunt
    ```

5. Open `dist/index.html` in a web browser to view the image gallery.

## Detailed Solutions

### JavaScript
- **Lazy Loading**: Images are lazy-loaded when they come into the viewport.
- **Responsive Grid**: Images are displayed in a responsive grid structure, with 4-5 images per row on desktop, 2 images per row on tablets, and 1 image per row on mobile devices.
- **Image Selection**: Clicking on an image selects it and highlights it with a red border.

### SCSS
- **Image Overlay**: An overlay is added to each image to provide a highlighting effect when selected.

### HTML
- **Checkbox Integration**: Images are wrapped in labels with checkboxes, enabling selection with native checkbox behavior.

## Author
Mukesh

