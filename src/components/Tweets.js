function Tweets(props){
    const formattedProp = props.tweet.replace(/(@\w+)/g, '<span class="blue">$1</span>');
    const tweets = `${formattedProp} <span class=${props.type == 'positive' ? "positive-percentage" : "negative-percentage"}>${(props.per * 100).toFixed(2)}%</span>`;
    return(
        <div>
      <div dangerouslySetInnerHTML={{ __html: tweets }} />
      {/* <div className="ib">{props.per}%</div> */}
    </div>
    ) 
    // <div dangerouslySetInnerHTML={{ __html: formattedProp }}></div> ;
    
    return(
        <div>
            {/* <p>{props.tweet}</p> */}
        </div>
    )
}
export default Tweets;