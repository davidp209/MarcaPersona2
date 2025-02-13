import facebook from '../../assets/redesSociales/facebook.svg'; 
import instagram from '../../assets/redesSociales/insta.svg';
import titok from '../../assets/redesSociales/tiktok.svg';
import twitter from '../../assets/redesSociales/X.svg'; 
import youtube from '../../assets/redesSociales/youtube.svg';
import './RedesSociales.css';


const RedesSociales = () => {

    return (
        <>
            <div className='RedesSociales'>
                <a href="https://www.facebook.com/cifpcarlos3"><img src={facebook} alt="Facebook" /></a>
                <a href="https://twitter.com/cifpcarlos3"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.instagram.com/cifpcarlos3/"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.tiktok.com/@cifpcarlos3"><img src={titok} alt="titok" /></a>
                <a href="https://www.youtube.com/c/cifpcarlosiiicartagena"><img src={youtube} alt="youtube" /></a>

            </div>
        </>

    );

}
export default RedesSociales;