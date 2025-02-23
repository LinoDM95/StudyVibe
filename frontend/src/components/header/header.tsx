import HeaderLoggedOut from "./header_logged_out";



interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="ml-5 mr-5 mt-3 md:ml-[4.563rem] md:mr-[4.563rem] md:mt-[1.5rem]">      
      <HeaderLoggedOut />
    </div>
  );
};
export default Header;
