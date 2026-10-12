<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03B&quot;,&quot;href&quot;:&quot;atc/H03B.md&quot;},{&quot;label&quot;:&quot;potassium perchlorate&quot;}]"></div>

# potassium perchlorate

- **generic name:** potassium perchlorate
- **ATC codes:** `H03BC01`
- **DrugBank:** [DB09418](https://go.drugbank.com/drugs/DB09418) · **PubChem:** [CID 516900](https://pubchem.ncbi.nlm.nih.gov/compound/516900)
- **molar mass:** 138.549 g/mol (ClKO4) — DrugBank
- **groups:** approved, withdrawn

## About

Potassium perchlorate is an antithyroid drug used to treat overactive thyroid conditions. It has been withdrawn from use, largely because of serious safety concerns including blood disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422434](https://www.wikidata.org/wiki/Q422434) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:47 | 0:11 | 0/0/0 | 0/0/1 | 0/0/0 | 13,714/566 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Jarque_2018_tg_mCherry](drugs/drug_potassium_perchlorate/pd_Jarque_2018_tg_mCherry.md) | tg:mcherry fluorescence ← potassium_perchlorate · direct sigmoid Emax (Hill) effect | — | Jarque S et al., An automated screening method for detec…, PloS one (2018) | [10.1371/journal.pone.0203087](https://doi.org/10.1371/journal.pone.0203087) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jarque_2018 | irrelevant | 0 | 0 | The study is an in vivo screening assay measuring thyroid gene expression (goitrogenic potency/EC50) in zebrafish, not a pharmacokinetic study reporting clearance, volume, or rate constants for potassium perchlorate. |
| popPK | Prince_1980 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pertechnetate (a diagnostic agent) in the presence of potassium perchlorate, not for potassium perchlorate itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
