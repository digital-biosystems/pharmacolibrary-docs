# flecainide

- **generic name:** flecainide
- **ATC codes:** `C01BC04`
- **DrugBank:** [DB01195](https://go.drugbank.com/drugs/DB01195)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Flecainide is a Class I anti-arrhythmic agent like [encainide] and [propafenone].[A186880] Flecainide’s development began in 1966 and was first synthesized in 1972 as an attempt to generate new anesthetics.[A186931] It is used to prevent supraventricular and ventricular arrhythmias, as well as paroxysmal atrial fibrillation and flutter.[L8878,L5056]

Flecainide was granted FDA approval on 31 October 1985.[L8875]

**Indication.** In New Zealand and America, flecainide is indicated to prevent supraventricular arrhythmias and ventricular arrhythmias.[L8878] In the United States, it is also indicated to prevent paroxysmal atrial fibrillation and flutter.[A186886,L5056]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 09:58 | 5:10 | 0/4/0 | 1/1/0 | 0/0/0 | 130,793/9,482 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 3/0 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Bergenholm_2016](drugs/drug_flecainide/Flecainide_Bergenholm2016_reference.md) | Bergenholm L et al., PKPD modelling of PR and QRS intervals…, Journal of pharmacological… (2016) | [10.1016/j.vascn.2016.01.002](https://doi.org/10.1016/j.vascn.2016.01.002) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Doki_2006](drugs/drug_flecainide/Flecainide_Doki2006_reference.md) | Doki K et al., Effect of CYP2D6 genotype on flecainide…, European journal of clinica… (2006) | [10.1007/s00228-006-0188-x](https://doi.org/10.1007/s00228-006-0188-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Doki_2012](drugs/drug_flecainide/Flecainide_Doki2012_reference.md) | Doki K et al., CYP2D6 genotype affects age-related dec…, Pharmacogenetics and genomi… (2012) | [10.1097/FPC.0b013e3283588fe5](https://doi.org/10.1097/FPC.0b013e3283588fe5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Sangrador_1989](drugs/drug_flecainide/Flecainide_Sangrador1989_reference.md) | Sangrador G et al., Clinical pharmacokinetics of intravenou…, Journal of clinical pharmac… (1989) | [10.1111/j.1365-2710.1989.tb00252.x](https://doi.org/10.1111/j.1365-2710.1989.tb00252.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abriel_2000](drugs/drug_flecainide/pd_Abriel_2000_unknown.md) | Abriel H et al., Molecular pharmacology of the sodium ch…, Circulation (2000) | [10.1161/01.cir.102.8.921](https://doi.org/10.1161/01.cir.102.8.921) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Allan_1986](drugs/drug_flecainide/pd_Allan_1986_unknown.md) | Allan G et al., BW A256C, a chemically novel class 1 an…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb10209.x](https://doi.org/10.1111/j.1476-5381.1986.tb10209.x) |

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Doki_2006.pdf` | Doki K et al., Effect of CYP2D6 genotype on flecainide…, European journal of clinica… (2006) | popPK | 10 | [10.1007/s00228-006-0188-x](https://doi.org/10.1007/s00228-006-0188-x) | [16944116](https://pubmed.ncbi.nlm.nih.gov/16944116) | The paper explicitly presents a population pharmacokinetic analysis of flecainide with quantitative clearance, volume, and covariate parameter estimates. |
| `Doki_2012.pdf` | Doki K et al., CYP2D6 genotype affects age-related dec…, Pharmacogenetics and genomi… (2012) | popPK | 10 | [10.1097/FPC.0b013e3283588fe5](https://doi.org/10.1097/FPC.0b013e3283588fe5) | [22941032](https://pubmed.ncbi.nlm.nih.gov/22941032) | The paper explicitly reports a population pharmacokinetic model for flecainide with quantitative clearance parameters, interindividual variability, and covariate relationships. |
| `Bergenholm_2016.pdf` | Bergenholm L et al., PKPD modelling of PR and QRS intervals…, Journal of pharmacological… (2016) | popPK | 9 | [10.1016/j.vascn.2016.01.002](https://doi.org/10.1016/j.vascn.2016.01.002) | [26780675](https://pubmed.ncbi.nlm.nih.gov/26780675) | The paper develops population compartmental PK models for flecainide in dogs, with quantitative parameter estimates explicitly provided in the supplementary material. |
| `Deneer_2004.pdf` | Deneer VH et al., Absorption kinetics and pharmacodynamic…, European journal of clinica… (2004) | popPK | 9 | [10.1007/s00228-004-0831-3](https://doi.org/10.1007/s00228-004-0831-3) | [15619132](https://pubmed.ncbi.nlm.nih.gov/15619132) | The paper reports quantitative compartmental pharmacokinetic parameters (ka, Cmax, tlag) for flecainide derived from a one-compartment model with first-order absorption in humans. |
| `Horie_2014.pdf` | Horie A et al., Pharmacokinetic variability of flecaini…, Biopharmaceutics & drug dis… (2014) | popPK | 9 | [10.1002/bdd.1877](https://doi.org/10.1002/bdd.1877) | [24166085](https://pubmed.ncbi.nlm.nih.gov/24166085) | The paper reports quantitative compartmental PK parameters (CL/F and V/F) for flecainide in pediatric patients using a NONMEM-based population pharmacokinetic analysis. |
| `Sangrador_1989.pdf` | Sangrador G et al., Clinical pharmacokinetics of intravenou…, Journal of clinical pharmac… (1989) | popPK | 9 | [10.1111/j.1365-2710.1989.tb00252.x](https://doi.org/10.1111/j.1365-2710.1989.tb00252.x) | [2507556](https://pubmed.ncbi.nlm.nih.gov/2507556) | The paper explicitly fits a two-compartment model and reports quantitative disposition parameters (clearance, volume of distribution, half-life, and rate constants) for flecainide in humans. |
| `Sällström_2014.pdf` | Sällström J et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacological… (2014) | popPK | 9 | [10.1016/j.vascn.2013.10.001](https://doi.org/10.1016/j.vascn.2013.10.001) | [24140388](https://pubmed.ncbi.nlm.nih.gov/24140388) | The paper explicitly reports quantitative pharmacokinetic parameters for flecainide derived from a one-compartment oral model in beagle dogs. |

<sub>queue written 2026-09-09T09:54:21.398144+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abriel_2000 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of ion channel pharmacology, not a pharmacokinetic study, and reports no disposition parameters for flecainide. |
| popPK | Allan_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and electrophysiology of BW A256C, using flecainide only as a comparator agent without reporting its pharmacokinetic parameters. |
| popPK | An_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of flecainide's effect on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cheng_2017 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating ion channel modulation, and flecainide is used only as a comparator agent to probe channel subtypes, with no pharmacokinetic parameters reported. |
| PD | Cheng_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of NS5806; flecainide is only mentioned as a qualitative comparator for channel discrimination without providing specific numeric PD parameters or concentration-response data for it. |
| popPK | Cros_2012 | irrelevant | 0 | 0 | The study is a cardiac safety assessment (ECG/QRS duration) in dogs, not a pharmacokinetic study, and reports no disposition parameters for flecainide. |
| PD | Cros_2012 | not_relevant | 3 | 2 | The paper reports a maximum effect (Emax) for QRS prolongation but does not provide concentration data or an exposure-response relationship, making it a qualitative/maximum-effect analysis rather than a PD model with derivable parameters like EC50. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions flecainide as a contraindicated interacting drug, providing no pharmacokinetic parameters for flecainide. |
| PD | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions flecainide as a contraindicated drug interaction, providing no pharmacodynamic or exposure-response data for flecainide. |
| popPK | Doki_2018 | irrelevant | not captured | not captured | This review summarizes pharmacogenetic effects on flecainide clearance and efficacy from cited studies without reporting original quantitative population-PK parameters. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and molecular modeling paper investigating channel interactions, not a pharmacokinetic study, and flecainide is only mentioned as a comparator. |
| popPK | Hoppe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels, not a pharmacokinetic study, and reports no disposition parameters for flecainide. |
| PD | Hoppe_1998 | not_relevant | 0 | 0 | The study reports no effect of flecainide on the hyperpolarization-activated inward current (If), providing no concentration-effect relationship or numeric PD parameters for the drug. |
| popPK | Lei_2000 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of ion channels in rabbit cells where flecainide is used only as a pharmacological blocker, not as a subject for pharmacokinetic analysis. |
| popPK | Lim_2010 | irrelevant | not captured | not captured | The study focuses on pharmacodynamic ECG endpoints and only references prior pharmacokinetic data without reporting new quantitative PK parameters or population modeling for flecainide. |
| popPK | Mitcheson_1999 | irrelevant | 0 | 0 | The paper is an electrophysiology study measuring ion channel currents in rabbit myocytes, not a pharmacokinetic study, and flecainide is used only as a pharmacological tool to characterize the current. |
| popPK | Ranger_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of flecainide's interaction with sodium channels in canine Purkinje fibers and does not report pharmacokinetic parameters. |
| popPK | Seyler_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels, and flecainide is only mentioned as a comparator that did not modulate currents, with no pharmacokinetic parameters reported. |
| PD | Seyler_2014 | not_relevant | 0 | 0 | The paper states that flecainide did not significantly modulate K2P currents and provides no numeric PD parameters or concentration-effect data for flecainide. |
| popPK | Smallwood_1989 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of flecainide enantiomers in canine Purkinje fibres and does not report pharmacokinetic parameters. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on homology modeling of channel block, not a pharmacokinetic study, and contains no disposition parameters. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and structural docking of flecainide in the Kv1.5 channel, not on pharmacokinetic or pharmacodynamic exposure-response analysis. |
| popPK | Verotta_1991 | irrelevant | 1 | 0 | The paper focuses on a pharmacodynamic modeling methodology and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for flecainide. |
| PD | Verotta_1991 | not_relevant | 4 | 2 | The text describes a semiparametric method and lists flecainide as an application, but the provided abstract does not contain the specific numeric PD parameters (e.g., Emax, EC50, spline coefficients) or the resulting effect-concentration curve data. |
| popPK | Wang_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel inhibition (IC50) and does not report pharmacokinetic disposition parameters. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of hesperetin on potassium channels and does not involve flecainide or pharmacokinetic parameters. |
| PD | Wang_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of hesperetin, not flecainide. |
| popPK | Yonezawa_2002 | irrelevant | not captured | not captured | Flecainide is only briefly mentioned in the introduction as an example of a CYP2D6 substrate, while the study exclusively reports population PK parameters for mexiletine. |
| popPK | Yue_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel blockade in canine myocytes and does not report pharmacokinetic disposition parameters for flecainide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_flecainide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
