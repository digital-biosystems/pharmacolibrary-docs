<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;relugolix&quot;}]"></div>

# relugolix

- **generic name:** relugolix
- **ATC codes:** `L02BX04`
- **DrugBank:** [DB11853](https://go.drugbank.com/drugs/DB11853) · **PubChem:** [CID 10348973](https://pubchem.ncbi.nlm.nih.gov/compound/10348973)
- **molar mass:** 623.64 g/mol (C29H27F2N7O5S) — DrugBank
- **groups:** approved, investigational

## About

Relugolix is a hormone antagonist used in the treatment of prostate cancer. It is an approved medicine, with one product authorised in the European Union for prostatic tumours.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21099000](https://www.wikidata.org/wiki/Q21099000) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:19 | 0:11 | 0/0/0 | 1/0/0 | 0/0/0 | 26,870/744 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Lee_2023_Testos](drugs/drug_relugolix/pd_Lee_2023_Testos.md) | testosterone ← relugolix · disease-progression model | — | Lee TY et al., Population PK and Semimechanistic PK/PD…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2743](https://doi.org/10.1002/cpt.2743) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | As-Sanie_2024 | irrelevant | 0 | 0 | The study is a clinical trial evaluating health-related quality of life and pain outcomes, not a pharmacokinetic study reporting disposition parameters for relugolix. |
| popPK | Kotadia_2026 | irrelevant | 4 | 3 | This is a bioequivalence study using non-compartmental analysis (NCA) to compare two formulations, reporting only comparative statistics (GMR, CIs) rather than absolute disposition parameters (CL, V, Q) or a population PK model; specific absolute PK values like mean CL or V are not present in the text, likely residing in the referenced Tables/Figures or Supplementary Material. |
| popPK | Lee_2023 | relevant | 9 | 3 | The paper reports a population PK model for relugolix with specific numeric values for covariate effects and IIV in the text, but the primary parameter estimates (CL, V, Ka) are located in Table S1 which is not included in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
