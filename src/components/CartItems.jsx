import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleIncreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        _id: item._id,
        quantity: item.quantity,
        type: "increase",
      })
    );
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        _id: item._id,
        quantity: item.quantity,
        type: "decrease",
      })
    );
  };

  const handleRemoveFromCart = (item) => {
    dispatch(updateQuantity({ _id: item._id, quantity: 0, type: "decrease" }));
  };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="mb-8 w-full md:w-3/5 lg:w-3/5">
      <h3 className="text-lg font-semibold mb-4">Cart Items</h3>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center p-2">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhASExIWExMVFRUWFhUYFRcVFRYWFhYWGBYSGBUYHiggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyYrLy8tLS0tMC0vLy8tLS0tKy8tLS0tLS0tLy0tLS0tLS0tLS0wLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYBBwj/xABEEAACAQIDBQQGBAwGAwEAAAAAAQIDEQQhMQUSQVFhBhNxgSIykaGx0RRSksEHIzNCU2KTwtLh8PEVFnKCorI0Q3Mk/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAAyEQACAQIEAgkFAAIDAQAAAAAAAQIDEQQSITFBUQUTYXGBobHR8CIykcHhI/EzQqIU/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxsinW5GrkluZSb2JjCU0uJWlUb4mJG6vI3VPmWHXRj9IfIhBp1kjbIiR12eOrLmYAxmfM2yoy72XMd4+ZieGLsWRJ3r5nqrsjPDKk+YyosxrrjkSplEyhNrQ3VV8TR01wLoMKc7mZMncjasAAZMAAAAAAAAAAAAAAAAA8bAPQRSrJHyHtl+GTcnKjgIQnutp153lBta93FNby/Wbs+CasxH6nZG6hJn2MHwPY34ZsWt+OJjGakvRqU4JVIO6u92T3ZZXte2dtdD652V25QxWHhVw83Ug203Jyc4zXrRkpNuL0yvazVsmjM1k3DpyR0BFOslpmQTqNmJXlV5Gyp8z2U29TwAiJAeXDAAuAwwD0AAAAAHgRBjMRuJO18zKhiIz014muZXsZs7XJjxCx6bGD2ErO5bTKZYwzysS0nrYjmtLkwAJyIAAAAAAAAAAAAAGFWVkYbsrhK55UqW8StKTep42CtKbkTxikcV+Fza8sPs6soS3Z1XGldPNRnfffnGMlfqfn7ZuzqleahTV3q28owjxnOTyjFcz9H9sOzcMVBqo7096LlG7TdmrWaz/uzHBbGwVClSjSpRpuEm5U9xtyluyj617p726967do2JaWIyRatr2lqMFlTWt+XP27T5D2m7ATpRhPDPvrQiqtNP8YpW9eMdWpa21T0utOg/AbVrUq+KpVIThTqQg1vRlFd7FtJK61cXK/8ApXQ+lUcNh5wfeWjVjvbsmrtN+rOKetuXQj7P4OnKpVqW9KMrR5JZ2duepo8RNwUXZ3/PzkSShB5201bs07LfNu06EAEZTAAAPGLhs9APGwD0AAAAAAAjq0lJWfO57TpqKslZGYMW4i4ABkAlwzzfgREuGWb8DeH3I1n9rLIALJAAAAAAAAAAAAACpVldlibsmVCGq+BJTXEAAhJSHFQbj6PrJpq+l072Zz+0Kcm26l4bzu3or+Ohu9o4+NKN3m3pFav5I0mL2oqii92yWqvezfF9OpXq1YJ5W9eRPh6yhNJ2+eRjRw891OMZTXB6389DbbFwMqUJb/rzlvNLO3JX/rU0v+JTjT3YPdje0bJX5yefVr3lOpjKz/8AdUXhNr3aFd4ulB8X8+eBivi814La+/M7gHEYXG4qDpPv5yg6qUrqLahG28s1x3teh2VCvGavF3+K8i3SrRqK8fnxEC1VyUAEpkpbSUvQcb5PgvkT4ZzcfSVn/XsJWzGFRPR36rT2muX6rmb6WMwAbGAR4itGEZTk7Rim2+iJDke2u1M1h4vlKp46xj9/sNJzyxuT4ag69VQXj2Lj85m92btmjXT3JWaV3GeUkufJrqmYYXbtCpV7qEm3Z2lb0G1qk+LtnpbI1vY7ZShTdWau6itFP6nH7XwS5nO7XwUsLX9FtJNTpy6Xy801by6kTqTjFSaL8MFh6lapSjJ6bd/Hvt7n0gFPZOPjXpQqLK+UlymtV/XBouE6aaujlSi4ycZboAAyYK2ClnWu72qzS6JWyNjh1lc12BjZ1rpq9WbXVWWaM6tWU26VN2SynUX5vOEf1vgR0amSCb1eqS4t+PZ4JaskqwzTajtz4JW+fo2Z6Q4ejGEVGKsloTF6N7fVv87vQpu19AADYwAAAAAAAAAR1/VZVLrRTlG2RBVWtyWm+B4AU9q13ClK3rNWjzu+XVK78iGUlFNs3bscztfFd5Vk+C9GPguPm7vzKCqOM424qXsyumuKMjxxzT5J++3yPOublJye7K5JOd+lsklokYEsaTtvZqN1Fytld526uyJMdhe7az3oyinGSVlJP4chlk05cNPPb/ewI36ng5f8krf9GX8PXulJOz6cGUMPOCbjUn3akrKbW9BPgprWOaXpXtqnzOwo7GoyjGW6lJpXdOT3G+aWlvI6mCpSlFtW/Ph6WLuGxEKcXGV97+5r6W1ZrVKXuZn/AIjVk7Qik+iu/fkXMTgcNSW9Uk0usteiSzfkaqt2moQypUrrnlG/xb8zoww1WWxirjMNDhr84fwuT2fUmvTqZ8rOS+KJKez5Ws6s7cldL4sbJ2rCunZOMo6xfXRp8UY9oNqrDUXV3d93UVG9rt31fBWTNJwUL5lsbUq861lTd77bF3D0VBWV34u5KcH/AJ/n+gX23/CP8/z/AEC+2/4SProcy0+jcU3dx/8AUfc6/a2OVClKo9VlFc5vRf1wTOF2NgZYqv6TbTbnUl0vn5t5f2Njj5Vsbh5Yh7lOnTv+L3m22rOUr21s1ZePM1WyO1P0aMoxoKTbu5ubTdtFbd0X3shqPNJZvt9S/haM6VCap2dS9nqtPHbRavt5n0qEUkklZLJLkuRqu0my+/pOy/GQ9KHXnDzXvSOZ/wA/z/QL7b/hPf8AP8/0Eftv+EllVhJWbKVLAYunNTjHVdsfcw7JbT7qq6cn6E7Lwl+bL7n4rkd8fMML/wDsxNoRjSlUk3a94rJuTvbo3bmzfYztRWw0/o86cKkoWi6m+1vZKzfo62auR0Z5Y/Vtff5r2lrH4V1qidP7mruN1ttf9PuN5tTa3dvcik58b/m/NlCGKxbi6i3nHmoL5Zo1k5Ntt6tu/izoZyn9KoqN9zdjur83c3c+nP3HFhiKmMm5OcoxvGKUNPubs3ztbXm2krETpQoxSSTdm232W9/9nuxtsKUlCpZN5RkuL5NcGbZVqFK0N6MLZ7t+fE4nEW3pbum87eB3OEe9CnKSTbhFvLjbM6PRWLq1lKnJpyjtJq903rtbilrxVrrQqY2hCnaavZ7q9teHPt/W5j/idD9JH2lwj7qP1V7ESHbhn1zteCa9WznTcP8Aqn4u/wCkAASGgAAAAAAAAAMJwT1MwYauCu8P1OY7U1vThFP1XbL6zz+R1VeqoRlJ6JX/AJHCbVm5Wb1cm/NlPFxjkyridDBUuuk1Lbbxa/RBX1UvrK/no/en5WJcBSpyclOUo5ei1ayfNriuOXJjY2GnW3nKLhToSn3l9XZL8WuWcXfkn1KsZWafFZnClCVNxnNb30fhfzend2HPNxhaTp3pVfydVpKSaau07Ti1k7NR8mYuhaFSjWunTd6bVnbevdZtLddr6rPrka+WMjFbid47ynGKV5KVs0uCWebfJMxrV5Td5Pje2ufO71fVkjqwjGyXYr8nur8UnZp8794FbdvlyV+N3bN6cdRgdpyw+/CjTipVLNy+qo34acdXoRNlOUr3fP7tC50PQdSu6ltIrzasl+2VsVVyRsnq/TiS4nEynJynJzlzengl/SMFK+XR8FwXuIk9ehnT18n8GesOVfU3vYv/AMiS4OEr/aidF2g2IsTSdLe3c1JO17NdOKzZo+w0PxtWXKFvbJfI7YoYmEZys+R2MBUlTgpReqd0fEcVs5wnODlnGUovL6ra59CH6J1938zf9qKW7i66/X3vtJS+80ONenn9x56Ss2j6FTlmgpc0n+UTKM1Fx33uvVZ8PPMg+idfd/MtoqYV+k/64mDc9+idfd/M8+idfd/Mzxei8fmS0fVXgAR0qDi1JSs1o7fzPalGUndzu9dOPPUjg/xj8/gS4n1X5fEGTpcBVjNJvS2f+pRyXtsb6OKpqO4sRJQ9NW5Wb3VvNXs18T5/gK0opNM7Xsxs+OIpynO8d2e6t3K9knfO/MpUcLXpzcaCTvzbTty0a08uL11OTjaMIR6yb+lePdpZkKwm/OMKb3r2z5Pjw0R29GkoqMVpFJLyViHBYCnSVoRtfVvNvzLZ2ejsB/8AMpSds0uWyXJX8TgYvE9c0lsvMAA6ZUAAAAAAAAAAAAABjKVk29EAaftBiLKNNcc34LT3/Ar7G2cpONWayi7wXN/W8viY0aTr1ZSeUL5vpwj4nQxSSSVklkkVoRVSbm9uBeqT6mmqcd+PiajtJUjSw1RRSjvyUbLK7qT9J+NnJnGHT9q9j18TKh3c4RhTbk1JtXllZ5J8L+1nIYzF7lSdNR33CTi2naN1k7PxuvIoYzC18RU/xxukua/bRzqlSFNXk7fOwsGFWqo68dFxb5JcSpVr1XkkoadX8iKFDO8pOT6/AxS6ExEvvaj43flp5leWMpra78vUtVq+Xx+RDUnZX15Lm+RjVi3uxim5SkkkldvPl4I6WjsXuaFatVV6m5KMI8Ib63W+rzt0PQ0aVLCU1Tj/AFt8WU7TxEm+X4S+e5zVBeir66vxeZLD7n8GeGUFr4c0uKLTaS1IYxcnZK51nYSl6NafNxj7E2/+yOsOb7KJww6/WcpZK/6v7puu+kc2tVjnZ2sPSapxRwXbyjbE3+tCD+Mf3Tk8b+b5/cdr+ECDc6EucXH7LT/eZx2IquNrdTiV/wDkZ7fAPNhqfdb8afomRUwvrPz+JbRDRrNtoiLh5jNF4/cySj6q8DyvUcVdczKnK6TAK8Pyj8/gSYn1X5fE8jWe9u8CStOybAMML6q8z6d2HpWwkX9ac379390+aUZ3Vz6v2ZpbuFw65wUvtNy+8uYJf5G+w5HTUrYdLnJej/htQAdQ8sAAAAAAAAAAAACOrUt4khDXp3zNZt20MxtfUinUk+NvAo4nCzmmu+kk+Fl91i2Cq3fcsweR3XoiLDUFCKiva9W+bJQAG29WR16m7GUvqpv2K583/v5vVn0mvT3oyi9JJr2qx86xWGnTk4TVmvf1XNF/A2+pcdDldI3+l8NTCfPn8eJ42eqR60n06P5l85h0XYdwkq0lZyUlHru2vfwbf/E3G3cLUq0nTp2vJxvd2SSd9UnyXA4SNNp3WvNNX9xbhjcQtKlX2sqVMO3U6xNeJepYpRpdVKL8Da0Ox1/ytZ/6aa3V9qV7+wlex3BtRpzkk3uuzllw9xp1tPE/pJm52NXlUnB1PTd3HPk1bThqVMZCdoubvr+PI6fRdWKc+ojbS7u914XN5SqwpwipSjGyV7tLPiRY7HulVw8HC8K10pqWkkrqLjbjzuaDtFQpU625Tssk5JcL3t4aP2FnbU51cXs+lGNu7iq01qoq6yb6btv9xz1UlmnBrWOXa7vd9y4d3Hlcz1jk7jtzTvRpS5VLfai/4T57jeHn9x9L26lVj3U00rqTafFcnyzOMx+xJuXowlOOdt1OTt+tZakNb77o9N0ZXiqSpydnr+CkiphfWfn8Tbf4XX/Q1P2c/kRw2NWTbVGr+zn8iKzOpmjz9ChjNF4/cySj6q8C7U2PXeTo1f2c/kI7LrpW7mp+zn8hZjNHn6Grh+Ufn8CXE+q/L4l5bGrX3u5q3/8AnL5GywuwYyh+N34t8LbrS67y1FiOrXp043kzn8Jp7T7Js6KjSpR+rCC9kUj5gtiVVONOMJSjfJpb1k3+c0rLI+mMt4R5XJnG6YnGpCmovm/T+l4FWNVrqWIyudGM1I4Di0ZAA3NQAAAAAAAAAAACGpSvmiCUWtS6COVNM3U2iiY1ItrJ2fAuumuRj3CI+qZvnRzdN1FLRuSeevwNpOjGcUqkE+admi/9Hie9wupHToSgbTqxkcvjOy9OWdOTg+T9KPvzXtNDjdjV6Wbg5R+tDNexekvYfRu4XUdwupchWrR317/fco1MLRltp3e2x8ojNPR3Mj6JtDYOHrevBOX1l6MvtLM53HdiKiu6Ff8A21P4kvuLcMRF76fOwozwc4/br5P8P3OdSNpRqunFrSUox3ZJ7rjmm3bnlbpmiXYGwsSq968N2FP0uDUpfmpNcOPkuZvcRsXek3GtOnCTcnBKDtJ5ylCUk3C7zduLbOf0muttCMrW5We6ttp3/wBsWcFSmouWqvpbb5qcnLBum95ylPvFeTk05KaveLeucbPPk+R2GFjbE1E7OaoYe78617eaKu3thupQhTotRlSlvQu8m8968nd3d27vV66l7CYSSq1asmryjTgkvq00831cpS8rFClR6ucmuOX82d/nNl+MWmWK+GjKzeq/qzPUowXCKJSnjcPOWksuX9tSZ6apaky10bLEK0Wrppklyhs/COLcpa8F95fEG2rsSST0FxcA2MC5BWwsZNN6/HoycGGk9wtNjCnTUVZKxmZRpt8CSOH5s3UG9kYclxIUi3ShZHsIJaGRNCFtWRSncAAkNAAAAAAAAAAAAAAAAAAAAAAAAAAAARypJ9CQGGk9zKdtiu8P1Me4ZaBp1cTbOyp3UuQ7qXItgdVEz1jKvcyPe4ZZA6qJjOyusP1MlQXMmBlU4mM7I1RjyMt1cjIGySWxi7AAMmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
            alt="add something to the cart"
          />
          <button onClick={()=>navigate('/')} className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
            add something to cart
          </button>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center mb-4 border border-gray-300 rounded p-3 shadow-md"
          >
            <img
              src={item.productImage}
              alt={item.productName}
              className="w-14 h-14 mr-3 object-contain"
            />
            <div className="flex-grow">
              <h4 className="font-semibold">{item.productName}</h4>
              <p className="text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center space-x-8">
              <div className="rounded flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  -
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 font-medium"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {/* <div className="flex justify-end  rounded p-3 mx-16">Total: ${totalAmount}</div> */}
      <div className="flex items-center justify-end mt-4 mx-14 border-t">
        <h4 className="font-semibold">Total Amount : &nbsp; </h4>
        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItems;
