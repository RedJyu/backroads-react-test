import { Title } from './Title';
import { tours } from '../data';
const Tours = () => {
  return (
    <>
      <section className='section' id='tours'>
        <Title title='our' subTitle='tours' />

        <div className='section-center featured-center'>
          {tours.map(
            ({ id, date, title, length, price, img, text, icon, country }) => {
              return (
                <article className='tour-card' key={id}>
                  <div className='tour-img-container'>
                    <img src={img} className='tour-img' alt='empty' />
                    <p className='tour-date'>{date}</p>
                  </div>
                  <div className='tour-info'>
                    <div className='tour-title'>
                      <h4>{title}</h4>
                    </div>
                    <p>{text}</p>
                    <div className='tour-footer'>
                      <p>
                        <span>
                          <i className={icon}></i>
                        </span>{' '}
                        {country}
                      </p>
                      <p>{length}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Tours;
