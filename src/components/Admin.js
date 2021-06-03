import React, {useState} from 'react'
import Createblog from './Admincomponents/Createblog'
import Createfeedback from './Admincomponents/Createfeedback'
import Listblog from './Admincomponents/Listblog'
import Modal from './Admincomponents/Modal'

const Admin = () => {
    const [isModal, setIsModal] = useState(false)
    return (
        <div style={{margin:'1em'}}>
            {/* Toggle Modal */}
            {isModal && <Modal/>}

            <div className="row" style={{marginLeft:'1em'}}>
                <div className="jumbotron col-sm-6" style={{marginRight:'1em'}}>
                    <h6 style={{textAlign:'center'}}>👋 Welcome Admin </h6>
                </div>
                <div className="jumbotron col-sm-5" style={{marginRight:'1em'}}>
                    <h6> You Have No New Updates</h6>
                </div>
            </div>
            <div style={{marginLeft:'1em'}} className="row">
                <div className="jumbotron col-sm-5" style={{marginRight:'1em'}}>
                    <h6 style={{textAlign:'center'}}>Create A New Blog Post</h6>
                    <Createblog/>
                </div>
                <div className="jumbotron col-sm-6" style={{marginRight:'1em'}}>
                    <h6 style={{textAlign:'center'}}>Blog Post List</h6>
                    <Listblog/>
                </div>
            </div>
            <div style={{marginLeft:'1em'}} className="row">
                <div className="jumbotron col-sm-4" >
                    <h6 style={{textAlign:'center'}}>Add Testimony</h6>
                    <Createfeedback/>
                </div>
                <div className="jumbotron col-sm-7" >
                    <h6>Create A New Blog Post</h6>
                </div>
            </div>
        </div>
    )
}

export default Admin
