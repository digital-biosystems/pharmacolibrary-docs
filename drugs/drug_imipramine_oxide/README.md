<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;imipramine oxide&quot;}]"></div>

# imipramine oxide

- **generic name:** imipramine oxide
- **ATC codes:** `N06AA03`
- **DrugBank:** [DB13782](https://go.drugbank.com/drugs/DB13782) · **PubChem:** not captured
- **molar mass:** 296.414 g/mol (C19H24N2O) — DrugBank
- **groups:** experimental

## About

Imipramine oxide is a chemical compound classified as a non-selective monoamine reuptake inhibitor antidepressant, related to imipramine. It is considered experimental and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409428](https://www.wikidata.org/wiki/Q15409428) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:18 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 20,830/903 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | A review of tricyclic antidepressant plasma levels with no quantitative PK parameters for imipramine N-oxide, which is only mentioned as needing further study. |
| popPK | Bhagwat_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme activity (FMO) and does not report pharmacokinetic parameters for imipramine_oxide. |
| PD | Bhagwat_1996 | not_relevant | 0 | 0 | The paper describes in vitro enzymatic metabolism (FMO activity) of imipramine, not a pharmacodynamic exposure-response or dose-response relationship for imipramine oxide. |
| popPK | Callaghan_1999 | irrelevant | 0 | 0 | This is a review of olanzapine's pharmacokinetics; imipramine appears only as a co-administered interaction probe, with no PK parameters for imipramine or its N-oxide reported. |
| popPK | Dencker_1976 | irrelevant | 0 | 0 | The study investigates orthostatic reactions and ECG changes (pharmacodynamics/safety) rather than pharmacokinetic parameters, and no PK values are reported. |
| PD | Dencker_1976 | not_relevant | 2 | 1 | The study reports qualitative comparisons of orthostatic reactions and ECG changes across dose groups but explicitly states no statistically significant changes were found, providing no numeric PD parameters or concentration-effect curves. |
| popPK | Francis_2020 | irrelevant | 1 | 2 | In-vitro lysosomal sequestration study in NR8383 cells; no in-vivo PK disposition parameters (CL, V, half-life) for imipramine are reported, only a KpLysosome value. |
| popPK | Halliday_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CYP2D6 inhibition and synthetic strategies, not a pharmacokinetic study reporting disposition parameters for imipramine_oxide. |
| PD | Halliday_1997 | not_relevant | 3 | 2 | The paper reports an IC50 for imipramine (not imipramine oxide) and states that imipramine N-oxide has no inhibitory effect, but it does not provide a numeric PD parameter or concentration-effect curve for imipramine oxide. |
| PGx | Halliday_1997 | not_relevant | 2 | 5 | Reports imipramine N-oxide's inhibitory potency on CYP2D6 in vitro, not a gene variant/genotype effect on PK/PD of the drug. |
| popPK | Lee_2009 | irrelevant | 0 | 0 | The paper studies N,N-dimethylamphetamine N-oxidation kinetics; imipramine appears only as an FMO1 inhibitor, not as the subject drug, and no imipramine PK parameters are reported. |
| popPK | Nakajima_1989 | irrelevant | 1 | 0 | This is a rabbit physiology study of circulatory/catecholamine responses after long-term imipramine administration, with only a measured blood imipramine level and no PK disposition parameters (CL, V, half-life, model). |
| popPK | Tanino_2017 | irrelevant | 1 | 1 | In-vitro microsomal enzyme activity study in mice; imipramine is only a probe substrate, no PK parameters reported. |
| popPK | Ueda_2014 | irrelevant | 2 | 2 | This is an in vitro enzyme-kinetic study of imipramine metabolism in cultured rat aortic endothelial cells, not a pharmacokinetic/disposition study; the Km/Vmax/intrinsic clearance values are in Table 1 and figures not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
