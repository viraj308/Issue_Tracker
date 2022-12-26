const contentNode = document.getElementById("container");

class IssueFiter extends React.Component {
    render() {
        return(
            <div>This is a placeholder for Issue filter</div>
        )
    }
}


class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for Issue Add entry form</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderStyle = {border: "solid 3px grey", padding: 4};
        const issue = this.props.issue;
        return(
            <tr>
                <td style = {borderStyle}>{issue.id}</td>
                <td style = {borderStyle}>{issue.status}</td>
                <td style = {borderStyle}>{issue.owner}</td>
                <td style = {borderStyle}>{issue.created.toDateString()}</td>
                <td style = {borderStyle}>{issue.effort}</td>
                <td style = {borderStyle}>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td style = {borderStyle}>{issue.title}</td>
            </tr>
        )
    }
}
class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue = {issue} />)
        const borderStyle = {border: "solid grey 3px", padding: 8}
        return(        
                <table style = {{borderCollapse: "collapse"}}>
                    <thead>
                        <td style = {borderStyle}>Id</td>
                        <td style = {borderStyle}>Status</td>
                        <td style = {borderStyle}>Owner</td>
                        <td style = {borderStyle}>Created</td>
                        <td style = {borderStyle}>Effort</td>
                        <td style = {borderStyle}>Completition Date</td>
                        <td style = {borderStyle}>Title</td>
                    </thead>
                    <tbody>
                        {issueRows}
                    </tbody>
                </table>
        )
    }
}
const issues = [
    {
        id:1, status: 'Open', owner: 'Viraj', created: new Date('2022-12-25'), 
        effort: 5, completionDate: undefined, title: 'Error in the console when clicking Add',
    },
    {
        id:2, status: 'Assigned', owner: 'Vikrant', created: new Date('2022-12-15'),
        effort: 14, completionDate: new Date('2022-12-24'), title: 'Missing a border on the plane', 
    }
]
class IssueList extends React.Component {
    render() {
        return(
            <div>
                <h1>Issue Tracker</h1>
                <IssueFiter />
                <hr />
                <IssueTable issues={issues}/>
                <hr />
                <IssueAdd />
            </div>
        )
    }
}
ReactDOM.render(<IssueList />, contentNode);