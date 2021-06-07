import React from "react"
import farmer from "../../assets/farmer3.jpg"



const Person = (props) => {
    const { name, category, rating, country, connections } = props.person;
    return(
            <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="card" style={{width:"17.5em"}}>
                    <div className="card-header text-center">
                    <img src={farmer} alt="Brek" height="150" width="150" className="rounded-circle gradient-mint"/>
                    </div>
                    <div className="card-content">
                        <div className="card-body text-center">
                            <h4 className="card-title">{ name }</h4>
                            <p className="category text-gray font-small-4">{category}</p>
                            <hr className="grey"/>
                            <div className="row grey">
                                <div className="col-4">
                                    <span><i className="ft-star mr-1"></i> <span>{rating}</span></span>
                                </div>
                                <div className="col-4">
                                    <span><i className="ft-globe mr-1"></i> <span>{country}</span></span>
                                </div>
                                <div className="col-4">
                                    <span><i className="ft-book mr-1"></i> <span>{connections}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Person