export function snackEmoji(name: string){
    switch (name.toLowerCase()) {
        case 'hambúrguer':
            return '🍔'
        case 'pizza':
            return '🍕'
        case 'bebida':
            return '🥤'
        case 'sorvete':
            return '🍨'
        case 'batata':
            return '🍟'    
        default:
            return '🤔'
    }
}