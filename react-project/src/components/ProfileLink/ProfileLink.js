import "./ProfileLinkStyles.css";

const ProfileLink = () => {
  function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  const email = localStorage.getItem("loggedInUser");

  if (!email) {
    window.location.href = "/LoginPage";
    return null;
  }

  const users = getUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    window.location.href = "/LoginPage";
    return null;
  }

  const handleProfileClick = () => {
    window.location.href = "/ProfilePage";
  };

  return (
    <div className="user-profile">
      <div className="user-info" onClick={handleProfileClick}>
        <img
          className="user-image"
          src={"https://via.placeholder.com/300"}
          alt={`${user.firstName + " " + user.lastName}'s profile`}
        />
        <span className="user-name">
          {user.firstName + " " + user.lastName}
        </span>
      </div>
    </div>
  );
};

export default ProfileLink;
