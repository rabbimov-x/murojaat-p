import useUniqueId from "../hooks/useUniqueId";
import {Icon} from "../components/Navbar/style";
import HududKartasiCard from "../components/Generic/HududKartasiCard";
import BigTable from "../components/Generic/BigTable";
import MurojaatlarCard from "../components/Generic/MurojaatlarCard";
import Title from "../components/Generic/Title";
import Hududlarkesimida from "../components/HududlarKesimida";
import SohalarKesimida from "../components/SohalarKesimida";
import Tashkilotlarkesimida from "../components/TashkilotlarKesimida";
import HududlarkesimidaViloyat from "../components/HududlarKesimidaViloyat";
import Home from "../components/Home" 
import TopMasalalar from "../components/TopMasalalar";
import Budget from "../components/Budget";


export const navbar = [
    {id: useUniqueId,id2:useUniqueId, element2: <HududKartasiCard/>, title: "Umumiy statistika", path: "/umumiy_statistika", private : true, hiddin: false , element: <Home/>, icon: <Icon.SquaresFour    />}, 
    {id: useUniqueId,id2:useUniqueId, element2: <BigTable/>, title: "Hududlar kesimida", path: "/hudud_kesimida", private : true, hiddin: false , element: <Hududlarkesimida/>, icon: <Icon.MapPinLine/>}, 
    {id: useUniqueId,id2:useUniqueId, element2: <MurojaatlarCard/>, title: "Sohalar kesimida", path: "/sohalar_kesimida", private : true, hiddin: false , element: <SohalarKesimida/>, icon: <Icon.Suitcase/>}, 
    {id: useUniqueId,id2:useUniqueId, element2: <Title/>, title: "Tashkilotlar kesimida", path: "/tashkilotlar_kesimida", private : true, hiddin: false , element: <Tashkilotlarkesimida/>, icon: <Icon.Door/>}, 
    {id: useUniqueId,id2:useUniqueId, element2: <Title/>, title: "Hududlar kesimida ", path: "/hudud_kesimida/yunusobod/top_masalalar", private : true, hiddin: true , element: <HududlarkesimidaViloyat/>, icon: <Icon.Door/>}, 
    {id: useUniqueId,id2:useUniqueId, element2: <Title/>, title: "Hududlar kesimida top masalalar ", path: "hudud_kesimida/yunusobod", private : true, hiddin: true , element: <TopMasalalar/>, icon: <Icon.Door/>}, 
    {id: useUniqueId,id2:useUniqueId, element2: <Title/>, title: "Respublika bo'yicha budget hisobi", path: "/budget", private : true, hiddin: false , element: <Budget/>, icon: <Icon.Door/>}, 
    
]