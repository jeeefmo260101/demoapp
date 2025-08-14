# My React Vite App

This project is a React application configured with Vite, designed to fetch data from Google Apps Script and display it using React components.

## Features

- React for building user interfaces
- Vite for fast development and build processes
- Integration with Google Apps Script for data fetching
- GitHub Actions for automated deployment

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-react-vite-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-react-vite-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

To create a production build, run:
```bash
npm run build
```
The built files will be available in the `dist` directory.

### Deployment

This project includes a GitHub Actions workflow for deployment. Make sure to configure the `deploy.yml` file in the `.github/workflows` directory according to your hosting service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.