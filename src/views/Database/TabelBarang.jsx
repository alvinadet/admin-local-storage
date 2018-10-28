import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import Table from 'components/Table/Table.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import { Button } from '@material-ui/core';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
};

class TabelBarang extends Component {
  componentDidMount() {
    console.log(this.props.database);
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <Button
          style={{ backgroundColor: 'green', color: 'white' }}
          onClick={this.props.tambah}>
          Tambah Barang
        </Button>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Daftar Barang</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  'Nama',
                  'Harga',
                  'Stock',
                  'Jumlah Harga',
                  'Hapus/Edit'
                ]}
                tableData={this.props.database.map((datum, key) => {
                  return [
                    datum.nama,
                    datum.harga,
                    datum.stock,
                    `Rp. ${datum.jumlahHarga}`,
                    <div>
                      <Button
                        color="white"
                        onClick={() => this.props.hapusData(key)}
                        style={{ backgroundColor: 'red', margin: 4 }}>
                        Hapus
                      </Button>
                      <Button
                        color="white"
                        onClick={() => this.props.editData(key)}
                        style={{ backgroundColor: 'green', margin: 4 }}>
                        Edit
                      </Button>
                    </div>
                  ];
                })}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(TabelBarang);
