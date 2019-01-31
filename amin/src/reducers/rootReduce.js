//import axios from 'axios'

const initState={
    newList:"",
    lists:[
          {name:"todo",inputValue:""},
          {name:"doing",inputValue:""},
          {name:"done",inputValue:""}
        ],
        tasks:[
          {name:"authentification" , list:"todo",members:[{name:"hama",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/apple-%26-onion/uk/cn_en_appleandonion_showpage_desktop_banner_showpicker_96x100.png"},{name:"salah",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/239px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg"},{name:"slim",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/%D9%81%D8%AA%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%88%D8%A9/ab/ppg-show-picker-ppg.png"}]},
          {name:"ice ice baby" , list:"done",members:[]},
          {name:"hello " , list:"doing",members:[]},
          {name:"its me " , list:"doing",members:[]},
          {name:"first time no worm up" , list:"doing",members:[]},
          {name:"thing" , list:"todo",members:[]},
          {name:"ading" , list:"done",members:[]}
        ],
        team:[
          {name:"hama",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/apple-%26-onion/uk/cn_en_appleandonion_showpage_desktop_banner_showpicker_96x100.png"},
          {name:"salah",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/239px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg"},
          {name:"slim",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/%D9%81%D8%AA%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%88%D8%A9/ab/ppg-show-picker-ppg.png"}
        ]                              
}
// function getdata(){
//     return axios
//         .get("/project")
//         .then(res =>console.log(res.data[0].id))
//         .catch(err => console.log(err))
// }

/*async*/ function rootReducer  (state = initState, action) {

    // let tab = await getdata()
    // console.log("ghjj",tab[0].id)

  if(action.type === 'UPDATE_PROJECT'){
  
     //let project=action.res
    let project =action.project
     return {
       ...state,
       project
  
     }
     
     
    }
    return state; 
  }

  
  export default rootReducer

