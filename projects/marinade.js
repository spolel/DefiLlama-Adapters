const { get } = require('./helper/http')

async function tvl() {
    var response = await get('https://api.marinade.finance/tlv')

    return {
        'solana': response.total_sol
    }
}

module.exports = {
    hallmarks:[
        [1667865600, "FTX collapse"]
    ],
    timetravel: false,
    solana: { tvl },
    methodology: `To obtain the Marinade Finance TVL we make a dedicated API endpoint in our REST server. It is using values from the database with a separate update process. The *_sol fields of returned JSON object contains a number of SOL tokens held in our contract for us to then use Coingecko to get the price of SOL token in USD and export it. We are counting only SOL tokens because all other tokens used in our contract are mintable by us and represents a value of locked SOL tokens to our customers`,
}
