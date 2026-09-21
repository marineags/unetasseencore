import "./Header.css";

function Header() {
  return (
<header className="header">
  <div className="logo">Une Tasse Encore</div>

  <nav className="nav">
    <a href="#home">Accueil</a>
    <a href="#recettes">Recettes</a>
    <a href="#about">À propos</a>
  
  </nav>

  <div className="awning">
  {Array.from({ length: 14 }).map((_, index) => (
    <span
      key={index}
      className={index % 2 === 0 ? "awning-red" : "awning-white"}
    />
  ))}
</div>
<div className="logo">TEST</div>
</header>
  );
}

export default Header;