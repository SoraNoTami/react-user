import React from "react";

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                {this.props.tableau.map(function (user) {
                    return <p>{user}</p>
                })
                }
            </div>
        )
    }
}