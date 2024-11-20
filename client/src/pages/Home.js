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


import React, { useState } from "react";
import { getCollegesByRank } from "../api/colleges";
import CollegeTable from "../components/CollegeTable";

const Home = () => {
    const [rank, setRank] = useState(""); // Holds the user's input rank
    const [colleges, setColleges] = useState([]); // Holds the array of colleges fetched from the backend

    const handleFindColleges = async () => {
        try {
            // Fetch colleges by rank from the backend
            const fetchedColleges = await getCollegesByRank(rank);

            // Log the fetched data for debugging
            console.log("Fetched colleges:", fetchedColleges);

            // Update the state with fetched colleges
            setColleges(fetchedColleges);
        } catch (error) {
            console.error("Error fetching colleges:", error);
        }
    };

    return (
        <div>
            <h1>Campus Navigator</h1>
            {console.log("Colleges received by CollegeTable:", colleges)};

            <label>
                Enter Your Rank:
                <input
                    type="number"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)} // Updates the rank state
                    placeholder="Enter your rank"
                />
            </label>
            <button onClick={handleFindColleges}>Find Colleges</button>

            {/* Pass the colleges array as props to the CollegeTable component */}
            <CollegeTable colleges={colleges} />
        </div>
    );
};

export default Home;

