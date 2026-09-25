<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;teprenone&quot;}]"></div>

# teprenone

- **generic name:** teprenone
- **ATC codes:** `A02BX15`
- **DrugBank:** [DB15955](https://go.drugbank.com/drugs/DB15955)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:36 | 1:57 | 0/0/0 | 0/0/0 | 0/0/0 | 56,575/1,617 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ding_2007.pdf` | Ding L et al., HPLC-APCI-MS for the determination of t…, Journal of pharmaceutical a… (2007) | popPK | 8 | [10.1016/j.jpba.2007.03.021](https://doi.org/10.1016/j.jpba.2007.03.021) | [17482416](https://pubmed.ncbi.nlm.nih.gov/17482416) | The paper reports a pharmacokinetic study for teprenone with quantitative parameters (Cmax, t1/2, Tmax) present in the text, though it lacks explicit clearance or volume values. |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T08:36:02.316508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocchini_2016 | irrelevant | 0 | 0 | The paper studies STAT3 protein stability and function in AD-HIES, not the pharmacokinetics of teprenone. |
| PGx | Bocchini_2016 | not_relevant | 0 | 0 | The paper investigates the effect of chaperone modulators on STAT3 mutations in hyper-IgE syndrome and does not mention teprenone. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper focuses on the receptor binding profile of KB-5492, not teprenone, and does not report pharmacodynamic exposure-response or dose-response relationships for teprenone. |
| popPK | Iwakiri_2014 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of rabeprazole versus teprenone for peptic ulcer prevention, and it does not report any pharmacokinetic parameters for teprenone. |
| PD | Iwakiri_2014 | not_relevant | 0 | 0 | The paper is a clinical trial comparing rabeprazole and teprenone for ulcer prevention; it reports clinical efficacy rates but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters for teprenone. |
| popPK | Otani_2020 | irrelevant | 0 | 0 | The paper investigates the degradation and function of the MCT9 transporter in HEK293 cells and does not report pharmacokinetic parameters for teprenone. |
| popPK | Seno_1995 | irrelevant | 0 | 0 | The study focuses on gastric mucosal injury and mucus production, not the pharmacokinetic disposition parameters of teprenone. |
| popPK | Song_2008 | irrelevant | 0 | 0 | Teprenone is used only as an internal standard for vitamin K(1) analysis, not as the subject drug for PK parameter estimation. |
| popPK | Sun_2017 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of geranylgeranylacetone (GGA) in Alzheimer's disease models and does not involve teprenone or report any pharmacokinetic parameters. |
| popPK | Yue_2018 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of GDNF and geranylgeranylacetone (GGA) in a Parkinson's disease model and does not involve teprenone or report any pharmacokinetic parameters. |
| PD | Yue_2018 | not_relevant | 0 | 0 | The paper studies GDNF and geranylgeranylacetone (GGA), not teprenone, and reports qualitative/semi-quantitative efficacy data without exposure-response modeling or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
