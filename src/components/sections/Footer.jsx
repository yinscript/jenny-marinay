import { socialLinks } from '/src/data/socialLinks';

const Footer = () => {
  return (
    <footer className="max-w-4xl px-4 pt-15 pb-8 mx-auto flex items-center justify-between">
      <p className="text-md text-zinc-400">&#169; 2025 Jenny Marinay</p>
      <div className="flex items-center gap-2 pt-5">
        {socialLinks.map(({ url, icon: Icon, name }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon className="text-2xl text-zinc-500 hover:text-zinc-300" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
