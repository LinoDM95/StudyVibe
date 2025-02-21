import HeaderLoggedOut from "./header_logged_out";



interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="ml-[4.563rem] mr-[4.563rem] mt-[1.5rem]">      
      <HeaderLoggedOut />
    </div>
  );
};
export default Header;
