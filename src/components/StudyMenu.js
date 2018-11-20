import React, { Component } from "react";
import "../App.css";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import NavigationIcon from "@material-ui/icons/Navigation";

var menu_card = {
    width: "100%",
    height: "15vh"
};

class StudyMenu extends Component {
    render() {
        return (
            <div>
                <Card style={menu_card}>
                    <Button variant="extendedFab" aria-label="Delete">
                        <NavigationIcon />
                        Quizlet
                    </Button>
                </Card>
            </div>
        );
    }
}

export default StudyMenu;
