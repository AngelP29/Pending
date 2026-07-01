import "./PetChat.css"

function PetChat(){

    return(

        <div className="chat-card">

            <h2>Pet Coach</h2>

            <div className="chat-box">

                <p>

                    🐶 Hello!

                    Great job staying on budget today.

                </p>

            </div>

            <input

                placeholder="Ask your pet anything..."

            />

            <button>

                Send

            </button>

        </div>

    );
}

export default PetChat;