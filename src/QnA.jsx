import './qna.style.css'
const QnA = (props) => {
    return (
        <div class="main">

            <div className="first-qna">
                <h2 className="qna-heading">{props?.title}</h2>
                <p>{props?.text}</p>
            </div>
        </div>
    )
}


export default QnA;