<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;dicloxacillin&quot;}]"></div>

# dicloxacillin

- **generic name:** dicloxacillin
- **ATC codes:** `J01CF01`
- **DrugBank:** [DB00485](https://go.drugbank.com/drugs/DB00485) · **PubChem:** [CID 18381](https://pubchem.ncbi.nlm.nih.gov/compound/18381)
- **molar mass:** 470.326 g/mol (C19H17Cl2N3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Dicloxacillin is a penicillin antibiotic used to treat staphylococcal infections, including cellulitis, osteomyelitis, pneumonia, urinary and upper respiratory tract infections. It is an approved antibiotic, also approved for veterinary use, and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2313471](https://www.wikidata.org/wiki/Q2313471) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:01 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 10,346/402 | einfracz / qwen3.8-27b | 6 | 0/1 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeSante_1980.pdf` | DeSante KA et al., Influence of sulfaethidole on the human…, Journal of clinical pharmac… (1980) | popPK | 8 | [10.1002/j.1552-4604.1980.tb02547.x](https://doi.org/10.1002/j.1552-4604.1980.tb02547.x) | [6893599](https://pubmed.ncbi.nlm.nih.gov/6893599) | The study reports pharmacokinetic evaluation of dicloxacillin in humans using a two-compartment model, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| `Nauta_1976.pdf` | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) | [1277730](https://pubmed.ncbi.nlm.nih.gov/1277730) | Reports quantitative PK parameters (T1/2, bioavailability) for dicloxacillin, but specific clearance/volume values from the 2-compartment model are not explicitly detailed in the provided abstract text. |

<sub>queue written 2026-10-07T10:01:35.614443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DeSante_1980 | relevant | 8 | 0 | The study reports pharmacokinetic evaluation of dicloxacillin in humans using a two-compartment model, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Dittert_1977 | irrelevant | 2 | 0 | The paper is a review that discusses the pharmacokinetic modeling of dicloxacillin in humans but does not present original quantitative parameter values or detailed data in the provided text. |
| popPK | Nauta_1976 | relevant | 8 | 4 | Reports quantitative PK parameters (T1/2, bioavailability) for dicloxacillin, but specific clearance/volume values from the 2-compartment model are not explicitly detailed in the provided abstract text. |
| popPK | Sjöstedt_2025 | irrelevant | 4 | 2 | The paper is primarily an in-vitro transporter study and PBPK modeling paper; while it develops a PBPK model for dicloxacillin, the specific quantitative compartmental PK parameters (CL, V, Q) are not provided in the text but are referenced in supplementary tables (S2, S3) and figures which are not included in the evidence. |
| popPK | Tsuji_1983 | relevant | 4 | 0 | The study reports a physiologically based pharmacokinetic model and tissue partition coefficients (Kp) for dicloxacillin in rats, but no specific numeric parameter values for dicloxacillin are provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
