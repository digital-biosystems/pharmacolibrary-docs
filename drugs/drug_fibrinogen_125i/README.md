<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;fibrinogen (125I)&quot;}]"></div>

# fibrinogen (125I)

- **generic name:** fibrinogen (125I)
- **ATC codes:** `V09GB01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Fibrinogen I-125 is a radiolabelled fibrinogen used as a diagnostic radiopharmaceutical for imaging the cardiovascular system. It is classified as an iodinated contrast agent and has been described as an approved drug, though its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106830016](https://www.wikidata.org/wiki/Q106830016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:44 | 2:22 | 0/0/0 | 0/0/0 | 0/0/0 | 15,432/5,750 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_1977.pdf` | Lee J et al., Comparison of iodine monochloride and m…, The Journal of laboratory a… (1977) | popPK | 9 | not captured | [845483](https://pubmed.ncbi.nlm.nih.gov/845483) | Rabbit fibrinogen clearance is studied, but no numeric disposition parameter values appear in the provided evidence. |
| `Meyer_1978.pdf` | Meyer EC et al., Fibrinogen clearance from alveoli, Journal of applied physiolo… (1978) | popPK | 8 | [10.1152/jappl.1978.45.4.516](https://doi.org/10.1152/jappl.1978.45.4.516) | [711566](https://pubmed.ncbi.nlm.nih.gov/711566) | Dog study reports a numeric intra-alveolar degradation rate for 125I-fibrinogen. |

<sub>queue written 2026-10-07T19:43:37.379042+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1992 | irrelevant | 0 | 0 | 125I-fibrinogen is a tracer measuring thrombus accretion, not the subject of a pharmacokinetic analysis. |
| popPK | Baker_1985 | irrelevant | 0 | 0 | 125I-fibrinogen is only a comparator, with no quantitative disposition parameters reported for it. |
| popPK | Bent-Hansen_1991 | irrelevant | 1 | 0 | 125I-fibrinogen is only a plasma marker; reported transfer parameters are for albumin. |
| popPK | Bent-Hansen_1991_2 | irrelevant | 1 | 0 | 125I-fibrinogen is only a plasma reference; the reported quantitative disposition parameters are for albumin. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | This is a review of renal transplant imaging and provides no quantitative pharmacokinetic parameters for fibrinogen_125i. |
| popPK | Harwig_1975 | irrelevant | 1 | 0 | It mentions blood clearance in experimental animals but reports no numeric pharmacokinetic parameters. |
| popPK | Lee_1977 | relevant | 9 | 0 | Rabbit fibrinogen clearance is studied, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Owen_1976 | irrelevant | 0 | 0 | 125I-fibrinogen is used only to measure intravascular plasma volume; the reported disposition findings concern albumin. |
| popPK | Sherman_1982 | irrelevant | 1 | 0 | 125I-fibrinogen is administered, but no quantitative disposition parameters are reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
