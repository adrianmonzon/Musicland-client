import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const FooterPagePro = () => {
    return (
        <MDBFooter className="footer">
                <div  className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Adrián Monzón
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPagePro;
