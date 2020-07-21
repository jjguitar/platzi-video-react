import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

const Player = (props) => {
  const { match, playing } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : setTimeout(() => {
    <Redirect to='/404/' />;
  }, 0);
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
