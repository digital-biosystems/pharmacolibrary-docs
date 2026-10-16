<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;valoctocogene roxaparvovec&quot;}]"></div>

# valoctocogene roxaparvovec

- **generic name:** valoctocogene roxaparvovec
- **ATC codes:** `B02BD15`
- **DrugBank:** [DB15561](https://go.drugbank.com/drugs/DB15561) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Valoctocogene roxaparvovec is a gene therapy used to treat hemophilia A. It is authorised in the European Union as a gene-therapy medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q107391591](https://www.wikidata.org/wiki/Q107391591) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:01 | 1:48 | 0/1/0 | 0/0/0 | 0/0/0 | 94,166/2,089 | einfracz / qwen3.8-27b | 10 | 1/8 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cao_2025_reference](drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Cao2025_reference.md) | — | 2-compartment (no model) | 4 | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=valoctocogene_roxaparvovec).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Coagulation factor VIII (F8) (gene replacement).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahlangu_2023.pdf` | Mahlangu J et al., Two-Year Outcomes of Valoctocogene Roxa…, The New England journal of… (2023) | popPK | 9 | [10.1056/NEJMoa2211075](https://doi.org/10.1056/NEJMoa2211075) | [36812433](https://pubmed.ncbi.nlm.nih.gov/36812433) | The study reports a quantitative pharmacokinetic parameter (model-estimated half-life of 123 weeks) for the transgene-derived factor VIII production system resulting from valoctocogene roxaparvovec administration in humans. |

<sub>queue written 2026-10-14T19:01:11.409031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 2 | 2 | The study reports biodistribution and shedding data (vector DNA concentrations and clearance times in various matrixes) rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) derived from a compartmental or population PK model. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not valoctocogene roxaparvovec, which is only mentioned as a context for anti-AAV antibodies. |
| popPK | Long_2019 | irrelevant | 1 | 1 | The study reports pharmacodynamic data (FVIII-SQ protein expression levels) rather than pharmacokinetic disposition parameters (CL, V, ka) for valoctocogene roxaparvovec. |
| popPK | Long_2021 | irrelevant | 0 | 0 | The paper focuses exclusively on immunogenicity (antibody titers and cellular responses) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for valoctocogene roxaparvovec. |
| popPK | Long_2024 | irrelevant | 0 | 0 | The paper focuses on immunogenicity (antibodies and cellular immune responses) and safety outcomes, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Mihaila_2023 | irrelevant | 0 | 0 | The paper is a review focused on emicizumab and general gene therapy concepts, and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Puzzo_2025 | irrelevant | 0 | 0 | The paper is a general review of liver-directed gene therapy and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Rana_2025 | irrelevant | 0 | 0 | The paper is a narrative review of clinical trials focusing on efficacy and immunogenicity, and it does not report quantitative pharmacokinetic parameters or compartmental models for valoctocogene roxaparvovec. |
| popPK | Serrafi_2026 | irrelevant | 0 | 0 | The paper is a narrative review of gene therapy in hemophilia that discusses clinical outcomes and mechanisms but does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) for valoctocogene roxaparvovec. |
| popPK | Suoranta_2022 | irrelevant | 0 | 0 | The paper is a review on AAV vector safety and engineering strategies, containing no pharmacokinetic data or quantitative disposition parameters for valoctocogene roxaparvovec. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:01 UTC</sub>
