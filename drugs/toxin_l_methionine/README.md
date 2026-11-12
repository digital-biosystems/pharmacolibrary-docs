<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Methionine&quot;}]"></div>

# L-Methionine

- **generic name:** L-Methionine
- **T3DB:** [T3D4328](http://www.t3db.ca/toxins/T3D4328) · **DrugBank:** [DB00134](https://go.drugbank.com/drugs/DB00134) · **PubChem:** [CID 6137](https://pubchem.ncbi.nlm.nih.gov/compound/6137)
- **groups:** approved, investigational, nutraceutical

## About

Methionine is a dietary indispensable amino acid required for normal growth and development of humans, other mammals, and avian species. In addition to being a substrate for protein synthesis, it is an intermediate in transmethylation reactions, serving as the major methyl group donor in vivo, including the methyl groups for DNA and RNA intermediates. Methionine is a methyl acceptor for 5-methyltetrahydrofolate-homocysteine methyl transferase (methionine synthase), the only reaction that allows for the recycling of this form of folate, and is also a methyl acceptor for the catabolism of betaine. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Route of exposure:** absorbed from the lumen of the small intestine into the enterocytes by an active transport process.
- **Sources and uses:** Used for protein synthesis including the formation of SAMe, L-homocysteine, L-cysteine, taurine, and sulfate.
- **Mechanism of toxicity:** The mechanism of the possible anti-hepatotoxic activity of L-methionine is not entirely clear. It is thought that metabolism of high doses of acetaminophen in the liver lead to decreased levels of hepatic glutathione and increased oxidative stress. …
- **Health effects:** Chronically high levels of methionine are associated with at least 7 inborn errors of metabolism including: Cystathionine Beta-Synthase Deficiency, Glycine N-methyltransferase Deficiency, Homocystinuria-megaloblastic anemia due to defect in cobalamin metabolism, Methionine Adenosyltransferase Deficiency, Methylenetetrahydrofolate reductase deficiency and S-Adenosylhomocysteine (SAH) Hydrolase Deficiency.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4328">T3DB T3D4328</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 63-68-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16643">ChEBI 16643</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Homocysteine | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Saleh_2023_reference](drugs/toxin_l_methionine/LMethionine_Saleh2023_reference.md) | — | 1-compartment (no model) | 2 | Saleh AM et al., An Integrative Biology Approach to Quan…, Cellular and molecular bioe… (2023) | [10.1007/s12195-023-00760-4](https://doi.org/10.1007/s12195-023-00760-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Tessari_2018_reference](drugs/toxin_l_methionine/LMethionine_Tessari2018_reference.md) | — | 1-compartment (no model) | 0 | Tessari P et al., Decreased Homocysteine Trans-Sulfuratio…, The Journal of clinical end… (2018) | [10.1210/jc.2017-01076](https://doi.org/10.1210/jc.2017-01076) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=l_methionine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: BHMT (product), BHMT2 (product), GLUL (inhibitor), MARS1 (substrate), MARS2 (substrate), MAT1A (substrate), MAT2A (substrate), MAT2B (substrate), METAP2 (product), MSRA (substrate), MSRB1 (substrate), MSRB2 (substrate), MTHFR (inhibitor), MTR (product), MTRR (product), SLC16A10 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 00:11 | 1:05:34 | 0/2/0 | 0/0/0 | 0/0/0 | 947,378/48,725 | einfracz / qwen3.8-27b | 60 | 13/43 | 59/1 | 0 |

## Coverage

- **PubMed hits:** 642 matched, 219 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tessari_2018.pdf` | Tessari P et al., Decreased Homocysteine Trans-Sulfuratio…, The Journal of clinical end… (2018) | popPK | 9 | [10.1210/jc.2017-01076](https://doi.org/10.1210/jc.2017-01076) | [29029082](https://pubmed.ncbi.nlm.nih.gov/29029082) | The paper reports quantitative whole-body kinetic parameters (rates of appearance, clearance, and fluxes) for L-methionine in humans, though specific numeric values for methionine itself are mostly described relative to homocysteine or in the abstract without a full results table in the provided evidence. |
| `Eymard_2023.pdf` | Eymard N et al., Pharmacokinetic/pharmacodynamic model o…, Medical & biological engine… (2023) | popPK | 8 | [10.1007/s11517-023-02786-2](https://doi.org/10.1007/s11517-023-02786-2) | [36882575](https://pubmed.ncbi.nlm.nih.gov/36882575) | The paper reports a PBPK model for L-methionine depletion in mice, but specific numeric parameter values are likely embedded in the simulation code or supplementary data not fully detailed in the text. |
| `Rotruck_1975.pdf` | Rotruck JT et al., Comparative metabolism of L-methionine…, The Journal of nutrition (1975) | popPK | 8 | [10.1093/jn/105.3.331](https://doi.org/10.1093/jn/105.3.331) | [1117344](https://pubmed.ncbi.nlm.nih.gov/1117344) | The paper reports quantitative time-course distribution data (percentages of 35S in urine/feces and tissues) for L-methionine in rats, although specific kinetic rate constants or half-lives are not explicitly derived. |
| `Bürger_1977.pdf` | Bürger U, [Studies on the metabolism of parentera…, Infusionstherapie und klini… (1977) | popPK | 6 |  | [562318](https://pubmed.ncbi.nlm.nih.gov/562318) | The abstract reports that significant differences in clearance were found for methionine and states half-lives were 7-10 minutes for nearly all amino acids, but it does not provide the specific numeric value for methionine's clearance or half-life, and the detailed data are not included in the evidence. |

<sub>queue written 2026-11-10 23:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelaal_2024 | irrelevant | 0 | 0 | The paper is a review of postmortem drug redistribution where methionine is mentioned only as a biomarker for pulmonary redistribution, not as a subject of toxicokinetic parameter analysis. |
| PGx | Agusa_2011 | not_relevant | 0 | 0 | The paper discusses arsenic metabolism and AS3MT gene polymorphisms, which is unrelated to the pharmacokinetics or pharmacodynamics of the drug l_methionine. |
| PGx | Agusa_2015 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of arsenic toxicity and AS3MT polymorphisms, but l-methionine is only mentioned as a cofactor for methylation, not as the subject of a PK/PD study. |
| popPK | Ahlén_2025 | irrelevant | 0 | 0 | The paper is a study on SARS-CoV-2 vaccination and infection in ferrets using metabolomics, and while methionine is mentioned as part of a pathway, no kinetic parameters (half-life, clearance, etc.) are reported. |
| PGx | Aksoy_1994 | not_relevant | 0 | 0 | The paper focuses on cloning NNMT and does not report pharmacogenomic effects on L-methionine PK/PD. |
| popPK | Alsharedi_2018 | irrelevant | 0 | 0 | The paper is a review of osimertinib pharmacokinetics in lung cancer; L-methionine is only mentioned as a point mutation (T790M) in the EGFR receptor, not as the substance being studied for toxicokinetics. |
| popPK | Ampomah_2022 | irrelevant | 0 | 0 | The paper studies the signaling role of methionine in efferocytosis and reports no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for L-methionine itself. |
| PGx | Arbitrio_2016 | not_relevant | 0 | 0 | The paper focuses on erlotinib toxicity and does not investigate the pharmacokinetics or pharmacodynamics of l-methionine. |
| popPK | Armisen_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life) for the antisense oligonucleotide AZD2693, not for the substance l_methionine, which is mentioned only in the context of a genetic polymorphism (PNPLA3 I148M). |
| popPK | Azad_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for polymyxin B, while methionine is studied only as a co-exposure or protective agent without its own kinetic parameters. |
| PGx | Bai_2009 | not_relevant | 0 | 0 | The paper describes COMT gene variants and their in vitro stability for endogenous catechol substrates, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of l-methionine. |
| popPK | Batra_2021 | irrelevant | 0 | 0 | The paper is a review on adenosine and its congeners, and l_methionine is only mentioned as a component of S-adenosyl-L-methionine without any kinetic parameters being reported. |
| PGx | Bedard_2024 | not_relevant | 0 | 0 | The paper studies the interaction of MTAP and MAT2a inhibitors in tumor cells to affect PRMT5 and methionine cycle metabolites, not the pharmacokinetics or pharmacodynamics of the amino acid l_methionine as a therapeutic drug. |
| popPK | Boisdron-Celle_2001 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of platinum derivatives and mentions methionine only as a biological target for protein binding, without reporting kinetic parameters for L-methionine itself. |
| popPK | Brosnan_2007 | irrelevant | 0 | 0 | This is a review paper outlining metabolic concepts and recent findings in methyl balance without presenting original quantitative kinetic parameters for L-methionine. |
| popPK | Burchiel_1987 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of monoclonal antibodies, using methionine only as a radiolabel for tracking, not as the subject substance. |
| popPK | Bürger_1977 | relevant | 6 | 1 | The abstract reports that significant differences in clearance were found for methionine and states half-lives were 7-10 minutes for nearly all amino acids, but it does not provide the specific numeric value for methionine's clearance or half-life, and the detailed data are not included in the evidence. |
| PGx | Cannon_2002 | not_relevant | 0 | 0 | The paper describes a colorimetric assay for quantifying S-adenosylmethionine using the enzyme TPMT, but does not report pharmacogenomic effects on the PK/PD of L-methionine. |
| popPK | Carmichael_1990 | irrelevant | 0 | 0 | The paper focuses on renal toxicity assessment of MAP in humans; methionine is mentioned only via S-adenosyl methionine levels as a marker of enzyme inhibition, not as the subject of toxicokinetic parameter estimation. |
| PGx | Catcott_2017 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method (IsoLAIT) for identifying enzyme-substrate pairs and does not report pharmacogenomic effects on the PK/PD of l-methionine. |
| PGx | Chang_2003 | not_relevant | 0 | 0 | The paper investigates the effect of an amino acid dialysate on homocysteine metabolism in a general population and merely mentions MTHFR polymorphism as a future direction, rather than reporting a pharmacogenomic effect. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper focuses on oncolytic virus delivery using a methionine-modified polymer carrier, and does not report toxicokinetic parameters for L-methionine. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper is a proteomics study of rabbit lung tumors where methionine is only mentioned as part of a metabolic pathway (cysteine and methionine metabolism) involved in differential protein expression; it contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for L-methionine. |
| PGx | Chiba_1988 | not_relevant | 0 | 0 | The paper investigates cell cycle and differentiation effects on SAM metabolism, not the impact of a specific gene variant on the pharmacokinetics or pharmacodynamics of L-methionine. |
| PGx | Chowdhury_2022 | not_relevant | 0 | 0 | The paper focuses on plant metabolic modeling of maize under nitrogen stress and does not investigate pharmacogenomic effects on human pharmacokinetic or pharmacodynamic parameters for l-methionine. |
| popPK | Clarke_2014 | irrelevant | 0 | 0 | The paper studies the disposition of pravastatin, and L-methionine is only used as a dietary component to induce a disease model (NASH), not as the subject substance. |
| popPK | Clauss_2023 | irrelevant | 0 | 0 | The paper focuses on the structural design and protein-stabilizing properties of methionine-based polymers, containing no kinetic parameters (e.g., half-life, clearance, partition coefficients) for L-methionine or its metabolites. |
| popPK | Cui_2020 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the drug B1344 in primates and mice, where methionine appears only as a component of a deficient diet to induce disease, not as a subject of toxicokinetic analysis. |
| PGx | Deiman_2026 | not_relevant | 0 | 0 | The paper reports plasma proteomics, metabolomics, and lipidomics profiles in patients with a specific genetic cardiomyopathy (Phospholamban R14del), but it does not involve the drug L-methionine nor report pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Deng_2023 | not_relevant | 0 | 0 | The paper studies BDNA-induced hepatotoxicity in rats and mentions L-methionine only as a metabolite in a pathway, with no data on genetic variants affecting L-methionine PK/PD. |
| popPK | Dinmohammadi_2023 | irrelevant | 2 | 2 | The paper studies a technetium-labeled methionine analog as an imaging tracer, not the toxicokinetics of L-methionine itself; reported parameters are radiotracer biodistribution and binding constants. |
| popPK | Dorokhov_2015 | irrelevant | 0 | 0 | The paper discusses methanol and formaldehyde, not l_methionine, and contains no kinetic parameters for the target substance. |
| popPK | Dorr_1993 | irrelevant | 0 | 0 | The paper is a review of GM-CSF pharmacokinetics and toxicity, mentioning methionine only as an amino acid in the protein sequence, not as a subject substance for kinetic study. |
| popPK | Eymard_2023 | relevant | 8 | 2 | The paper reports a PBPK model for L-methionine depletion in mice, but specific numeric parameter values are likely embedded in the simulation code or supplementary data not fully detailed in the text. |
| PGx | Fang_2003 | not_relevant | 0 | 0 | The paper discusses folate, MTHFR polymorphisms, and DNA methylation in cancer, but does not report a pharmacogenomic effect on a PK or PD parameter of L-methionine. |
| popPK | Farrera_2025 | irrelevant | 0 | 0 | The paper studies valsartan pharmacokinetics, and l-methionine appears only as a component of the MCD diet used to induce disease, not as the subject substance. |
| PGx | Filipowicz_2010 | not_relevant | 0 | 0 | The paper discusses S-adenosyl-L-methionine (SAMe) in the treatment of Hepatitis C, not L-methionine, and reports clinical efficacy rather than pharmacogenomic effects on PK/PD parameters. |
| popPK | Fondevila_2024 | irrelevant | 0 | 0 | The paper studies liver disease in mice fed a methionine-deficient diet, but reports no kinetic parameters for L-methionine itself. |
| popPK | Forrest_1982 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for paracetamol, while l_methionine is mentioned only as a therapeutic agent for overdose. |
| popPK | Francioso_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for S-adenosyl-L-methionine (SAM), not L-methionine. |
| popPK | Friedman_2001 | irrelevant | 1 | 0 | The paper is a review focusing on homocysteine (a metabolite) and renal disease mechanisms, with no quantitative kinetic parameters for l_methionine provided. |
| popPK | Garg_2006 | irrelevant | 0 | 0 | The paper studies monocyte differentiation and redox metabolism where methionine is a metabolic precursor, not the subject substance for toxicokinetic parameter extraction. |
| popPK | Garibotto_2006 | irrelevant | 0 | 0 | The paper is a narrative review discussing the causes of hyperhomocysteinemia in renal failure without reporting original quantitative kinetic parameters (e.g., half-lives, rate constants, clearance values) for L-methionine or its metabolites. |
| PGx | Gaur_2016 | not_relevant | 0 | 0 | The paper studies the mechanism of L-methionine as a methyl donor on DNA methylation in RA fibroblasts, not a pharmacogenomic effect on L-methionine's PK or PD parameters. |
| PGx | Girard_1994 | not_relevant | 0 | 0 | The paper describes the cloning and expression of histamine N-methyltransferase (HNMT) cDNA and characterizes enzyme kinetics, but it does not report pharmacogenomic effects on PK/PD parameters for the specific drug l-methionine. |
| PGx | Glauser_1993 | not_relevant | 0 | 0 | The paper investigates the metabolism of diethyldithiocarbamate (DDC), not the pharmacokinetics or pharmacodynamics of L-methionine. |
| popPK | Gupta_2021 | irrelevant | 0 | 0 | The paper focuses on 99mTc-labeled methionine-gold nanoparticles (a conjugate) for imaging, and while it reports tumor:plasma ratios for the compound, these characterize the nanoparticle's pharmacokinetics rather than the free substance L-methionine. |
| popPK | Guttormsen_1997 | irrelevant | 0 | 0 | The study measures kinetic parameters (half-life, clearance) for homocysteine, not L-methionine, despite mentions of a methionine response to loading. |
| popPK | Haberger_2015 | irrelevant | 0 | 0 | The paper studies the oxidation of methionine residues within an antibody structure and its effect on FcRn binding, not the toxicokinetic parameters of L-methionine as a chemical substance. |
| popPK | Hadchouel_2022 | irrelevant | 2 | 0 | The paper is a clinical efficacy study reporting qualitative clinical improvements and referencing plasma concentration time-courses in supplementary figures that are not provided, without extracting or reporting specific quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd). |
| popPK | Han_2025 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and mechanism of TMAO, while L-methionine is mentioned only as a metabolite within the methionine cycle and shows no quantitative kinetic parameters (half-life, clearance, etc.) for L-methionine itself. |
| popPK | Hasegawa_2011 | irrelevant | 2 | 1 | The study focuses on the toxicokinetics of D-methionine, with L-methionine appearing only as a metabolite/comparator without specific numeric kinetic parameters provided for L-methionine itself. |
| popPK | Hashimoto_2007 | relevant | 6 | 2 | The paper reports a plasma half-life of ~35 min for stable isotope-labeled methionine in rats, but the quantitative time-course data and specific clearance values are contained in figures (Figs 6, 7, 9) that are not provided as readable numeric tables in the evidence. |
| popPK | Hempe_1989 | irrelevant | 0 | 0 | The paper investigates zinc kinetics using a zinc-methionine complex, so l-methionine is a carrier/co-exposure rather than the subject substance. |
| popPK | Hepowit_2023 | irrelevant | 0 | 0 | The paper studies the effect of myriocin on the methionine transporter Mup1 in yeast, reporting longevity and transcriptomic data rather than quantitative toxicokinetic parameters for L-methionine itself. |
| popPK | Herrmann_2005 | irrelevant | 0 | 0 | The paper reports changes in concentrations of methionine cycle intermediates (like homocysteine and SAM/SAH) in renal patients but does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for l-methionine itself. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper reports on the engineering of a biosensor for L-methionine in E. coli, not on the pharmacokinetics or pharmacodynamics of L-methionine as a drug in humans. |
| PGx | Illamola_2019 | not_relevant | 0 | 0 | The paper focuses on thiopurine metabolism (TPMT activity) and does not report pharmacokinetic or pharmacodynamic parameters for L-methionine. |
| popPK | Imbard_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (clearance, volume of distribution, half-life) for the administered drug betaine, not for l-methionine, which is measured only as a metabolic outcome marker. |
| PGx | Indjova_2003 | not_relevant | 0 | 0 | The paper focuses on thiopurine drugs and L-methionine is only used as a methyl donor in the assay, not as the drug of interest for pharmacogenomics. |
| popPK | Ishiwata_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 18F-FBPA and 10B-BPA, mentioning l-methionine only as a tracer for metabolic activity or a comparator, providing no kinetic parameters for l-methionine itself. |
| popPK | Jakovljevic_2025 | irrelevant | 0 | 0 | The paper studies palladium(II) complexes using methionine as a ligand and reports binding/cytotoxicity data, not the toxicokinetic parameters of L-methionine itself. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of PET tracers targeting the enzyme MAT2A, not the toxicokinetic parameters of the substance L-methionine itself. |
| popPK | Jilek_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cisplatin (CDDP), not l-methionine, which is used only as part of the diet to induce NASH in the rat model. |
| PGx | Joneidi_2023 | not_relevant | 0 | 0 | The drug is l-methionine, but the paper studies AS3MT polymorphisms and arsenic trioxide (As2O3) hepatotoxicity; l-methionine is only mentioned as a physiological methyl donor, not as a drug with a reported pharmacokinetic or pharmacodynamic parameter modified by the genotype. |
| popPK | Junaid_2023 | irrelevant | 0 | 0 | The paper is a review of sakuranetin, and L-methionine is mentioned only as an abiotic stressor that induces sakuranetin production in plants, not as the subject of toxicokinetic analysis. |
| PGx | Karaca_2014 | not_relevant | 0 | 0 | The paper focuses on the genetic etiology and clinical phenotypes of cystathionine beta-synthase deficiency, not on the pharmacokinetics or pharmacodynamics of L-methionine. |
| PGx | Khalil_2005 | not_relevant | 0 | 0 | The paper describes an HPLC method for measuring TPMT enzyme activity and reports baseline activities, but does not report any pharmacokinetic or pharmacodynamic parameters of L-methionine. |
| popPK | Kimura_2014 | irrelevant | 0 | 0 | The paper is a review on hydrogen sulfide and polysulfides, and L-methionine is not mentioned or studied. |
| popPK | Kleidonas_2024 | irrelevant | 0 | 0 | The paper investigates the effects of ammonium chloride on synaptic transmission in mouse brain slices, using methionine sulfoximine as an enzyme inhibitor, and does not report any toxicokinetic parameters for L-methionine. |
| popPK | Knogge_1986 | irrelevant | 0 | 0 | The paper investigates phenolic biosynthesis in oats (Avena sativa) and mentions S-adenosyl-L-methionine only as a substrate/enzyme component, not as a subject of toxicokinetic parameter measurement. |
| popPK | Kohalmy_2011 | irrelevant | 0 | 0 | The paper is a review on the regulation of phase II enzymes, where l-methionine appears only as a precursor (S-adenosyl-L-methionine) and no kinetic parameters for l-methionine itself are reported. |
| PGx | Kohalmy_2011 | not_relevant | 0 | 0 | The paper is a review on the regulation of phase II enzymes by steroid hormones and does not discuss pharmacogenomic effects on the PK/PD of L-methionine. |
| popPK | Kohl_2019 | irrelevant | 0 | 0 | The paper is a review of cysteine catabolism and sulfite homeostasis; methionine is mentioned only as a precursor in the transsulfuration pathway, with no quantitative toxicokinetic parameters reported. |
| popPK | Komorniak_2019 | irrelevant | 0 | 0 | The paper is a review discussing the clinical implications of homocysteine and vitamin deficiencies after bariatric surgery, and does not provide quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for L-methionine itself. |
| PGx | Krynetski_1995 | not_relevant | 0 | 0 | The paper focuses on mercaptopurine and TPMT mutations, not l_methionine. |
| PGx | Kröplin_1998 | not_relevant | 0 | 0 | The paper reports TPMT activity levels in response to genetic variants, not the pharmacokinetic or pharmacodynamic effects of L-methionine. |
| popPK | Kubota_1996 | irrelevant | 2 | 0 | The paper uses L-methionine as a comparator radiotracer to evaluate fluorine-18-fluorophenylalanine, and the provided evidence contains only qualitative comparisons of uptake timing and ratios rather than explicit quantitative kinetic parameter values for L-methionine. |
| popPK | Kumar_2016 | irrelevant | 0 | 0 | The paper is a review on therapeutic strategies for homocystinuria and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for L-methionine itself. |
| PGx | Kunjapur_2016 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering in E. coli for vanillin biosynthesis, not on human pharmacogenomics or the pharmacokinetics/pharmacodynamics of L-methionine as a drug. |
| popPK | Lauterburg_1984 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and turnover of glutathione, mentioning methionine only as a substrate for synthesis without providing any kinetic parameters for methionine itself. |
| popPK | Leahy_2021 | irrelevant | 0 | 0 | The paper investigates enzyme kinetics (Km, kcat, Ki) of Human Neutrophil Elastase on synthetic peptide substrates containing methionine residues, rather than the toxicokinetic disposition of L-methionine as a substance in an organism. |
| PGx | Lee_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of a model compound (2-mercaptopyrazine) and does not involve l-methionine or pharmacogenomic effects on its PK/PD. |
| PGx | Lennard_1994 | not_relevant | 0 | 0 | The paper describes an assay for thiopurine methyltransferase (TPMT) activity and its correlation with radiochemical assays, not the pharmacokinetics or pharmacodynamics of l-methionine. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper studies CYP activity using caffeine, losartan, and omeprazole as substrates; L-methionine is not mentioned or measured. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper is a review of SAM-dependent methyltransferases and disease associations, not a study on the pharmacokinetics or pharmacodynamics of L-methionine itself. |
| popPK | Liaw_2002 | irrelevant | 0 | 0 | The paper discusses management of HBV resistance mutations (YMDD) to lamivudine and does not report any toxicokinetic parameters for L-methionine. |
| popPK | Lignet_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the drug M8891, a methionine aminopeptidase 2 inhibitor, not for l_methionine itself. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The paper characterizes the glycosylation and post-translational modifications (including methionine oxidation) of a monoclonal antibody (rituximab), but does not report any toxicokinetic parameters for L-methionine as a subject substance. |
| PGx | Lynch_2025 | not_relevant | 0 | 0 | The paper analyzes bacterial metagenomics in marine sediments, not human pharmacogenomics of l_methionine. |
| popPK | Ma_2015 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of S-propargyl-cysteine, while L-methionine is only mentioned as an unabsorbed co-substance in a competition study. |
| PGx | Ma_2018 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring TPMT activity using isotope-labeled S-adenosyl-l-methionine as a substrate, not the pharmacokinetics or pharmacodynamics of l-methionine itself. |
| PGx | Malygin_2003 | not_relevant | 0 | 0 | The paper discusses bacterial DNA methylation kinetics using S-adenosyl-l-methionine, not the pharmacokinetics or pharmacodynamics of L-methionine. |
| PGx | Malygin_2004 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of bacteriophage T4Dam DNA methyltransferase, not a human pharmacogenomic effect on the PK or PD of L-methionine. |
| popPK | Mandal_2022 | irrelevant | 0 | 0 | The paper is a review discussing the oxidation of the methionine residue in amyloid-beta peptides in Alzheimer's disease and does not report any quantitative toxicokinetic parameters for L-methionine. |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | The paper studies Candida albicans morphology and does not discuss pharmacogenomics or PK/PD of L-methionine. |
| popPK | Martínez-Chantar_2002 | irrelevant | 1 | 0 | The paper discusses the impaired rate of methionine clearance in cirrhotic patients but is a narrative review that cites observations from ~15 years prior without providing specific quantitative kinetic parameter values in the provided text. |
| PGx | Menor_2001 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring TPMT activity and does not report pharmacogenomic effects on the PK or PD of L-methionine. |
| popPK | Merrill_1990 | irrelevant | 0 | 0 | The paper focuses on Vitamin B6 metabolism, and while it mentions methionine clearance, it reports no significant differences (null result) rather than providing a specific quantitative kinetic parameter value for l_methionine as the subject. |
| popPK | Mijatovic_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of mitochondrial dysfunction in homocystinuria caused by CBS mutations and does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for L-methionine. |
| PGx | Milek_2012 | not_relevant | 1 | 0 | The paper investigates the effect of L-methionine metabolism (SAM levels) on TPMT activity (a PD parameter of thiopurines), not the pharmacokinetics or pharmacodynamics of L-methionine itself. |
| popPK | Mitchell_1978 | irrelevant | 2 | 0 | The paper describes in vitro metabolic mechanisms (transamination) of methionine in rat tissue homogenates but does not report quantitative toxicokinetic parameters such as clearance, half-life, or rate constants for whole-body disposition. |
| PGx | Mizunuma_2004 | not_relevant | 0 | 0 | The paper discusses metabolic regulation in yeast, not the pharmacokinetics or pharmacodynamics of L-methionine as a drug in a pharmacogenomic context. |
| PGx | Mokmak_2009 | not_relevant | 0 | 0 | The paper reports molecular dynamics simulations of TPMT and 6-mercaptopurine, not pharmacogenomic data for L-methionine. |
| popPK | Moravcová_2025 | irrelevant | 0 | 0 | The paper is a review of Vitamin B12 (cobalamin) and mentions L-methionine only as a product of a biochemical reaction catalyzed by B12, without reporting any kinetic parameters for L-methionine itself. |
| PGx | Moura_2018 | not_relevant | 0 | 0 | The paper investigates the association between a DNMT3B polymorphism and the risk of Down syndrome, not the pharmacokinetics or pharmacodynamics of L-methionine. |
| popPK | Nielsen_1992 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for methylmercury, with seleno-L-methionine acting as a co-exposure or modulator, not as the subject substance. |
| popPK | Olivieri_2026 | irrelevant | 0 | 0 | The paper is a clinical guideline for diagnosis and management of metabolic disorders, containing no quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-methionine. |
| popPK | Ostrakhovitch_2019 | irrelevant | 0 | 0 | The paper is a review on homocysteine and aging that discusses methionine metabolism qualitatively but provides no quantitative kinetic parameters for L-methionine. |
| PGx | Otterness_1985 | not_relevant | 0 | 0 | The paper studies TPMT activity in mouse models using 6-mercaptopurine as a substrate, not the pharmacokinetics or pharmacodynamics of L-methionine in relation to genetic variants. |
| PGx | Otterness_1987 | not_relevant | 0 | 0 | The paper studies TPMT pharmacogenetics and its effect on 6-mercaptopurine, not l_methionine. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review of kidney stone management and only mentions L-methionine qualitatively as a therapeutic agent for struvite stones, without reporting any quantitative toxicokinetic parameters (e.g., half-life, clearance) for the substance itself. |
| popPK | Patel_2018 | irrelevant | 0 | 0 | The paper focuses on virtual screening of COMT inhibitors for Alzheimer's disease and does not report any toxicokinetic parameters for L-methionine. |
| popPK | Pitha_1983 | irrelevant | 0 | 0 | The study investigates the biologically inert polymer Poly-L-methionine sulfoxide and its metabolite analogue L-methionine sulfoxide for solubilizing properties, not the toxicokinetic parameters (half-life, clearance, etc.) of the subject substance L-methionine. |
| popPK | Polvoy_2022 | irrelevant | 2 | 3 | The paper studies D-11C-methionine (D-enantiomer), not L-methionine, and the kinetic parameters (K1, k2, etc.) belong to the radiotracer, not the target substance L-methionine. |
| popPK | Qi_2020 | irrelevant | 0 | 0 | The paper focuses on a nanoprobe for detecting H2S in mice brains, with S-adenosyl-L-methionine used only as a biological activator, and contains no kinetic parameters for L-methionine. |
| popPK | R_2025 | irrelevant | 0 | 0 | The paper is an in-silico study of DNMT inhibitors and does not report any kinetic parameters for L-methionine. |
| popPK | Reinhardt_1997 | irrelevant | 0 | 0 | The study uses L-methionine as a radiotracer to assess cancer recurrence in rats but reports qualitative uptake patterns (e.g., relative to muscle) rather than quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for L-methionine itself. |
| popPK | Sadegzadeh-Sadat_2021 | irrelevant | 0 | 0 | The paper investigates zinc-methionine as a supplement for glucose metabolism in sheep and does not report any kinetic parameters (half-life, clearance, etc.) for L-methionine as the subject substance. |
| PGx | Salavaggione_2005 | not_relevant | 0 | 0 | The study investigates the pharmacogenetics of Thiopurine S-methyltransferase (TPMT) in relation to thiopurine drugs (e.g., 6-mercaptopurine), not L-methionine. |
| popPK | Saleh_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for azidohomoalanine (Aha), a non-canonical amino acid analog, rather than L-methionine itself, which is only mentioned as the parent structure or for comparison. |
| PGx | Saliu_2021 | not_relevant | 0 | 0 | The paper discusses SARS-CoV-2 inhibitors and mentions S-adenosyl-L-Methionine as a substrate, but does not study the pharmacokinetics/pharmacodynamics of l-methionine or report any genetic variants affecting its parameters. |
| popPK | Sandstead_1995 | irrelevant | 0 | 0 | The paper focuses on trace element toxicity (zinc/copper) and only lists "decreased methionine and leucine enkephalins" as a clinical manifestation of copper deficiency, providing no quantitative kinetic parameters for L-methionine. |
| popPK | Saunderson_1985 | relevant | 4 | 5 | The paper reports the distribution, oxidation, and excretion (percent of dose) of L-methionine in broiler chicks, providing qualitative and semi-quantitative kinetic data (time courses, % excretion/oxidation) but lacking specific rate constants or half-lives. |
| PGx | Schott_2017 | not_relevant | 2 | 3 | The study examines the pharmacodynamic effects of Seleno-L-methionine (SeMet), not L-methionine, and focuses on oxidative stress markers rather than standard PK/PD parameters for the drug itself. |
| PGx | Schott_2018 | not_relevant | 0 | 0 | The paper investigates the effect of Brazil nuts on oxidative metabolism and does not involve the pharmacokinetic or pharmacodynamic evaluation of L-methionine. |
| popPK | Shao_2006 | irrelevant | 0 | 0 | The paper discusses the oxidation of methionine residues within a protein (apoA-I) in the context of cardiovascular pathology, not the toxicokinetic disposition of L-methionine as a substance. |
| popPK | Shen_2020 | irrelevant | 0 | 0 | The paper is a bioinformatic review of gene expression and methylation status in the homocysteine-methionine cycle and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) for L-methionine. |
| popPK | Shi_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for a MAT2A inhibitor compound, not for l-methionine, which is only a biological target/metabolite context. |
| PGx | Sikora_2020 | not_relevant | 0 | 0 | The paper investigates a vaccine candidate (MetQ protein) for gonorrhea and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug L-methionine. |
| popPK | Silvestre_2010 | irrelevant | 0 | 0 | The paper is a proteomic analysis of sturgeon larvae exposed to selenium, using L-methionine only as a control vehicle and not reporting any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for L-methionine itself. |
| popPK | Simón_2021 | irrelevant | 0 | 0 | The study focuses on magnesium homeostasis and NASH, using methionine only as a component of a dietary model for choline-deficiency, and provides no kinetic parameters for L-methionine. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The paper studies methionine-enkephalin (a peptide), not the amino acid L-methionine, and reports no kinetic parameters for the target substance. |
| PGx | Sobiak_2018 | not_relevant | 0 | 0 | The paper does not study the pharmacokinetics or pharmacodynamics of l_methionine. |
| popPK | Stegmayr_2021 | irrelevant | 0 | 0 | The paper is a review focusing on O-(2-[18F]fluoroethyl)-L-tyrosine ([18F]FET) for brain tumor diagnosis, and L-methionine is only mentioned as a historical comparator tracer without any kinetic parameters provided. |
| popPK | Sterner_1980 | irrelevant | 0 | 0 | The paper reports dipeptidase activity using L-methionyl-L-methionine as a substrate, not toxicokinetic parameters (half-life, clearance, etc.) for L-methionine itself. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper focuses on the development of antimicrobial drug inhibitors for bacterial methionyl-tRNA synthetase, using l-methionine only as a substrate in in vitro enzyme assays, and does not report any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for l-methionine in any organism. |
| PGx | Szumlanski_1995 | not_relevant | 0 | 0 | The paper studies drug-drug interaction (TPMT inhibition by sulphasalazine) and does not involve the drug L-methionine or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Takahata_1995 | irrelevant | 0 | 0 | The paper focuses on the synthesis and chemical properties of Vitamin B12 derivatives, and L-methionine is only mentioned as the auxotrophic trait of the bacterial strain used for activity assays, not as the subject of toxicokinetic study. |
| popPK | Talukdar_2022 | irrelevant | 0 | 0 | The paper is a perspective on the medicinal chemistry of protein methyltransferase inhibitors (competing with SAM) and does not report quantitative toxicokinetic parameters for L-methionine itself. |
| popPK | Tambunan_2017 | irrelevant | 0 | 0 | The paper is a computational study on modified S-adenosyl-l-homocysteine (SAH) derivatives as dengue virus inhibitors, and the mentioned oral bioavailability refers to these synthetic compounds, not the subject substance l-methionine, with no kinetic parameters reported for l-methionine. |
| PGx | Tejera_2020 | not_relevant | 0 | 0 | The paper studies the metabolic modeling of Campylobacter jejuni bacteria, not human pharmacogenomics. |
| popPK | Thomas_1983 | irrelevant | 0 | 0 | L-methionine is used solely as a radioactive tracer for metabolic labeling in an immunology study, with no kinetic parameters reported. |
| PGx | Timmer_2021 | not_relevant | 0 | 0 | The paper analyzes faecal microbiome composition in metabolic diseases, not pharmacokinetic/pharmacodynamic effects of l-methionine related to specific gene variants. |
| popPK | Toth_2020 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of pravastatin in mice, where methionine is only used as a dietary component (MCD diet) to induce NASH, not as the subject substance. |
| popPK | Tribble_1989 | irrelevant | 0 | 0 | The study measures the toxicokinetics of L-cysteine (the administered substance), not L-methionine, which is only mentioned as a metabolic precursor. |
| popPK | Troha_2026 | irrelevant | 2 | 0 | The paper investigates the physiological role of methionine in enhancing cytokine clearance during infection in mice, rather than reporting quantitative toxicokinetic parameters (half-life, clearance, distribution volume) for methionine itself. |
| popPK | Tsikas_2017 | irrelevant | 1 | 0 | The paper focuses on S-Adenosyl-L-methionine (SAM) pharmacokinetics and chemistry, mentioning L-methionine only as a precursor or in the context of homocysteine, without reporting specific kinetic parameters for L-methionine itself. |
| popPK | Vaalburg_1992 | irrelevant | 0 | 0 | The paper is a review discussing PET tracers and general kinetic model structures for protein synthesis, reporting no specific quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-methionine. |
| PGx | Valenzuela_2009 | not_relevant | 0 | 0 | The paper examines arsenic metabolism and toxicity, not the pharmacokinetics or pharmacodynamics of the drug l-methionine. |
| PGx | Van_1992 | not_relevant | 0 | 0 | The paper studies the photoaffinity labeling of the enzyme TPMT using S-adenosyl-L-methionine, but does not report the pharmacokinetics or pharmacodynamics of L-methionine itself. |
| popPK | Ventura_2001 | irrelevant | 0 | 0 | The paper is an epidemiological/prevalence study measuring homocysteine levels after a methionine load, but it does not report quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) for L-methionine itself. |
| popPK | Vidal_2005 | irrelevant | 2 | 0 | The paper reports whole-body selenium accumulation (burden) resulting from selenomethionine exposure, but does not provide quantitative kinetic parameters (half-life, clearance, rate constants) for L-methionine itself; L-methionine is the vehicle for the toxicant selenium. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The paper studies the effect of seleno-l-methionine on mercury uptake in mussels, not the toxicokinetics of L-methionine itself. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper reports protein engineering of an enzyme for industrial biocatalysis, not human pharmacogenomics or the effect of genetic variants on l-methionine PK/PD parameters. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The paper focuses on propionic acidemia and propionate kinetics; l-methionine is only mentioned as a propiogenic amino acid source, with no kinetic parameters provided for it. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the immunological mechanism of SRGN-CD44 signaling in gastric cancer, with no reporting of quantitative toxicokinetic parameters for L-methionine. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper studies a methionine-conjugated fluorescent probe (Cy-Met) for tumor imaging, not the toxicokinetic parameters of L-methionine itself as a substance. |
| PGx | Weinshilboum_1978 | not_relevant | 0 | 0 | The paper describes a method for measuring TPMT enzyme activity and does not report how a gene variant affects the pharmacokinetics or pharmacodynamics of L-methionine. |
| PGx | Wiwattanakul_2017 | not_relevant | 0 | 0 | The paper focuses on thiopurine methyltransferase (TPMT) activity and 6-mercaptopurine metabolism, not l-methionine pharmacokinetics or pharmacodynamics. |
| PGx | Wood_2002 | not_relevant | 0 | 0 | The paper discusses the metabolism of a cefazolin metabolite by TPMT, not the pharmacokinetics or pharmacodynamics of L-methionine. |
| PGx | Woodson_1983 | not_relevant | 0 | 0 | The paper studies the enzyme Thiopurine methyltransferase and its substrate/inhibitor properties, not the pharmacokinetics or pharmacodynamics of l-methionine. |
| popPK | Wu_2022 | irrelevant | 1 | 0 | The paper reports static concentrations of methionine in tissues and fluids to characterize metabolic profiles in germ-free animals, but it does not provide quantitative kinetic parameters (e.g., half-life, clearance, rate constants) for the disposition of l_methionine. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The paper describes a therapeutic biomaterial (G3D-Pmet25@PDA) for diabetic wound healing where methionine is a structural component of the polymer, not the subject of toxicokinetic analysis. |
| popPK | Xiao_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of lncRNA MAERL in atherosclerosis, using L-methionine only as a dietary component to induce hyperhomocysteinemia, and reports no toxicokinetic parameters for L-methionine. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper focuses on the immunomodulatory effects of Ganoderma lucidum polysaccharide peptide (GLPP) and does not report any toxicokinetic parameters for L-methionine. |
| popPK | Xin_2025 | irrelevant | 0 | 0 | The paper investigates the mechanistic role of methionine in cardiotoxicity via mitophagy and does not report any quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients). |
| popPK | Yakubu_2025 | irrelevant | 0 | 0 | The paper is an observational metabolomics study reporting metabolic pathway disruptions in malaria patients, not a study of L-methionine's kinetic parameters. |
| popPK | Yang_2011 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of pegfilgrastim, and l-methionine is only mentioned as a structural component (methionyl residue) of the protein, not as the subject of toxicokinetic analysis. |
| popPK | Yeo_1994 | irrelevant | 0 | 0 | The paper investigates the tissue distribution of an enzyme (GNMT) in rats and does not report any quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-methionine itself. |
| popPK | Zou_2005 | irrelevant | 0 | 0 | The paper is a review of homocysteine's effects on redox signaling and does not contain any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for L-methionine. |
| popPK | de_2027 | irrelevant | 0 | 0 | The paper investigates the effect of L-methionine on the mobilization of Nickel (Ni2+) from Human Serum Albumin, treating L-methionine as a co-exposure or ligand rather than the subject substance for which toxicokinetic parameters are being reported. |
| popPK | van_2000 | irrelevant | 0 | 0 | The paper describes physicochemical partitioning of amino acids in aqueous two-phase systems, not biological toxicokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_methionine%5D&body=Drug%3A%20l_methionine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_methionine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 23:55 UTC</sub>
