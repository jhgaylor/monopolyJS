function getBoard() {

    return {
        square_width: 70,
        square_height: 120,
        property_header_height: 30,
        squares: [
            new Square({type:"corner", name:"Go", color: "#eee" }),
            new Square({type:"property", name:"mediterranean Avenue", color: "purple" }),
            new Square({type:"chest", name:"Chest1", color: "yellow" }),
            new Square({type:"property", name:"baltic Avenue", color: "purple" }),
            new Square({type:"tax", name:"Income Tax", color: "brown" }),
            new Square({type:"railroad", name:"reading railroad", color: "#444" }),
            new Square({type:"property", name:"oriental Avenue", color: "teal" }),
            new Square({type:"chance", name:"Chance1", color: "maroon" }),
            new Square({type:"property", name:"vermont Avenue", color: "teal" }),
            new Square({type:"property", name:"connecticut Avenue", color: "teal" }),
            
            new Square({type:"corner", name:"Just Visiting", color: "#eee" }),
            new Square({type:"property", name:"St. Charles Place", color: "magenta" }),
            new Square({type:"utility", name:"Electric Company", color: "lime" }),
            new Square({type:"property", name:"States Avenue", color: "magenta" }),
            new Square({type:"property", name:"Virginia Avenue", color: "magenta" }),
            new Square({type:"railroad", name:"reading railroad", color: "#444" }),
            new Square({type:"property", name:"St. James Place", color: "orange" }),
            new Square({type:"chest", name:"Chest2", color: "yellow" }),
            new Square({type:"property", name:"Tennessee Avenue", color: "orange" }),
            new Square({type:"property", name:"New York Avenue", color: "orange" }),
            
            new Square({type:"corner", name:"Free Parking", color: "#eee" }),
            new Square({type:"property", name:"Kentucky Avenue", color: "red" }),
            new Square({type:"chance", name:"Chance2", color: "maroon" }),
            new Square({type:"property", name:"Indiana Avenue", color: "red" }),
            new Square({type:"property", name:"Illinois Avenue", color: "red" }),
            new Square({type:"railroad", name:"reading railroad", color: "#444" }),
            new Square({type:"property", name:"Atlantic Avenue", color: "yellow" }),
            new Square({type:"property", name:"Ventnor Avenue", color: "yellow" }),
            new Square({type:"utility", name:"Water Works", color: "lime" }),
            new Square({type:"property", name:"Marvin Gardens", color: "yellow" }),
            
            new Square({type:"corner", name:"Go to Jail", color: "#eee" }),
            new Square({type:"property", name:"Pacific Avenue", color: "green" }),
            new Square({type:"property", name:"North Carolina Avenue", color: "green" }),
            new Square({type:"chest", name:"Chest3", color: "yellow" }),
            new Square({type:"property", name:"Pennsylvania Avenue", color: "green" }),
            new Square({type:"railroad", name:"Shortline", color: "#444" }),
            new Square({type:"chance", name:"Chance3", color: "maroon" }),
            new Square({type:"property", name:"Park Place", color: "blue" }),
            new Square({type:"tax", name:"Luxury Tax", color: "brown" }),
            new Square({type:"property", name:"Boardwalk", color: "blue" }),
        ]
    };
};