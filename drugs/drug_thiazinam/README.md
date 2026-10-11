<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;thiazinam&quot;}]"></div>

# thiazinam

- **generic name:** thiazinam
- **ATC codes:** `R06AD06`
- **DrugBank:** [DB13420](https://go.drugbank.com/drugs/DB13420) · **PubChem:** not captured
- **molar mass:** 299.46 g/mol (C18H23N2S) — DrugBank
- **groups:** experimental

## About

Thiazinam is a phenothiazine-derivative antihistamine for systemic use, intended for allergic and related respiratory conditions. It appears only as an experimental compound, with no marketing authorisation, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7783885](https://www.wikidata.org/wiki/Q7783885) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:45 | 0:36 | 0/0/0 | 0/0/1 | 0/0/0 | 19,473/1,630 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Holford_1987_FEV1](drugs/drug_thiazinam/pd_Holford_1987_FEV1.md) | bronchodilator response (expressed as % predicted FEV1) ← thiazinamium · direct sigmoid Emax (Hill) effect | — | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Holford_1987_HR](drugs/drug_thiazinam/pd_Holford_1987_HR.md) | anticholinergic activity, measured by the change in heart rate ← thiazinamium · direct sigmoid Emax (Hill) effect | — | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Holford_1987.pdf` | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) | [2891535](https://pubmed.ncbi.nlm.nih.gov/2891535) | The abstract explicitly provides quantitative pharmacokinetic parameters (clearance, volume, rate constants) for thiazinamium in human patients. |
| `Jonkman_1983.pdf` | Jonkman JH et al., Clinical pharmacokinetics of intramuscu…, International journal of cl… (1983) | popPK | 10 | not captured | [6138313](https://pubmed.ncbi.nlm.nih.gov/6138313) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-lives, volumes of distribution, and clearance for thiazinamium in humans. |
| `Labat_1989.pdf` | Labat C et al., Effects of thiazinamium chloride on hum…, Respiration; international… (1989) | pd | 4 | [10.1159/000195738](https://doi.org/10.1159/000195738) | [2574491](https://www.ncbi.nlm.nih.gov/pubmed/2574491) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07T21:45:10.324728+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2)</sub>
