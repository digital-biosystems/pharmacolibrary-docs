<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;caroverine&quot;}]"></div>

# caroverine

- **generic name:** caroverine
- **ATC codes:** `A03AX11`
- **DrugBank:** [DB13835](https://go.drugbank.com/drugs/DB13835)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:31 | 2:38 | 0/0/0 | 0/0/0 | 0/0/0 | 6,989/600 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=caroverine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2003.pdf` | Chen Z et al., Pharmacokinetics of caroverine in the i…, Audiology & neuro-otology (2003) | popPK | 8 | [10.1159/000067893](https://doi.org/10.1159/000067893) | [12566692](https://pubmed.ncbi.nlm.nih.gov/12566692) | The study investigates the pharmacokinetics of caroverine in guinea pigs, but the provided evidence contains only qualitative descriptions of concentration trends without any specific numeric parameter values. |

<sub>queue written 2026-09-18T08:31:01.523324+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2003 | relevant | 8 | 0 | The study investigates the pharmacokinetics of caroverine in guinea pigs, but the provided evidence contains only qualitative descriptions of concentration trends without any specific numeric parameter values. |
| popPK | Haymerle_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assessment of caroverine in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Raza_2018 | irrelevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying caroverine in formulations, not a pharmacokinetic study. |
| PD | Raza_2018 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying caroverine in pharmaceutical formulations and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Schwab_2004 | irrelevant | 0 | 0 | The study is a clinical trial on tinnitus therapy using local application of caroverine, reporting subjective symptom scores rather than pharmacokinetic parameters. |
| PD | Schwab_2004 | not_relevant | 1 | 0 | The paper reports only qualitative clinical outcomes (VAS scores) for caroverine in a small clinical trial without any concentration-effect data, PK/PD modeling, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
