<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03C&quot;,&quot;href&quot;:&quot;atc/G03C.md&quot;},{&quot;label&quot;:&quot;conjugated estrogens&quot;}]"></div>

# conjugated estrogens

- **generic name:** conjugated estrogens
- **ATC codes:** `G03CA57`, `G03CC07`
- **DrugBank:** [DB00286](https://go.drugbank.com/drugs/DB00286) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Conjugated estrogens, a mixture of estrogens derived from horse urine, are used as estrogen therapy, mainly for menopausal symptoms. They remain an approved medicine, though they carry a boxed warning and are not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4118295](https://www.wikidata.org/wiki/Q4118295) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:44 | 6:33 | 0/0/0 | 0/0/0 | 0/0/0 | 395,434/3,405 | einfracz / qwen3.8-27b | 15 | 0/12 | 14/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=conjugated_estrogens) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate, `SLCO1A2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate, `SLCO1A2` inhibitor/substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP1A2` inhibitor/substrate, `CYP3A4` substrate, `SLC10A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` substrate, `ABCC4` inhibitor, `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC11 (substrate), ESR1 (target), ESR2 (target), SERPINA7 (inducer), SHBG (binder), SLC22A10 (inhibitor), SLC22A11 (substrate), SLC51A (substrate), SLC51B (substrate), SLCO1C1 (inhibitor), SLCO1C1 (substrate), SLCO3A1 (substrate), SLCO4A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 123 matched, 66 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, not conjugated estrogens. |
| popPK | Armstrong_2020 | irrelevant | 0 | 0 | The study is an epidemiological analysis of cognitive outcomes and does not report any pharmacokinetic parameters for conjugated estrogens. |
| popPK | Fisher_2016 | irrelevant | 0 | 0 | The study models iodide and thyroid hormone (T4/T3) pharmacokinetics, not conjugated estrogens. |
| popPK | Ghorbanizamani_2026 | irrelevant | 0 | 0 | The paper is a review on upconversion nanoparticles (UCNPs) and does not contain pharmacokinetic data for conjugated estrogens. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The paper is an immunological study in rhesus macaques involving 17β-estradiol, not a pharmacokinetic study of conjugated estrogens. |
| PGx | Hou_2006 | not_relevant | 0 | 0 | The study examines the molecular mechanism of estrogen receptor subtypes in bone metabolism but does not report any pharmacogenomic analysis linking specific human gene variants or genotypes to PK or PD parameters of conjugated estrogens. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of antiepileptic drugs and their interactions, and does not contain pharmacokinetic data for conjugated estrogens. |
| PGx | Lépine_2004 | not_relevant | 0 | 0 | The paper investigates the enzymatic specificity and regioselectivity of UGT isoforms in glucuronidating endogenous estrogens, not a pharmacogenomic effect of a specific gene variant on the PK/PD of conjugated estrogens as a drug. |
| popPK | McTiernan_2005 | irrelevant | 0 | 0 | The study evaluates the effect of conjugated equine estrogens on mammographic density, not pharmacokinetic parameters. |
| PGx | Miller_2016 | not_relevant | 2 | 0 | The paper examines the impact of conjugated estrogens on a clinical cardiovascular endpoint (carotid artery intima-medial thickness), not a pharmacokinetic (e.g., AUC) or direct pharmacodynamic parameter (e.g., Emax) of the drug itself. |
| PGx | Miller_2019 | not_relevant | 2 | 1 | The paper only states that variants influenced variability in CIMT but does not provide specific gene-level data, effect sizes, or fitted parameters for conjugated estrogens. |
| PGx | Miller_2021 | not_relevant | 5 | 1 | The paper mentions genetic variants affecting efficacy but does not provide the specific PK/PD parameter data or fitted effect sizes required. |
| PGx | OConnell_2006 | not_relevant | 0 | 0 | The paper investigates the effect of conjugated estrogens on CYP activity using probe drugs, not the effect of gene variants on the PK/PD of conjugated estrogens. |
| popPK | Ozdemir_2025 | irrelevant | 0 | 0 | The study investigates the preventive effects of bazedoxifene and fulvestrant on Ovarian Hyperstimulation Syndrome in rats and does not report pharmacokinetic parameters for conjugated estrogens. |
| PGx | Palomba_2005 | not_relevant | 5 | 2 | The paper reports a pharmacogenomic effect (VDR genotype) on the pharmacodynamic response (BMD/efficacy) of conjugated estrogens, but the specific interaction effects are only described statistically in the text without fitted effect sizes or detailed breakdowns in tables, and the focus is on efficacy rather than standard PK parameters. |
| popPK | Pedersen_2004 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of cerebrovascular reactivity in rabbits, not a pharmacokinetic study reporting disposition parameters for conjugated estrogens. |
| popPK | Pedersen_2004_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay of vascular function in rabbits and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for conjugated estrogens. |
| popPK | Redondo-Castillejo_2025 | irrelevant | 0 | 0 | The paper investigates the effects of diatomaceous earth (silicon) on lipid metabolism in rats and does not involve conjugated estrogens. |
| PGx | Rodrigues_2026 | not_relevant | 1 | 1 | The paper is a systematic review on the effects of menopausal hormone therapy on Alzheimer's disease biomarkers, with no data or analysis linking specific genetic variants to the pharmacokinetics or pharmacodynamics of conjugated estrogens. |
| popPK | Santoro_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of conjugated estrogens for menopausal symptoms and does not report pharmacokinetic parameters. |
| PGx | Scott_2008 | not_relevant | 1 | 0 | The study investigates the effects of prior oral contraceptive use and dietary soy isoflavonoids on CYP enzymes, not the impact of specific human gene variants (pharmacogenomics) on the pharmacokinetics or pharmacodynamics of conjugated estrogens. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a narrative review on the gut microbiome and breast cancer, containing no pharmacokinetic data or disposition parameters for conjugated estrogens. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper is a review of Pueraria mirifica (a phytoestrogen source) and does not report pharmacokinetic parameters for the specific drug conjugated estrogens. |
| popPK | van_2023 | irrelevant | 0 | 0 | The paper is an in-vitro risk assessment study for genistein and other compounds, not a pharmacokinetic study of conjugated estrogens. |
| popPK | Łach_2026 | irrelevant | 0 | 0 | The study investigates the neuroprotective mechanisms of the synthetic estrogen PaPE-1 in an in vitro mouse cell model and does not report pharmacokinetic parameters for conjugated estrogens. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
