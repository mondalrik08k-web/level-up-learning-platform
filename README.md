# LevelUp - Gamified Learning Platform 

A modern, interactive web application designed to enhance learning through engaging games and analytics. Built with React, Vite, and Firebase, LevelUp provides users with a comprehensive platform to develop critical thinking, language, and problem-solving skills.

---

##  Features

- **Interactive Games**: Multiple engaging games including Tic-Tac-Toe, Word Games, Sudoku, Typing Game, and more
- **User Authentication**: Secure Firebase-based authentication system
- **Analytics Dashboard**: Track performance with detailed statistics and visual charts
- **Leaderboard**: Competitive ranking system to motivate users
- **Rewards System**: Daily rewards and achievement tracking
- **Responsive Design**: Fully responsive UI with Tailwind CSS
- **Real-time Score Tracking**: Instant feedback and performance metrics
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

---

##  Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.1** - Build tool and dev server
- **React Router DOM 6.26.1** - Client-side routing
- **Tailwind CSS 3.4.10** - Utility-first CSS framework

### Database & Auth
- **Firebase 10.13.1** - Backend services (Authentication, Storage)

### Charts & Visualization
- **Chart.js 4.4.4** - Data visualization
- **React-ChartJS-2 5.2.0** - React wrapper for Chart.js

### UI Components
- **Headless UI 2.1.3** - Unstyled, accessible components
- **Hero Icons 2.1.5** - Icon library
- **Font Awesome 6.6.0** - Extended icon library

### Development Tools
- **ESLint 9.9.0** - Code quality and style
- **PostCSS 8.4.43** - CSS transformations
- **Autoprefixer 10.4.20** - CSS vendor prefixes

---

##  Project Structure

```
LevelUp/
├── src/
│   ├── components/
│   │   ├── Games/
│   │   │   ├── MathQuiz.jsx       # Mathematical problem-solving game
│   │   │   ├── Puzzle.jsx          # Puzzle game with timer
│   │   │   ├── Shufflegame.jsx     # Shuffle/cup game
│   │   │   ├── Soduku (1).jsx      # Sudoku puzzle game
│   │   │   ├── TicTacToe.jsx       # Classic Tic-Tac-Toe with rounds
│   │   │   ├── TypingGame.jsx      # Speed typing game
│   │   │   └── WordsGame.jsx       # Word guessing game with hints
│   │   ├── Analysis.jsx            # Performance analytics dashboard
│   │   ├── Games.jsx               # Games selection/hub
│   │   ├── Home.jsx                # Landing page
│   │   ├── Leaderboard.jsx         # User rankings
│   │   ├── Navbar.jsx              # Navigation component
│   │   ├── Rewards.jsx             # Daily rewards display
│   │   └── Signup.jsx              # User registration/login
│   ├── firebase.js                 # Firebase configuration
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── assets/                     # Images and media
├── public/                         # Static files
├── dist/                           # Build output
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── postcss.config.js               # PostCSS config
├── eslint.config.js                # ESLint config
└── index.html                      # HTML template

```

---

##  Games

### 1. **Math Quiz**
- Solve random mathematical problems (addition, subtraction, multiplication, division)
- Track scores and performance
- Difficulty scales with performance

### 2. **Word Games**
- Guess words based on hints
- Letter-by-letter selection mechanism
- Win/loss tracking

### 3. **Tic-Tac-Toe**
- Two-player game
- Multiple rounds (up to 10)
- Score tracking and round timing
- Winning line highlighting

### 4. **Typing Game**
- Speed and accuracy focused
- Random word generation
- Real-time scoring
- Performance metrics

### 5. **Sudoku**
- 18x18 puzzle grid
- Input validation
- Visual feedback (color changes)
- Error highlighting

### 6. **Puzzle Game**
- Rearrange pieces in correct order
- Timer for performance tracking
- Automatic completion detection

### 7. **Shuffle Game**
- Classic ball under cups game
- Ball position tracking
- Quick reflex challenge

---

##  Authentication

The application uses **Firebase Authentication** for secure user management:

- Email/password authentication
- User registration and login
- Password validation
- Secure session management

### Firebase Configuration
Firebase credentials are configured in `src/firebase.js`. Make sure to update with your own Firebase project credentials before deployment.

---

##  Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager
- Firebase account (for backend)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/levelup.git
cd levelup
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
- Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
- Add your Firebase credentials to `.env.local`

4. **Run development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

---

##  Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

##  Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Navigation menu with routing links |
| `Home` | Landing page with hero section |
| `Games` | Game selection hub |
| `Signup` | User authentication (login/register) |
| `Analysis` | Analytics dashboard with charts |
| `Leaderboard` | User rankings and scores |
| `Rewards` | Daily reward system |

---

##  Styling

- **Tailwind CSS** for utility-first styling
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Theme** - User-friendly dark interface
- **Custom Components** - Reusable styled components

---

##  Configuration

### Vite
- Fast HMR (Hot Module Replacement)
- Optimized build output
- Development and production modes

### ESLint
- React best practices enforcement
- React Hooks rules
- Code quality checks

### Tailwind CSS
- Custom color schemes
- Responsive utilities
- Animation support

---

##  Performance Optimization

- Code splitting for production builds
- Optimized asset delivery
- Efficient component rendering with React
- Minimized bundle size with Vite

---

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint rules (`npm run lint`)
- Use functional components with hooks
- Maintain responsive design
- Add comments for complex logic

---

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

---

##  Authors

**LevelUp Development Team**

---

##  Known Issues

- Large bundle size (500kb+) - Consider code splitting for future optimization
- Browserslist database requires updates
- Some eval warnings in MathQuiz component

---

##  Future Enhancements

- [ ] Multiplayer real-time games
- [ ] Mobile app (React Native)
- [ ] Advanced analytics with ML predictions
- [ ] Social sharing features
- [ ] More game variations
- [ ] Difficulty levels
- [ ] Achievements and badges system
- [ ] Sound effects and animations

---

##  Support

For issues, feature requests, or questions, please open an issue on the repository.

---

**Happy Learning! **
