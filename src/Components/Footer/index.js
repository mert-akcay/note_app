import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNote } from '../../redux/notes/notesSlice'
import { Row, Col, Button, Input, Modal } from "antd";
import { SearchOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import './styles.css'


function Footer() {

    const items = useSelector((state) => state.notes.items)
    

    const [filter, setFilter] = useState("")
    const [filtered, setFiltered] = useState([])
    const [visibility,setVisibility] = useState(false)
    const [context,setContext] = useState("")
    const [title,setTitle] = useState("")
    const dispatch = useDispatch();



    useEffect(()=>{
        setFiltered(items.filter(element => (element.content.includes(filter) || element.title.includes(filter) )))
    },[filter,items])

    


    const showModal = (element) => {
        setContext(element.content)
        setTitle(element.title)
        setVisibility(true)
    }

    
    const deleteItem = () => {
        dispatch(removeNote(context))
        setVisibility(false)
    }


    return (
        <>
            <Row style={{marginTop:"50px"}}>
                <Col md={{offset:6, span:6} } xs= {{offset:2, span:20}}>
                    <Input value={filter} onChange={(e)=>setFilter(e.target.value)} size="middle" placeholder="Filter Notes" prefix={<SearchOutlined />}/>
                </Col> 
            </Row> 



            <Row style={{marginTop:"50px"}}>
                <Col md={{offset:6, span:12} } xs= {{offset:2, span:20}}>
                    <Row>
                        {filtered.map((element,i) => {
                            return (
                            <Col key={i} style={{marginTop:"10px"}} span={8}>
                                <Button className="notes" style={{ backgroundColor:`${element.color}`}} onClick={()=>showModal(element)}>{element.title} </Button>
                            </Col>
                            )
                        })}
                    </Row>
                    <Modal title={title} visible={visibility} onOk={()=>setVisibility(false)} onCancel={()=>setVisibility(false)} footer={[
                        <Button className="delButton" key="del" onClick={deleteItem}> Delete </Button>,
                        <Button className="okButton" key="ok" onClick={()=>setVisibility(false)}> OK </Button>
                    ]}>
                        <p>{context}</p>
                    </Modal>
                </Col>
            </Row>
        </>
    )
}


export default Footer


