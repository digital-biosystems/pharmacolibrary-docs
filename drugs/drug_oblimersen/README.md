<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;oblimersen&quot;}]"></div>

# oblimersen

- **generic name:** oblimersen
- **ATC codes:** `L01XX36`
- **DrugBank:** [DB13811](https://go.drugbank.com/drugs/DB13811) · **PubChem:** not captured
- **groups:** investigational

## About

Oblimersen is an investigational antisense oligonucleotide drug that was studied as a treatment for melanoma. It has never been approved; a marketing application in the European Union was refused, so it remains experimental.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7075165](https://www.wikidata.org/wiki/Q7075165) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:14 | 1:40 | 0/0/0 | 0/0/0 | 0/0/0 | 59,344/789 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oblimersen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: BCL2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marcucci_2005.pdf` | Marcucci G et al., Phase I study of oblimersen sodium, an…, Journal of clinical oncolog… (2005) | popPK | 9 | [10.1200/JCO.2005.09.118](https://doi.org/10.1200/JCO.2005.09.118) | [15824414](https://pubmed.ncbi.nlm.nih.gov/15824414) | The study reports Phase I PK/PD data for oblimersen in humans, including specific quantitative intracellular concentration values (17.0 vs 4.4 pmol/mg protein), although standard disposition parameters (CL, Vd, t1/2) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T21:14:25.988062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Advani_2011 | irrelevant | 2 | 0 | The paper is a review of oblimersen in CLL and does not contain original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| popPK | Chiu_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and delivery efficiency study in K562 cells, reporting no pharmacokinetic parameters (CL, V, T1/2) for oblimersen. |
| popPK | Hall_2013 | irrelevant | 0 | 0 | The paper is a review of Bcl-2 inhibitors and does not report quantitative pharmacokinetic parameters for oblimersen. |
| popPK | Marcucci_2003 | irrelevant | 0 | 0 | The paper studies G3139, not oblimersen, and does not report oblimersen PK parameters. |
| popPK | Marcucci_2005 | relevant | 9 | 1 | The study reports Phase I PK/PD data for oblimersen in humans, including specific quantitative intracellular concentration values (17.0 vs 4.4 pmol/mg protein), although standard disposition parameters (CL, Vd, t1/2) are not explicitly listed in the provided text. |
| popPK | Ploumaki_2023 | irrelevant | 0 | 0 | The paper is a clinical review of Bcl-2 inhibitors that mentions oblimersen in the context of trial outcomes (efficacy/toxicity) but does not provide original quantitative pharmacokinetic parameters (CL, V, Q, etc.). |
| popPK | Tarhini_2007 | irrelevant | 0 | 0 | The paper is a review article that summarizes efficacy and general pharmacology without providing original quantitative pharmacokinetic parameter values in the extracted evidence. |
| popPK | Tolcher_2005 | irrelevant | 3 | 1 | The study reports pharmacokinetic-pharmacodynamic correlation using steady-state concentration (Css) but does not provide standard quantitative disposition parameters such as clearance (CL), volume of distribution (V), or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
