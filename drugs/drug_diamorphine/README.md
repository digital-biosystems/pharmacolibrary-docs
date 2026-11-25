<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;}]"></div>

# diamorphine

- **generic name:** diamorphine
- **ATC codes:** `N07BC06`
- **DrugBank:** [DB01452](https://go.drugbank.com/drugs/DB01452) · **PubChem:** [CID 5462328](https://pubchem.ncbi.nlm.nih.gov/compound/5462328)
- **molar mass:** 369.411 g/mol (C21H23NO5) — DrugBank
- **groups:** approved, illicit

## About

Diamorphine is a morphinan opioid used to relieve severe pain during childbirth or a heart attack. It is usually given intravenously, though intramuscular, subcutaneous, and oral routes are also possible. It is used medically in several countries but is also a common recreational drug worldwide.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q60168](https://www.wikidata.org/wiki/Q60168), [Wikipedia](https://en.wikipedia.org/wiki/Heroin?oldid=1384296810) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| heroin (diamorphine) | parent | 369.411 | C21H23NO5 | DrugBank | [5462328](https://pubchem.ncbi.nlm.nih.gov/compound/5462328) | Cai_2025, Rook_2006 |
| 6-acetylmorphine | metabolite | — (mass units only) | — | — | — | — |
| 6-monoacetylmorphine | metabolite | 327.4 | — | the paper | — | Cai_2025 |
| morphine | metabolite | 285.34 | — | the paper | — | Cai_2025 |
| morphine-3-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| morphine-6-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Cai_2025_reference](drugs/drug_diamorphine/Diamorphine_Cai2025_reference.md) | — | general linear (no model) | 8 | Cai L et al., Intranasal diamorphine population pharm…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Rook_2006_reference](drugs/drug_diamorphine/Diamorphine_Rook2006_reference.md) | — | general linear (no model) | 3 | Rook EJ et al., Population pharmacokinetics of heroin a…, Clinical pharmacokinetics (2006) | [10.2165/00003088-200645040-00005](https://doi.org/10.2165/00003088-200645040-00005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Prottengeier_2014_p24](drugs/drug_diamorphine/pd_Prottengeier_2014_p24.md) | HIV reactivation (p24-positive cells) ← heroin · direct sigmoid Emax (Hill) effect | — | Prottengeier J et al., The effects of opioids on HIV reactivat…, AIDS research and therapy (2014) | [10.1186/1742-6405-11-17](https://doi.org/10.1186/1742-6405-11-17) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Prottengeier_2014_p24_2](drugs/drug_diamorphine/pd_Prottengeier_2014_p24_2.md) | HIV reactivation (p24-positive cells) ← morphine · direct sigmoid Emax (Hill) effect | — | Prottengeier J et al., The effects of opioids on HIV reactivat…, AIDS research and therapy (2014) | [10.1186/1742-6405-11-17](https://doi.org/10.1186/1742-6405-11-17) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [McLeod_2005_effective_analgesia](drugs/drug_diamorphine/pd_McLeod_2005_effective_analgesia.md) | effective analgesia ← diamorphine · categorical (graded) response model | — | McLeod GA et al., Is the clinical efficacy of epidural di…, British journal of anaesthe… (2005) | [10.1093/bja/aei029](https://doi.org/10.1093/bja/aei029) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zünkler_2010_hERG](drugs/drug_diamorphine/pd_Z_nkler_2010_hERG.md) | hERG currents ← heroin (3,6-diacetylmorphine) · direct sigmoid Emax (Hill) effect | — | Zünkler BJ et al., Comparison of the effects of methadone…, Cardiovascular toxicology (2010) | [10.1007/s12012-010-9074-y](https://doi.org/10.1007/s12012-010-9074-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 09:09 | 25:56 | 1/1/0 | 3/1/0 | 0/0/0 | 76,322/16,701 | einfracz / qwen3.8-27b | 9 | 1/8 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 48 matched, 19 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonilli_2008 | irrelevant | 0 | 0 | The study investigates the in vitro kinetics of estradiol glucuronidation using rat liver microsomes to assess enzyme activity, and does not report pharmacokinetic disposition parameters (CL, V, etc.) for diamorphine. |
| PGx | Antonilli_2008 | not_relevant | 0 | 0 | The study investigates the effect of chronic heroin/naltrexone exposure on liver UGT activity and estradiol glucuronidation, not the effect of a gene variant on a PK/PD parameter of diamorphine. |
| PGx | Cai_2025 | not_relevant | 0 | 0 | The study does not investigate or report any gene variants, genotypes, or phenotypes affecting diamorphine pharmacokinetics. |
| popPK | Castillo_2023 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of naltrexone and does not report pharmacokinetic parameters for diamorphine. |
| PGx | Castillo_2023 | not_relevant | 0 | 0 | The paper investigates the relationship between naltrexone plasma levels and heroin effects, but contains no data on genetic variants or genotypes. |
| popPK | Cole_2022 | irrelevant | 0 | 0 | This is an epidemiological mathematical model of opioid use disorder dynamics, not a pharmacokinetic study; no diamorphine PK parameters (CL, V, ka, etc.) are reported. |
| popPK | Galaj_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of ABS01-113 (a D3 receptor ligand), not diamorphine. |
| PGx | Galaj_2022 | not_relevant | 0 | 0 | The paper studies the pharmacology of a new D3R antagonist/agonist (ABS01-113) and reports no pharmacogenomic analysis (gene variants) or effects on diamorphine (heroin) PK/PD parameters related to genetics. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | The paper is a clinical trial of deep brain stimulation for heroin addiction and reports no pharmacokinetic parameters. |
| PGx | Ge_2025 | not_relevant | 0 | 0 | The study evaluates the therapeutic efficacy of deep brain stimulation on addiction outcomes and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of diamorphine. |
| popPK | Gómez-Núñez_2023 | irrelevant | 0 | 0 | This is a behavioral epidemiology meta-analysis of drug use before/during sex; no PK parameters for diamorphine are reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study investigates receptor binding affinity and cAMP dependence in cell lines and mice, not pharmacokinetic disposition parameters for diamorphine. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | The paper investigates opioid binding and dependence in a cell model but does not report any pharmacogenomic effects of gene variants on PK/PD parameters of diamorphine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper investigates cortical plasticity in substance use disorders using TMS-EEG and contains no pharmacokinetic parameters for diamorphine. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies cortical plasticity via TMS-EEG in patients with substance use disorders and does not report pharmacogenomic effects on the PK or PD parameters of diamorphine. |
| popPK | McLeod_2005 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (EC50) data for epidural diamorphine but does not provide pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | McLeod_2005 | not_relevant | 0 | 0 | The study investigates the concentration-dependency of epidural diamorphine efficacy and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Meana_2000 | irrelevant | 0 | 0 | The paper is a receptor pharmacology study measuring [35S]GTPγS binding in postmortem human brains and does not report pharmacokinetic parameters for diamorphine. |
| PGx | Meana_2000 | not_relevant | 0 | 0 | The study investigates postmortem neuroreceptor physiology in opioid addicts and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of diamorphine. |
| popPK | Nasser_2014 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of buprenorphine, not diamorphine. |
| PGx | Nasser_2014 | not_relevant | 0 | 0 | The paper reports PK/PD models for buprenorphine, not diamorphine, and contains no pharmacogenomic data. |
| popPK | Perger_2009 | irrelevant | 4 | 2 | The study reports pharmacokinetic parameters (bioavailability, absorption rate) for the metabolite morphine rather than the parent drug diamorphine, and specific numeric CL/Vd values are absent from the provided text. |
| PGx | Perger_2009 | not_relevant | 0 | 0 | The paper compares PK parameters of immediate vs extended release oral heroin but does not report any effect of gene variants or genotypes. |
| popPK | Prottengeier_2014 | irrelevant | 0 | 0 | In vitro HIV reactivation study with heroin/morphine; no PK disposition parameters (CL, V, ka, half-life) reported, only EC50 and cited plasma concentrations. |
| PGx | Rook_2006 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of heroin but analyzes only non-genetic covariates (e.g., cocaine use, sex, bodyweight) and does not report any pharmacogenomic effects. |
| popPK | Shahid_2016 | irrelevant | 0 | 0 | The study focuses on hepatotoxicity and nephrotoxicity (histopathology and serum enzymes) of morphine and heroin, not on pharmacokinetic parameters like clearance or volume. |
| PGx | Shahid_2016 | not_relevant | 0 | 0 | The study investigates hepatotoxicity/nephrotoxicity protection in rats using a herbal extract, with no mention of gene variants or pharmacogenomics. |
| popPK | Spence_2025 | irrelevant | 0 | 0 | The paper is a scoping review of epidemiological disease spread models for opioid misuse, not a pharmacokinetic study of diamorphine disposition. |
| PGx | Spence_2025 | not_relevant | 0 | 0 | The paper is a scoping review of disease spread modeling for opioid misuse and does not discuss pharmacogenomics or PK/PD parameters of diamorphine. |
| popPK | Zandvliet_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of caffeine, which was used as a marker/additive, rather than quantifying the disposition parameters of diamorphine itself. |
| PGx | Zandvliet_2005 | not_relevant | 0 | 0 | The paper reports the population pharmacokinetics of caffeine and its metabolites in heroin users, but does not investigate any pharmacogenomic factors (gene variants) affecting the PK or PD of diamorphine. |
| popPK | Zünkler_2010 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study measuring hERG channel inhibition, not a pharmacokinetic study, and contains no disposition parameters (CL, V, t1/2). |
| PGx | Zünkler_2010 | not_relevant | 0 | 0 | The paper reports the pharmacological effect of heroin (diamorphine) on hERG channels in vitro, but it does not investigate how a specific gene variant or genotype in the patient alters the PK or PD parameters of the drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiamorphine%5D&body=Drug%3A%20diamorphine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diamorphine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 08:43 UTC</sub>
