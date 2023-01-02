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
        const issue = this.props.issue;
        return(
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}
class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue = {issue} />)
        return(        
                <table className="table-border">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Status</th>
                            <th>Owner</th>
                            <th>Created</th>
                            <th>Effort</th>
                            <th>Completition Date</th>
                            <th>Title</th>
                        </tr>
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