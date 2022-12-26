const CardApp = () => {
  
    let [cart, setCart] = useState([])
    
    let localPatient = localStorage.getItem("cart");
    
    const addItem = (item)  =>   {}
    const updateItem = (itemID, amount) => {}
    const removeItem = (itemID) => {}
    
    //this is called on component mount
    useEffect(() => {
      //turn it into js
      localPatient = JSON.parse(localPatient);
      //load persisted cart into state if it exists
      if (localPatient) setCart(localPatient)
      
    }, []) //the empty array ensures useEffect only runs once
  
  
    
    return <div></div>
  }