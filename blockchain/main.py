import datetime as dt
import hashlib
import json

class Node(object):
    def __init__(self) -> None:
        self.chain = []
        self.generic_block = self.create_block(1, "data", 1, "0")
        self.chain.append(self.generic_block)

    def mine_block(self,data):
        previous_block = self.chain[-1]
        previous_proof = previous_block['proof']
        index = previous_block['index']
        new_proof = self.proof_of_work(previous_proof, index, data)
        previous_hash = self.get_hash(block=previous_block)
        next_block = self.create_block(new_proof, data, index + 1 , previous_hash)
        self.chain.append(next_block)
        return next_block

    def get_digest(self, new_proof, previous_proof, index, data):
        digest = str(new_proof ** 2 - previous_proof ** 2 + index) + data
        return digest.encode()

    def get_hash(self,block):
        encoded_block = json.dumps(block, sort_keys=True).encode()

        return hashlib.sha256(encoded_block).hexdigest()

    def proof_of_work(self, previous_proof, index, data):
        new_proof = 1
        check_proof = False

        while not check_proof:
            digest = self.get_digest(new_proof, previous_proof, index, data)
            hash = hashlib.sha256(digest).hexdigest()

            if hash[:4] == "0000":
                check_proof = True
            else:
                new_proof += 1
        
        return new_proof


    def create_block(self, proof, data, index, previous_hash):
        block = {
            "index": index,
            "data" : data,
            "proof": proof,
            "previous_hash" : previous_hash
        }
        return block

n = Node()
n.mine_block(data='data1')
n.mine_block(data='data2')
print(n.chain)
