import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/category/getall')
      .then(response => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(error => setMsg('Error in Fetching categories'));
  }, []);

  return (
    <div>
      <Card className="categories-card" style={{ width: "60%", marginTop: "3cm" }}>
        <ListGroup>
          <CardHeader style={{ backgroundColor: "blue", color: "#fff" }}>Categories</CardHeader>
          {categories.map((c, index) => (
            <ListGroupItem
              key={index}
              style={{
                border: "none",
                backgroundColor: selectedCategory === c.categoryId ? "#007bff" : "",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedCategory(c.categoryId);
                
              }}>
              <Nav.Link>{c.name} {c.categoryName}</Nav.Link>
              <Nav.Link onClick={()=>navigate('/customer/dashboard?page=products&cid='+c.id)}> {c.name}</Nav.Link>

            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Sidebar;
