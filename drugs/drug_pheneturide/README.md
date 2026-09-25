<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;pheneturide&quot;}]"></div>

# pheneturide

- **generic name:** pheneturide
- **ATC codes:** `N03AX13`
- **DrugBank:** [DB13362](https://go.drugbank.com/drugs/DB13362)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:37 | 1:49 | 0/0/0 | 0/0/0 | 0/0/0 | 5,109/927 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galeazzi_1979.pdf` | Galeazzi RL et al., Pharmacokinetics of phenylethylacetylur…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062387](https://doi.org/10.1007/BF01062387) | [529017](https://pubmed.ncbi.nlm.nih.gov/529017) | The abstract explicitly reports quantitative pharmacokinetic parameters for pheneturide, including half-life (54 hr, 40 hr) and total body clearance (2.6 L/hr). |

<sub>queue written 2026-09-10T01:37:07.692100+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Neels_2004 | irrelevant | 1 | 0 | The paper is a review of therapeutic drug monitoring for various anti-epileptic drugs, including pheneturide, but it does not report original quantitative pharmacokinetic parameter values for pheneturide. |
| PD | Neels_2004 | not_relevant | 1 | 0 | The paper is a general review of therapeutic drug monitoring for various anti-epileptic drugs and explicitly states that information on concentration-effect relationships is scarce, without providing specific numeric PD parameters for pheneturide. |
| popPK | Richens_1970 | irrelevant | 0 | 0 | The paper investigates calcium metabolism disturbances and vitamin D deficiency, not the pharmacokinetic disposition parameters of pheneturide. |
| PD | Richens_1970 | not_relevant | 1 | 0 | The paper reports a qualitative association between high dosage of pheneturide and hypocalcemia but provides no numeric dose-response parameters, concentration-effect curves, or PD model fits. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
