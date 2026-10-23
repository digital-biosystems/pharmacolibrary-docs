<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;zanubrutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanubrutinib_Ou2021_reference&quot;,&quot;label&quot;:&quot;Ou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# zanubrutinib

- **generic name:** zanubrutinib
- **ATC codes:** `L01EL03`
- **DrugBank:** [DB15035](https://go.drugbank.com/drugs/DB15035) · **PubChem:** none
- **molar mass:** 471.561 g/mol (C27H29N5O3) — DrugBank
- **groups:** approved, investigational

## About

Zanubrutinib is a Bruton's tyrosine kinase inhibitor used to treat blood cancers, including mantle cell lymphoma and Waldenstrom macroglobulinemia. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q75192022](https://www.wikidata.org/wiki/Q75192022) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zanubrutinib | parent | 471.561 | C27H29N5O3 | DrugBank | — | Ou_2021 |

## Start here

> **Ou_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers and patients with B-cell malignancies, n = 632. [Run it in the simulator](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md?tab=Simulation) · [record](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 170 | L/h | 170 L/hour | healthy volunteers and patients with B-cell malignancies | 632 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ou_2021_reference](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md) |
| V | V1/F | 112 | L | 112 L | healthy volunteers and patients with B-cell malignancies | 632 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ou_2021_reference](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md) |
| ka | kabs | 0.526 | 1/h | 0.526 hour -1 | healthy volunteers and patients with B-cell malignancies | 632 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ou_2021_reference](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_beta</sub> | [Ou_2021_reference](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Ou YC et al., Population Pharmacokinetic Analysis of…, Clinical and translational… (2021) | [10.1111/cts.12948](https://doi.org/10.1111/cts.12948) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zanubrutinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: BLK (inhibitor), BMX (inhibitor), BTK (inhibitor), EGFR (inhibitor), ERBB2 (inhibitor), ERBB4 (inhibitor), FGR (inhibitor), FRK (inhibitor), ITK (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), LCK (inhibitor), PTK6 (inhibitor), TEC (inhibitor), TXK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:58 | 1:50 | 1/0/0 | 0/0/0 | 0/0/0 | 23,792/9,220 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ou_2021_2.pdf` | Ou YC et al., Rationale for once-daily or twice-daily…, Leukemia & lymphoma (2021) | popPK | 8 | [10.1080/10428194.2021.1929961](https://doi.org/10.1080/10428194.2021.1929961) | [34159878](https://pubmed.ncbi.nlm.nih.gov/34159878) | Human zanubrutinib population-PK analyses are described, but no numeric disposition parameter values are provided. |

<sub>queue written 2026-10-07 08:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ou_2021_2 | relevant | 8 | 0 | Human zanubrutinib population-PK analyses are described, but no numeric disposition parameter values are provided. |
| popPK | Tam_2021 | irrelevant | 1 | 0 | This is a clinical pharmacology review, and no numeric zanubrutinib disposition parameters are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzanubrutinib%5D&body=Drug%3A%20zanubrutinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zanubrutinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:56 UTC</sub>
