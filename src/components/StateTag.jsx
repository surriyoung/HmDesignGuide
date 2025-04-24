function StateTag({ type, state }) {
  return <div className={`state-tag ${type}`}>{state}</div>;
}

export default StateTag;
