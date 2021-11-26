import { useContext } from "react"
import { AuthContex } from "../../ContexApi/AuthProvider/AuthProvider"

const useAuth = () => {
   return useContext(AuthContex) 
}

export default useAuth;