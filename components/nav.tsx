import React from 'react';

import Link from 'next/link';

export const Nav: React.FC = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    )
}