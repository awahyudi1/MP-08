import Image from 'next/image'
import lineUp from '@/data/lineUp.json'

const CardListLineUpDay2 = () => {
  return (
    <>

    {lineUp.map((data) => {
      if(data.id > 6) {
        return(

              <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <Image
                  alt=""
                  src={data.path}
                  width={500}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
  
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h1 className="mt-0.5 text-3xl font-serif text-white">{data.name}</h1>
                    </a>
                  </div>
                </div>
              </article>
              
        )
      }
    })}
    
    </>
  )
}

export default CardListLineUpDay2;