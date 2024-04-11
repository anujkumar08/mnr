import {useEffect, useState} from "react";


import ContestPreview from "./contest-preview";
import { fetchContests } from "../api-client";


const ContestList = ({initialContests}) => {
    
    const [contests, setContests] = useState(initialContests);

    useEffect(() => {                                           //use effect runs on render set contest(infinite loop)
    //   fetchContests().then((contests) => {
    //     setContests(contests);
    //    });

    }, [] );

    return (
        <div className = "contest-list">
            {contests.map((contest) => {
                return(
                   <ContestPreview key={contest.id} contest={contest} />
                ); 
                    
            })} 
        </div>
    );
};

export default ContestList;