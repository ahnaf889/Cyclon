import Container from "../../CommenComponents/Container";
import { assets } from "../../../helpers/AssetsProvider.js";


const Header = () => {
    return (
        <div className=" bg-gray-900">
            <Container>
                <div className=" grid grid-cols-3">
                    <div className="bg-purple-300">
                        <img src={assets.Logo} alt="Logo" />
                    </div>
                    <div className="bg-red-300">50%</div>
                    <div className="bg-green-300"><button>Hello </button></div>
                </div>
            </Container>

        </div>
    )
}

export default Header;
