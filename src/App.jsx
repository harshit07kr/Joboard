import { useEffect, useState } from "react"
import Headers from "./componenets/Headers"
import Jobcards from "./componenets/Jobcards"
import Navbar from "./componenets/Navbar"
import Searchbar from "./componenets/Searchbar"
import { collection, query, where, getDocs,orderBy } from "firebase/firestore"
import { db } from "./firebase.config"
function App(){
  const [jobs,setjobs] = useState([]);
  const [customsearch,setcustomsearch]= useState(false);
  const [searchbarKey, setSearchbarKey] = useState(Date.now());

  const fetchjob= async() =>{
    setcustomsearch(false)
    const tempjob = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedon","desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempjob.push({
        ...job.data(),
        id: job.id,
        postedon: job.data().postedon.toDate()
      })
    });
    setjobs(tempjob);
  }

  const fetchjobcustom=async(jobcriteria)=>{
    setcustomsearch(true);
    const tempjob = []
    const jobsRef = query(collection(db, "jobs"));
    let q = query(collection(db, "jobs"), orderBy("postedon", "desc"));

    if (jobcriteria.type) {
      q = query(q, where("type", "==", jobcriteria.type));
    }
    if (jobcriteria.title) {
      q = query(q, where("title", "==", jobcriteria.title));
    }
    if (jobcriteria.experience) {
      q = query(q, where("experience", "==", jobcriteria.experience));
    }
    if (jobcriteria.location) {
      q = query(q, where("location", "==", jobcriteria.location));
    }
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempjob.push({
        ...job.data(),
        id: job.id,
        postedon: job.data().postedon.toDate()
      })
    });
    setjobs(tempjob);
  }

  useEffect(()=>{//everytime page reloaded
    fetchjob()
  },[])

  const resetFilters = () => {
    setSearchbarKey(Date.now());
    fetchjob();
  };

  
  return (
      <div>
        <Navbar />
        <Headers />
        <Searchbar key={searchbarKey} fetchjobcustom={fetchjobcustom} />
        {customsearch &&
        <div className="flex items-center justify-center pb-6">
        <button onClick={resetFilters} className="flex mt-4">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
          </button></div>}
        {jobs.map((job) => (
        <Jobcards key={job.id} {...job} />
      ))}
      </div>
  )
}

export default App
