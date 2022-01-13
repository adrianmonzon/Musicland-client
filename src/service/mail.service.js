import axios from 'axios'

export default class MailService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: process.env.REACT_APP_API_URL, /*'http://localhost:5000/api',*/ //actualizar el heroku:git y demás para que en el deploy funcione, ya que ahora estaba apuntando a localhost5000
            withCredentials: true
        })
    }

    
    sendMail = mailInfo => this.apiHandler.post(`/mail/send-email`, mailInfo)
}