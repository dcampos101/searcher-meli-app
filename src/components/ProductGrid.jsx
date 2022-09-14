import { ProductItem } from './ProductItem';
import { useFetchProduct } from '../hooks/useFetchProduct';

export const ProductGrid = ({ category }) => {

    const { images, isLoading } = useFetchProduct( category );
    
    return (
        <>           

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <ProductItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
