function App() {
  const [body, setBody] = React.useState(null)
  const [whatsappMessagge, setWhatsappMessagge] = React.useState({ header: "", body: "", footer: "" })

  const getBody = (bodyText) => {
    setBody(bodyText)
  }

  const getTime = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return `${hour}:${minutes}:${seconds}`
  }

  const setValuesToWhatsappMes = () => {
    const newValues = {
      header: "prueba header",
      body: body,
      footer: "prueba footer"
    }
    setWhatsappMessagge(newValues)
  }


  React.useEffect(() => {
    setValuesToWhatsappMes()
  }, [body])


  return (
    <div className="flex justify-evenly rounded relative pb-4 pt-4 bg-white min-h-screen">
      {/* <button className="">show message</button> */}
      {/* <pre>{whatsappMessagge.body ? whatsappMessagge.body : ''}</pre> */}
      <section className="flex flex-col justify-center gap-5 md:w-1/2" style={{ border: "none" }} >
        <div className=" grid grid-cols-1 gap-4 p-3 border border-2 border-gray-200 md:grid-cols-2 bg-white ">
          {/* <div className=" grid grid-cols-2 gap-4 p-3 border border-2 border-gray-200  bg-white "> */}
          <InputText labelText="Name" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
          <InputText labelText="Name Space" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
          <InputText labelText="Elemetn Name" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
          <SwitchBtn labelText="State" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
        </div>
        <Category labelText="Category" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />

        <InputText labelText="Name2" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />

        <TextArea labelText="Header Message" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
        <TextArea labelText="Body Message" description="Hola esta es una descipcion" onNewValue={getBody} moreInfo="Hola esta esta es mas informacion sobre el componente" />
        <TextArea labelText="Footer Message" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />

        {/* <InputNumber labelText="numero de paramentros" description="Hola esta es una descipcion"  moreInfo="Hola esta esta es mas informacion sobre el componente" /> */}


        <SwitchBtn labelText="Await for entry" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
        <SwitchBtn labelText="Manage by Cari" description="Hola esta es una descipcion" moreInfo="Hola esta esta es mas informacion sobre el componente" />
      </section>

      <section className="h-[90vh] w-1/3 shadow-xl shadow-bg-[#ffffffa0]/50 bg-[#ffffffa0] backdrop-blur-3xl rounded flex justify-center items-center sticky top-10">
        {/* <section className="h-[90vh] w-1/3 shadow-lg backdrop-blur-3xl rounded flex justify-center items-center sticky top-10"> */}
        <div className="h-full w-full rounded relative">
          <img src="https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg" className="min-h-full rounded-lg absolute z-0 " />
          <div className="bg-white rounded relative mt-24 ml-2 z-5 w-90/100 p-2">
            <section className="felx flex-col justify-between" >
              <p className="w-full break-words">{body}</p>
              <p className="text-xs m-0 p-none justify-self-end text-gray-400" >{getTime()}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
