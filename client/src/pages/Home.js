// import React, { useState } from "react";
// import { getCollegesByRank } from "../api/colleges";
// import CollegeTable from "../components/CollegeTable";

// const Home = () => {
//     const [rank, setRank] = useState("");
//     const [colleges, setColleges] = useState([]);

//     const handleFindColleges = async () => {
//         try {
//             const fetchedColleges = await getCollegesByRank(rank);
//             console.log(fetchedColleges); // Debug log
//             setColleges(fetchedColleges);
//         } catch (error) {
//             console.error("Error fetching colleges:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Campus Navigator</h1>
//             <label>
//                 Enter Your Rank:
//                 <input
//                     type="number"
//                     value={rank}
//                     onChange={(e) => setRank(e.target.value)}
//                 />
//             </label>
//             <button onClick={handleFindColleges}>Find Colleges</button>
//             <CollegeTable colleges={colleges} /> {/* Pass colleges as prop */}
//         </div>
//     );
// };

// export default Home;


// import React, { useState } from "react";
// import { getCollegesByRank } from "../api/colleges";
// import CollegeTable from "../components/CollegeTable";

// const Home = () => {
//     const [rank, setRank] = useState(""); // Holds the user's input rank
//     const [colleges, setColleges] = useState([]); // Holds the array of colleges fetched from the backend

//     const handleFindColleges = async () => {
//         try {
//             // Fetch colleges by rank from the backend
//             const fetchedColleges = await getCollegesByRank(rank);

//             // Log the fetched data for debugging
//             console.log("Fetched colleges:", fetchedColleges);

//             // Update the state with fetched colleges
//             setColleges(fetchedColleges);
//         } catch (error) {
//             console.error("Error fetching colleges:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Campus Navigator</h1>
//             {console.log("Colleges received by CollegeTable:", colleges)};

//             <label>
//                 Enter Your Rank:
//                 <input
//                     type="number"
//                     value={rank}
//                     onChange={(e) => setRank(e.target.value)} // Updates the rank state
//                     placeholder="Enter your rank"
//                 />
//             </label>
//             <button onClick={handleFindColleges}>Find Colleges</button>

//             {/* Pass the colleges array as props to the CollegeTable component */}
//             <CollegeTable colleges={colleges} />
//         </div>
//     );
// };

// export default Home;

import React, { useState } from "react";
import { getCollegesByRank } from "../api/colleges";
import CollegeTable from "../components/CollegeTable";
import Header from "../components/Header";

const Home = () => {
    const [rank, setRank] = useState(""); // Holds the user's input rank
    const [colleges, setColleges] = useState([]); // Holds the array of colleges fetched from the backend

    const handleFindColleges = async () => {
        try {
            // Fetch colleges by rank from the backend
            const fetchedColleges = await getCollegesByRank(rank);

            // Update the state with fetched colleges
            setColleges(fetchedColleges);
        } catch (error) {
            console.error("Error fetching colleges:", error);
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            <Header />
            <main style={{ padding: "20px", textAlign: "center" }}>
                <h2 style={{ color: "#333" }}>Find Your Ideal College</h2>
                <label style={{ display: "block", marginBottom: "10px" }}>
                    <input
                        type="number"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)} // Updates the rank state
                        placeholder="Enter your rank"
                        style={{
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            width: "250px",
                        }}
                    />
                </label>
                <button
                    onClick={handleFindColleges}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                >
                    Find Colleges
                </button>
                <div style={{ marginTop: "20px" }}>
                    <CollegeTable colleges={colleges} />
                </div>
            </main>
        </div>
    );
};

export default Home;


