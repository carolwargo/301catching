import React from "react";

function BaseballPage() {

    const styles = {
        chatWidget: {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: '9999',
        },
        chatWidgetContent: {
          display: 'flex',
          alignItems: 'center',
        },
        chatWidgetText: {
          marginRight: '10px',
        },
        chatWidgetIcon: {
          color: '#007bff',
        },
      };
    return (
        <div className="chat" id="chat">
     <div className="chat-widget" style={styles.chatWidget}>
      <div className="chat-widget-content" style={styles.chatWidgetContent}>
        <span className="chat-widget-text" style={styles.chatWidgetText}>Live Chat</span>
        <i className="fas fa-comments chat-widget-icon" style={styles.chatWidgetIcon}></i>
      </div>
      </div>
    </div>
   
    );
}

export default BaseballPage;