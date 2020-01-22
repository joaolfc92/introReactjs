
class Post extends React.Component {
    render() {
        return (
            <div>
                <PostTopo nome = {this.props.nome} />
                <PostCorpo />
                <PostRodape like={this.props.like} comentarios={this.props.comentarios} />
            </div>
        )
    }
}


class PostTopo extends React.Component{
    render(){
    return <h1>{this.props.nome}</h1>
    }
}

class PostCorpo extends React.Component {
    render(){
        return <h1>...........</h1>
    }
}

class PostRodape extends React.Component {
    render(){
        return (
        <div>
            <small>{this.props.like} Curtidas</small> <br></br>
            <small>{this.props.comentarios}- Comentarios</small>
        </div>
        )

    }
}


let elemento = (
    <div>
        < Post nome="joao" like="100" comentarios="500"/>  
        < Post nome="flores" like="10" comentarios="400"/>  
        < Post nome="calado" like="20" comentarios="300"/>  
    </div>
)


ReactDOM.render(elemento,document.getElementById('app'))











