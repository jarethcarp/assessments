const EditButtons = ({ isEditing, editClick, saveClick, deleteFunc }) => {
  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={deleteFunc}>Delete</button>
      <button onClick={editClick}>Edit</button>
    </td>
  );
};

export default EditButtons;
