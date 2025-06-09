import Hero from "@/components/hero";
import TripleMarquee from "@/components/triple-marquee";

export default function Home() {
  const dummyUsers = [
    {
      id: "u1",
      name: "Alice Smith",
      posts: 120,
      value: 8500,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: "u2",
      name: "Bob Johnson",
      posts: 80,
      value: 7200,
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: "u3",
      name: "Charlie Brown",
      posts: 200,
      value: 12000,
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: "u4",
      name: "Diana Prince",
      posts: 95,
      value: 9100,
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: "u5",
      name: "Ethan Hunt",
      posts: 150,
      value: 10500,
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: "u6",
      name: "Fiona Apple",
      posts: 70,
      value: 6800,
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    {
      id: "u7",
      name: "George Lucas",
      posts: 180,
      value: 11500,
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    {
      id: "u8",
      name: "Hannah Montana",
      posts: 60,
      value: 5900,
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    {
      id: "u9",
      name: "Isaac Newton",
      posts: 110,
      value: 8900,
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    {
      id: "u10",
      name: "Jessica Alba",
      posts: 130,
      value: 9500,
      avatar: "https://i.pravatar.cc/40?img=10",
    },
    {
      id: "u11",
      name: "Kevin Hart",
      posts: 90,
      value: 7800,
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      id: "u12",
      name: "Laura Croft",
      posts: 160,
      value: 11000,
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
      id: "u13",
      name: "Michael Scott",
      posts: 50,
      value: 6100,
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    {
      id: "u14",
      name: "Nancy Drew",
      posts: 140,
      value: 9800,
      avatar: "https://i.pravatar.cc/40?img=14",
    },
    {
      id: "u15",
      name: "Oliver Queen",
      posts: 170,
      value: 10200,
      avatar: "https://i.pravatar.cc/40?img=15",
    },
    {
      id: "u16",
      name: "Peter Parker",
      posts: 210,
      value: 13000,
      avatar: "https://i.pravatar.cc/40?img=16",
    },
    {
      id: "u17",
      name: "Quinn Fabray",
      posts: 75,
      value: 6500,
      avatar: "https://i.pravatar.cc/40?img=17",
    },
    {
      id: "u18",
      name: "Rachel Green",
      posts: 105,
      value: 8800,
      avatar: "https://i.pravatar.cc/40?img=18",
    },
    {
      id: "u19",
      name: "Steve Rogers",
      posts: 190,
      value: 12500,
      avatar: "https://i.pravatar.cc/40?img=19",
    },
    {
      id: "u20",
      name: "Tina Fey",
      posts: 85,
      value: 7000,
      avatar: "https://i.pravatar.cc/40?img=20",
    },
    {
      id: "u21",
      name: "Uma Thurman",
      posts: 115,
      value: 9300,
      avatar: "https://i.pravatar.cc/40?img=21",
    },
    {
      id: "u22",
      name: "Victor Stone",
      posts: 100,
      value: 8000,
      avatar: "https://i.pravatar.cc/40?img=22",
    },
    {
      id: "u23",
      name: "Wendy Darling",
      posts: 98,
      value: 7700,
      avatar: "https://i.pravatar.cc/40?img=23",
    },
    {
      id: "u24",
      name: "Xavier Woods",
      posts: 125,
      value: 8600,
      avatar: "https://i.pravatar.cc/40?img=24",
    },
    {
      id: "u25",
      name: "Yara Greyjoy",
      posts: 65,
      value: 6200,
      avatar: "https://i.pravatar.cc/40?img=25",
    },
    {
      id: "u26",
      name: "Zoe Saldana",
      posts: 135,
      value: 9400,
      avatar: "https://i.pravatar.cc/40?img=26",
    },
  ];

  return (
    <>
      <Hero />
      <TripleMarquee allUsers={dummyUsers} />
    </>
  );
}
