import whale from "../assets/whale.jpg";
import ai from "../assets/ai.jpg";
import bridge from "../assets/bridge.jpg";
import change from "../assets/change.jpg";
import githubactions from "../assets/githubactions.jpg";
import microservices from "../assets/microservices.jpg";
import python from "../assets/python.jpg";
import secure from "../assets/secure.jpg";
import legacy from "../assets/legacy.jpg";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards-container">
      <Card
        pic={githubactions}
        title="Build continuous integration pipelines with GitHub Actions"
        description="GitHub actions provide a really powerful way to integrate continuous integration and delivery to you applications."
        date="August 12, 2024"
        tag="DevOps"
      />
      <Card
        pic={python}
        title="Python for the Absolute beginners"
        description="Python is the most popular programming language out there and it is used for so many different industries."
        date="August 2, 2024"
        tag="DevOps"
      />
      <Card
        pic={whale}
        title="Docker from Zero to Hero"
        description="Learn what is Docker and how Docker is used in the whole software development process."
        date="July 30, 2024"
        tag="DevOps"
      />
      <Card
        pic={microservices}
        title="The Rise of Microservices Architecture"
        description="Explore how microservices architecture is revolutionizing software development, enabling scalable, flexible, and independent deployment of services."
        date="July 17, 2024"
        tag="DevOps"
      />
      <Card
        pic={bridge}
        title="Bridging the Gap Between Development and Operations"
        description="Learn how DevOps practices are transforming the software development lifecycle by fostering collaboration, automating processes, and speeding up delivery."
        date="June 24, 2024"
        tag="DevOps"
      />
      <Card
        pic={ai}
        title="The Future of Software Development with AI and Machine Learning"
        description=" Delve into the impact of AI and machine learning on software development, from automating coding tasks to predicting and preventing bugs."
        date="May 4, 2024"
        tag="DevOps"
      />
      <Card
        pic={secure}
        title="Best Practices for Secure Software Development"
        description=" Discover essential techniques and tools for integrating security into every stage of the software development process, ensuring robust and safe applications."
        date="March 23, 2024"
        tag="DevOps"
      />
      <Card
        pic={change}
        title="Embracing Change in Software Development"
        description="Understand the principles of Agile development and how they help teams deliver high-quality software faster and more efficiently."
        date="January 1, 2024"
        tag="DevOps"
      />
      <Card
        pic={legacy}
        title="Navigating the Challenges of Legacy Code Maintenance"
        description="Learn strategies for managing and maintaining legacy codebases, ensuring they remain functional and efficient in the face of evolving technology."
        date="December 15, 2023"
        tag="DevOps"
      />
    </div>
  );
};

export default Cards;
