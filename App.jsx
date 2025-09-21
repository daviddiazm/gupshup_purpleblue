function App() {
  const [body, setBody] = React.useState(null)
  const [whatsappMessagge, setWhatsappMessagge] = React.useState({header: "", body: "", footer: ""})

  const getBody = (bodyText) => {
    setBody(bodyText)
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
    <div className="flex justify-evenly rounded relative pb-4 pt-4 bg-radial-[at_25%_15%] from-white to-[#63D1D9] to-500%">
      {/* <button className="">show message</button> */}
      {/* <pre>{whatsappMessagge.body ? whatsappMessagge.body : ''}</pre> */}
      <section className="flex flex-col justify-center gap-5" style={{ border: "none" }} >
        <div className=" grid grid-cols-1 gap-4 p-3 border border-gray-100 md:grid-cols-3 bg-white ">
          <InputText labelText="Name" description="Hola esta es una descipcion" />
          <InputText labelText="Name Space" description="Hola esta es una descipcion" />
          <InputText labelText="Elemetn Name" description="Hola esta es una descipcion" />
          <SwitchBtn labelText="State" description="Hola esta es una descipcion" />
        </div>
        <TextArea labelText="Header Message" description="Hola esta es una descipcion" />
        <TextArea labelText="Body Message" description="Hola esta es una descipcion" onNewValue={getBody} />
        <TextArea labelText="Footer Message" description="Hola esta es una descipcion" />
        {/* porque se especifica el numero? no sera mejor que con solo poner los parametros ya se sepa la cantidad? */}
        <InputNumber labelText="numero de paramentros" description="Hola esta es una descipcion" />
        <SwitchBtn labelText="Await for entry" description="Hola esta es una descipcion" />
        <SwitchBtn labelText="Manage by Cari" description="Hola esta es una descipcion" />
      </section>

      <section className="min-h-screen max-h-screen w-1/3 shadow-xl shadow-bg-[#ffffffa0]/50 bg-[#ffffffa0] backdrop-blur-3xl rounded flex justify-center items-center sticky top-0">
        <div className="h-full w-full rounded relative">
          <img src="https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg" className="min-h-full rounded absolute z-0 saturate-200" />

          <div className="bg-white rounded relative mt-24 ml-2 z-5 w-90/100 p-2">
            <p className="w-full break-words">{body}</p>

          </div>
        </div>
      </section>
    </div>
  );
}
