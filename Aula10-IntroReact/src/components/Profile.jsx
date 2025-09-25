function Profile({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt="Foto de perfil"
      style={{ borderRadius: "8px", margin: "10px", width: "150px", height: "150px" }}
    />
  );
}

export default Profile;
