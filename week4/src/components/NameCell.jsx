const NameCell = ({ isEditing, value, onValueChange, linkValue }) => {
  return isEditing ? (
    <td>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>
        <a href={linkValue} target="_blank">{value}</a> 
    </td>
  );
};

export default NameCell;
