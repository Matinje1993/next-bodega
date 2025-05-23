import Logo from "./Logo";
import Container from "./ui/container";
import NavbarSearch from "./navbar-search";
import NavbarAuth from "./navbar-auth";
import NavbarMiniCart from "./navbar-mini-cart";
import NavbarMenu from "./navbar-menu";
import DrawerMenuButton from "./DrawerMenuButton";

const NavBar = () => {

    return (
        <header className="min-w-0 sticky top-0 left-0 right-0 z-[9] font-montserrat h-auto w-full">
            <div className="sm:bg-[#0e5aa7] lg:min-h-[72px] box-border m-0 min-w-0 bg-white px-4 py-2 transition-all duration-100">
                <Container className="flex items-center h-[56px]">
                    <div className="box-border mr-4 lg:hidden flex-shrink-0">
                        <DrawerMenuButton />
                    </div>
                    <Logo />
                    <div className="lg:hidden sm:flex box-border m-0 min-w-0 hidden items-center flex-grow">
                        <NavbarSearch />
                    </div>
                    <NavbarSearch className="lg:block hidden" />
                    <div className="md:grow-0 box-border m-0 min-w-0 flex-grow pl-4" />
                    <NavbarAuth />
                    <NavbarMiniCart />
                </Container>
                <Container>
                    <div className="box-border m-0 min-w-0 sm:hidden flex items-center flex-grow">
                        <NavbarSearch />
                    </div>
                </Container>
            </div>
            <div className="lg:min-h-[46px] bg-[#0E5AA7] transition-all duration-100 relative z-[-1] px-4">
                <NavbarMenu />
            </div>
        </header>
    );
};

export default NavBar;