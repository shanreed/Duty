import React from 'react'
import { Button } from 'reactstrap';

import '../css/home.css';
import '../css/whichsignup.css';

export default function WhichSignIn(props) {
    return (
            <div className = "which">
                <div className = "eachwhich">
                    <div className = "which-btns">
                    <Button onClick={() => props.history.push('/assignerSignIn')} className = "btn" size="lg">
                        ASSIGNER
                    </Button>
                    </div>
                </div>
                <div className = "eachwhich">
                    <div className = "which-btns">
                    <Button onClick={() => props.history.push('/assigneeSignIn')} className = "btn" size="lg">
                    ASSIGNEE
                    </Button>
                    </div>
                </div>
                
            </div>
    )
}
