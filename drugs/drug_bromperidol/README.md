<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;bromperidol&quot;}]"></div>

# bromperidol

- **generic name:** bromperidol
- **ATC codes:** `N05AD06`
- **DrugBank:** [DB12401](https://go.drugbank.com/drugs/DB12401) · **PubChem:** [CID 2448](https://pubchem.ncbi.nlm.nih.gov/compound/2448)
- **molar mass:** 420.322 g/mol (C21H23BrFNO2) — DrugBank
- **groups:** approved, withdrawn

## About

Bromperidol is a butyrophenone antipsychotic used to treat psychotic disorders such as schizophrenia. It was approved at one time but has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4973749](https://www.wikidata.org/wiki/Q4973749) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [de_2018_cAMP](drugs/drug_bromperidol/pd_de_2018_cAMP.md) | cAMP concentration (cellular second messenger response to D2 receptor antagonism) biomarker turnover ← bromperidol (with competitive dopamine at the D2 receptor) | — | de Witte WEA et al., In vitro and in silico analysis of the…, British journal of pharmaco… (2018) | [10.1111/bph.14456](https://doi.org/10.1111/bph.14456) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:23 | 4:13 | 0/0/0 | 0/1/0 | 0/0/0 | 79,207/2,646 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suzuki_1998.pdf` | Suzuki A et al., Effects of various factors including th…, Psychopharmacology (1998) | pgx | 8 | [10.1007/s002130050519](https://doi.org/10.1007/s002130050519) | [9539256](https://www.ncbi.nlm.nih.gov/pubmed/9539256) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Furukori_1998.pdf` | Furukori H, [Involvement of cytochromeP4503A4 in th…, Nihon shinkei seishin yakur… (1998) | pgx | 7 | not captured | [9592806](https://www.ncbi.nlm.nih.gov/pubmed/9592806) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Furukori_1999.pdf` | Furukori H et al., Effects of itraconazole on the steady-s…, Psychopharmacology (1999) | pgx | 7 | [10.1007/s002130051048](https://doi.org/10.1007/s002130051048) | [10463320](https://www.ncbi.nlm.nih.gov/pubmed/10463320) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suzuki_1996.pdf` | Suzuki A et al., No interaction between desipramine and…, Progress in neuro-psychopha… (1996) | pgx | 7 | [10.1016/s0278-5846(96)00111-x](https://doi.org/10.1016/s0278-5846(96)00111-x) | [8938825](https://www.ncbi.nlm.nih.gov/pubmed/8938825) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tateishi_2000.pdf` | Tateishi T et al., CYP3A is responsible for N-dealkylation…, Life sciences (2000) | pgx | 7 | [10.1016/s0024-3205(00)00874-2](https://doi.org/10.1016/s0024-3205(00)00874-2) | [11133003](https://www.ncbi.nlm.nih.gov/pubmed/11133003) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T15:22:22.249513+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Furukori_1998 | not_relevant | 3 | 3 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype/phenotype effect on PK/PD. |
| PGx | Furukori_1999 | not_relevant | 2 | 5 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype effect on bromperidol PK/PD. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | This is a population PK study of paroxetine; bromperidol is only used as an internal standard in the LC-MS assay, with no PK parameters for bromperidol. |
| PGx | Lee_2006 | not_relevant | 3 | 2 | Study investigated genetic effects on bromperidol PK/EPS but found no significant correlations; no pharmacogenomic effect reported. |
| PGx | Sato_2000 | not_relevant | 3 | 5 | In vitro enzyme phenotyping of CYP3A4 metabolism, no gene variant/genotype effect on PK/PD parameters in patients. |
| PGx | Suzuki_1996 | not_relevant | 2 | 5 | This is a drug-drug interaction study (desipramine coadministration), not a pharmacogenomic effect of a gene variant/genotype/phenotype on bromperidol PK/PD. |
| PGx | Tateishi_2000 | not_relevant | 3 | 5 | In vitro microsome study identifying CYP3A4 as responsible enzyme; no gene variant/genotype effect on in vivo PK/PD parameters reported. |
| popPK | de_2018 | irrelevant | 0 | 0 | In vitro D2 receptor binding/signalling kinetics study; no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for bromperidol, and any binding values are in figures/tables not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
