import axios from "axios";
import Floors from "./../components/Floors/floors";

const buildingsReducerDefaultState = {
  buildings: [],
  selectedRowId: null,
  toggleShow: false,
  sameBuildingFoundError: false,
  selectedFloorId: null,
  tempFloors: [],
  tempSectors: []
};

export default (state = buildingsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BUILDING":
      const building = [...state.buildings];

      let isBuildingFound = false;
      for (let i = 0; i < building.length; i++) {
        if (
          building[i].name.toLowerCase() === action.payload.name.toLowerCase()
        ) {
          isBuildingFound = true;
          state.sameBuildingFoundError = true;
          break;
        }
      }
      if (!isBuildingFound) {
        state.sameBuildingFoundError = false;
        state.toggleShow = !state.toggleShow;
        return { ...state, buildings: [action.payload, ...building] };
      }
      return { ...state, toggleShow, sameBuildingFoundError };
    case "COLLAPSE":
      const buildings = [...state.buildings];
      let tempFloors = [];
      let tempSectors = [];
      const { id, itemId, floors, sectors } = action.payload;
      if (itemId === null && itemId !== -1) {
        tempFloors = [];
        tempSectors = [];
        let foundBuilding = null;
        buildings.map(building => {
          if (building.id === state.selectedRowId) {
            state.selectedRowId = null;
          } else if (building.id === id) {
            state.selectedRowId = building.id;
            tempFloors = floors;
          }
        });
        return { ...state, tempFloors, tempSectors };
      } else if (itemId !== null) {
        tempSectors = sectors;
        if (state.selectedFloorId == id) {
          state.selectedFloorId = null;
        } else {
          state.selectedFloorId = id;
        }
        return { ...state, tempSectors };
      }
      return { ...state };
    case "LOAD_BUILDINGS":
      const { bid, fid, stateBuildings } = action.payload;
      state.selectedRowId = parseInt(bid);
      state.selectedFloorId = parseInt(fid);
      return { ...state, buildings: stateBuildings };
    case "TOGGLESHOW":
      return {
        ...state,
        toggleShow: !action.payload
      };
    case "ADD_FLOOR":
      const Floors = [action.payload, ...state.tempFloors];
      return { ...state, tempFloors: Floors };

    case "ADD_SECTOR":
      const Sectors = [action.payload, ...state.tempFloors];
      return { ...state, tempSectors: Sectors };
    case "LoadData":
      const b = [];
      axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
        let i = 1;
        data.data.map(item => {
          if (i <= 10) {
            b.push({ name: item.title, id: i, floors: [] });
          }
          i++;
        });
        console.log(data)
      });
      return { ...state, buildings: b };
    default:
      return state;
  }
};
