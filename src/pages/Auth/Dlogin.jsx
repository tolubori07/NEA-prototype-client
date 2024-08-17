import { Eye, EyeOff } from "lucide-react";
import { lazy, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { login } from "../../api/authservice";
import { AuthContext } from "../../api/Authcontext";

const Input = lazy(() => import('../../components/Input'))
const Header = lazy(() => import('../../components/DonorHeader'))
const Button = lazy(() => import("../../components/Button"))

const Dlogin = () => {

  const user = useContext(AuthContext);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({ email: '', password: '' });

  const showPassword = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const userData = { email, password };
    login(userData);
  };

  return (
    <div>
      <Header />

      <h1 className="text-text text-3xl font-heading font-body mb-12">Enter your login detail</h1>

      <form action="" className="flex flex-col w-full gap-12" onSubmit={onSubmit}>

        <div className="flex justify-center">
          <Input placeholder={"Email"} name={"email"} type={"email"} value={email} className="w-[54%] font-bold text-xl" onChange={onChange} />
        </div>

        <div className="flex justify-center">
          <Input placeholder={"Password"} name={"password"} type={visible ? "text" : "password"} value={password} className={"w-[50%] font-bold text-xl"} onChange={onChange} />
          <Button onClick={showPassword} className={"transition-all"}>{visible ? <EyeOff /> : <Eye />}</Button>
        </div>

        <div className="flex justify-center text-center">
          <Button type="submit" className={"text-white font-bold font-body text-xl px-32"}>Login</Button>
        </div>

      </form>
    </div>
  )
}

export default Dlogin;
