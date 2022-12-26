"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("container");

var IssueFiter = function (_React$Component) {
    _inherits(IssueFiter, _React$Component);

    function IssueFiter() {
        _classCallCheck(this, IssueFiter);

        return _possibleConstructorReturn(this, (IssueFiter.__proto__ || Object.getPrototypeOf(IssueFiter)).apply(this, arguments));
    }

    _createClass(IssueFiter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is a placeholder for Issue filter"
            );
        }
    }]);

    return IssueFiter;
}(React.Component);

var IssueAdd = function (_React$Component2) {
    _inherits(IssueAdd, _React$Component2);

    function IssueAdd() {
        _classCallCheck(this, IssueAdd);

        return _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).apply(this, arguments));
    }

    _createClass(IssueAdd, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is a placeholder for Issue Add entry form"
            );
        }
    }]);

    return IssueAdd;
}(React.Component);

var IssueRow = function (_React$Component3) {
    _inherits(IssueRow, _React$Component3);

    function IssueRow() {
        _classCallCheck(this, IssueRow);

        return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
    }

    _createClass(IssueRow, [{
        key: "render",
        value: function render() {
            var borderStyle = { border: "solid 3px grey", padding: 4 };
            var issue = this.props.issue;
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.id
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.status
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.owner
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.created.toDateString()
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.effort
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.completionDate ? issue.completionDate.toDateString() : ''
                ),
                React.createElement(
                    "td",
                    { style: borderStyle },
                    issue.title
                )
            );
        }
    }]);

    return IssueRow;
}(React.Component);

var IssueTable = function (_React$Component4) {
    _inherits(IssueTable, _React$Component4);

    function IssueTable() {
        _classCallCheck(this, IssueTable);

        return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
    }

    _createClass(IssueTable, [{
        key: "render",
        value: function render() {
            var issueRows = this.props.issues.map(function (issue) {
                return React.createElement(IssueRow, { key: issue.id, issue: issue });
            });
            var borderStyle = { border: "solid grey 3px", padding: 8 };
            return React.createElement(
                "table",
                { style: { borderCollapse: "collapse" } },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Id"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Status"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Owner"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Created"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Effort"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Completition Date"
                    ),
                    React.createElement(
                        "td",
                        { style: borderStyle },
                        "Title"
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    issueRows
                )
            );
        }
    }]);

    return IssueTable;
}(React.Component);

var issues = [{
    id: 1, status: 'Open', owner: 'Viraj', created: new Date('2022-12-25'),
    effort: 5, completionDate: undefined, title: 'Error in the console when clicking Add'
}, {
    id: 2, status: 'Assigned', owner: 'Vikrant', created: new Date('2022-12-15'),
    effort: 14, completionDate: new Date('2022-12-24'), title: 'Missing a border on the plane'
}];

var IssueList = function (_React$Component5) {
    _inherits(IssueList, _React$Component5);

    function IssueList() {
        _classCallCheck(this, IssueList);

        return _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).apply(this, arguments));
    }

    _createClass(IssueList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Issue Tracker"
                ),
                React.createElement(IssueFiter, null),
                React.createElement("hr", null),
                React.createElement(IssueTable, { issues: issues }),
                React.createElement("hr", null),
                React.createElement(IssueAdd, null)
            );
        }
    }]);

    return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode);