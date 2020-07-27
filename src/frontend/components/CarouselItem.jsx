import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postFavorite, dropFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList, _id, user, myList } = props;
  const handleSetFavorite = () => {
    const exist = myList.find((item) => item.id === id);
    if (!exist) {
      const movie = {
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
        _id,
      };
      const userId = user.id;

      props.postFavorite(userId, _id, movie);
    }
  };
  const handleDeleteFavorite = (itemId) => {
    props.dropFavorite(_id, itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${_id}`}>
            <img
              className='carousel-item__icon'
              src={playIcon}
              alt='play'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__icon'
              src={removeIcon}
              alt='remove'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__icon'
              src={plusIcon}
              alt='plus'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    user: state.user,
  };
};

const mapDispatchToProps = {
  postFavorite,
  dropFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
