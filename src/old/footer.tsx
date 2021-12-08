// Footer
interface IFooter {
  copy: string;
}

const Footer: React.FC<IFooter> = (props) => {
  return <footer>{props.copy}</footer>;
};

export default Footer;
