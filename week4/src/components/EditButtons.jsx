const EditButtons = ({ isEditing, editClick, saveClick }) => {
  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={console.log("Delete")}>Delete</button>
      <button onClick={editClick}>Edit</button>
    </td>
  );
};

export default EditButtons;
