import { Children, createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppProviderProps{
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppProviderProps>({})

export function AppProvider(props){
    const [tema, setTema] = useState<Tema>('dark')

    function alternarTema(){
        setTema(tema === '' ? 'dark' : '')
    }

    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext