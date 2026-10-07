<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;estradiol&quot;}]"></div>

# estradiol

- **generic name:** estradiol
- **ATC codes:** `G03AA14`, `G03AA17`, `G03AB08`, `G03CA03`, `H01CC53`, `H01CC54`
- **DrugBank:** [DB00783](https://go.drugbank.com/drugs/DB00783) · **PubChem:** [CID 5757](https://pubchem.ncbi.nlm.nih.gov/compound/5757)
- **molar mass:** 272.382 g/mol (C18H24O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Estradiol, the primary female sex hormone, is used for estrogen replacement in conditions such as premature menopause, premature ovarian failure, and hypogonadism, and has also been used for breast and prostate cancer. It is widely used in human medicine and is also an approved veterinary drug, appearing in hormonal contraceptive combinations and plain estrogen preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422416](https://www.wikidata.org/wiki/Q422416) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:58 | 0:54 | 0/0/0 | 1/0/0 | 0/0/0 | 91,731/2,718 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Albin_2012_pubertal_growth_up_to_PHV](drugs/drug_estradiol/pd_Albin_2012_pubertal_growth_up_to_PHV.md) | pubertal growth up to PHV biomarker turnover ← estradiol | — | Albin AK et al., Estradiol and pubertal growth in girls, Hormone research in paediat… (2012) | [10.1159/000343076](https://doi.org/10.1159/000343076) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=estradiol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` downregulator/regulator/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` downregulator/regulator/substrate | DrugBank actor |
| absorption | liver | `ABCB1` downregulator/regulator/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` downregulator/regulator/substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` downregulator/regulator/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` downregulator/regulator/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP1A2` inhibitor/substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `SLCO1B3` unknown, `UGT1A1` inducer/substrate, `UGT2B15` inducer | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` inducer/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` downregulator/inhibitor, `SLC22A8` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` product | DrugBank actor |
| — | ovary | `CYP19A1` product | DrugBank actor |
| — | testis | `CYP19A1` product | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), BECN1 (binder), CHRNA4 (binder), ESR1 (target), ESR2 (target), FABP2 (binder), GPER1 (binder), MT-ATP6 (inhibitor), NR1I2 (binder), SHBG (binder), SLC22A11 (inhibitor), SLCO1C1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 601 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albin_2012 | irrelevant | 2 | 0 | The study reports pharmacodynamic dose-response parameters (EC50) for growth, not pharmacokinetic parameters (CL, V, ka) for estradiol. |
| popPK | Allegaert_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol (acetaminophen) using estradiol as a covariate/biomarker, rather than reporting the pharmacokinetic parameters of estradiol itself. |
| popPK | As-Sanie_2024 | irrelevant | 0 | 0 | This is a clinical efficacy and quality-of-life study for endometriosis pain, reporting no pharmacokinetic parameters for estradiol. |
| popPK | Asai_2017 | irrelevant | 2 | 6 | The study reports in-vitro intrinsic clearance (CL_int) and kinetic parameters for estradiol glucuronidation in microsomes, which is a mechanistic/in-vitro study rather than a pharmacokinetic study of disposition in vivo. |
| popPK | Asai_2017_2 | irrelevant | 1 | 0 | The study is an in-vitro enzyme kinetic characterization of estradiol glucuronidation in rat brain microsomes, reporting enzyme kinetic constants (S50, CLmax) rather than in-vivo pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Barton_1998 | irrelevant | 0 | 0 | The study analyzes dose-response characteristics of uterine weight in rats and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for estradiol. |
| popPK | Bondy_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing the effect of a drug combination (CEB) on depressive symptoms and only reports estradiol measurements as a biomarker, not pharmacokinetic disposition parameters for estradiol. |
| popPK | Chin_2023 | irrelevant | 0 | 0 | The study focuses on anti-Müllerian hormone (AMH) trajectories and uses estradiol only as a secondary reproductive axis marker, providing no quantitative pharmacokinetic parameters (CL, V, etc.) for estradiol. |
| popPK | Fotherby_1990 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of levonorgestrel (a gestagen) and does not report any parameters for estradiol. |
| popPK | Ghazanfari_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer [18F]FES for receptor imaging, not the systemic disposition parameters of estradiol itself. |
| popPK | Johansson_2025 | irrelevant | 0 | 0 | This study measures estradiol levels as a biomarker to predict treatment efficacy in a clinical trial, but it does not report pharmacokinetic parameters (CL, V, ka) for estradiol. |
| popPK | Li_2015 | irrelevant | 1 | 0 | The paper is an efficacy meta-analysis of soy isoflavones versus estradiol, not a pharmacokinetic study of estradiol. |
| popPK | Luo_2019 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of ethinyl estradiol (EE) and levonorgestrel, not the subject drug estradiol (E2). |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of norgestimate's receptor binding and does not report pharmacokinetic parameters for estradiol. |
| popPK | Ramírez-Montero_2022 | irrelevant | 0 | 0 | The study is a toxicology analysis of 17-alpha-ethinylestradiol (EE2) in zebrafish and does not report pharmacokinetic parameters for estradiol. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, not estradiol. |
| popPK | Sun_2020 | irrelevant | 0 | 0 | This is a review article on study design considerations for drug-drug interactions with oral contraceptives (ethinyl estradiol) and does not report original quantitative PK parameters for estradiol. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and drug interactions of sirolimus, not estradiol. |
| popPK | da_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of (-)-carvone, using estradiol only as a tool to induce dysmenorrhea in mice, and does not report any pharmacokinetic parameters for estradiol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
