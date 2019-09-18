import moment from "moment/moment"

const Date = ({ date }) => moment(date).format(`MMMM D, YYYY`)

export default Date
