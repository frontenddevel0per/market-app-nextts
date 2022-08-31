import { FC } from "react";
import Image from "next/future/image";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import LocalMallIcon from '@mui/icons-material/LocalMall';

import jacket from '../../resources/img/inbornjacket1.png';

const AddToCartButton = styled(Button)({
    backgroundColor: '#ffffff',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#eeeeee',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#dddddd'
    }
});

const Sidebag: FC = () => {
    return (
        <div className="sidebag">
            <h1>Bag</h1>
            <div className="sidebag__list">
                <Image src={jacket} alt="jacket"/>
                <Image src={jacket} alt="jacket"/>
                <Image src={jacket} alt="jacket"/>
                <Image src={jacket} alt="jacket"/>
            </div>
            <AddToCartButton variant="contained" size="large" startIcon={<LocalMallIcon htmlColor="black"/>} color="inherit" >
                View Bag
            </AddToCartButton>
        </div>
    )
}

export default Sidebag;