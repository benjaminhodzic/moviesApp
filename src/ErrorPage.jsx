import React from 'react'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
    <div>{error}</div>
    );
}
