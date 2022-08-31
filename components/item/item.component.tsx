import { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from "next/future/image";

const AddButton = styled(Button)({
    backgroundColor: '#000000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#404040',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#555555'
    }
});

type ItemProps = {
    title: string,
    subtitle: string,
    rating: number,
    shortdesc: string,
    desc: Array<string>,
    price: number,
    src1: string,
    src2: string,
    src3: string
}

type LoaderFuncArgs = {src: string, width: number, quality?: number};

const myLoader = ({src, width, quality = 75}: LoaderFuncArgs) => {
    return `https://detkishop.com/upload/resize_cache/iblock${src}?w=${width}&q=${quality}`
}

const Item: FC<ItemProps> = ({title, subtitle, rating, shortdesc, desc, price, src1, src2, src3}) => {
    const [activeImage, setActiveImage] = useState<string>(src1)
    const [starsArray, setStarsArray] = useState<JSX.Element[]>([])

    const description = desc.map((item: string, index) => {
        return <p key={index}>{item}</p>
    })

    console.log(typeof StarIcon)

    useEffect(() => {
        let starsArr: Array<JSX.Element> = []
        const entireStars = Math.floor(rating / 1)
        const emptyStars = Math.floor((5 - rating) / 1)
        const halfStars = 5 - entireStars - emptyStars
        for (let m = 0; m < entireStars; m++) {
            starsArr.push(<StarIcon/>)
        }
        for (let n = 0; n < halfStars; n++) {
            starsArr.push(<StarHalfIcon/>)
        }
        for (let p = 0; p < emptyStars; p++) {
            starsArr.push(<StarBorderIcon/>)
        }
        setStarsArray(starsArr)
    }, [])

    return (
        <div className="item">
            <Button startIcon={<ArrowBackIosIcon />} color="inherit" >
                Back
            </Button>
            <div className="item__header">
                <div className="item__header-collage">
                    <div className="item__header-collage-left">
                        <Image loader={myLoader} src={src1} alt="image1" width={250} height={250} onClick={() => setActiveImage(src1)}/>
                        <Image loader={myLoader} src={src2} alt="image2" width={250} height={250} onClick={() => setActiveImage(src2)}/>
                        <Image loader={myLoader} src={src3} alt="image3" width={250} height={250} onClick={() => setActiveImage(src3)}/>
                    </div>
                    <Image loader={myLoader} src={activeImage} alt="mainimage" width={250} height={250}/>
                </div>
                <div className="item__header-info">
                    <h1>
                        {title}
                    </h1>
                    <h2>{subtitle}</h2>
                    <div className="item__header-info-rating">
                        {starsArray}
                        <p>{rating} / 5</p>
                    </div>
                    <h3>$ {price}</h3>
                    <p>
                        {shortdesc}
                    </p>
                    <div className="item__header-info-button">
                        <AddButton variant="contained" startIcon={<AddShoppingCartIcon htmlColor="white" />} color="inherit" >
                            Add to Bag
                        </AddButton>
                    </div>
                </div>
            </div>
            <div className="item__footer">
                <h2>Description</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Item;