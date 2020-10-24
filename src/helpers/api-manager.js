/**
 * @typedef {Object} Answer
 * @property {'success' | 'denied'} status - Статус ответа
 * @property {any} message - Сообщение ответа
 */

/**
 * Класс для работы с API
 */
export class APIManager {
    static baseURL = 'https://f9db34e6315b.ngrok.io/api';

    /**
     * @param {string} methodName - Имя метода
     * @param {object} params - Параметры метода
     * @returns {Promise<Answer>} 
     */
    static async callMethod(methodName, params = {}) {
        const response = await fetch(
            `${APIManager.baseURL}/${methodName}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...params,
                    search: document.location.search
                }),
                method: 'POST'
            }
        );
    
        return response.json();
    }
}