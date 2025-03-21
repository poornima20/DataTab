import React from "react";
import './Lists.css';

const table_contents = [
  {bookmark: false, number: '1 .', title: 'AI-Generated Show Recommendations', category: 'Shows'},
  {bookmark: false, number: '2 .', title: 'Essential DSA Practice Questions', category: 'Study'},
  {bookmark: false, number: '3 .', title: 'Personal Watchlist Table', category: 'Shows'},
];

export function Lists(){
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
                    <td className="arrow"></td>
                  </tr>
                ))}
              </tbody>
          </table>        
        </div>
      );
};

