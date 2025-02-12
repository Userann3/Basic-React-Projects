# Color Palette Panel App

A React-based color panel management application where users can:
- Create up to four panels with different colors.
- Change colors using a color picker.
- Copy color codes using React Toastify.
- Randomly change panel colors using the spacebar.
- Resize panels dynamically.

## Technologies Used

- React.js
- Tailwind CSS
- React Toastify

## Folder Structure
```
project-root/
│── src/
│   │── components/
│   │   │── Panel.js  # Panel component
│   │   │── Tools.js  # Tools component (color picker & controls)
│   │── App.js       # Main application file
│   │── index.js     # Entry point
│── public/
│── package.json
│── README.md
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/color-panel-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd color-panel-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- **Add & Manage Panels**: Users can create and delete up to 4 panels.
- **Customizable Colors**: Each panel has a color picker to select individual colors.
- **Random Color Generation**: Pressing `spacebar` randomizes all colors at once.
- **Copy Color Code**: Click on the color code to copy it to the clipboard.
- **Resizable Panels**: Drag the edges to resize panels dynamically.
- **Data Persistence**: Colors and panel count persist even after page refresh.

## Usage

- Click the **color picker** in the tools section to choose a color for a panel.
- Press **spacebar** to randomly assign colors to all panels.
- Click on a **color code** to copy it to the clipboard.
- Use the **buttons** in the tools section to add/remove panels.

## Contributing
Feel free to submit a pull request if you have improvements!

## License
This project is open-source and available under the MIT License.

