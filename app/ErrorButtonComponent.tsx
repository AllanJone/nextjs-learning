'use client';

import React from 'react';

export default function MyComponent(): JSX.Element {
    const handleClick = (): void => {
        throw new Error('Something went wrong!');
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    );
}
