const Category = ({ labelText, description, moreInfo }) => {
  const [docIsClick, setDocIsClick] = React.useState(false)


  const changeBg = () => {
    if (docIsClick) {
      return "bg-gray-100"
    }
  }

  return (
    <section className={`p-3 flex flex-col  w-full max-w-2xl gap-3  bg-[#ffffffa0]  border border border-2 border-gray-200 rounded-lg  backdrop-blur-3xl ${changeBg()}`}>
      <label className="flex items-center gap-2 text-sm w-full select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" for={labelText} >
        <div className="flex justify-between items-center leading-none font-medium" ><p className="mb-0" >{labelText}</p> <span className="material-symbols-outlined bg-gray-500 rounded cursor-pointer color-white p-1" style={{ fontSize: "12px", color: "fff" }} onClick={() => setDocIsClick(!docIsClick)}>question_mark</span></div>
        <p className="mb-0 mt-1 ">{description}</p>
      </label>

      {docIsClick ? <p className="font-thin w-40/50" >{moreInfo}</p> : ''}

      <div className="flex gap-3">
        <div className="bg-gray-100 p-2 rounded-lg">
          <input type="radio" name="category" id="marketing"/>
          <label htmlFor="marketing" style={{ height: "auto" }}>
            <div className="flex justify-between items-center leading-none font-medium" >
              <p className="mb-0" >
                {labelText}
              </p>
              <span className="cursor-pointer invert " > <object data="./enterprise_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" type="image/svg+xml" width="20" height="20"></object> </span>
            </div>
            <p className="mb-0 mt-1 ">{description}</p>
          </label>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg" >
          <input type="radio" name="category" id="Utility" />
          <label htmlFor="Utility" className="flex flex-col " style={{ height: "auto" }} >
            <div className="flex justify-between items-center leading-none font-medium" >
              <p className="mb-0" >
                {labelText}
              </p>
              <span className="cursor-pointer invert " > <object data="./enterprise_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" type="image/svg+xml" width="20" height="20"></object> </span>
            </div>
            <p className="mb-0 mt-1 ">{description}</p>
          </label>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg" >
          <input type="radio" name="category" id="Autorization" />
          <label htmlFor="Autorization" style={{ height: "auto" }}>
            <div className="flex justify-between items-center leading-none font-medium" >
              <p className="mb-0" >
                {labelText}
              </p>
              <span className="cursor-pointer invert " > <object data="./enterprise_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" type="image/svg+xml" width="20" height="20"></object> </span>
            </div>
            <p className="mb-0 mt-1 ">{description}</p>
          </label>
        </div>
      </div>
    </section>
  )
}