const TextArea = ({labelText, description, onNewValue}) => {
  const [docIsClick, setDocIsClick] = React.useState(false)
  const [value, setValue] = React.useState('')

  const changeBg = () => {
    if(docIsClick) {
      return "bg-gray-100 rounded w-full"
    } 
  }

  const handleText = (e) => {
    const newText = e.target.value
    setValue(newText)
    onNewValue(newText)
  }

  return (
    <div className={`p-2 flex flex-col items-start w-full  items-center gap-3  ${changeBg()}`} >
      <label className="flex items-center gap-2 text-sm w-full leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" for={labelText} >
        <div className="flex justify-between items-center" ><p className="mb-0" >{labelText}</p> <span className="material-symbols-outlined bg-gray-500 rounded cursor-pointer color-white mr-1 p-1" style={{ fontSize: "12px", color: "fff" }}  onClick={()=> setDocIsClick(!docIsClick)}>question_mark</span></div>
      </label>
      {docIsClick ? <p className="p-2" >{description}</p> : '' }
      
      <textarea 
      name={labelText} 
      id={labelText} 
      rows="5" 
      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex  w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive " 
      onChange={handleText} 
      value={value} ></textarea>
    </div>
  )
}
