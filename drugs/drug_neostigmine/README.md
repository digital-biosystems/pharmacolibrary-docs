<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;neostigmine&quot;}]"></div>

# neostigmine

- **generic name:** neostigmine
- **ATC codes:** `N07AA01`, `S01EB06`
- **DrugBank:** [DB01400](https://go.drugbank.com/drugs/DB01400) · **PubChem:** [CID 4456](https://pubchem.ncbi.nlm.nih.gov/compound/4456)
- **molar mass:** 223.2915 g/mol (C12H19N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Neostigmine is an acetylcholinesterase inhibitor used to treat myasthenia gravis, urinary retention, and bladder disease.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q410546](https://www.wikidata.org/wiki/Q410546) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| neostigmine | parent | 223.292 | C12H19N2O2 | DrugBank | [4456](https://pubchem.ncbi.nlm.nih.gov/compound/4456) | Somani_1980 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Shafer_1998_reference](drugs/drug_neostigmine/Neostigmine_Shafer1998_reference.md) | — | 1-compartment (no model) | 0 | Shafer SL et al., Cerebrospinal fluid pharmacokinetics an…, Anesthesiology (1998) | [10.1097/00000542-199811000-00007](https://doi.org/10.1097/00000542-199811000-00007) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Somani_1980_reference](drugs/drug_neostigmine/Neostigmine_Somani1980_reference.md) | — | 1-compartment (no model) | 0 | Somani SM et al., Kinetics and metabolism of intramuscula…, Clinical pharmacology and t… (1980) | [10.1038/clpt.1980.132](https://doi.org/10.1038/clpt.1980.132) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_heart_rate](drugs/drug_neostigmine/pd_Yamamoto_1996_heart_rate.md) | heart rate ← neostigmine · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Broad_2013_Cholinergically_mediated_contractions](drugs/drug_neostigmine/pd_Broad_2013_Cholinergically_mediated_contractions.md) | Cholinergically mediated contractions ← neostigmine · stimulation effect | — | Broad J et al., Cholinergic interactions between donepe…, British journal of pharmaco… (2013) | [10.1111/bph.12397](https://doi.org/10.1111/bph.12397) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:38 | 0:04 | 0/2/0 | 1/1/0 | 0/0/0 | 4,144/173 | einfracz / qwen3.8-27b | 16 | 3/12 | 16/0 | 0 |

## Coverage

- **PubMed hits:** 306 matched, 92 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adefegha_2021 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study assessing antioxidant and enzyme inhibitory properties, not a pharmacokinetic study. |
| PGx | Adefegha_2021 | not_relevant | 0 | 0 | The paper investigates in vitro enzyme inhibition and antioxidant properties of berberine and piperine compared to neostigmine, but reports no pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Baker_1993 | irrelevant | 0 | 0 | The study is a pharmacological/mechanistic investigation of calcium channels in guinea pig trachea, where neostigmine is used solely as a non-selective acetylcholinesterase inhibitor to enhance signal, with no pharmacokinetic parameters measured. |
| PGx | Baker_1993 | not_relevant | 0 | 0 | The paper reports a physiological study of calcium channels in guinea pigs and does not investigate any gene variants or genetic differences affecting neostigmine's pharmacokinetics or pharmacodynamics. |
| popPK | Bjugård_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ethionamide, not neostigmine. |
| PGx | Bjugård_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of ethionamide, not neostigmine, and does not report pharmacogenomic effects. |
| popPK | Broad_2013 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study on human colon tissue examining drug interactions, and it does not report any pharmacokinetic parameters (such as clearance or volume) for neostigmine. |
| PGx | Broad_2013 | not_relevant | 0 | 0 | The study examines drug-drug interactions and pharmacodynamics in human colon but does not report any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Buck_1991 | irrelevant | 0 | 0 | The paper is a review of nondepolarizing neuromuscular blocking agents where neostigmine is only mentioned as an agent for reversal, not as the subject of PK analysis. |
| PGx | Buck_1991 | not_relevant | 0 | 0 | The text discusses the use of nondepolarizing neuromuscular blocking agents and their reversal agents, but it does not report any specific pharmacogenomic effects or genetic variants influencing the pharmacokinetic or pharmacodynamic parameters of neostigmine. |
| popPK | Caulfield_1991 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study using neostigmine as an adjunct to study receptor-mediated calcium current inhibition, not a pharmacokinetic study of neostigmine. |
| PGx | Caulfield_1991 | not_relevant | 0 | 0 | The paper investigates the interaction of neostigmine with other compounds in cell models but does not report any effect of genetic variants on neostigmine's PK or PD. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| PGx | Chase_2012 | not_relevant | 0 | 0 | The text is a question about the meaning of the letter 'S' in an acronym, containing no pharmacogenomic information regarding neostigmine. |
| popPK | Chiou_1994 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological mechanism study on obidoxime, with no pharmacokinetic parameters for neostigmine reported. |
| PGx | Chiou_1994 | not_relevant | 0 | 0 | The study describes physiological mechanisms of drug interaction in an animal model and does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Dubey_2020 | irrelevant | 0 | 0 | The study focuses on the antiemetic efficacy of gabapentin and ondansetron for postoperative nausea and vomiting, containing no data on neostigmine pharmacokinetics. |
| PGx | Dubey_2020 | not_relevant | 0 | 0 | The paper compares gabapentin and ondansetron for PONV prevention and does not mention neostigmine or any genetic variants. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | EFSA risk assessment of potato glycoalkaloids with no neostigmine PK parameters reported. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | The study analyzes the clinical usage patterns and choice of neuromuscular blockade reversal strategies in a registry, reporting no pharmacokinetic parameters for neostigmine. |
| PGx | Elkhateb_2025 | not_relevant | 0 | 0 | The paper analyzes the use of neuromuscular blockade and antagonism strategies based on renal function, not a pharmacogenomic effect. |
| popPK | Fisher_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rapacuronium and its metabolite ORG9488, with neostigmine administered only as a reversal agent. |
| PGx | Fisher_2000 | not_relevant | 0 | 0 | The paper focuses on the impact of renal failure and cirrhosis on rapacuronium PK and does not report pharmacogenomic effects on neostigmine. |
| popPK | Galli_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of enzyme protection and does not report pharmacokinetic disposition parameters for neostigmine. |
| PGx | Galli_1992 | not_relevant | 0 | 0 | The paper describes an in vitro chemical protection mechanism for enzymes and contains no data on gene variants, genotypes, or pharmacogenomics. |
| popPK | Georgakis_2025 | irrelevant | 0 | 0 | The study is a clinical outcomes comparison of adverse events, not a pharmacokinetic study, and neostigmine is used only as a reversal agent comparator. |
| PGx | Georgakis_2025 | not_relevant | 0 | 0 | The study compares clinical complication rates of different NMBA/reversal agent combinations in CKD patients and does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters of neostigmine. |
| popPK | Gower_1987 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment examining yawning and analgesia in rats, containing no pharmacokinetic data or disposition parameters for neostigmine. |
| PGx | Gower_1987 | not_relevant | 0 | 0 | The paper is a pharmacological study in rats examining dose-response relationships and receptor antagonism, with no data on genetic variants or pharmacogenomics. |
| popPK | Graham_1986 | irrelevant | 0 | 0 | The study investigates the neuromuscular blockade of pancuronium, using neostigmine only as a reversal agent, and does not report pharmacokinetic parameters for neostigmine. |
| PGx | Graham_1986 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of pancuronium and the reversal agent neostigmine, but does not report any gene variants, genotypes, or phenotypes influencing PK/PD parameters. |
| popPK | Grześkowiak_2023 | irrelevant | 0 | 0 | This is a population PK/PD study of rocuronium and sugammadex in children; neostigmine is only mentioned as a comparator, with no neostigmine PK parameters reported. |
| popPK | Gwee_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of ranitidine's mechanism of action, not a pharmacokinetic study reporting disposition parameters for neostigmine. |
| PGx | Gwee_1993 | not_relevant | 0 | 0 | The paper studies the effect of ranitidine on cholinergic muscle responses, not a pharmacogenomic effect of a gene variant on the PK/PD of neostigmine. |
| popPK | Haerter_2015 | irrelevant | 1 | 0 | The study focuses on the reversal of neuromuscular blockade by calabadion and sugammadex, with neostigmine serving only as a comparator agent without quantitative pharmacokinetic parameters reported. |
| PGx | Haerter_2015 | not_relevant | 0 | 0 | The paper evaluates the comparative efficacy of calabadion and sugammadex in an animal model without investigating any gene variants or genotypes. |
| popPK | Hennis_1984 | irrelevant | 6 | 0 | The study reports neostigmine pharmacokinetics (three-compartment model, Vdss, Cl) in dogs, but the evidence provided contains only qualitative descriptions of the parameters and no specific numeric values (dose-response values are for antagonism efficacy, not PK parameters). |
| PGx | Hennis_1984 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics and pharmacodynamics in dogs but does not investigate any gene variants, genotypes, or genetic phenotypes. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | The paper is a review of chemical warfare nerve agent poisoning and its antidotes, with no pharmacokinetic data for neostigmine. |
| PGx | Hrvat_2020 | not_relevant | 0 | 0 | The paper is a review of nerve agent poisoning mechanisms and treatments, containing no data on the pharmacogenomics of neostigmine. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | This is a pharmacodynamic/mechanistic study of quercetin in guinea-pig colon muscle where neostigmine is used only as a contractile agent/comparator, with no pharmacokinetic parameters reported. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The study investigates the physiological effects of quercetin on colon smooth muscle in guinea-pigs and does not involve human pharmacogenomics or the PK/PD of neostigmine. |
| popPK | Hughes_1984 | irrelevant | 0 | 0 | The paper describes general methods for evaluating neuromuscular blockers and uses neostigmine only as a standard antagonist for reversal, not as the subject of a pharmacokinetic study. |
| PGx | Hughes_1984 | not_relevant | 0 | 0 | The paper describes general experimental methods for evaluating neuromuscular blocking agents and neostigmine but does not report any pharmacogenomic effects or specific genotype-phenotype associations. |
| popPK | Iwanaga_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic characterization of itopride, using neostigmine only as a comparator for enzyme inhibition (IC50), without reporting any pharmacokinetic disposition parameters. |
| PGx | Iwanaga_1994 | not_relevant | 0 | 0 | The paper characterizes the inhibition of acetylcholinesterase by itopride using animal enzymes and does not report any pharmacogenomic effects or human genetic variations. |
| popPK | Jaklitsch_1990 | irrelevant | 2 | 0 | The paper describes a simulation of neuromuscular function and heart rate using pharmacokinetic parameters as inputs, but the evidence provided does not contain the specific quantitative disposition parameters (CL, V, Q, ka) for neostigmine. |
| PGx | Jaklitsch_1990 | not_relevant | 0 | 0 | The paper presents a pharmacokinetic/pharmacodynamic simulation model for neuromuscular blocking agents and reversal agents but does not investigate or report the impact of specific gene variants, genotypes, or pharmacogenomic phenotypes. |
| popPK | Ji_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sugammadex and rocuronium, while neostigmine is used only as a comparator agent without PK modeling or data reporting. |
| PGx | Ji_2023 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of sugammadex and its reversal of rocuronium in children, with no mention of genetic variants or pharmacogenomic effects. |
| popPK | Ji_2023_2 | irrelevant | 0 | 0 | This is a PK study of sugammadex and rocuronium in children; neostigmine is only a comparator reversal agent with no PK parameters reported for it. |
| popPK | Johnson_1981 | irrelevant | 0 | 0 | Neostigmine is used only as a pharmacological tool to modulate cholinergic effects in a morphine study, and no PK parameters for neostigmine are reported. |
| PGx | Johnson_1981 | not_relevant | 0 | 0 | The study is an animal pharmacology experiment investigating morphine's effects on the biliary system, with no assessment of human genetic variants (pharmacogenomics) or their impact on neostigmine PK/PD. |
| popPK | Kato_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of acetylcholinesterase inhibitors on neuron activity, not a pharmacokinetic study of neostigmine. |
| PGx | Kato_1999 | not_relevant | 0 | 0 | The paper studies the neurotrophic effect of TAK-147 on choline acetyltransferase activity in neurons and mentions neostigmine only as an inactive comparator, with no pharmacogenomic data. |
| popPK | Kimura_2007 | irrelevant | 0 | 0 | Neostigmine is used only as a local acetylcholinesterase inhibitor probe in a pharmacodynamics study of acetylcholine/methacholine, with no PK parameters reported. |
| PGx | Kimura_2007 | not_relevant | 0 | 0 | The paper examines the pharmacodynamic response of cutaneous blood flow and sweat rate to cholinergic agonists and neostigmine, but does not report any genetic variants, genotypes, or phenotypes that influence these parameters. |
| popPK | Kleijn_2011 | irrelevant | 0 | 0 | The study models the pharmacokinetics of sugammadex and rocuronium, not neostigmine. |
| PGx | Kleijn_2011 | not_relevant | 0 | 0 | The paper analyzes pharmacokinetic and pharmacodynamic covariates (such as renal function, age, and race) for sugammadex and rocuronium, but it does not report effects on neostigmine or involve pharmacogenomic variants. |
| popPK | Koo_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of propofol and remifentanil; neostigmine is only mentioned as a co-administered reversal agent, not as the subject of PK analysis. |
| PGx | Koo_2012 | not_relevant | 0 | 0 | The study analyzes the pharmacodynamics of propofol based on age, and while neostigmine is mentioned as a standard antagonizing agent, no genetic variants or their effects on neostigmine's PK/PD are investigated. |
| popPK | Kunisawa_2015 | irrelevant | 0 | 0 | This is a population PK study of landiolol, not neostigmine; neostigmine is only used as an enzyme inhibitor in blood sample processing, with no neostigmine PK parameters reported. |
| popPK | Lee_2008 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating neuromuscular blockade, not a pharmacokinetic study reporting disposition parameters for neostigmine. |
| PGx | Lee_2008 | not_relevant | 0 | 0 | The paper investigates drug interactions between neostigmine, calcium, and antibiotics in an ex vivo rat model; it does not report pharmacogenomic effects based on human gene variants. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study characterizes the volume kinetics of Ringer's lactate solution, not neostigmine, which was only mentioned as a reversal agent administered at the end of surgery. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper focuses on the volume kinetics of Ringer's lactate solution and does not investigate neostigmine or any pharmacogenomic effects. |
| popPK | Lepage_1996 | irrelevant | 1 | 0 | The study reports pharmacodynamic data (neuromuscular blockade) for cisatracurium and uses neostigmine only as a reversal agent, without providing any quantitative pharmacokinetic parameters for neostigmine. |
| PGx | Lepage_1996 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic study of cisatracurium and does not contain any data on gene variants, genotypes, or phenotypes affecting neostigmine. |
| popPK | Li_2018 | irrelevant | 0 | 0 | Neostigmine is only used as a pharmacological probe to induce GI hypermotility in mice; no PK parameters for neostigmine are reported. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of auraptene (a component of Fructus Aurantii) and only mentions neostigmine as a mechanistic comparison for acetylcholinesterase inhibition; it does not report any pharmacokinetic parameters for neostigmine. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of auraptene from Chinese herbal medicine, comparing its effects to neostigmine but not reporting any pharmacogenomic effects on neostigmine's PK or PD parameters. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper studies novel fungal metabolites, using neostigmine only as a positive control for BChE inhibition activity, not for pharmacokinetic profiling. |
| PGx | Lin_2021 | not_relevant | 0 | 0 | The paper describes the isolation of natural products from a fungus and their BChE inhibitory activity, using neostigmine only as a positive control reference; it does not investigate the effect of gene variants on neostigmine pharmacokinetics or pharmacodynamics. |
| popPK | Linhares_2013 | irrelevant | 0 | 0 | The study is an in vitro enzymatic assay method for acetylcholinesterase inhibition by pesticides, where neostigmine is used only as a positive control/inhibitor, not as a subject of pharmacokinetic modeling. |
| PGx | Linhares_2013 | not_relevant | 0 | 0 | The paper describes a method for measuring acetylcholinesterase activity and testing pesticide inhibition; it does not report any pharmacogenomic effect on neostigmine PK/PD. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The study describes an in vitro device for measuring acetylcholinesterase activity, using neostigmine only as a comparator inhibitor to determine an IC50, not as a subject for pharmacokinetic analysis. |
| PGx | Liu_2017 | not_relevant | 0 | 0 | The paper describes a microfluidic assay for measuring acetylcholinesterase activity using neostigmine as an inhibitor, but it does not investigate pharmacogenomic effects or human pharmacokinetic/pharmacodynamic parameters. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study focuses on in-vitro colorimetric screening of acetylcholinesterase inhibitors using neostigmine as a control, reporting IC50 values rather than pharmacokinetic parameters. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper focuses on the development of a nanosheet-based colorimetric sensor for detecting acetylcholinesterase activity and screening drug inhibitors; it does not investigate pharmacogenomic effects on the PK or PD of neostigmine. |
| popPK | Luo_2013 | relevant | 8 | 1 | The study models neostigmine PK in rabbits, but specific numeric disposition parameters (CL, V, ka) are not reported in the text, only IVIVC regression coefficients and general mentions of a compartment model. |
| PGx | Luo_2013 | not_relevant | 0 | 0 | The paper investigates in vitro-in vivo correlation for a formulation in rabbits and does not report any pharmacogenomic effects or gene-variant interactions. |
| popPK | MATTHEW_1964 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| popPK | Marchi_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicotinic autoreceptors in rat cerebrocortex slices using neostigmine as a pharmacological tool, and it does not report any pharmacokinetic parameters for neostigmine. |
| PGx | Marchi_1996 | not_relevant | 0 | 0 | The paper studies the role of autoreceptors in acetylcholine release under different frequencies and conditions but does not investigate the effect of gene variants or pharmacogenomics on neostigmine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mills_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rapacuronium, with neostigmine used only as a comparator antagonist for neuromuscular recovery. |
| PGx | Mills_1999 | not_relevant | 0 | 0 | The study compares antagonists and reports PK/PD parameters for rapacuronium, but does not report any gene variant effects on neostigmine PK or PD. |
| popPK | Mitchell_2009 | irrelevant | 0 | 0 | The study focuses on the effects of 5-hydroxyindalpine on mouse peristalsis, with neostigmine used only as a positive control/comparator agent, and no pharmacokinetic parameters for neostigmine are reported. |
| PGx | Mitchell_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-hydroxyindalpine on colonic peristalsis; neostigmine is only mentioned as a positive control, and no pharmacogenomic analysis is performed. |
| popPK | Morris_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of edrophonium, and neostigmine is mentioned only as a comparator to generalize renal excretion findings. |
| PGx | Morris_1981 | not_relevant | 0 | 0 | The paper reports renal functional changes affecting PK, not genetic variants or pharmacogenomic effects. |
| popPK | Mostoller_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sugammadex, while neostigmine is only used as a comparator agent in the study design. |
| PGx | Mostoller_2021 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of sugammadex in morbid obesity, not the pharmacogenomics of neostigmine. |
| popPK | Naguib_1989 | irrelevant | 0 | 0 | The study is a dose-response analysis of atropine's effect on heart rate when co-administered with neostigmine, containing no pharmacokinetic parameters (CL, V, ka, etc.) for neostigmine. |
| PGx | Naguib_1989 | not_relevant | 0 | 0 | The study reports the dose-response relationship for atropine to prevent neostigmine-induced bradycardia in a general population, containing no analysis of gene variants or pharmacogenomic effects. |
| popPK | Ndzamba_2025 | irrelevant | 0 | 0 | This is a population PK study of ethambutol; neostigmine is only used as an LC-MS/MS internal standard, with no neostigmine PK parameters reported. |
| popPK | Nguyen-Huu_2005 | irrelevant | 0 | 0 | The study investigates the neuromuscular effects of tubocurarine in mice, with neostigmine used only as a cholinesterase inhibitor tool, not as the subject of pharmacokinetic analysis. |
| PGx | Nguyen-Huu_2005 | not_relevant | 0 | 0 | The paper investigates the neuromuscular blocking effect of tubocurarine, not the pharmacokinetic or pharmacodynamic parameters of neostigmine itself. |
| popPK | Norel_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological/mechanistic investigation of cholinesterase activity in human airways, not a pharmacokinetic study reporting disposition parameters for neostigmine. |
| PGx | Norel_1993 | not_relevant | 0 | 0 | The paper investigates the role of butyrylcholinesterase in acetylcholine degradation using isolated tissue and inhibitors, but does not report any genetic variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters of neostigmine. |
| popPK | Oh_2019 | irrelevant | 0 | 0 | The study is a retrospective clinical trial comparing hospital readmission outcomes for sugammadex vs neostigmine, with no pharmacokinetic parameters reported. |
| PGx | Oh_2019 | not_relevant | 0 | 0 | The study compares clinical outcomes (readmission, hospital stay) of reversal drugs and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Palsen_2019 | irrelevant | 0 | 0 | The study analyzes dosing patterns of neuromuscular blocking agents and mentions neostigmine only as a reversal agent, without reporting any pharmacokinetic parameters for neostigmine. |
| PGx | Palsen_2019 | not_relevant | 0 | 0 | The paper investigates clinical dosing patterns of neuromuscular blocking agents and does not report pharmacogenomic effects or genotype-based changes in the PK/PD of neostigmine. |
| popPK | Patel_2013 | irrelevant | 0 | 0 | The study investigates the neuromuscular blocking effects of fluoxetine and its interaction with rocuronium, using neostigmine only as a reversal agent in an in vitro/in vivo functional assay, not as the subject of a pharmacokinetic parameter estimation. |
| PGx | Patel_2013 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between fluoxetine and rocuronium, not a pharmacogenomic effect on neostigmine. |
| popPK | Pineda_1997 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study in rat vas deferens examining alpha2-adrenoceptor reserve, with neostigmine acting as a cholinomimetic treatment rather than being the subject of a pharmacokinetic analysis. |
| PGx | Pineda_1997 | not_relevant | 0 | 0 | This paper is a preclinical pharmacology study in rat vas deferens examining adaptive receptor changes after drug treatments and does not report any pharmacogenomic effects on neostigmine's PK/PD. |
| popPK | Ridtitid_1998 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of a plant extract in an in vitro preparation, using neostigmine only as a negative control/antagonist, and reports no pharmacokinetic parameters for neostigmine. |
| PGx | Ridtitid_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of a plant extract and compares it to standard agents, but it does not report any genetic variants or genotypes affecting the PK or PD parameters of neostigmine. |
| popPK | Rigo_2017 | irrelevant | 0 | 0 | Neostigmine is used only as a positive control/comparator to validate the cholinergic mechanism of the spider toxin PhKv, with no pharmacokinetic parameters reported for neostigmine. |
| PGx | Rigo_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of a spider toxin (PhKv) in mice and does not contain any human pharmacogenomic data or analysis of genetic variants affecting neostigmine pharmacokinetics or pharmacodynamics. |
| popPK | Robinson_1989 | irrelevant | 0 | 0 | The study is a mechanistic investigation of tetrahydroaminoacridine-induced neurotransmitter release, where neostigmine is used only as a control agent and no pharmacokinetic parameters for neostigmine are reported. |
| PGx | Robinson_1989 | not_relevant | 0 | 0 | The study examines the neurochemical mechanisms of tetrahydroaminoacridine and does not report any gene variants affecting the pharmacokinetics or pharmacodynamics of neostigmine. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The study reports ecotoxicological endpoints (EC50, IC50) in Daphnia magna, not pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Rocha_2014 | not_relevant | 0 | 0 | The study focuses on ecotoxicology in Daphnia magna and does not report human pharmacogenomics or genetic variants affecting neostigmine PK/PD. |
| popPK | Rupp_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-aminopyridine in dogs, with neostigmine only mentioned as a comparative agent for duration of action. |
| PGx | Rupp_1983 | not_relevant | 0 | 0 | The study investigates the PK/PD of 4-aminopyridine in dogs and does not involve gene variants or neostigmine pharmacogenomics. |
| popPK | Salahudeen_2017 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic modeling and receptor binding theory; neostigmine is mentioned only as an example of an enzyme inhibitor in a general classification of drug targets, with no quantitative pharmacokinetic parameters reported. |
| PGx | Salahudeen_2017 | not_relevant | 0 | 0 | The paper provides a general overview of pharmacodynamic modeling methods and does not study the effect of specific gene variants on neostigmine. |
| popPK | Santillo_2015 | irrelevant | 0 | 0 | The paper describes a fluorescence assay for acetylcholinesterase (AChE) activity and inhibition, not the pharmacokinetics of neostigmine. |
| PGx | Santillo_2015 | not_relevant | 0 | 0 | The paper describes a method for measuring acetylcholinesterase activity, not the pharmacokinetics or pharmacodynamics of neostigmine. |
| popPK | Sasikala_2026 | irrelevant | 0 | 0 | This is a review of transdermal needle-free delivery devices; neostigmine appears only in a reference title, with no PK parameters reported. |
| PGx | Shafer_1998 | not_relevant | 0 | 0 | The study describes PK/PD in a cohort of volunteers but contains no information regarding genetic variants or pharmacogenomic influences on neostigmine response. |
| popPK | Silva_1988 | irrelevant | 0 | 0 | The study investigates the neuromodulatory actions of substance P on muscarinic receptors, using neostigmine only as a tool compound to block acetylcholinesterase, not to characterize its pharmacokinetics. |
| PGx | Silva_1988 | not_relevant | 0 | 0 | The paper investigates the neuromodulatory actions of substance P on muscarinic receptors, using neostigmine only as an experimental condition to block acetylcholinesterase; it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Somani_1980 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics in myasthenia gravis patients without analyzing any specific gene variant or genotype. |
| popPK | Strelnik_2016 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro activity of novel cholinesterase inhibitors, using neostigmine only as a comparator for toxicity (LD50), with no pharmacokinetic disposition parameters reported. |
| PGx | Strelnik_2016 | not_relevant | 0 | 0 | The paper reports the synthesis and toxicity of novel cholinesterase inhibitors, not the pharmacogenomic effect of a gene variant on neostigmine PK/PD. |
| popPK | Suganuma_2021 | irrelevant | 0 | 0 | The study is a clinical trial measuring lower esophageal barrier pressure as a physiological endpoint for neuromuscular reversal, not a pharmacokinetic study reporting quantitative disposition parameters for neostigmine. |
| PGx | Suganuma_2021 | not_relevant | 0 | 0 | The study compares the efficacy of atropine/neostigmine versus sugammadex on esophageal barrier function but does not investigate the influence of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of neostigmine. |
| popPK | Trobec_2020 | irrelevant | 0 | 0 | Neostigmine is used only as a comparator/reversal agent in an in-vitro mechanistic study of a ruthenium complex, with no PK parameters for neostigmine reported. |
| PGx | Trobec_2020 | not_relevant | 0 | 0 | The paper characterizes the pharmacodynamics of a ruthenium complex (C1-Cl) and its reversal by neostigmine, but does not report any pharmacogenomic effects (gene variants) on neostigmine PK/PD parameters. |
| popPK | Walch_1997 | irrelevant | 0 | 0 | The study investigates cholinesterase enzyme kinetics and vascular pharmacodynamics, not the pharmacokinetic disposition of neostigmine. |
| PGx | Walch_1997 | not_relevant | 0 | 0 | The paper investigates cholinesterase activity and the effects of inhibitors in human pulmonary vessels, but does not report any pharmacogenomic effects of gene variants on the PK or PD of neostigmine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not report pharmacokinetic parameters for neostigmine. |
| PGx | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention neostigmine or any pharmacogenomic effects. |
| popPK | Weinstein_2018 | irrelevant | 0 | 0 | This is a systematic review of regional anesthesia for postoperative pain and does not report pharmacokinetic parameters for neostigmine. |
| PGx | Weinstein_2018 | not_relevant | 0 | 0 | The paper is a systematic review on regional anaesthesia for preventing persistent postoperative pain and does not mention neostigmine, gene variants, or PK/PD pharmacogenomics. |
| popPK | Weinstein_2018_2 | irrelevant | 0 | 0 | The paper is a systematic review of regional anaesthesia for pain prevention and contains no pharmacokinetic data or parameters for neostigmine. |
| PGx | Weinstein_2018_2 | not_relevant | 0 | 0 | The paper is a systematic review regarding regional anaesthesia for postoperative pain and does not investigate neostigmine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Wierda_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pipecuronium bromide, with neostigmine used only as a reversal agent for neuromuscular blockade. |
| PGx | Wierda_1991 | not_relevant | 0 | 0 | The study investigates the PK/PD of pipecuronium in a general patient population and does not report any pharmacogenomic effects of neostigmine or other drugs based on genetic variants. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on lidocaine and esketamine for pain management after hepatectomy and does not involve neostigmine or any pharmacokinetic analysis of the target drug. |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper reports a clinical trial on pain management using lidocaine and esketamine, with no mention of neostigmine or pharmacogenomic effects. |
| popPK | Yajima_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacological effect of sodium propionate on rat ileum contraction, using neostigmine only as a pharmacological tool to modulate cholinergic tone, not as a subject of pharmacokinetic analysis. |
| PGx | Yajima_1984 | not_relevant | 0 | 0 | The paper investigates the physiological effects of short-chain fatty acids on rat ileum contractility and does not report any pharmacogenomic effects on the PK or PD of neostigmine. |
| popPK | Yamamoto_1996 | irrelevant | 3 | 0 | The study focuses on toxicodynamic analysis of cardiac effects (heart rate) and correlates them with in-vitro binding constants, rather than reporting pharmacokinetic disposition parameters (CL, V, Q) for neostigmine. |
| PGx | Yamamoto_1996 | not_relevant | 0 | 0 | The paper investigates the cardiac toxicodynamics of cholinesterase inhibitors in rats but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | Neostigmine is used as a pharmacological inducer of pain/spasm (comparator/challenge agent) in this study of a herbal extract, not as the subject drug for PK parameter estimation. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of a herbal extract and does not report any pharmacogenomic effects on neostigmine's pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a toxicology/protective-efficacy study of neostigmine against snake venom in mice, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of ciprofol, not neostigmine; neostigmine is only mentioned as a co-administered reversal agent with no PK parameters for it. |
| popPK | Çakmak_2022 | irrelevant | 0 | 0 | The study focuses on the in vitro synthesis and enzyme inhibition (AChE/BChE/CA) of novel Schiff bases, using neostigmine only as a comparator; no pharmacokinetic parameters are reported. |
| PGx | Çakmak_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data for novel compounds compared to neostigmine, but does not investigate pharmacogenomic effects (gene variants) on neostigmine's PK or PD. |
| popPK | Østergaard_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mivacurium, while neostigmine is only mentioned as a secondary adjunct for recovery, with no PK parameters reported for it. |
| PGx | Østergaard_2005 | not_relevant | 0 | 0 | The study investigates mivacurium pharmacokinetics in cholinesterase-deficient patients; neostigmine is only mentioned as a secondary rescue agent, and its PK/PD parameters are not characterized or modeled. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bneostigmine%5D&body=Drug%3A%20neostigmine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_neostigmine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:34 UTC</sub>
