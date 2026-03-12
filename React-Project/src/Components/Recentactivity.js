import React from 'react';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Recentactivity = () => {
    return <div>
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "30px"
    }}>
      <h3>Recent Activity</h3>
      <ul>
        <li>User John created a post</li>
        <li>Post reported by user Anna</li>
        <li>Admin deleted a comment</li>
      </ul>
    </div>
    </div>;
};

Recentactivity.propTypes = propTypes;
Recentactivity.defaultProps = defaultProps;
// #endregion

export default Recentactivity;