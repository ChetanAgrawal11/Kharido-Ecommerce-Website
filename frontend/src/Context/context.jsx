import { createContext ,useState} from "react";
export const cartcontext=createContext();
export const Cartprovider=(props)=>{
     const [items, setitems] = useState([]);
     const getproduct = async () => {
        // API CALLS
        const response = await fetch(`http://localhost:5000/api/product/getproduct`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "auth-token": localStorage.getItem("token"),
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5OTk0ZTc2NmQzODU1YTEyN2NkYTIzIn0sImlhdCI6MTcwNDU2NDUwMn0.JKY4alq8kXttE7rroT584q7sv0wRNfZMPiCegZmVQmk",
          },
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        setitems(json.product);
      
      };
    
      const addproduct = async (category, title, price, product_id) => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/product/createproduct`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
              },
              body: JSON.stringify({ category, title, price, product_id }),
            }
          );
      
          if (!response.ok) {
            throw new Error(`Failed to add product. Status: ${response.status}`);
          }
      
          const json = await response.json();
          setitems(items.concat(json));
        } catch (error) {
          console.error("Error adding product:", error.message);
          // Handle the error as needed
        }
      };
      
      
      const deleteproduct = async (id) => {
        const response = await fetch(
          `http://localhost:5000/api/product/deleteproduct/${id}`,
          {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
    
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
              // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5OTk0ZTc2NmQzODU1YTEyN2NkYTIzIn0sImlhdCI6MTcwNDU2NDUwMn0.JKY4alq8kXttE7rroT584q7sv0wRNfZMPiCegZmVQmk",
            },
            // body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
          }
        );
        const index = items.filter((product) => {
          return product._id !== id;
        });
    
        setitems(index);
      };
    return(

        <cartcontext.Provider value={{items,setitems,addproduct,deleteproduct,getproduct}}>
            {props.children}
        </cartcontext.Provider>
    )
}