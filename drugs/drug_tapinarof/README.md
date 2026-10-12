<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;tapinarof&quot;}]"></div>

# tapinarof

- **generic name:** tapinarof
- **ATC codes:** `D05AX07`
- **DrugBank:** [DB06083](https://go.drugbank.com/drugs/DB06083) · **PubChem:** not captured
- **molar mass:** 254.329 g/mol (C17H18O2) — DrugBank
- **groups:** approved, investigational

## About

Tapinarof is a topical antipsoriatic drug used to treat the skin condition psoriasis. It is an approved medicine and has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76386711](https://www.wikidata.org/wiki/Q76386711) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:40 | 0:39 | 0/0/0 | 2/0/0 | 0/0/0 | 12,693/3,550 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Zang_2016_PASI](drugs/drug_tapinarof/pd_Zang_2016_PASI.md) | PASI change rate ← benvitimod · direct Emax (saturable) effect | — | Zang YN et al., Use of a dose-response model to guide f…, International journal of cl… (2016) | [10.5414/CP202486](https://doi.org/10.5414/CP202486) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zhao_2025_AHR](drugs/drug_tapinarof/pd_Zhao_2025_AHR.md) | AHR agonist activity ← Tapinarof · stimulation effect | — | Zhao Y et al., Design, Optimization, and Biological Ev…, Journal of medicinal chemis… (2025) | [10.1021/acs.jmedchem.5c01060](https://doi.org/10.1021/acs.jmedchem.5c01060) |

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
| popPK | Jett_2022 | irrelevant | 2 | 3 | The human trial reports numeric AUC and Cmax, but no quantitative disposition parameters; half-life values are not provided. |
| popPK | Zang_2016 | irrelevant | 0 | 0 | This is an efficacy dose-response model, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper reports AHR activity and efficacy for tapinarof analogues, not quantitative pharmacokinetic parameters for tapinarof. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
