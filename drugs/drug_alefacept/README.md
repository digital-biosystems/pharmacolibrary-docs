<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;alefacept&quot;}]"></div>

# alefacept

- **generic name:** alefacept
- **ATC codes:** `L04AA15`
- **DrugBank:** [DB00092](https://go.drugbank.com/drugs/DB00092) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Alefacept is an immunosuppressant fusion protein used as a dermatologic drug, notably for the skin condition acropustulosis. The drug was approved but has since been withdrawn and is no longer available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3609421](https://www.wikidata.org/wiki/Q3609421) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:36 | 1:05 | 0/0/0 | 0/2/0 | 0/0/0 | 22,075/752 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Cooper_2003_CD3_induced_T_cell_proliferation](drugs/drug_alefacept/pd_Cooper_2003_CD3_induced_T_cell_proliferation.md) | CD3-induced T cell proliferation ← alefacept · inhibition effect | — | Cooper JC et al., Alefacept selectively promotes NK cell-…, European journal of immunol… (2003) | [10.1002/eji.200323586](https://doi.org/10.1002/eji.200323586) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Jois_2006_n_a](drugs/drug_alefacept/pd_Jois_2006_n_a.md) | n/a ← alefacept · inhibition effect | — | Jois SD et al., Targeting T-cell adhesion molecules for…, Current pharmaceutical desi… (2006) | [10.2174/138161206777947696](https://doi.org/10.2174/138161206777947696) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldo_2015 | irrelevant | 0 | 0 | This is a review article covering the indications, mechanisms, and safety of chimeric fusion proteins; it does not report quantitative pharmacokinetic parameters for alefacept. |
| PGx | Chiu_2012 | not_relevant | 2 | 0 | The paper reports an association between HLA genotypes and clinical therapeutic efficacy (response) for alefacept, but does not quantify specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor occupancy) or provide fitted effect sizes. |
| popPK | Frampton_2003 | irrelevant | 0 | 0 | The text is a clinical efficacy and safety summary of alefacept for psoriasis and contains no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Krueger_2004 | irrelevant | 0 | 0 | The paper is a clinical review of alefacept's efficacy in psoriasis and does not report quantitative pharmacokinetic disposition parameters. |
| popPK | Liu_2004 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety for psoriasis, containing no pharmacokinetic parameters or quantitative disposition data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
