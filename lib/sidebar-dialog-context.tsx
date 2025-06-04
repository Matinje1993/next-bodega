'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type SidebarDialogContentProps = {
    title?: string;
    body: ReactNode;
    footer?: ReactNode;
};

type SidebarDialogContextType = {
    showSidebarDialog: (props: SidebarDialogContentProps) => void;
    hideSidebarDialog: () => void;
};

const SidebarDialogContext = createContext<SidebarDialogContextType | undefined>(undefined);

const useWindowWidth = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

export const SidebarDialogProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarDialogData, setSidebarDialogData] = useState<SidebarDialogContentProps | null>(null);

    const showSidebarDialog = (props: SidebarDialogContentProps) => setSidebarDialogData(props);
    const hideSidebarDialog = () => setSidebarDialogData(null);

    const width = useWindowWidth();
    const isMobile = width <= 767;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const desktopVariants = {
        initial: { x: '100vw' },
        animate: { x: 0 },
        exit: { x: '100vw' },
    };

    const mobileVariants = {
        initial: { height: 0, borderRadius: '0px' },
        animate: { height: '85vh', borderRadius: '24px 24px 0px 0px' },
        exit: { height: 0, borderRadius: '0px' },
    };

    return (
        <SidebarDialogContext.Provider value={{ showSidebarDialog, hideSidebarDialog }}>
            {children}
            {sidebarDialogData &&
                <AnimatePresence>
                    <div className="fixed inset-0 z-[1040]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <motion.div
                            key="modal-content"
                            initial={isMobile ? mobileVariants.initial : desktopVariants.initial}
                            animate={isMobile ? mobileVariants.animate : desktopVariants.animate}
                            exit={isMobile ? mobileVariants.exit : desktopVariants.exit}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className={`fixed flex flex-col max-h-full bg-white shadow-md rounded-none m-0 p-0 inset-x-0 bottom-0 w-full xs:w-[400px] sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[500px] font-montserrat`}
                        >
                            {/* Header */}
                            {sidebarDialogData.title && (<div className="m-0 min-w-0 border-b border-[#e6e6e6] flex items-center justify-between relative p-3 sm:p-6">
                                <div className="m-0 min-w-0 text-base text-black font-medium w-full">
                                    <div className="m-0 min-w-0 flex flex-1 relative left-[13px] w-[332px] h-[32px] font-montserrat font-semibold text-[22px] leading-[32px] text-black">
                                        {sidebarDialogData.title}
                                    </div>
                                </div>
                                <button className="text-[unset] shadow-none border-0 p-[unset] outline-none transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm absolute left-[-18px] h-[38px] w-[38px] flex items-center justify-center bg-white rounded-full top-1/2 -translate-y-1/2 max-[767px]:right-[20px] max-[767px]:left-[unset] max-[767px]:top-[-2px]" type="button" onClick={hideSidebarDialog}>
                                    <svg data-name="Layer 1" viewBox="0 0 24 24" height="14px" width="14px" className="w-[14px] h-[14px]">
                                        <g fill="#fff" stroke="#4d4d4d" strokeMiterlimit="10"><path d="M22.203 2.009l-20 20M2.203 2.009l20 20"></path>
                                        </g>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                    </svg>
                                </button>
                            </div>)}
                            {/* Body */}
                            <div className="m-0 min-w-0 pt-0 pr-0 pl-0 pb-0 h-full flex flex-col font-montserrat flex-grow overflow-auto">
                                {sidebarDialogData.body}
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>
            }
        </SidebarDialogContext.Provider>
    );
};

export const useSidebarDialog = (): SidebarDialogContextType => {
    const context = useContext(SidebarDialogContext);
    if (!context) {
        throw new Error('useSidebarDialog must be used within a SidebarDialogProvider');
    }
    return context;
};

export const useSwitchSidebarDialog = () => {
    const { hideSidebarDialog, showSidebarDialog } = useSidebarDialog();

    const switchSidebarDialog = (newProps: SidebarDialogContentProps) => {
        hideSidebarDialog();
        setTimeout(() => {
            showSidebarDialog(newProps);
        }, 300); // match `duration: 0.3` in Framer Motion
    };

    return switchSidebarDialog;
};