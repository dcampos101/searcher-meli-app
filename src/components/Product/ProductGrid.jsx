import { ProductItem } from './ProductItem';
import { useFetchProduct } from '../../hooks/useFetchProduct';
import PropTypes from 'prop-types';

export const ProductGrid = ({ category }) => {

    const { products, isLoading } = useFetchProduct( category );
    
    return (
        <>
        <div> 
            <div className="card-grid" >
                {
                    products.map( ( prod ) => (
                        <ProductItem
                            key={ prod.id } 
                            { ...prod }
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}

ProductGrid.propTypes = {
    category: PropTypes.string.isRequired
}