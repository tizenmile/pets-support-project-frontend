import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiTrash } from "react-icons/hi2";
import { heartFull as HeartFull, heart as Heart, } from '../../../media';
import { selectFavNotices } from '../../../redux/notices/selector';
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";
import { addNoticeToFavorite, delNoticeFromFavorite } from '../../../redux/notices/operation';
import { NoticeItem, CardTumb, ImageWrapp, Image, ImageText, HeartButton, Title, FeaturesList, FeaturesItem, FeaturesText, CardButton, IconTrash } from './NoticesItem.styled';



export const Notice = ({ item }) => {
  const favNotices = useSelector(selectFavNotices);
  const [isFavorite, setIsFavorite] = useState(false)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
 setIsFavorite(favNotices.includes(item._id))
  },[favNotices])

  const handleAuthorizedClick = () => {
    dispatch(isFavorite ? delNoticeFromFavorite(item._id) : addNoticeToFavorite(item._id))
    setIsFavorite(prev => !prev)
  }
  const CustomToastWithLink = () => (
  <div>
    <Link to="/login">You need to log in</Link>
  </div>
);

  const features = ['Breed', 'Place', 'Age']
  return (
    <NoticeItem >
      <CardTumb>
        <ImageWrapp>
          <Image
            src={item.photo}
            alt={item.title}
          />
          <ImageText>{item.category}</ImageText>
          <HeartButton
            onClick={() => {
              isLoggedIn ? handleAuthorizedClick() : toast(CustomToastWithLink)
            } }
          >
           {isFavorite ? <img  src={HeartFull} alt="heartFull" /> : <img  src={Heart} alt="heart" />}
          </HeartButton>
          <ToastContainer/>
          
        </ImageWrapp>
          <Title>{item.title}</Title>
        <FeaturesList>
              {features.map(prop => {
                  if (Object.keys(item).includes(prop.toLowerCase())) {
                      return (
                        <FeaturesItem key={prop}>
                      <FeaturesText style={{width: '50px'}}>{prop}</FeaturesText>
                      <FeaturesText style={{marginLeft: '40px'}}>{ item[prop.toLowerCase()]}</FeaturesText>
                    </FeaturesItem> 
                    ) 
                  }    
          })}
          </FeaturesList>
          <CardButton onClick={() => navigate('/')}>
              Learn more
          </CardButton>
        {item.userId === user.id && <CardButton>
            Delete
            <HiTrash style={{width: '16px', height: '17px'}}/>  
          </CardButton>}
      </CardTumb>
    </NoticeItem>
  );
};

