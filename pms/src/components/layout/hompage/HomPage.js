import React from "react";
import Cards from "./Cards";
import Heading from "./Heading";
import HeroSection from "./HeroSection"
import SumarryContent from "./SumarryContent";
import SummaryContentTwo from "./SummaryContentTwo";
import TaskSummary from "./TaskSummary";
import WebSummary from "./WebSummary";





function Homepage() {


  return ( 
  <>
  <HeroSection/>
  <Heading/>
  <SummaryContentTwo />
  <TaskSummary />
  <WebSummary />
  <SumarryContent />
  <Cards />
  </>
  );
}
 
export default Homepage;
