<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03X&quot;,&quot;href&quot;:&quot;atc/G03X.md&quot;},{&quot;label&quot;:&quot;gestrinone&quot;}]"></div>

# gestrinone

- **generic name:** gestrinone
- **ATC codes:** `G03XA02`
- **DrugBank:** [DB11619](https://go.drugbank.com/drugs/DB11619) · **PubChem:** [CID 27812](https://pubchem.ncbi.nlm.nih.gov/compound/27812)
- **molar mass:** 308.4141 g/mol (C21H24O2) — DrugBank
- **groups:** approved

## About

Gestrinone is a synthetic steroid hormone (an antigonadotropin/progestin) that has been used as an oral contraceptive and in the treatment of gynaecological conditions such as endometriosis. It is an approved drug, but it does not appear to be authorised in the European Union and is used only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3761406](https://www.wikidata.org/wiki/Q3761406) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:05 | 1:32 | 0/0/0 | 1/0/0 | 0/0/0 | 18,402/831 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Markiewicz_1992_alkaline_phosphatase_activity](drugs/drug_gestrinone/pd_Markiewicz_1992_alkaline_phosphatase_activity.md) | alkaline phosphatase activity ← gestrinone · direct sigmoid Emax (Hill) effect | — | Markiewicz L et al., Intrinsic estrogenicity of some progest…, The Journal of steroid bioc… (1992) | [10.1016/0960-0760(92)90224-7](https://doi.org/10.1016/0960-0760(92)90224-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gestrinone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), GNRHR (target), NR3C1 (target), PGR (target), SHBG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fedele_1990 | irrelevant | 0 | 0 | The paper is a histological/ultrastructural study evaluating endometrial changes during gestrinone treatment and does not report any quantitative pharmacokinetic parameters. |
| popPK | Malavasi_2025 | irrelevant | 2 | 0 | This is a study protocol for a future clinical trial; it outlines plans to measure PK parameters but contains no reported quantitative disposition data, only background information on oral gestrinone half-life. |
| popPK | Markiewicz_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring intrinsic estrogenicity (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Markiewicz_1994 | irrelevant | 0 | 0 | The paper reports in vitro bioassay data (EC50, efficacy) for receptor activity, not pharmacokinetic disposition parameters for gestrinone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
