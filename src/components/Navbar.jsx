import {useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full bg-black text-white">
            <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4">
                <div className="text-xl font-bold">LOGO</div>
                {/* Desktop Menu */}
                <div className="hidden items-center gap-4 md:flex">
                    <a href="#" className="hover:text-emerald-500">Home</a>
                    <a href="#" className="hover:text-emerald-500">How it works</a>
                    <a href="#" className="hover:text-emerald-500">Features</a>
                    <a href="#" className="hover:text-emerald-500">Pricing</a>
                    <button className="rounded-lg bg-emerald-500 px-4 py-2 text-black hover:bg-emerald-600">Create Account</button>
                </div>
                {/* Hamburger menu */}
                <button 
                    type="button"
                    className="rounded p-2 text-white hover:bg-white/10 focus:outline-none md:hidden"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div id = "mobile-navigation" className="flex flex-col gap-4 border-t border-white/20 px-4 py-4 md:hidden">
                    <a href="#" className="hover:text-emerald-500">Home</a>
                    <a href="#" className="hover:text-emerald-500">How it works</a>
                    <a href="#" className="hover:text-emerald-500">Features</a>
                    <a href="#" className="hover:text-emerald-500">Pricing</a>
                    <button className="rounded-lg bg-emerald-500 px-4 py-2 text-black hover:bg-emerald-600">Create Account</button>
                </div>
            )}
        </nav>

    );

};
export default Navbar;