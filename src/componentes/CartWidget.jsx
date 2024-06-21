import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartWidget(){
    return (
        <>
        <Button variant="secondary">
            <Row>
                <Col
                    className='img-carrito'
                >
                    <Image
                        src="/carrito.jpg" 
                        rounded
                        alt="carritoo"
                        width="30px"
                        />
                </Col>
                <Col>
                    <h4 variant="secondary">3</h4>
                </Col>
                        
            </Row>



        </Button>{' '}
        </>
    )
}

export default CartWidget