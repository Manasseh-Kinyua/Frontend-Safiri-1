function NavBar() {
    return(
        <header className="main-head">
            <nav>
                <div>
                    <h1 id="logo">LOGO</h1>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="/dashboard">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">LogIn/Sign Up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar