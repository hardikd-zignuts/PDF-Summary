import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'

const AppBar = () => {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/pdf-file-6162310-5034139.png?f=webp"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        PDF Summary
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://lh3.googleusercontent.com/a/AGNmyxYu8wxfi__S8Wuu5byfNA1P6HdA7xMjNlNwXfKqxA=s555-c" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Hardik Desai
                            </span>
                            <span className="block truncate text-sm font-medium">
                                hardikd@zignuts.com
                            </span>
                        </Dropdown.Header>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link active={true} href="/">
                        Page Builder
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        About
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default AppBar