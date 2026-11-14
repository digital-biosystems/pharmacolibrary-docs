<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Sodium nitroprusside&quot;}]"></div>

# Sodium nitroprusside

- **generic name:** Sodium nitroprusside
- **T3DB:** [T3D0768](http://www.t3db.ca/toxins/T3D0768) · **DrugBank:** [DB00325](https://go.drugbank.com/drugs/DB00325) · **PubChem:** [CID 11963579](https://pubchem.ncbi.nlm.nih.gov/compound/11963579)
- **groups:** approved, investigational

## About

Sodium nitroprusside is a chemical compound of sodium and cyanide. It is used as a vasodilator.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal
- **Sources and uses:** Sodium nitroprusside is used as a vasodilator.
- **Mechanism of toxicity:** Sodium nitroprusside is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0768">T3DB T3D0768</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 14402-89-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29321">ChEBI 29321</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_nitroprusside | metabolite | 261.921 | C5FeN6Na2O | PubChem | [11963579](https://pubchem.ncbi.nlm.nih.gov/compound/11963579) | Barrett_2015 |
| thiocyanate | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Barrett_2015_reference](drugs/toxin_sodium_nitroprusside/SodiumNitroprusside_Barrett2015_reference.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Barrett JS et al., A hemodynamic model to guide blood pres…, Frontiers in pharmacology (2015) | [10.3389/fphar.2015.00151](https://doi.org/10.3389/fphar.2015.00151) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bödigheimer_1979_reference](drugs/toxin_sodium_nitroprusside/SodiumNitroprusside_Bdigheimer1979_reference.md) | — | 1-compartment (no model) | 0 | Bödigheimer K et al., [Pharmacokinetics and thyrotoxicity of…, Deutsche medizinische Woche… (1979) | [10.1055/s-0028-1104019](https://doi.org/10.1055/s-0028-1104019) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_nitroprusside).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GUCY1A1 (modulator), GUCY1B1 (modulator), ITPR1 (target), ITPR2 (target), ITPR3 (target), NPR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 18:04 | 46:13 | 0/2/0 | 0/0/0 | 0/0/0 | 1,026,076/52,533 | ollama / glm-5.3-flash | 64 | 8/49 | 64/0 | 0 |

## Coverage

- **PubMed hits:** 1783 matched, 192 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bödigheimer_1979.pdf` | Bödigheimer K et al., [Pharmacokinetics and thyrotoxicity of…, Deutsche medizinische Woche… (1979) | popPK | 6 | [10.1055/s-0028-1104019](https://doi.org/10.1055/s-0028-1104019) | [456265](https://pubmed.ncbi.nlm.nih.gov/456265) | Human study of the sodium nitroprusside metabolite thiocyanate's kinetics (dose-dependent rise, delayed elimination in renal failure, an 18 mg/l serum threshold), which counts as SNP toxicokinetics, though detailed parameter values may reside in figures/tables not provided. |
| `Spielberg_2014.pdf` | Spielberg DR et al., Predictors of arterial blood pressure c…, Anesthesia and analgesia (2014) | pd | 5 | [10.1213/ANE.0000000000000376](https://doi.org/10.1213/ANE.0000000000000376) | [25099924](https://www.ncbi.nlm.nih.gov/pubmed/25099924) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-12 17:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2017 | irrelevant | 0 | 0 | No sodium_nitroprusside or kinetic parameters of it appear; study is about CYP3A5 humanized mice and triazolam metabolism. |
| popPK | Ahlers_2004 | irrelevant | 0 | 0 | SNP is only a comparator drug for forearm blood flow responses; parameters reported are for L-arginine, not sodium nitroprusside. |
| PGx | Alp_2022 | not_relevant | 0 | 0 | Plant stress physiology study; no gene variant affecting PK/PD parameters of SNP in humans. |
| popPK | Alshami_2018 | irrelevant | 2 | 2 | A narrative review of antihypertensives that reports no kinetic parameters for nitroprusside itself; numeric half-lives given (e.g., nitroglycerin, fenoldopam, hydralazine) belong to other drugs, and cyanide toxicity is discussed qualitatively without nitroprusside kinetic values. |
| PGx | Aronson_2008 | not_relevant | 0 | 0 | This is a comparative efficacy/safety trial of clevidipine vs. SNP with no genetic variant, genotype, or pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Aruldhas_2023 | irrelevant | 0 | 0 | The paper concerns oxycodone pharmacogenetics in children; sodium nitroprusside appears nowhere and no kinetic parameters for it are reported. |
| popPK | Banerjee_2019 | irrelevant | 0 | 0 | This is a review on pesticides and pharmacogenomics with no kinetic parameters for sodium nitroprusside. |
| popPK | Barthelmebs_1993 | irrelevant | 0 | 0 | Sodium nitroprusside is only a pharmacological comparator for vasodilation (EC50 reported), not a toxicokinetic subject; no disposition parameters. |
| popPK | Basile_2021 | irrelevant | 0 | 0 | This is a clinical review of hypertension in aortic stenosis; sodium nitroprusside appears only as a vasodilator treatment with no kinetic parameters reported. |
| popPK | Besin_2023 | irrelevant | 0 | 0 | The paper is about Alzheimer's disease and SNPs with no sodium_nitroprusside kinetic parameters at all. |
| popPK | Buschow_2018 | irrelevant | 0 | 0 | This paper concerns TLR7 polymorphisms, pDC maturation and HBV infection with no kinetic parameters of sodium nitroprusside. |
| popPK | Buylaert_1989 | irrelevant | 2 | 1 | This is a review of drug pharmacokinetics during cardiopulmonary bypass; nitroprusside is only listed as one of many substances and no numeric kinetic values appear in the evidence. |
| popPK | Carnaval_2025 | irrelevant | 0 | 0 | A meta-analysis of schizophrenia RCT efficacy outcomes with no pharmacokinetic or toxicokinetic parameters for sodium nitroprusside of any kind. |
| popPK | Cascorbi_2006 | irrelevant | 0 | 0 | Review on ABC transporter pharmacogenetics with no mention of sodium nitroprusside or any kinetic parameters for it. |
| popPK | Chebon_2016 | irrelevant | 0 | 0 | This is a malaria parasite-genetics study; clearance half-lives refer to Plasmodium falciparum parasites, not to sodium nitroprusside toxicokinetics. |
| PGx | Chen_2015 | not_relevant | 1 | 0 | Plant study of SNP as NO donor mitigating ZnO nanoparticle toxicity; no gene variant effect on PK/PD parameters of sodium nitroprusside reported. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | Toxicokinetics of cyclosporine, not sodium nitroprusside; nitroprusside does not appear at all. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | This is a toxicology study of sodium nitroprusside's protective effects in zebrafish larvae with no gene variant/genotype effect on SNP pharmacokinetics or pharmacodynamics. |
| popPK | Chowbay_2005 | irrelevant | 0 | 0 | The paper concerns digoxin pharmacokinetics and MDR1 polymorphism; sodium nitroprusside is not the subject and no kinetic parameters for it are reported. |
| popPK | Clemson_1994 | irrelevant | 1 | 1 | Sodium nitroprusside is only an intraarterial tool drug to maintain forearm blood flow; the kinetic parameters (NE clearance/spillover) belong to norepinephrine, not nitroprusside, and no numeric nitroprusside kinetic values appear. |
| PGx | Cobb_2018 | not_relevant | 0 | 0 | Paper discusses cost and therapeutic interchange of SNP; no pharmacogenomic effects on PK/PD reported. |
| PGx | Cobb_2018_2 | not_relevant | 0 | 0 | The paper discusses SNP pricing and therapeutic interchange with clevidipine/nicardipine; no pharmacogenomic effects on PK/PD parameters are reported. |
| popPK | Costa_1990 | irrelevant | 0 | 0 | Nitroprusside appears only as a co-administered drug in a clinical outcome study; no kinetic parameters of sodium nitroprusside are reported. |
| popPK | Croce_2025 | irrelevant | 0 | 0 | The paper concerns autophagy genetics in neurodegeneration; sodium nitroprusside and any kinetic parameters of it are absent from the evidence. |
| popPK | Dadkhah_2022 | irrelevant | 0 | 0 | The paper reports PopPK parameters (CL, Vd) for busulfan and its metabolite sulfolane, not for sodium nitroprusside, which is not mentioned at all. |
| popPK | Dahan_2024 | irrelevant | 1 | 1 | Sodium nitroprusside is only a co-intervention; all quantitative kinetic parameters (t1/2ke0, C100, clearances) belong to ketamine/norketamine, with no toxicokinetic parameters of SNP itself. |
| PGx | DellOmo_2014 | not_relevant | 7 | 7 | Sodium nitroprusside (NIP) was only a NO-independent control; its vasodilator response did not differ across PON1 Q192R genotypes (only ACH, a different drug, showed genotype differences). |
| popPK | Díaz-González_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of sorafenib, not sodium nitroprusside, which does not appear as the subject substance. |
| popPK | Eiskjaer_1994 | irrelevant | 0 | 0 | Sodium nitroprusside is only used as a vasodilator tool to lower blood pressure; no kinetic parameter for nitroprusside or its metabolites is reported. |
| PGx | Elzubeir_1988 | not_relevant | 0 | 0 | Study examines SNP as a cyanide source in chicks/hens with no gene variant or pharmacogenomic effect on PK/PD parameters. |
| popPK | Ertemi_2011 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a pharmacological NO-donor tool in organ bath studies; no kinetic parameters are reported. |
| popPK | Eugene_2016 | irrelevant | 2 | 4 | This is a pharmacodynamic dose-response (Hill/Emax) modeling study of SVR effects, not a report of toxicokinetic parameters (half-life, clearance, Vd, rate constants) for sodium nitroprusside; only infusion doses are given numerically. |
| popPK | Eugene_2016_2 | irrelevant | 1 | 3 | This is pharmacodynamic dose-response (Emax) modeling of forearm blood flow to sodium nitroprusside, not a kinetic/ADME parameter (no half-life, clearance, rate constants); only a % gender-difference in Emax is reported, actual parameter values likely in figures. |
| PGx | Farag_2017 | not_relevant | 0 | 0 | Plant physiology study of sodium nitroprusside as NO donor, not a pharmacogenomic PK/PD drug effect. |
| popPK | Fibbi_2010 | irrelevant | 1 | 1 | Sodium nitroprusside appears only as an NO-donor pharmacological tool in vitro; no toxicokinetic parameters for it are reported. |
| popPK | Fontoura_1990 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a pharmacological comparator in a study of ANF receptors; no kinetic parameters for it are reported. |
| popPK | Fung_1993 | irrelevant | 0 | 0 | Sodium nitroprusside is only mentioned as a nitrovasodilator comparator; no kinetic parameters for it are reported. |
| PGx | Ghio_2023 | not_relevant | 0 | 0 | Meta-analysis of SNP vs medical therapy in heart failure efficacy; no pharmacogenomic or PK/PD parameter data. |
| popPK | Graham_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters of metformin, not sodium nitroprusside; sodium nitroprusside is not the subject substance. |
| popPK | Gregory_1981 | irrelevant | 0 | 0 | Physiological study of cerebral blood flow during nitroprusside-induced hypotension in cats, with no kinetic parameters (half-life, clearance, etc.) for sodium nitroprusside. |
| popPK | Hall_1992 | irrelevant | 0 | 0 | No quantitative toxicokinetic parameters for sodium nitroprusside appear in the evidence — only narrative discussion of metabolism and a dosing ratio, with no half-life, clearance, or rate constants. |
| PGx | Hamurcu_2020 | not_relevant | 0 | 0 | Plant drought-stress study using SNP as NO donor; no pharmacokinetic/pharmacodynamic parameters or pharmacogenomic effects. |
| PGx | He_2017 | not_relevant | 0 | 0 | Plant study of NO donor SNP effect on programmed cell death; no gene variant, PK/PD parameters, or pharmacogenomic effects reported. |
| popPK | He_2023 | irrelevant | 0 | 0 | The substance of this paper is imatinib, not sodium nitroprusside; no sodium nitroprusside kinetic parameters are present. |
| popPK | Henricson_2009 | irrelevant | 0 | 0 | SNP is only a vasoactive drug in a skin microcirculation dose-response study; no toxicokinetic parameters (half-life, clearance, etc.) for sodium nitroprusside are reported. |
| popPK | Hertz_2017 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study of exemestane concentrations; sodium nitroprusside is never mentioned, so no kinetic parameters for the subject substance exist. |
| popPK | Hewick_1987 | irrelevant | 4 | 4 | Rat i.v. study with [14C]SNP-derived plasma radioactivity time-course, but only qualitative/percentage changes reported — no half-lives, rate constants, clearances or model parameters, and no full numeric time-course data in the evidence. |
| PGx | Hewick_1987 | not_relevant | 0 | 0 | Study examines drug-drug interactions (hydroxocobalamin, thiosulphate) with SNP, not gene variant/genotype/phenotype effects on PK/PD. |
| popPK | Hong_2021 | irrelevant | 0 | 0 | Sodium nitroprusside is used only as an NO-donor exposure/treatment in shrimp; no kinetic parameters (half-life, clearance, etc.) are reported. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | Genomic epidemiology of antimalarial resistance in Plasmodium falciparum; sodium nitroprusside is never mentioned and no toxicokinetic parameters of it are reported. |
| popPK | Ikeda_2007 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Jabbari_2023 | irrelevant | 0 | 0 | The paper concerns tacrolimus pharmacogenetics in kidney transplant recipients; sodium nitroprusside does not appear at all as a subject substance. |
| PGx | Jalnapurkar_2019 | not_relevant | 0 | 0 | Paper studies SNP as an NO donor for MSC priming in HSC engraftment; no pharmacogenomic effect on PK/PD parameters reported. |
| PGx | Japp_1978 | not_relevant | 0 | 5 | No gene/genotype/pharmacogenomic variant studied; effects relate to renal function, not genetics. |
| popPK | Ji_2026 | irrelevant | 0 | 0 | Nano-drug delivery/theranostic study with no kinetic parameters for sodium nitroprusside itself; only imaging signals and efficacy outcomes, no numeric TK values. |
| popPK | Jiang_2008 | irrelevant | 0 | 0 | The paper concerns cyclosporine pharmacokinetics with MDR1 polymorphism; sodium_nitroprusside does not appear at all and no parameters for it exist. |
| popPK | Jiménez-Sousa_2013 | irrelevant | 0 | 0 | A human genetic meta-analysis of IL28B polymorphisms and HCV clearance; sodium nitroprusside never appears and no toxicokinetic parameters for it are reported. |
| popPK | Jin_2017 | irrelevant | 0 | 0 | The paper reports PK parameters of talniflumate, not sodium nitroprusside; sodium nitroprusside appears nowhere. |
| PGx | Johanning_1995 | not_relevant | 0 | 0 | Retrospective chart review of SNP infusion rates and cyanide risk; no genetic variant or genotype-phenotype effects on PK/PD reported. |
| popPK | Jukkola_2024 | irrelevant | 1 | 2 | Sodium nitroprusside is only a vasodilatory tool to lower blood pressure; the kinetic parameters (FD40 tracer levels, BP/ICP changes) are for CSF tracer clearance, not SNP toxicokinetics. |
| popPK | Kamp_2020 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a co-infused covariate in a population PK model of ketamine and its metabolites; no kinetic parameter of SNP itself is reported or quantified. |
| popPK | Kamp_2021 | irrelevant | 1 | 0 | Sodium nitroprusside appears only as a co-administration/vehicle; all kinetic parameters (t½ke0, C25) belong to S-ketamine and S-norketamine, with no numeric toxicokinetic parameter for SNP itself. |
| popPK | Kao_2023 | irrelevant | 1 | 0 | Sodium nitroprusside only induces vasoplegic shock; the kinetic/dose-response model is for phenylephrine, and no SNP parameters are reported in the evidence. |
| PGx | Kao_2023 | not_relevant | 0 | 0 | SNP is used only to induce vasoplegic shock; no pharmacogenomic effects on PK/PD parameters are reported. |
| popPK | Karas_2022 | irrelevant | 0 | 0 | Paper concerns irinotecan/SN-38 pharmacokinetics, not sodium nitroprusside; no nitroprusside parameters. |
| PGx | Kawase_2020 | not_relevant | 0 | 0 | Sodium nitroprusside is used only as an NO donor/inflammatory stimulus on radixin expression, with no gene variant or PK/PD parameter effect reported. |
| popPK | Kenyon_2009 | irrelevant | 0 | 0 | The paper is about clevidipine; sodium nitroprusside appears only as a comparator agent with no kinetic parameters. |
| popPK | Keskitalo_2009 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of atorvastatin and rosuvastatin, with no kinetic parameters for sodium nitroprusside at all. |
| PGx | Khalil_1994 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on SNP PK/PD is reported; only age-related vascular reactivity changes in rats. |
| popPK | Kivistö_2007 | irrelevant | 0 | 0 | The paper concerns pravastatin pharmacokinetics; sodium nitroprusside is not mentioned at all. |
| popPK | Knapp_2014 | irrelevant | 0 | 0 | Paper is about IFNL3 gene expression and HCV clearance; sodium nitroprusside is not mentioned and no toxicokinetic parameters exist. |
| PGx | Kováčik_2012 | not_relevant | 0 | 0 | Paper concerns aluminum uptake in plants; sodium nitroprusside is used as a NO donor, not a drug with PK/PD parameters, and no gene variants are studied. |
| popPK | Kováčik_2023 | irrelevant | 0 | 0 | SNP is used solely as an NO donor reagent in a plant/lichen Hg toxicity study; no toxicokinetic parameters for SNP. |
| PGx | Kováčik_2023 | not_relevant | 0 | 0 | Study examines sodium nitroprusside as a NO donor in lichen stress physiology, with no gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Krediet_1998 | irrelevant | 1 | 1 | Nitroprusside is only mentioned as an agent to augment peritoneal diffusive capacity; no kinetic parameters are reported and values are referenced without numeric data. |
| PGx | Kwon_2018 | not_relevant | 0 | 0 | No pharmacogenomic variant or genotype effect on sodium nitroprusside PK/PD parameters is reported; SNP is only used as an ex vivo tool compound. |
| PGx | Kwon_2024 | not_relevant | 0 | 0 | The study evaluates SNP's effect on stem cell-induced pulmonary thromboembolism in mice with no gene/genotype/phenotype-based pharmacogenomic analysis. |
| PGx | Lao_2022 | not_relevant | 0 | 0 | Paper studies a triazole neuroprotectant using SNP only as an oxidative stress inducer in vitro; no gene-variant effect on SNP PK/PD is reported. |
| PGx | Li_2023 | not_relevant | 1 | 0 | SNP is merely a tool used as a GSK3β activator; no gene variant/genotype effect on sodium nitroprusside PK or PD parameters is reported. |
| popPK | Limothai_2015 | irrelevant | 0 | 0 | The paper concerns IFNL4 SNP association with PEG-IFN response in hepatitis B; sodium nitroprusside is not mentioned and no toxicokinetic parameters exist (HBsAg kinetics shown in a figure about viral clearance, notTK). |
| popPK | Limothai_2022 | irrelevant | 0 | 0 | Papers is about HBsAg kinetics in hepatitis B patients treated with PEG-IFN; sodium_nitroprusside does not appear at all. |
| popPK | Litjens_2020 | irrelevant | 0 | 0 | The paper concerns rifampicin (OATP1B1 transport) with no kinetic parameters for sodium_nitroprusside. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | Paper is about IPS-1 SNP polymorphisms and HBV infection; sodium nitroprusside is never mentioned (SNP here means single nucleotide polymorphism, not the substance). |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of mycophenolic acid, not sodium nitroprusside, and contains no sodium nitroprusside kinetic parameters. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on SNP PK/PD is reported; the abstract describes a nanoparticle dual-gas delivery system only. |
| PGx | Liu_2025_2 | not_relevant | 1 | 1 | No gene variant/genotype or PK/PD parameter of sodium nitroprusside is studied; SNP is used as an NO donor to mitigate H2S toxicity in zebrafish. |
| popPK | Lopez-Lopez_2016 | irrelevant | 0 | 0 | The paper concerns vincristine pharmacogenetics in ALL patients; sodium nitroprusside is not the subject and no quantitative kinetic parameters for it appear in the evidence. |
| PGx | Lv_2023 | not_relevant | 0 | 0 | nanoparticle formulation study of SNP as NO donor; no gene variant effects on PK/PD reported |
| popPK | Lynn_2020 | irrelevant | 0 | 0 | This is a cancer vaccine immunology paper ("SNP" = self-assembling nanoparticle, not sodium nitroprusside); no sodium nitroprusside toxicokinetic parameters appear. |
| popPK | Machmach_2013 | irrelevant | 0 | 0 | Genetic association study of HIV control with no sodium nitroprusside or any kinetic parameters involved. |
| popPK | Mackay_2025 | irrelevant | 0 | 0 | The paper concerns pharmacokinetics and pharmacogenetics of antituberculosis drugs (rifampicin, isoniazid, pyrazinamide) in humans; sodium_nitroprusside is not mentioned anywhere. |
| popPK | Malagutti_2012 | irrelevant | 2 | 0 | A simulation study of infusion control with no quantitative toxicokinetic parameters for sodium nitroprusside reported in the evidence. |
| PGx | Marin_1995 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on SNP pharmacokinetics or pharmacodynamics are reported; the study examines NO donor chemistry in neuronal GAPDH. |
| popPK | McBride_2003 | irrelevant | 1 | 2 | Sodium nitroprusside appears only as a failed antihypertensive treatment in a nicardipine case report; no kinetic parameters for nitroprusside are reported. |
| PGx | Mei_2023 | not_relevant | 0 | 0 | No gene/genotype/pharmacogenomic effects on SNP PK/PD are reported; SNP is only used as a nitric oxide donor challenge in mice. |
| popPK | Minhas_2020 | irrelevant | 0 | 0 | Paper is a dual RNA-seq study of Streptococcus pneumoniae infection in mice; no sodium nitroprusside or any toxicokinetic parameter appears anywhere. |
| popPK | Miri_2021 | irrelevant | 0 | 0 | Meta-analysis of IL28B polymorphism and HCV clearance; no sodium nitroprusside kinetic parameters at all. |
| PGx | Mishra_2025 | not_relevant | 0 | 0 | Plant cultivar differences in SNP nitric oxide signaling, not a gene variant affecting human PK/PD of sodium nitroprusside. |
| popPK | Mu_2023 | irrelevant | 0 | 0 | The paper reports PK/PD of apixaban in Chinese volunteers; sodium_nitroprusside is not the subject substance and no nitroprusside kinetic parameters appear. |
| popPK | Mulder_2021 | irrelevant | 0 | 0 | This is a review of CYP3A4*22 pharmacogenetics for many drugs; sodium_nitroprusside is never discussed and no kinetic parameters for it appear anywhere. |
| popPK | Murthy_2014 | irrelevant | 0 | 0 | The paper concerns ATG16L1 and Crohn's disease with no sodium nitroprusside exposure or kinetic parameters whatsoever. |
| popPK | Murtola_2025 | irrelevant | 0 | 0 | Sodium nitroprusside is not mentioned at all; the paper is a warfarin pharmacogenetic epidemiological risk-association study with no toxicokinetic parameters. |
| popPK | Navarro_2024 | irrelevant | 0 | 0 | The substance is cyclophosphamide/4-hydroxycyclophosphamide, not sodium nitroprusside, so no toxicokinetic parameters for the subject substance exist; no sodium nitroprusside numbers appear. |
| popPK | Neary_2017 | irrelevant | 0 | 0 | Paper is a pharmacogenetics review of antiretrovirals with no sodium nitroprusside or kinetic parameters. |
| popPK | Nie_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (Cmax, AUC, CL/F, Vd/F, T1/2) for ticagrelor and its metabolite AR-C124910XX, not sodium nitroprusside. |
| popPK | Origa_2015 | irrelevant | 0 | 0 | No sodium_nitroprusside or any toxicokinetic parameter appears; this is a genetic association study of HCV clearance in thalassemia patients. |
| popPK | Osaki_2019 | irrelevant | 0 | 0 | The substance is glucose-conjugated chlorin e6 (G-Ce6); "SNP" here denotes the canine mammary carcinoma cell line (SNP cells), not sodium nitroprusside, so no kinetic parameters for sodium nitroprusside are reported. |
| popPK | Packiasabapathy_2021 | irrelevant | 0 | 0 | The paper concerns methadone pharmacogenetics; sodium nitroprusside never appears as a subject substance and no kinetic parameters for it exist in the evidence. |
| popPK | Park_2022 | irrelevant | 0 | 0 | The paper reports kinetic parameters for atorvastatin and its metabolite, not sodium nitroprusside, which never appears as the subject substance. |
| popPK | Pasqui_2022 | irrelevant | 0 | 0 | The paper concerns DNA repair gene polymorphisms (ERCC1/2/5) in soft tissue sarcoma patients with no kinetic parameters for sodium nitroprusside (SNP mentions in the corrupted text refer to single nucleotide polymorphisms, not the substance). |
| PGx | Piacentini_2020 | not_relevant | 0 | 0 | Sodium nitroprusside is used only as a NO-donor in plant stress experiments; no gene variant/genotype effect on PK or PD parameters is reported. |
| popPK | Pinto_2021 | irrelevant | 0 | 0 | This is a pharmacogenomic outcome study of cyclophosphamide, not sodium nitroprusside, with no toxicokinetic parameters for the subject substance. |
| popPK | Poli_2022 | irrelevant | 0 | 0 | The paper is a human pharmacogenetic study of cannabis for chronic pain; sodium nitroprusside is not mentioned at all, and no kinetic parameters for it exist. |
| PGx | Polverari_2003 | not_relevant | 0 | 0 | Paper studies NO donor effects on Arabidopsis gene expression, not pharmacogenomic effects on PK/PD of sodium nitroprusside. |
| PGx | Rahim_2022 | not_relevant | 0 | 0 | Plant stress study of SNP as NO donor in rice; no gene variants, no PK/PD parameters of sodium nitroprusside. |
| PGx | Rahman_2024 | not_relevant | 0 | 0 | No genetic variants/genotypes/phenotypes are studied; SNP (sodium nitroprusside) effects are dose-based in wildtype mice, not pharmacogenomic. |
| PGx | Richardson_1995 | not_relevant | 0 | 5 | No gene variant/genotype/phenotype considered; effects are drug (NO) on iron uptake, not pharmacogenomic PK/PD of SNP. |
| popPK | Rodrigo_2019 | irrelevant | 0 | 0 | Paper on hepatitis C viral genomic variability; sodium_nitroprusside is absent entirely, and no kinetic parameters of any chemical substance are reported. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | Study is plant stress physiology; SNP is a nitric oxide donor applied exogenously to rice seedlings, not a drug with PK/PD parameters affected by gene variants. |
| popPK | Sakaeda_2003 | irrelevant | 0 | 0 | Review about MDR1 pharmacogenetics and digoxin kinetics; sodium_nitroprusside is not a subject substance and no kinetic parameters for it appear. |
| popPK | Sakaeda_2004 | irrelevant | 0 | 0 | Review on drug transporter pharmacogenetics with no sodium nitroprusside data or kinetic parameters of any kind. |
| popPK | Sampei_2024 | irrelevant | 0 | 0 | Paper reports antibody (crovalimab/C5) kinetics; sodium nitroprusside is not the subject and no nitroprusside parameters appear. |
| popPK | Santo_2023 | irrelevant | 0 | 0 | The paper studies FOXO3A protein half-lives and glucose clearance; sodium_nitroprusside is not mentioned, so no toxicokinetic parameters of the substance exist in the evidence. |
| PGx | Schröder_1988 | not_relevant | 0 | 0 | In vitro cell culture study of nitrate tolerance; no gene variant/genotype or pharmacogenomic effect on SNP PK/PD reported. |
| PGx | Schulz_1982 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; cyanide accumulation relates to infusion regimen, not pharmacogenomics. |
| popPK | Shah_2023 | irrelevant | 0 | 0 | No toxicokinetic parameters for sodium nitroprusside (or any substance) are reported; this is an epidemiological thrombosis study in humans. |
| PGx | Sharma_2023 | not_relevant | 0 | 0 | Plant stress study of SNP as NO donor with no gene variant effect on PK/PD parameters. |
| popPK | Shen_2020 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a cytotoxicity inducer in SH-SY5Y cell assays; no toxicokinetic parameters for it are reported. |
| PGx | Simfukwe_2025 | not_relevant | 0 | 0 | SNP is used only as a positive-control vasodilator in rat aortic rings; no gene/variant effect on its PK/PD is reported. |
| PGx | Singh_2017 | not_relevant | 0 | 0 | Sodium nitroprusside is used only as a NO donor; no gene variant/genotype effect on its PK/PD parameters is reported. |
| PGx | Souri_2020 | not_relevant | 0 | 0 | Plant stress study using SNP as an NO donor; no gene variant/genotype/pharmacogenomic effect on sodium nitroprusside PK/PD parameters. |
| popPK | Spielberg_2014 | irrelevant | 2 | 3 | This is a clinical efficacy/dose-response study of blood pressure control in children; no half-life, clearance, rate constants, or other kinetic parameters of SNP are reported, only titration-rate effect estimates. |
| popPK | Størset_2024 | irrelevant | 0 | 0 | This pharmacogenetic population PK study concerns risperidone/CYP2D6, not sodium nitroprusside, which appears nowhere as the subject substance. |
| popPK | Sun_2001 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a reagent/exposure condition in an in vitro cell-signaling study, with no kinetic parameters reported. |
| popPK | Tanaka_2011 | irrelevant | 0 | 0 | Paper is about hepatitis C pharmacogenetics (IL28B/ITPA) with interferon/ribavirin; sodium nitroprusside is absent entirely. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models of isoniazid in TB patients; sodium nitroprusside never appears as a subject substance. |
| popPK | Thomson_2017 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a NO-clamp co-infusion in a rat renal physiology study, with no kinetic parameters for it. |
| popPK | Vergara_2019 | irrelevant | 0 | 0 | GWAS of HCV clearance with no sodium_nitroprusside or any toxicokinetic parameters. |
| PGx | Vesey_1985 | not_relevant | 0 | 0 | Reports dose-dependent cyanide/thiocyanate accumulation with sodium nitroprusside, but no gene variant, genotype, or pharmacogenomic effect on PK/PD parameters. |
| popPK | Visibelli_2023 | irrelevant | 0 | 0 | Paper is a machine learning pharmacogenetic study of cannabis dosing; sodium nitroprusside is not mentioned and no kinetic parameters for it exist. |
| popPK | Wallis_1999 | irrelevant | 0 | 0 | Sodium nitroprusside appears only as a co-exposure in an in vitro platelet interaction study with sildenafil; no kinetic parameters for sodium nitroprusside are reported. |
| popPK | Wang_2021 | irrelevant | 1 | 1 | Sodium nitroprusside appears only as a pharmacological NO-donor tool to probe vasodilation; no kinetic parameters (half-life, clearance, etc.) for it are reported. |
| PGx | Wattiez_2025 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; anti-CGRP antibody pharmacology in TBI mice only, with no pharmacogenomic effect on SNP PK/PD parameters. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The paper concerns tacrolimus pharmacogenetics, not sodium nitroprusside, and contains no kinetic parameters for the subject substance. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper reports dabigatran population PK parameters, not sodium nitroprusside, so no toxicokinetic data for the subject substance exist here. |
| popPK | Yu_2024 | irrelevant | 0 | 0 | The paper concerns silica nanoparticles, not sodium nitroprusside, and no quantitative kinetic parameters for sodium nitroprusside appear. |
| PGx | Zago_2006 | not_relevant | 2 | 3 | Plant gene expression study of a NO donor; no pharmacogenomic effect on human PK/PD parameters of sodium nitroprusside. |
| PGx | Zare_2023 | not_relevant | 0 | 0 | Paper studies SNP as a nitric oxide donor in plants under cadmium stress; no gene variant or PK/PD pharmacogenomic effect of sodium nitroprusside as a drug. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | No sodium_nitroprusside appears here; the substance is periplocymarin (and note "SNP" means self-assembling nanoprodrug, not nitroprusside), with PK parameters in rats. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper concerns olanzapine metabolism by CYP3A43 with no sodium nitroprusside data of any kind. |
| PGx | Zorrilla_2025 | not_relevant | 1 | 0 | SNP is used only as a migraine trigger; no gene variant/genotype effect on SNP PK/PD parameters is reported (FHM1 mutation relates to CSD model, not SNP response). |
| popPK | Zou_2022 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL/F, V/F, half-life) for bedaquiline, not sodium nitroprusside, which does not appear as the subject substance. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_nitroprusside%5D&body=Drug%3A%20sodium_nitroprusside%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_nitroprusside/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 17:59 UTC</sub>
