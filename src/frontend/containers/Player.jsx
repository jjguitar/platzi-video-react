import React, { useEffect } from "react";
import { connect } from 'react-redux'
import '../assets/styles/components/Player.scss'
import { getVideoSource } from '../actions'
import { Redirect } from "react-router-dom";

const Player = props => {
  const { id } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id)
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : setTimeout(() => {
    <Redirect to="/404/"/>
  }, 0)
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
