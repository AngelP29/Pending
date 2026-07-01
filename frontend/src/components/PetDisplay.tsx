import "./PetDisplay.css"

function PetDisplay(){

    return(

        <div className="pet-card">

            <div className="pet-image">

                🐶

            </div>

            <h2>Buddy</h2>

            <p>Level 1</p>

            <p>Pet Status</p>

            <div className="mood-bar">

                <div className="mood-fill"></div>

            </div>

        </div>

    );
}

export default PetDisplay;