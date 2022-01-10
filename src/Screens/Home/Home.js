import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usertoken, userdata } from '../../shared/globalState';
import { books } from './dummyData';
import Card from '../../Components/Card/Card';
import { Grid } from '@mui/material';
import './Home.scss';
import { useHistory } from 'react-router-dom';

const Home = () => {
    // const {user} = useContext(AppContext) ;

    const history = useHistory();
    const [userToken] = useRecoilState(usertoken)
    const [userData] = useRecoilState(userdata)
    useEffect(() => {
    }, [userData])
    return (
        <div className='home__container'>
            {userToken && <h1>Hello and welcome, I am {userData.name} and I am {userData.age}, I work as a {userData.job},{"\n"} this what you see right here is data fetched from the recoil, a library smoother and simpler than redux, after login I saved both token and user data in recoil state items called atoms, even if you refresh, data will still be showing.</h1>}
            Home pages
            <Grid container spacing={2} className='card__container'>
                {books.map((item, index) =>
                    <Grid key={index} item xs={12} md={6} lg={3} xl={3} className="card__container__item" onClick={() => history.push({
                        pathname: `/products/${index}`,
                        search: '?query=abc',
                        state:  item
                    })}>
                        <Card img={item.img} name={item.name} desc={item.description} />
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default Home
