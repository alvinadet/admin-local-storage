import React, { Component } from 'react';
// @material-ui/core components

import TabelBarang from './TabelBarang';
import Modal from 'react-responsive-modal';
import AddData from './addData';
import EditData from './editData';

class Database extends Component {
  state = {
    nama: '',
    harga: 0,
    stock: 0,
    dataBarang: [],
    openModal: false,
    openModalEdit: false,
    key: null
  };
  total = () => {
    let database = this.state.dataBarang;
    for (let i = 0; i < database.length; i++) {
      const harga = this.state.dataBarang[i].harga;
      const stock = this.state.dataBarang[i].stock;
      const hasil = harga * stock;
      database[i].jumlahHarga = hasil;
      // console.log(jumlahHarga);
      this.setState({
        database
      });
      localStorage.setItem('database', JSON.stringify(database));
    }
  };

  openModal = () => {
    this.setState({
      openModal: true
    });
  };

  getData = () => {
    let getData = JSON.parse(localStorage.getItem('database'));
    if (getData != null) {
      this.setState({
        dataBarang: getData
      });
    }
    this.total();
  };

  getDataId = key => {
    let getData = JSON.parse(localStorage.getItem('database'));
    if (getData != null) {
      this.setState({
        nama: getData[key].nama,
        harga: getData[key].harga,
        stock: getData[key].stock,
        key: key,
        openModalEdit: true
      });
    }
  };

  editData = key => {
    let state = this.state;
    let database = this.state.dataBarang;
    let edit = {
      nama: state.nama,
      harga: state.harga,
      stock: state.stock,
      jumlahHarga: null
    };
    database.splice(key, 1, edit);
    localStorage.setItem('database', JSON.stringify(database));
    this.setState({
      database,
      nama: '',
      harga: 0,
      stock: 0
    });
    this.total();
  };

  addData = () => {
    let state = this.state;
    let database = this.state.dataBarang;
    database.push({
      nama: state.nama,
      harga: state.harga,
      stock: state.stock,
      jumlahHarga: null
    });
    localStorage.setItem('database', JSON.stringify(database));
    this.setState({
      database,
      nama: '',
      harga: 0,
      stock: 0
    });
    this.total();
  };

  hapusData = key => {
    let database = this.state.dataBarang;
    database.splice(key, 1);
    this.setState({
      database
    });
    localStorage.setItem('database', JSON.stringify(database));
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  onCloseModalEdit = () => {
    this.setState({ openModalEdit: false });
  };

  componentDidMount() {
    this.getData();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.stock);
  };

  render() {
    return (
      <div>
        <TabelBarang
          database={this.state.dataBarang}
          tambah={() => this.openModal()}
          hapusData={this.hapusData}
          editData={this.getDataId}
        />
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <AddData
            state={this.state}
            change={this.handleChange}
            addData={() => this.addData()}
          />
        </Modal>

        <Modal
          open={this.state.openModalEdit}
          onClose={this.onCloseModalEdit}
          center>
          <h2>Simple centered modal</h2>
          <EditData
            state={this.state}
            change={this.handleChange}
            editData={() => this.editData()}
          />
        </Modal>
      </div>
    );
  }
}

export default Database;
