<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Adenine&quot;}]"></div>

# Adenine

- **generic name:** Adenine
- **T3DB:** [T3D4279](http://www.t3db.ca/toxins/T3D4279) · **DrugBank:** [DB00173](https://go.drugbank.com/drugs/DB00173) · **PubChem:** [CID 190](https://pubchem.ncbi.nlm.nih.gov/compound/190)
- **groups:** approved, investigational, nutraceutical

## About

Adenine is a purine base. Adenine is found in both DNA and RNA. Adenine is a fundamental component of adenine nucleotides. …

- **Category:** Drug, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** For nutritional supplementation, also for treating dietary shortage or imbalance
- **Mechanism of toxicity:** Adenine forms adenosine, a nucleoside, when attached to ribose, and deoxyadenosine when attached to deoxyribose, and it forms adenosine triphosphate (ATP), a nucleotide, when three phosphate groups are added to adenosine. Adenosine triphosphate is used in cellular metabolism as one of the basic methods of transferring chemical energy between reactions. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4279">T3DB T3D4279</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 73-24-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16708">ChEBI 16708</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=adenine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACACB (unknown), ACP1 (unknown), APRT (unknown), DNA (unknown), MTAP (unknown), PECR (unknown), SRPK2 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 97 | 10/70 | 97/0 | 0 |

## Coverage

- **PubMed hits:** 1424 matched, 306 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ericson_1980.pdf` | Ericson A et al., Plasma concentration and renal excretio…, Scandinavian journal of cli… (1980) | popPK | 5 | [10.3109/00365518009091520](https://doi.org/10.3109/00365518009091520) | [7367806](https://pubmed.ncbi.nlm.nih.gov/7367806) | The paper reports renal elimination and clearance mechanisms for adenine in humans, but no specific numeric kinetic parameter values are provided in the evidence. |
| `Isobe_2016.pdf` | Isobe T et al., Species differences in metabolism of ri…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2015.1096981](https://doi.org/10.3109/00498254.2015.1096981) | [26678038](https://www.ncbi.nlm.nih.gov/pubmed/26678038) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `De_1994.pdf` | De Morais SM et al., Identification of a new genetic defect…, Molecular pharmacology (1994) | pgx | 5 |  | [7969038](https://www.ncbi.nlm.nih.gov/pubmed/7969038) | metadata signals extractable PGX data (CYP2C19) |
| `Ettinger_2007.pdf` | Ettinger DS, Amrubicin for the treatment of small ce…, Journal of thoracic oncolog… (2007) | pgx | 5 | [10.1097/jto.0b013e31802f1cd9](https://doi.org/10.1097/jto.0b013e31802f1cd9) | [17410034](https://www.ncbi.nlm.nih.gov/pubmed/17410034) | metadata signals extractable PGX data (UGT1A1) |
| `Wang_1993.pdf` | Wang SL et al., Molecular basis of genetic variation in…, Clinical pharmacology and t… (1993) | pgx | 5 | [10.1038/clpt.1993.44](https://doi.org/10.1038/clpt.1993.44) | [8097442](https://www.ncbi.nlm.nih.gov/pubmed/8097442) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-09 19:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmadi_2026 | irrelevant | 0 | 0 | The paper focuses on virtual screening for adenosine deaminase inhibitors and does not report toxicokinetic parameters for adenine itself. |
| PGx | Alehaideb_2021 | not_relevant | 0 | 0 | The paper reports the effect of furanocoumarins on CYP1A2 activity and caffeine clearance, but does not investigate the impact of gene variants or genotypes (pharmacogenomics) on these parameters. |
| popPK | Ali_2018 | irrelevant | 0 | 0 | Adenine is used solely as an inducing agent for a disease model, with no kinetic parameters measured for it. |
| popPK | Alnouti_2008 | irrelevant | 0 | 0 | The paper focuses on aldehyde dehydrogenase enzyme expression and does not report kinetic parameters for adenine, which is only mentioned as part of the cofactor name (NADP). |
| popPK | Andreasen_1981 | irrelevant | 0 | 0 | The paper studies the effect of adenine nucleotides on glucocorticoid receptors, not the toxicokinetic parameters (half-life, clearance, etc.) of adenine itself. |
| popPK | Annaert_1998 | irrelevant | 0 | 0 | The subject substance is PMEA (adefovir), an adenine analogue/derivatives, not adenine itself, and the study focuses on prodrug transport in an in vitro model. |
| popPK | Anthonypillai_2006 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of tenofovir (PMPA), an adenine analog, not adenine itself. |
| popPK | Anwar_2017 | irrelevant | 0 | 0 | The paper is a review of Bongkrekic Acid, where adenine is mentioned only as part of the mechanism (inhibition of adenine nucleotide translocase), and no kinetic parameters for adenine itself are reported. |
| popPK | Baldassarri_2023 | irrelevant | 0 | 0 | The paper focuses on benzimidazole compounds as modulators of the enzyme NAPRT (which processes NAD precursors) and does not report toxicokinetic parameters for adenine itself. |
| popPK | Balzarini_1989 | irrelevant | 0 | 0 | The paper focuses on in vitro HPLC retention times and lipophilicity partition coefficients for anti-HIV nucleoside analogues, not in vivo toxicokinetic parameters (half-life, clearance, etc.) for adenine. |
| popPK | Bao_2023 | irrelevant | 0 | 0 | The paper investigates cortisol metabolism and liver injury in hyperuricemic mice induced by adenine, but does not report any toxicokinetic parameters (half-life, clearance, etc.) for adenine itself. |
| popPK | Barker_1977 | irrelevant | 0 | 0 | The paper describes the properties of D-amino acid oxidases and mentions flavine adenine dinucleotide as a binding component, but does not report any toxicokinetic parameters for adenine as a subject substance. |
| popPK | Batra_2021 | irrelevant | 0 | 0 | The paper is a review of adenosine physiology and pharmacology, not a study reporting quantitative toxicokinetic parameters for adenine. |
| popPK | Beegam_2024 | irrelevant | 0 | 0 | The paper uses adenine as a vehicle to induce chronic kidney disease and reports renal biomarkers (urea, creatinine, cytokines) as outcome measures, not toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) of adenine itself. |
| PGx | Bellanti_2021 | not_relevant | 0 | 0 | The paper focuses on cellular senescence and metabolic changes in a cell line, not pharmacogenomics or drug PK/PD. |
| PGx | Belli_2025 | not_relevant | 0 | 0 | The paper focuses on the functional characterization of EGFR genetic variants using base and prime editing, with no mention of the drug 'adenine' or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Benson_2010 | irrelevant | 0 | 0 | The paper focuses on a TLR-7 agonist (BHMA, an adenine derivative) and uses IFN-alpha as a biomarker, reporting no kinetic parameters for adenine itself. |
| popPK | Bijsterbosch_1998 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for the compound (S)-HPMPA, which is an adenine analogue, not adenine itself. |
| popPK | Borbolla-Jiménez_2021 | irrelevant | 0 | 0 | The paper is a review on gene therapy for polyglutamine spinocerebellar ataxias and does not report any toxicokinetic parameters for adenine; "adenine" is only mentioned in the context of CAG nucleotide repeats. |
| popPK | Borsos_2024 | irrelevant | 0 | 0 | The paper studies the metabolism of the mycotoxins alternariol (AOH) and alternariol monomethyl ether (AME), while adenine appears only as part of the cofactor NADPH (nicotinamide adenine dinucleotide phosphate). |
| popPK | Cameron_1993 | irrelevant | 0 | 0 | The paper is a clinical review of purine metabolism disorders in children and does not report quantitative toxicokinetic parameters for adenine. |
| popPK | Casirati_2026 | irrelevant | 0 | 0 | The paper focuses on gene editing and immunotherapy for hematopoietic stem cells, containing no toxicokinetic parameters for the substance adenine. |
| popPK | Chbihi_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study on children's exposure to pollutants and DNA methylation levels, containing no kinetic parameters (half-life, clearance, etc.) for adenine. |
| popPK | Chebbac_2023 | irrelevant | 0 | 0 | The paper investigates essential oil antimicrobial/antioxidant properties and the word adenine appears only in the abbreviation NADPH (Nicotinamide Adenine Dinucleotide Phosphate), not as the subject substance for toxicokinetic analysis. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and mechanism of a novel glioblastoma drug (gliocidin) rather than the toxicokinetics of adenine, which is only mentioned as part of the drug's metabolite name. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper reports changes in hepatic adenine concentrations due to drug treatment in a liver fibrosis model, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for adenine. |
| popPK | Chinnapaka_2023 | irrelevant | 0 | 0 | The paper studies nicotinamide riboside and NAD+ in human adipose stem cells, and adenine is only mentioned as part of the coenzyme name NAD+, not as a subject substance for toxicokinetic analysis. |
| popPK | Corremans_2022 | irrelevant | 0 | 0 | Adenine is used solely as a tool to induce chronic kidney disease in rats, and the paper reports clinical outcomes (creatinine levels) rather than toxicokinetic parameters for adenine itself. |
| popPK | Dos_2020 | irrelevant | 0 | 0 | The paper focuses on virtual screening of lignans for Alzheimer's disease and does not report kinetic parameters for adenine. |
| popPK | Dąbrowska_2014 | irrelevant | 0 | 0 | The paper is a review on the analytical determination of carnitine and does not report any kinetic parameters for adenine. |
| popPK | Elhassan_2019 | irrelevant | 0 | 0 | The paper studies Nicotinamide Riboside (NR) and NAD+ metabolites; adenine appears only as part of the names of co-metabolites (e.g., nicotinic acid adenine dinucleotide) and not as the subject substance for kinetic analysis. |
| popPK | Ericson_1980 | relevant | 5 | 0 | The paper reports renal elimination and clearance mechanisms for adenine in humans, but no specific numeric kinetic parameter values are provided in the evidence. |
| popPK | Ertemi_2011 | irrelevant | 0 | 0 | The paper investigates angiotensin II physiology in human penile tissue, where "adenine" appears only as part of the term "nicotinamide adenine dinucleotide phosphate" (NADPH), not as a studied toxicokinetic substance. |
| popPK | Fainzilber_2006 | irrelevant | 0 | 0 | The paper describes neural degeneration mechanisms and NAD biosynthesis in Drosophila and mice, but contains no toxicokinetic parameters for adenine. |
| popPK | Farah_2022 | irrelevant | 0 | 0 | The paper is a review on riboflavin as an antimicrobial agent and does not report any toxicokinetic parameters for adenine. |
| PGx | Favate_2023 | not_relevant | 0 | 0 | The paper studies metabolic evolution in E. coli using the LTEE model and focuses on NAD biosynthesis, not the pharmacokinetics or pharmacodynamics of the drug adenine. |
| PGx | Feng_2022 | not_relevant | 0 | 0 | The paper describes the development of fluorescent probes for CYP enzymes and reports on drug-drug interactions (miconazole/warfarin), but does not report pharmacogenomic effects (gene variants) on PK/PD parameters for adenine or any other specific drug. |
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics/efficacy of Nicotinamide (NAM) for hearing loss, where adenine appears only as part of the molecule name (NAD+), not as the subject substance with kinetic parameters. |
| popPK | Fernandes_2021 | irrelevant | 0 | 0 | The paper investigates N6-methyladenine, a DNA modification (epigenetic mark), not the toxicokinetics of the free substance adenine. |
| popPK | Fernandez_2013 | irrelevant | 0 | 0 | The paper describes an assay for asparaginase activity and uses NADH (nicotinamide adenine dinucleotide) as a co-substrate, not the substance adenine, and provides no kinetic parameters for adenine disposition. |
| popPK | Fessel_2018 | irrelevant | 0 | 0 | The paper is a review of NAD/NADP metabolism in human disease and does not report toxicokinetic parameters for adenine as a subject substance. |
| popPK | Fiermonte_2004 | irrelevant | 0 | 0 | The paper characterizes the ATP-Mg/Pi transporter protein and its tissue distribution in human cDNAs, but does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for adenine. |
| popPK | Fumagalli_2004 | irrelevant | 0 | 0 | The paper focuses on the pharmacological characterization of the P2Y13 receptor using adenine nucleotides (ADP, 2MeSADP) as agonists, not on the toxicokinetics of the substance adenine itself. |
| popPK | Gagné_2006 | irrelevant | 0 | 0 | Adenine is not the subject substance; it appears only within the chemical name "NADPH" (Nicotinamide Adenine Dinucleotide Phosphate) used as a reagent in the assay. |
| PGx | Gardiner_2018 | not_relevant | 0 | 0 | The study investigates the genetic association (CAG repeat count/phenotype) with metabolic parameters (ATP, respiration) in Huntington's disease and does not report any PK or PD parameters for the administration of adenine as a drug. |
| popPK | Giuliani_2020 | irrelevant | 0 | 0 | The paper is a review on ectonucleotidases and inflammation, discussing adenosine as a metabolite of ATP rather than providing toxicokinetic parameters for adenine. |
| popPK | Gomez-Sanchez_2008 | irrelevant | 0 | 0 | The paper studies the tissue distribution of H6PDH and 11beta-HSD1 enzymes in rats and does not report any kinetic parameters for adenine (which is only mentioned as part of the cofactor name NADPH). |
| popPK | Grant_2021 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of oxygen and the effects of GSSG and FADH2 on lung injury in mice; adenine is not the subject substance and no kinetic parameters for adenine are reported. |
| popPK | Grim_2003 | irrelevant | 0 | 0 | The paper is a review of tenofovir disoproxil fumarate, where adenine appears only as a chemical nomenclature component (PMPA) and not as the subject of toxicokinetic investigation. |
| popPK | Guan_2021 | irrelevant | 0 | 0 | The paper focuses on the immunological role of SIRT3 in NLRC4 inflammasome activation and contains no toxicokinetic parameters for adenine. |
| popPK | Gómez-Suaga_2012 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Hall_2017 | irrelevant | 0 | 0 | The paper is a review on neutrophils and mucosal homeostasis that mentions adenine/adenosine only in the context of inflammatory signaling pathways, providing no toxicokinetic parameters for adenine. |
| popPK | Haque_2013 | irrelevant | 0 | 0 | The paper investigates the toxicity and distribution of quantum dots (CdSe/CdS), and the mention of "nicotinamide adenine dinucleotide phosphate oxidase" is an enzyme name, not kinetic data for the subject substance adenine. |
| popPK | Hartjes_2025 | irrelevant | 0 | 0 | Adenine is used only as a dietary inducer to cause chronic kidney disease in rats, and the paper reports no kinetic parameters (half-life, clearance, etc.) for the disposition of adenine itself. |
| popPK | Hickman_1992 | irrelevant | 0 | 0 | The paper studies insulin and glucagon kinetics in pigs after portacaval shunting, and adenine is mentioned only in the context of unchanged total adenine nucleotide levels, not as a subject of toxicokinetic analysis. |
| popPK | Hogg_2021 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for PENAO, not adenine. |
| popPK | Houston_2008 | irrelevant | 0 | 0 | The paper describes medicinal chemistry for P2Y1 receptor ligands (adenine analogs) and does not report toxicokinetic parameters for adenine itself. |
| popPK | Hsu_1995 | irrelevant | 0 | 0 | The paper concerns the stereospecificity of antibodies for benzo[a]pyrene DNA adducts (including N6-adenine adducts) and does not report toxicokinetic parameters for the free substance adenine. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The paper studies the toxicokinetics and hepatotoxicity of HFPO-DA, not adenine; adenine is only mentioned as part of the molecule name 'nicotinamide adenine dinucleotide'. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | Adenine appears only as a component of the CPDA-1 solution used as a control for blood meal replacement in mosquito repellent bioassays, and no kinetic parameters for adenine itself are reported. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a synthetic biology tool (BioFuse) using adenine base editors in bacteria, and contains no toxicokinetic parameters for the chemical substance adenine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper studies the therapeutic effects of a TCM formulation in an adenine-induced kidney failure model, using adenine solely as an inducer for the disease model rather than as the subject for toxicokinetic analysis. |
| popPK | Huizing_1998 | irrelevant | 0 | 0 | The paper focuses on the tissue distribution of mitochondrial transmembrane carrier proteins (like the adenine nucleotide translocator) and related disorders, not on the toxicokinetics of the substance adenine. |
| popPK | Irie_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of nicotinamide mononucleotide (NMN) and its metabolites, not adenine; adenine is not the subject substance. |
| popPK | Iwatsubo_2006 | irrelevant | 0 | 0 | The paper is a review on drug therapy targeting adenylyl cyclase and mentions adenine analogs only as a class of inhibitors, providing no quantitative toxicokinetic parameters for adenine. |
| popPK | Ji_2007 | irrelevant | 0 | 0 | The paper analyzes ligand-protein binding patterns for drug discovery and evolution, containing no toxicokinetic parameters for adenine. |
| popPK | Jin_2022 | irrelevant | 0 | 0 | The paper reviews riboflavin transporters and genetic diseases, mentioning adenine only as part of the name of flavin adenine dinucleotide (FAD) without reporting any kinetic parameters for adenine itself. |
| popPK | Jung_2023 | irrelevant | 1 | 0 | The paper investigates the immunotherapeutic efficacy of a TLR7 agonist containing an adenine moiety, not the toxicokinetic parameters of the subject substance adenine itself. |
| popPK | Kasprzyk-Pawelec_2025 | irrelevant | 0 | 0 | The paper focuses on SLC25A1 deficiency, 2-hydroxyglutaric acid, and senescence, containing no kinetic parameters or data for adenine. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The paper uses adenine solely to induce a chronic kidney disease model in mice to study stroke outcomes and the drug desidustat, containing no kinetic parameters for adenine itself. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The paper studies the role of the mitochondrial NAD kinase (MNADK) in energy metabolism and metabolic disease, not the pharmacokinetics or pharmacodynamics of a drug like adenine. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The paper describes the synthesis of Fab-drug conjugates using CD38 and NAD+ analogs, with no toxicokinetic data for adenine. |
| popPK | Kocak_2025 | irrelevant | 0 | 0 | The paper is a review on the autophagy-NAD+ axis in neurodegeneration and does not report any quantitative toxicokinetic parameters for adenine. |
| PGx | Konishi_2024 | not_relevant | 0 | 0 | The paper reports on using adenine base editors to correct a SERPINI1 mutation for treating FENIB, rather than investigating pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of adenine as a drug. |
| PGx | Konishi_2025 | not_relevant | 0 | 0 | The paper discusses adenine base editing (a gene therapy tool), not the drug adenine, and does not report pharmacokinetic or pharmacodynamic parameters for a drug. |
| PGx | Koroleva_2025 | not_relevant | 0 | 0 | The paper investigates the effect of vitamin B2 cofactors on CYP2C9 activity, not a gene variant's effect on adenine pharmacokinetics. |
| popPK | Koskinen_2000 | irrelevant | 0 | 0 | The paper discusses DNA adducts formed by epoxides, and "1-substituted adenines" refers to modified bases in DNA, not the kinetic disposition of the substance adenine itself. |
| popPK | Koskinen_2001 | irrelevant | 0 | 0 | The paper studies the kinetics of DNA adduct formation by styrene oxide, where adenine appears only as a chemical site of reaction (adduct formation), not as the subject substance for toxicokinetic disposition. |
| popPK | Koskinen_2001_2 | irrelevant | 0 | 0 | The paper reports DNA adduct levels (styrene-induced) in mice, not quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for adenine itself. |
| popPK | Koudriakova_1996 | irrelevant | 0 | 0 | The paper studies prodrugs of anti-HIV nucleosides (2'-F-ara-ddI) in mice, not the toxicokinetics of adenine itself. |
| popPK | Kovács_2022 | irrelevant | 0 | 0 | The paper studies autophagy and ageing in Drosophila and humans, mentioning adenine only in the context of DNA N6-methylation, not as a toxicokinetic subject. |
| popPK | Krecmerova_2017 | irrelevant | 0 | 0 | The paper is a review of amino acid ester prodrugs for antiviral nucleosides (specifically mentioning acyclo-9-[3-hydroxy-2-(phosphonomethoxy)propyl]adenine/aformivir), not toxicokinetic parameters for free adenine itself. |
| popPK | Kubo_2017 | irrelevant | 0 | 0 | The paper investigates the transport kinetics of riboflavin, and adenine appears only in the name of a competitor molecule (flavin adenine dinucleotide), not as the subject substance. |
| popPK | Kustatscher_2005 | irrelevant | 0 | 0 | The paper investigates the structural binding of NAD metabolites to histone macroH2A, not the toxicokinetics or disposition of adenine in a biological system. |
| popPK | Lal_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the drug LP-184, not for adenine, which is only mentioned as the specific site of DNA alkylation (N3-adenine). |
| popPK | Lambe_1982 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of EHNA, an adenosine deaminase inhibitor, rather than the toxicokinetic parameters of adenine itself. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | Adenine is used only as a tool to induce kidney disease, and the paper does not report any toxicokinetic parameters for adenine itself. |
| popPK | Leuratti_1993 | irrelevant | 0 | 0 | The paper focuses on detecting DNA adenine adducts formed by 1,3-butadiene metabolites and does not report toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for adenine itself. |
| popPK | Leuratti_1994 | irrelevant | 0 | 0 | The paper studies DNA adducts of butadiene metabolites with adenine, not the toxicokinetic parameters (e.g., half-life, clearance) of adenine itself. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper focuses on acrylamide toxicokinetics, and adenine appears only as a protein binding target for a metabolite adduct, not as the subject substance with its own kinetic parameters. |
| popPK | Linden_1993 | irrelevant | 0 | 0 | The paper describes the cloning and pharmacological characterization of an A3 adenosine receptor, reporting binding constants for ligands but no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for the substance adenine itself. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The paper is a review of UGT enzyme kinetics and latency mechanisms, where adenine is mentioned only as part of the "adenine nucleotide inhibition" hypothesis, not as a subject substance with toxicokinetic parameters. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for apocynin, not for the target substance adenine. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Licochalcone A, while adenine is used only as an agent to induce a disease model and no kinetic parameters for adenine are reported. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper studies intervertebral disc degeneration mechanisms; "adenine" appears only as part of the name "nicotinamide adenine dinucleotide phosphate" (NADPH), not as the subject substance, and no toxicokinetic parameters are reported. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper investigates sperm-macrophage interactions and mentions NADPH oxidase, but does not report toxicokinetic parameters for the substance adenine. |
| popPK | Ma_2014 | irrelevant | 0 | 0 | The paper investigates the structural and functional interaction between a viral protein and an enzyme (adenine nucleotide translocase) in shrimp, reporting no toxicokinetic parameters for adenine itself. |
| popPK | Mabon_1996 | irrelevant | 0 | 0 | The paper focuses on DNA adduct formation by 1,2:3,4-diepoxybutane (a metabolite of 1,3-butadiene), and while adducts are characterized as adenine derivatives, no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance adenine itself are reported. |
| popPK | Macaulay_1990 | irrelevant | 0 | 0 | The paper investigates the binding properties of a placental protein (MTBP) and its requirement for NAD/NADH cofactors, not the toxicokinetic parameters (absorption, distribution, metabolism, excretion) of adenine itself. |
| PGx | Maharani_2015 | not_relevant | 0 | 0 | The study investigates the physiological effects of urate on Kv1.5 channel expression and atrial fibrillation mechanisms in cells, but does not report any pharmacogenomic effects on PK or PD parameters of adenine. |
| popPK | Manikas_2015 | irrelevant | 0 | 0 | The paper describes a SERS sensor scaffold using adenine only as a target molecule for detecting analytical sensitivity, not for measuring toxicokinetic parameters. |
| popPK | Marzoog_2026 | irrelevant | 0 | 0 | The paper is a review on statins and Nrf2 signaling in atherosclerosis, and does not report any kinetic parameters for adenine. |
| popPK | Mesquita_2016 | irrelevant | 0 | 0 | The paper is a review of NAD+ metabolism in host-pathogen interactions and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for adenine as a subject substance. |
| PGx | Miklovics_2022 | not_relevant | 0 | 0 | The paper investigates the structure-function relationship of a bacterial enzyme (sulfide:quinone oxidoreductase), not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Miyata_1994 | irrelevant | 0 | 0 | The paper characterizes the gene encoding thromboxane synthase and does not report toxicokinetic parameters for the substance adenine. |
| popPK | Mizutani_2018 | irrelevant | 0 | 0 | The study focuses on the kinetics of I-iomazenil (a radiotracer) to assess hepatic enzyme activity, not the toxicokinetics of adenine. |
| popPK | Moriwaki_1999 | irrelevant | 0 | 0 | The paper is a review of histochemical localization of purine metabolism enzymes and does not report quantitative toxicokinetic parameters for adenine. |
| popPK | Mukhopadhyay_2024 | irrelevant | 0 | 0 | The paper investigates the mechanism of neutrophil migration and bactericidal function via Piezo1, and "adenine" appears only in the name of the co-substrate NADPH (nicotinamide adenine dinucleotide phosphate), not as the subject substance. |
| PGx | Murgia_2023 | not_relevant | 1 | 2 | The paper discusses the nutritional genomics of riboflavin and adenine as a cofactor/precursor, not a pharmacokinetic or pharmacodynamic drug, and does not report quantitative PK/PD effects of gene variants on adenine. |
| popPK | Nakagawa_1998 | irrelevant | 0 | 0 | The study investigates the mechanism of mitochondrial dysfunction induced by tropolones; adenine is only mentioned as part of adenine nucleotides (ATP) which are a measure of cellular energy status, not as the subject substance for toxicokinetic analysis. |
| PGx | Nethisinghe_2018 | not_relevant | 0 | 0 | The paper focuses on the genetic mechanism and diagnostic methods for Spinocerebellar ataxia type 1 (SCA1), not on the pharmacokinetics or pharmacodynamics of the drug adenine. |
| popPK | Nishida_2016 | irrelevant | 0 | 0 | The paper focuses on the expression of enzymes (PAP, NT5E) for metabolizing ATP/adenine nucleotides in taste buds and does not report any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for adenine. |
| popPK | Odunsi_2022 | irrelevant | 0 | 0 | The paper discusses immunometabolism and IDO1 inhibition in ovarian cancer, and adenine appears only as part of the NAD+ molecule or in the context of purinergic signaling, not as the subject of toxicokinetic parameter extraction. |
| popPK | Oesterle_2017 | irrelevant | 0 | 0 | The paper is a review of statins' pleiotropic effects and mentions adenine only as part of the term "nicotinamide adenine dinucleotide" (NAD), not as the subject substance for toxicokinetic analysis. |
| popPK | Omar_1996 | irrelevant | 0 | 0 | The paper discusses enzyme histochemistry in a parasite and mentions "nicotinamide adenine dinucleotide" (a coenzyme), but does not report kinetic parameters for the purine base adenine as a subject substance. |
| popPK | Panayiotou_2014 | irrelevant | 0 | 0 | The paper reviews the enzymatic properties of human adenylate kinases and their role in nucleotide metabolism, containing no toxicokinetic parameters (half-life, clearance, distribution) for the substance adenine. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review on kidney stone disease and does not report any quantitative toxicokinetic parameters for adenine. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The paper describes the structural and enzymatic kinetics (Km, kcat) of tetracycline-destructase enzymes degrading tetracycline antibiotics, with no toxicokinetic data for adenine. |
| popPK | Parker_1990 | irrelevant | 0 | 0 | The paper focuses on adenosine (a nucleoside), not adenine (the nucleobase), and is a clinical review with no kinetic parameters for adenine. |
| popPK | Paulsen-Sörman_1984 | irrelevant | 0 | 0 | The paper investigates the metabolism of phenylalkylamines (such as amphetamines) using NADPH as a reagent, and does not report any kinetic parameters for adenine as a subject substance. |
| popPK | Pei_2026 | irrelevant | 0 | 0 | The paper is a review on NAD+ nanodelivery and does not report any toxicokinetic parameters for adenine. |
| popPK | Picanço-Diniz_2004 | irrelevant | 0 | 0 | The paper studies prion disease pathology using NADPH-diaphorase histochemistry, with no kinetic parameters for the substance adenine. |
| popPK | Poljšak_2022 | irrelevant | 0 | 0 | The paper discusses NAD+ precursors and boosters, with no toxicokinetic data or parameters for adenine as a subject substance. |
| popPK | Poulsen_2013 | irrelevant | 0 | 0 | The paper is a review on advanced glycation endproducts (AGEs) and does not report any toxicokinetic parameters for adenine. |
| popPK | Pradhan_2018 | irrelevant | 0 | 0 | The paper is an in silico study on sulfonamide derivatives for tuberculosis, and adenine is only mentioned as a DNA binding region, with no toxicokinetic parameters for adenine reported. |
| popPK | Pradhan_2018_2 | irrelevant | 0 | 0 | The paper focuses on in silico screening of antimicrobial agents and mentions adenine only as a DNA base pair, containing no toxicokinetic data for adenine. |
| popPK | Prevost_1993 | irrelevant | 2 | 5 | The paper reports excretion kinetics for 3-alkyladenines (metabolites/analogs), not for adenine itself. |
| popPK | Puchstein_1989 | irrelevant | 0 | 0 | The paper discusses general metabolic derangements and adenine nucleotide content in multiple organ failure without reporting any quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) for adenine as a xenobiotic. |
| popPK | Quispe-Díaz_2024 | irrelevant | 0 | 0 | The paper focuses on the chemical composition and biological effects of blueberry extracts, with "adenine" appearing only as part of the enzyme name "nicotinamide adenine dinucleotide phosphate (NADPH)" in molecular docking contexts, not as the subject substance for toxicokinetic analysis. |
| popPK | Rab_2026 | irrelevant | 0 | 0 | The paper studies the anticancer effects of the analog 2-fluoroadenine (F-Ade) in mouse tumor models, not the toxicokinetics of adenine itself, and no kinetic parameters for adenine are reported. |
| popPK | Rac_2005 | irrelevant | 0 | 0 | The paper measures adenine nucleotides as biomarkers of fluoride toxicity in snails, but does not report toxicokinetic parameters for adenine itself. |
| popPK | Riggs_2018 | irrelevant | 0 | 0 | Adenine is used solely as a dietary inducer for a chronic kidney disease model, and no toxicokinetic parameters (half-life, clearance, etc.) for adenine itself are reported. |
| popPK | Ritter_2005 | irrelevant | 0 | 0 | The paper discusses the transport of adenine analogs and nucleotides by MRP4/MRP5 in vitro cells, but does not report quantitative toxicokinetic parameters for the substance adenine itself. |
| popPK | Rocha-de-Melo_2004 | irrelevant | 0 | 0 | The paper investigates the histochemical labeling of nitric oxide-synthases in rat brains and uses NADPH-diaphorase, which contains adenine as a component of the cofactor, but does not report any kinetic parameters for adenine as a subject substance. |
| popPK | Rorke_2002 | irrelevant | 0 | 0 | The paper is a review focusing on adenosine (not adenine) receptor pharmacology and asthma pathophysiology, containing no quantitative toxicokinetic parameters for adenine. |
| popPK | Roszkowska_2008 | irrelevant | 0 | 0 | The paper studies gene expression of enzymes in human placenta and contains no toxicokinetic parameters for adenine. |
| popPK | Rutkowski_2003 | irrelevant | 0 | 0 | The study investigates the kinetics and toxicity of N-methyl-2-pyridone-5-carboxamide (2PY), a catabolite of NAD, while adenine is only mentioned in the name of the parent molecule (NAD) and not as the subject of toxicokinetic analysis. |
| popPK | Sakai_2000 | irrelevant | 0 | 0 | The paper is a review on lead biomarkers and does not report kinetic parameters for adenine, which is only mentioned as part of enzyme names. |
| popPK | Samaha_2023 | irrelevant | 0 | 0 | The paper reports pathological outcomes and biochemical markers (creatinine, BUN, oxidative stress) rather than quantitative toxicokinetic parameters like half-life or clearance rates. |
| popPK | Sasarman_2015 | irrelevant | 0 | 0 | The paper focuses on a genetic mutation in TRNT1 affecting tRNA processing, and the adenine mentioned is part of the CCA trinucleotide added to tRNA, not the toxicokinetics of free adenine. |
| popPK | See_2024 | irrelevant | 0 | 0 | The paper reviews metformin-associated lactic acidosis; the mention of "adenine" refers to nicotinamide adenine dinucleotides (NAD) in the context of ethanol metabolism, not the substance adenine. |
| popPK | She_2021 | irrelevant | 0 | 0 | The paper is a review of NAD+ precursors (nicotinamide, nicotinic acid, NMN, NR) and does not report kinetic parameters for the substance adenine. |
| popPK | Shlezinger_2017 | irrelevant | 0 | 0 | The paper discusses Aspergillus fumigatus infection and NADPH (which contains adenine but is a different substance) and does not report toxicokinetic parameters for adenine itself. |
| popPK | Shreevatsa_2021 | irrelevant | 0 | 0 | The paper focuses on molecular docking of phytobioactives against NQO1 and does not report toxicokinetic parameters for adenine, which is only mentioned as part of the coenzyme FAD in the enzyme name. |
| popPK | Shuker_1993 | irrelevant | 0 | 0 | The paper focuses on 3-alkyladenines (like 3-methyladenine) and other markers, not adenine itself as the subject substance, and provides no kinetic parameters for pure adenine. |
| popPK | Shukla_2023 | irrelevant | 0 | 0 | The paper studies a calcimimetic compound (LNP1892) and uses adenine only as a dietary inducer of a disease model (CKD), not as the subject substance for which kinetic parameters are reported. |
| popPK | Sinsteden_1986 | irrelevant | 0 | 0 | The paper measures tissue content of adenine nucleotides (ATP, ADP, AMP) as a biomarker of metabolic integrity, not the toxicokinetics of the chemical substance adenine itself. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | The paper reports in vitro binding affinities (Ki) and enzyme inhibition (IC50) data for adenine derivatives, but contains no pharmacokinetic or toxicokinetic parameters (such as half-life, clearance, or tissue distribution) for adenine itself. |
| popPK | Sridevi_2022 | irrelevant | 0 | 0 | The paper studies the effect of the proteasome inhibitor epoxomicin on inflammasome activation in retinal pigment epithelium cells and does not report any toxicokinetic parameters for adenine. |
| popPK | Stevens-Hernandez_2025 | irrelevant | 0 | 0 | Adenine is mentioned only as a component of the storage medium (SAG-M) for red blood cells and is not the subject of toxicokinetic parameter extraction. |
| popPK | Stingl_2014 | irrelevant | 0 | 0 | The paper is a systematic review of UGT polymorphisms affecting various drugs (irinotecan, mycophenolic acid, etc.) and does not report kinetic parameters for adenine. |
| popPK | Sun_2020 | irrelevant | 0 | 0 | The paper studies NAD metabolism and telomere biology, and while 'adenine' appears in the name 'nicotinamide adenine dinucleotide' (NAD), it does not report toxicokinetic parameters for adenine itself as the subject substance. |
| popPK | Tanaka_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for chemotherapy drugs (S-1, 5-FU, oxaliplatin) in rats where adenine was used solely to induce a chronic kidney disease model, not as the substance of interest for kinetic extraction. |
| popPK | Tang_2007 | irrelevant | 0 | 0 | The paper focuses on the identification of a novel testis-specific gene (TSC77) in mice and contains no toxicokinetic parameters or quantitative disposition data for adenine. |
| popPK | Taniguchi_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of indoxyl sulfate (IS); adenine is used only to induce renal failure in the rat model and is not the subject of kinetic analysis. |
| popPK | Terao_2024 | irrelevant | 0 | 0 | The paper focuses on NAD+ metabolism and macrophage senescence in AMD, where adenine is only part of the NAD+ molecule or a nucleic acid base, not the subject of toxicokinetic analysis. |
| popPK | Toledo_2018 | irrelevant | 0 | 0 | The paper is a review on immunology and metabolism in leprosy, with no quantitative toxicokinetic parameters for adenine. |
| popPK | Touyz_2019 | irrelevant | 0 | 0 | The paper is a review of NOX5 (NADPH oxidase) biology and does not report toxicokinetic parameters for the substance adenine. |
| popPK | Townsend_1986 | irrelevant | 0 | 0 | The paper measures tissue levels of adenine nucleotides as a marker of energy status in sepsis, but does not report toxicokinetic parameters (half-life, clearance, etc.) for exogenous adenine. |
| popPK | Trammell_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of nicotinamide riboside (NR) and its metabolites (NAD+, NAMN, etc.), not adenine, and contains no kinetic parameters for adenine. |
| popPK | Tulbah_2020 | irrelevant | 0 | 0 | The paper is a review of atorvastatin (ATO), not adenine, and reports no kinetic parameters for the target substance. |
| popPK | Tummino_1992 | irrelevant | 0 | 0 | The paper studies the partitioning of an ATP analog into detergent micelles involving adenine nucleotide translocase, not the toxicokinetics of adenine in a biological system. |
| popPK | Ugamraj_2022 | irrelevant | 0 | 0 | The paper describes TNB-738, an antibody targeting CD38, and adenine is only mentioned as a component of NAD+ (nicotinamide adenine dinucleotide), not as the subject substance for toxicokinetic analysis. |
| popPK | Vincent_1997 | irrelevant | 0 | 0 | The paper focuses on genetic mutations in the TGF-beta receptor in human cancer cell lines and contains no data on the substance adenine. |
| popPK | Visani_1994 | irrelevant | 0 | 0 | The paper describes a case report of cancer treatment using fludarabine (an adenine analogue), but does not report toxicokinetic parameters for adenine itself. |
| popPK | Waller_2022 | irrelevant | 0 | 0 | The paper is a review of SARM1 in axonal degeneration and does not report any quantitative toxicokinetic parameters for adenine. |
| popPK | Wan_2025 | irrelevant | 0 | 0 | The paper studies a nanozyme's catalytic activity where "adenine" appears only as part of the enzyme name (NAD oxidase) or unrelated chemical structures, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper focuses on the identification and expression of a mouse enzyme (renalase/mMAO-C) and does not report any toxicokinetic parameters for adenine. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper uses adenine as an inducer for a chronic renal failure model to study lipidomics and drug efficacy, but it does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, bioaccumulation kinetics) for adenine itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper reports the spatial distribution and concentration of adenine as a metabolite in a medicinal plant (Pinelliae Rhizoma), not toxicokinetic parameters in animals or humans. |
| popPK | Wang_2025_3 | irrelevant | 0 | 0 | The paper discusses immunogenetics and tuberculosis resistance in cattle and mice; adenine is only mentioned as part of the molecule NADPH, not as a subject of toxicokinetic study. |
| popPK | Warner_2016 | irrelevant | 0 | 0 | The paper focuses on disease progression modeling for Huntington's disease in humans and does not report any toxicokinetic parameters for adenine. |
| popPK | Watanabe_1987 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only software metadata, and does not report any kinetic parameters for adenine. |
| popPK | Westman_1972 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Wilkinson_2012 | irrelevant | 0 | 0 | The paper studies ibuprofen in Alzheimer's disease mice and mentions NADPH (nicotinamide adenine dinucleotide phosphate), not adenine toxicokinetics. |
| popPK | Wolf_2012 | irrelevant | 1 | 1 | The paper reports thermodynamic properties (hydration free energies and chloroform-water partition coefficients) derived from molecular dynamics simulations for force field validation, not toxicokinetic parameters (e.g., half-life, clearance, bio-partition coefficients in a physiological context). |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The paper is a review of SIRT3 in cardiovascular disease and does not report any kinetic parameters for adenine. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper focuses on a nanodrug for cancer therapy and mentions "nicotinamide adenine dinucleotide" (NADH/NADPH) but does not report kinetic parameters for the substance adenine itself. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper focuses on halogenated disinfectants and does not report kinetic parameters for adenine; "adenine" is only mentioned as part of the abbreviation NADPH (Nicotinamide Adenine Dinucleotide Phosphate). |
| popPK | Yamagishi_2024 | irrelevant | 0 | 0 | The paper reports a clinical case of metformin-associated lactic acidosis and discusses alcohol metabolism; adenine is mentioned only as part of the chemical name "nicotinamide adenine dinucleotide" (NAD), not as the subject substance with kinetic parameters. |
| popPK | Yan_2015 | irrelevant | 0 | 0 | The paper studies ouabain and ROS signaling in glioblastoma cells and does not report toxicokinetic parameters for adenine. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper studies the role of G6PD in immune response to bacterial infection in C. elegans and does not report any toxicokinetic parameters for adenine. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper investigates a traditional Chinese medicine's effect on adenine-induced renal fibrosis but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution) for adenine itself. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper is a systematic review on the safety and metabolic effects of Nicotinamide Mononucleotide (NMN) and does not report toxicokinetic parameters for adenine. |
| popPK | Yelekçi_2013 | irrelevant | 0 | 0 | The paper focuses on in silico drug design for MAO-B inhibitors and mentions adenine only as part of the enzyme name (flavin adenine dinucleotide), containing no toxicokinetic data for adenine itself. |
| popPK | Yoshino_2018 | irrelevant | 0 | 0 | The paper discusses NAD+ intermediates (NMN and NR) and does not contain kinetic data for adenine. |
| popPK | Zelt_2019 | irrelevant | 0 | 0 | The paper reports kinetic parameters for radiolabeled phosphate and calcium in rats with CKD induced by adenine, but does not report kinetic parameters for adenine itself. |
| popPK | Zeng_2021 | irrelevant | 0 | 0 | The paper is a metabolomics study on cadmium exposure where adenine is identified as a urinary biomarker of nephrotoxicity, not a substance for which kinetic parameters are reported. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of argirein (monitored via metabolite rhein), not adenine, which is only mentioned in the title as part of the term "nicotinamide adenine dinucleotide phosphate". |
| popPK | Zhang_2017 | irrelevant | 1 | 0 | The paper investigates the metabolic fate of purine nucleotides and nucleosides (like AMP/adenosine) in the context of alcohol dependence, but does not report toxicokinetic parameters for adenine itself, and no numeric values are provided in the text. |
| popPK | Zhang_2021_3 | irrelevant | 0 | 0 | The paper is a review of PET radiotracers for the translocator protein (TSPO) and contains no toxicokinetic parameters for adenine. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper investigates SIRT2-mediated apoptosis in *Brucella*-infected bovine cells and does not report any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for adenine. |
| popPK | Zheng_2019 | irrelevant | 0 | 0 | The paper investigates the cardioprotective effects of nicotinamide riboside against doxorubicin toxicity; adenine appears only as part of the name of the metabolite NAD+ (nicotinamide adenine dinucleotide) and no kinetic parameters for adenine are reported. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | Adenine is used as a structural component of the hydrogel material, not as the subject substance for toxicokinetic parameter measurement. |
| popPK | Zhou_1995 | irrelevant | 0 | 0 | The paper studies 11 beta-hydroxysteroid dehydrogenase 2 in rats; "adenine" appears only as part of the cofactor name (NAD+) and is not the subject substance for toxicokinetic analysis. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper focuses on metabolic pathways involving glucose and glycogen, and adenine appears only as part of NADPH (a coenzyme), not as the subject substance for toxicokinetic analysis. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | The paper focuses on neuroprotection in Huntington's disease models and does not report toxicokinetic parameters for adenine. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a PROTAC compound (632005) and nicotinic acid, not for adenine, which is only mentioned as part of the NAD+ biosynthesis pathway. |
| popPK | von_2017 | irrelevant | 0 | 0 | The paper is a review on NADPH oxidase in CNS injury and does not report any toxicokinetic parameters for adenine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Badenine%5D&body=Drug%3A%20adenine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_adenine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
