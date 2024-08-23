const AddCardButton = ({ addClick }) => {
  return (
    <tr>
        <td></td>
        <td colSpan={4}>
            <button onClick={addClick}>New Card</button>
        </td>
    </tr>
  )
}

export default AddCardButton