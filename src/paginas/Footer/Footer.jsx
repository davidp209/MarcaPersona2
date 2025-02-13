import RedesSociales from "../../componentes/RedesSociales/RedesSociales";
import './Footer.css';


const Footer = () => {

    return(
        <>
        <div className="footer">
                    <div className="row ">
                        <div className="col-12">
                            <h3>CIFP Carlos III</h3>
                        </div>
                    </div> 
                    <div className="row ">
                        <div className="col-12">
                            <p>C/Carlos III, 30201 - Cartagena | oaehfdpoahfepoqnrofǹqòn | 136165163</p>
                        </div>
                    </div> 
                    <div className="row ">
                        <div className="col-12">
                            <RedesSociales></RedesSociales>
                        </div>
                    </div> 
            </div>
        </>




    );





}
export default Footer;