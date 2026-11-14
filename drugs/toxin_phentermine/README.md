<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phentermine&quot;}]"></div>

# Phentermine

- **generic name:** Phentermine
- **T3DB:** [T3D2709](http://www.t3db.ca/toxins/T3D2709) · **DrugBank:** [DB00191](https://go.drugbank.com/drugs/DB00191) · **PubChem:** [CID 4771](https://pubchem.ncbi.nlm.nih.gov/compound/4771)
- **groups:** approved, illicit, investigational

## About

Phentermine is only found in individuals that have used or taken this drug. It is a central nervous system stimulant and sympathomimetic with actions and uses similar to those of dextroamphetamine. It has been used most frequently in the treatment of obesity. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** phentermine is rapidly absorbed after oral ingestion.
- **Sources and uses:** For the treatment and management of obesity.
- **Mechanism of toxicity:** Phentermine is an amphetamine that stimulates neurons to release or maintain high levels of a particular group of neurotransmitters known as catecholamines; these include dopamine and norepinephrine. High levels of these catecholamines tend to suppress hunger signals and appetite. …
- **Health effects:** Using large amounts of these drugs can result in a condition known as amphetamine psychosis -- which can result in auditory, visual and tactile hallucinations, intense paranoia, irrational thoughts and beliefs, delusions, and mental confusion. Using large amounts of these drugs can result in a condition known as amphetamine psychosis -- which can result in auditory, visual and tactile hallucinations, intense paranoia, irrational thoughts and beliefs, delusions, and mental confusion.
- **Acute toxicity:** LD50: 15 to 20 mg/kg (monkey).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2709">T3DB T3D2709</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 122-09-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8080">ChEBI 8080</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phentermine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` target, `MAOB` target | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `MAOA` target | DrugBank actor |
| metabolism | platelet | `MAOB` target | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NPY (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 18:10 | 8:55 | 0/0/0 | 0/0/0 | 0/0/0 | 257,862/7,866 | einfracz / qwen3.8-flash-next | 11 | 4/7 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 53 matched, 53 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaddoumi_2003.pdf` | Kaddoumi A et al., Liquid chromatography studies on the ph…, Journal of chromatography.… (2003) | popPK | 10 | [10.1016/s1570-0232(03)00231-9](https://doi.org/10.1016/s1570-0232(03)00231-9) | [12798189](https://pubmed.ncbi.nlm.nih.gov/12798189) | The paper reports quantitative kinetic parameters for phentermine in rats, but the specific numeric values are not present in the provided abstract text (likely in the full results tables or figures). |
| `Hsia_2020.pdf` | Hsia DS et al., A randomized, double-blind, placebo-con…, Diabetes, obesity & metabol… (2020) | popPK | 8 | [10.1111/dom.13910](https://doi.org/10.1111/dom.13910) | [31696603](https://pubmed.ncbi.nlm.nih.gov/31696603) | The paper reports phentermine toxicokinetic parameters (t1/2, CL/F, Vc/F) in humans, but specific numeric values are not present in the text, likely residing in tables or supplementary material. |
| `Yoon_2023.pdf` | Yoon S et al., Pharmacokinetic and pharmacodynamic int…, Expert opinion on drug meta… (2023) | popPK | 7 | [10.1080/17425255.2023.2249397](https://doi.org/10.1080/17425255.2023.2249397) | [37593838](https://pubmed.ncbi.nlm.nih.gov/37593838) | The study reports phentermine as a subject in a human PK interaction study, providing statistical evidence of kinetic behavior (AUCtau,ss, Cmax,ss), but specific numeric parameter values are not present in the provided text. |
| `Addy_2009.pdf` | Addy C et al., Pharmacokinetics, safety, and tolerabil…, Journal of clinical pharmac… (2009) | popPK | 6 | [10.1177/0091270009341651](https://doi.org/10.1177/0091270009341651) | [19783715](https://pubmed.ncbi.nlm.nih.gov/19783715) | The paper studies phentermine PK in humans, reporting only a geometric mean ratio for AUC; specific kinetic parameters like half-life or clearance are not provided in the text. |
| `Groenewoud_1993.pdf` | Groenewoud G et al., Steady-state pharmacokinetics of phente…, International journal of cl… (1993) | popPK | 5 |  | [8225680](https://pubmed.ncbi.nlm.nih.gov/8225680) | The paper studies phentermine pharmacokinetics in humans, but no specific numeric kinetic parameters (e.g., t1/2, Vd, Cl) are provided in the evidence. |
| `Ni_2015.pdf` | Ni Y et al., Simultaneous determination of phentermi…, Journal of pharmaceutical a… (2015) | popPK | 5 | [10.1016/j.jpba.2015.01.035](https://doi.org/10.1016/j.jpba.2015.01.035) | [25668796](https://pubmed.ncbi.nlm.nih.gov/25668796) | The paper states that pharmacokinetic parameters were determined in a study, but the abstract text provided contains only analytical method validation data (ranges, precision) and does not list the actual numeric kinetic parameters (e.g., t1/2, CL, Vd) which are presumably in the results section or tables not included here. |

<sub>queue written 2026-11-12 18:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Addy_2009 | relevant | 6 | 2 | The paper studies phentermine PK in humans, reporting only a geometric mean ratio for AUC; specific kinetic parameters like half-life or clearance are not provided in the text. |
| popPK | Ahmad_2026 | irrelevant | 2 | 2 | The paper is a narrative review focused on pharmacodynamics, not primary toxicokinetics; while it mentions a half-life range (29–49h) and CYP3A4 metabolism, these are summary values from other studies rather than original data generated by this paper. |
| popPK | Bang_2010 | irrelevant | 0 | 0 | This is a clinical case report regarding pulmonary hypertension side effects, containing no quantitative toxicokinetic parameters for phentermine. |
| popPK | Bassi_2022 | irrelevant | 0 | 0 | Phentermine is mentioned only as a potential adjunctive therapy agent, with no toxicokinetic parameters or numeric data reported. |
| popPK | Catoira_2014 | irrelevant | 1 | 0 | The paper is a review discussing mechanisms and general pharmacokinetics without reporting original quantitative kinetic parameters for phentermine. |
| popPK | Cho_1973 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Concepción-Zavaleta_2025 | irrelevant | 0 | 0 | The paper is a narrative review on MASLD/MASH treatments where phentermine is only mentioned as a co-formulated drug (phentermine-topiramate) with no quantitative kinetic parameters reported. |
| popPK | Crenier_1999 | irrelevant | 0 | 0 | The paper focuses on orlistat; phentermine is mentioned only as a withdrawn comparator drug with no toxicokinetic data reported. |
| popPK | Douglas_1983 | irrelevant | 2 | 1 | The paper reports plasma concentrations and clinical outcomes but explicitly states that concentrations did not correlate with effects, and it provides no specific kinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Groenewoud_1993 | relevant | 5 | 0 | The paper studies phentermine pharmacokinetics in humans, but no specific numeric kinetic parameters (e.g., t1/2, Vd, Cl) are provided in the evidence. |
| PGx | Guzman_2014 | not_relevant | 1 | 0 | The provided text is an abstract of a review article and does not contain specific data, effect sizes, or results regarding how gene variants affect phentermine PK/PD parameters. |
| popPK | Hanson_1985 | irrelevant | 2 | 0 | The paper focuses on the synthesis and comparative imaging efficacy of a phentermine derivative (4-aminophentermine) rather than reporting quantitative toxicokinetic parameters for phentermine itself. |
| popPK | Hsia_2020 | relevant | 8 | 2 | The paper reports phentermine toxicokinetic parameters (t1/2, CL/F, Vc/F) in humans, but specific numeric values are not present in the text, likely residing in tables or supplementary material. |
| popPK | Kaddoumi_2003 | relevant | 10 | 2 | The paper reports quantitative kinetic parameters for phentermine in rats, but the specific numeric values are not present in the provided abstract text (likely in the full results tables or figures). |
| popPK | Katsu_2001 | irrelevant | 0 | 0 | The paper describes the development and characterization of an analytical ion-selective electrode for phentermine detection, reporting no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| PGx | Lang_2026 | not_relevant | 0 | 0 | The paper is a case series on clinical outcomes (weight loss) in hypothalamic obesity with no genetic analysis, gene variants, or pharmacokinetic/pharmacodynamic parameter measurements linked to genotype. |
| popPK | Lee_1998 | irrelevant | 0 | 0 | The paper is a clinical case report describing psychotic symptoms from phentermine overdose with no quantitative toxicokinetic parameters. |
| popPK | Lei_2021 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis focusing on efficacy and adverse events, containing no toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Li_1999 | irrelevant | 0 | 0 | This is an epidemiological case series examining dose-response relationships for valvulopathy with no kinetic parameters of any kind. |
| popPK | Lüllmann_1973 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Morita_1983 | irrelevant | 0 | 0 | The paper reports pharmacodynamic interactions (inhibition of 5-HT clearance) and relative pulmonary accumulation ratios, but no quantitative toxicokinetic parameters (e.g., half-lives, Vd, CL) for phentermine are provided. |
| PGx | Nagi_2024 | not_relevant | 0 | 0 | The paper reports a rare adverse event (ischemic colitis) associated with phentermine use but does not investigate any genetic variants, genotypes, or phenotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ni_2015 | relevant | 5 | 0 | The paper states that pharmacokinetic parameters were determined in a study, but the abstract text provided contains only analytical method validation data (ranges, precision) and does not list the actual numeric kinetic parameters (e.g., t1/2, CL, Vd) which are presumably in the results section or tables not included here. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events), not a toxicokinetic study reporting parameters like half-life, clearance, or partition coefficients. |
| popPK | Papasava_1985 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study on self-administration rates, reporting no quantitative toxicokinetic parameters (half-life, clearance, volume, etc.). |
| PGx | Paszkowiak_2023 | not_relevant | 2 | 3 | The paper reports an association between a PLXNA4 genotype and a clinical outcome (weight loss magnitude) but does not measure or report specific pharmacokinetic (plasma concentrations) or pharmacodynamic (receptor binding/enzymatic activity) parameters; the link is a clinical observation rather than a defined PGx parameter change. |
| popPK | Pearl_2023 | irrelevant | 0 | 0 | Phentermine is mentioned only as a co-prescribed drug for weight loss, and the paper is a review of topiramate with no phentermine kinetic parameters. |
| popPK | Pires_2023 | relevant | 3 | 1 | The paper is a general review of amphetamine-type stimulants where phentermine is only listed among compounds; the specific kinetic parameters provided in the text refer to amphetamine, methamphetamine, and MDMA, not phentermine. |
| popPK | Roy_2000 | irrelevant | 0 | 0 | The paper investigates serotonin receptor mRNA expression in heart valves and mentions phentermine only as part of a historical adverse event context, reporting no quantitative kinetic parameters. |
| popPK | Schechter_1996 | irrelevant | 0 | 0 | The paper reports ED50 values for behavioral drug discrimination, which are potency measures rather than toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Shram_2022 | irrelevant | 1 | 0 | Phentermine is used solely as an active comparator in an abuse-potential study; no quantitative toxicokinetic parameters are reported for phentermine. |
| popPK | Siebenhofer_2021 | irrelevant | 0 | 0 | The paper is a Cochrane review of clinical outcomes (blood pressure, weight, mortality) and contains no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for phentermine. |
| PGx | Solas_2016 | not_relevant | 0 | 0 | The text is an abstract of a general review article on obesity treatments and does not report specific pharmacogenomic effects on PK/PD parameters for phentermine. |
| popPK | Steidl_2010 | irrelevant | 0 | 0 | The paper is a clinical case report of rhabdomyolysis and contains no quantitative toxicokinetic parameters. |
| popPK | Strzelczyk_2022 | irrelevant | 0 | 0 | Phentermine is mentioned only as a historical comparator for fenfluramine's cardiac safety profile in obesity treatment, with no kinetic parameters provided. |
| popPK | Wellman_1999 | irrelevant | 1 | 0 | The paper is a qualitative review of synergistic mechanisms with no quantitative toxicokinetic parameters for phentermine. |
| popPK | Xu_2011 | irrelevant | 0 | 0 | The paper discusses hepatocellular carcinoma and contrast-enhanced sonography, with no mention of phentermine or its toxicokinetic parameters. |
| popPK | Yoon_2023 | relevant | 7 | 0 | The study reports phentermine as a subject in a human PK interaction study, providing statistical evidence of kinetic behavior (AUCtau,ss, Cmax,ss), but specific numeric parameter values are not present in the provided text. |
| popPK | Zabik_1981 | irrelevant | 0 | 0 | The paper describes pharmacodynamic effects (appetite, stimulation) of resinated forms but reports no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Zhi_2002 | irrelevant | 4 | 0 | The paper is an interaction study using phentermine as a comparator/co-exposure to test orlistat, not a primary toxicokinetic characterization of phentermine, and no specific numerical PK parameters for phentermine are listed in the provided text. |
| popPK | unknown_2013 | irrelevant | 0 | 0 | The paper focuses on HIV medications and does not mention phentermine or any related kinetic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| popPK | unknown_2021_2 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | unknown_2021_3 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | unknown_2022_2 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| popPK | von_1998 | irrelevant | 2 | 0 | Phentermine is shown to have negligible inhibition of P450 enzymes, meaning it lacks the specific metabolic parameter (IC50/Ki) for inhibition, and no disposition kinetic parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphentermine%5D&body=Drug%3A%20phentermine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phentermine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
