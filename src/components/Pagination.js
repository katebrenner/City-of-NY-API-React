import React, { Component } from "react";
class PaginationController extends Component {
  state = {};
  render() {
    return (
      <div id="paginationController">
        <div onClick={() => this.props.jumpPagination(1)}>1</div>
        <button value="last" onClick={this.props.handlePageChange}>
          last
        </button>
        <div>{this.props.currentPage}</div>
        <button value="next" onClick={this.props.handlePageChange}>
          Next
        </button>
        <div
          onClick={() => this.props.jumpPagination(Math.floor(this.props.accidents.length / this.props.itemsPerPage))}
        >
          {Math.floor(this.props.accidents.length / this.props.itemsPerPage)}
        </div>
      </div>
    );
  }
}

export default PaginationController;
