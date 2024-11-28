# **TextUtils Web App**

TextUtils is a web application that allows users to analyze and manipulate text. The app includes features such as transforming text case, removing extra spaces, and more. It also offers a dark mode and light mode for a better user experience.

# **You can view this Application here **
  `<a href='https://textutilsmanagement.netlify.app/'>Click here</a>`

## **Features**

- **Text Analysis**: Analyze text by changing case (uppercase, lowercase), find email from the text and removing extra spaces.
- **Dark/Light Mode**: Toggle between dark mode and light mode for better usability.
- **Search Functionality**: Search for specific text in the application.
- **Multiple Color Themes**: Customize the background color of the page using different themes (Primary, Success, Danger, etc.).
- **Alert System**: Displays alerts for actions like enabling dark/light mode and color theme change.

## **Tech Stack**

- **Frontend**:
  - React.js: A JavaScript library for building user interfaces.
  - React Router: For routing between different components/pages.
  - Bootstrap: For responsive design and UI components.
- **State Management**:
  - React `useState`: Used for managing state like the current theme (dark/light), and alert messages.
- **Backend**: This project doesn't have a backend yet, but it's designed to be easily extensible.
- **Styling**:
  - Custom CSS: For customizing themes and dark/light modes.
  - Bootstrap: For basic styling and layout components.


## **React Concepts Used**

### **`useState`**
`useState` is a React hook that allows you to manage the state in functional components. In this project, `useState` is used to:

1. **Managing the theme (`mode`)**: 
   - The `mode` state determines whether the app is in dark or light mode. 
   - The `setMode` function is used to toggle between these two modes.
   - Example:
     ```js
     const [mode, setMode] = useState('light');
     ```
   - This state is passed to different components (like `Navbar` and `Alert`) to control the UI behavior based on the current mode.

2. **Managing the alert (`alert`)**:
   - An alert is shown when a mode change or color theme change occurs. The `alert` state holds the message and type of the alert (success, error, etc.).
   - Example:
     ```js
     const [alert, setAlert] = useState(null);
     ```

### **`props`**
In React, **`props`** (short for properties) are used to pass data from a parent component to a child component. In this project:

1. **Passing `mode` and `toggleMode` to components**:
   - `mode`: The current theme (`dark` or `light`) is passed as a prop to components like `Navbar`, `Alert`, and `About`. This allows each component to adjust its styling and functionality based on the mode.
   - `toggleMode`: A function that allows toggling between themes is passed as a prop to the `Navbar` component. When a user clicks on a theme button, `toggleMode` is called with the appropriate color.

   Example:
   ```js
   <Navbar title="TextUtils" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
   ```

2. **Alert handling with `props`**:
   - The `Alert` component receives the `alert` object as a prop and displays the message with a corresponding style based on the type of alert.
   - Example:
     ```js
     <Alert alert={alert} />
     ```


## **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VenkatreddyPadala/ReactTextUtils.git
   cd TextUtils
   ```

2. **Install dependencies**:
   If you haven't installed dependencies yet, run the following command:
   ```bash
   npm install
   ```

3. **Start the app**:
   Run the application using the following command:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## **Usage**

- On the homepage, users can input text into a text area and perform various operations like:
  - Convert the text to uppercase or lowercase.
  - Remove extra spaces from the text.
- You can toggle between **dark** and **light** mode using the switch in the navbar.
- Change the background color of the page using the color themes available in the navbar.
- The alert system will notify users of changes like theme switching or mode changes.

## **Contributing**

Feel free to fork this repository, make changes, and create a pull request! You can also open issues to report bugs or request new features.
