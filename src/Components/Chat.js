import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";

export default () => {
  const [showChat, setShowChat] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const chatButtonRef = useRef(null);

  useEffect(() => {
    const { innerWidth: width } = window;
    if (width < 480) {
      setIsSmallScreen(true);
    }
    ReactTooltip.show(chatButtonRef.current);
  }, []);

  return (
    <>
      {showChat ? (
        <>
          <div className='chatbot-wrapper'>
            <iframe
              className='chatbot'
              src='https://chat-with-bennybot.herokuapp.com/'
              title='BennyBot'
            >
              <head>
                <base target='_top' />
              </head>
            </iframe>
          </div>
          <div className='chatbot-footer'>
            <button
              className='mobile-close-chat-btn'
              onClick={() => {
                setShowChat(false);
              }}
            >
              Close Chat
            </button>
          </div>
        </>
      ) : null}

      <button
        ref={chatButtonRef}
        data-tip
        data-for='chatTip'
        className='show-chat-btn'
        onClick={() => {
          setShowChat(!showChat);
        }}
        style={{
          display: isSmallScreen && showChat ? "none" : "block",
        }}
      >
        {!showChat ? (
          <i className='show-chat-icon fa fa-comments'></i>
        ) : (
          "Close Chat"
        )}
      </button>

      <ReactTooltip
        id='chatTip'
        place='top'
        effect='solid'
        multiline
        disable={isSmallScreen}
        delayHide={1000}
      >
        Chat with
        <br />
        BennyBot
      </ReactTooltip>
    </>
  );
};
