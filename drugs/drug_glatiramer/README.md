<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;Glatiramer&quot;}]"></div>

# Glatiramer

- **generic name:** Glatiramer
- **ATC codes:** `L03AX13`
- **DrugBank:** [DB05259](https://go.drugbank.com/drugs/DB05259) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Glatiramer is a synthetic peptide medicine that acts as an immunostimulant and immunosuppressive drug. It is an approved drug, though it is not recorded as authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418274](https://www.wikidata.org/wiki/Q418274) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:59 | 9:13 | 0/0/0 | 3/0/0 | 0/0/0 | 295,740/4,128 | einfracz / qwen3.8-27b | 27 | 7/11 | 27/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Farina_2002_IgG4](drugs/drug_glatiramer/pd_Farina_2002_IgG4.md) | GA-reactive IgG4 antibodies biomarker turnover ← glatiramer acetate | — | Farina C et al., Treatment with glatiramer acetate induc…, Journal of neuroimmunology (2002) | [10.1016/s0165-5728(01)00490-8](https://doi.org/10.1016/s0165-5728(01)00490-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Simpson_2002_relapse_rate](drugs/drug_glatiramer/pd_Simpson_2002_relapse_rate.md) | relapse rate ← glatiramer acetate · inhibition effect | — | Simpson D et al., Glatiramer acetate: a review of its use…, CNS drugs (2002) | [10.2165/00023210-200216120-00004](https://doi.org/10.2165/00023210-200216120-00004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Simpson_2003_relapse_rate](drugs/drug_glatiramer/pd_Simpson_2003_relapse_rate.md) | relapse rate ← glatiramer acetate · inhibition effect | — | Simpson D et al., Spotlight on glatiramer acetate in rela…, BioDrugs : clinical immunot… (2003) | [10.2165/00063030-200317030-00007](https://doi.org/10.2165/00063030-200317030-00007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glatiramer) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MHC class II protein complex (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1101 matched, 71 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Annibali_2006 | not_relevant | 0 | 0 | The text is an introductory paragraph about MS pharmacogenomics; it does not report specific gene-variant effects on the PK or PD of glatiramer. |
| popPK | Bracis_2026 | irrelevant | 0 | 0 | The paper is a methodological tutorial on Model-Based Meta-Analysis (MBMA) using naproxen and canakinumab as case studies, and does not contain pharmacokinetic data for glatiramer. |
| popPK | Bräm_2025 | irrelevant | 0 | 0 | The paper is a methodological tutorial on Neural ODEs using demo datasets (theophylline, warfarin), with no data or parameters for glatiramer. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PK/PD model development using NODEs and LASSO, demonstrating the approach on neonatal weight, simulated bi-exponential PK data, and warfarin, with no mention of glatiramer. |
| popPK | Cheriyan_2012 | irrelevant | 0 | 0 | The study reports brain volume changes in MS patients, not pharmacokinetic parameters for glatiramer. |
| PGx | Comabella_2011 | not_relevant | 0 | 0 | The text is a general review of pharmacogenomics in MS and does not report specific gene variants affecting the PK or PD of glatiramer. |
| PGx | Corona_2026 | not_relevant | 2 | 10 | The paper reports genetic associations with clinical response (relapse rate), which is a therapeutic outcome, not a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of the drug itself. |
| popPK | Esmaeili_2025 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of molnupiravir for SARS-CoV-2 treatment, not glatiramer. |
| PGx | Fernández_2011 | not_relevant | 1 | 0 | The paper discusses laquinimod and only mentions glatiramer as a standard background treatment, providing no data on glatiramer's pharmacokinetics or pharmacodynamics. |
| PGx | Foti_2012 | not_relevant | 0 | 0 | The paper is a review primarily focused on pharmacogenetics of interferon-beta; it mentions glatiramer acetate only as a context drug but provides no specific gene-variant to PK/PD effect data for glatiramer. |
| PGx | Goertsches_2011 | not_relevant | 3 | 2 | Review article on transcriptomic biomarkers for MS therapy; discusses gene expression changes associated with response but does not report specific genetic variants affecting glatiramer PK/PD parameters. |
| popPK | Gomez-Figueroa_2025 | irrelevant | 0 | 0 | The study is a retrospective registry analysis of clinical outcomes (efficacy) in multiple sclerosis and does not report any pharmacokinetic parameters for glatiramer. |
| popPK | Hardiansyah_2025 | irrelevant | 0 | 0 | The paper is a review on population pharmacokinetic modeling in radiopharmaceutical therapy (e.g., Lu-177 DOTATATE) and does not report any pharmacokinetic parameters for glatiramer. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes brain atrophy outcomes using MRI, not pharmacokinetic parameters (CL, V, etc.), and glatiramer acetate is merely used as a comparator efficacy group. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper describes an automated population PK modeling framework using simulated data and does not contain any pharmacokinetic parameters or data for the drug glatiramer. |
| PGx | Kowalec_2013 | not_relevant | 0 | 0 | The paper is a review focusing on adverse drug reactions (safety) rather than pharmacokinetic or pharmacodynamic parameters of glatiramer. |
| PGx | Kulakova_2014 | not_relevant | 0 | 0 | The paper reports genetic markers for clinical treatment response (efficacy) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a bibliometric analysis of the field of model-informed precision dosing for anti-infectives, not a primary pharmacokinetic study of glatiramer. |
| PGx | Mahurkar_2014 | not_relevant | 0 | 0 | The provided text is an abstract or introduction for a review article and contains no specific data, results, or quantitative pharmacogenomic effects. |
| PGx | Martinez-Forero_2008 | not_relevant | 1 | 2 | The paper is a general review of MS pharmacogenomics and mentions glatiramer acetate only in passing without reporting specific gene-drug interaction data for its PK or PD parameters. |
| popPK | Nikolaidis_2026 | irrelevant | 0 | 0 | The study investigates metformin pharmacokinetics, not glatiramer. |
| PGx | Pistono_2017 | not_relevant | 0 | 0 | The paper is a review focusing on oral MS therapies and immunogenetics, mentioning glatiramer only as a background injectable without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study is an immunological investigation of vaccine response in MS patients where glatiramer is a comparator therapy, not a pharmacokinetic study. |
| PGx | Tsareva_2011 | not_relevant | 4 | 2 | The paper reports associations between genetic variants and clinical treatment efficacy (response status) rather than quantitative pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., receptor binding, biomarker concentration) parameters. |
| PGx | Tsareva_2016 | not_relevant | 2 | 0 | The text is a general introduction/review of the field, does not report specific PK/PD data or fitted effect sizes for glatiramer, and lacks extractable quantitative results. |
| PGx | Tsareva_2019 | not_relevant | 2 | 0 | This is a general review of pharmacogenetics in MS that introduces glatiramer acetate, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes associated with particular gene variants. |
| PGx | Vandenbroeck_2009 | not_relevant | 0 | 0 | The text describes a training network and research initiative structure, reporting no specific pharmacogenomic studies or data on drug effects. |
| popPK | Yeung_2025 | irrelevant | 0 | 0 | The paper studies indomethacin pharmacokinetics in neonates, not glatiramer. |
| popPK | Yoo_2026 | irrelevant | 0 | 0 | The paper describes the discovery of RORγt inhibitors (berberine, coptisine) using machine learning and in vivo mouse models, and does not contain any pharmacokinetic data for glatiramer. |
| popPK | You_2021 | irrelevant | 0 | 0 | The study assesses the neuroprotective effect of glatiramer on retinal nerve fiber layer thickness in MS patients, not its pharmacokinetic parameters. |
| popPK | Ytterberg_2007 | irrelevant | 0 | 0 | The paper is a clinical efficacy study in multiple sclerosis and does not report pharmacokinetic parameters or disposition data for glatiramer. |
| PGx | Zarzuelo-Romero_2021 | not_relevant | 4 | 10 | The paper reports associations between gene variants and clinical response to glatiramer, not PK or PD parameters. |
| popPK | Zinger_2022 | irrelevant | 0 | 0 | The paper is a mechanistic/imaging study comparing the effects of DMF and glatiramer acetate on inflammation, and glatiramer is used only as a comparator, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
