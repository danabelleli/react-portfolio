export default function Resume() {
    return (
        <div className="p-5">
            <h1 className="text-3xl	font-bold">Resume</h1>
            <h2 className="mt-2">Download my <span className="font-bold hover:text-slate-600"><a href="/react-resume-file.pdf" download>resume</a></span></h2>

            <h3 className="mt-3 font-bold">Front-end proficiencies</h3>
            <ul className="mt-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3 className="mt-3 font-bold">Back-end proficiencies</h3>
            <ul className="mt-1">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mysql, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}