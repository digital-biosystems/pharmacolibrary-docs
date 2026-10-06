<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;oxyfedrine&quot;}]"></div>

# oxyfedrine

- **generic name:** oxyfedrine
- **ATC codes:** `C01DX03`
- **DrugBank:** [DB13398](https://go.drugbank.com/drugs/DB13398) · **PubChem:** not captured
- **molar mass:** 313.397 g/mol (C19H23NO3) — DrugBank
- **groups:** experimental

## About

Oxyfedrine is a cardiotonic and vasodilator drug, a beta-adrenergic agonist that was used in cardiac diseases such as coronary insufficiency. It is currently considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7115929](https://www.wikidata.org/wiki/Q7115929) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:11 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 44,176/1,797 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wetzelsberger_1995.pdf` | Wetzelsberger N et al., Relative bioavailability of DL-oxyfedri…, Methods and findings in exp… (1995) | popPK | 8 | not captured | [8531509](https://pubmed.ncbi.nlm.nih.gov/8531509) | The study reports relative bioavailability percentages (AUC and Cmax ratios) for oxyfedrine and its metabolite, but lacks absolute quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| `Brandt_1975.pdf` | Brandt W, [Stability of oxyfedrine in pharmacolog…, Arzneimittel-Forschung (1975) | pd | 4 | not captured | [1174320](https://www.ncbi.nlm.nih.gov/pubmed/1174320) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-06T11:10:36.006915+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonelli_1977 | irrelevant | 0 | 0 | The study focuses on the bioavailability of beta-acetyldigoxine, with oxyfedrine serving only as a co-administered component in a combination product, not as the subject of PK parameter estimation. |
| popPK | Brandt_1975 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Brandt_1975 | not_relevant | 0 | 0 | The paper focuses on the chemical stability of oxyfedrine in vitro, not on pharmacodynamic or exposure-response relationships. |
| popPK | Dings_2026 | irrelevant | 0 | 0 | The study models the pharmacodynamics of cafedrine/theodrenaline and ephedrine, not oxyfedrine, and explicitly states that no pharmacokinetic samples were obtained. |
| popPK | Flasch_1975 | irrelevant | 0 | 0 | The study focuses on the bioavailability of beta-acetyldigoxin and digoxin, with oxyfedrine appearing only as an excipient or co-formulated component in a tablet, not as the subject drug for PK analysis. |
| popPK | Kirsten_1998 | irrelevant | 0 | 0 | The paper is a review of vasodilators that mentions oxyfedrine only mechanistically without reporting any quantitative pharmacokinetic parameters. |
| popPK | Parratt_1974 | irrelevant | 0 | 0 | The study reports haemodynamic and pharmacodynamic effects (blood pressure, cardiac output, receptor blockade) in cats, but contains no pharmacokinetic parameters (CL, V, t1/2) for oxyfedrine. |
| popPK | Polster_1973 | irrelevant | 0 | 0 | The study is a pharmacological/toxicological investigation of cardiac function in animals and does not report any pharmacokinetic parameters for oxyfedrine. |
| PD | Polster_1973 | not_relevant | 2 | 1 | The paper reports qualitative changes in cardiac function (heart weight, intracellular potentials) after chronic dosing but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Sternitzke_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of action (hemodynamics and receptor activity) of oxyfedrine and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wetzelsberger_1995 | relevant | 8 | 2 | The study reports relative bioavailability percentages (AUC and Cmax ratios) for oxyfedrine and its metabolite, but lacks absolute quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| PD | Wetzelsberger_1995 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax) and relative bioavailability, but contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for oxyfedrine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
