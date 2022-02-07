import './portfolioList.scss'

export const PortfolioList = ({ title, active, id, setSelected }) => {
    return (
        <li className={active ? 'portfolioList active' : 'portfolioList'}
        onClick={() => setSelected(id)}
        >
           {title} 
        </li>
    )
}

