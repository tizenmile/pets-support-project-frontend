import { UserDataItem } from "../UserDataItem/UserDataItem";
export const UserDataCard = () => {
  return (
    <>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Avatar"
          width="233px"
          height="233px"
        />
        <input type="file" accept="image" />
        <button>Upload Avatar</button>
      </div>
      <UserDataItem />
    </>
  );
};
