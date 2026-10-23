<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;guaifenesin&quot;}]"></div>

# guaifenesin

- **generic name:** guaifenesin
- **ATC codes:** `R05CA03`
- **DrugBank:** [DB00874](https://go.drugbank.com/drugs/DB00874) · **PubChem:** [CID 3516](https://pubchem.ncbi.nlm.nih.gov/compound/3516)
- **molar mass:** 198.2158 g/mol (C10H14O4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Guaifenesin is an expectorant used to relieve cough associated with conditions such as the common cold, bronchitis, sinusitis, and pharyngitis. It is widely available as an approved medicine for people and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420682](https://www.wikidata.org/wiki/Q420682) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Demirbas_1998_DXP_HBr](drugs/drug_guaifenesin/pd_Demirbas_1998_DXP_HBr.md) | dextromethorphan bioavailability biomarker turnover ← guaifenesin | — | Demirbas S et al., Bioavailability of dextromethorphan (as…, Biopharmaceutics & drug dis… (1998) | [10.1002/(sici)1099-081x(1998110)19:8&lt;541::aid-bdd138&gt;3.0.co;2-8](https://doi.org/10.1002/(sici)1099-081x(1998110)19:8&lt;541::aid-bdd138&gt;3.0.co;2-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=guaifenesin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GRIN1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:46 | 5:27 | 0/0/0 | 1/0/0 | 0/0/0 | 172,227/2,094 | einfracz / qwen3.8-27b | 9 | 1/4 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 61 matched, 48 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alrushaid_2018 | not_relevant | 0 | 0 | The paper studies the PK/PD of a novel compound (MyoNovin) and does not report pharmacogenomic effects on guaifenesin. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and safety of phenylephrine, mentioning guaifenesin only as part of a combination product reference, with no data for guaifenesin. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of dextromethorphan, not guaifenesin. |
| PGx | Itoga_2022 | not_relevant | 0 | 0 | The paper reports a chemical synthesis method for deuterating alcohols and notes increased metabolic stability of deuterated losartan, but it does not report the effect of human gene variants on the PK or PD of guaifenesin. |
| popPK | Pade_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pseudoephedrine, using guaifenesin only as a co-administered excipient/comparator to check for interactions, with no PK parameters reported for guaifenesin itself. |
| popPK | Perlík_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paracetamol, using guaiphenesin only as a co-administered agent to assess its effect on paracetamol absorption. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipient safety in paediatric formulations and contains no pharmacokinetic data or quantitative disposition parameters for guaifenesin. |
| popPK | Rumpler_2014 | irrelevant | 4 | 0 | Guaifenesin is detected but concentrations were below the limit of detection after IV dosing and no specific quantitative PK parameters (CL, V, etc.) are reported for guaifenesin itself, only for methocarbamol. |
| popPK | Van_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of garenoxacin, a quinolone antibiotic, and does not involve guaifenesin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bguaifenesin%5D&body=Drug%3A%20guaifenesin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_guaifenesin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
