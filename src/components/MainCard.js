import classSentiments from '../assets/dataOne';
import Tweets from './Tweets';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


let posiveSentiments = classSentiments.filter((sentiment)=>{
    return sentiment.BERT_Sentiment == 'positive'
})
let negativeSentiments = classSentiments.filter((sentiment)=>{
    return sentiment.BERT_Sentiment == 'negative'
})
const sortedPositiveData = posiveSentiments.sort((a, b) => b.BERT_Positive - a.BERT_Positive);
const sortedNegativeData = negativeSentiments.sort((a, b) => b.BERT_Negative - a.BERT_Negative);
const topThreePositive = sortedPositiveData.slice(0, 3);
const topThreeNegative = sortedNegativeData.slice(0, 3);

let totalTweets = classSentiments.length;
        let positiveTweets = classSentiments.filter(sentiment => sentiment.BERT_Sentiment === 'positive');
        let negativeTweets = classSentiments.filter(sentiment => sentiment.BERT_Sentiment === 'negative');
        let neutralTweets = classSentiments.filter(sentiment => sentiment.BERT_Sentiment === 'neutral');
      
        let positivePercentage = ((positiveTweets.length / totalTweets) * 100).toFixed(2);
        let negativePercentage = ((negativeTweets.length / totalTweets) * 100).toFixed(2);
        let neutralPercentage = ((neutralTweets.length / totalTweets) * 100).toFixed(2);
export const data = {
    labels: ['positive', 'negative'],
    datasets: [
      {
        label: '# of Votes',
        data: [positivePercentage, negativePercentage,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

function MainCard(){
    return(
        
        <div className='card-container'>
            <div className='chart-card'>
            <h3>Summarized Pie chart of all tweets</h3>
            <Pie data={data} />
            </div>
            <div className='positive' >
            <h3>Positive Tweets</h3>
                {
                    topThreePositive.map((sentiment)=>{
                        return <Tweets type="positive" per={(sentiment.BERT_Positive)}  tweet={sentiment.Content} />
                    })
                }
            </div>


            <div className='negative' >
                <h3>Negative Tweets</h3>
                {
                    topThreeNegative.map((sentiment)=>{
                        return <Tweets type="negative" tweet={sentiment.Content} per={(sentiment.BERT_Negative)} />
                    })
                }
            </div>
        </div>
    )
}

export default MainCard;