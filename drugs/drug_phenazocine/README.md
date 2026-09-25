<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;phenazocine&quot;}]"></div>

# phenazocine

- **generic name:** phenazocine
- **ATC codes:** `N02AD02`
- **DrugBank:** [DB13606](https://go.drugbank.com/drugs/DB13606)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 21:22 | 3:34 | 0/0/0 | 0/0/0 | 0/0/0 | 20,072/665 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 5/0 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenazocine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: OPRD1 (inhibitor), OPRK1 (inhibitor), OPRM1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `King_1983.pdf` | King CT et al., Benzomorphan interactions with acetylch…, European journal of pharmac… (1983) | pd | 4 | [10.1016/0014-2999(83)90564-2](https://doi.org/10.1016/0014-2999(83)90564-2) | [6309536](https://www.ncbi.nlm.nih.gov/pubmed/6309536) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-20T21:22:36.978379+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Heyman_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception modulation in mice and does not report any pharmacokinetic parameters for phenazocine. |
| PD | Heyman_1989 | not_relevant | 3 | 0 | The paper describes a qualitative leftward shift in the dose-response curve for phenazocine (and others) but does not provide numeric PD parameters or extractable concentration-effect data in the text. |
| popPK | King_1983 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Matsuno_1999 | irrelevant | 0 | 0 | The paper is a review of sigma-receptor agonists' effects on learning and memory, and does not report pharmacokinetic parameters for phenazocine. |
| popPK | Noda_1999 | irrelevant | 0 | 0 | The paper is a review of sigma receptor pharmacology and stress models, and does not report pharmacokinetic parameters for phenazocine. |
| popPK | SMITH_1961 | irrelevant | 0 | 0 | The paper is a clinical study evaluating the efficacy and safety of phenazocine in children, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sheldon_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of opioid receptor modulation on bladder motility and does not report any pharmacokinetic parameters for phenazocine. |
| PD | Sheldon_1989 | not_relevant | 4 | 2 | The paper reports qualitative dose-response interactions (displacement/potentiation) for phenazocine but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for phenazocine specifically. |
| popPK | Tierney_1989 | irrelevant | 0 | 0 | The paper is a clinical case report regarding respiratory arrest in a patient with sleep apnea, and contains no pharmacokinetic parameters or quantitative disposition data for phenazocine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not mention phenazocine or report any pharmacokinetic parameters. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention phenazocine or report any pharmacodynamic or exposure-response parameters. |
| popPK | Wolozin_1982 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study of ketocyclazocine and other opiates, not a pharmacokinetic study of phenazocine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
