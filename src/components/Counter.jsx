import { useEffect, useState } from "react";

export const Counter = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (seconds === 10) {
      alert("your time is up!");
      props.setShowBook(false);
      props.setReturnBook(props.returnBook+1)
      
    }

    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  const a = props.data.title;
  const b = props.data.author;
  const c = props.data.subject;
  const d = props.data.publishDate;
  const f = props.data.booklink;
  console.log("data", props);
  console.log('minutes',minutes);
  console.log('sec',seconds);
  return (
    <>
      <div style={{color:"white"}}>  
      <h7>You have to return the book within a hour! </h7>
      <br></br>
        Ongoing {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <hr></hr>
      <div style={{color:"white"}}>
      {/* https://ettron.com/wp-content/uploads/2022/07/harry_potter_annd_the_sorcerers_stone.pdf#toolbar=0 */}
        <p>BOOK NAME: {a}</p>
        <p>AUTHOR: {b}</p>
        <p>SUBJECT: {c}</p>
        <p>PUBLISHDATE: {d}</p>
        <embed src={f} width="500" height="375"></embed>
      </div>
      <div>
        <button onClick={() => props.setShowBook(false)}>Return book</button>
      </div>
    </>
  );
};
