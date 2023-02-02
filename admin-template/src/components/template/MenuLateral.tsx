import MenuItem from "./MenuItem";
import { IconeAjustes, IconeCasa, IconeSino } from "../icons";
import Logo from "./Logo";

export default function MenuLateral(){
    return(
        <aside>
            <div className={`
            flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 0 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
        </aside>
    )
}