<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;nitrazepam&quot;}]"></div>

# nitrazepam

- **generic name:** nitrazepam
- **ATC codes:** `N05CD02`
- **DrugBank:** [DB01595](https://go.drugbank.com/drugs/DB01595) · **PubChem:** [CID 4506](https://pubchem.ncbi.nlm.nih.gov/compound/4506)
- **molar mass:** 281.2661 g/mol (C15H11N3O3) — DrugBank
- **groups:** approved

## About

Nitrazepam is a benzodiazepine sedative used as a hypnotic for insomnia, and it also has anxiolytic and anticonvulsant properties. It is an approved medicine and remains in use as a hypnotic and sedative, though it is not authorised through the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410078](https://www.wikidata.org/wiki/Q410078) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nitrazepam | parent | 281.266 | C15H11N3O3 | DrugBank | [4506](https://pubchem.ncbi.nlm.nih.gov/compound/4506) | Kangas_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Kangas_1979_reference](drugs/drug_nitrazepam/Nitrazepam_Kangas1979_reference.md) | — | 1-compartment (no model) | 4 | Kangas L et al., Human pharmacokinetics of nitrazepam: e…, European journal of clinica… (1979) | [10.1007/BF00563100](https://doi.org/10.1007/BF00563100) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nitrazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2E1` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), SCN1A (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:41 | 1:14 | 0/1/0 | 0/0/0 | 0/0/0 | 20,251/1,622 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kangas_1979.pdf` | Kangas L et al., Human pharmacokinetics of nitrazepam: e…, European journal of clinica… (1979) | popPK | 9 | [10.1007/BF00563100](https://doi.org/10.1007/BF00563100) | [456400](https://pubmed.ncbi.nlm.nih.gov/456400) | Human PK study of nitrazepam with two-compartment model parameters (half-life, Vd, clearance) reported directly in the abstract. |
| `Luurila_1995.pdf` | Luurila H et al., Interaction between erythromycin and ni…, Pharmacology & toxicology (1995) | pgx | 7 | [10.1111/j.1600-0773.1995.tb00139.x](https://doi.org/10.1111/j.1600-0773.1995.tb00139.x) | [7617555](https://www.ncbi.nlm.nih.gov/pubmed/7617555) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06 20:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Jones_2007 | not_relevant | 2 | 1 | Forensic DUID prevalence study; mentions polymorphism only as a general consideration, no genotype-specific PK/PD data for nitrazepam. |
| PGx | Konishi_2017 | not_relevant | 3 | 3 | Identifies enzymes (AOX1, NAT2, AADAC, CYP3A4) in nitrazepam metabolism but reports no gene variant/genotype effect on a PK/PD parameter. |
| PGx | Kravetz_2021 | not_relevant | 1 | 2 | Nitrazepam is only mentioned as a co-medication with fixed doses; the pharmacogenomic (KCNT1 variant) effects and TDM data pertain to quinidine, not nitrazepam PK/PD. |
| PGx | Luurila_1995 | not_relevant | 0 | 0 | This is a drug-drug interaction study (erythromycin-nitrazepam), not a pharmacogenomic effect of a gene variant/genotype/phenotype on nitrazepam PK/PD. |
| PGx | Mizuno_2009 | not_relevant | 2 | 5 | In vitro CYP3A4 metabolic activation/cytotoxicity study; no gene variant/genotype effect on nitrazepam PK/PD parameters in humans. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | Nitrazepam is only a synthetic precursor for benzodiazepine analogs; no PK parameters reported. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | In vitro study of benzodiazepine effects on CYP induction; no gene variant/genotype effect on nitrazepam PK/PD reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrazepam%5D&body=Drug%3A%20nitrazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nitrazepam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 20:41 UTC</sub>
