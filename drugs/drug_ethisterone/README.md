<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03D&quot;,&quot;href&quot;:&quot;atc/G03D.md&quot;},{&quot;label&quot;:&quot;ethisterone&quot;}]"></div>

# ethisterone

- **generic name:** ethisterone
- **ATC codes:** `G03DC04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ethisterone is a progestogen that was used to treat conditions such as infertility, endometriosis, and amenorrhea. It is an older progestogen that has largely been replaced by newer agents and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5403717](https://www.wikidata.org/wiki/Q5403717) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:41 | 0:42 | 0/0/0 | 1/0/0 | 0/0/0 | 20,684/679 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rose_1988_growth_of_human_endometrial_cells](drugs/drug_ethisterone/pd_Rose_1988_growth_of_human_endometrial_cells.md) | growth of human endometrial cells ← ethisterone · model not identified | — | Rose GL et al., The inhibitory effects of danazol, dana…, Fertility and sterility (1988) | [10.1016/s0015-0282(16)59706-4](https://doi.org/10.1016/s0015-0282(16)59706-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dowsett_1986 | irrelevant | 0 | 0 | The study focuses on the effect of danazol/gestrinone on SHBG binding capacity, not the pharmacokinetic parameters (CL, V, t1/2) of ethisterone. |
| PGx | Habault_2023 | not_relevant | 0 | 0 | The study reports a novel chemical scaffold (peptoid conjugate) for drug delivery and mechanism of action, but does not investigate human genetic variation or genotype-phenotype correlations. |
| popPK | Kosano_2002 | irrelevant | 0 | 0 | The study investigates the mechanism of steroid-induced cataract formation in chick embryos and lens cultures, not the pharmacokinetics or disposition of ethisterone. |
| popPK | Levine_2012 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of ethisterone conjugates in cell lines (in vitro) and does not report pharmacokinetic disposition parameters. |
| popPK | Pathak_1993 | irrelevant | 0 | 0 | no_text gate: only 34 chars of text extracted (&lt; 400) |
| popPK | Rose_1988 | irrelevant | 0 | 0 | The paper is an in-vitro study on endometrial cell growth and does not report pharmacokinetic parameters for ethisterone. |
| popPK | Tamaya_1984 | irrelevant | 0 | 0 | The study focuses on danazol binding to receptors in human endometrium and does not involve ethisterone or report pharmacokinetic parameters. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper reports pharmacological and pharmacokinetic properties of a new compound (MPC6) but does not investigate the impact of genetic variants on ethisterone's PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
