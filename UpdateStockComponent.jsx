import React, { Component } from "react";
import StockService from "../services/StockService";

class UpdateStockComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockId: this.props.match.params.stockId,
      stockCount: "",
      stockDate: "",
    };

    this.changeStockCountHandler = this.changeStockCountHandler.bind(this);
    this.changeStockDateHandler = this.changeStockDateHandler.bind(this);
    this.updateStock = this.updateStock.bind(this);
  }

  componentDidMount() {
    StockService.getStockById(this.state.stockId).then((res) => {
      let stock = res.data.stock;
      this.setState({
        stockCount: stock.stockCount,
        stockDate: stock.stockDate,
      });
    });
  }

  updateStock = (e) => {
    e.preventDefault();
    let stock = {
      stockCount: this.state.stockCount,
      stockDate: this.state.stockDate,
    };
    console.log("stock = " + JSON.stringify(stock));
  };

  changeStockCountHandler = (event) => {
    this.setState({ stockCount: event.target.value });
  };
  changeStockDateHandler = (event) => {
    this.setState({ stockDate: event.target.value });
  };

  cancel() {
    this.props.history.push("/stocks");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Stocks</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <lable>Stock Count:</lable>
                    <input
                      placeholder="Stock count"
                      name="stockCount"
                      className="form-control"
                      value={this.state.stockCount}
                      onChange={this.changeStockCountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <lable>Stock Date:</lable>
                    <input
                      placeholder="Stock date"
                      name="stockDate"
                      className="form-control"
                      value={this.state.stockDate}
                      onChange={this.changeStockDateHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateStock}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "'10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStockComponent;
