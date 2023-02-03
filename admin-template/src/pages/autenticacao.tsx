import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao(){
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, SetEmail] = useState('')
    const [senha, SetSenha] = useState('')

    function submeter(){
        if(modo === 'login'){
            console.log('Login')
        }else{
            console.log('Cadastrar')
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-1/2">
                <h1 className={`
                    text-xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={SetEmail}
                    obrigatorio
                />
                <AuthInput 
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={SetSenha}
                    obrigatorio
                />

                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo==='login'?'Entrar':'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300" />

                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google
                </button>
            </div>
        </div>
    )
}