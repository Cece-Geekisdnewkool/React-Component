import ProfilePhoto from "./components/profile/ProfilePhoto";
import FullName from "./components/profile/FullName";
import Address from "./components/profile/Address";
function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
