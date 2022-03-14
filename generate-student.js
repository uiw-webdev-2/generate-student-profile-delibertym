const student = {
    fname: "Deliberty",  
    lname: "Maga",
    Email: "maga@student.uiwtx.edu",
    PIDM: 1124407,
    School: "University of the Incarnate Word",
    Gradelv: "Senior",
    Image: "celebrity.jpg",
    ImageAlt: "celebrity1.jpg",
  };


const content =   `
    <main>
        <article>
            <h1>Me</h1>
            <ul>
                <li>First Name: ${student.fname}</li>
                <li>Last Name: ${student.lname}</li>
                <li>Email: ${student.Email}</li>
                <li>PIDM: ${student.PIDM}</li>
                <li>School: ${student.School}</li>
            </ul>
      <article>
    <main>  
    `;

const createProfile = (profile) =>
{
  let newprofile = document.createElement("article");
  newprofile.innerHTML = content;
  newprofile.prepend(createImage(profile))
  return newprofile;
    }

const createImage = (dataObj) =>
{
  let newstudent = document.createElement("img");
  newstudent.setAttribute("src", dataObj.Image );
  newstudent.setAttribute("alt", dataObj.ImageAlt );
  return newapple;
}

document.querySelector("main").append(createProfile(student))