

const InputField = ({ label, type, name, placeholder, onChange }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-semibold mb-2 text-left">{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
    </div>
  );
  
  export default InputField;