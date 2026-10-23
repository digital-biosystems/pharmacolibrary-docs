<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;givinostat&quot;}]"></div>

# givinostat

- **generic name:** givinostat
- **ATC codes:** `M09AX14`
- **DrugBank:** [DB12645](https://go.drugbank.com/drugs/DB12645) · **PubChem:** [CID 9804992](https://pubchem.ncbi.nlm.nih.gov/compound/9804992)
- **molar mass:** 421.497 g/mol (C24H27N3O4) — DrugBank
- **groups:** approved, investigational

## About

Givinostat is used to treat Duchenne muscular dystrophy. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426257](https://www.wikidata.org/wiki/Q426257) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mercuri_2026_QTcF](drugs/drug_givinostat/pd_Mercuri_2026_QTcF.md) | placebo-corrected, change-from-baseline QTcF ← givinostat · direct Emax (saturable) effect | — | Mercuri E et al., Thorough QT Study on the Effect of Ther…, Clinical pharmacology in dr… (2026) | [10.1002/cpdd.70047](https://doi.org/10.1002/cpdd.70047) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=givinostat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer, `CYP3A4` inducer/inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), JAK2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:33 | 0:16 | 0/0/0 | 1/0/0 | 0/0/0 | 51,293/914 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiorentini_2023.pdf` | Fiorentini F et al., Population pharmacokinetic-pharmacodyna…, Expert opinion on drug meta… (2023) | popPK | 10 | [10.1080/17425255.2023.2219839](https://doi.org/10.1080/17425255.2023.2219839) | [37306105](https://pubmed.ncbi.nlm.nih.gov/37306105) | The abstract confirms a population PK model for givinostat was developed, but specific numeric parameter values (CL, V, etc.) are not provided in the text, only simulation outcomes. |

<sub>queue written 2026-10-07 03:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2025 | relevant | 4 | 0 | The paper utilizes a givinostat PK-PD model for simulation, but it is a methods/application paper on reinforcement learning for dosing; specific numeric PK parameters (CL, V, etc.) are not provided in the text but are referenced as being in Supplementary Data (Data S2). |
| popPK | Fiorentini_2023 | relevant | 10 | 2 | The abstract confirms a population PK model for givinostat was developed, but specific numeric parameter values (CL, V, etc.) are not provided in the text, only simulation outcomes. |
| popPK | Mercuri_2026 | relevant | 7 | 3 | The study reports givinostat pharmacokinetics but key quantitative disposition parameters (AUC, CL/F, Vd/F) are explicitly located in Supplementary Table S1, with only Cmax and half-life partially available in the text. |
| popPK | Tosca_2024 | relevant | 5 | 1 | The paper utilizes a population PK model for givinostat in an in silico trial, but the quantitative PK parameter estimates (CL, V, etc.) are explicitly stated to be in supplementary material (Table S2.1/S2.2) which is not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgivinostat%5D&body=Drug%3A%20givinostat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_givinostat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
