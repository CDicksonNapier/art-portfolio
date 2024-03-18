// Import the style for the animated letters
import './animatedletters.scss';

// animated letters component - this component takes in the letter class, the string array and the index as arguments 
const AnimatedLetters = ({letterClass, strArray, idx }) => {
    return(
        // cycles through the span (letters in) and applies the letter class to each one
        <span>
            {
                strArray.map((char, i)=>(
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}
// Export the animated letters component
export default AnimatedLetters;