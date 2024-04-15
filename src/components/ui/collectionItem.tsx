import { Link } from 'react-router-dom';

interface collectionItemProps {
    imageMain: string;
    imageSecondary: string;
    title: string;
    description: string;
}

function collectionItem({ imageMain, imageSecondary, title, description }: collectionItemProps) {
  return (
      <Link to="/contato" className="group block">
          <div className="relative h-[350px] sm:h-[450px]">
              <img src={imageMain} alt="ilustração do serviço" className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"/>
              <img src={imageSecondary} alt="ilustração do serviço" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"/>
          </div>
          <div className="bg-blue-800 p-2">
              <h3 className="text-md text-white md:text-lg group-hover:underline group-hover:underline-offset-4">
                  {title}
              </h3>
              <p className="mt-1.5 text-pretty text-xs md:text-md text-gray-200">
                  {description}
              </p>
          </div>
      </Link>
    );
}

export default collectionItem;