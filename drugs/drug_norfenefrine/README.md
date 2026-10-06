<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;norfenefrine&quot;}]"></div>

# norfenefrine

- **generic name:** norfenefrine
- **ATC codes:** `C01CA05`
- **DrugBank:** [DB13378](https://go.drugbank.com/drugs/DB13378) · **PubChem:** not captured
- **molar mass:** 153.181 g/mol (C8H11NO2) — DrugBank
- **groups:** experimental

## About

Norfenefrine is an alpha-adrenergic agonist, a trace amine also known as meta-octopamine, that has been used as a pharmaceutical drug acting on the cardiovascular system as a cardiac stimulant. It is currently classified as an experimental drug, with no authorised marketing in the European Union, so its present clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12746348](https://www.wikidata.org/wiki/Q12746348) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:49 | 0:49 | 0/0/0 | 0/0/0 | 0/0/0 | 27,319/321 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahda_2023 | irrelevant | 0 | 0 | The paper is a phytochemical and toxicity study of a plant extract where norfenefrine is merely identified as a constituent compound, with no pharmacokinetic data reported. |
| PD | Ahda_2023 | not_relevant | 0 | 0 | The paper reports IC50 values for the whole plant extract, not for the specific compound norfenefrine, and does not provide a concentration-effect relationship or PD parameters for norfenefrine itself. |
| popPK | Diernaes_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for urinary incontinence and does not report any pharmacokinetic parameters for norfenefrine. |
| PD | Diernaes_1989 | not_relevant | 1 | 0 | The paper reports a clinical outcome (pad weight) for a fixed dose but provides no concentration-effect data, PK parameters, or numeric PD model parameters. |
| popPK | McTavish_1989 | irrelevant | 0 | 0 | The paper is a review of midodrine, and norfenefrine is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | McTavish_1989 | not_relevant | 0 | 0 | The text is a qualitative review of midodrine that mentions norfenefrine only as a comparative agent without providing any numeric PD parameters or exposure-response data. |
| popPK | Müller_1985 | irrelevant | 0 | 0 | The paper describes hemodynamic effects of norfenefrine as a vasopressor but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PD | Müller_1985 | not_relevant | 1 | 0 | The text provides only qualitative descriptions of hemodynamic effects and pharmacological mechanisms without reporting any numeric concentration-effect data, dose-response curves, or PD parameters for norfenefrine. |
| popPK | Sakurai_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenoceptor effects on catecholamine secretion, not a pharmacokinetic study of norfenefrine. |
| PD | Sakurai_1983 | not_relevant | 0 | 0 | The paper explicitly states that norfenefrine did not inhibit catecholamine secretion or calcium uptake, and no numeric dose-response parameters are provided for it. |
| popPK | Wilsmann_1981 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects of amezinium, with norfenefrine serving only as a reference comparator for pharmacodynamic actions, and no PK parameters for norfenefrine are reported. |
| PD | Wilsmann_1981 | not_relevant | 2 | 1 | The paper focuses on amezinium; norfenefrine is used only as a qualitative reference for alpha-sympathomimetic action without specific numeric PD parameters or dose-response curves provided for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
