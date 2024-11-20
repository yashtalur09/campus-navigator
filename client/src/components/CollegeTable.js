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


// import React from "react";

// const CollegeTable = ({ colleges }) => {
//     return (
//         <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Place</th>
//                     <th>NIRF Rank</th>
//                     <th>Cutoff</th>
//                     {/* <th>Placements</th> */}
//                 </tr>
//             </thead>
//             <tbody>
//                 {colleges.length > 0 ? (
//                     colleges.map((college) => (
//                         <tr key={college._id}>
//                             <td>{college.collegeName}</td>
//                             <td>{college.location}</td>
//                             <td>{college.nirfRank}</td>
//                             <td>{college.cutoff}</td>
//                             {/* <td>{college.placements}</td> */}
//                         </tr>
//                     ))
//                 ) : (
//                     <tr>
//                         <td colSpan="5" style={{ textAlign: "center" }}>
//                             No colleges found
//                         </td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     );
// };

// export default CollegeTable;

// import React from "react";

// const CollegeTable = ({ colleges }) => {
//     return (
//         <div style={{ margin: "20px auto", maxWidth: "800px" }}>
//             <table
//                 style={{
//                     width: "100%",
//                     borderCollapse: "collapse",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 }}
//             >
//                 <thead>
//                     <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
//                         <th style={tableHeaderStyle}>Name</th>
//                         <th style={tableHeaderStyle}>Place</th>
//                         <th style={tableHeaderStyle}>NIRF Rank</th>
//                         <th style={tableHeaderStyle}>Cutoff</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {colleges.length > 0 ? (
//                         colleges.map((college) => (
//                             <tr
//                                 key={college._id}
//                                 style={{
//                                     backgroundColor: "#f9f9f9",
//                                     borderBottom: "1px solid #ddd",
//                                     transition: "background-color 0.3s ease",
//                                 }}
//                                 onMouseOver={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#f1f1f1")
//                                 }
//                                 onMouseOut={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#f9f9f9")
//                                 }
//                             >
//                                 <td style={tableDataStyle}>{college.collegeName}</td>
//                                 <td style={tableDataStyle}>{college.location}</td>
//                                 <td style={tableDataStyle}>{college.nirfRank}</td>
//                                 <td style={tableDataStyle}>{college.cutoff}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td
//                                 colSpan="4"
//                                 style={{
//                                     ...tableDataStyle,
//                                     textAlign: "center",
//                                     fontStyle: "italic",
//                                 }}
//                             >
//                                 No colleges found
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const tableHeaderStyle = {
//     padding: "10px",
//     textAlign: "left",
//     fontWeight: "bold",
// };

// const tableDataStyle = {
//     padding: "10px",
//     textAlign: "left",
// };

// export default CollegeTable;

import React from "react";

const CollegeTable = ({ colleges }) => {
    return (
        <div style={{ margin: "20px auto", maxWidth: "800px" }}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <thead>
                    <tr
                        style={{
                            background: "linear-gradient(90deg, #FF6F61, #FFA07A)",
                            color: "white",
                        }}
                    >
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Place</th>
                        <th style={tableHeaderStyle}>NIRF Rank</th>
                        <th style={tableHeaderStyle}>Cutoff</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.length > 0 ? (
                        colleges.map((college) => (
                            <tr
                                key={college._id}
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    borderBottom: "1px solid #ddd",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#f1f1f1")
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#f9f9f9")
                                }
                            >
                                <td style={tableDataStyle}>{college.collegeName}</td>
                                <td style={tableDataStyle}>{college.location}</td>
                                <td style={tableDataStyle}>{college.nirfRank}</td>
                                <td style={tableDataStyle}>{college.cutoff}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                style={{
                                    ...tableDataStyle,
                                    textAlign: "center",
                                    fontStyle: "italic",
                                }}
                            >
                                No colleges found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    color:"white",
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "16px",
    // backgroundColor:"#4CAF50"
    backgroundColor:"#2795B7"
};

const tableDataStyle = {
    padding: "10px",
    textAlign: "left",
};

export default CollegeTable;



