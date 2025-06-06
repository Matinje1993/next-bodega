"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/my-account') {
            // Active if exact match or any sub-path of /my-account
            return pathname === '/my-account' || pathname.startsWith('/my-account/');
        }
        return pathname === path;
    };
    return (
        <div>
            <main className="min-w-0 flex-1 w-full max-w-[1232px] pb-8 mx-auto">
                <div className="m-0 min-w-0 pt-0 px-4 xs:px-6 sm:pt-8 sm:flex-row flex flex-col">
                    <div className="m-0 min-w-0 relative left-0 right-0 z-[2] top-[50px] md:w-[290px] md:static">
                        <nav className="m-0 min-w-0 rounded-[2px] bg-white flex shadow-[0_0_4px_0_rgba(0,0,0,0.2)] relative overflow-x-auto scroll-smooth whitespace-nowrap touch-pan-x md:flex-col">
                            <Link href="/my-account" className={`m-0 min-w-auto uppercase ${isActive('/my-account') ? 'text-[#0E5AA7] font-medium' : 'text-[#4D4D4D]'} pl-2 pr-2 pt-4 pb-4 flex items-center border-t border-[#E6E6E6] no-underline md:pl-6 md:pr-6 md:pt-5 md:pb-5 md:normal-case md:first-of-type:border-t-0`}>
                                <svg height="24" width="24" viewBox="0 0 16 16" className="hidden md:block md:mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 16 16">
                                        <g fill="#0E5AA7">
                                            <path d="M14.88844,2.12886a.34969.34969,0,0,0-.24746-.10254h-.0007l-13.3007.01982a.35009.35009,0,0,0-.3493.35l.0014,11.24114a.35008.35008,0,0,0,.35.35l11.54248-.00752v-.7l-11.19248.00752-.001-7.73908,9.79829.00205v-.7l-9.79833-.002L1.69028,2.7455,14.291,2.72705V13.97981h.7V2.37632A.34977.34977,0,0,0,14.88844,2.12886Z"></path>
                                            <path d="M12.8802,3.52442a.69675.69675,0,1,0,.69675.69675h0V4.221a.69663.69663,0,0,0-.6967-.69658h0Z"></path>
                                            <path d="M4.68948,6.38528H2.81466a.19441.19441,0,0,0-.19581.19291V7.70675a.19437.19437,0,0,0,.19581.19287H4.68948a.19437.19437,0,0,0,.19579-.19287V6.57819A.19441.19441,0,0,0,4.68948,6.38528Z"></path>
                                            <path d="M4.68948,8.68H2.81466a.1944.1944,0,0,0-.19581.19291v1.12856a.19437.19437,0,0,0,.19581.19286H4.68948a.19436.19436,0,0,0,.19579-.19286V8.87291A.1944.1944,0,0,0,4.68948,8.68Z"></path>
                                            <path d="M4.68948,10.94411H2.81466a.19441.19441,0,0,0-.19581.19291v1.12857a.19437.19437,0,0,0,.19581.19286H4.68948a.19436.19436,0,0,0,.19579-.19286V11.137A.19441.19441,0,0,0,4.68948,10.94411Z"></path>
                                            <path d="M7.7491,8.68H5.87428a.19441.19441,0,0,0-.19582.19291v1.12856a.19438.19438,0,0,0,.19582.19286H7.7491a.19436.19436,0,0,0,.19579-.19286V8.87291A.1944.1944,0,0,0,7.7491,8.68Z"></path>
                                            <path d="M7.7491,10.94411H5.87428a.19442.19442,0,0,0-.19582.19291v1.12857a.19438.19438,0,0,0,.19582.19286H7.7491a.19436.19436,0,0,0,.19579-.19286V11.137A.19441.19441,0,0,0,7.7491,10.94411Z"></path>
                                            <path d="M10.77812,10.94411H8.9033a.19441.19441,0,0,0-.19581.19291v1.12857a.19437.19437,0,0,0,.19581.19286h1.87482a.19437.19437,0,0,0,.1958-.19286V11.137A.19442.19442,0,0,0,10.77812,10.94411Z"></path>
                                        </g>
                                        <g fill="#b7cee5">
                                            <rect x="3.01045" y="6.77105" width="1.48321" height="0.74284"></rect>
                                            <rect x="3.01045" y="9.06577" width="1.48321" height="0.74284"></rect>
                                            <rect x="3.01045" y="11.32989" width="1.48321" height="0.74284"></rect>
                                            <rect x="6.07007" y="9.06577" width="1.48321" height="0.74284"></rect>
                                            <rect x="6.07007" y="11.32989" width="1.48321" height="0.74284"></rect>
                                            <rect x="9.0991" y="11.32989" width="1.48321" height="0.74284"></rect>
                                        </g>
                                    </svg>
                                </svg>
                                My Account
                            </Link>
                            <Link href="/my-account/profile" className={`m-0 min-w-auto uppercase ${isActive('/my-account/profile') ? 'text-[#0E5AA7] font-medium' : 'text-[#4D4D4D]'} pl-2 pr-2 pt-4 pb-4 flex items-center border-t border-[#E6E6E6] no-underline md:pl-6 md:pr-6 md:pt-5 md:pb-5 md:normal-case`}>
                                <svg height="24" width="24" viewBox="0 0 24 24" className="hidden md:block md:mr-4">
                                    <g fill="#4d4d4d">
                                        <path d="M20.88081,20.73327v.8999h1V20.29235a4.88081,4.88081,0,0,0-3.20605-4.44629l-.57422-.18945a12.81631,12.81631,0,0,1-2.9248-1.22852c-.084-.05273-.22559-.15917-.23829-.27343a.47748.47748,0,0,1,.09864-.2959,2.49267,2.49267,0,0,1,.334-.37012c.09863-.09765.19727-.19531.28809-.29883a7.65877,7.65877,0,0,0,1.88769-4.2832A6.85931,6.85931,0,0,0,15.9355,3.514,5.134,5.134,0,0,0,12,1.95544,5.1524,5.1524,0,0,0,8.042,3.51892,7.04131,7.04131,0,0,0,6.44038,8.2738,7.5313,7.5313,0,0,0,8.32515,13.14c.082.0918.16895.18164.25684.27246a1.91236,1.91236,0,0,1,.53711.74316c.04589.17286-.27149.34375-.76172.54688l-.13477.05566c-.42383.18164-.86523.33789-1.30762.4961a12.8846,12.8846,0,0,0-2.55371,1.125A4.68481,4.68481,0,0,0,2.1191,20.29235v1.417H18.75581v-1"></path>
                                    </g>
                                    <g fill="#CFCFCF">
                                        <path d="M18.34771,16.78294l-.56641-.18652A13.56743,13.56743,0,0,1,14.629,15.26048a1.372,1.372,0,0,1-.69434-1.001,1.46389,1.46389,0,0,1,.26367-.9707,3.46567,3.46567,0,0,1,.46094-.52246c.08106-.0791.16113-.1582.23438-.24316A6.57948,6.57948,0,0,0,16.543,8.79075a5.841,5.841,0,0,0-1.31641-4.57031,4.19139,4.19139,0,0,0-3.23535-1.27539A4.18955,4.18955,0,0,0,8.76763,4.18821,5.97278,5.97278,0,0,0,7.43169,8.25755a6.37289,6.37289,0,0,0,.75293,2.93359,6.50247,6.50247,0,0,0,.87988,1.27442c.07129.081.14844.15918.22559.23926a2.72242,2.72242,0,0,1,.78711,1.18261c.28027,1.05469-.81836,1.50977-1.34668,1.72852l-.124.05176c-.44239.18847-.90235.35351-1.36524.51757a12.02963,12.02963,0,0,0-2.35937,1.03125A3.72984,3.72984,0,0,0,3.1104,20.282v.417H18.74712v.03125l2.125-.00733V20.282A3.89661,3.89661,0,0,0,18.34771,16.78294Z"></path>
                                    </g>
                                </svg>
                                My Profile
                            </Link>
                            <Link href="/my-account/orders" className={`m-0 min-w-auto uppercase ${isActive('/my-account/orders') ? 'text-[#0E5AA7] font-medium' : 'text-[#4D4D4D]'} pl-2 pr-2 pt-4 pb-4 flex items-center border-t border-[#E6E6E6] no-underline md:pl-6 md:pr-6 md:pt-5 md:pb-5 md:normal-case`}>
                                <svg height="24" width="24" viewBox="0 0 24 24" className="hidden md:block md:mr-4">
                                    <g fill="#4d4d4d">
                                        <path d="M21.99194,3.46661a.45221.45221,0,0,0-.00073-.06036.489.489,0,0,0-.04138-.10944c-.00586-.01294-.00781-.02655-.01489-.03894A.49442.49442,0,0,0,21.79358,3.1c-.00488-.00361-.00684-.00989-.01184-.01331-.00977-.00659-.022-.006-.032-.0119A.48516.48516,0,0,0,21.593,3.0163a.45177.45177,0,0,0-.05884-.01038C21.52271,3.00513,21.5127,3,21.501,3H7.67407a.49972.49972,0,0,0-.18139.03406L2.31775,5.05365,2.311,5.0578a.46259.46259,0,0,0-.05005.03052.495.495,0,0,0-.10328.06976.51608.51608,0,0,0-.04077.05066.49507.49507,0,0,0-.06408.09552.68332.68332,0,0,0-.04566.17841C2.00635,5.49506,2,5.50574,2,5.51837V20.50116A.49752.49752,0,0,0,2.499,21H2.5l11.5033-.0329v-.99591l-.04578.00012-10.96338.03211V6.01825L7.0072,6.00647v4.47375a.4992.4992,0,0,0,.76416.42286l.73792-.46375.72131.4715a.50141.50141,0,0,0,.54.00293l.73975-.46857.70385.46368a.49137.49137,0,0,0,.27491.08283.49808.49808,0,0,0,.499-.49878v-4.501l3.98193-.01166v12.9972h.00525v1.984l.49878-.00141.01441-.00293a.49859.49859,0,0,0,.16784-.0321l.0116-.00458.00061-.00024,5.01562-1.97388A.49928.49928,0,0,0,22,18.48254V3.49878C22,3.48743,21.9928,3.47784,21.99194,3.46661ZM10.99011,9.56543l-.199-.13055a.497.497,0,0,0-.542-.00489l-.7417.46961L8.78809,9.429A.501.501,0,0,0,8.25,9.42419l-.24475.15393V6.00354L9.57739,5.999l1.41272.00366Zm5.38758-4.58679-6.9004.02044L7.51221,4.99329h-.002a.48174.48174,0,0,0-.0592.01171l-1.29834.00385L5.169,5.01178,7.76758,3.99762H18.87109Zm4.62414,13.16394-4.02966,1.586V5.8175l4.02966-1.58605Z"></path>
                                        <polygon points="6.02 16.996 4.02 16.996 4.02 18.996 6.02 18.996 6.02 16.996"></polygon>
                                        <polygon points="8.975 17.996 6.975 17.996 6.975 18.996 8.975 18.996 8.975 17.996"></polygon>
                                    </g>
                                    <g fill="#CFCFCF">
                                        <path d="M7.76758,3.99762,5.169,5.01178l.98376-.00293L7.45105,5.005a.48174.48174,0,0,1,.0592-.01171h.002l1.96508.00579,6.9004-.02044,2.4934-.981Z"></path>
                                        <polygon points="16.972 19.729 21.002 18.143 21.002 4.231 16.972 5.818"></polygon>
                                    </g>
                                </svg>
                                My Orders
                            </Link>
                            <Link href="/my-account/address-book" className={`m-0 min-w-auto uppercase ${isActive('/my-account/address-book') ? 'text-[#0E5AA7] font-medium' : 'text-[#4D4D4D]'} pl-2 pr-2 pt-4 pb-4 flex items-center border-t border-[#E6E6E6] no-underline md:pl-6 md:pr-6 md:pt-5 md:pb-5 md:normal-case`}>
                                <svg height="24" width="24" viewBox="0 0 24 24" className="hidden md:block md:mr-4">
                                    <g fill="#4d4d4d">
                                        <path d="M14.46784,2.694l-.0116.01709a4.27724,4.27724,0,0,0-1.76233-.71972q-.15564-.0249-.31518-.03907c-.01929-.002-.0376.002-.05689.00049l.00049-.00586c-.10644-.00781-.21484-.01172-.32226-.01172-.08411,0-.1626.02-.24561.02491a4.398,4.398,0,0,0-.44275.04443,4.28382,4.28382,0,0,0-.43469.09424c-.12195.03271-.2417.06933-.35938.11182a4.37078,4.37078,0,0,0-.479.208c-.07837.03955-.15491.08106-.23047.125a4.376,4.376,0,0,0-.53455.36768c-.02868.023-.05651.04639-.08459.06982a4.35383,4.35383,0,0,0,2.311,7.68555V21.56512h1V10.66668A4.37595,4.37595,0,0,0,14.46784,2.694Z"></path>
                                    </g>
                                    <g fill="#CFCFCF">
                                        <path d="M12.00049,2.9187a3.38855,3.38855,0,1,0,1.90527.585l.55091-.80908a4.27716,4.27716,0,0,0-1.76233-.71972q-.15564-.02492-.31519-.03907c-.01929-.00195-.0376.002-.05688.00049l-.07178.99219C12.16748,2.92261,12.08447,2.9187,12.00049,2.9187Z"></path>
                                    </g>
                                </svg>
                                My Addresses
                            </Link>
                            <a className="cursor-pointer m-0 min-w-auto uppercase text-[#4D4D4D] pl-2 pr-2 pt-4 pb-4 flex items-center border-t border-[#E6E6E6] no-underline md:pl-6 md:pr-6 md:pt-5 md:pb-5 md:normal-case" onClick={() => signOut({ callbackUrl: '/' })}>
                                <svg height="24" width="24" viewBox="0 0 24 24" className="hidden md:block md:mr-4">
                                    <g fill="#4D4D4D">
                                        <path d="M19.9,10.7l-4.3-4.3L14.8,7l3.4,3.4h-6.9v1h7l-3.4,3.4l0.7,0.7l4.2-4.2C20,11.2,20,10.9,19.9,10.7L19.9,10.7z"></path>
                                        <path d="M12.7,18.8h-2.5V4.7c0-0.2-0.1-0.4-0.3-0.5L6.9,3h5.8v6.6h1V2.5c0-0.3-0.2-0.5-0.5-0.5l0,0H4.5 C4.2,2,4,2.2,4,2.5l0,0v16.9c0,0.2,0.1,0.4,0.3,0.5L9.5,22c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.5-0.5v-1.7h3c0.3,0,0.5-0.2,0.5-0.5 l0,0v-6.8h-1V18.8z M9.2,20.8L5,19.1V3.3L9.2,5V20.8z"></path>
                                        <ellipse cx="8.3" cy="11.9" rx="0.3" ry="0.4"></ellipse>
                                    </g>
                                </svg>
                                Logout
                            </a>
                        </nav>
                    </div>
                    {children}
                </div>
                <div className="m-0 mt-4 flex justify-center min-w-0">
                    <div className="bg-white"></div>
                </div>
            </main>
        </div>
    );
};

export default layout;