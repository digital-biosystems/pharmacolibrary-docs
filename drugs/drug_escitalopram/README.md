<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;escitalopram&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Escitalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# escitalopram

- **generic name:** escitalopram
- **ATC codes:** `N06AB10`
- **DrugBank:** [DB01175](https://go.drugbank.com/drugs/DB01175) · **PubChem:** [CID 146570](https://pubchem.ncbi.nlm.nih.gov/compound/146570)
- **molar mass:** 324.3919 g/mol (C20H21FN2O) — DrugBank
- **groups:** approved, investigational

## About

Escitalopram is an antidepressant of the SSRI class used for depression and anxiety-related conditions such as generalized anxiety disorder, obsessive-compulsive disorder, and post-traumatic stress disorder. It is an approved medicine, widely used in clinical practice, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423757](https://www.wikidata.org/wiki/Q423757) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| escitalopram | parent | 324.392 | C20H21FN2O | DrugBank | [146570](https://pubchem.ncbi.nlm.nih.gov/compound/146570) | Liu_2022, Liu_2023, Poweleit_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:00 | 3:34 | 2/0/2 | 3/0/1 | 0/0/0 | 209,977/13,046 | ollama / glm-5.3-flash | 18 | 13/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Friberg_2006_reference](drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Poweleit_2023_reference](drugs/drug_escitalopram/Escitalopram_Poweleit2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Poweleit EA et al., Escitalopram and Sertraline Population…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6931)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2022_reference](drugs/drug_escitalopram/Escitalopram_Liu2022_reference.md) | — | 1-compartment (no model) | 3 (+2 cov.) | Liu S et al., Population pharmacokinetics model for e…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.964758](https://doi.org/10.3389/fphar.2022.964758) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C2_center_consistency_age failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2023_reference](drugs/drug_escitalopram/Escitalopram_Liu2023_reference.md) | — | 2-compartment (no model) | 4 (+5 cov.) | Liu X et al., Escitalopram Personalized Dosing: A Pop…, Drug design, development an… (2023) | [10.2147/DDDT.S425654](https://doi.org/10.2147/DDDT.S425654) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2017_SERT_occupancy_DRN](drugs/drug_escitalopram/pd_Kim_2017_SERT_occupancy_DRN.md) | SERT occupancy in the dorsal raphe nucleus ← escitalopram · direct sigmoid Emax (Hill) effect | — | Kim E et al., Regional Differences in Serotonin Trans…, Clinical pharmacokinetics (2017) | [10.1007/s40262-016-0444-x](https://doi.org/10.1007/s40262-016-0444-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2017_SERT_occupancy_putamen](drugs/drug_escitalopram/pd_Kim_2017_SERT_occupancy_putamen.md) | SERT occupancy in the putamen ← escitalopram · direct sigmoid Emax (Hill) effect | — | Kim E et al., Regional Differences in Serotonin Trans…, Clinical pharmacokinetics (2017) | [10.1007/s40262-016-0444-x](https://doi.org/10.1007/s40262-016-0444-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2021_QTc](drugs/drug_escitalopram/pd_Kim_2021_QTc.md) | QTc change from baseline (QT prolongation) ← escitalopram · delayed effect through an effect compartment | — | Kim Y et al., Population pharmacokinetic/pharmacodyna…, Journal of affective disord… (2021) | [10.1016/j.jad.2021.02.048](https://doi.org/10.1016/j.jad.2021.02.048) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2025_depression_status](drugs/drug_escitalopram/pd_Wang_2025_depression_status.md) | depression status ← escitalopram · disease-progression model | — | Wang TY et al., PK/PD modeling of the effect of Escital…, Journal of pharmaceutical s… (2025) | [10.1016/j.xphs.2025.103994](https://doi.org/10.1016/j.xphs.2025.103994) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2025_lung_metastatic_foci](drugs/drug_escitalopram/pd_Wang_2025_lung_metastatic_foci.md) | lung metastatic foci ← escitalopram · inhibition effect | — | Wang TY et al., PK/PD modeling of the effect of Escital…, Journal of pharmaceutical s… (2025) | [10.1016/j.xphs.2025.103994](https://doi.org/10.1016/j.xphs.2025.103994) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Friberg_2006_QTci](drugs/drug_escitalopram/pd_Friberg_2006_QTci.md) | Heart-rate corrected QT interval ← citalopram · delayed effect through an effect compartment | model (no simulator) | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=escitalopram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` binder | DrugBank actor |
| — | platelet | `SLC6A4` binder | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (inhibitor), ADRA2A (inhibitor), CHRM1 (inhibitor), DRD2 (inhibitor), HRH1 (inhibitor), HTR1A (inhibitor), HTR2A (inhibitor), HTR2C (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 129 matched, 20 returned
- **screened:** 15  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 2  ·  rejected 0  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2024.pdf` | Liu X et al., Escitalopram population pharmacokinetic…, Journal of affective disord… (2024) | popPK | 10 | [10.1016/j.jad.2023.11.016](https://doi.org/10.1016/j.jad.2023.11.016) | [37949237](https://pubmed.ncbi.nlm.nih.gov/37949237) | A population PK model of escitalopram (one-compartment, transit absorption, CYP2C19 covariates) is clearly the subject, but no numeric parameter values (CL, V, ka, θ estimates) appear in the evidence provided. |
| `Poweleit_2023.pdf` | Poweleit EA et al., Escitalopram and Sertraline Population…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8) | [37755681](https://pubmed.ncbi.nlm.nih.gov/37755681) | Population PK model for escitalopram with CL/F and V/F values reported directly in the abstract. |
| `Kim_2021.pdf` | Kim Y et al., Population pharmacokinetic/pharmacodyna…, Journal of affective disord… (2021) | popPK | 8 | [10.1016/j.jad.2021.02.048](https://doi.org/10.1016/j.jad.2021.02.048) | [33647579](https://pubmed.ncbi.nlm.nih.gov/33647579) | Population PK model of escitalopram (two-compartment, first-order absorption) is described, but numeric PK parameter values (CL, V, ka) are not given in the evidence, only PD results. |
| `Wang_2025.pdf` | Wang TY et al., PK/PD modeling of the effect of Escital…, Journal of pharmaceutical s… (2025) | popPK | 6 | [10.1016/j.xphs.2025.103994](https://doi.org/10.1016/j.xphs.2025.103994) | [40967486](https://pubmed.ncbi.nlm.nih.gov/40967486) | PK/PD modeling of escitalopram in tumor-bearing mice, but no numeric PK parameter values (CL, V, ka) appear in the evidence; they likely live in figures/supplements not provided. |

<sub>queue written 2026-10-06T22:57:49.837655+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2019 | irrelevant | 1 | 0 | Escitalopram is only a prior treatment-failure comparator; no PK disposition parameters for it are reported, and no numeric values appear. |
| popPK | Anderson_1996 | irrelevant | 0 | 0 | In vitro study of ADP inhibition of serotonin uptake; citalopram is only a binding ligand, no PK parameters for escitalopram. |
| popPK | Baker_2026 | irrelevant | 0 | 0 | Clinical trial comparing MBSR vs escitalopram on self-compassion outcomes; no pharmacokinetic parameters reported. |
| popPK | Baumann_1996 | irrelevant | 2 | 1 | This is a review of SSRI pharmacokinetics/pharmacodynamics with no original quantitative disposition parameters for escitalopram (which is not even mentioned; only racemic citalopram). |
| popPK | Bosch_2026 | irrelevant | 2 | 1 | TDM serum-concentration and metabolite-ratio study with no clearance, volume, half-life, or population-PK model parameters for escitalopram; only concentration/dose estimates are given. |
| popPK | Erritzoe_2024 | irrelevant | 0 | 0 | Clinical trial post hoc analysis of depression outcomes; no PK parameters for escitalopram reported. |
| popPK | Friberg_2006 | irrelevant | 2 | 5 | This is a PKPD model of citalopram (not escitalopram) overdose; PK parameters (CL 22.1 l/h, V 1280 l, ka 1.48 h⁻¹) are present but for the wrong drug. |
| popPK | Gatti_2021_2 | irrelevant | 2 | 4 | This is a pharmacovigilance/PK-PD correlation study of serotonin syndrome with linezolid; escitalopram is only one of many co-reported agents, with literature-derived Cmax/AUC/VD values (not a PK model of escitalopram itself). |
| popPK | Isbister_2006 | irrelevant | 2 | 1 | This is a simulation study of citalopram (racemate) overdose QT management using a previously developed PKPD model, with no escitalopram-specific disposition parameters and no numeric PK values in the evidence. |
| popPK | Kim_2017 | irrelevant | 3 | 2 | This is a PK-PD receptor occupancy study reporting EC50/Hill coefficients, not disposition parameters (CL, V, half-life); PK model details/numeric values are not present in the evidence. |
| popPK | Kim_2021 | relevant | 8 | 4 | Population PK model of escitalopram (two-compartment, first-order absorption) is described, but numeric PK parameter values (CL, V, ka) are not given in the evidence, only PD results. |
| popPK | Kofod_2022 | irrelevant | 0 | 0 | This is an inflammation/depression biomarker study using escitalopram as a treatment arm; no PK parameters (CL, V, ka, half-life, or PK model) for escitalopram are reported anywhere in the evidence. |
| popPK | Liu_2024 | relevant | 10 | 3 | A population PK model of escitalopram (one-compartment, transit absorption, CYP2C19 covariates) is clearly the subject, but no numeric parameter values (CL, V, ka, θ estimates) appear in the evidence provided. |
| popPK | Mégarbane_2008 | irrelevant | 3 | 1 | A review of PK/PD modeling in poisonings mentioning citalopram, with no numeric escitalopram PK parameters reported. |
| popPK | Uher_2025 | irrelevant | 0 | 0 | Clinical trial of anhedonia predicting escitalopram treatment response; no PK parameters reported. |
| popPK | Wang_2025 | relevant | 6 | 2 | PK/PD modeling of escitalopram in tumor-bearing mice, but no numeric PK parameter values (CL, V, ka) appear in the evidence; they likely live in figures/supplements not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:57 UTC</sub>
