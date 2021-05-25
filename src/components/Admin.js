import React from 'react'

const Admin = () => {
    return (
        <div style={{margin:'1em'}}>
            <div className="row" style={{marginLeft:'1em'}}>
                <div className="jumbotron col-sm-6" style={{marginRight:'1em'}}>
                    <h6 style={{textAlign:'center'}}>👋 Welcome Admin </h6>
                </div>
                <div className="jumbotron col-sm-5" style={{marginRight:'1em'}}>
                    <h6> You Have No New Updates</h6>
                </div>
            </div>
            <div style={{marginLeft:'1em'}} className="row">
                <div className="jumbotron col-sm-4" style={{marginRight:'1em'}}>
                    <h6>Create A New Blog Post</h6>
                </div>
                <div className="jumbotron col-sm-7" style={{marginRight:'1em'}}>
                    <h6>Create A New Blog Post</h6>
                </div>
            </div>
            <div style={{marginLeft:'1em'}} className="row">
                <div className="jumbotron col-sm-4" >
                    <h6>Create A New Blog Post</h6>
                </div>
                <div className="jumbotron col-sm-7" >
                    <h6>Create A New Blog Post</h6>
                </div>
            </div>
        </div>
    )
}

export default Admin
