import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: NavItem[] = [
    { label: 'Продукт', href: '#product' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-brand-red font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button onClick={onCtaClick} variant="outline" className="ml-4 py-2 px-4 text-sm">
            Демо доступ
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-brand-red font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button onClick={() => {
            onCtaClick();
            setIsMenuOpen(false);
          }} fullWidth>
            Демо доступ
          </Button>
        </div>
      )}
    </header>
  );
};
