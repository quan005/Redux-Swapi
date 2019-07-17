import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getData} from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action // 
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Characters Loading...</p>
    }

    return (
      <div className="CharactersList_wrapper">
        {console.log(this.props.characters)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetchingData
  }
}

const mapDispatchToProps = {
  getData: getData
}

export default connect(
  /* mapStateToProps goes here */
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
