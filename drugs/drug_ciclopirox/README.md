<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;ciclopirox&quot;}]"></div>

# ciclopirox

- **generic name:** ciclopirox
- **ATC codes:** `D01AE14`, `G01AX12`
- **DrugBank:** [DB01188](https://go.drugbank.com/drugs/DB01188) · **PubChem:** [CID 2749](https://pubchem.ncbi.nlm.nih.gov/compound/2749)
- **molar mass:** 207.2689 g/mol (C12H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Ciclopirox is a topical antifungal used to treat fungal skin and nail infections such as tinea, seborrhoeic dermatitis, pityriasis versicolor, cutaneous candidiasis, and onychomycosis. It is an approved medicine, applied topically to the skin or nails, and is used fairly widely for these infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419468](https://www.wikidata.org/wiki/Q419468) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pant_2025_2_VACV](drugs/drug_ciclopirox/pd_Pant_2025_2_VACV.md) | VACV replication ← ciclopirox · direct sigmoid Emax (Hill) effect | — | Pant A et al., Ciclopirox suppresses poxvirus replicat…, bioRxiv : the preprint serv… (2025) | [10.1101/2025.07.24.666650](https://doi.org/10.1101/2025.07.24.666650) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciclopirox).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:38 | 0:43 | 0/0/0 | 1/0/0 | 0/0/0 | 28,800/692 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pant_2025 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism of action (iron chelation) in vitro and ex vivo, not on pharmacokinetic disposition parameters. |
| popPK | Pant_2025_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ciclopirox's antiviral activity against poxviruses and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Parker_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurite outgrowth where ciclopirox is used only as a comparator cell cycle inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Zangi_2022 | irrelevant | 1 | 0 | The study focuses on the antiviral activity and structural derivatives of ciclopirox, mentioning only qualitative in vivo clearance without reporting quantitative PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciclopirox%5D&body=Drug%3A%20ciclopirox%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciclopirox/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
