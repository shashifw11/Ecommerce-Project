import {createContext} from "react" ; 

export const PaymentContext = createContext() ; 

export const PaymentContextProvider = ({children})=>{ 
  
    const meta = (a)=>{

    } 
    const getCardNumberProps = (b)=>{

    }
    const getExpiryDateProps = (c)=>{

    }
    const getCVCProps = (d)=>{

    }
    return <PaymentContext.Provider value = {{meta,getCardNumberProps,getExpiryDateProps,getCVCProps }}>{children}

    </PaymentContext.Provider>
}