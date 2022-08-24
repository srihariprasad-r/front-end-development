import datetime as dt

class Node(object):
    def __init__(self) -> None:
        self.chain = []
        self.generic_block = self.create_block(1, "data", 1, "0")
        self.chain.append(self.generic_block)

    def create_block(self, proof, data, index, previous_hash):
        block = {
            "index": index,
            "data" : data,
            "proof": proof,
            "previous_hash" : previous_hash
        }
        return block

n = Node()