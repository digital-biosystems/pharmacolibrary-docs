<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;methylphenidate&quot;}]"></div>

# methylphenidate

- **generic name:** methylphenidate
- **ATC codes:** `N06BA04`
- **DrugBank:** [DB00422](https://go.drugbank.com/drugs/DB00422) · **PubChem:** [CID 4158](https://pubchem.ncbi.nlm.nih.gov/compound/4158)
- **molar mass:** 233.3062 g/mol (C14H19NO2) — DrugBank
- **groups:** approved, investigational

## About

Methylphenidate is a central nervous system stimulant prescribed for attention deficit hyperactivity disorder and narcolepsy. It is an approved medicine, widely used for these conditions, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422112](https://www.wikidata.org/wiki/Q422112) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methylphenidate | parent | 233.306 | C14H19NO2 | DrugBank | [4158](https://pubchem.ncbi.nlm.nih.gov/compound/4158) | Shader_1999 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:55 | 2:35 | 0/2/1 | 7/0/0 | 0/0/0 | 161,411/11,651 | ollama / glm-5.3-flash | 13 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Shader_1999_reference](drugs/drug_methylphenidate/Methylphenidate_Shader1999_reference.md) | — | 1-compartment (no model) | 2 | Shader RI et al., Population pharmacokinetics of methylph…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008425](https://doi.org/10.1177/00912709922008425) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Giorgi_2010_reference](drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md) | — | 2-compartment (no model) | 3 | Giorgi M et al., Pharmacokinetics of methylphenidate fol…, Veterinary research communi… (2010) | [10.1007/s11259-010-9388-z](https://doi.org/10.1007/s11259-010-9388-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Teuscher_2015_reference](drugs/drug_methylphenidate/Methylphenidate_Teuscher2015_reference.md) | — | 1-compartment (no model) | 0 | Teuscher NS et al., Population pharmacokinetics of methylph…, Drug design, development an… (2015) | [10.2147/DDDT.S83234](https://doi.org/10.2147/DDDT.S83234) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aoyama_1997_DA](drugs/drug_methylphenidate/pd_Aoyama_1997_DA.md) | dopamine (DA) level in striatal dialysate ← methylphenidate · indirect response — drug inhibits the loss of dopamine (DA) level in striatal dialysate | — | Aoyama T et al., Pharmacodynamic modeling for change of…, Pharmaceutical research (1997) | [10.1023/a:1012186519946](https://doi.org/10.1023/a:1012186519946) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jackson_2022_SKAMP](drugs/drug_methylphenidate/pd_Jackson_2022_SKAMP.md) | SKAMP composite scores corrected for placebo ← methylphenidate · indirect response — drug inhibits the production of SKAMP composite scores corrected for placebo | — | Jackson AJ et al., A Simulation Study of the Comparative P…, The AAPS journal (2022) | [10.1208/s12248-022-00726-w](https://doi.org/10.1208/s12248-022-00726-w) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kimko_2012_clinical_efficacy_measures_in_children_with_ADHD](drugs/drug_methylphenidate/pd_Kimko_2012_clinical_efficacy_measures_in_children_with_ADHD.md) | clinical efficacy measures in children with ADHD ← methylphenidate · direct Emax (saturable) effect | — | Kimko H et al., Population pharmacodynamic modeling of…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-011-9238-9](https://doi.org/10.1007/s10928-011-9238-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2017_DBP](drugs/drug_methylphenidate/pd_Li_2017_DBP.md) | diastolic blood pressure ← methylphenidate · direct linear effect | — | Li L et al., Exposure-response analyses of blood pre…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9513-5](https://doi.org/10.1007/s10928-017-9513-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2017_HR](drugs/drug_methylphenidate/pd_Li_2017_HR.md) | heart rate ← methylphenidate · direct linear effect | — | Li L et al., Exposure-response analyses of blood pre…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9513-5](https://doi.org/10.1007/s10928-017-9513-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2017_SBP](drugs/drug_methylphenidate/pd_Li_2017_SBP.md) | systolic blood pressure ← methylphenidate · direct linear effect | — | Li L et al., Exposure-response analyses of blood pre…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9513-5](https://doi.org/10.1007/s10928-017-9513-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shimizu_2019_DA](drugs/drug_methylphenidate/pd_Shimizu_2019_DA.md) | extracellular dopamine level in nucleus accumbens biomarker turnover ← methylphenidate | — | Shimizu R et al., Pharmacokinetic-Pharmacodynamic Modelin…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252262](https://doi.org/10.1124/jpet.118.252262) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shimizu_2019_DAT_occupancy](drugs/drug_methylphenidate/pd_Shimizu_2019_DAT_occupancy.md) | DAT occupancy / fluorescent substrate uptake inhibition biomarker turnover ← methylphenidate | — | Shimizu R et al., Pharmacokinetic-Pharmacodynamic Modelin…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252262](https://doi.org/10.1124/jpet.118.252262) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soufsaf_2023_DAT_occupancy](drugs/drug_methylphenidate/pd_Soufsaf_2023_DAT_occupancy.md) | DAT occupancy ← methylphenidate · direct Emax (saturable) effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soufsaf_2023_DAT_occupancy_2](drugs/drug_methylphenidate/pd_Soufsaf_2023_DAT_occupancy_2.md) | DAT occupancy (clockwise hysteresis / acute tolerance) ← methylphenidate · inhibition effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soufsaf_2023_NET_occupancy](drugs/drug_methylphenidate/pd_Soufsaf_2023_NET_occupancy.md) | NET occupancy ← methylphenidate · inhibition effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Teuscher_2018_SKAMP_Combined_score](drugs/drug_methylphenidate/pd_Teuscher_2018_SKAMP_Combined_score.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham Scale Combined score ← methylphenidate · direct sigmoid Emax (Hill) effect | — | Teuscher NS et al., Population Pharmacokinetic-Pharmacodyna…, Journal of clinical psychop… (2018) | [10.1097/JCP.0000000000000944](https://doi.org/10.1097/JCP.0000000000000944) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylphenidate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CES1A1a (substrate), HTR1A (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shader_1999.pdf` | Shader RI et al., Population pharmacokinetics of methylph…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1177/00912709922008425](https://doi.org/10.1177/00912709922008425) | [10434228](https://pubmed.ncbi.nlm.nih.gov/10434228) | Population PK of methylphenidate in children with numeric values (t1/2 4.5 h, CL 90.7 ml/min/kg) given in the abstract. |
| `Lavy_2011.pdf` | Lavy E et al., Pharmacokinetics of methylphenidate aft…, Veterinary journal (London,… (2011) | popPK | 8 | [10.1016/j.tvjl.2010.07.007](https://doi.org/10.1016/j.tvjl.2010.07.007) | [20696604](https://pubmed.ncbi.nlm.nih.gov/20696604) | PK study of MPH in dogs with one-compartment model and clearance reported, but numeric parameter values (Cl, Cmax, etc.) are not present in the evidence text. |
| `Teuscher_2018.pdf` | Teuscher NS et al., Population Pharmacokinetic-Pharmacodyna…, Journal of clinical psychop… (2018) | popPK | 8 | [10.1097/JCP.0000000000000944](https://doi.org/10.1097/JCP.0000000000000944) | [30119076](https://pubmed.ncbi.nlm.nih.gov/30119076) | Population PK/PD model of methylphenidate with CL and V described, but numeric PK parameter values (CL, V, ka) are not shown in the evidence, likely in tables/supplementary material not provided. |
| `Shimizu_2019.pdf` | Shimizu R et al., Pharmacokinetic-Pharmacodynamic Modelin…, The Journal of pharmacology… (2019) | popPK | 7 | [10.1124/jpet.118.252262](https://doi.org/10.1124/jpet.118.252262) | [30674560](https://pubmed.ncbi.nlm.nih.gov/30674560) | Rat PK-PD model of methylphenidate with plasma/CSF concentrations, but numeric parameter values are not shown in the provided evidence. |
| `Soufsaf_2023.pdf` | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | popPK | 7 | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) | [36930337](https://pubmed.ncbi.nlm.nih.gov/36930337) | A population PK model of methylphenidate is used, but no numeric PK parameter values appear in the evidence; they presumably reside in the cited model/supplementary material. |
| `Aoyama_1997.pdf` | Aoyama T et al., Pharmacodynamic modeling for change of…, Pharmaceutical research (1997) | popPK | 6 | [10.1023/a:1012186519946](https://doi.org/10.1023/a:1012186519946) | [9434281](https://pubmed.ncbi.nlm.nih.gov/9434281) | PK/PD modeling of methylphenidate in rats with a two-compartment disposition model, but numeric PK parameters (CL, V) are not shown in the evidence, only Ki. |
| `Jackson_2022.pdf` | Jackson AJ et al., A Simulation Study of the Comparative P…, The AAPS journal (2022) | popPK | 6 | [10.1208/s12248-022-00726-w](https://doi.org/10.1208/s12248-022-00726-w) | [35798921](https://pubmed.ncbi.nlm.nih.gov/35798921) | Simulation study of MPH bioequivalence using literature population PK models with ka parameters, but no numeric parameter values are given in the evidence (they live in the cited literature models/supplement). |

<sub>queue written 2026-10-07T00:53:23.994315+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoyama_1997 | relevant | 6 | 3 | PK/PD modeling of methylphenidate in rats with a two-compartment disposition model, but numeric PK parameters (CL, V) are not shown in the evidence, only Ki. |
| popPK | Farhat_2026 | irrelevant | 0 | 0 | Efficacy meta-analysis of stimulants in preschool ADHD; no PK parameters reported. |
| popPK | Gomez-Sanchez_2017 | irrelevant | 0 | 0 | Pharmacogenetic study of clinical response to methylphenidate with no PK parameters (no CL, V, ka, or PK model) reported. |
| popPK | Jackson_2022 | relevant | 6 | 2 | Simulation study of MPH bioequivalence using literature population PK models with ka parameters, but no numeric parameter values are given in the evidence (they live in the cited literature models/supplement). |
| popPK | Kimko_2012 | irrelevant | 3 | 2 | This is a pharmacodynamic (PD) meta-analysis modeling study, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for methylphenidate; it uses adult PK data from literature as input but does not report PK parameter values itself. |
| popPK | Koblan_2016 | irrelevant | 1 | 1 | Abuse-potential study where methylphenidate is only a comparator; no PK disposition parameters for MPH are reported. |
| popPK | Lavy_2011 | relevant | 8 | 3 | PK study of MPH in dogs with one-compartment model and clearance reported, but numeric parameter values (Cl, Cmax, etc.) are not present in the evidence text. |
| popPK | Li_2017 | irrelevant | 3 | 0 | This is an exposure-response (PD) analysis of BP/HR effects; no quantitative PK disposition parameters (CL, V, ka) for methylphenidate are reported, and no numeric values appear in the evidence. |
| popPK | Linton_2024 | irrelevant | 0 | 0 | EEG/behavioral study of methylphenidate effects on cognitive control; no PK parameters (CL, V, ka, half-life) reported anywhere. |
| popPK | Shimizu_2019 | relevant | 7 | 3 | Rat PK-PD model of methylphenidate with plasma/CSF concentrations, but numeric parameter values are not shown in the provided evidence. |
| popPK | Shram_2022 | irrelevant | 3 | 2 | Abuse-potential study reporting only relative bioavailability GLSM ratios (Cmax/AUC ratios) for the prodrug SDX vs d-MPH; no CL, V, ka, or compartmental/population-PK parameters for methylphenidate are given. |
| popPK | Simmler_2016 | irrelevant | 0 | 0 | In vitro receptor pharmacology study (TAAR1 binding/EC50), no PK disposition parameters for methylphenidate. |
| popPK | Soufsaf_2023 | relevant | 7 | 2 | A population PK model of methylphenidate is used, but no numeric PK parameter values appear in the evidence; they presumably reside in the cited model/supplementary material. |
| popPK | Teuscher_2018 | relevant | 8 | 3 | Population PK/PD model of methylphenidate with CL and V described, but numeric PK parameter values (CL, V, ka) are not shown in the evidence, likely in tables/supplementary material not provided. |
| popPK | Winhusen_2006 | irrelevant | 2 | 1 | Methylphenidate is the co-administered drug; only cocaine PK parameters were calculated, and no numeric MPH disposition values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:53 UTC</sub>
