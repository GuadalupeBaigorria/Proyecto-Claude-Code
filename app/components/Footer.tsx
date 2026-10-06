const links = [
  { href: "#", label: "Inicio" },
  { href: "#", label: "Acerca de" },
  { href: "#", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 px-6 py-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-gray-300 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
