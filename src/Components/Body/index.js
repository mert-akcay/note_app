import { useState } from 'react'
import { Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";
import  './styles.css'
import { SendOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/notes/notesSlice'

const { TextArea } = Input;

function Body() {

    const dispatch = useDispatch();

    const [value,setValue] = useState(null)
    const [color,setColor] = useState(null)
    const [title,setTitle] = useState(null)

    const submitButton = (e) => {
        e.preventDefault();
        if (color && value && title) {
            dispatch(addNote({content:value, color:color, title:title}))
            setValue("")
            setTitle("")
        }
    }


    const onColorChange = (e) => {
        setColor(e.target.value)
    }


    return (
        <>
            <Row align="middle">
                <Col md={{offset:6, span:12} } xs= {{offset:2, span:20}}>
                    <Input value={title} onChange={(e)=>setTitle(e.target.value)} size="large" placeholder="Note Title"/>
                </Col> 
            </Row> 

            <Row align="middle">
                <Col md={{offset:6, span:12} } xs= {{offset:2, span:20}}>
                    <TextArea onPressEnter={submitButton} value={value} onChange={(e) => setValue(e.target.value) } showCount maxLength={200} rows={4}  style={{marginTop:"15px"}} placeholder="Enter your note here..."/>
                </Col> 
            </Row> 
            <Row align="middle">
                <Col md={{offset:6, span:4}} xs={{offset:2, span:16}} >

                <div className="custom-radios">
                    <div>
                        <input onChange={onColorChange} type="radio" id="color-1" name="color" value="#2ecc71"/>
                        <label htmlFor="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    
                    <div>
                        <input onChange={onColorChange} type="radio" id="color-2" name="color" value="#3498db"/>
                        <label htmlFor="color-2">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    
                    <div>
                        <input onChange={onColorChange} type="radio" id="color-3" name="color" value="#f1c40f"/>
                        <label htmlFor="color-3">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input onChange={onColorChange} type="radio" id="color-4" name="color" value="#e74c3c"/>
                        <label htmlFor="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                    </div>

                    {/* <div className="round" style={{marginLeft:0}}>
                        <input type="checkbox" value="#FF8811"  id="checkbox1"  onChange={onColorChange}/>
                        <label className="cb1" htmlFor="checkbox1"></label>
                    </div>
                    <div className="round">
                        <input type="checkbox" value="#F4D06F"  id="checkbox2" onChange={onColorChange}/>
                        <label className="cb2" htmlFor="checkbox2"></label>
                    </div>
                    <div className="round">
                        <input type="checkbox" value="#FFE300"  id="checkbox3" onChange={onColorChange}/>
                        <label className="cb3" htmlFor="checkbox3"></label>
                    </div>
                    <div className="round">
                        <input type="checkbox" value="#9DD9D2"  id="checkbox4" onChange={onColorChange}/>
                        <label className="cb4" htmlFor="checkbox4"></label>
                    </div>
                    <div className="round">
                        <input type="checkbox" value="#392F5A"  id="checkbox5" onChange={onColorChange}/>
                        <label className="cb5" htmlFor="checkbox5"></label>
                    </div> */}
                </Col>
                <Col  md={{offset:5 ,span:3}} xs={{offset:1, span:3}}>
                    <Button onClick={submitButton} size="large" style={{float:"inline-end"}} icon={<SendOutlined/>}>Send</Button>
                </Col>
                
            </Row>
        </>
    )
}

export default Body
