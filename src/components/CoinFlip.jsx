import React from 'react'

function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
const CoinFlip = () => {
    function fiveHeadsRun() {
        function fiveHeads() {
            return new Promise( (resolve, reject) => {
                let headsCount = 0;
                let attempts = 0;
                while(headsCount < 5) {
                    attempts++;
                    let result = tossCoin();
                    console.log(`${result} was flipped`);
                    if(result === "heads") {
                        headsCount++;
                    } else {
                        headsCount = 0;
                    }
                    if (attempts == 100) {
                        reject('too many attempts!')
                    } 
                }
                    resolve(`It took ${attempts} tries to flip five "heads"`);
            
                
                
            });
        }
        fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
        console.log( "When does this run now?" );
    }
        
        
        

    return (
        <div>
            <button onClick={fiveHeadsRun}>Flip coin till 5 heads in a row</button>
        </div>
    )
}

export default CoinFlip