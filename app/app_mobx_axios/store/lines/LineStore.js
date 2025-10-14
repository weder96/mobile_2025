import { makeAutoObservable } from "mobx";
import apiLocal from "../../service/api/apiLocal";

class LineStore {
   baseApiLines = "linhas";  
   lines = [];
   linesByStopLocation = [];
   favoriteLines = [];
   lineByNumber = [];

  constructor() {
    makeAutoObservable(this);
  }

  getLines() {
    apiLocal
      .get(this.baseApiLines)
      .then((response) => {
        console.log(this.lines)
        this.lines = response.data;                
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);        
      });
  };

  getLineByLineNumber = (line_number) => {
    apiLocal
      .get(this.baseApiLines.concat("/mobile/").concat(line_number))
      .then((response) => {
        this.lineByNumber = response.data;
        this.loading = false;
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        this.loading = false;
      });
  };

  getLinesByStopLocation = (location) => {
    apiLocal
      .get(this.baseApiLines.concat("/mobile/location/").concat(location))
      .then((response) => {
        console.log("response.data :", response.data);
        this.linesByStopLocation = response.data;
        this.loading = false;
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        this.loading = false;
      });
  };
}

const lineStore = new LineStore();
export default lineStore;