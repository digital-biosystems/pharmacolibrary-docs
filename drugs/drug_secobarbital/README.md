<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;secobarbital&quot;}]"></div>

# secobarbital

- **generic name:** secobarbital
- **ATC codes:** `N05CA06`
- **DrugBank:** [DB00418](https://go.drugbank.com/drugs/DB00418) · **PubChem:** [CID 5193](https://pubchem.ncbi.nlm.nih.gov/compound/5193)
- **molar mass:** 238.2829 g/mol (C12H18N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Secobarbital is a barbiturate sedative-hypnotic used to treat insomnia. It remains an approved medicine, including for veterinary use, though barbiturate sleeping pills are now used only rarely and largely in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414788](https://www.wikidata.org/wiki/Q414788) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=secobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), GRIN1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:18 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 19,878/678 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| `Hartley_1989.pdf` | Hartley DM et al., Delayed rescue of N-methyl-D-aspartate…, The Journal of pharmacology… (1989) | pd | 5 |  | [2569534](https://www.ncbi.nlm.nih.gov/pubmed/2569534) | metadata signals extractable PD data (EC50) |
| `Wong_1984.pdf` | Wong EH et al., gamma-Aminobutyric acid activation of 3…, Brain research (1984) | pd | 4 | [10.1016/0006-8993(84)91213-7](https://doi.org/10.1016/0006-8993(84)91213-7) | [6331574](https://www.ncbi.nlm.nih.gov/pubmed/6331574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 21:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1994 | irrelevant | 0 | 0 | Secobarbital is only a co-administered enzyme inducer altering warfarin PK; no secobarbital disposition parameters are reported. |
| popPK | Hartley_1989 | irrelevant | 0 | 0 | Secobarbital is only a co-applied test agent in an in-vitro neuroprotection assay; no PK parameters reported. |
| popPK | Login_1998 | irrelevant | 0 | 0 | Secobarbital is only used as a co-administered GabaA modulator in a rat neurochemistry assay; no PK parameters reported. |
| PGx | Sakuma_1999 | not_relevant | 2 | 3 | Secobarbital is only used as a CYP1A2 inducer in vitro; no gene variant effect on secobarbital PK/PD is reported. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| popPK | Wong_1984 | irrelevant | 0 | 0 | In-vitro mechanistic study of GABA/36Cl- flux in rat hippocampal slices; secobarbital is only a co-applied agent with no PK parameters. |
| popPK | Yost_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor inhibition; no PK disposition parameters for secobarbital. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsecobarbital%5D&body=Drug%3A%20secobarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_secobarbital/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
