import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((previousFavorites) => {
            return previousFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    };

    const itemIsFavorites = (meetupId) => {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };
    
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
};
