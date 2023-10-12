import getPrismaInstance from "../utils/PrismaClient.js"



export const addMessage = async (req, res, next) => {
    try {
        
        const prisma = getPrismaInstance();
        const {message,from,to} = req.body;
        const getUser = onlineUsers.get(to);
        if(message && from && to){
            const newMessage = await prisma.message.create({
                data:{message,sender:{connect:{id:parseInt(from)}}, reciever:{connect:{id:parseInt(to)}}, messageStatus:getUser? "delivered" : "sent"},
                include: {sender:true, reciever:true}
            })
            return res.status(201).send({ message : newMessage})
        }
        return res.status(400).send("From,to and Message is Required.")

    } catch (error) {
        next(error)
    }
}


export const getMessages = async (req, res, next) => {
    try {
        
        const prisma = getPrismaInstance();
        const {from, to} = req.params;

        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    {
                        senderId: parseInt(from),
                        recieverId: parseInt(to),
                    },
                    {
                        senderId: parseInt(to),
                        recieverId: parseInt(from),
                    },
                ],
            },
            orderBy: {
                id: "asc",
            },
        });

        const unreadMessages = [];

        messages.forEach((message,index) => {
            if(message.messageStatus !== "read" && message.senderId === parseInt(to)){
               message.messageStatus = "read";
               unreadMessages.push(message.id);
            }
        })


        await prisma.message.updateMany({
            where: {
                id: {in: unreadMessages}
            },
            data: {
                messageStatus: "read",
            }
        });
        res.status(200).json({messages})

    } catch (error) {
        next(error)
    }
}