import React, { useState } from "react";
import './Lists.css';

const table_contents = [
  {bookmark: false, number: '1 .', title: 'AI-Generated Show Recommendations', category: 'Shows', page: "public/Projects/AI-Show-Recs/index.html"},
  {bookmark: false, number: '2 .', title: 'Essential DSA Practice Questions', category: 'Study' , page: "public/Projects/AI-Show-Recs/index.html"},
  {bookmark: false, number: '3 .', title: 'Personal Watchlist Table', category: 'Shows', page: "public/Projects/AI-Show-Recs/index.html"},
];

export function Lists(){

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPage, setPopupPage] = useState("");

    const openPopup = (pageUrl) => {
      setPopupPage(pageUrl);
      setPopupVisible(true);
    };

    const closePopup = () => {
      setPopupVisible(false);
    }



    return (
        <div className="table-container">
          <h2>BuildTab</h2>
          <p>A collection of AI tools, coding challenges, productivity, learn and create projects.</p>

          <table>
              <thead>
                  <tr>
                     <th>Bookmark</th>
                     <th>Number</th>
                     <th>Title of the Project</th>
                     <th>Category</th>
                  </tr>
              </thead>

              <tbody>
                {table_contents.map((content) => (
                  <tr key={content.number}>
                    <td className="bookmark"><input type="checkbox" /></td> 
                    <td className="number">{content.number}</td>
                    <td className="title">{content.title}</td>
                    <td className="category">{content.category}</td>
                    <td>
                      <button className="open-btn arrow" onClick={() => openPopup(content.page)}>-</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>   

           {/*Popup Modal*/}  
            {popupVisible && (
            <div className="popup-overlay" onClick={closePopup}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <div className="popup-header">
                      <button className="open-new-tab-btn" onClick={() => window.open(popupPage, "_blank")}>🔗</button>
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                            
                    </div>
                    <iframe src={popupPage} frameBorder="0"></iframe>
                </div>
            </div>
            )}
        </div>
      );
};

