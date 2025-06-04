import {
    SignInButton,
    SignUpButton,
    UserButton,
    currentUser,
} from "@clerk/nextjs";
import UserDropdown from "./ui/UserDropdown";

const NavbarAuth = async () => {
    const user = await currentUser();
    return (
        <div id="auth-box-wrapper" className="md:min-w-[160px] sm:min-w-auto xs:min-w-auto m-0 min-w-0 min-w-auto">
            {user ? (
                <div className="m-0 min-w-0 hidden lg:block">
                    <UserDropdown firstName={user.firstName} lastName={user.lastName} />
                </div>
            ) : (<div id="loginRegister" className="sm:hover:bg-[#0B4C8E] sm:hover:rounded-[66px] md:min-w-[160px] sm:min-w-auto xs:min-w-auto box-border sm:m-[4px_12px] m-0 min-w-0 block min-w-auto sm:px-[12px]">
                <SignInButton>
                    <span id="header_login_register" className="pl-4 pr-4 font-normal inline-flex items-center h-10 bg-0 border-0 text-decoration-none relative cursor-pointer">
                        <svg viewBox="0 0 24 24" id="UserInverse" className="w-6 h-6 text-primary-blue sm:text-white">
                            <g strokeWidth="2" transform="translate(0, 0)">
                                <path data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M19,20.486v-0.745 c0-1.077-0.577-2.071-1.512-2.605l-3.219-1.842" strokeLinejoin="miter" strokeLinecap="butt"></path>
                                <path data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M9.727,15.292l-3.215,1.844 C5.577,17.67,5,18.664,5,19.741v0.745" strokeLinejoin="miter" strokeLinecap="butt"></path>
                                <path data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M12,16L12,16 c-2.209,0-4-1.791-4-4v-2c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v2C16,14.209,14.209,16,12,16z" strokeLinejoin="miter"></path>
                                <circle fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="12" r="11" strokeLinejoin="miter"></circle>
                            </g>
                        </svg>
                        <span className="text-white text-[12px] font-medium whitespace-nowrap ml-[10px] block max-sm:hidden">Login &amp; Register</span>
                    </span>
                </SignInButton>
            </div>)}
        </div>
    );
};

export default NavbarAuth;