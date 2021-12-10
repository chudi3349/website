import React, { Component } from 'react';
import { Container, Button, Link } from 'react-floating-action-button'


class ActionButton extends Component {
  render() {
    return (
        <Container>
            <Link href="/form"
                tooltip="Contact Us"
                icon="fa fa-sticky-note" />
            <Link href="/about"
                tooltip="About Us"
                icon="fa fa-user-plus" />
                
            <Button
                tooltip="The big plus button!"
                icon="fa fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
    );
  }
}

export default ActionButton;
