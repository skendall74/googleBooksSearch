import React from "react";
import BooksContainer from "../components/BooksContainer";
import API from "../utility/API";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: []
    };
  }n

  componentDidMount() {
    API.getBooks()
      .then(response => {
        this.setState({ savedBooks: response.config.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.savedBooks);
    return (
      <main>
        <BooksContainer
          savedBooks={this.state.savedBooks}
          path={this.props.match.path}
        />
      </main>
    );
  }
}

export default Saved;
