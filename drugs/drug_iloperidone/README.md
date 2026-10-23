<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;}]"></div>

# iloperidone

- **generic name:** iloperidone
- **ATC codes:** `N05AX14`
- **DrugBank:** [DB04946](https://go.drugbank.com/drugs/DB04946) · **PubChem:** [CID 71360](https://pubchem.ncbi.nlm.nih.gov/compound/71360)
- **molar mass:** 426.4806 g/mol (C24H27FN2O4) — DrugBank
- **groups:** approved, investigational

## About

Iloperidone is an antipsychotic used to treat schizophrenia. It is approved in the United States, but its marketing authorisation was refused in the European Union, so it is not available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4199443](https://www.wikidata.org/wiki/Q4199443) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iloperidone | parent | 426.481 | C24H27FN2O4 | DrugBank | [71360](https://pubchem.ncbi.nlm.nih.gov/compound/71360) | Pei_2016 |
| M1 (P-88) | metabolite | 428.504 | C24H29FN2O4 | PubChem | [9823904](https://pubchem.ncbi.nlm.nih.gov/compound/9823904) | Pei_2016 |
| M2 (P-95) | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V1 | 679 | L | 679 L | Chinese schizophrenia patients | 70 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Pei_2016_estimate](drugs/drug_iloperidone/Iloperidone_Pei2016_estimate.md) |
| ka | kabs | 2.26 | 1/h | 2.26 h -1 | Chinese schizophrenia patients | 70 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Pei_2016_estimate](drugs/drug_iloperidone/Iloperidone_Pei2016_estimate.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub> | [Pei_2016_estimate](drugs/drug_iloperidone/Iloperidone_Pei2016_estimate.md) | held back | 1-compartment general linear | 9 (+3 cov.) | Pei Q et al., Influences of CYP2D6, Acta pharmacologica Sinica (2016) | [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ median](drugs/drug_iloperidone/Iloperidone_Pei2016_median.md) | — | general linear (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [An_2020_Kv](drugs/drug_iloperidone/pd_An_2020_Kv.md) | voltage-dependent K+ (Kv) current inhibition ← iloperidone · direct sigmoid Emax (Hill) effect | — | An JR et al., Inhibition of voltage-dependent K, Journal of applied toxicolo… (2020) | [10.1002/jat.3986](https://doi.org/10.1002/jat.3986) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iloperidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HRH1 (target), HTR1A (target), HTR2A (target), HTR2C (target), HTR6 (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:49 | 0:42 | 1/1/0 | 1/0/0 | 0/0/0 | 27,597/2,191 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2020 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel inhibition by iloperidone; no PK disposition parameters reported. |
| popPK | Cutler_2008 | irrelevant | 0 | 0 | Efficacy/safety trial with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biloperidone%5D&body=Drug%3A%20iloperidone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iloperidone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 15:48 UTC</sub>
