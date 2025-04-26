import { ref } from 'vue'
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth'

export const useFirebase = () => {
  const { $firebase } = useNuxtApp()
  const user = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  // Auth state observer
  if (process.client) {
    onAuthStateChanged($firebase.auth, (firebaseUser) => {
      user.value = firebaseUser
    })
  }
  
  // Authentication functions
  const login = async (email, password) => {
    error.value = null
    loading.value = true
    
    try {
      const userCredential = await signInWithEmailAndPassword($firebase.auth, email, password)
      user.value = userCredential.user
      return userCredential.user
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const register = async (email, password) => {
    error.value = null
    loading.value = true
    
    try {
      const userCredential = await createUserWithEmailAndPassword($firebase.auth, email, password)
      user.value = userCredential.user
      return userCredential.user
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const logout = async () => {
    try {
      await signOut($firebase.auth)
      user.value = null
    } catch (e) {
      error.value = e.message
      throw e
    }
  }
  
  // Firestore functions
  const createDocument = async (collectionName, data) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = await addDoc(collection($firebase.db, collectionName), {
        ...data,
        createdAt: serverTimestamp()
      })
      return docRef.id
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const getDocuments = async (collectionName, constraints = []) => {
    loading.value = true
    error.value = null
    
    try {
      let q = collection($firebase.db, collectionName)
      
      if (constraints.length > 0) {
        q = query(q, ...constraints)
      }
      
      const querySnapshot = await getDocs(q)
      const documents = []
      
      querySnapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      return documents
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const getDocument = async (collectionName, id) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = doc($firebase.db, collectionName, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        }
      } else {
        return null
      }
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const updateDocument = async (collectionName, id, data) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = doc($firebase.db, collectionName, id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
      })
      return true
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  const deleteDocument = async (collectionName, id) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = doc($firebase.db, collectionName, id)
      await deleteDoc(docRef)
      return true
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }
  
  // Helper functions for querying
  const whereEqual = (field, value) => where(field, '==', value)
  const orderByField = (field, direction = 'asc') => orderBy(field, direction)
  
  return {
    user,
    error,
    loading,
    login,
    register,
    logout,
    createDocument,
    getDocuments,
    getDocument,
    updateDocument,
    deleteDocument,
    whereEqual,
    orderByField
  }
}