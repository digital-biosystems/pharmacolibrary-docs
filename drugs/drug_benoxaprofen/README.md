<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;benoxaprofen&quot;}]"></div>

# benoxaprofen

- **generic name:** benoxaprofen
- **ATC codes:** `M01AE06`
- **DrugBank:** [DB04812](https://go.drugbank.com/drugs/DB04812) · **PubChem:** [CID 39941](https://pubchem.ncbi.nlm.nih.gov/compound/39941)
- **molar mass:** 301.724 g/mol (C16H12ClNO3) — DrugBank
- **groups:** approved, withdrawn

## About

Benoxaprofen is a non-steroidal anti-inflammatory drug of the propionic acid type that was used to treat inflammatory and rheumatic conditions, and also had antipsoriatic use. It was withdrawn from the market after being linked to serious, sometimes fatal liver and kidney side effects, especially in elderly patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420082](https://www.wikidata.org/wiki/Q420082) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chatfield_1977_reference](drugs/drug_benoxaprofen/Benoxaprofen_Chatfield1977_reference.md) | — | 1-compartment (no model) | 0 | Chatfield DH et al., Pharmacokinetic studies with benoxaprof…, British journal of clinical… (1977) | [10.1111/j.1365-2125.1977.tb00789.x](https://doi.org/10.1111/j.1365-2125.1977.tb00789.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benoxaprofen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACAT1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:42 | 3:27 | 0/1/0 | 0/0/0 | 0/0/0 | 79,001/1,303 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chatfield_1977.pdf` | Chatfield DH et al., Pharmacokinetic studies with benoxaprof…, British journal of clinical… (1977) | popPK | 10 | [10.1111/j.1365-2125.1977.tb00789.x](https://doi.org/10.1111/j.1365-2125.1977.tb00789.x) | [303114](https://pubmed.ncbi.nlm.nih.gov/303114) | The evidence contains specific quantitative parameters for benoxaprofen in humans, including half-lives and volumes of distribution, derived from a two-compartment model. |
| `Boctor_1986.pdf` | Boctor AM et al., Meclofenamate sodium is an inhibitor of…, Prostaglandins, leukotriene… (1986) | pd | 4 | [10.1016/0262-1746(86)90190-3](https://doi.org/10.1016/0262-1746(86)90190-3) | [3020588](https://www.ncbi.nlm.nih.gov/pubmed/3020588) | metadata signals extractable PD data (IC50) |
| `Katayama_1987.pdf` | Katayama K et al., In vitro effect of N-methoxy-3-(3,5-dit…, Agents and actions (1987) | pd | 4 | [10.1007/BF01966487](https://doi.org/10.1007/BF01966487) | [2825479](https://www.ncbi.nlm.nih.gov/pubmed/2825479) | metadata signals extractable PD data (IC50) |
| `Miyazawa_1985.pdf` | Miyazawa K et al., Effects of some non-steroidal anti-infl…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.38.199](https://doi.org/10.1254/jjp.38.199) | [3928952](https://www.ncbi.nlm.nih.gov/pubmed/3928952) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 00:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Schladitz-Keil_1986 | irrelevant | 0 | 0 | The study is about trospium chloride, and benoxaprofen is only mentioned as a derivatization reagent for the assay. |
| PGx | Southwood_2007 | not_relevant | 0 | 0 | The paper investigates the genotoxicity mechanism of acyl glucuronides in HEK293 cells and does not report a pharmacogenomic effect (gene variant influence) on a specific PK or PD parameter for benoxaprofen. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenoxaprofen%5D&body=Drug%3A%20benoxaprofen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benoxaprofen/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:42 UTC</sub>
