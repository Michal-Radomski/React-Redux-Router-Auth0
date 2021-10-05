import React, {Component} from "react";

class Container4 extends Component {
  Arr1 = [
    {id: 1, text: "text1", number: 1},
    {id: 2, text: "text2", number: 2},
    {id: 3, text: "text3", number: 3},
    {id: 4, text: "text4", number: 4},
    {id: 5, text: "text5", number: 5},
  ];

  render() {
    const SimpleList = () => (
      <ol>
        {this.Arr1.map((item) => (
          <li key={item.id}>
            =&gt;
            {item.text} and {item.number}
          </li>
        ))}
      </ol>
    );
    return <div>{SimpleList()}</div>;
  }
}

export default Container4;

// import React, {Component} from "react";

// class Container4 extends Component {
//   Arr1 = [
//     {id: 1, text: "text1", number: 1},
//     {id: 2, text: "text2", number: 2},
//     {id: 3, text: "text3", number: 3},
//     {id: 4, text: "text4", number: 4},
//     {id: 5, text: "text5", number: 5},
//   ];

//   RenderListItem = (props) => (
//     <div>
//       {props.item.text}
//       <p>{props.item.number}</p>
//     </div>
//   );

//   render() {
//     // return <div>{this.Arr1.map((item, index) => console.log(index, item))}</div>;
//     return (
//       <div>
//         {this.Arr1.map((item) => (
//           <this.RenderListItem key={item.id} item={item} />
//         ))}
//       </div>
//     );
//   }
// }

// export default Container4;
