import HeaderLoggedOut from "./header_logged_out";


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="">      
      <HeaderLoggedOut />
    </div>
  );
};
export default Header;
