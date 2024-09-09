const Header = ({ title, size }: { title: string; size: string }) => {
  return (
    <h2
      className={`block w-full ${size} font-bold text-transparent bg-gradient-to-b from-white to-gray-400 bg-clip-text `}
    >
      {title}
    </h2>
  );
};

export default Header;
