import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1345766674812506174/69ZcmLh3HM-_1ShKKCkz52HLOP9P8y2QVNhTGFG2pSpI7dRPVV6CD5LRR9qPZtEXxgri",body)
    }
  return {
    Send,
}
}

export default TeleSned;
