<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;promazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Promazine_McGree2013_reference&quot;,&quot;label&quot;:&quot;McGree_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_promazine/Promazine_McGree2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# promazine

- **generic name:** promazine
- **ATC codes:** `N05AA03`
- **DrugBank:** [DB00420](https://go.drugbank.com/drugs/DB00420) · **PubChem:** [CID 4926](https://pubchem.ncbi.nlm.nih.gov/compound/4926)
- **molar mass:** 284.419 g/mol (C17H20N2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Promazine is a phenothiazine antipsychotic primarily used as a short-term add-on for psychomotor agitation. It is given orally, intramuscularly, or intravenously, with no specific restrictions on absorption noted for the oral route. Use in humans is limited because it is no longer commercially available in the United States, while it serves as a tranquilizer in veterinary medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419822](https://www.wikidata.org/wiki/Q419822), [Wikipedia](https://en.wikipedia.org/wiki/Promazine?oldid=1358652202) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Start here

> **McGree_2013_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_promazine/Promazine_McGree2013_reference.md?tab=Simulation) · [record](drugs/drug_promazine/Promazine_McGree2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [McGree_2013_reference](drugs/drug_promazine/Promazine_McGree2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | McGree JM et al., A Bayesian approach for estimating dete…, Journal of veterinary pharm… (2013) | [10.1111/j.1365-2885.2013.01389.x](https://doi.org/10.1111/j.1365-2885.2013.01389.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Curry_1990_reference](drugs/drug_promazine/Promazine_Curry1990_reference.md) | — | 1-compartment (no model) | 0 | Curry SH et al., A third, "deep," compartment for phenot…, Psychopharmacology bulletin (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Ashoor_2011_acetylcholine_100_M_induced_currents](drugs/drug_promazine/pd_Ashoor_2011_acetylcholine_100_M_induced_currents.md) | acetylcholine (100 μM)-induced currents ← promazine · direct sigmoid Emax (Hill) effect | — | Ashoor A et al., Effects of phenothiazine-class antipsyc…, European journal of pharmac… (2011) | [10.1016/j.ejphar.2011.10.020](https://doi.org/10.1016/j.ejphar.2011.10.020) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:11 | 0:04 | 1/1/0 | 1/0/0 | 0/0/0 | 4,390/186 | einfracz / qwen3.8-27b | 11 | 1/9 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 69 matched, 64 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abel_1985 | irrelevant | 0 | 0 | The paper is a clinical safety study regarding sedation efficacy and complications in infants, reporting dosing regimens rather than pharmacokinetic disposition parameters. |
| PGx | Abel_1985 | not_relevant | 0 | 0 | The paper is a clinical case report and comparison of sedation outcomes for promazine in neonates, with no discussion of pharmacogenomic effects on PK or PD. |
| popPK | Ashoor_2011 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and binding assay measuring receptor inhibition (IC50), not pharmacokinetic disposition parameters. |
| PGx | Ashoor_2011 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of phenothiazines on alpha7-nAChRs in oocytes/slices, not pharmacogenomic effects on PK/PD. |
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | This is a ToxCast high-throughput screening review about environmental chemicals and diabetes/obesity; promazine is not the subject drug and no PK parameters appear. |
| popPK | Aänismaa_2008 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of P-glycoprotein ATPase kinetics and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for promazine. |
| PGx | Aänismaa_2008 | not_relevant | 0 | 0 | The paper investigates the biophysical interaction of promazine with P-glycoprotein in vitro (activation enthalpy/entropy) and does not report pharmacogenomic effects on human PK/PD parameters. |
| popPK | Ballard_1982 | irrelevant | 0 | 0 | The paper reports field dosages for immobilization of animals, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Ballard_1982 | not_relevant | 0 | 0 | The paper reports on immobilization dosing for wolves and wolverines and does not contain any information regarding human pharmacogenomics, gene variants, or the impact of genotypes on the PK/PD parameters of promazine. |
| popPK | Barnard_2008 | irrelevant | 0 | 0 | The study investigates the antiviral efficacy and toxicity of promazine against SARS-CoV in vitro and in mice, not its pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Barnard_2008 | not_relevant | 0 | 0 | The paper investigates the antiviral efficacy of promazine against SARS-CoV in vitro and in vivo, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bate_2007 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and microbiology study focusing on antitubercular activity and does not report any pharmacokinetic parameters for promazine. |
| PGx | Bate_2007 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro antitubercular activity of promazine derivatives, not the effect of a genetic variant on promazine's PK or PD. |
| popPK | Boelsterli_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic cytotoxicity assay measuring lipid synthesis inhibition, not a pharmacokinetic study reporting disposition parameters for promazine. |
| PGx | Boelsterli_1987 | not_relevant | 0 | 0 | The paper studies the in vitro cytotoxicity of psychotropic drugs, including promazine, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Bourbonnais_1997 | irrelevant | 0 | 0 | The paper describes the use of promazine as a laccase mediator for pulp delignification, not its pharmacokinetics. |
| PGx | Bourbonnais_1997 | not_relevant | 0 | 0 | The paper discusses promazine as a laccase mediator for pulp delignification, not as a drug for which pharmacokinetic or pharmacodynamic parameters are being analyzed in relation to gene variants. |
| popPK | Cheema_2007 | irrelevant | 0 | 0 | The study focuses on the thermodynamic effects of promazine on myoglobin protein unfolding (in vitro mechanism), not on the pharmacokinetic disposition parameters of the drug itself. |
| PGx | Cheema_2007 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of protein-drug interactions (thermal unfolding of myoglobin) and contains no pharmacogenomic data or human PK/PD parameters. |
| popPK | Cheema_2008 | irrelevant | 0 | 0 | This is an in-vitro biophysical binding study of promazine with horse myoglobin, not a pharmacokinetic study. |
| PGx | Cheema_2008 | not_relevant | 0 | 0 | The paper studies the physicochemical binding of promazine to horse myoglobin in vitro, not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The study investigates spinal anesthesia and pharmacodynamics (efficacy, potency, duration) in rats, but does not report any pharmacokinetic parameters (clearance, volume, etc.) for promazine. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | The study reports on the pharmacodynamic effects of promazine in a rat model (spinal anesthesia potency and duration) without assessing the influence of any gene variant, genotype, or phenotype on these parameters. |
| PGx | Curry_1990 | not_relevant | 0 | 0 | The paper describes compartmental PK modeling of promazine in volunteers but does not report any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Daniel_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanism study on lysosomal distribution interactions in rat tissues, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Daniel_1997 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions regarding cellular distribution of promazine and antidepressants, but does not report any effects of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Daniel_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition in rat liver microsomes and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Daniel_2002 | not_relevant | 0 | 0 | The study investigates rat liver microsomes and does not report on human genetic variants or their effect on pharmacokinetics/pharmacodynamics. |
| popPK | Daniel_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of promazine's inhibition of caffeine metabolism, not a study of promazine's pharmacokinetics. |
| PGx | Daniel_2003 | not_relevant | 0 | 0 | The study investigates the in vitro inhibition of caffeine metabolism by promazine in rat microsomes, which characterizes drug-drug interaction potential rather than a pharmacogenomic effect on promazine's own PK/PD parameters. |
| popPK | Daniel_2005 | irrelevant | 0 | 0 | The study focuses on enzyme inhibition (CYP2D) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for promazine. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | The study investigates drug-enzyme interactions (neuroleptics inhibiting CYP2D) in rats, not the effect of human genetic variants on promazine pharmacokinetics or pharmacodynamics. |
| popPK | Delaruelle_1976 | irrelevant | 0 | 0 | The paper describes an anesthetic technique ("Protected Sleep") using promazine as part of a cocktail for neurosurgery, but reports no pharmacokinetic parameters or quantitative disposition data for promazine. |
| PGx | Delaruelle_1976 | not_relevant | 0 | 0 | The paper describes an anesthetic technique using promazine but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dewey_1981 | irrelevant | 0 | 0 | The paper describes the identification of metabolites in horse urine without reporting quantitative pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Dewey_1981 | not_relevant | 0 | 0 | The paper describes the metabolic profile of promazine in horses and does not investigate the impact of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Di_2009 | irrelevant | 0 | 0 | This is a review of CYP2A6 structure and function; promazine is listed only as a substrate with no pharmacokinetic parameters or quantitative disposition data provided. |
| PGx | Di_2009 | not_relevant | 2 | 2 | The paper is a general review of CYP2A6 structure and function which mentions promazine as a substrate but does not report specific pharmacogenomic effects (PK/PD changes) associated with CYP2A6 variants for promazine. |
| popPK | GAINES_1962 | irrelevant | 0 | 0 | The study investigates the toxicological interaction between promazine and organophosphorus pesticides, not the pharmacokinetic disposition parameters of promazine. |
| PGx | GAINES_1962 | not_relevant | 0 | 0 | The study examines drug-drug interactions (toxicity potentiation) in rats, not pharmacogenomic effects of gene variants on promazine PK/PD. |
| popPK | Gareri_2003 | irrelevant | 0 | 0 | This is a review article discussing antipsychotics in the elderly without providing original quantitative pharmacokinetic parameter values for promazine. |
| PGx | Gareri_2003 | not_relevant | 0 | 0 | The paper is a general review of antipsychotics in the elderly and does not report specific pharmacogenomic effects of gene variants on PK/PD parameters for promazine. |
| popPK | Gareri_2009 | irrelevant | 0 | 0 | This is a case report regarding valproate-induced delirium where promazine is only mentioned as a previously administered medication, with no PK data provided. |
| PGx | Gareri_2009 | not_relevant | 0 | 0 | The paper is a case report of valproate-induced delirium and does not report any pharmacogenomic effects on promazine's PK or PD parameters. |
| popPK | Hu_1990 | relevant | 8 | 0 | The study is a population PK analysis of promazine in humans, but no numeric parameter values are provided in the evidence. |
| PGx | Hu_1990 | not_relevant | 0 | 10 | The paper examines the effect of a disease state (acute viral hepatitis B) on pharmacodynamics, not a genetic variant or genotype. |
| popPK | Hu_1995 | irrelevant | 5 | 1 | The abstract describes the study and mentions statistically significant reductions in clearance and increases in half-life for promazine in humans, but it does not provide the specific quantitative numeric values for these parameters. |
| PGx | Hu_1995 | not_relevant | 0 | 0 | The paper investigates the effect of hepatic cirrhosis (a disease state) on promazine pharmacokinetics, not the effect of a genetic variant or genotype. |
| popPK | Iversen_2025 | irrelevant | 0 | 0 | The paper focuses on liposome drug delivery chemistry and peptide conjugation, with no pharmacokinetic data or mention of promazine. |
| PGx | Iversen_2025 | not_relevant | 0 | 0 | The paper focuses on liposome chemistry and drug delivery mechanisms, containing no information on promazine or pharmacogenomics. |
| popPK | Jakubovic_1982 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of enkephalin degradation inhibition, not a pharmacokinetic study, and promazine is only one of several compared drugs. |
| PGx | Jakubovic_1982 | not_relevant | 0 | 0 | The paper investigates the in vitro effect of promazine on enkephalin degradation but does not report any pharmacogenomic effect of a gene variant on promazine's PK or PD parameters. |
| popPK | Kashyap_2025 | irrelevant | 0 | 0 | Paper is about DNA-programmable PROTACs; no promazine PK parameters anywhere. |
| popPK | Knych_2018 | irrelevant | 0 | 0 | The study subject is acepromazine, not promazine; promazine is only mentioned as a metabolite name (2-(1-hydroxyethyl)promazine). |
| PGx | Knych_2018 | not_relevant | 0 | 0 | The study investigates acepromazine pharmacokinetics in horses and does not report pharmacogenomic effects of gene variants on promazine. |
| popPK | Koski_2003 | irrelevant | 0 | 0 | The paper is a retrospective forensic study of fatal poisonings reporting alcohol concentrations and toxicity indices, not a pharmacokinetic study with disposition parameters. |
| PGx | Koski_2003 | not_relevant | 0 | 0 | The paper reports on forensic data regarding alcohol-drug interactions and mortality in fatal poisonings, with no data on genetic variants or pharmacogenomic effects on promazine's PK/PD parameters. |
| popPK | Koski_2005 | irrelevant | 0 | 0 | The paper is a forensic toxicology study analyzing postmortem blood concentrations in fatal poisonings, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Koski_2005 | not_relevant | 0 | 0 | The paper analyzes postmortem concentrations in fatal poisonings and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Lapenna_2007 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of drug effects on lipoprotein peroxidation and does not report any pharmacokinetic parameters for promazine. |
| PGx | Lapenna_2007 | not_relevant | 0 | 0 | The paper investigates the physicochemical mechanism of promazine inhibiting lipoprotein peroxidation, not its pharmacokinetics or pharmacodynamics in relation to gene variants. |
| popPK | McGree_2013 | irrelevant | 0 | 0 | The study models the pharmacokinetics of acepromazine (ACP) and its metabolite HEPS in horses, not promazine itself. |
| PGx | McGree_2013 | not_relevant | 0 | 0 | The paper models pharmacokinetics in horses without investigating any genetic variants or pharmacogenomic effects. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The paper studies BLVRB inhibitors (e.g., BCT1028), not promazine. |
| PGx | Nesbitt_2025 | not_relevant | 0 | 0 | The paper studies BLVRB inhibitors and thrombopoiesis; it does not report on promazine or any pharmacogenomic effects on promazine PK/PD. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The paper investigates the antimicrobial potential of Hippocratea indica against Salmonella Typhi and does not mention promazine or report any pharmacokinetic parameters. |
| PGx | Owolabi_2024 | not_relevant | 0 | 0 | The paper investigates the antimicrobial potential of plant extracts against Salmonella Typhi and does not report pharmacogenomic effects on promazine's PK/PD parameters. |
| popPK | Prozialeck_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study of calmodulin binding (in vitro) and does not report pharmacokinetic parameters for promazine. |
| PGx | Prozialeck_1984 | not_relevant | 0 | 0 | The paper investigates in vitro binding of quaternary phenothiazine salts to calmodulin and does not report any pharmacogenomic effects on PK/PD parameters for promazine. |
| popPK | Reigada_2019 | irrelevant | 0 | 0 | The study investigates the trypanocidal activity and mechanism of action of promazine on Trypanosoma cruzi parasites, not its pharmacokinetic disposition parameters. |
| PGx | Reigada_2019 | not_relevant | 0 | 0 | The paper investigates drug repurposing for Chagas disease and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Sheppard_1974 | irrelevant | 0 | 0 | The paper is a survey of psychiatric prescribing practices and drug combinations, containing no pharmacokinetic data or parameters for promazine. |
| PGx | Sheppard_1974 | not_relevant | 0 | 0 | The paper discusses polypharmacy practices and drug combinations in psychiatry but does not report pharmacogenomic effects on PK or PD parameters of promazine. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on adenine derivatives as A2AAR/CK1δ inhibitors; promazine is not mentioned and no PK parameters exist. |
| popPK | Struwe_2008 | irrelevant | 0 | 0 | The study focuses on photogenotoxicity (DNA damage) in rats and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life for promazine. |
| PGx | Struwe_2008 | not_relevant | 0 | 0 | The paper investigates photogenotoxicity of drugs in rats and does not report pharmacogenomic effects or genotype-dependent PK/PD parameters for promazine. |
| popPK | Tamim_2026 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the anticancer activity of copper-phenothiazine complexes, not a pharmacokinetic study of promazine. |
| PGx | Tamim_2026 | not_relevant | 0 | 0 | The paper investigates the anticancer mechanisms of copper-phenothiazine complexes in vitro and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of promazine. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC proteomics/degradation study in HL-60 cells; no promazine PK parameters appear anywhere. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on doxorubicin delivery via magnetic nanorobots in mice and contains no data for promazine. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper discusses the delivery of doxorubicin using magnetic nanorobots and contains no information regarding promazine or pharmacogenomics. |
| popPK | Wood_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of detomidine in horses, and promazine is only mentioned as a non-cross-reactive compound in the immunoassay. |
| PGx | Wood_1989 | not_relevant | 0 | 0 | The paper describes the detection of detomidine in horses and does not involve promazine or pharmacogenomics. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of morphine withdrawal in mice and does not report pharmacokinetic parameters for promazine. |
| PGx | Wu_2012 | not_relevant | 0 | 0 | The study evaluates the pharmacological efficacy of promazine in a mouse model and contains no genetic variants or pharmacogenomic data. |
| popPK | Wójcikowski_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 isoforms responsible for promazine metabolism and does not report in-vivo pharmacokinetic disposition parameters (CL, V, etc.) for promazine as a subject drug. |
| PGx | Wójcikowski_2003 | not_relevant | 2 | 2 | The paper is an in vitro study identifying CYP isoforms involved in promazine metabolism but does not report a pharmacogenomic effect of a specific gene variant/genotype on a PK/PD parameter in humans. |
| popPK | Wójcikowski_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thioridazine metabolism, and promazine is mentioned only as a comparator. |
| PGx | Wójcikowski_2006 | not_relevant | 0 | 0 | The paper studies the metabolism of thioridazine, not promazine; it only mentions promazine in passing as a comparison for enzyme contribution to N-demethylation without reporting pharmacogenomic effects on promazine's PK/PD parameters. |
| popPK | Wójcikowski_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of CYP isoenzyme involvement in the metabolism of chlorpromazine, with promazine only mentioned as a comparative phenothiazine, and no population pharmacokinetic parameters are reported. |
| PGx | Wójcikowski_2010 | not_relevant | 0 | 0 | The study focuses on chlorpromazine metabolism and does not report pharmacogenomic effects on promazine. |
| popPK | Wójcikowski_2012 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of autoinduction of metabolism in human hepatocytes and does not report pharmacokinetic disposition parameters (CL, V, ka) for promazine. |
| PGx | Wójcikowski_2012 | not_relevant | 0 | 0 | The paper describes autoinduction of metabolism in a cell culture model without involving any genetic variant, genotype, or phenotype. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper focuses on immunometabolism and purine synthesis in tumor models using formate and methanol, with no mention of promazine or its pharmacokinetics. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The paper studies one-carbon metabolism and anti-PD-1 immunotherapy in tumor models, with no mention of promazine or its pharmacokinetics/pharmacodynamics. |
| popPK | Zilberstein_1990 | irrelevant | 0 | 0 | The study is an in-vitro investigation of anti-leishmanial activity and cellular mechanisms, not a pharmacokinetic study reporting disposition parameters for promazine. |
| PGx | Zilberstein_1990 | not_relevant | 0 | 0 | The paper describes in vitro effects of tricyclic drugs on Leishmania parasites and does not report pharmacogenomic effects on human pharmacokinetics or pharmacodynamics. |
| popPK | Zivković_2010 | irrelevant | 0 | 0 | The paper is a case report on pharmacogenetics and adverse events (malignant neuroleptic syndrome) and contains no pharmacokinetic data or quantitative disposition parameters for promazine. |
| PGx | Zivković_2010 | not_relevant | 2 | 1 | The paper reports case studies of Malignant Neuroleptic Syndrome associated with CYP2D6 and DRD2 genotypes, but does not provide quantitative pharmacokinetic or pharmacodynamic parameters (like AUC, Cmax, or specific receptor binding data) for promazine altered by the genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpromazine%5D&body=Drug%3A%20promazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_promazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:04 UTC</sub>
