
# CarpoolConnect - Smart Ridesharing for Commuters

CarpoolConnect is a modern, mobile-first web application designed to make carpooling easy, affordable, and eco-friendly for daily commuters. Built with React and optimized for mobile devices, it connects drivers and passengers for shared rides, helping reduce transportation costs and environmental impact.

## 🚗 About CarpoolConnect

CarpoolConnect revolutionizes the way people commute by creating a community-driven platform where:
- **Drivers** can offer rides and share fuel costs
- **Passengers** can find affordable transportation options
- **Communities** can reduce traffic congestion and carbon emissions

### Key Benefits
- **Save Money**: Up to 60% cheaper than traditional rideshare services
- **Build Community**: Connect with fellow commuters in your area
- **Go Green**: Reduce your carbon footprint by sharing rides
- **Easy Matching**: Smart algorithm to find rides on your route

## 🌟 Features

### Core Functionality
- **Find Rides**: Search for available rides based on your route and schedule
- **Offer Rides**: Post your available seats for others to book
- **Real-time Messaging**: Communicate directly with other users
- **User Profiles**: Detailed profiles with ratings and reviews
- **Ride Management**: Track your current and past rides
- **Interactive Maps**: Visual route planning and location services

### User Experience
- **Mobile-First Design**: Optimized for smartphones with intuitive navigation
- **Bottom Tab Navigation**: Easy access to Home, Messages, and Profile
- **Responsive Interface**: Works seamlessly across all device sizes
- **Real-time Updates**: Live updates on ride status and messages

### Safety & Trust
- **User Reviews**: Rate and review other users after rides
- **Profile Verification**: Secure user profiles with ratings system
- **Message System**: Built-in communication before and during rides

## 📱 App Structure

### Pages & Navigation
- **Home**: Hero section with quick actions, recent rides, and statistics
- **Find Rides**: Search and filter available rides
- **Offer Ride**: Create new ride offerings
- **Messages**: Real-time chat with other users
- **Profile**: User profile management and settings
- **My Rides**: View current and past ride history
- **Reviews**: Manage ratings and feedback
- **Settings**: App preferences and account settings

### Components
- **Mobile Layout**: Responsive layout with bottom navigation
- **Hero Section**: Main call-to-action buttons and feature highlights
- **Ride Cards**: Display ride information with booking options
- **Location Maps**: Interactive maps for route visualization
- **Booking System**: Seamless ride booking and confirmation

## 🛠 Technical Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Shadcn/ui component library
- **Routing**: React Router DOM for navigation
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React icon library
- **Charts**: Recharts for data visualization

### Mobile Optimization
- **Progressive Web App (PWA)** ready
- **Capacitor** integration for native mobile app deployment
- **Touch-friendly** interface with mobile gestures
- **Offline capabilities** for core features

## 🚀 Getting Started

### Prerequisites
- Node.js (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/CarpoolConnect.git
cd CarpoolConnect
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173` to view the app

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Home/           # Home page components
│   ├── Layout/         # Layout components
│   ├── Map/            # Map-related components
│   ├── Rides/          # Ride management components
│   └── ui/             # Base UI components (shadcn/ui)
├── pages/              # Route pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # App entry point
```

### Adding New Features
1. Create focused, small components
2. Use TypeScript for type safety
3. Follow mobile-first responsive design
4. Implement proper error handling
5. Add loading states for better UX

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile devices
5. Submit a pull request
