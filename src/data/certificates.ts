import { Certificate } from '@/types/certificate';

export const certificates: Certificate[] = [
  {
    id: 'ecir',
    title: 'eCIR',
    titleAr: 'eCIR',
    description: 'The eCIR exam consists of two labs: The first lab focuses on Splunk and the second on ELK, along with a PCAP file that we will analyze using Wireshark and Network Miner.',
    descriptionAr: "امتحان eCIR بيبقي عباره عن لابين فقط اللاب الاول Splunk والتاني elk معاه ملف pcap هنحلله ب wireshark و network miner",
    imageUrl: 'https://drive.google.com/file/d/1o4JQNKqRU80C0wcSGZk_t0iYOYGJWEe1/view?usp=sharing',
    demolink: 'https://drive.google.com/file/d/12-xyVKaj_Jinlv-RHIcSkNVsblYWMEgK/view',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Intermediate',
      prerequisites: [
        'Basic understanding of networking',
        'Familiarity with Wireshark',
        'Knowledge of SIEM tools'
      ],
      objectives: [
        'Master Splunk and ELK',
        'Network traffic analysis',
        'PCAP investigation'
      ]
    }
  },
  {
    id: 'ecthp',
    title: 'eCTHP',
    titleAr: 'eCTHP',
    description: 'The eCTHP exam consists of three labs: The first lab focuses on Splunk, the second on Volatility, and the third on ELK.',
    descriptionAr: "امتحان eCTHP بيبقي عباره عن 3 لابات اللاب الاول Splunk والتاني Volatility والتالت elk",
    imageUrl: 'https://drive.google.com/file/d/1KaJIWN5JFtA1nypbcx7-eJ2pCFGjkUmj/view?usp=sharing',
    demolink: 'https://drive.google.com/file/d/1UAGuF4-ojO3IJirH97QR0glcYxe4t8s5/view',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Advanced',
      prerequisites: [
        'eCIR certification',
        'Advanced networking knowledge',
        'Experience with SIEM tools'
      ],
      objectives: [
        'Advanced Splunk techniques',
        'Memory forensics with Volatility',
        'ELK stack mastery'
      ]
    }
  },
  {
    id: 'ejptv2',
    title: 'eJPT V2',
    titleAr: 'eJPT V2',
    description: 'The eJPT V2 exam consists of 35 varying questions. We have compiled 60 questions from all exams and will explain how to solve each question step by step. Note that while answers may change, the methodology remains constant.',
    descriptionAr: 'امتحان eJPT V2 الامتحان عباره عن 35 سؤال متغيرين طبعا أنا جمعتلك من كل الامتحانات الاسئله واللي هما 60 سؤال وهشرحلك سؤال سؤال بالاجابه بتجيبها ازاي خد بالك الاجابات بتتغير 🤔 بس الطريقه نفسها ثابته ',
    imageUrl: 'https://drive.google.com/file/d/1REOaAe7Hx9PJLKAv1TiGltcQh8ia13VF/view?usp=sharing',
    demolink: 'https://drive.google.com/file/d/1_dz3lImCXso1uDo-ZgpLiJh4HGksuKlC/view',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Beginner to Intermediate',
      prerequisites: [
        'Basic networking knowledge',
        'Understanding of security concepts'
      ],
      objectives: [
        'Penetration testing methodology',
        'Network scanning and enumeration',
        'Web application security'
      ]
    }},
  // },
  {
    id: 'ecdfp',
    title: 'eCDFP',
    titleAr: 'eCDFP',
    description: 'The eCDFP exam consists of 30 randomly selected questions from a question bank: 15 theoretical and 15 practical questions.',
    descriptionAr: 'امتحان eCDFP بيكون عباره عن 30 سؤال بيجي عشوائي من بنك اسئله 15 نظري و 15 عملي',
    imageUrl: 'https://drive.google.com/file/d/1mf033qOeEOMqjRZS-GLYQxvNLt563o_F/view?usp=sharing',
    demolink: 'https://t.me/Abn3mad',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Intermediate',
      prerequisites: [
        'Digital forensics basics',
        'Understanding of file systems',
        'Basic malware analysis'
      ],
      objectives: [
        'Digital evidence handling',
        'Forensic investigation techniques',
        'Report writing'
      ]
    }
  },
  {
    id: 'ecppt',
    title: 'eCPPT',
    titleAr: 'eCPPT',
    description: '',
    descriptionAr: '',
    imageUrl: 'https://drive.google.com/file/d/19B50aneoMPlVy1unvIclhvbBaHKjTSG8/view?usp=sharing',
    demolink: 'https://t.me/Abn3mad',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Advanced',
      prerequisites: [
        'eJPT certification',
        'Advanced networking',
        'Scripting knowledge'
      ],
      objectives: [
        'Advanced penetration testing',
        'Exploit development',
        'Post-exploitation techniques'
      ]
    }
  },
  {
    id: 'pnpt',
    title: 'PNPT',
    titleAr: 'PNPT',
    description: '',
    descriptionAr: '',
    imageUrl: 'https://drive.google.com/file/d/1c_M3ydL3h8032z5EUtW7v09d1trVNCie/view?usp=sharing',
    demolink: 'https://t.me/Abn3mad',
    price: {
      usd: 65,
      sar: 250
    },
    details: {
      duration: '1 day study',
      level: 'Advanced',
      prerequisites: [
        'Network security fundamentals',
        'Basic penetration testing skills'
      ],
      objectives: [
        'Network penetration testing',
        'Active Directory attacks',
        'Report writing'
      ]
    }
  },
  
  
];
