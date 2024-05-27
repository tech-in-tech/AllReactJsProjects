function Hello(){
  let name = "Anubhav";
  let fullName = (name)=>{
    return name
  }
  return <h2>
    This is hello I am {fullName("Anubhav")}
  </h2>
}

export default Hello;