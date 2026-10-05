<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;benfluorex&quot;}]"></div>

# benfluorex

- **generic name:** benfluorex
- **ATC codes:** `A10BX06`
- **DrugBank:** [DB09022](https://go.drugbank.com/drugs/DB09022) · **PubChem:** [CID 2318](https://pubchem.ncbi.nlm.nih.gov/compound/2318)
- **molar mass:** 351.3628 g/mol (C19H20F3NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Benfluorex was a blood glucose lowering drug used to treat diabetes, and also acted as an anorectic and hypolipidemic agent. It was approved at one time but has since been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421695](https://www.wikidata.org/wiki/Q421695) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:20 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 53,397/1,764 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andel_2017 | irrelevant | 0 | 0 | The paper is a study on conflict management in operating rooms and contains no pharmacokinetic data for benfluorex. |
| popPK | Baron_1986 | irrelevant | 0 | 0 | The paper is a social psychology methodological review regarding moderator and mediator variables and contains no pharmacokinetic data for benfluorex. |
| popPK | Bone_1991 | irrelevant | 0 | 0 | The paper is a review on the pathogenesis of sepsis and does not contain any pharmacokinetic data for benfluorex. |
| popPK | Brindley_1988 | irrelevant | 0 | 0 | The study investigates the metabolic effects of benfluorex on lipids and glucose in rats, not the pharmacokinetic disposition parameters (CL, V, ka) of benfluorex itself. |
| popPK | Brindley_1992 | irrelevant | 0 | 0 | The paper is a review of the mode of action and metabolic effects of benfluorex, containing no quantitative pharmacokinetic parameters. |
| popPK | Böhnke_2016 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Danis_1994 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| PD | De_1980 | not_relevant | 0 | 0 | The study reports a lack of significant interaction (null result) with no numeric PD parameters, concentration-effect curves, or dose-response modeling provided. |
| popPK | Decastello_2008 | irrelevant | 0 | 0 | The paper discusses legal mediation in public health and contains no pharmacokinetic data for benfluorex. |
| PD | Di_1990 | not_relevant | 1 | 0 | The paper reports clinical efficacy comparisons of fixed-dose combinations but provides no concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for benfluorex. |
| popPK | Dinarello_1984 | irrelevant | 0 | 0 | The paper is a review of Interleukin-1 and contains no pharmacokinetic data for benfluorex. |
| popPK | Feyisetan_2020 | irrelevant | 0 | 0 | The paper is a sociological study on sexual health negotiation in West Africa and contains no pharmacokinetic data for benfluorex. |
| popPK | Formela_1995 | irrelevant | 0 | 0 | The paper is a review of inflammatory mediators in acute pancreatitis and contains no pharmacokinetic data for benfluorex. |
| popPK | Ganihar_1994 | irrelevant | 0 | 0 | The paper is a neurophysiological study on cockroach behavior and contains no pharmacokinetic data for benfluorex. |
| popPK | Gundel_1991 | irrelevant | 0 | 0 | The study investigates antigen-induced mediator release in primates and does not involve benfluorex or its pharmacokinetics. |
| popPK | Harris_2018 | irrelevant | 0 | 0 | The study is a mechanistic toxicology investigation in chick embryos examining gene expression and cardiac function, not a pharmacokinetic study of benfluorex. |
| popPK | Hartasanchez_2022 | irrelevant | 0 | 0 | The paper is a qualitative study on Shared Decision Making (SDM) process measures and contains no pharmacokinetic data or mention of benfluorex. |
| popPK | Hughes_1996 | irrelevant | 0 | 0 | The paper is about negotiation skills in clinical management and contains no pharmacokinetic data for benfluorex. |
| popPK | Kennedy_1997 | irrelevant | 0 | 0 | The paper is an article about workplace motivation and financial set points, containing no pharmacokinetic data for benfluorex. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on HNF4α agonists (NCT/NFT) for liver fat clearance, where benfluorex is only mentioned as a weak comparator/structural analog, and no pharmacokinetic parameters for benfluorex are reported. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper is a study on nurse behavior and violence in emergency departments, unrelated to benfluorex pharmacokinetics. |
| popPK | Lim_2022 | irrelevant | 0 | 0 | The paper is a retrospective study on medico-legal dispute resolution in a hospital and contains no pharmacokinetic data for benfluorex. |
| popPK | Miladinovic_2025 | irrelevant | 0 | 0 | The paper describes a deep learning model for biological perturbation data and does not contain any pharmacokinetic data for benfluorex. |
| PD | Miladinovic_2025 | not_relevant | 0 | 0 | The paper is a computational biology study on deep learning models for perturbation data and mentions benfluorex only as a qualitative example of an off-target compound in a t-SNE visualization, without reporting any pharmacodynamic parameters or exposure-response relationships. |
| popPK | Munuera_2020 | irrelevant | 0 | 0 | The paper discusses medical mediation in Chile and contains no pharmacokinetic data or mention of benfluorex. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | The paper is a behavioral intervention study on physical activity and contains no pharmacokinetic data for benfluorex. |
| popPK | Peasant_2017 | irrelevant | 0 | 0 | The paper is a sociological study on condom negotiation and partner violence, containing no pharmacokinetic data for benfluorex. |
| popPK | Qin_2022 | irrelevant | 0 | 0 | The paper is a methodological study on causal mediation analysis and contains no pharmacokinetic data for benfluorex. |
| popPK | Quinn_1994 | irrelevant | 0 | 0 | The study investigates the immunological effects of IL-2 and sTNFr in mice and does not involve benfluorex or any pharmacokinetic analysis. |
| popPK | Rolston_2023 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| popPK | Rubanyi_1986 | irrelevant | 0 | 0 | The paper studies endothelium-derived relaxing factor in canine arteries and does not involve benfluorex or its pharmacokinetics. |
| popPK | Simione_1995 | irrelevant | 0 | 0 | no_text gate: only 252 chars of text extracted (&lt; 400) |
| popPK | Sodoyez_1992 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of insulin (a probe drug) in rats treated with benfluorex, not the pharmacokinetics of benfluorex itself. |
| popPK | Wachs_2012 | irrelevant | 0 | 0 | The paper is about negotiation strategies for occupational health nurses and contains no pharmacokinetic data for benfluorex. |
| popPK | Walker_2014 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Willetts_2022 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Witkiewitz_2018 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of alcohol treatment outcomes and does not involve benfluorex or pharmacokinetic parameters. |
| popPK | Zurynski_2017 | irrelevant | 0 | 0 | no_text gate: only 42 chars of text extracted (&lt; 400) |
| popPK | el-Deiry_1993 | irrelevant | 0 | 0 | The paper describes the WAF1 gene and p53 tumor suppression mechanisms, containing no pharmacokinetic data for benfluorex. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
