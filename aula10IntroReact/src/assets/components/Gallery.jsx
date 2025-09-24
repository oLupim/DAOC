import Profile from "./Profile";

function Gallery() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Minha Galeria de Perfis</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Profile imageUrl="https://i.pravatar.cc/150?img=1" />
        <Profile imageUrl="https://i.pravatar.cc/150?img=2" />
        <Profile imageUrl="https://i.pravatar.cc/150?img=3" />
        <Profile imageUrl="https://i.pravatar.cc/150?img=4" />
      </div>
    </div>
  );
}

export default Gallery;
