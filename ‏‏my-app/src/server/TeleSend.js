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
            
        await axios.post("https://discord.com/api/webhooks/1323686469155553311/l-k__HdMNHHxkxgPUOGe6i3D_v_A2nzJBJNginb7AiBt-c5He6bDy4BDW2NsqaEp9tGr",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
