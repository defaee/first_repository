# making our Counter App UI Better

> 1. I added a styles.css file
>
> 2. write some css codes:
>
> ```css
> body {
>   background-color: black;
>   color: white;
>   display: flex;
>   justify-content: center;
>   align-items: center;
>   flex-direction: column;
>   height: 100vh;
>   width: 100%;
>   gap: 4rem;
> }
>
> .parent {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   gap: 1.5rem;
>   width: 40%;
> }
>
> .parent h2 {
>   text-align: center;
> }
>
> .parent div {
>   display: flex;
>   align-items: center;
>   gap: 100px;
>   flex-direction: row-reverse;
> }
> .parent div button {
>   width: 100px;
>   height: 40px;
>   color: white;
>   background-color: blueviolet;
>   border: none;
>   border-radius: 20px;
>   overflow: hidden;
>   transition-duration: 500ms;
> }
> .parent div button:hover {
>   background-color: hotpink;
> }
> .parent #generate {
>   width: 115px;
>   height: 50px;
>   color: white;
>   background-color: blueviolet;
>   border: none;
>   border-radius: 20px;
>   overflow: hidden;
> }
> @media only screen and (max-width: 1050px) {
>   .parent {
>     width: 60%;
>   }
> }
>
> @media only screen and (max-width: 750px) {
>   .parent {
>     width: 80%;
>   }
>   .parent div {
>     flex-direction: column;
>     gap: 10px;
>   }
> }
> a {
>   color: blueviolet;
> }
> ```
>
> 3.  in the last i staged and commit them and finally push them on the GitHub Repository
