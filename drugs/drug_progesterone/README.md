<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03D&quot;,&quot;href&quot;:&quot;atc/G03D.md&quot;},{&quot;label&quot;:&quot;progesterone&quot;}]"></div>

# progesterone

- **generic name:** progesterone
- **ATC codes:** `G03DA04`, `G03FA04`
- **DrugBank:** [DB00396](https://go.drugbank.com/drugs/DB00396) · **PubChem:** [CID 5994](https://pubchem.ncbi.nlm.nih.gov/compound/5994)
- **molar mass:** 314.4617 g/mol (C21H30O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Progesterone is a progestogen sex hormone used to treat conditions such as amenorrhea and endometrial hyperplasia. It is an approved medicine, also approved for veterinary use, and is available both alone and in fixed combinations with estrogens.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26963](https://www.wikidata.org/wiki/Q26963) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:46 | 0:53 | 0/0/0 | 1/1/0 | 0/0/0 | 86,297/2,791 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2022_autonomously_bioluminescent_signal](drugs/drug_progesterone/pd_Huang_2022_autonomously_bioluminescent_signal.md) | autonomously bioluminescent signal biomarker turnover ← progesterone | — | Huang Y et al., Rapid and reagent-free bioassay using a…, The Journal of steroid bioc… (2022) | [10.1016/j.jsbmb.2022.106151](https://doi.org/10.1016/j.jsbmb.2022.106151) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Li_2019_hot_flashes](drugs/drug_progesterone/pd_Li_2019_hot_flashes.md) | hot flashes ← progesterone · inhibition effect | — | Li T et al., Quantitative comparison of drug efficac…, Breast cancer research and… (2019) | [10.1007/s10549-018-5029-y](https://doi.org/10.1007/s10549-018-5029-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=progesterone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inducer/inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inducer/inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inducer/inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inducer/inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inducer/inhibitor | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` inhibitor/substrate, `SLC10A1` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inducer | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |
| — | adrenal gland | `CYP17A1` inhibitor/substrate | DrugBank actor |
| — | prostate gland | `AR` potentiator/target | DrugBank actor |
| — | testis | `CYP17A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (downregulator), ESR1 (inhibitor), ESR1 (target), ESR2 (downregulator), ESR2 (target), NR3C1 (partial agonist), NR3C2 (target), OPRK1 (activator), OPRK1 (potentiator), PGR (target), SHBG (binder), SHBG (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 329 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bitran_1993 | irrelevant | 0 | 0 | The study is a behavioral and mechanistic analysis of GABA receptor function and metabolite levels (allopregnanolone) following progesterone administration, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for progesterone. |
| popPK | Bobdiwala_2019 | irrelevant | 0 | 0 | This is a diagnostic meta-analysis using progesterone levels for risk prediction in pregnancy of unknown location, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Boelig_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, not progesterone (progesterone is only mentioned as a covariate for distribution). |
| popPK | Fine_2021 | irrelevant | 0 | 0 | The paper is a methodological simulation study using progesterone cycle data only as a secondary demonstration for statistical model comparison, without reporting specific pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Harbs_2023 | irrelevant | 0 | 0 | The study is an epigenetic association study measuring progesterone as an exposure variable for DNA methylation, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study is an in-vitro bioassay measuring receptor binding potency (EC50) of bisphenols, not pharmacokinetic disposition parameters (CL, V, ka) for progesterone. |
| popPK | Jung_2013 | irrelevant | 0 | 0 | The study investigates the mechanism of steroids as gamma-secretase modulators in cell lines and does not report pharmacokinetic parameters for progesterone. |
| popPK | Katsu_2022 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding/transactivation study measuring EC50 values for progesterone on lungfish mineralocorticoid receptors, not a pharmacokinetic study of progesterone disposition parameters. |
| popPK | Kroboth_1997 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic interaction with triazolam and GABA receptor modulation, not on the quantitative pharmacokinetic disposition parameters (CL, V, etc.) of progesterone. |
| popPK | Lawrence_2022 | irrelevant | 0 | 0 | The study focuses on therapy monitoring in Congenital Adrenal Hyperplasia using 17-OH progesterone as a biomarker, not on the pharmacokinetic parameters of progesterone itself. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (efficacy Emax, onset ET50) for hot flash relief, not pharmacokinetic disposition parameters (CL, V, Q, ka, t1/2). |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is an epidemiological analysis of progesterone levels associated with gestational diabetes risk, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | This is an in vitro receptor binding/pharmacological study, not a pharmacokinetic study, and contains no disposition parameters (CL, V, ka) for progesterone. |
| popPK | Luconi_1998 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of progesterone binding sites on sperm membranes and reports binding affinities (Kd) and potency (EC50), not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Lähteenmäki_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RU 486 (mifepristone), an antiprogesterone, not the drug progesterone itself. |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the receptor binding affinity of norgestimate, not a pharmacokinetic study of progesterone. |
| popPK | Sarkar_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mifepristone (RU486), a progesterone receptor antagonist, rather than progesterone itself. |
| popPK | Sutter_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vilaprisan (a progesterone receptor modulator), not for progesterone itself. |
| popPK | Wenzel_2021 | irrelevant | 0 | 0 | The study analyzes neuroactive steroid ratios and levels in the context of depression diagnosis, not the pharmacokinetic disposition parameters (CL, V, ka) of progesterone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
