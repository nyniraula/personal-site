import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-black text-dim flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            <div className="flex flex-col gap-1">
                <h4 className="font-display text-lg font-bold text-white tracking-wider">VAL</h4>
                <span className="font-mono text-xs">DESIGN_TECHNOLOGIST</span>
            </div>

            <div className="flex gap-8 font-mono text-xs tracking-wider">
                <a href="#" className="hover:text-crimson transition-colors">[ GITHUB ]</a>
                <a href="#" className="hover:text-crimson transition-colors">[ TWITTER ]</a>
                <a href="#" className="hover:text-crimson transition-colors">[ LINKEDIN ]</a>
            </div>

            <div className="font-mono text-[10px] opacity-50 text-right">
                <div>SYSTEM STATUS: ONLINE</div>
                <div>© 2026.1 // ALL RIGHTS RESERVED</div>
            </div>

        </footer>
    );
};

export default Footer;
