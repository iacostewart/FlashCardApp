import React, { Component } from 'react';
import AdminDeckModal from './AdminDeckModal';
import AdminBanHammer from './Banhammer';


class AdminSplash extends Component {

    render () {
        return(

            <div className="main">
                <div className="mainDiv">
                    <h1>Admin logged in Splash page...</h1>
                    <h4>Future home of Spreading knoledge like a FlashCard version of Johny apple seed..</h4>
                    <br/>
                    <AdminDeckModal />
                    <br/>
                    <h5>... Where there is knoledge there is pain... never underestimate the power/abality of stupid people in large groups..
                            the BanHammer will help drain the pool... 
                    </h5>

                    <br/>
                    <AdminBanHammer />
                    <br/>
                    <br/>
                    <p>But for now your going to be forced to use your imagination... but not too much... the lower your
                        expectations... the better this will look in the beganning end.. </p>
                    
                </div>
            </div>
        )
    }
}

export default AdminSplash;
