import React from "react";
import Cards from "./Cards";
import Heading from "./Heading";
import HeroSection from "./HeroSection"
import SumarryContent from "./SumarryContent";
import SummaryContentTwo from "./SummaryContentTwo";
import TaskSummary from "./TaskSummary";





function Homepage() {


  return ( 
  <>
  <HeroSection/>
  <Heading/>
  <SummaryContentTwo />
  <TaskSummary />
  <SumarryContent />
  <Cards />
  </>
  );
}
 
export default Homepage;
