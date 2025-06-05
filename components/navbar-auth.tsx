import UserDropdown from "./ui/UserDropdown";
import LoginLink from "./ui/LoginLink";
import { getServerSession } from "@/lib/auth";

const NavbarAuth = async () => {
    const session = await getServerSession();
    return (
        <div id="auth-box-wrapper" className="md:min-w-[160px] sm:min-w-auto xs:min-w-auto m-0 min-w-0 min-w-auto">
            {session ? (
                <div className="m-0 min-w-0 hidden lg:block">
                    <UserDropdown name={session.user.name} />
                </div>
            ) : (<div id="loginRegister" className="sm:hover:bg-[#0B4C8E] sm:hover:rounded-[66px] md:min-w-[160px] sm:min-w-auto xs:min-w-auto box-border sm:m-[4px_12px] m-0 min-w-0 block min-w-auto sm:px-[12px]">
                <LoginLink />
            </div>)}
        </div>
    );
};

export default NavbarAuth;