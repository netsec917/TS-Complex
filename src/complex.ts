
export class complex {
    /** The real component of the complex number */
    private _real: number;
    /** The imaginary component of the complex number */
    private _imaginary: number;
        
    /**
    * Construct a new complex number from two real numbers
    * @param real - The real component
    * @param imaginary - The imaginary component
    * @returns Complex number constructed from given parameters
    */
    constructor(real: number, imaginary: number) {
        this._real = real;
        this._imaginary = imaginary;
    }
   
    /**
    * Get the real component of the complex number
    * @returns The real component - this._real
    */
    get real() : number {
        return this._real;
    }
 
    /**
    * Get the imaginary component of the complex number
    * @returns The imaginary component - this._imaginary
    */
    get imaginary() : number {
        return this._imaginary;
    }
    
    /**
    * Add two complex numbers
    * @param other - The 2nd complex number operand
    * @returns x + other
    */
    public add(other: complex) : complex {
        return new complex(this._real + other.real, this._imaginary + other.imaginary);
    }

    /**
    * Subtract two complex numbers
    * @param other - The 2nd complex number operand
    * @returns x - other
    */
    public subtract(other: complex) : complex {
        return new complex(this._real - other.real, this._imaginary - other.imaginary);
    }

    /**
    * Multiply two complex numbers
    * @param other - The 2nd complex number operand
    * @returns The product of x / other
    */
    public multiply(other: complex) : complex {
        return new complex(this.real * other.real - this._imaginary * other.imaginary, 
            this.real * other.imaginary + this._imaginary * other.real);
    }

    /**
    * Divide two complex numbers
    * @param other - The 2nd complex number operand
    * @returns The result of the division x / other
    */
    public divide(other: complex) : complex {
    /* Complex division:
        ac + bd     bc - ad
        -------- + -------- i
        c^2 + d^2  c^2 + d^2
    */
        let ac = this._real * other.real;
        let bd = this._imaginary * other.imaginary;
        let bc = this._imaginary * other.real;
        let ad = this._real * other.imaginary;
        let cc = other.real * other.real;
        let dd = other.imaginary * other.imaginary; 
        return new complex((ac + bd) / (cc + dd), (bc - ad) / (cc + dd));
    }

    /**
    * Scalar multiply a complex number, by a real number lambda
    * @param lambda - The real number scaling factor
    * @returns The scaled version of the complex number
    */
    public scalarMultiply(lambda : number) : complex {
        return new complex(lambda * this.real, lambda * this.imaginary);
    }

    /**
    * Get the magnitude(absolute value) of the complex number
    * @returns The magnitude: sqroot(a^2 + b^2)
    */
    public magnitude() : number {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    }

    /**
    * Get the conjugate of the complex number
    * @returns The conjugate of the complex number:  a + (-bi)
    */
    public conjugate() : complex {
        return new complex(this.real, -this.imaginary);
    }

    /**
    * Get the arguement of the complex number, the angle in radians with the x-axis in polar coordinates 
    * @returns The arguement of the complex number
    */
    public arguement() : number {
        return Math.atan2(this.imaginary, this.real);
    }

    /**
    * Get the exponential of the complex number
    * @returns The The exponential of the complex number: (exp(a) * cos(b)) + (exp(a) * sin(b))(i)
    */
    public exponential() : complex {
        return new complex(Math.exp(this.real) * Math.cos(this.imaginary), Math.exp(this.real) * Math.sin(this.imaginary));
    }

    /**
    * Statc method to construct a complex number in rectangular form from polar coordinates
    * @param theta - The angle 
    * @param magnitude - The magnitude
    * @returns Complex number constructed from theta & the magnitude
    */
    public static fromPolar(theta : number, magnitude : number) : complex {
        return new complex(magnitude * Math.cos(theta), magnitude * Math.sin(theta));
    }
}