// import React from "react";

// const Header = () => {
//     return (
//         <header style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
//             <h1>College Rankings Finder</h1>
//         </header>
//     );
// };

// export default Header;


import React from "react";

const Header = () => {
    return (
        <header
            style={{
                padding: "20px",
                backgroundColor: "#4CAF50",
                color: "white",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h1 style={{ margin: "0", fontSize: "2em" }}>Campus Navigator</h1>
        </header>
    );
};

export default Header;

