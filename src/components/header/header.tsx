import "./header.css";


function Header() {
  return (
<header className="header">
 
  <div className="awning">
  {Array.from({ length: 14 }).map((_, index) => (
    <span
      key={index}
      className={index % 2 === 0 ? "awning-red" : "awning-white"}
    />
  ))}
</div>

</header>
  );
}

export default Header;