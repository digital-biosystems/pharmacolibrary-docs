<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ethacizine&quot;}]"></div>

# ethacizine

- **generic name:** ethacizine
- **ATC codes:** `C01BC09`
- **DrugBank:** [DB13645](https://go.drugbank.com/drugs/DB13645)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 09:53 | 3:17 | 0/0/0 | 0/0/0 | 0/0/0 | 4,333/2,159 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beloborodov_1986.pdf` | Beloborodov VL et al., [Clinical pharmacokinetics and hemodyna…, Farmakologiia i toksikologi… (1986) | popPK | 9 | not captured | [3770172](https://pubmed.ncbi.nlm.nih.gov/3770172) | The paper describes a clinical PK study of ethacizine with a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| `Ratner_1992.pdf` | Ratner EI et al., Effect of moracizine and ethacizine on…, Arzneimittel-Forschung (1992) | pd | 4 | not captured | [1326968](https://www.ncbi.nlm.nih.gov/pubmed/1326968) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T09:53:09.610347+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beloborodov_1986 | relevant | 9 | 0 | The paper describes a clinical PK study of ethacizine with a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Kedrov_1988 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (anti-arrhythmic effects) in rabbits and does not report any pharmacokinetic parameters for ethacizine. |
| PD | Kedrov_1988 | not_relevant | 1 | 0 | The text provides only a qualitative summary of pharmacodynamic changes in an animal model without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Lozinskiĭ_1990 | irrelevant | 1 | 0 | The study focuses on Bonnecor (disopyramide), not ethacizine, and only mentions ethacizine as a comparator without providing its specific quantitative PK parameters. |
| PD | Lozinskiĭ_1990 | not_relevant | 3 | 2 | The text mentions that ranges of effective concentrations are given but does not provide specific numeric PD parameters (like Emax, EC50) or a quantitative concentration-effect curve in the provided abstract. |
| popPK | Ratner_1992 | irrelevant | 0 | 0 | The paper focuses on the effect of ethacizine on calcium channels and proteins, which is a mechanistic study, not a pharmacokinetic study reporting disposition parameters. |
| PD | Ratner_1992 | not_relevant | 0 | 0 | The paper investigates the effect of ethacizine on calcium channel receptors and binding proteins, which is a pharmacological mechanism study, not a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response or dose-response analysis with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
