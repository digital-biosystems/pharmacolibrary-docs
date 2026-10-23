<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;amfetamine&quot;}]"></div>

# amfetamine

- **generic name:** amfetamine
- **ATC codes:** `N06BA01`
- **DrugBank:** [DB00182](https://go.drugbank.com/drugs/DB00182) · **PubChem:** not captured
- **groups:** approved, illicit, investigational

## About

Amfetamine is a stimulant used for attention deficit hyperactivity disorder, narcolepsy, and formerly obesity. It is an approved medicine but also classified as illicit and carries a boxed warning, so its use is tightly controlled.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q179452](https://www.wikidata.org/wiki/Q179452) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Nordin_2013_CBF](drugs/drug_amfetamine/pd_Nordin_2013_CBF.md) | cerebral blood flow (gray matter) ← d-amphetamine · inhibition effect | — | Nordin LE et al., Cortical responses to amphetamine expos…, NeuroImage (2013) | [10.1016/j.neuroimage.2012.11.035](https://doi.org/10.1016/j.neuroimage.2012.11.035) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_amfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amfetamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A5` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2A6` inhibitor, `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` binder | DrugBank actor |
| — | platelet | `SLC6A4` binder | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), CARTPT (target), DRD2 (binder), SLC18A2 (inhibitor), SLC6A2 (substrate), SLC6A2 (target), SLC6A3 (negative modulator), TAAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:08 | 0:57 | 0/0/0 | 1/1/0 | 0/0/0 | 76,149/2,280 | ollama / glm-5.3-flash | 5 | 5/0 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 144 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tsuda_2020.pdf` | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2020) | popPK | 10 | [10.1016/j.dmpk.2020.08.005](https://doi.org/10.1016/j.dmpk.2020.08.005) | [33082099](https://pubmed.ncbi.nlm.nih.gov/33082099) | Population PK model of d-amphetamine (one-compartment, first-order absorption with lag) is described, but no numeric parameter values (CL, V, ka) appear in the evidence — they likely live in tables/figures not provided. |
| `Comiran_2021.pdf` | Comiran E et al., Lisdexamfetamine and amphetamine pharma…, Biopharmaceutics & drug dis… (2021) | popPK | 8 | [10.1002/bdd.2254](https://doi.org/10.1002/bdd.2254) | [33119133](https://pubmed.ncbi.nlm.nih.gov/33119133) | PK study of d-amphetamine (active metabolite of LDX) with compartmental modeling, but numeric CL/V/ka values are not shown in the abstract evidence. |
| `van_2019.pdf` | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | popPK | 8 | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) | [30733244](https://pubmed.ncbi.nlm.nih.gov/30733244) | Population PK model of d-amphetamine in rats and NHPs, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |
| `Comiran_2012.pdf` | Comiran E et al., Fenproporex and amphetamine pharmacokin…, Therapeutic drug monitoring (2012) | popPK | 7 | [10.1097/FTD.0b013e318263c6c5](https://doi.org/10.1097/FTD.0b013e318263c6c5) | [22846898](https://pubmed.ncbi.nlm.nih.gov/22846898) | Amphetamine is the metabolite of fenproporex and a compartmental PK model was fitted, but the evidence only gives Cmax/time ranges; the actual model parameters (CL, V, half-lives) are not shown and may live in tables/figures not provided. |
| `Nordin_2013.pdf` | Nordin LE et al., Cortical responses to amphetamine expos…, NeuroImage (2013) | popPK | 6 | [10.1016/j.neuroimage.2012.11.035](https://doi.org/10.1016/j.neuroimage.2012.11.035) | [23246855](https://pubmed.ncbi.nlm.nih.gov/23246855) | Human PK/PD modeling of d-amphetamine exposure, but the evidence shows only PD effect values (CBF changes), with no numeric disposition parameters (CL, V, ka) present — likely in figures/supplementary material not provided. |
| `Rowley_2012.pdf` | Rowley HL et al., Lisdexamfetamine and immediate release…, Neuropharmacology (2012) | popPK | 6 | [10.1016/j.neuropharm.2012.07.008](https://doi.org/10.1016/j.neuropharm.2012.07.008) | [22796358](https://pubmed.ncbi.nlm.nih.gov/22796358) | Rat PK/PD study with d-amfetamine as subject drug; abstract gives Cmax, tmax, AUC comparisons but no CL/V/ka values, which may be in figures/tables not provided. |
| `Greenhill_2003.pdf` | Greenhill LL et al., A pharmacokinetic/pharmacodynamic study…, Journal of the American Aca… (2003) | popPK | 5 | [10.1097/00004583-200310000-00015](https://doi.org/10.1097/00004583-200310000-00015) | [14560174](https://pubmed.ncbi.nlm.nih.gov/14560174) | A PK study of d- and l-amphetamine in children, but no numeric PK parameters (CL, V, t½) appear in the evidence, only concentration comparisons. |

<sub>queue written 2026-10-07T00:07:51.307658+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Comiran_2012 | relevant | 7 | 3 | Amphetamine is the metabolite of fenproporex and a compartmental PK model was fitted, but the evidence only gives Cmax/time ranges; the actual model parameters (CL, V, half-lives) are not shown and may live in tables/figures not provided. |
| popPK | Comiran_2021 | relevant | 8 | 4 | PK study of d-amphetamine (active metabolite of LDX) with compartmental modeling, but numeric CL/V/ka values are not shown in the abstract evidence. |
| popPK | Dolder_2017 | relevant | 8 | 4 | Human compartmental PK modeling of amphetamine after D-amphetamine and lisdexamfetamine dosing, but full parameter values (CL, V, K01) are in Table 1/Supplementary Table S1 which are not included; only lag time and Tmax differences appear in text. |
| popPK | Fan_2021 | irrelevant | 0 | 0 | Amphetamine is only a challenge/diagnostic agent in a PET tracer kinetic study of [11C]raclopride; no amphetamine PK parameters are reported. |
| popPK | Farhat_2026 | irrelevant | 0 | 0 | Efficacy meta-analysis of stimulants in preschool ADHD; no PK parameters for amfetamine reported. |
| popPK | Greenhill_2003 | relevant | 5 | 2 | A PK study of d- and l-amphetamine in children, but no numeric PK parameters (CL, V, t½) appear in the evidence, only concentration comparisons. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic review of risperidone; amphetamine appears only as an induced-behavior probe, with no PK parameters for amfetamine. |
| popPK | Nordin_2013 | relevant | 6 | 2 | Human PK/PD modeling of d-amphetamine exposure, but the evidence shows only PD effect values (CBF changes), with no numeric disposition parameters (CL, V, ka) present — likely in figures/supplementary material not provided. |
| popPK | Notzon_2016 | irrelevant | 0 | 0 | This is a clinical trial of amphetamine as a treatment drug with no pharmacokinetic parameters reported. |
| popPK | Pinckaers_2026 | irrelevant | 0 | 0 | This is an in-vitro vascular contractility study of PEA/AA analogues in rat arteries; amphetamine is only mentioned structurally, with no PK parameters. |
| popPK | Ravenstijn_2008 | irrelevant | 0 | 0 | Amphetamine appears only as a diagnostic probe (rotational behaviour) in a rotenone rat model study; no PK parameters for amfetamine are reported. |
| popPK | Roberts_2015 | relevant | 8 | 1 | A population PK covariate model of dextroamphetamine is described, but the numeric parameter values are not present in the evidence (only a supplemental figure reference). |
| popPK | Rohatagi_1997 | irrelevant | 2 | 2 | Amphetamine appears only as a metabolite of selegiline (the subject drug) in a PK-metabolic model; no numeric parameter values for AMP are shown in the evidence. |
| popPK | Roque_2021 | irrelevant | 0 | 0 | In-vitro hepatotoxicity study of synthetic cathinones; amphetamine only mentioned as a comparator, no PK parameters. |
| popPK | Roque_2021_2 | irrelevant | 0 | 0 | In vitro hepatotoxicity study of 4-FMA (a different amphetamine analogue) with no PK disposition parameters for amfetamine. |
| popPK | Rowley_2012 | relevant | 6 | 4 | Rat PK/PD study with d-amfetamine as subject drug; abstract gives Cmax, tmax, AUC comparisons but no CL/V/ka values, which may be in figures/tables not provided. |
| popPK | Scheffler_2024 | irrelevant | 0 | 0 | Neuroimaging brain-age study of substance use disorders; no PK parameters for amfetamine. |
| popPK | Tsuda_2020 | relevant | 10 | 3 | Population PK model of d-amphetamine (one-compartment, first-order absorption with lag) is described, but no numeric parameter values (CL, V, ka) appear in the evidence — they likely live in tables/figures not provided. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK model of d-amphetamine in rats and NHPs, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
