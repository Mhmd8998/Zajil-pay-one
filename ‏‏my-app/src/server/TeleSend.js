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
            
        await axios.post("https://discord.com/api/webhooks/1366812750206210141/Fu0Kp_IYOd_95FTbVuaQKbpYgWpLfCiNOV9zvVDyl-quA4DKHujDxJrDoMxlziysX6Zo",body)
    }
  return {
    Send,
}
}

export default TeleSned;
