import Card from './Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHospital, faUsers, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faHospital, faUsers, faEye)
const cardData = [
    {
     icon: 'fas fa-hospital',
      title: 'Card 1',
      description: 'This is the first card.'
      
    },
    {
        icon: 'fas fa-users',
      title: 'Card 2',
      description: 'This is the second card.'
 
    },
    {
        icon: 'fas fa-eye',
      title: 'Card 3',
      description: 'This is the third card.'
    }
  ];
  

const CardGrid = () => {
    return (
       
        <div className="container">
        {cardData.map((col, index) => (
          <Card key={index} icon={col.icon} title={col.title} description={col.description} />
        ))}
      </div>
    );
  };

  export default CardGrid;

  