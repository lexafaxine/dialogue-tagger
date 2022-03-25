import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store";
import { Dataset, update, } from "store/datasetSlice";

const initDataset: Dataset = {
  "id": "init",
  "title": "test dataset",
  "description": "xxx",
  "dialogues": [
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "@Meitu Cellphone Official Customer Service I bought Meitu V4 less than one and a half year ago. After charging the mobile phone to 100 percent battery, the phone's battery dropped to more than 40 percent in less than half an hour on standby. I recharged the phone and the battery was fully charged within half an hour. Isn't that a weird battery?​"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Dear, I am very sorry to bring you bad experience. Did you use the original charger to charge it? I contacted you by private message to facilitate communication and assist you to deal with it. Please pay attention to check the information sent from me.",
            "Dear, I have contacted you by private message. If you have any questions in the process of subsequent use, you can contact us or call the customer service at 123456789. We will be dedicated to serve you."
          ]
        }
      ],
      "id": "4124013724844732"
    },
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "Meituan is rubbish. My colleagues have booked a hotel and plan to go to Lushan for group building during the Dragon Boat Festival. The train tickets have all been bought. We thought everything was all right when we booked a room, but then the hotel called and said we had to pay more for the Dragon Boat Festival!! We booked five or six hotels but couldn't stay in any of them. It's really annoying! Since this offer can not be used, please do not indicate that it can be used on official holidays! You are cheating the consumers! @Meituan @Meituan WANG Xing @Xiaomei, Meituan Customer Service @China Association for the Promotion of Consumer Rights"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Hello, I have received your feedback. In order to protect your personal information security, please send me your Meituan account information and contact information by private message, so that we can timely follow up and deal with it for you. Thank you for your understanding and support to Meituan."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "123456789",
            "Is this your attitude?",
            "You don't handle complaints through phone calls, and you don't care about complaints through microblogs?",
            "It seems that you are not only rubbish on the website, but also rubbish on your management and rubbish on your service!!"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "I suggest you check the private message ~ because I did not find the relevant order by using your mobile phone number, you can send me the specific information by private message, so that I can verify and deal with it~"
          ]
        }
      ],
      "id": "3850376300532303"
    },
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "| I really don't have the energy to complain about the customer service of Quwan.com @Quwan.com Customer Service @Quwan.com. It's hard to get in touch... The QQ customer service did not add me as a friend. I had been calling for three days before someone answered. Microblog private messages were ignored! Fuck. You feel good because you are a giant enterprise? Good stuff means nothing; I won't buy it any more! Good customer service is the hard truth! Not recommend. Won’t buy it. I will resolutely return the goods when they arrive. I’m at ||North Yuanhu Road|"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Hello, I'm sorry for such a problem. Online customer services can reply to you before 24 o 'clock. We will timely report the situation to relevant departments if the phone can't get through. Sorry for bringing you an unpleasant consumption experience."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "I really don't know what to say... I found that your goods were of good quality and were cheaper when they were discounted, so I fell in love with them and I couldn't help buying your products twice this month, but you can't ignore a small customer like me like that! What about the building block you promised? It was supposed to be delivered together with the goods this time, but now all my goods have been received..."
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Honey, we're not ignoring you. We love you so much. We might be busy these days on Chinese Valentine's Day and we really didn't take good care of you. I'm really sorry."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "Dear customer service girl, what are you going to do with my little blocks this time? What about the WeChat Prizes Package Two you promised? And then what will you do to comfort my wounded little heart?"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "No problem. I'll ask if the prizes for the event have been sent to you."
          ]
        }
      ],
      "id": "3610450698186975"
    },
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "Since there is no lunar calendar in the phone's calendar, I installed a new calendar application, but the date displayed is different. @Smartisan Customer Service"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Hello, the problem of not displaying the lunar calendar in the view of the built-in calendar month will be updated in the later version. The external version of the calendar cannot display the dynamic icon at present."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "I see. Thank you!"
          ]
        }
      ],
      "id": "3792180248614827"
    },
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "Unicom always reminded me every two or three days how much data I was using, but on January 4 of this month, it sent a message indicating that there was more than 100 data left, and there was no warning until the data exceeded. And it was on January 18th that I was suddenly prompted to have overused nearly 400m traffic!! There was an interval of 14 days! I thought I could offset it by refilling the data package, but you told me I could not. The result is that I overused 500m! You're just trying to get me overuse the traffic to blackmail me, aren't you? @China Unicom Beijing Customer Service @China Unicom Customer Service"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Hello, traffic reminder will be reminded by default on a weekly, monthly basis and when 10% of the main package traffic remains. If necessary, you can send \"ATTX\" to 123456789 to set it as a daily reminder."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "In terms of normal frequency, the longest interval is once a week. But during this period of time, the interval was 14 days, that is, half a month. What are you up to? This is definitely not normal. I can't accept that. If you can't handle it, I'll turn to Ministry of Industry and Information Technology.",
            "Don't mention there's only 10% left on the main package. I overused so much traffic, and after so many days, I didn't even see a sign of the traffic reminder."
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "If it is convenient for you, please send your phone number via private message, I will have a look."
          ]
        }
      ],
      "id": "3937738941863857"
    },
    {
      "turns": [
        {
          "sender": "customer",
          "utterances": [
            "@LUO Yonghao @Alex old Joe @Smartisan @Smartisan Customer Service The New Year is coming. When will you repair my cellphone??????????????????????????"
          ]
        },
        {
          "sender": "helpdesk",
          "utterances": [
            "Hello! In the service order you initiated on November 15, 2017, the last four digits of your mobile phone number 0604 were filled in 9694 (the first seven digits were accurate). Because of the wrong number, the customer service failed to get in touch with you. (The contact number is filled in by the user, and the system is locked, so the customer service cannot modify it. The possibility of modification can be excluded).",
            "You initiated the after-sales service again on November 18, 2018, which has exceeded the warranty period for 362 days (the accident insurance period of your cellphone is terminated on November 21, 2017). It is indeed too long beyond the insurance company's coverage period. I'm sorry that you can't use the accident warranty service anymore. I would like to apologize again and thank you for your understanding and support."
          ]
        },
        {
          "sender": "customer",
          "utterances": [
            "Please provide the original screenshot of the service number to prove that I did fill in the wrong information (the original screenshot of the service number contains the picture of the damaged cellphone I uploaded)."
          ]
        }
      ],
      "id": "4323561671514070"
    }
  ]
};


export const useDatasets = () => {
  const {datasets} = useSelector((state: AppState) => state.datasets);
  console.log("@@#@## ", datasets)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(initDataset));
  }, []);

  const updateDatasets = (data: Dataset) => {
    dispatch(updateDatasets(data));
  };

  return {
    datasets,
    updateDatasets,
  }
}