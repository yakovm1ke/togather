# Togather

Togather is a modern web application built with React and Firebase, designed to help users organize and manage events collaboratively. The application provides a seamless experience for creating, sharing, and managing events with real-time updates and calendar integration.

## Features

- 🔐 Secure authentication using Firebase
- 📅 Event creation and management
- 📱 Responsive design for all devices
- 🔄 Real-time updates
- 📊 Calendar integration
- 📤 Event sharing capabilities

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Authentication & Database:** Firebase
- **Routing:** React Router DOM
- **Date Handling:** date-fns
- **Calendar Integration:** ics
- **Form Validation:** Zod

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yakovm1ke/togather.git
cd togather
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── api/          # API integration and Firebase setup
├── assets/       # Static assets
├── components/   # Reusable React components
├── pages/        # Page components
├── router/       # React Router configuration
├── styles/       # Global styles and CSS
└── main.tsx      # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
