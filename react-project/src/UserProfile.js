import Shika from "./assets/shikamaru.jpg";

export const UserProfile = () => {
  //   const cssStyle = { color: "white", background: "gray" };
  //   return <div style={cssStyle}>hey there</div>;

  return (
    <div className="card">
      <div className="img">
        <img src={Shika} height="150px" width="150px" />
      </div>
      <div className="bio">
        <h1 className="text-info">Kakashi Hatake</h1>
        <p>
          His name is Kakashi Hatake . His nickname is The copy ninja, he lives
          in Hidden Leaf Village.
        </p>
        <img src="./lazyShikamaru.jpg" width="100%" />
      </div>
    </div>
  );
};
