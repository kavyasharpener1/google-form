import "./App.css";
  
function App() {
    return (
        <div className="App">
            <h1>Google Form</h1>
            <fieldset>
              <form action="#" method="get">
                 
                    <label for="firstname">1. First Name*:</label>
                    <br />
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        required
                    />
                
                   <br />
                 
                    <label for="lastname">2. Last Name*:</label>
                    <br />
                    <input
                     type="text"
                     name="lastname"
                     id="lastname"
                     placeholder="Enter Last Name"
                     required
                 />
                 <br />
                 <label for="email">3. Enter Email*: </label>
                 <br />
                 <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter email"
                     required
                 />
                 <br />
                 <label for="tel">4. Contact*:</label>
                 <br />
                 <input
                     type="tel"
                     name="tel"
                     id="tel"
                     placeholder="Enter Mobile number"
                     required
                 />
                 <br />
                 <label for="gender">5. Gender*:</label>
                 <br />
                 <input type="radio" name="gender"
                     value="" id="male" />
                 Male
                 <br />
                 <input type="radio" name="gender"
                     value="" id="female" />
                 Female
                 <br />
                 <input type="radio" name="gender"
                     value="" id="other" />
                 Other
                 <br /><br />
                 <label for="file">6. Upload Resume*:</label>
                 <br />
                 <input
                     type="file"
                     name="file"
                     id="file"
                     placeholder="Enter Upload File"
                     required
                 />
                 <br />
                 <label for="url">7. Enter LinkedIn URL*:</label>
                    <br />
                    <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Enter url"
                        required
                    />
                    <br />
                    <label>8.Highest Level of Education:
                    <br/>
                    <br/>
                    </label>
                    <select name="select" id="select">
                      <option value="" disabled selected>
                       Choose
                     </option>
                            <option value="1">Grade 12</option>
                            <option value="2">Diploma</option>
                            <option value="3">Bachelor's Degree</option>
                            <option value="4">PhD</option>
                            <option value="5">Master's Degree</option>
                            </select>
                    <br /><br />
                    <label for="Name">9. Institute where you completed your highest level of education:</label>
                    <br />
                    <input
                        name="about"
                        id="about"
                     placeholder="Institute Name"
                        required
                    ></input>
                    <br /><br />
                    <label for="Name">10. What are your future goal:</label>
                    <br />
                    <input
                        name="about"
                        id="about"
                     placeholder="Your Answer"
                        required
                    ></input>
                    <br /><br />
                    <label></label>
                    <br />
                  <button type="submit" value="Submit">
                        Submit
                    </button>
                </form>
           </fieldset>
           
        </div>
    );
}
  
export default App;
