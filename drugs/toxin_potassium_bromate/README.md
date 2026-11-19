<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Potassium bromate&quot;}]"></div>

# Potassium bromate

- **generic name:** Potassium bromate
- **T3DB:** [T3D1716](http://www.t3db.ca/toxins/T3D1716) · **PubChem:** [CID 289509](https://pubchem.ncbi.nlm.nih.gov/compound/289509)

## About

Potassium bromate is a chemical compound of potassium and bromine. It may be used as a flour improver, strengthening the dough and allowing higher rising, as well as in the production of malt barley. However, its use in food products in now banned in most countries. …

- **Category:** Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Potassium bromate may be used as a flour improver, strengthening the dough and allowing higher rising, as well as in the production of malt barley. However, its use in food products in now banned in most countries.
- **Mechanism of toxicity:** Bromine is a powerful oxidizing agent and is able to release oxygen free radicals from the water in mucous membranes. These free radicals are also potent oxidizers and produce tissue damage. …
- **Health effects:** Bromine vapour causes irritation and direct damage to the mucous membranes. Elemental bromine also burns the skin. …
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.
- **Acute toxicity:** LD50: 321 mg/kg (Oral, Rat); LD50: 177 mg/kg (Intraperitoneal, Mouse)
- **Treatment:** EYES: irrigate opened eyes for several minutes under running water. …
- **Detected in:** blood, cerebrospinal fluid, saliva, urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1716">T3DB T3D1716</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7758-01-2</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 17:01 | 7:02 | 0/0/0 | 0/0/0 | 0/0/0 | 229,242/6,434 | ollama / glm-5.3-flash | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 40 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kurokawa_1986.pdf` | Kurokawa Y et al., Dose-response studies on the carcinogen…, Journal of the National Can… (1986) | pd | 4 |  | [3463824](https://www.ncbi.nlm.nih.gov/pubmed/3463824) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-11-14 17:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Mareed_2022 | irrelevant | 1 | 1 | This is a toxicodynamic (oxidative stress/genotoxicity) mouse study with dose and time points but no kinetic parameters such as half-life, clearance, or rate constants for potassium bromate. |
| popPK | Aoki_2020 | irrelevant | 0 | 0 | Mutagenesis dose-response study with no kinetic parameters (no half-life, rate constants, clearance, or model); only drinking water doses reported. |
| popPK | Bauer_2021 | irrelevant | 0 | 0 | Potassium bromate appears only as a nephrotoxicity test compound with no kinetic parameters reported. |
| popPK | Bausinger_2014 | irrelevant | 1 | 1 | In vitro genotoxicity/repair study; no toxicokinetic parameters (no half-life, rate constants, clearance etc.), only DNA damage induction and repair in cultured human cells with qualitative concentration ranges. |
| popPK | Bausinger_2016 | irrelevant | 0 | 0 | Potassium bromate appears only as an ex vivo DNA-damaging agent in a comet assay methodological study; no kinetic parameters of any kind are reported. |
| popPK | Chipman_2006 | irrelevant | 0 | 0 | This is a mechanistic/genotoxicity discussion with no numeric toxicokinetic parameters for potassium bromate anywhere in the evidence. |
| popPK | Delker_2006 | relevant | 4 | 3 | Measures 18O tissue deposition time-course (5 and 24 h) and biphasic kidney dose-response after oral KBr18O3 in rats, but no formal kinetic parameters (half-life, rate constants) and no numeric deposition values appear in the evidence. |
| popPK | Dongmei_2015 | irrelevant | 1 | 0 | This is an acute/subacute toxicity study reporting only LD50 and toxicity indicators, with no kinetic parameters. |
| popPK | Fernández-Bertólez_2021 | irrelevant | 0 | 0 | KBrO₃ is only an in-vitro genotoxicant in comet assay dose–response tests; no toxicokinetic parameter (half-life, clearance, rate constants, partition coefficients) is reported. |
| popPK | Fujie_1988 | irrelevant | 1 | 1 | This is a cytogenetic outcome study with a time course of chromosome aberrations, not a kinetic parameter (no half-life, clearance, rate constants, or concentrations reported numerically). |
| popPK | Hayashi_1985 | irrelevant | 0 | 0 | This is a risk assessment/dose-response modeling paper estimating virtually safe doses, with no toxicokinetic parameters (no half-lives, rate constants, clearances, or partition coefficients) reported. |
| popPK | Hayashi_1989 | irrelevant | 0 | 0 | This is a genotoxicity (micronucleus) study; potassium bromate is only one of 17 test chemicals with no kinetic parameters (no half-life, clearance, rate constants, etc.) reported. |
| popPK | Hooth_2002 | irrelevant | 0 | 0 | This is a carcinogenicity study of potassium bromate in drinking water with no toxicokinetic parameters (no half-lives, rate constants, clearances, or model parameters) reported. |
| popPK | Khan_2012 | irrelevant | 0 | 1 | This is a rat nephrotoxicity/protective study of rutin against KBrO3 reporting only clinical chemistry and histology biomarkers — no half-life, clearance, partition or kinetic parameters for KBrO3 itself. |
| popPK | Kurokawa_1985 | irrelevant | 0 | 0 | This is a carcinogenesis dose-response study with no toxicokinetic parameters of potassium bromate. |
| popPK | Kurokawa_1986 | irrelevant | 0 | 0 | This is a carcinogenicity dose-response study reporting tumor incidences and VSD risk values, with no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for potassium bromate. |
| popPK | Loft_1998 | irrelevant | 0 | 0 | Potassium bromate is only mentioned as a model compound inducing oxidative DNA damage, with no kinetic parameters or numeric values reported. |
| popPK | Mangal_2009 | irrelevant | 1 | 1 | KBrO3 is used only as in-vitro positive control to induce DNA damage; no toxicokinetic parameters (no half-life, clearance, partition coefficients, or disposition model) are reported. |
| popPK | Mattioli_2006 | irrelevant | 1 | 4 | This is an in vitro genotoxicity/DNA damage study with exposure concentrations and comet assay results, not toxicokinetic parameters; only exposure concentrations (mM) appear, no kinetic values. |
| popPK | Møller_2020 | irrelevant | 0 | 0 | KBrO3 is an in vitro assay-control reagent for the comet assay; no toxicokinetic parameters (half-life, clearance, rates, partitioning) are reported for it. |
| popPK | Platel_2009 | irrelevant | 0 | 0 | In vitro genotoxicity dose-response study with no toxicokinetic parameters reported. |
| popPK | Platel_2010 | irrelevant | 0 | 0 | In vitro gene expression study in TK6 cells with no toxicokinetic parameters for potassium bromate. |
| popPK | Platel_2011 | irrelevant | 0 | 0 | In vitro genotoxicity dose-response study (NOGELs) with no toxicokinetic parameters for potassium bromate; no numeric kinetic values present. |
| popPK | Reddy_2026 | irrelevant | 1 | 1 | This is an acute/chronic toxicity study (LC50, behaviour, glucose, histology) with no toxicokinetic parameters (no half-life, clearance, absorption, partition, or disposition model) for KBrO₃; LC50 is a toxicity endpoint, not a kinetic parameter. |
| popPK | Robbiano_1999 | irrelevant | 0 | 0 | Potassium bromate is a tested genotoxicant; the doses given are nominal concentrations, not any kinetic parameter (no half-life, clearance, model, or absorption values appear). |
| popPK | Sai_1991 | irrelevant | 1 | 1 | Mechanistic outcome study of 8-OH-dG/LPO/GSH in rat kidney with no kinetic parameters (no half-life, rate constants, clearance, or concentrations of KBrO3), only dose and time points. |
| popPK | Seager_2012 | irrelevant | 0 | 0 | In vitro genotoxicity dose-response study with no toxicokinetic parameters for potassium bromate. |
| popPK | Seager_2014 | irrelevant | 0 | 0 | Potassium bromate appears only as a genotoxicity test agent in an in vitro micronucleus assay; no toxicokinetic parameters of any kind are reported. |
| popPK | Spassova_2013 | irrelevant | 2 | 1 | Dose-response genotoxicity modelling with no numeric toxicokinetic parameters (half-life, rate constants, clearance) for potassium bromate in the evidence. |
| popPK | Tekneci_2024 | irrelevant | 0 | 2 | KBrO3 is a genotoxicity positive control in an in vitro comet assay; no toxicokinetic parameters (half-life, clearance, partition, Vmax, etc.) are measured, and dose-response figures are not provided. |
| popPK | Umemura_2006 | irrelevant | 0 | 0 | This is a mechanistic/carcinogenicity review of bromate-induced cancer with no kinetic parameters (no half-lives, rate constants, clearance, or partition coefficients) for potassium bromate. |
| popPK | Wang_2016 | irrelevant | 1 | 3 | Only acute toxicity endpoints (EC50/LC50), not toxicokinetic parameters; values are reported numerically but it is an ecotoxicity outcome study, not disposition kinetics. |
| popPK | Wei_2009 | irrelevant | 0 | 0 | This is a dose-response carcinogenicity study in rats with no toxicokinetic parameters (no half-life, clearance, rate constants, or model values) for potassium bromate. |
| popPK | Yamaguchi_2008 | irrelevant | 0 | 0 | This is a dose-response mutagenicity/toxicity study with no kinetic parameters (no half-life, clearance, absorption or rate constants) reported for KBrO3. |
| popPK | Öztürk_2020 | irrelevant | 0 | 0 | Plant (Allium cepa) toxicity dose-response study with no toxicokinetic parameters; measured effects are cytogenetic/biochemical, not disposition. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_bromate%5D&body=Drug%3A%20potassium_bromate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_potassium_bromate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
