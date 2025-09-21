const SwitchBtn = ({ labelText, description }) => {
  const [enabled, setEnabled] = React.useState(false);
  const [docIsClick, setDocIsClick] = React.useState(false)

  const changeBg = () => {
    if (docIsClick) {
      return "bg-gray-100 rounded w-full"
    }
  }
  return (
    <div className={`flex flex-col rounded max-w-sm  bg-[#ffffffa0] backdrop-blur-3xl ${changeBg()}`}>

      <div className={`p-2 flex justify-center max-w-sm  items-center gap-3 border border-gray-100 rounded ${changeBg()}`} >
        <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" for={labelText} >
          <div className="flex justify-between items-center" ><p className="mb-0" >{labelText}</p> </div>
        </label>
  
        <div
          onClick={() => setEnabled(!enabled)}
          className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${enabled ? "bg-[#63D1D9]" : "bg-gray-300"}
        `}
        >
          <span
            className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? "translate-x-6" : "translate-x-1"}
          `}
          />
        </div>
          <span className="material-symbols-outlined bg-gray-500 rounded cursor-pointer color-white mr-1 ml-3 p-1" style={{ fontSize: "12px", color: "fff" }} onClick={() => setDocIsClick(!docIsClick)}>question_mark</span>
      </div>
          {docIsClick ? <p className="pl-4" >{description}</p> : ''}
    </div>

  )
}
