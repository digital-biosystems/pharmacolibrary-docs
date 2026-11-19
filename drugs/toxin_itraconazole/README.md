<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Itraconazole&quot;}]"></div>

# Itraconazole

- **generic name:** Itraconazole
- **T3DB:** [T3D3516](http://www.t3db.ca/toxins/T3D3516) · **DrugBank:** [DB01167](https://go.drugbank.com/drugs/DB01167) · **PubChem:** [CID 55283](https://pubchem.ncbi.nlm.nih.gov/compound/55283)
- **groups:** approved, investigational

## About

Itraconazole is only found in individuals that have used or taken this drug. It is one of the triazole antifungal agents that inhibits cytochrome P-450-dependent enzymes resulting in impairment of ergosterol synthesis. It has been used against histoplasmosis, blastomycosis, cryptococcal meningitis & aspergillosis. [PubChem]Itraconazole interacts with 14-alpha demethylase, a cytochrome P-450 enzyme necessary to convert lanosterol to ergosterol. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** the absolute oral bioavailability of itraconazole is 55%, and is maximal when taken with a full meal.
- **Sources and uses:** For the treatment of the following fungal infections in immunocompromised and non-immunocompromised patients: pulmonary and extrapulmonary blastomycosis, histoplasmosis, aspergillosis, and onychomycosis.
- **Mechanism of toxicity:** Itraconazole interacts with 14-&alpha; demethylase, a cytochrome P-450 enzyme necessary to convert lanosterol to ergosterol. As ergosterol is an essential component of the fungal cell membrane, inhibition of its synthesis results in increased cellular permeability causing leakage of cellular contents. …
- **Lethal dose:** No significant lethality was observed when itraconazole was administered orally to mice and rats at dosage levels of 320 mg/kg or to dogs at 200 mg/kg.
- **Acute toxicity:** No significant lethality was observed when itraconazole was administered orally to mice and rats at dosage levels of 320 mg/kg or to dogs at 200 mg/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3516">T3DB T3D3516</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 84625-61-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6076">ChEBI 6076</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=itraconazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 64 | 0/37 | 64/0 | 0 |

## Coverage

- **PubMed hits:** 1285 matched, 210 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abdel-Rahman_2007.pdf` | Abdel-Rahman SM et al., Single-dose pharmacokinetics of intrave…, Antimicrobial agents and ch… (2007) | popPK | 10 | [10.1128/aac.00297-07](https://doi.org/10.1128/aac.00297-07) | [17517842](https://pubmed.ncbi.nlm.nih.gov/17517842) | The abstract reports quantitative pharmacokinetic parameters (Cmax, AUC, clearance, distribution volume) for itraconazole in humans. |
| `Abuhelwa_2015.pdf` | Abuhelwa AY et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (2015) | popPK | 10 | [10.1128/aac.00973-15](https://doi.org/10.1128/aac.00973-15) | [26149987](https://pubmed.ncbi.nlm.nih.gov/26149987) | The paper reports a population PK model of itraconazole in humans, but the specific numeric parameter values (clearance, Vd, rate constants, etc.) are not present in the provided abstract text. |
| `Hennig_2006.pdf` | Hennig S et al., Population pharmacokinetics of itracona…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645110-00004](https://doi.org/10.2165/00003088-200645110-00004) | [17048974](https://pubmed.ncbi.nlm.nih.gov/17048974) | The abstract explicitly reports numeric pharmacokinetic parameters for itraconazole, including apparent clearance, volume of distribution, absorption rate constants, and lag time. |
| `Hennig_2007.pdf` | Hennig S et al., A d-optimal designed population pharmac…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2006.02778.x](https://doi.org/10.1111/j.1365-2125.2006.02778.x) | [17073891](https://pubmed.ncbi.nlm.nih.gov/17073891) | The paper reports specific quantitative population pharmacokinetic parameters (absorption rate constants and relative bioavailability) for itraconazole in humans. |
| `Koks_2003.pdf` | Koks CH et al., Population pharmacokinetics of itracona…, Therapeutic drug monitoring (2003) | popPK | 10 | [10.1097/00007691-200304000-00014](https://doi.org/10.1097/00007691-200304000-00014) | [12657919](https://pubmed.ncbi.nlm.nih.gov/12657919) | The paper reports a population pharmacokinetic model for itraconazole, but no numeric parameter values are present in the provided evidence. |
| `Yamagishi_2013.pdf` | Yamagishi Y et al., Population pharmacokinetics of itracona…, The Japanese journal of ant… (2013) | popPK | 10 |  | [24167844](https://pubmed.ncbi.nlm.nih.gov/24167844) | The paper explicitly reports population pharmacokinetic parameters (clearance, volume of distribution, bioavailability) for itraconazole in humans. |
| `Abuhelwa_2016.pdf` | Abuhelwa AY et al., Population In Vitro-In Vivo Correlation…, Pharmaceutical research (2016) | popPK | 9 | [10.1007/s11095-016-1917-1](https://doi.org/10.1007/s11095-016-1917-1) | [27119846](https://pubmed.ncbi.nlm.nih.gov/27119846) | The paper reports a population PBPK/IVIVC model of itraconazole kinetics in humans, which is highly relevant, but the extracted evidence only contains the abstract and lacks the actual numeric parameter values (e.g., clearance, volumes, rate constants) which are likely in the full text or supplementary figures not provided here. |
| `Abuhelwa_2018.pdf` | Abuhelwa AY et al., Population in vitro-in vivo pharmacokin…, Journal of pharmacokinetics… (2018) | popPK | 9 | [10.1007/s10928-017-9555-8](https://doi.org/10.1007/s10928-017-9555-8) | [29150770](https://pubmed.ncbi.nlm.nih.gov/29150770) | The paper explicitly reports quantitative PBPK model parameters (clearance, compartment volumes, rate constants, etc.) for itraconazole in humans, which are highly relevant, but the specific numeric values are not present in the provided abstract. |
| `Kanbayashi_2008.pdf` | Kanbayashi Y et al., Population pharmacokinetics of itracona…, International journal of an… (2008) | popPK | 9 | [10.1016/j.ijantimicag.2007.12.017](https://doi.org/10.1016/j.ijantimicag.2007.12.017) | [18359202](https://pubmed.ncbi.nlm.nih.gov/18359202) | The paper explicitly reports quantitative PK parameters (clearance, volume of distribution, absorption rate constant) for itraconazole in humans directly in the text. |
| `Lee_2009.pdf` | Lee DG et al., Population pharmacokinetics of intraven…, Journal of clinical pharmac… (2009) | popPK | 9 | [10.1111/j.1365-2710.2008.00999.x](https://doi.org/10.1111/j.1365-2710.2008.00999.x) | [19646080](https://pubmed.ncbi.nlm.nih.gov/19646080) | The paper reports population pharmacokinetic parameters (CL and V) for intravenous itraconazole in humans, with the specific values (10 L/h and 1050 L) explicitly stated in the abstract. |
| `Winter_2025.pdf` | Winter F et al., Age-dependent oral drug absorption in c…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejpb.2025.114815](https://doi.org/10.1016/j.ejpb.2025.114815) | [40706964](https://pubmed.ncbi.nlm.nih.gov/40706964) | The paper explicitly develops and validates a PBPK model for itraconazole, which constitutes relevant quantitative kinetic modeling, but the provided evidence contains no numeric parameter values. |
| `Yun_2006.pdf` | Yun HY et al., Comparative analysis of the effects of…, European journal of clinica… (2006) | popPK | 9 | [10.1007/s00228-006-0200-5](https://doi.org/10.1007/s00228-006-0200-5) | [17053894](https://pubmed.ncbi.nlm.nih.gov/17053894) | The paper reports quantitative toxicokinetic parameters for itraconazole in humans using population and compartmental modeling, but the specific numeric values are not present in the provided text. |
| `Heykants_1989.pdf` | Heykants J et al., The clinical pharmacokinetics of itraco…, Mycoses 32 Suppl (1989) | popPK | 8 | [10.1111/j.1439-0507.1989.tb02296.x](https://doi.org/10.1111/j.1439-0507.1989.tb02296.x) | [2561187](https://pubmed.ncbi.nlm.nih.gov/2561187) | The paper reports quantitative kinetic parameters (half-life) for itraconazole in humans, but most detailed numeric values (specific absorption rates, metabolite kinetics) are likely in the full text or figures not fully captured in the abstract evidence provided. |
| `Lehr_2010.pdf` | Lehr T et al., Semi-mechanistic population pharmacokin…, Clinical pharmacokinetics (2010) | popPK | 8 | [10.2165/11317210-000000000-00000](https://doi.org/10.2165/11317210-000000000-00000) | [20000889](https://pubmed.ncbi.nlm.nih.gov/20000889) | The paper reports pharmacokinetic parameters for itraconazole, but the specific numeric values for the one-compartment model parameters (clearance, volume, rate constants) are not explicitly stated in the text, likely residing in the supplementary material or full results section of the original publication. |
| `Le_1992.pdf` | Le Conte P et al., Tissue distribution and antifungal effe…, The American review of resp… (1992) | popPK | 6 | [10.1164/ajrccm/145.2_Pt_1.424](https://doi.org/10.1164/ajrccm/145.2_Pt_1.424) | [1310577](https://pubmed.ncbi.nlm.nih.gov/1310577) | The paper reports tissue distribution and serum levels of itraconazole in mice, which constitutes kinetic data, but the specific numeric concentrations are not present in the provided abstract/evidence text. |

<sub>queue written 2026-11-15 03:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abuhelwa_2015 | relevant | 10 | 0 | The paper reports a population PK model of itraconazole in humans, but the specific numeric parameter values (clearance, Vd, rate constants, etc.) are not present in the provided abstract text. |
| popPK | Abuhelwa_2016 | relevant | 9 | 2 | The paper reports a population PBPK/IVIVC model of itraconazole kinetics in humans, which is highly relevant, but the extracted evidence only contains the abstract and lacks the actual numeric parameter values (e.g., clearance, volumes, rate constants) which are likely in the full text or supplementary figures not provided here. |
| popPK | Abuhelwa_2018 | relevant | 9 | 0 | The paper explicitly reports quantitative PBPK model parameters (clearance, compartment volumes, rate constants, etc.) for itraconazole in humans, which are highly relevant, but the specific numeric values are not present in the provided abstract. |
| popPK | Al-Nakeeb_2012 | irrelevant | 2 | 1 | The paper focuses on pharmacodynamics (effect on galactomannan) in an in vitro model and lacks quantitative toxicokinetic parameters like rate constants or volumes for itraconazole. |
| popPK | Antic_2024 | irrelevant | 1 | 0 | Itraconazole is used here merely as a comparator drug in a cardiovascular safety pharmacology study with no quantitative toxicokinetic parameters reported. |
| popPK | Azanza_2007 | irrelevant | 0 | 0 | The text is a qualitative review describing general pharmacokinetic characteristics without providing any specific numeric parameters for itraconazole. |
| popPK | Bagatin_2017 | irrelevant | 0 | 0 | Itraconazole is mentioned only as a comparator/synergist for new antifungal compounds, with no kinetic parameters reported for it. |
| popPK | Bellmann_2017 | irrelevant | 1 | 1 | The paper is a review that mentions itraconazole only in the abstract and summary table; no specific numeric toxicokinetic parameters for itraconazole are provided in the extracted text, which focuses on other antifungals like Amphotericin B, Voriconazole, and Posaconazole. |
| popPK | Chan_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of nirmatrelvir; itraconazole appears only as a covariate (drug-drug interaction agent) affecting nirmatrelvir clearance, with no kinetic parameters reported for itraconazole itself. |
| popPK | Chastain_2026 | irrelevant | 2 | 0 | The paper is a review of therapeutic drug monitoring and clinical guidance for various antifungals, lacking quantitative toxicokinetic parameters (e.g., half-lives, clearance) for itraconazole. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper focuses on fenebrutinib's pharmacokinetics; itraconazole is only mentioned as a CYP3A inhibitor used to induce a drug-drug interaction, with no kinetic parameters for itraconazole reported. |
| popPK | Chen_2022 | irrelevant | 2 | 1 | Itraconazole is merely a co-administered inhibitor to predict its effect on Crizotinib's PK, not the primary subject with reported kinetic parameters for its own disposition in the evidence. |
| popPK | Chouhan_2026 | irrelevant | 0 | 0 | Itraconazole is only mentioned as an ineffective antifungal agent in an in vitro susceptibility test, with no toxicokinetic parameters reported. |
| popPK | Cilliers_2025 | irrelevant | 1 | 0 | Itraconazole is used solely as a CYP3A4 inhibitor probe in a PBPK model for adagrasib; no kinetic parameters for itraconazole itself are reported. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for Rimegepant, with itraconazole appearing only as a co-administered CYP3A4 inhibitor covariate, not as the substance being characterized. |
| popPK | Cordeiro_2023 | irrelevant | 0 | 0 | The paper studies the membrane partitioning of Hoechst 33342, not itraconazole; itraconazole is not mentioned or analyzed in the provided text. |
| popPK | Denning_2014 | irrelevant | 0 | 0 | The paper is a review on fungal allergy in asthma and contains no quantitative toxicokinetic parameters for itraconazole. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | The paper is a review focused on posaconazole exposure-response, mentioning itraconazole only as a structural comparator with no kinetic data for itraconazole. |
| popPK | Dolton_2014 | irrelevant | 2 | 0 | This is a narrative review focusing primarily on voriconazole, posaconazole, and isavuconazole, with itraconazole mentioned only generally regarding pharmacokinetic challenges and therapeutic drug monitoring, without any specific quantitative kinetic parameters or model values reported. |
| popPK | Fuhr_2022 | irrelevant | 2 | 1 | Itraconazole is solely used as a CYP3A4 perpetrator for Drug-Drug Interaction modeling of felodipine; the paper does not report any kinetic parameters of itraconazole itself, and any such parameters would be in external PBPK models not detailed here. |
| popPK | Gibbons_2015 | irrelevant | 1 | 0 | Itraconazole is used solely as a CYP3A4 inhibitor (co-exposure) to study the pharmacokinetics of enzalutamide; no kinetic parameters are reported for itraconazole itself. |
| popPK | Gómez-López_2020 | irrelevant | 1 | 0 | The text is a general review of therapeutic drug monitoring for various antifungals, containing no specific numeric kinetic parameters for itraconazole. |
| popPK | Hanke_2018 | relevant | 9 | 2 | The paper develops a PBPK model for itraconazole, but the specific quantitative kinetic parameters for itraconazole are explicitly located in Appendix S1 (Tables S2a, S2b) and model files which are not included in the provided evidence. |
| popPK | Heykants_1989 | relevant | 8 | 2 | The paper reports quantitative kinetic parameters (half-life) for itraconazole in humans, but most detailed numeric values (specific absorption rates, metabolite kinetics) are likely in the full text or figures not fully captured in the abstract evidence provided. |
| popPK | Heykants_1990 | irrelevant | 1 | 0 | The text is a qualitative review/summary with no quantitative kinetic parameters or numeric values for itraconazole. |
| popPK | Hong_2021 | irrelevant | 2 | 2 | Itraconazole is only a co-administered inhibitor/comparator in this study of milademetan; itraconazole's own kinetic parameters are in external Simcyp library models and supplementary tables (S1, S2) not provided in the evidence. |
| popPK | Hsueh_2022 | irrelevant | 2 | 1 | The paper is a drug-drug interaction study where itraconazole serves solely as a co-administered perpetrator (inhibitor) to assess its effect on filgotinib's pharmacokinetics; no toxicokinetic parameters (such as half-life, clearance, or volume of distribution) are reported for itraconazole itself. |
| popPK | Huntjens_2026 | irrelevant | 0 | 0 | The study evaluates mocravimod as the victim drug; itraconazole is only used as a co-administered inhibitor (perpetrator) and no kinetic parameters for itraconazole itself are reported. |
| popPK | Huq_2019 | irrelevant | 0 | 0 | The paper is about cigarette taxation and consumer behavior, containing no data or mention of itraconazole or toxicokinetics. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reporting rates (ROR, IC) for myopathy in the FAERS database and contains no quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for itraconazole. |
| popPK | John_2019 | irrelevant | 0 | 0 | The paper is a review focused on therapeutic drug monitoring (TDM) and lacks specific quantitative toxicokinetic parameters or a model for itraconazole. |
| popPK | Jäger_2024 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics (inhibition of adrenal steroidogenesis enzymes) and toxicity mechanisms, not toxicokinetic parameters like half-life, clearance, or distribution volumes. |
| popPK | Kably_2022 | irrelevant | 0 | 0 | The paper is a review article that discusses therapeutic drug monitoring trends but reports no specific quantitative kinetic parameters for itraconazole in the provided text. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a systematic review and population PK modeling study focused on voriconazole; itraconazole is only mentioned in the context of saliva/plasma ratios from other studies without any primary kinetic parameters reported. |
| popPK | Kimoto_2022 | irrelevant | 1 | 0 | Itraconazole is used as a tool inhibitor to calibrate a PBPK model of an endogenous biomarker (CP-I), with no kinetic parameters for itraconazole itself reported in the text. |
| popPK | Knapp_1980 | irrelevant | 0 | 0 | The paper describes a Te-123m labeled steroid (23-ITC) for adrenal imaging in rats; itraconazole is not mentioned or studied. |
| popPK | Koks_2003 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for itraconazole, but no numeric parameter values are present in the provided evidence. |
| popPK | Kollipara_2023 | irrelevant | 2 | 0 | Itraconazole is used as a comparator/drug in DDI predictions for encorafenib, with no specific kinetic parameters reported for itraconazole itself. |
| popPK | Kovar_2020 | irrelevant | 2 | 0 | The paper focuses on buprenorphine PBPK modeling; itraconazole appears only as a comparator drug in DDI simulations, with no kinetic parameters reported for itraconazole itself. |
| popPK | Kowalsky_1991 | irrelevant | 0 | 0 | The paper reviews fluconazole, with itraconazole mentioned only as a comparator without any kinetic data. |
| popPK | Le_1992 | relevant | 6 | 2 | The paper reports tissue distribution and serum levels of itraconazole in mice, which constitutes kinetic data, but the specific numeric concentrations are not present in the provided abstract/evidence text. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The paper is a drug-drug interaction study where the subject substance is vatiquinone; itraconazole is only mentioned as a co-administered inhibitor and lacks quantitative kinetic parameters for itself. |
| popPK | Lehr_2010 | relevant | 8 | 2 | The paper reports pharmacokinetic parameters for itraconazole, but the specific numeric values for the one-compartment model parameters (clearance, volume, rate constants) are not explicitly stated in the text, likely residing in the supplementary material or full results section of the original publication. |
| popPK | Li_2022 | irrelevant | 1 | 0 | Itraconazole appears solely as a co-administered perpetrator drug to assess interactions with the subject substance trilaciclib, and no quantitative toxicokinetic parameters for itraconazole itself are reported in the text. |
| popPK | Littell_2005 | irrelevant | 0 | 0 | The paper is a child welfare psychology study regarding caregiver readiness for change and contains no toxicokinetic data for itraconazole or any other substance. |
| popPK | Loer_2023 | irrelevant | 0 | 0 | The paper focuses on the PBPK model for tacrolimus, with itraconazole appearing only as a co-administered perpetrator drug (comparator) to model drug-drug interactions, and no kinetic parameters for itraconazole itself are reported in the evidence. |
| popPK | Maherani_2013 | irrelevant | 0 | 0 | The paper focuses on calcein release from liposomes and does not mention itraconazole or report any kinetic parameters for it. |
| popPK | Moreno_2010 | irrelevant | 0 | 0 | The paper studies sodium dodecyl sulfate partitioning in lipid bilayers and does not mention itraconazole. |
| popPK | Ni_2023 | irrelevant | 1 | 1 | The paper focuses on pyrotinib kinetics, using itraconazole only as a CYP3A4 inhibitor co-exposure agent without reporting its own toxicokinetic parameters. |
| popPK | Pashameah_2024 | irrelevant | 0 | 0 | The paper investigates Lactulose octasulfate (LOS) as an antiviral against SARS-CoV-2 and does not report any toxicokinetic parameters for itraconazole. |
| popPK | Patel_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for selumetinib, with itraconazole appearing only as a co-administered inhibitor for drug-drug interaction analysis and no kinetic parameters for itraconazole itself are reported. |
| popPK | Patel_2024 | irrelevant | 0 | 0 | Itraconazole appears only as a co-administered CYP3A4 inhibitor (perpetrator/comparator) to assess drug-drug interactions with sparsentan; no kinetic parameters for itraconazole itself are reported. |
| popPK | Rodriguez-Vera_2023 | irrelevant | 2 | 8 | The paper develops a PBPK model for phenytoin; itraconazole is used only as a perpetrator drug (co-exposure/comparator) in Drug-Drug Interaction simulations, and the numeric values presented are kinetic parameters for phenytoin. |
| popPK | Salem_2026 | irrelevant | 2 | 2 | The paper models ARV-110 PK, using itraconazole only as a drug-drug interaction agent without reporting specific kinetic parameters for itraconazole. |
| popPK | Schlachter_2026 | irrelevant | 2 | 9 | The paper focuses on the population pharmacokinetics of atogepant; itraconazole appears only as a covariate (CYP3A4 inhibitor) affecting atogepant's clearance, not as the subject substance with its own kinetic parameters. |
| popPK | Shafi_2023 | irrelevant | 0 | 0 | The paper is about green tax incentives and environmental protection, with no mention of itraconazole or any toxicokinetic data. |
| popPK | Stoklosa_2019 | irrelevant | 0 | 0 | The paper is a socioeconomic study on tobacco price elasticities and contains no data on itraconazole or any toxicokinetic parameters. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | Itraconazole is used only as a co-administered CYP3A4 inhibitor (comparator) in a study of the PBPK model for pirtobrutinib; no toxicokinetic parameters for itraconazole are reported or derived in this paper. |
| popPK | Treyer_2019 | relevant | 8 | 1 | The paper reports Kpuu (unbound partition coefficient) for itraconazole in human hepatocytes, a toxicokinetic parameter, but the specific numeric values for itraconazole are not present in the provided text (referenced in Table III and supplementary material which are not included). |
| popPK | Wang_2025 | relevant | 8 | 2 | The paper reports a PBPK model for itraconazole, which is relevant, but specific numeric kinetic parameters for itraconazole are not present in the text and are referred to as being in Supplementary Table S2. |
| popPK | Watanabe_2025 | irrelevant | 0 | 0 | The paper develops a PBPK model for valemetostat, using itraconazole only as a comparator/co-exposure to validate the model's drug-drug interaction predictions; no kinetic parameters for itraconazole itself are derived or reported. |
| popPK | Wendl_2022 | irrelevant | 0 | 0 | The paper focuses on the PBPK modeling of finerenone, mentioning itraconazole only as a simulated perpetrator (co-exposure) to predict drug-drug interactions, not reporting its own kinetic parameters. |
| popPK | Williams_1993 | irrelevant | 0 | 0 | The paper discusses the toxicity of allyl isothiocyanate to wireworms and does not mention itraconazole or any related toxicokinetic parameters. |
| popPK | Winter_2025 | relevant | 9 | 1 | The paper explicitly develops and validates a PBPK model for itraconazole, which constitutes relevant quantitative kinetic modeling, but the provided evidence contains no numeric parameter values. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of lorlatinib, with itraconazole used only as a CYP3A4 inhibitor (co-administered) to demonstrate drug-drug interactions; no kinetic parameters for itraconazole itself are reported. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper focuses on the PBPK modeling of brigatinib, using itraconazole only as a comparator/interacting drug (co-exposure) to validate the brigatinib model; no quantitative kinetic parameters for itraconazole itself are reported. |
| popPK | Xue_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ciclosporin, with itraconazole appearing only as a co-administered drug affecting ciclosporin's clearance. |
| popPK | Yamaguchi_2014 | irrelevant | 0 | 0 | The paper focuses on isothiocyanates (6MITC) and makes no mention of itraconazole. |
| popPK | Yamazaki_2022 | irrelevant | 2 | 2 | Itraconazole is used primarily as a P-glycoprotein inhibitor/co-exposure to model its effect on other Pgp substrates (digoxin, dabigatran, quinidine) rather than characterizing its own toxicokinetic disposition parameters. |
| popPK | Yan_2026 | irrelevant | 1 | 1 | Itraconazole is mentioned only as a comparator/co-administered drug in a PBPK study focused on Rilzabrutinib, with no specific toxicokinetic parameters reported for itraconazole itself in the provided text. |
| popPK | Yun_2006 | relevant | 9 | 0 | The paper reports quantitative toxicokinetic parameters for itraconazole in humans using population and compartmental modeling, but the specific numeric values are not present in the provided text. |
| popPK | Zahir_2022 | irrelevant | 1 | 0 | Itraconazole is only present as a co-administered perpetrator drug (CYP3A4 inhibitor) to study the pharmacokinetics of pexidartinib; no kinetic parameters for itraconazole itself are reported. |
| popPK | Zhou_2012 | irrelevant | 1 | 1 | Itraconazole is only a covariate affecting cyclosporine A clearance; no kinetic parameters are reported for itraconazole itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bitraconazole%5D&body=Drug%3A%20itraconazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_itraconazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
