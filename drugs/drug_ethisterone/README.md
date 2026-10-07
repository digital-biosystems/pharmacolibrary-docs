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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rose_1988_growth_of_human_endometrial_cells](drugs/drug_ethisterone/pd_Rose_1988_growth_of_human_endometrial_cells.md) | growth of human endometrial cells ← ethisterone · model not identified | — | Rose GL et al., The inhibitory effects of danazol, dana…, Fertility and sterility (1988) | [10.1016/s0015-0282(16)59706-4](https://doi.org/10.1016/s0015-0282(16)59706-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
