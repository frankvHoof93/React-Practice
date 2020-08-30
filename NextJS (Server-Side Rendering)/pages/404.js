import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Something went wrong</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
    </div>
);

export default errorPage;