'use client';

import React from 'react';

export default function MyComponent(): JSX.Element {
    const handleClick = (): void => {
        throw new Error('Something went wrong!');
    };

    return (
        <button className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md" onClick={handleClick}>Click me</button>
    );
}
