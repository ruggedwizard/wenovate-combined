import React from 'react'
import farmer from "../../assets/profile.png"
import { Container } from 'react-bootstrap'


const Testimony = () => {
    return (
        <Container>
            <h1 className="mb-5">Testimony</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="media" style={{width:"45em", marginBottom:"5em"}}>
                    <div className="align-self-center">
                        <img className="media-object d-flex mb-3 mr-5 justify-content-center align-items-center" src={farmer} alt="imggg" style={{width:" 15em", borderRadius:"50%", height:" 15em"}} />
                    </div>
                    <div className="media-body">
                        <p>Dragée topping chocolate dragée icing gingerbread. Ice cream jujubes pie sweet roll sweet roll marshmallow powder.
                            Cotton candy dessert apple pie chocolate cake dessert lemon drops topping gingerbread biscuit. Topping halvah wafer
                            croissant jelly tootsie roll. Candy jujubes gummi bears sweet roll dessert. Apple pie jelly gummies tiramisu macaroon
                            tiramisu oat cake. Apple pie tiramisu cake chocolate cake topping danish sweet apple pie sugar plum.</p>
                        <h4 className="text-right mr-5 media-heading">Middle Aligned Media</h4>
                    </div>
                </div>
                <div className="media" style={{width:"45em", marginBottom:"5em"}}>
                    <div className="media-body">
                        <p>Dragée topping chocolate dragée icing gingerbread. Ice cream jujubes pie sweet roll sweet roll marshmallow powder.
                            Cotton candy dessert apple pie chocolate cake dessert lemon drops topping gingerbread biscuit. Topping halvah wafer
                            croissant jelly tootsie roll. Candy jujubes gummi bears sweet roll dessert. Apple pie jelly gummies tiramisu macaroon
                            tiramisu oat cake. Apple pie tiramisu cake chocolate cake topping danish sweet apple pie sugar plum.</p>
                        <h4 className="text-left mr-5 media-heading">Middle Aligned Media</h4>
                    </div>
                    <div className="align-self-center">
                        <img className="media-object d-flex mb-3 ml-5 justify-content-center align-items-center" src={farmer} alt="imggg" style={{width:" 15em", borderRadius:"50%", height:" 15em"}} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Testimony
