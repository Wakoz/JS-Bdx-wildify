import "./style.css"
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Pseudo from "./Pseudo"


function Header () {
    return (
<header>
<Navbar />
<Pseudo />
<Searchbar />
</header>
)}

export default Header;