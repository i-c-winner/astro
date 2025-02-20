import Chart from "@astrodraw/astrochart";
import './App.css';
//data example
const data = {
  "planets":{
    "Pluto":[63],
    "Neptune":[110],
    "Uranus":[318],
    "Saturn":[201],
    "Jupiter":[192],
    "Mars":[210],
    "Moon":[268],
    "Sun":[281],
    "Mercury":[312],
    "Venus":[330]},
  "cusps":[296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
}
const chart= new Chart('paper', 800, 800)
const radix = chart.radix(data)
// point: {
//   name: string;
//   position: number;
// };
// toPoint: {
//   name: string;
//   position: number;
// };
// aspect: {
//   name: string;
//   degree: number;
//   color: string;
//   orbit: number;
// };
// precision: string;
const customAspects=[
  {
    point: {
      name: "Pluto",
      position: 75
    },
    toPoint: {
      name: "Moon",
      position: 270
    },
    aspect: {
      name: "Pluto",
      degree: 25,
      color: "blue",
      orbit: 90
    },
    precision: '23,5',
  }
]
radix.aspects(customAspects)
function App() {
  return (
<></>
  );
}

export default App;
