import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import '../App.css';

export function Projects() {
 const [less, more] = useState(false);
 const toggleStyle ={
   display: less ? "none" :"block"
 }
 const colorStyle={
  color: 'white'
}
  return (
    <div>
     
     
      <IconButton
       style={colorStyle}
        aria-label="add to shopping cart"
        onClick={(e) => {
          more(!less);
        }}
      >   <span className="spanStyle">SIGNIFICANT PROJECTS</span> {less?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
      
      
      <main style={toggleStyle}>
        <ul>
          <li>
            <h3>Work Load Management</h3>
            <strong> Technologies Used:</strong> Angular 9
            <br />
            <strong>Description:</strong> WLM is an online application where
            Patient can register their details, a new patient can be registered
            they can review the data what they have entered, it list the all
            registered patient in the dashboard page.
            <br />
            <strong>Responsibilities :</strong>
            <ul>
              <li>Develop the story as per acceptance criteria.</li>
              <li> Worked in Agile Methodology.</li>
              <li>Bug Fixes, Lint Fixes, Sonar Issue Fixes.</li>
              <li>
                Responsible for completion of committed stories with in the
                sprint.
              </li>
            </ul>
          </li>
          <li>
            <h3>Vendor Merchant Portal  </h3>
            <strong>Technologies Used: </strong>React Js, Bootstrap
            <br />
            <strong>Description:</strong> Vmp is an online application where
            Vendors register their details of product and Merchant will get
            notification of registered vendors.
            <br />
            <strong>Responsibilities : </strong>
            <ul>
              <li> Develop registration page.</li>
              <li> Worked in Agile methodology. </li>
              <li>
                Responsible for completion of committed stories with in the
                sprint.
              </li>
            </ul>
          </li>
          <li>
            <h3>Site Speed Improvement</h3>
            <strong>Technologies Used :</strong> HTML,CSS
            <br />
            <strong> Description:</strong> Improving speed of Macys production
            site by identifying flows of the application <br />
            <strong>Responsibilities:</strong>
            <ul>
              <li>
                {" "}
                Auditing the site through Page speed tools and resolving the
                issues
              </li>
            </ul>
            <li>
              <h3>Supply Chain Reference Data</h3>
              <strong>Technologies used:</strong>
              Angular 4, Priming <br />
              <strong>Description: </strong>SCRD is a web-based application
              which helps the suppliers to view the store details and the
              delivery details of the product. Users can perform CRUD
              operations.
              <br />
              <strong> Responsibilities:</strong>{" "}
              <ul>
                <li>Develop Angular components</li>
              </ul>
            </li>
          </li>
          <li>
            <h3>Label Info Component </h3>
            <strong> Technologies used:</strong> React Js, Material UI, Node Js.
            <strong>Description:</strong>
            Label Info Component is a component which help the users to see the
            scanned product details of an item. The component will receive an id
            of the scanned product after scanning process. The details of that
            product will be displayed to the user. <br />
            <strong>Responsibilities:</strong>{" "}
            <ul>
              <li>Developed React client side of the application.</li>
              <li>Bug Fixing</li>
            </ul>
          </li>
          <li>
            <h3>Printer Component </h3>
           <strong> Technologies used:</strong> React JS, Material UI<br/> 
           <strong>Description: </strong>This
            application was developed to make ease use of printers by setting
            preferences. Preferences can be set in two ways. Manually selecting
            the printers and the other one is by scanning barcode of printers.<br/>
            <strong>Responsibilities:</strong><ul>
              <li> Application design using material UI</li>
              <li> Application development in React JS</li>
            </ul> 
           
          </li>
          <li>
            <h3>Voice over</h3>
           <strong> Technologies used: </strong>Java8, JavaScript, Angular JS, Python
           <strong> Description:</strong>  The application was designed to use in distribution
            center to handle merchandize movement process through human voice.
            Its main scope was to make the application more users – friendly and
            hence control the application through voice. The application starts
            recording voice after a particular keyword is detected. The recorded
            commands are converted to text and its corresponding web services
            are invoked.<br/> <strong>Responsibilities:</strong> <ul>
              <li>Application Design and development in Angular JS</li>
              <li> Unit testing in Karma – Jasmine</li>
            </ul>
            
          </li>
          <li>
            <h3>Sprint Planner</h3>
            <strong>Technologies used:</strong> Java7, Hibernate, Angular JS, HTML<br/> 
            <strong>Description:</strong>
            Sprint Planner is an application which is used to manage different
            projects and its user stories. It shows the features assigned for a
            particular sprint, its priority, story points and status. We can
            prioritize and schedule the requirements. It also depicts a graph
            which is very helpful for scrum master for analysis. Defects also
            can be traced.<br/><strong>Responsibilities:</strong>  
            <ul>
              <li> Application Design and
            development in Java7, HTML, Bootstrap, & Angular JS.</li>
            </ul>
          </li>
        </ul>
      </main>
    </div>
  );
}
