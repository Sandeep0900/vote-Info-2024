# Indian State Voter Information 2024

## Overview
This is a React-based web application that provides voter statistics for different states in India for 2024. Users can select a state to view detailed voter data, which is dynamically fetched using `react-query` from an external API.

## Features
- Fetches voter information based on the selected state.
- Uses `react-query` for data fetching and caching.
- Responsive UI with smooth animations.
- Error handling and loading indicators.
- Social media and contact links in the footer.

## Technologies Used
- React.js
- TypeScript
- Tailwind CSS
- React Query (`@tanstack/react-query`)
- Lucide React (for icons)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sandeep0900/voter-info.git
   cd voter-info
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:5173` (or the displayed URL) to see the app running.

## File Structure
```
📂 voter-info
├── 📂 src
│   ├── 📂 components  # Reusable UI components (StateSelect, StateCard)
│   ├── 📂 services    # API fetching logic (voterService.ts)
│   ├── 📂 types       # TypeScript interfaces for data
│   ├── 📄 App.tsx     # Main App component
│   ├── 📄 Index.tsx   # Home page
├── 📄 package.json    # Project dependencies
├── 📄 tailwind.config.js # Tailwind configuration
├── 📄 vite.config.ts  # Vite configuration
└── 📄 README.md       # Project documentation
```

## Usage
1. Select a state from the dropdown to fetch and display voter data.
2. If the data is loading, a spinner will be displayed.
3. If an error occurs, an error message will be shown.
4. The footer contains links to the developer's GitHub, LinkedIn, Instagram, and portfolio.

## Developer
- **Sandeep Sharma**
- GitHub: [Sandeep0900](https://github.com/Sandeep0900)
- LinkedIn: [Sandeep Sharma](https://linkedin.com/in/sandeep-sharma404)
- Portfolio: [Sandeep Profile](https://sandeep0900.github.io/Sandeep-profile-web/)

## License
This project is open-source and available under the [MIT License](LICENSE).

---


