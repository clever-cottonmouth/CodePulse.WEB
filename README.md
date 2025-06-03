# CodePulse Web Application

CodePulse is a modern web application built with Angular 16, designed to provide a robust and scalable solution for code management and collaboration.

## 🚀 Features

- Modern Angular 16 architecture
- JWT-based authentication
- Markdown support
- Responsive design
- Cookie-based session management

## 🛠️ Tech Stack

- **Frontend Framework:** Angular 16
- **Authentication:** JWT (JSON Web Tokens)
- **Markdown Support:** ngx-markdown
- **Cookie Management:** ngx-cookie-service
- **Testing:** Jasmine & Karma

## 📁 Project Structure

```
codepulse/
├── src/                    # Source files
│   ├── app/               # Application components
│   ├── assets/            # Static assets
│   ├── environments/      # Environment configurations
│   ├── index.html         # Main HTML file
│   ├── main.ts           # Application entry point
│   └── styles.css        # Global styles
├── .angular/              # Angular build files
├── .vscode/              # VS Code configuration
├── node_modules/         # Dependencies
└── configuration files   # Various config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd codepulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the application for production
- `npm test` - Runs unit tests
- `npm run watch` - Builds the application and watches for changes

## 🔧 Configuration

The application uses environment-specific configuration files located in `src/environments/`. Make sure to set up the appropriate environment variables for your deployment.

## 📝 License

This project is licensed under the terms included in the LICENSE file.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Support

For support, please open an issue in the repository or contact the development team. 