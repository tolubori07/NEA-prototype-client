import { useEffect, useState } from "react"
import DonorHeader from "./components/DonorHeader"

const Loading = () => {
  const facts = ['Human blood contains gold, just about 0.2mg though :(', 'The human body makes about 2 million red blood cells a second ', ' Mosquitoes prefer people with blood group O', 'There are 150 Billion red blood cells in one ounce of blood.', 'There are 2.4 Trillion red blood cells in one pint of blood.', 'It only takes 20 to 60 seconds for a drop of blood to travel from the heart, through your body, and back to the heart again.', 'A red blood cell is around 7 microns in size. (A micron is one millionth of a meter).', 'Cows have 800 (and possibly more) blood types.', 'All blood isn’t red. Crabs have blue blood. Earthworms and leeches have green blood. Many invertebrates, such as starfish, have clear or yellowish blood.', 'The word "blood" appears at least once in every play by Shakespeare.', 'The amount of blood in a pregnant woman\'s body will have increased by 50% by the 20th week of pregnancy.', 'Some Japanese people believe that blood type is an indicator of a person’s personality. There are even novelty goods themed after blood types.', ' It would take 1,200,000 mosquitoes, each sucking once, to totally drain a human of blood.', 'a blue whale’s heart only beats 5 times per minute while humans beat closer to 75 per minute.']
  const [fact, setFact] = useState("")
  const addFact = () => {
    setFact(facts[Math.floor(Math.random() * facts.length - 1)])
  }
  useEffect(() => {
    addFact()
  }, [])
  return (
    <div>
      <DonorHeader />
      <h2 className="text-main font-heading text-lg mt-5 text-center">Loading...</h2>
      <p>While you wait, here's a quick fact, did you know that: {fact}</p>
    </div>
  )
}

export default Loading
