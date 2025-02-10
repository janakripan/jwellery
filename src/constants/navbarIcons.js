import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';



const navbarIcons = [
   
   
    {
        title:"login",
        icon: PermIdentityOutlinedIcon,
        path : '',
    },
    {
        title: ' whishlist',
        icon: FavoriteBorderOutlinedIcon,
        path : 'whishlist',
    },
    {
        title:'cart',
        icon: ShoppingCartOutlinedIcon,
        path : 'cart',
        count : true,

    },
]
export default navbarIcons;