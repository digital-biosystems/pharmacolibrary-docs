<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01R&quot;,&quot;href&quot;:&quot;atc/J01R.md&quot;},{&quot;label&quot;:&quot;secnidazole&quot;}]"></div>

# secnidazole

- **generic name:** secnidazole
- **ATC codes:** `J01RA07`, `P01AB07`
- **DrugBank:** [DB12834](https://go.drugbank.com/drugs/DB12834) · **PubChem:** [CID 71815](https://pubchem.ncbi.nlm.nih.gov/compound/71815)
- **molar mass:** 185.183 g/mol (C7H11N3O3) — DrugBank
- **groups:** approved, investigational

## About

Secnidazole is a nitroimidazole antiprotozoal drug used against protozoal infections such as amoebiasis. It is an approved antibacterial and antiprotozoal, available in combination antibacterial products, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4413249](https://www.wikidata.org/wiki/Q4413249) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Darpo_2018_QTcF](drugs/drug_secnidazole/pd_Darpo_2018_QTcF.md) | QTcF ← secnidazole · direct linear effect | — | Darpo B et al., Thorough QT/QTc Evaluation of the Cardi…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1014](https://doi.org/10.1002/jcph.1014) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gillis_1996_clinical_or_parasitological_cure_rate](drugs/drug_secnidazole/pd_Gillis_1996_clinical_or_parasitological_cure_rate.md) | clinical or parasitological cure rate ← secnidazole · model not identified | — | Gillis JC et al., Secnidazole. A review of its antimicrob…, Drugs (1996) | [10.2165/00003495-199651040-00007](https://doi.org/10.2165/00003495-199651040-00007) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=secnidazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:38 | 2:51 | 0/0/0 | 1/1/0 | 0/0/0 | 78,101/1,230 | einfracz / qwen3.8-27b | 6 | 0/3 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2020 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacogenomic or PK/PD data. |
| PGx | Pentikis_2020 | not_relevant | 0 | 0 | The paper analyzes in vitro metabolic profiles and drug-drug interaction potentials of secnidazole but does not report in vivo PK/PD data or the influence of specific genetic variants/phenotypes on these parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of tinidazole (an antibiotic) in mice, not secnidazole, and secnidazole is not mentioned as the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsecnidazole%5D&body=Drug%3A%20secnidazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_secnidazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
