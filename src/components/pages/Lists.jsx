import React, { useState, useEffect } from "react";
import './Lists.css';

// Default table contents
const defaultTableContents = [
  {bookmark: false, number: '1 .', title: 'To Do List', category: 'Productivity', page: "https://poornima20.github.io/DataTab-ToDoList/"},
  {bookmark: false, number: '2 .', title: 'BackTrack DSA', category: 'Study' , page: "https://datatab-backtrackdsa.onrender.com"},
  {bookmark: false, number: '3 .', title: 'Personal Watchlist Table', category: 'Shows', page: "public/Projects/AI-Show-Recs/index.html"},
];

export function Lists() {
    const [tableContents, setTableContents] = useState(defaultTableContents);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPage, setPopupPage] = useState("");

    // Load saved bookmarks from localStorage when component mounts
    useEffect(() => {
        const savedBookmarks = localStorage.getItem('bookmarkedProjects');
        if (savedBookmarks) {
            const savedData = JSON.parse(savedBookmarks);
            
            // Merge saved bookmarks with default contents
            const updatedContents = defaultTableContents.map(item => {
                const savedItem = savedData.find(saved => saved.number === item.number);
                return savedItem ? {...item, bookmark: savedItem.bookmark} : item;
            });
            
            setTableContents(updatedContents);
        }
    }, []);

    const toggleBookmark = (number) => {
        const updatedContents = tableContents.map(item => 
            item.number === number ? {...item, bookmark: !item.bookmark} : item
        );
        
        setTableContents(updatedContents);
        
        // Save to localStorage
        const bookmarkedItems = updatedContents.filter(item => item.bookmark);
        localStorage.setItem('bookmarkedProjects', JSON.stringify(bookmarkedItems));
    };

    const openPopup = (pageUrl) => {
        setPopupPage(pageUrl);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

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
                        <th>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {tableContents.map((content) => (
                        <tr key={content.number}>
                            <td className="bookmark">
                                <input 
                                    type="checkbox" 
                                    checked={content.bookmark}
                                    onChange={() => toggleBookmark(content.number)}
                                />
                            </td> 
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