import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usertoken, userdata } from '../../shared/globalState';
import { books } from './dummyData';
import Card from '../../Components/Card/Card';
import { Grid, Box} from '@mui/material';
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
            {userToken &&<> <h1>Hello and welcome, I am {userData.name} </h1><p>and I am {userData.age}, I work as a {userData.job},{"\n"} this what you see right here is data fetched from the recoil, a library smoother and simpler than redux, after login I saved both token and user data in recoil state items called atoms, even if you refresh, data will still be showing.</p></>}
            <h3>Books</h3>

                <Grid container spacing={{xs:2,sm:3,md:4,lg:6}}
                className='card__container'>
                    {books.map((item, index) =>
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3} className="card__container__item" onClick={() => history.push({
                            pathname: `/book-details/${index}`,
                            search: '?query=abc',
                            state: item
                        })}>
                            <Card img={item.img} name={item.name} desc={item.description}/>
                        </Grid>
                        )}
                </Grid>
        </div>
    )
}

export default Home
