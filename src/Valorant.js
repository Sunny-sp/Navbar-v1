import { useState } from "react";
import Agents from "./Agents";
const Valorant = () => {
  const [ValorantAgents, setValorantAgent] = useState([
    { AgentId: "4", AgentName: "Reyna", AgentRole: "Duelist" },
    { AgentId: "2", AgentName: "Chamber", AgentRole: "Sentinel" },
    { AgentId: "5", AgentName: "Fade", AgentRole: "Initiator" },
  ]);
const addNewAgent = () => {
    setValorantAgent(
      [...ValorantAgents, { AgentId: "8", AgentName: "KAYO", AgentRole: "Initiator" }]
    );
};
const removeAgent = ()=>{
    setValorantAgent(()=>{
        return ValorantAgents.filter((Agent)=>{
            return Agent.AgentName!=="KAYO"
        })
    })
}
  return <Agents ValorantAgents={ValorantAgents} addNewAgent={addNewAgent} removeAgent={removeAgent}/>;
};

export default Valorant;
