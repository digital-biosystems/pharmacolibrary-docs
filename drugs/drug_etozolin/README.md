<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;etozolin&quot;}]"></div>

# etozolin

- **generic name:** etozolin
- **ATC codes:** `C03CX01`
- **DrugBank:** [DB08982](https://go.drugbank.com/drugs/DB08982) · **PubChem:** not captured
- **groups:** experimental

## About

Etozolin is a loop (high-ceiling) diuretic that has been used as a diuretic and antihypertensive drug. It is currently listed only as an experimental drug and does not appear to be in widespread clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5404861](https://www.wikidata.org/wiki/Q5404861) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 08:01 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 1,718/126 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knauf_1980.pdf` | Knauf H et al., Independent of etozolin elimination of…, Arzneimittel-Forschung (1980) | popPK | 8 | not captured | [7192116](https://pubmed.ncbi.nlm.nih.gov/7192116) | The study reports quantitative pharmacokinetic parameters (half-life) for etozolin in humans, with specific numeric values provided in the text. |
| `Knauf_1987.pdf` | Knauf H et al., Altered kinetics of etozolin and its ac…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3449068](https://pubmed.ncbi.nlm.nih.gov/3449068) | The study reports qualitative changes in PK parameters (half-life, AUC, Cmax) for etozolin in liver disease, but specific numeric values for clearance, volume, or absolute half-life are not provided in the text. |

<sub>queue written 2026-09-30T08:01:00.481645+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barthelmebs_1995 | irrelevant | 0 | 0 | The study focuses on renal hemodynamics and diuretic effects of ozolinone and its prodrug etozoline, not on pharmacokinetic disposition parameters for etozolin. |
| popPK | Battaglia_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure changes, not a pharmacokinetic study with disposition parameters. |
| PD | Battaglia_1990 | not_relevant | 2 | 1 | The paper reports clinical blood pressure changes for fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Beermann_1987 | irrelevant | 2 | 3 | The paper is a review summarizing published knowledge rather than an original study, and while it lists a half-life for etozolin, it lacks the comprehensive quantitative disposition parameters (CL, V, Q) required for population-PK extraction. |
| popPK | Donat_1981 | irrelevant | 0 | 0 | The paper is a clinical review of diuretic therapy for coronary insufficiency and contains no pharmacokinetic data or quantitative disposition parameters for etozolin. |
| PD | Donat_1981 | not_relevant | 0 | 0 | The text is a qualitative clinical review discussing the general mechanism and therapeutic use of diuretics, including etozoline, without providing any specific pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Greven_1977 | irrelevant | 1 | 0 | The study focuses on renal physiology and diuretic mechanism (tubular reabsorption) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for etozolin. |
| popPK | Greven_1978 | irrelevant | 0 | 0 | The study focuses on the renal pharmacodynamics of the metabolite ozolinone, not the pharmacokinetic disposition parameters of etozolin. |
| popPK | Herrmann_1977 | irrelevant | 0 | 0 | The paper is a toxicological study focusing on safety, fertility, and teratogenicity, and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Herrmann_1977 | not_relevant | 1 | 0 | The paper describes qualitative toxicological observations (dose-related increase in excretion) but provides no numeric PD parameters, concentration-effect curves, or quantitative exposure-response modeling. |
| popPK | Knauf_1984 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and the kinetics of the metabolite ozolinone, with no quantitative PK parameters (CL, V, etc.) reported for etozolin in the provided evidence. |
| PD | Knauf_1984 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (diuresis, BP reduction) and PK data for a metabolite, but does not provide numeric concentration-effect parameters (e.g., EC50, Emax) or a fitted PD model. |
| popPK | Knauf_1987 | relevant | 8 | 2 | The study reports qualitative changes in PK parameters (half-life, AUC, Cmax) for etozolin in liver disease, but specific numeric values for clearance, volume, or absolute half-life are not provided in the text. |
| PD | Knauf_1987 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax, half-life) in different patient populations and does not provide any pharmacodynamic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Lant_1986 | irrelevant | 0 | 0 | The text is a general review of diuretic pharmacology and does not report any quantitative pharmacokinetic parameters for etozolin. |
| PD | Lant_1986 | not_relevant | 1 | 0 | The text is a general review of diuretic pharmacology and mentions etozoline only in the context of stereospecific effects, without providing any numeric PD parameters or exposure-response data. |
| popPK | Scheitza_1977 | irrelevant | 0 | 0 | The study focuses on the diuretic pharmacodynamic effects (renal elimination of water and solutes) rather than pharmacokinetic disposition parameters (CL, V, ka) for etozolin. |
| popPK | Scheitza_1977_2 | irrelevant | 2 | 0 | The study reports renal clearance and functional effects (GFR, electrolyte elimination) rather than systemic pharmacokinetic parameters (CL, V, ka) for etozolin. |
| popPK | Schlatter_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic action on renal tubules and does not report pharmacokinetic parameters for etozolin. |
| PD | Schlatter_1983 | not_relevant | 4 | 5 | The paper reports that etozoline was ineffective at high concentrations (10^-4 - 10^-3 M) and does not provide specific numeric PD parameters (like EC50 or Emax) for etozoline, only for other furosemide-type compounds. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
