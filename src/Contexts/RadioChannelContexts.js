import { createContext, useState } from "react";

export const ChannelContext = createContext();

const RadioChannelContexts = (props) => {
  const channelLists = [
    { id: 1, name: "Putin FM", frequency: "90.5" },
    { id: 1, name: "Dribble FM", frequency: "101.2" },
    { id: 1, name: "Doge FM", frequency: "99.4" },
    { id: 1, name: "Ballads FM", frequency: "87.1" },
    { id: 1, name: "Maximum FM", frequency: "142.4" },
  ];

  const [channels, setChannels] = useState(channelLists);

  const selectChannel = (e) => {
    setChannels(e.target.innerHTML);
  };

  const value = { channels, setChannels, selectChannel };

  return (
    <ChannelContext.Provider value={value}>
      {props.childern}
    </ChannelContext.Provider>
  );
};

export default RadioChannelContexts;
