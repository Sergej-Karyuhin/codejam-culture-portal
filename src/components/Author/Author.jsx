import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Biography from './Biography';
import Works from './Works';
import Slider from './Slider';
import Map from './Map';
import Video from './Video';
import './main.scss'
import {WORKS} from "../../utils/utils";

class Author extends Component {

  render() {
    let main;
      const {name, yearsOfLife, photo, images, video, map, biography , workList} = this.props.selectedDirector;

      main = (
        <>
          <div className="author">
            <h2 className="author__header">{name[this.props.language]}</h2>
            <img className="author__img" src={photo} alt={name[this.props.language]} />
            <p className="author__years">{yearsOfLife}</p>
          </div>
          <Biography biography={biography[this.props.language]} />
          <Works header={WORKS[this.props.language]} works={workList[this.props.language]} />
          <Slider images={images} />
          <Video video={video} title={name[this.props.language]} />
          <Map coordinates={map} />
        </>
      );
    return (
      <section className="main">
        {main}
      </section>
    )
  }
}

const mapStateToProps = state => ({
    selectedDirector: state.selectedDirector,
    language: state.language
});


export default connect(mapStateToProps, null)(Author);

Author.propTypes = {
    selectedDirector: PropTypes.objectOf(PropTypes.any).isRequired,
    language: PropTypes.string.isRequired,
    workList: PropTypes.objectOf(PropTypes.any),
};

