<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;proxyphylline&quot;}]"></div>

# proxyphylline

- **generic name:** proxyphylline
- **ATC codes:** `R03DA03`, `R03DB03`
- **DrugBank:** [DB13449](https://go.drugbank.com/drugs/DB13449) · **PubChem:** not captured
- **molar mass:** 238.247 g/mol (C10H14N4O3) — DrugBank
- **groups:** experimental

## About

Proxyphylline is a xanthine bronchodilator developed for obstructive airway diseases such as asthma. It is now considered an experimental drug and is not in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7252904](https://www.wikidata.org/wiki/Q7252904) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 6,646/469 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=proxyphylline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Selvig_1981.pdf` | Selvig K, Pharmacokinetics of proxyphylline in ad…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00568402](https://doi.org/10.1007/BF00568402) | [7202475](https://pubmed.ncbi.nlm.nih.gov/7202475) | The paper reports quantitative PK parameters (Vd, half-life, clearance) for proxyphylline in adults directly in the abstract. |
| `Kalla_1985.pdf` | Kalla M et al., [Pharmacokinetics and pharmacodynamics…, Monatsschrift Kinderheilkun… (1985) | popPK | 5 | not captured | [4047067](https://pubmed.ncbi.nlm.nih.gov/4047067) | The paper describes a pharmacokinetic study of proxyphylline in humans using compartmental models, but no numeric parameter values are provided in the extracted evidence. |

<sub>queue written 2026-10-07T22:08:54.211893+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borowiecki_2018 | irrelevant | 0 | 0 | The study reports in vitro and in vivo antimicrobial/anticancer activity (IC50/EC50) but contains no pharmacokinetic or disposition parameters. |
| popPK | Kalla_1985 | relevant | 5 | 0 | The paper describes a pharmacokinetic study of proxyphylline in humans using compartmental models, but no numeric parameter values are provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
