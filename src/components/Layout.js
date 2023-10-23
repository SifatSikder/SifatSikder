import React from 'react'

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`${className} w-full h-full inline-block z-0 bg-light p-32  xl:!p-0 lg:!p-0 md:!p-0 sm:!p-0`}>{children}</div>
    )
}

export default Layout