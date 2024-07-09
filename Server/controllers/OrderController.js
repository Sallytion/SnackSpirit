import orderDB from '../models/orderModel.js';

export async function AddOrder(req,res){
    const {userId, orderItems, address} = req.body;

    if(!userId || !orderItems || !address){
        return res.status(400).json({message: "All fields are required"});
    }else{
        try {
            const NewOrder = new orderDB({
                userId, orderItems, address
            });

            const orderPlaced = await NewOrder.save();
            if(orderPlaced){
                res.status(201).json({message: "Order placed successfully"});
            }else{
                res.status(500).json({message: "Failed to place order"});
            }
        } catch (error) {
            res.status(400).json({error: error});
        }
    }
}