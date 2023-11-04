import React,{useState} from "react";

function Recommendations() {

const [recommendation,setRecommendation] = useState([]);
const [mediumValue,setMediumValue] = useState("movies");
const [mediumShow,setMediumShow] = useState('');
const [moodValue,setMoodValue] = useState("scary");
const [moodShow,setMoodShow] = useState("");

async function clickHandler(e){
e.preventDefault();
const response = await fetch("https://recommendation-s061.onrender.com/recommendations")
const data =await response.json();
 setRecommendation(data);
}

function cancleRecommendationHandler(e) {
    e.preventDefault();
    setRecommendation("");  
}

async function mediumHandeler(e){
    try {
        console.log(mediumValue)
        e.preventDefault();
    const response = await fetch(`https://recommendation-s061.onrender.com/recommendations/medium?medium=${mediumValue}`)
    if(!response.ok){
        throw new Error("something went wrong")
    }
    const data =await response.json();
    setMediumShow(data);
    } catch (error) {
      console.error("Error fetching data",error)  
    }
}

// async function mediumHandeler(e){
//     try {
//         console.log(mediumValue)
//         console.log("qwer")
//         e.preventDefault();
//     const response = await fetch(`https://recommendation-s061.onrender.com/recommendations/mediumAndmood?medium=${mediumValue}&mood=${moodValue}`)
//     console.log(response);
//     if(!response.ok){
        
//         throw new Error("something went wrong")
//     }
//     const data =await response.json();
//     console.log(data);
//     setMediumShow(data);
//     } catch (error) {
//       console.error("Error fetching data",error)  
//     }
// }
function cancleMediumHandler(e){
    setMediumShow('');
}

async function moodHandeler(e){
    try {
        console.log(moodValue)
        e.preventDefault();
    const response = await fetch(`https://recommendation-s061.onrender.com/recommendations/mood?mood=${moodValue}`)
    if(!response.ok){
        throw new Error("something went wrong")
    }
    const data =await response.json();
    setMoodShow(data);
    } catch (error) {
      console.error("Error fetching data",error)  
    }
    
}
function cancleMoodHandler(e){
    setMoodShow('');
}
    return(
        <div className="mainDiv">
                <div> 
                    <p>
                        you can see all recommendations by clicking on button 
                    </p>
                    <div className="recommendationBtnDiv">
                        <button style={{margin:5}} onClick={(e)=>clickHandler(e)}>
                        click
                        </button> 
                    </div> 
                    {recommendation.length > 0 ? (
                        <div className="allRecommendationsDiv">
                            <div>
                            <button  style={{margin:5}} onClick={(e)=>cancleRecommendationHandler(e)}>
                        cancle
                        </button>
                            {recommendation.map((item, index) => (
                            <div key={index} className="recommendationDiv">
                                {`${item.user_name} recommends the ${item.recommendation_name} ${item.medium_type} which has ${item.mood} mood`}
                            </div>
                            ))}
                            </div>
                        </div>
                        ) : null}
                </div>
                <div>
                    <p>you can filter recommendations by Mood and Medium </p>
                        <div className="selectDiv">
                          <div>
                                <select
                                value={mediumValue}
                                onChange={(e)=> {
                                    const selectedMedium = e.target.value;
                                    setMediumValue(selectedMedium);
                                      }}>
                                    <option value={"movie"}>Movie</option>
                                    <option value={"music"}>Music</option>
                                    <option value={"book"}>book</option>
                                </select>
                                <button style={{marginLeft:5}} onClick={(e)=>mediumHandeler(e)}>
                                    click
                                </button>
                                
                             </div>
                             <div>
                                <select 
                                value={moodValue}
                                onChange={(e)=>{
                                const selectedMood = e.target.value;
                                 setMoodValue(selectedMood);
                                }}>
                                    <option value={"scary"}>scary</option>
                                    <option value={"romantic"}>romantis</option>
                                    <option value={"comedy"}>comedy</option>
                                    <option value={"action"}>action</option>
                                    <option value={"documentary"}>documentary</option>
                                    <option value={"drama"}>drama</option>
                                    <option value={"science fiction"}>science fiction</option>
                                    <option value={"crime"}>crime</option>
                                    <option value={"pop"}>pop</option>
                                    <option value={"classic"}>classic</option>
                                    <option value={"light"}>light</option>
                                    <option value={"emeretic"}>energetic</option>
                                </select>
                                <button style={{marginLeft:5}} onClick={(e)=>moodHandeler(e)}>
                                    click
                                </button>
                            </div>
                        </div>
                        {mediumShow.length > 0 ? (
                              <div className="allRecommendationsDiv">
                                    <div>
                                        <button  style={{margin:5}} onClick={(e)=>cancleMediumHandler(e)}>
                                        cancle
                                        </button>
                                        {mediumShow.map((item, index) => (
                                        <div key={index} className="recommendationDiv">
                                            {`${item.user_name} recommends the ${item.recommendation_name} ${item.medium_type} which has ${item.mood} mood`}
                                        </div>
                                        ))}
                                    </div>
                                 </div>
                                  ) : null}
                                  {moodShow.length > 0 ? (
                              <div className="allRecommendationsDiv">
                                    <div>
                                        <button  style={{margin:5}} onClick={(e)=>cancleMoodHandler(e)}>
                                        cancle
                                        </button>
                                        {moodShow.map((item, index) => (
                                        <div key={index} className="recommendationDiv">
                                            {`${item.user_name} recommends the ${item.recommendation_name} ${item.medium_type}`}
                                        </div>
                                        ))}
                                    </div>
                                 </div>
                                  ) : null}
                </div>
            

        </div> 
    )
}

export default Recommendations;