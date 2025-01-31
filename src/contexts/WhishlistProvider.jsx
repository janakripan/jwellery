import { useState } from "react";
import WhishlistContext from "./Whishlistcontext";

const WhishlistProvider = ({ children }) => {
    const [whishlist , setWhishlist] = useState([])

    const togglWhishlist = (item) =>{
        setWhishlist((prevWhishlist)=>
            prevWhishlist.some((wishlistItem) => wishlistItem.id === item.id)
                
                ?prevWhishlist.filter((wishlistItem)=>wishlistItem.id !== item.id)
                :[...prevWhishlist, item]

        )
        

    }
    console.log(whishlist)
    

  return (
  <WhishlistContext.Provider value={{whishlist,togglWhishlist}}>
    {children}
  </WhishlistContext.Provider>
  );
};

export default WhishlistProvider;
