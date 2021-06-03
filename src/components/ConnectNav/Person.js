import React from "react"
// import { div } from "react-bootstrap"
import farmer from "../../assets/farmer3.jpg"



const Person = (props) => {
    const { name, category, rating, country, connections } = props.person;
    return(
        <div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card" style={{width:"17.5em"}}>
                    <div class="card-header text-center">
                    <img src={farmer} alt="Brek" height="150" width="150" class="rounded-circle gradient-mint"/>
                    </div>
                    <div class="card-content">
                        <div class="card-body text-center">
                            <h4 class="card-title">{ name }</h4>
                            <p class="category text-gray font-small-4">{category}</p>
                            <hr class="grey"/>
                            <div class="row grey">
                                <div class="col-4">
                                    <span><i class="ft-star mr-1"></i> <span>{rating}</span></span>
                                </div>
                                <div class="col-4">
                                    <span><i class="ft-globe mr-1"></i> <span>{country}</span></span>
                                </div>
                                <div class="col-4">
                                    <span><i class="ft-book mr-1"></i> <span>{connections}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person

// import React from "react"

// const Person = () =>{
//     return(
//         <div>Person</div>
//     )
// }

// export default Person;