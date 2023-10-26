import React,{useState} from "react";

function Recommendations() {

const [recommendation,setRecommendation] = useState([]);
const [mediumValue,setMediumValue] = useState("movies");
const [mediumShow,setMediumShow] = useState('');
async function clickHandler(e){
e.preventDefault();
const response = await fetch("http://localhost:3000/recommendations")
const data =await response.json();
 setRecommendation(data);
}
function cancleRecommendationHandler(e) {
    e.preventDefault();
    setRecommendation("");  
}

async function mediumHandeler(e){
    try {
        e.preventDefault();
    const response = await fetch(`http://localhost:3000/recommendations/${mediumValue}`)
    if(!response.ok){
        throw new Error("something went wrong")
    }
    const data =await response.json();
    setMediumShow(data);
    } catch (error) {
      console.error("Error fetching data",error)  
    }
}

function cancleMediumHandler(e){
    setMediumShow('');
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
                                    <option value={"movies"}>Movie</option>
                                    <option value={"musics"}>Music</option>
                                    <option value={"books"}>book</option>
                                </select>
                                <button onClick={(e)=>mediumHandeler(e)}>
                                    click
                                </button>
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
                            </div>

                         <select>
                            <option>scary</option>
                            <option>romantis</option>
                            <option>comedy</option>
                            <option>action</option>
                            <option>documentary</option>
                            <option>drama</option>
                            <option>science fiction</option>
                            <option>crime</option>
                            <option>pop</option>
                            <option>classic</option>
                            <option>light</option>
                            <option>energetic</option>
                         </select>
                        </div>

                </div>
            

        </div> 
    )
}

export default Recommendations;