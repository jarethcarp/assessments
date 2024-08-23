const AddCardButton = ({ addClick }) => {
  return (
    <tr>
        <td></td>
        <td colSpan={4}>
            <button onClick={addClick}>Add Card</button>
        </td>
    </tr>
  )
}

export default AddCardButton