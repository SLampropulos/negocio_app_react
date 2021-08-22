import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function CartWidget() {
    return (
        <div>
            <Button variant="light">
                <Image src="https://image.flaticon.com/icons/png/512/3144/3144456.png" width={30} height={30}/>
            </Button>
        </div>
    )
}

export default CartWidget
