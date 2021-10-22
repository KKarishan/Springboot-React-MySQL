import React, { Component } from "react";
import StockService from "../services/StockService";

class ListStockComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
    };
    this.addStock = this.addStock.bind(this);
    this.editStock = this.editStock.bind(this);
  }

  editStock(stockId) {
    this.props.history.push(`/update-stock/:${stockId}`);
  }

  componentDidMount() {
    StockService.getStocks().then((res) => {
      this.setState({ stocks: res.data });
    });
  }
  addStock() {
    this.props.history.push("/add-stock");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Stocks List</h2>
        <button className="btn btn-primary" onClick={this.addStock}>
          Add Stock
        </button>
        <div className="row"></div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Stock Count</th>
                <th>Stock Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stocks.map((stock) => (
                <tr key={stock.stockId}>
                  <td>{stock.stockCount}</td>
                  <td>{stock.stockDate}</td>
                  <td>
                    <button
                      onClick={() => this.editStock(stock.stockId)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStockComponents;

// OLD CODE
// export default class ListStockComponents extends Component {
//   stocks = [];
//   render() {
//     return (
//       <div>
//         <h2 className="text-center">Stocks List</h2>
//         <div className="row">
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>Stock Count</th>
//                 <th>Stock Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.stocks.map((stock) => (
//                 <tr key={stock.id}>
//                   <td>{stock.count}</td>
//                   <td>{stock.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
