<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftizoxime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftizoxime_Karna1993_reference&quot;,&quot;label&quot;:&quot;Karna_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ceftizoxime

- **generic name:** ceftizoxime
- **ATC codes:** `J01DD07`
- **DrugBank:** [DB01332](https://go.drugbank.com/drugs/DB01332) · **PubChem:** [CID 6533629](https://pubchem.ncbi.nlm.nih.gov/compound/6533629)
- **molar mass:** 383.403 g/mol (C13H13N5O5S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ceftizoxime is a third-generation cephalosporin antibiotic used to treat bacterial infections such as sepsis, gonorrhea, urinary tract infections, pneumonia, and other gram-negative infections. It has been withdrawn from use in some markets, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1082945](https://www.wikidata.org/wiki/Q1082945) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ceftizoxime | parent | 383.403 | C13H13N5O5S2 | DrugBank | [6533629](https://pubchem.ncbi.nlm.nih.gov/compound/6533629) | Karna_1993, Murakawa_1980 |

## Start here

> **Karna_1993_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> premature newborns, n = &lt;|recursion_limit|&gt;. [Run it in the simulator](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md?tab=Simulation) · [record](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.897 ‡ | L/h | 27.1 ml/h/kg | premature newborns | &lt;\|recursion_limit\|&gt; | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Karna_1993_reference](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md) |
| V | V | 23.31 ‡ | L | 333 ml/kg | premature newborns | &lt;\|recursion_limit\|&gt; | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Karna_1993_reference](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md) |
| t½ | t1/2z | 8.5 | h | 8.5 h | premature newborns | &lt;\|recursion_limit\|&gt; | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Karna_1993_reference](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Karna_1993_reference](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Karna P et al., Population pharmacokinetics of ceftizox…, Developmental pharmacology… (1993) | [10.1159/000457554](https://doi.org/10.1159/000457554) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Murakawa_1980_reference](drugs/drug_ceftizoxime/Ceftizoxime_Murakawa1980_reference.md) | — | 1-compartment (no model) | 1 | Murakawa T et al., Pharmacokinetics of ceftizoxime in anim…, Antimicrobial agents and ch… (1980) | [10.1128/AAC.17.2.157](https://doi.org/10.1128/AAC.17.2.157) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ceftizoxime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: Peptidoglycan transpeptidase (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:43 | 1:50 | 1/1/0 | 0/0/0 | 0/0/0 | 88,890/6,493 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karna_1993.pdf` | Karna P et al., Population pharmacokinetics of ceftizox…, Developmental pharmacology… (1993) | popPK | 10 | [10.1159/000457554](https://doi.org/10.1159/000457554) | [7828445](https://pubmed.ncbi.nlm.nih.gov/7828445) | The paper reports explicit numeric population pharmacokinetic parameters (clearance, volume, half-life) for ceftizoxime in the evidence text. |
| `Facca_1998.pdf` | Facca B et al., Population pharmacokinetics of ceftizox…, Antimicrobial agents and ch… (1998) | popPK | 9 | [10.1128/AAC.42.7.1783](https://doi.org/10.1128/AAC.42.7.1783) | [9661021](https://pubmed.ncbi.nlm.nih.gov/9661021) | The paper describes a relevant population PK study for ceftizoxime in humans, but the evidence text only provides specific parameter values for a sub-population (additive clearance 1.6 L/h) and does not list the complete set of model parameters (e.g., base clearance, volume of distribution) which likely reside in the full text or tables not fully reproduced in the snippet. |

<sub>queue written 2026-10-07 10:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Facca_1998 | relevant | 9 | 3 | The paper describes a relevant population PK study for ceftizoxime in humans, but the evidence text only provides specific parameter values for a sub-population (additive clearance 1.6 L/h) and does not list the complete set of model parameters (e.g., base clearance, volume of distribution) which likely reside in the full text or tables not fully reproduced in the snippet. |
| popPK | Fuscaldi_2021 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of antimicrobial peptides, using 99mTc-labeled ceftizoxime only as a diagnostic imaging probe (scintigraphy) rather than as the subject of pharmacokinetic analysis. |
| popPK | Sánchez-Navarro_2001 | irrelevant | 1 | 0 | The paper is a retrospective PK/PD analysis of literature data and does not report primary quantitative disposition parameters (CL, V, ka) for ceftizoxime. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceftizoxime%5D&body=Drug%3A%20ceftizoxime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceftizoxime/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 10:42 UTC</sub>
