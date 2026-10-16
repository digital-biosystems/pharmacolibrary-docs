<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;lascufloxacin&quot;}]"></div>

# lascufloxacin

- **generic name:** lascufloxacin
- **ATC codes:** `J01MA25`
- **DrugBank:** [DB20002](https://go.drugbank.com/drugs/DB20002) · **PubChem:** not captured
- **molar mass:** 439.435 g/mol (C21H24F3N3O4) — DrugBank
- **groups:** experimental

## About

Lascufloxacin is a fluoroquinolone antibacterial that has been investigated for treating respiratory tract infections. It appears to remain experimental and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27261317](https://www.wikidata.org/wiki/Q27261317) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:11 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 44,376/607 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Totsuka_2020.pdf` | Totsuka K et al., Pharmacokinetic study of lascufloxacin…, Journal of infection and ch… (2020) | popPK | 8 | [10.1016/j.jiac.2019.09.010](https://doi.org/10.1016/j.jiac.2019.09.010) | [31882385](https://pubmed.ncbi.nlm.nih.gov/31882385) | The study is a PK trial for lascufloxacin but the provided abstract only lists cumulative factors and relative changes (e.g., Cmax ratio) without specific numeric values for CL, V, t1/2, or ka. |
| `Furuie_2018.pdf` | Furuie H et al., Intrapulmonary Pharmacokinetics of Lasc…, Antimicrobial agents and ch… (2018) | popPK | 5 | [10.1128/AAC.02169-17](https://doi.org/10.1128/AAC.02169-17) | [29339391](https://pubmed.ncbi.nlm.nih.gov/29339391) | The study reports PK descriptors (Cmax, AUC, Tmax) for lascufloxacin in humans, but lacks quantitative disposition parameters like clearance (CL) or volume (V). |

<sub>queue written 2026-10-14T23:11:04.482050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of antimicrobial PK in the elderly and does not contain any data or parameters for lascufloxacin. |
| popPK | Furuie_2018 | relevant | 5 | 2 | The study reports PK descriptors (Cmax, AUC, Tmax) for lascufloxacin in humans, but lacks quantitative disposition parameters like clearance (CL) or volume (V). |
| popPK | Hagihara_2021 | irrelevant | 0 | 0 | The study is an in vivo pharmacodynamic efficacy assessment in mice, reporting bacterial counts rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Herbert_2022 | irrelevant | 2 | 1 | This is a review of fluoroquinolones for keratitis that discusses lascufloxacin primarily in terms of antimicrobial spectrum and medicinal properties, without providing specific quantitative population PK parameter values (CL, V, Q) in the evidence. |
| popPK | Hirai_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on the efficacy of lascufloxacin for treating Legionella pneumonia and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Hosoi_2026 | relevant | 8 | 4 | The study reports PK parameters (ka, Vd, CL) for lascufloxacin in mice, but the specific numeric values are in supplementary Tables S1-S3 which are not included in the evidence. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review on pyrrolidine in antibacterial drug discovery and does not contain pharmacokinetic data for lascufloxacin. |
| popPK | Totsuka_2020 | relevant | 8 | 2 | The study is a PK trial for lascufloxacin but the provided abstract only lists cumulative factors and relative changes (e.g., Cmax ratio) without specific numeric values for CL, V, t1/2, or ka. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | The paper is a review of patient access and marketing authorization timelines for new antibiotics in the EU/EEA and does not contain any pharmacokinetic data or parameters for lascufloxacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
