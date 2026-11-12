<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Marinobufagenin&quot;}]"></div>

# Marinobufagenin

- **generic name:** Marinobufagenin
- **T3DB:** [T3D2536](http://www.t3db.ca/toxins/T3D2536) · **PubChem:** [CID 11969465](https://pubchem.ncbi.nlm.nih.gov/compound/11969465)

## About

Marinobufagin is a cardiotoxic bufanolide steroid secreted by certain toads (Bufo rubescens, Bufo marinus). It is a vasoconstrictor.

- **Category:** Animal Toxin, Natural Toxin
- **Route of exposure:** ingestion
- **Sources and uses:** Marinobufagin is a cardiotoxic bufanolide steroid secreted by certain toads (Bufo rubescens, Bufo marinus).
- **Mechanism of toxicity:** Marinobufagin blocks the sodium/potassium pump in heart tissue.
- **Health effects:** Marinobufagin is cardiotoxic and also causes vasoconstriction.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2536">T3DB T3D2536</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 470-42-8</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Banfi_2021_of_parasitemia](drugs/toxin_marinobufagenin/pd_Banfi_2021_of_parasitemia.md) | parasitemia ← marinobufagin · direct linear effect | — | Banfi FF et al., Dehydrobufotenin extracted from the Ama…, The journal of venomous ani… (2021) | [10.1590/1678-9199-JVATITD-2020-0073](https://doi.org/10.1590/1678-9199-JVATITD-2020-0073) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 03:07 | 10:45 | 0/0/0 | 0/1/0 | 0/0/0 | 217,213/5,642 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhao_2024.pdf` | Zhao J et al., Quantification of nine bufadienolides o…, Journal of pharmaceutical a… (2024) | popPK | 8 | [10.1016/j.jpba.2023.115852](https://doi.org/10.1016/j.jpba.2023.115852) | [37952449](https://pubmed.ncbi.nlm.nih.gov/37952449) | The paper reports pharmacokinetic studies of marinobufagin in rats, including tissue distribution and AUC, but specific numeric parameter values are not explicitly detailed in the provided abstract. |
| `Kayumov_2025.pdf` | Kayumov M et al., 3CLpro of SARS-CoV-2 as a new target fo…, Journal of computer-aided m… (2025) | pd | 5 | [10.1007/s10822-025-00623-2](https://doi.org/10.1007/s10822-025-00623-2) | [40616739](https://www.ncbi.nlm.nih.gov/pubmed/40616739) | metadata signals extractable PD data (IC50) |
| `Krivoĭ_2006.pdf` | Krivoĭ II et al., [Role of the alpha2-isoform of Na+, K(+…, Biofizika (2006) | pd | 4 |  | [17131832](https://www.ncbi.nlm.nih.gov/pubmed/17131832) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-11 03:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelfatah_2019 | irrelevant | 0 | 0 | The paper reports cytotoxicity and mechanistic (tubulin binding) data for venoms and individual bufadienolides but contains no pharmacokinetic or toxicokinetic parameters such as half-life, clearance, or distribution volumes for marinobufagenin. |
| popPK | Bagrov_2000 | irrelevant | 1 | 0 | The paper reports pharmacodynamic responses (vasoconstriction/relaxation and enzyme inhibition) in isolated tissue, not quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for marinobufagenin. |
| popPK | Banfi_2021 | irrelevant | 0 | 0 | The paper reports in silico docking and in vitro antimalarial activity/cytotoxicity for marinobufagin, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance in humans or animals. |
| popPK | Bolignano_2023 | irrelevant | 1 | 2 | The study is a cross-sectional clinical investigation reporting urinary MBG concentrations and correlations with renal function, but it provides no quantitative kinetic parameters such as clearance, half-life, or rate constants. |
| popPK | Buckalew_2018 | irrelevant | 0 | 0 | This is a clinical review discussing pathophysiology and trials of antibody fragments, containing no quantitative toxicokinetic parameters (half-life, clearance, etc.) for marinobufagenin. |
| popPK | Carvalho_2019 | irrelevant | 0 | 0 | The paper focuses on the anti-inflammatory mechanisms and Na+/K+-ATPase inhibition potency (IC50) of marinobufagenin, but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The paper studies hydrocortisone pharmacokinetics/pharmacodynamics in septic shock patients and does not mention marinobufagenin. |
| popPK | Ciavarella_1985 | irrelevant | 0 | 0 | The paper focuses on the clinical progression of diabetic nephropathy in humans and does not contain any toxicokinetic data for marinobufagenin. |
| popPK | Ding_2010 | irrelevant | 0 | 0 | The paper describes a method for assessing myocardial perfusion using contrast agents in humans and does not contain any data on the toxicokinetics of marinobufagenin. |
| popPK | El-Okdi_2008 | irrelevant | 0 | 0 | The paper reports on the effects of marinobufagenin on collagen synthesis and wound healing (pharmacodynamics/toxicodynamics), but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for the substance itself. |
| popPK | Ferreira_2023 | irrelevant | 0 | 0 | The paper reports toxicity and antitumoral outcomes (LD50, behavioral changes, tumor reduction) but does not contain quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Haller_2014 | irrelevant | 0 | 0 | The paper reports functional and histological outcomes (creatinine, fibrosis) in a passive immunization study, but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for marinobufagenin. |
| popPK | Iciek_2008 | irrelevant | 0 | 0 | The paper focuses on leptin gene polymorphisms and body weight in pregnant women, with no mention of marinobufagenin or its toxicokinetic parameters. |
| popPK | Iciek_2008_2 | irrelevant | 0 | 0 | The paper investigates leptin gene polymorphisms and metabolic parameters in diabetic pregnant women; 'MBG' likely refers to a metabolic index or is a typo, not marinobufagenin, and no kinetic parameters for marinobufagenin are reported. |
| popPK | Ilia_2012 | irrelevant | 0 | 0 | The paper investigates myocardial blush grade in coronary intervention patients and does not mention or provide toxicokinetic parameters for marinobufagenin. |
| popPK | Kayumov_2025 | irrelevant | 0 | 0 | The paper reports binding affinities and enzymatic IC50 values for SARS-CoV-2 3CLpro, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for marinobufagenin. |
| popPK | Krivoĭ_2006 | irrelevant | 0 | 0 | The paper reports pharmacodynamic potency (EC50) and physiological effects (inotropy) in rat diaphragm, not toxicokinetic parameters (e.g., half-life, clearance, distribution). |
| PGx | Ning_2015 | not_relevant | 0 | 0 | The paper characterizes the metabolism of resibufogenin to marinobufagenin but does not report pharmacogenomic effects (genotype differences) on PK or PD parameters of marinobufagenin. |
| popPK | Oliveira_2020 | irrelevant | 0 | 0 | The paper reports qualitative pharmacological activities (neuromuscular blockade, AChE inhibition) of a complex mixture containing marinobufagin, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for marinobufagin itself. |
| popPK | Oselkin_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacological mechanism of Na/K ATPase protection and neuroprotection, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance) for marinobufagenin. |
| popPK | Pavlovic_2020 | irrelevant | 0 | 0 | The paper is a narrative review discussing the physiological roles and biosynthesis of cardiotonic steroids, reporting no original quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for marinobufagenin. |
| popPK | Perez_2005 | irrelevant | 0 | 0 | The paper concerns angiographic indices of coronary perfusion in AMI patients and does not report any kinetic parameters for marinobufagenin. |
| popPK | Puschett_2008 | irrelevant | 2 | 0 | The paper reports qualitative observations of increased urinary excretion in a rat model but does not provide any specific quantitative kinetic parameters (such as half-life, rate constants, or clearance values) for marinobufagenin in the provided evidence. |
| popPK | Segal_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of marinobufagenin on rabbit sinoatrial node cells (physiology/functional response), not its toxicokinetic parameters (e.g., half-life, clearance, distribution volume). |
| popPK | Sui_2016 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of mesoporous bioactive glass (MBG) nanospheres, not marinobufagenin. |
| popPK | Ungi_2009 | irrelevant | 0 | 0 | The paper discusses angiographic perfusion grades in myocardial infarction and does not contain any data or kinetic parameters for marinobufagenin. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The paper focuses on a chemical separation and purification method (counter-current chromatography) for extracting bufadienolides, containing no toxicokinetic parameters or biological data for marinobufagenin. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper investigates the removal of colonic ammonia using a microemulsion formulation in rats and does not report any toxicokinetic parameters for marinobufagenin. |
| popPK | Zhao_2024 | relevant | 8 | 4 | The paper reports pharmacokinetic studies of marinobufagin in rats, including tissue distribution and AUC, but specific numeric parameter values are not explicitly detailed in the provided abstract. |
| PGx | de_2026 | not_relevant | 0 | 0 | The paper reports in silico pharmacokinetic and pharmacodynamic properties of marinobufagin, but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmarinobufagenin%5D&body=Drug%3A%20marinobufagenin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_marinobufagenin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
