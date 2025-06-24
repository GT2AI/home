# GT^AI Homepage

A modern, responsive PWA (Progressive Web App) that showcases student-built AI products and resources at Georgia Tech.

## Features

- 🌓 Dark/light mode toggle
- 📱 Mobile-first responsive design
- 🔄 Simulated real-time data visualizations
- 🖥️ Interactive product showcase
- 👥 Community engagement features
- 🧰 AI Makerspace resource visualization
- 📊 Live metrics dashboard
- 📝 Simple community chat/forums
- 📲 PWA capabilities for mobile installation

## Tech Stack

- **Frontend**: React + Vite
- **UI Library**: Chakra UI
- **Animations**: Framer Motion
- **Data Visualization**: Recharts, D3
- **Icons**: React Icons
- **PWA**: Vite PWA Plugin
- **Routing**: React Router
- **Utilities**: date-fns, lodash

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GT2AI/home.git
   cd gt-ai-homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
gt-ai-homepage/
├── public/               # Static assets and PWA resources
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # React components
│   │   ├── common/       # Shared components (Header, Footer, etc.)
│   │   ├── dashboard/    # Metrics dashboard components
│   │   ├── products/     # Product showcase components
│   │   ├── community/    # Community engagement components
│   │   ├── makerspace/   # AI Makerspace components
│   │   └── application/  # Team application components
│   ├── contexts/         # React contexts (Theme, Data)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── theme/            # Chakra UI theme configuration
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
└── vite.config.js        # Vite configuration
```

## Development Notes

### Data Simulation

The application currently uses simulated data. In the future, this will be replaced with real data from GitHub APIs and metrics collection endpoints.

### PWA Features

The application is configured as a Progressive Web App, which allows users to install it on their devices. Key PWA features include:

- Offline capability (service worker)
- Install prompt for mobile users
- App-like experience
- Home screen icon

### Styling with Chakra UI

The application uses Chakra UI for styling with a custom theme that includes:

- Dark/light mode support
- Custom color palette
- Custom component variants
- Responsive design utilities

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, which can be deployed to any static hosting service.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Implementation Phases

This project follows a phased approach:

1. **Phase 1 (Current)**: Core structure & PWA setup
   - Mobile-first responsive layout
   - PWA configuration
   - Dark/light mode
   - Product showcase with simulated data
   - Basic component structure

2. **Phase 2**: Visual enhancements
   - Interactive visualizations
   - Community features
   - Animations and micro-interactions

3. **Phase 3**: Real data integration
   - GitHub API integration
   - Real-time metrics
   - Error logs collection

4. **Phase 4**: Advanced features
   - Team application process
   - Push notifications
   - Enhanced offline functionality

## Contributing

Contributions are welcome! Please check out our [contributing guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.