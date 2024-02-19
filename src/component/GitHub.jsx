import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

const GithubCalender=()=> {
    return (
      <>
        <div id="github"className="github-main">
          <h2 className="github-heading">GitHub Overview</h2>
          <div className="github-container1">
            <GitHubCalendar
              className="react-activity-calendar"
              color="skyblue"
              username="khushboo8252"
            />
          </div>
          <div className="github-container2">
            <Box>
              <img className="github-img"
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=khushboo8252&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
              />
            </Box>
          </div>
          <div className="github-container3">
            <Box>
              <img className="github-img"
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=khushboo8252&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
              />
            </Box>
          </div>
          <div className="github-container4">
            <Box>
              <img className="github-img"
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=khushboo8252&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
                alt=""
              />
            </Box>
          </div>
        </div>
      </>
    );
  }
  
  export default GithubCalender;