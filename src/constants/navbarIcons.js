import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';



const navbarIcons = [
   
   
    {
        icon: PermIdentityOutlinedIcon,
        path : '',
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        path : '',
    },
    {
        icon: ShoppingCartOutlinedIcon,
        path : 'cart',
        count : true,

    },
]
export default navbarIcons;