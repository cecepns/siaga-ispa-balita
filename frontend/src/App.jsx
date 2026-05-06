import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-blue-700 font-semibold">
            <img src={logo} alt="Logo Siaga ISPA Balita" className="h-14 w-auto object-cover" />
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 sm:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden flex-wrap gap-1 text-sm sm:flex">
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

        {isMobileMenuOpen && (
          <nav id="mobile-nav-menu" className="border-t border-slate-200 bg-white px-4 py-3 sm:hidden">
            <div className="mx-auto grid max-w-5xl gap-2 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 font-medium ${
                      isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
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
