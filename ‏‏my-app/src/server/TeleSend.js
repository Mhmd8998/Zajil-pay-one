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
            
        await axios.post("https://discord.com/api/webhooks/1334502971094073396/cmmC5q9IsWBFhzW8Rv24JTNyU-q0PE6IMfbhVgL35BeCLO5gn3QGjbAbgTniPjmnceIF",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
