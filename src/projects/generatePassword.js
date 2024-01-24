import { useEffect, useState } from 'react';
import '../App.css';
import { Key } from 'react-bootstrap-icons';

function GeneratePassword() {

    var generator = require('generate-password-browser');

    const [password, setPassword] = useState('');
    const [length, setLength] = useState(10);
    const [symbols, setSymbols] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);

    var generatePassword = () => {
        var pwd = generator.generate({
            length: length,
            lowercase: isLowerCase,
            uppercase: isUpperCase,
            symbols: symbols,
            numbers: isNumbers
        });
        console.log(pwd)
        setPassword(pwd);
    }
   
        return (
            <div className='mainContainer'>
                <div className='passwordContainer'>
                    <h2>Password Generator</h2>
                    <div className='formContainer'>
                        <div className='inputHolder'>
                            <span>Password</span>
                            <input type='text' placeholder='' value={password} />
                            <span><Key className='keyicon' /></span>
                        </div>
                        <div className='inputHolder'>
                            <input type='numbers' placeholder='' value={length} onChange={(e) => setLength(e.target.value)} />
                            <span>Length</span>
                        </div>
                        <div className='checkboxHolder'>
                            <input type='Checkbox' checked={symbols} onChange={(e) => setSymbols(!symbols)} />
                            <span>Symbols</span>
                        </div>
                        <div className='checkboxHolder'>
                            <input type='Checkbox' checked={isUpperCase} onChange={(e) => setIsUpperCase(!isUpperCase)} />
                            <span>Uppercase</span>
                        </div>
                        <div className='checkboxHolder'>
                            <input type='Checkbox' checked={isLowerCase} onChange={(e) => setIsLowerCase(!isLowerCase)} />
                            <span>Lowercase</span>
                        </div>
                        <div className='checkboxHolder'>
                            <input type='Checkbox' checked={isNumbers} onChange={(e) => setIsNumbers(!isNumbers)} />
                            <span>Numbers</span>
                        </div>
                        <button onClick={generatePassword}>Generate Password</button>
                    </div>
                </div>
            </div>
        )
}

export default GeneratePassword;