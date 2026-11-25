<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiapride&quot;}]"></div>

# tiapride

- **generic name:** tiapride
- **ATC codes:** `N05AL03`
- **DrugBank:** [DB13025](https://go.drugbank.com/drugs/DB13025) · **PubChem:** [CID 5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467)
- **molar mass:** 328.427 g/mol (C15H24N2O4S) — DrugBank
- **groups:** investigational

## About

Tiapride is a benzamide antipsychotic used to manage neurological and psychiatric conditions like dyskinesia, alcohol withdrawal, and agitation. It is typically given by mouth or as an injection. The drug is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416414](https://www.wikidata.org/wiki/Q416414), [Wikipedia](https://en.wikipedia.org/wiki/Tiapride?oldid=1370313727) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiapride | parent | 328.427 | C15H24N2O4S | DrugBank | [5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467) | Huang_2026, Norman_1987, Rey_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) | — | 1-compartment (no model) | 4 | Norman T et al., Single oral dose pharmacokinetics of ti…, European journal of clinica… (1987) | [10.1007/BF02455992](https://doi.org/10.1007/BF02455992) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Rey_1982_reference](drugs/drug_tiapride/Tiapride_Rey1982_reference.md) | — | 1-compartment (no model) | 2 | Rey E et al., Pharmacokinetics of tiapride and absolu…, International journal of cl… (1982) | — |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Huang_2026_reference](drugs/drug_tiapride/Tiapride_Huang2026_reference.md) | — | 1-compartment (no model) | 6 | Huang W et al., Population Pharmacokinetics of Tiapride…, Drug design, development an… (2026) | [10.2147/DDDT.S587387](https://doi.org/10.2147/DDDT.S587387) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:57 | 0:04 | 2/1/0 | 0/0/0 | 0/0/0 | 3,107/150 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 80 matched, 65 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2026 | irrelevant | 0 | 0 | Systematic review/meta-analysis of AUD pharmacotherapy effectiveness by sex; no tiapride PK parameters reported. |
| popPK | Arima_1986 | irrelevant | 0 | 0 | The paper reports receptor binding affinities (IC50) in membranes, not pharmacokinetic disposition parameters. |
| PGx | Arima_1986 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding affinities in animal/bovine tissues and does not report any pharmacogenomic effect (gene variant influence) on the PK or PD of tiapride in humans. |
| popPK | Aulas_1979 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic efficacy and tolerability in elderly patients, containing no pharmacokinetic parameters (CL, V, Ka, t1/2). |
| PGx | Aulas_1979 | not_relevant | 0 | 0 | The paper reports clinical outcomes of tiapride use in elderly patients but contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Barbier_1979 | irrelevant | 0 | 0 | The paper is a therapeutic study evaluating the efficacy and tolerability of tiapride for headaches, reporting no pharmacokinetic parameters. |
| PGx | Barbier_1979 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of tiapride in a general population but contains no pharmacogenomic data or genotype-specific effects. |
| popPK | Barry_1987 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in mice focusing on anxiety and withdrawal effects, reporting no pharmacokinetic parameters. |
| PGx | Barry_1987 | not_relevant | 0 | 0 | The paper reports behavioral effects of anxiolytics in mice and withdrawal syndromes but contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Belkahia_1978 | irrelevant | 0 | 0 | The paper is a therapeutic clinical trial reporting clinical efficacy outcomes, containing no pharmacokinetic parameters or models for tiapride. |
| PGx | Belkahia_1978 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the therapeutic efficacy of tiapride in ENT patients and contains no information on genetic variants or pharmacogenomics. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PGx | Branson_2011 | not_relevant | 0 | 0 | The paper discusses oxygen toxicity, not the pharmacogenomics of tiapride. |
| popPK | Cepelík_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of clonidine and dopamine on adenylate cyclase in rabbit ciliary processes, using tiapride only as a D2-antagonist tool compound, with no pharmacokinetic parameters reported. |
| PGx | Cepelík_1990 | not_relevant | 0 | 0 | The paper studies the interaction between dopamine/clonidine and receptors in rabbit ciliary processes; it is not a pharmacogenomic study involving human genotypes or pharmacokinetics/pharmacodynamics of tiapride. |
| popPK | Chappon_1978 | irrelevant | 0 | 0 | The paper reports clinical efficacy and side effects of tiapride for headaches but contains no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Chappon_1978 | not_relevant | 0 | 0 | The paper reports clinical efficacy and side effects of tiapride but contains no data on pharmacogenomics or genetic variants affecting PK/PD parameters. |
| popPK | Chouza_1982 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and side effects of tiapride for dyskinesia, containing no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Chouza_1982 | not_relevant | 0 | 0 | The paper reports a clinical trial of tiapride in dyskinesia but does not mention any gene variants or pharmacogenomic factors affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Clos_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy report on 47 patients and contains no pharmacokinetic parameters or quantitative disposition data for tiapride. |
| PGx | Clos_1979 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes in elderly patients but does not investigate or report any genetic variants or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Collard_1978 | irrelevant | 0 | 0 | The paper describes a clinical/psychopharmacological study of tiapride's therapeutic effects and does not report any quantitative pharmacokinetic parameters. |
| PGx | Collard_1978 | not_relevant | 0 | 0 | The paper describes the general psychopharmacological profile and therapeutic applications of tiapride in anxiety and somatic symptoms but contains no mention of pharmacogenomics, gene variants, or genotype-dependent effects. |
| popPK | Costall_1987 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice measuring anxiety-related locomotion and does not report any pharmacokinetic parameters for tiapride. |
| PGx | Costall_1987 | not_relevant | 0 | 0 | The paper reports the behavioral effects of tiapride in a mouse anxiety model but does not investigate any gene variant, genotype, or phenotype, nor does it measure pharmacokinetic parameters. |
| popPK | Csanda_1982 | irrelevant | 0 | 0 | The paper describes clinical efficacy and tolerance but contains no pharmacokinetic data or parameters. |
| PGx | Csanda_1982 | not_relevant | 0 | 0 | The paper describes general clinical efficacy and safety of tiapride but contains no information regarding gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | DallOlio_1986 | irrelevant | 0 | 0 | The study is a behavioral/pharmacodynamic interaction assay with no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) reported for tiapride. |
| PGx | DallOlio_1986 | not_relevant | 0 | 0 | The paper discusses behavioral pharmacology in animals involving drug-drug interactions (antidepressants/neuroleptics with methamphetamine) and does not report pharmacogenomic effects on the PK/PD of tiapride. |
| popPK | Doubliez_2025 | irrelevant | 0 | 0 | Tiapride is only a co-administered pharmacological probe in a fear-conditioning study; no PK parameters (CL, V, half-life, model) are reported, and drug concentrations are only mentioned as external analyses in supplementary material. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance (FAERS) disproportionality study of sedation/somnolence; tiapride is only one of 37 drugs ranked by ROR, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| PGx | Eugene_2021 | not_relevant | 0 | 0 | FAERS disproportionality analysis of sedation/somnolence; no gene variant or genotype effects on tiapride PK/PD reported. |
| popPK | Gareri_2003 | irrelevant | 0 | 0 | This is a narrative review discussing clinical management and general pharmacodynamics of antipsychotics in the elderly, with no original quantitative pharmacokinetic parameters for tiapride reported. |
| PGx | Gareri_2003 | not_relevant | 0 | 0 | This is a general review on antipsychotics in the elderly discussing age-related changes and drug interactions, with no mention of specific genetic variants affecting pharmacokinetics or pharmacodynamics of tiapride. |
| popPK | Garnier_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy study in humans reporting therapeutic outcomes and tolerance, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| PGx | Garnier_1978 | not_relevant | 0 | 0 | The paper describes clinical efficacy in a population of mentally retarded patients but contains no information about genetic variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gault_2015 | irrelevant | 0 | 0 | The study evaluates the efficacy of ABT-126 for Alzheimer's disease, and tiapride is only mentioned as a previously used medication in the demographic table, with no pharmacokinetic data reported. |
| PGx | Gault_2015 | not_relevant | 0 | 0 | The paper investigates the clinical efficacy and safety of ABT-126 in Alzheimer's disease, not the pharmacogenomics of tiapride. |
| popPK | Halouzková_2026 | relevant | 10 | 2 | The paper describes a population PK model for tiapride in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Halouzková_2026 | not_relevant | 0 | 0 | The study analyzes the impact of renal function (a physiological covariate) on tiapride pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Horton_1988 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for substituted benzamides, not a pharmacokinetic study, and tiapride is reported as inactive at the tested concentration. |
| PGx | Horton_1988 | not_relevant | 0 | 0 | The paper describes in vitro binding affinity of various substituted benzamides to benzodiazepine sites and does not investigate the impact of any genetic variant on the pharmacokinetics or pharmacodynamics of tiapride. |
| popPK | Huck_1982 | irrelevant | 0 | 0 | no_text gate: only 294 chars of text extracted (&lt; 400) |
| PGx | Huck_1982 | not_relevant | 0 | 0 | The paper reports clinical efficacy and tolerance in elderly patients but contains no information regarding gene variants or pharmacogenomic effects on PK or PD parameters. |
| popPK | Ishida-Tokuda_1996 | irrelevant | 0 | 0 | The study is a behavioral pharmacology evaluation of perospirone, and tiapride is used only as a comparator antipsychotic without any pharmacokinetic parameter reporting. |
| PGx | Ishida-Tokuda_1996 | not_relevant | 0 | 0 | The paper describes a behavioral study in rats evaluating the efficacy of various antipsychotics, including tiapride, but does not investigate any genetic or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Joliot_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of tiapride in alcoholics and reports no pharmacokinetic parameters or disposition data. |
| PGx | Joliot_1982 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of tiapride in alcoholics but does not investigate genetic variants or their effect on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kocher_1980 | irrelevant | 0 | 0 | The paper is a clinical efficacy study regarding the treatment of dyskinesias and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for tiapride. |
| PGx | Kocher_1980 | not_relevant | 0 | 0 | The paper describes a clinical trial evaluating the efficacy of tiapride in treating dyskinesias but does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kotzailias_2003 | irrelevant | 0 | 0 | The study investigates the effect of tiapride on platelet counts and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Kotzailias_2003 | not_relevant | 0 | 0 | The study examines the effect of tiapride on platelet counts (a PD parameter) but does not investigate the influence of any gene variant, genotype, or pharmacogenomic phenotype. |
| popPK | Labansat_1978 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic efficacy of tiapride in alcoholic patients and contains no pharmacokinetic data or disposition parameters. |
| PGx | Labansat_1978 | not_relevant | 0 | 0 | The paper is a clinical case series reporting therapeutic outcomes of tiapride in alcoholics without any mention of pharmacogenomics or genotype-based effects on PK/PD parameters. |
| popPK | Lipcsey_1983 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic efficacy for Gilles de la Tourette syndrome, containing no pharmacokinetic data or parameter values. |
| PGx | Lipcsey_1983 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of tiapride in a patient with Tourette's syndrome and contains no pharmacogenomic data or genotype information. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing aripiprazole and tiapride, reporting no pharmacokinetic parameters for tiapride. |
| PGx | Liu_2011 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy and safety of aripiprazole versus tiapride but does not report any pharmacogenomic analysis or genetic associations with PK/PD parameters. |
| popPK | Lorke_2011 | irrelevant | 0 | 0 | The paper is a toxicity/pharmacodynamics study evaluating tiapride as an acetylcholinesterase inhibitor for protection against organophosphate exposure, not a pharmacokinetic study; no PK parameters (CL, V, t1/2, etc.) are reported. |
| PGx | Lorke_2011 | not_relevant | 0 | 0 | The paper investigates the in vitro and in vivo efficacy of tiapride as an acetylcholinesterase inhibitor against DFP toxicity, reporting no pharmacogenomic effects on PK or PD parameters. |
| popPK | Lorke_2012 | irrelevant | 0 | 0 | The study is a toxicity/mortality assessment of acetylcholinesterase inhibitors and does not report pharmacokinetic parameters for tiapride. |
| PGx | Lorke_2012 | not_relevant | 0 | 0 | The paper studies the efficacy of acetylcholinesterase inhibitors in rats to protect against organophosphate toxicity and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Lorke_2019 | irrelevant | 0 | 0 | The paper is a review of cholinesterase inhibitor pretreatment for organophosphate exposure where tiapride is a comparator agent, with no pharmacokinetic data reported. |
| PGx | Lorke_2019 | not_relevant | 0 | 0 | The paper discusses tiapride as a pretreatment for organophosphate exposure and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Lucht_2001 | irrelevant | 0 | 0 | The study focuses on pharmacogenetics and clinical efficacy of tiapride in alcohol withdrawal, reporting dose requirements and anxiety scores rather than quantitative pharmacokinetic parameters (e.g., CL, V, t1/2). |
| PGx | Lucht_2001 | not_relevant | 6 | 2 | The paper reports an association between DRD2 genotype and tiapride dose/efficacy, but the provided text does not contain quantitative pharmacokinetic (PK) or pharmacodynamic (PD) parameter values (e.g., AUC, Cmax, specific score changes) required for extraction or fitting an effect size. |
| popPK | Marduel_1981 | irrelevant | 0 | 0 | The paper describes a clinical trial focused on rehabilitation outcomes and side effects, containing no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Marduel_1981 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of tiapride in trauma patients but contains no data on gene variants or pharmacogenomic effects on PK/PD. |
| popPK | Meltzer_1983 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (prolactin secretion) and receptor binding, not pharmacokinetic disposition parameters for tiapride. |
| PGx | Meltzer_1983 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of tiapride and related drugs on prolactin secretion and receptor binding, but it does not involve human genetics or pharmacogenomic effects on PK/PD parameters. |
| popPK | Metwally_2007 | irrelevant | 0 | 0 | The paper describes analytical methods for quantifying tiapride, not a pharmacokinetic study with disposition parameters. |
| PGx | Metwally_2007 | not_relevant | 0 | 0 | The paper describes analytical methods for quantifying tiapride and does not investigate the influence of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Müller_2011 | irrelevant | 0 | 0 | The paper is a clinical efficacy/tolerability study for alcohol detoxification and does not report any pharmacokinetic parameters (CL, V, ka, t1/2) for tiapride. |
| PGx | Müller_2011 | not_relevant | 0 | 0 | The paper is a clinical case series on alcohol detoxification efficacy and does not report any pharmacogenomic effects or genetic variants influencing the PK/PD of tiapride. |
| PGx | Norman_1987 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for tiapride in patients with Huntington's disease but does not examine or report the impact of any specific gene variant or genotype. |
| popPK | Oulis_2012 | irrelevant | 0 | 0 | The paper is a review of pregabalin for alcohol and benzodiazepine dependence, where tiapride is only mentioned as a comparator in RCTs, and no pharmacokinetic parameters for tiapride are reported. |
| PGx | Oulis_2012 | not_relevant | 0 | 0 | The paper is a review of pregabalin's efficacy in alcohol and benzodiazepine dependence and does not report any pharmacogenomic effects on PK or PD parameters of tiapride. |
| popPK | Palayodan_1983 | irrelevant | 0 | 0 | The paper describes a clinical study on the efficacy of tiapride for alcoholism symptoms (sleep, affect, behavior) and does not report any pharmacokinetic parameters. |
| PGx | Palayodan_1983 | not_relevant | 0 | 0 | The paper reports clinical efficacy and side effects of tiapride in alcoholism but does not mention any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Peters_1994 | irrelevant | 0 | 0 | The paper is a clinical pharmacology review of tiapride's therapeutic potential in alcohol dependence and does not report quantitative pharmacokinetic parameters (e.g., CL, V, ka). |
| PGx | Peters_1994 | not_relevant | 0 | 0 | The paper is a pharmacology and therapeutic review of tiapride in alcohol dependence and does not report any pharmacogenomic data or genetic variants affecting PK/PD. |
| popPK | Petroianu_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of tiapride's protective effect on cholinesterases using IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Petroianu_2005 | not_relevant | 0 | 0 | The study investigates the in vitro protective effect of tiapride on cholinesterase activity against paraoxon, not the effect of a gene variant on tiapride's PK or PD parameters. |
| popPK | Petroianu_2005_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tiapride's cholinesterase inhibitory properties and does not report pharmacokinetic parameters. |
| PGx | Petroianu_2005_2 | not_relevant | 0 | 0 | The study investigates the in vitro pharmacological interaction between tiapride and dichlorvos (cholinesterase inhibition), not a pharmacogenomic effect on a PK or PD parameter of tiapride. |
| popPK | Petroianu_2013 | irrelevant | 0 | 0 | The study is a toxicology/efficacy trial using tiapride as a prophylactic agent against paraoxon toxicity, and does not report pharmacokinetic parameters for tiapride. |
| PGx | Petroianu_2013 | not_relevant | 0 | 0 | The paper reports the efficacy of tiapride in reducing mortality from paraoxon exposure in rats, but it does not investigate the influence of genetic variants or genotypes on the pharmacokinetic or pharmacodynamic parameters of tiapride. |
| popPK | Rey_1982 | relevant | 9 | 4 | The study is a direct PK study in humans reporting a two-compartment model, with clear half-life, renal clearance, and bioavailability ranges, but it lacks specific numerical values for total clearance (CL), volume of distribution (V), and intercompartmental clearance (Q). |
| PGx | Rey_1982 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of tiapride in a small group of healthy volunteers but does not investigate any gene variants or genotypes, hence it is not pharmacogenomic. |
| popPK | Roos_1986 | irrelevant | 2 | 0 | The study focuses on dose-concentration relationships and therapeutic effects rather than modeling quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Roos_1986 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (dose-concentration) and pharmacodynamic (dose-effect) relationships in a small patient cohort, but does not mention any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Saft_2023 | irrelevant | 0 | 0 | The paper is a clinical guideline for Huntington's disease treatment and does not report any pharmacokinetic parameters for tiapride. |
| PGx | Saft_2023 | not_relevant | 0 | 0 | The paper is a clinical guideline for Huntington's disease treatment and does not contain any pharmacogenomic data or gene-drug interaction studies for tiapride. |
| popPK | Sakamoto_2017 | irrelevant | 0 | 0 | The paper is a case report regarding the efficacy of topiramate and mentions tiapride only as a failed treatment causing neuroleptic malignant syndrome, with no pharmacokinetic data provided. |
| PGx | Sakamoto_2017 | not_relevant | 1 | 2 | The paper reports a clinical case of a GNAO1 mutation and the efficacy of topiramate, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of tiapride. |
| popPK | Scatton_2001 | irrelevant | 0 | 0 | The paper describes preclinical pharmacologic and behavioral profiles (receptor binding, microdialysis, behavioral tests) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for tiapride. |
| PGx | Scatton_2001 | not_relevant | 0 | 0 | The paper describes preclinical pharmacology and behavioral effects in rats but does not investigate genetic variants or pharmacogenomic influences on PK/PD. |
| popPK | Soyka_2006 | irrelevant | 0 | 0 | The study is a retrospective clinical efficacy and safety analysis for alcohol withdrawal treatment and does not report any pharmacokinetic parameters or quantitative disposition data for tiapride. |
| PGx | Soyka_2006 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy and safety of a drug combination in alcohol withdrawal and does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Steele_1993 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without reporting original quantitative parameter values. |
| PGx | Steele_1993 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetic and pharmacodynamic properties of tiapride in geriatric agitation but does not report any pharmacogenomic effects or gene variant interactions. |
| popPK | Tang_2014 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of tiapride on inflammatory markers (IL-12, TNF-alpha) in Tourette's syndrome, reporting no pharmacokinetic parameters. |
| PGx | Tang_2014 | not_relevant | 0 | 0 | The study investigates the effect of a traditional Chinese medicine (Ningdong Granule) on inflammatory markers and tic severity in a clinical trial; it does not contain any pharmacogenomic or genetic data, and does not report gene variant-driven changes in the PK or PD parameters of tiapride. |
| popPK | Ueda_2025 | irrelevant | 0 | 0 | The paper is a retrospective clinical study on dysphagia management and pharmaceutical interventions; it lists tiapride as a drug discontinued for side effects but contains no pharmacokinetic parameters. |
| PGx | Ueda_2025 | not_relevant | 0 | 0 | The paper focuses on clinical interventions for dysphagia and medication management, not on pharmacogenomic effects on the PK or PD of tiapride. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting and does not mention tiapride or report its pharmacokinetic parameters. |
| PGx | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not mention tiapride or investigate any pharmacogenomic effects. |
| popPK | Yang_2009 | irrelevant | 0 | 0 | The study analyzes changrolin pharmacokinetics in rats, using tiapride only as an internal standard for quantification. |
| PGx | Yang_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of changrolin, not tiapride, and does not report any pharmacogenomic effects. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | This is a clinical survey on medication preferences for tic disorder, not a pharmacokinetic study, and contains no PK parameters for tiapride. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper is a survey on medication choices and does not report any pharmacogenomic data or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for the treatment of hemifacial spasm and does not report any pharmacokinetic parameters or data for tiapride. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper reports a clinical trial for hemifacial spasm treatment and contains no information on gene variants, genotypes, or pharmacogenomic effects on PK/PD. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The study measures neurotransmitter levels (pharmacodynamics) rather than pharmacokinetic parameters (CL, V, t1/2, etc.) for tiapride. |
| PGx | Zhang_2012 | not_relevant | 0 | 0 | The study compares the effects of two drugs (Jing'an Oral Liquid vs. Tiapride) on neurotransmitter levels in children but does not investigate gene variants, genotypes, or pharmacogenomic factors. |
| popPK | de_1983 | irrelevant | 0 | 0 | The study is a clinical trial evaluating therapeutic efficacy in alcohol withdrawal and contains no pharmacokinetic data or disposition parameters for tiapride. |
| PGx | de_1983 | not_relevant | 0 | 0 | The paper reports clinical efficacy and hospital stay duration in alcohol withdrawal but contains no pharmacogenomic data or analysis of genetic variants. |
| popPK | unknown_1980 | irrelevant | 0 | 0 | The paper describes a clinical trial evaluating the therapeutic efficacy of tiapride for headache, with no pharmacokinetic parameters or quantitative disposition data reported. |
| PGx | unknown_1980 | not_relevant | 0 | 0 | The paper reports clinical efficacy of tiapride for headache but does not study the influence of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The paper focuses on Alzheimer's disease clinical trials and recruitment strategies, with no mention of the drug tiapride or its pharmacokinetics. |
| PGx | unknown_2020 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic effects of the antibody AL001, not the drug tiapride. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiapride%5D&body=Drug%3A%20tiapride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiapride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:49 UTC</sub>
