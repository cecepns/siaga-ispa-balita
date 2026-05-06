import { Link, NavLink, Route, Routes } from 'react-router-dom';
import MateriPage from './pages/MateriPage';
import ScreeningPage from './pages/ScreeningPage';
import QuizPage from './pages/QuizPage';
import FaqPage from './pages/FaqPage';
import logo from './assets/logo.png';

const navItems = [
  { to: '/', label: 'Materi' },
  { to: '/screening', label: 'Self Screening' },
  { to: '/kuis', label: 'Kuis' },
  { to: '/faq', label: 'FAQ' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-blue-700 font-semibold">
            <img src={logo} alt="Logo Siaga ISPA Balita" className="h-14 w-auto object-cover" />
          </Link>
          <nav className="flex flex-wrap gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Routes>
          <Route path="/" element={<MateriPage />} />
          <Route path="/screening" element={<ScreeningPage />} />
          <Route path="/kuis" element={<QuizPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
    </div>
  );
}
