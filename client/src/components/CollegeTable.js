// import React from "react";

// const CollegeTable = ({ colleges }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Place</th>
//                     <th>NIRF Rank</th>
//                     <th>Cutoff</th>
//                     <th>Placements</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {colleges.map((college) => (
//                 <tr key={college._id}>
//                     <td>{college.name}</td>
//                     <td>{college.place}</td>
//                     <td>{college.nirfRank}</td>
//                     <td>{college.cutoff}</td>
//                     <td>{college.placements}</td>
//                 </tr>
//                 ))}
//             </tbody>

//         </table>
//     );
// };

// export default CollegeTable;


import React from "react";

const CollegeTable = ({ colleges }) => {
    return (
        <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Place</th>
                    <th>NIRF Rank</th>
                    <th>Cutoff</th>
                    <th>Placements</th>
                </tr>
            </thead>
            <tbody>
                {colleges.length > 0 ? (
                    colleges.map((college) => (
                        <tr key={college._id}>
                            <td>{college.collegeName}</td>
                            <td>{college.location}</td>
                            <td>{college.nirfRank}</td>
                            <td>{college.cutoff}</td>
                            {/* <td>{college.placements}</td> */}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>
                            No colleges found
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default CollegeTable;

