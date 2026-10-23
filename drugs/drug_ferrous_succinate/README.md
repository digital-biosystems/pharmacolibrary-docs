<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous succinate&quot;}]"></div>

# ferrous succinate

- **generic name:** ferrous succinate
- **ATC codes:** `B03AA06`
- **DrugBank:** [DB14489](https://go.drugbank.com/drugs/DB14489) · **PubChem:** [CID 159252](https://pubchem.ncbi.nlm.nih.gov/compound/159252)
- **molar mass:** 171.917 g/mol (C4H4FeO4) — DrugBank
- **groups:** approved, investigational

## About

Ferrous succinate is an oral iron preparation (a hematinic) used to treat iron deficiency anemia. It is an approved oral bivalent iron medicine, though not widely used compared with other iron salts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27269230](https://www.wikidata.org/wiki/Q27269230) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ferrous_succinate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AHSP (unknown), CP (unknown), EGLN1 (unknown), FEN1 (unknown), FTH1 (unknown), FXN (unknown), HBA1 (unknown), HDAC8 (unknown), NEIL1 (unknown), NEIL2 (unknown), POLB (unknown), TF (unknown), TFRC (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:11 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 16,027/626 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2011.pdf` | Cao GY et al., Comparative bioavailability of ferrous…, Clinical therapeutics (2011) | popPK | 8 | [10.1016/j.clinthera.2011.10.028](https://doi.org/10.1016/j.clinthera.2011.10.028) | [22129567](https://pubmed.ncbi.nlm.nih.gov/22129567) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Tmax) for ferrous succinate in humans, although it is a bioequivalence study rather than a compartmental population PK model. |

<sub>queue written 2026-10-05 20:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper is a review of novel iron saccharide-iron (III) complexes and does not report original quantitative pharmacokinetic parameters for ferrous succinate. |
| popPK | Hurrell_1989 | irrelevant | 2 | 0 | The study reports relative iron absorption percentages (bioavailability) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ferrous succinate. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not ferrous_succinate. |
| PD | Jiao_2009 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of sirolimus, not pharmacodynamics (PD) or exposure-response relationships for ferrous succinate. |
| popPK | Yan_2025 | irrelevant | 2 | 0 | Ferrous succinate is used only as a control/comparator for polysaccharide-iron complexes, and no quantitative PK parameters (CL, V, etc.) for ferrous succinate are reported in the evidence. |
| popPK | Zhu_2017 | irrelevant | 0 | 0 | The study focuses on the bioavailability of a collagen-iron complex, using ferrous succinate only as a comparator, and does not report pharmacokinetic parameters for ferrous succinate. |
| popPK | Zillessen_1977 | irrelevant | 2 | 0 | The study measures iron absorption rates (bioavailability) rather than reporting compartmental pharmacokinetic parameters like clearance, volume of distribution, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bferrous_succinate%5D&body=Drug%3A%20ferrous_succinate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ferrous_succinate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
