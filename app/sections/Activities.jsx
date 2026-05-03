export default function Activities(){
    const activities = [
        ['Design Coordinator -College Event',
         "Led a team of desigbers for the college's flagship cultural event. Managed asset creation, branding, and visual communication across all event materiala",
         ['Leadership', 'Desisgn Management', 'team Collaboration', 'Designing']],
         ["Technical Event Organizer", 
            "Organized and coordinated multiple technical workshops and hackathons, facilitating knowledge sharing and skill development among peers.",
        ['Event Management', 'Public Speaking', 'Technical Integration']],
        ["Open-Source Contributor", 
         "Active contributor to various open-source projcts, focusing on web development tools and libraries.",
         ['Collaboration', 'Code Review', 'Documenttation']
        ]
    ]
    return (
        <section>
            <h1>
                Extra-Cirriculum Activities
            </h1>
            <ul>
                {activities.map((item,ind)=>(
                    <li key={ind}>
                        <h1>{item[0]}</h1>
                        <p>{item[1]}</p>
                        <ul>
                            {item[2].map((ele, i) => (
                                <li key={"ele"+i}>
                                    {ele}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}