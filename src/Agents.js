const Agents = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>AgentId</th>
          <th>AgentName</th>
          <th>AgentRole</th>
        </tr>
        <tbody>
          {props.ValorantAgents.map((Agent) => (
            <tr>
              <th>{Agent.AgentId}</th>
              <th>{Agent.AgentName}</th>
              <th>{Agent.AgentRole}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={props.addNewAgent}>Add</button>
      <button onClick={props.removeAgent}>remove</button>
    </div>
  );
};

export default Agents;
