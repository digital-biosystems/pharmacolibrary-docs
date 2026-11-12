<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Lysine&quot;}]"></div>

# L-Lysine

- **generic name:** L-Lysine
- **T3DB:** [T3D4248](http://www.t3db.ca/toxins/T3D4248) · **DrugBank:** [DB00123](https://go.drugbank.com/drugs/DB00123) · **PubChem:** [CID 5962](https://pubchem.ncbi.nlm.nih.gov/compound/5962)
- **groups:** approved, investigational, nutraceutical

## About

L-Lysine (abbreviated as Lys or K) is an alpha-amino acid with the chemical formula HO2CCH4NH2. This amino acid is an essential amino acid, which means that humans cannot synthesize it. Its codons are AAA and AAG. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Route of exposure:** absorbed from the lumen of the small intestine into the enterocytes by an active transport process
- **Sources and uses:** Supplemental L-lysine has putative anti-herpes simplex virus activity. There is preliminary research suggesting that it may have some anti-osteoporotic activity.
- **Mechanism of toxicity:** Proteins of the herpes simplex virus are rich in L-arginine, and tissue culture studies indicate an enhancing effect on viral replication when the amino acid ratio of L-arginine to L-lysine is high in the tissue culture media. When the ratio of L-lysine to L-arginine is high, viral replication and the cytopathogenicity of herpes simplex virus have been found to be inhibited. …
- **Health effects:** Chronically high levels of lysine are associated with at least 5 inborn errors of metabolism including: D-2-Hydroxyglutaric Aciduria, Familial Hyperlysinemia I, Hyperlysinemia II, Pyruvate carboxylase deficiency and Saccharopinuria.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4248">T3DB T3D4248</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 56-87-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:18019">ChEBI 18019</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Cystathionine | metabolite | 222.259 | C7H14N2O4S | PubChem | [834](https://pubchem.ncbi.nlm.nih.gov/compound/834) | Frimpter_1967 |
| l_lysine | metabolite | 146.19 | C6H14N2O2 | PubChem | [5962](https://pubchem.ncbi.nlm.nih.gov/compound/5962) | Frimpter_1967 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Frimpter_1967_reference](drugs/toxin_l_lysine/LLysine_Frimpter1967_reference.md) | — | 1-compartment (no model) | 1 | Frimpter GW et al., Renal clearance of cystathionine in hom…, The Journal of clinical inv… (1967) | [10.1172/JCI105604](https://doi.org/10.1172/JCI105604) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hayamizu_2019_GI_symptoms](drugs/toxin_l_lysine/pd_Hayamizu_2019_GI_symptoms.md) | Gastrointestinal symptoms ← L-lysine · categorical (graded) response model | — | Hayamizu K et al., Safety assessment of L-lysine oral inta…, Amino acids (2019) | [10.1007/s00726-019-02697-3](https://doi.org/10.1007/s00726-019-02697-3) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=l_lysine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC22A4` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: KARS1 (unknown), SLC16A10 (inhibitor), SLC16A10 (substrate), SLC7A1 (unknown), SLC7A2 (unknown), SLC7A3 (unknown), SLC7A4 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 23:05 | 1:10:29 | 0/1/0 | 1/0/0 | 0/0/0 | 1,080,345/63,542 | einfracz / qwen3.8-27b | 73 | 10/45 | 73/0 | 0 |

## Coverage

- **PubMed hits:** 1603 matched, 220 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struthers_1980.pdf` | Struthers BJ et al., Excretion and tissue distribution of ra…, The Journal of nutrition (1980) | popPK | 10 | [10.1093/jn/110.10.2065](https://doi.org/10.1093/jn/110.10.2065) | [6775058](https://pubmed.ncbi.nlm.nih.gov/6775058) | The paper reports the toxicokinetics (excretion and tissue distribution) of lysinoalanine, a substance distinct from l-lysine, where l-lysine appears only as a metabolic product or labeling component. |
| `Chang_2024.pdf` | Chang AY et al., Insulin Regulation of Lysine and α-Amin…, Diabetes (2024) | popPK | 8 | [10.2337/db23-0977](https://doi.org/10.2337/db23-0977) | [38968429](https://pubmed.ncbi.nlm.nih.gov/38968429) | The paper reports the development of a kinetic model and discusses Metabolic Clearance Rates (MCR) for lysine, but specific numeric parameter values are not explicitly listed in the provided abstract text. |
| `Glover_2016.pdf` | Glover CN et al., Determining the functional role of wate…, Journal of comparative phys… (2016) | popPK | 6 | [10.1007/s00360-016-1004-2](https://doi.org/10.1007/s00360-016-1004-2) | [27215782](https://pubmed.ncbi.nlm.nih.gov/27215782) | The paper reports qualitative kinetic findings (uptake rates, tissue distribution) for L-lysine in hagfish, but the evidence text contains only descriptive rankings ("lowest rate", "highest accumulation") rather than specific numeric parameters like rate constants or concentrations. |
| `Cheeseman_1983.pdf` | Cheeseman CI et al., Tissue distribution of exogenous amino…, The Journal of physiology (1983) | popPK | 5 | [10.1113/jphysiol.1983.sp014708](https://doi.org/10.1113/jphysiol.1983.sp014708) | [6411903](https://pubmed.ncbi.nlm.nih.gov/6411903) | The paper reports relative tissue distribution percentages (74%, 17%, 9%) and fold-concentration factors for L-lysine in an in vitro perfused intestine model. |

<sub>queue written 2026-11-10 22:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelkader_2018 | irrelevant | 0 | 0 | The paper investigates L-lysine as a pharmaceutical excipient to enhance the solubility and permeability of other drugs (bendazac, quercetin, rutin), not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Akerlund_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for vasotocin analogues, with L-lysine vasopressin used only as a stimulant/co-exposure, not as the subject substance for kinetic analysis. |
| popPK | Albarellos_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cephalexin, not l-lysine (which is used only as a salt form). |
| popPK | Albertshofer_2005 | irrelevant | 0 | 0 | The study focuses on the delivery of peptide nucleic acids (PNAs) where l-lysine is a structural component of the carrier peptide, and no quantitative kinetic parameters for l-lysine itself are reported. |
| PGx | Aramini_2021 | not_relevant | 0 | 0 | The paper studies drug polymorphism and formulation effects on pharmacokinetics, not the impact of a gene variant/genotype on the PK/PD of L-lysine. |
| popPK | Asano_2014 | irrelevant | 0 | 0 | The paper describes lysine as a target residue for conjugating a drug (TAK-242) to human serum albumin, rather than studying the toxicokinetic parameters of L-lysine itself. |
| popPK | Bai_2016 | irrelevant | 0 | 0 | The paper focuses on a synthetic biology device for liver protection, and L-lysine appears only as a component of the alginate-poly-(L-lysine)-alginate beads, not as the subject of toxicokinetic study. |
| popPK | Baptista_2025 | irrelevant | 0 | 0 | The paper investigates the ubiquitylation of Plasmodium circumsporozoite protein at lysine residues, not the toxicokinetics of L-lysine as a substance. |
| popPK | Becker_2014 | irrelevant | 0 | 0 | The paper focuses on the release mechanism of Staphylococcal protein A from bacterial cell walls and does not contain any toxicokinetic parameters for L-lysine. |
| popPK | Blick_2007 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of lisdexamfetamine (an amphetamine prodrug), and while l-lysine is mentioned as a cleavage product, no quantitative toxicokinetic parameters specific to l-lysine as the subject substance are reported. |
| popPK | Bolleddula_2020 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of an antibody-drug conjugate (TAK-164), not L-lysine; L-lysine is only mentioned as part of a metabolite name (IGN-P1-Lys). |
| popPK | Borsa_1983 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for ketoprofen (where lysine is part of the prodrug salt name), not for l-lysine as the subject substance. |
| popPK | Brückner_2019 | irrelevant | 0 | 0 | The paper discusses the clearance of Lys-type peptidoglycan (a microbial component) by the kidneys, not the toxicokinetic parameters of the essential amino acid L-lysine. |
| popPK | Byers_2000 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of the enzyme N-acetylgalactosamine-4-sulphatase (4S), with l-lysine mentioned only as a polymer used to modify the enzyme, not as the subject substance. |
| popPK | Callís_1978 | irrelevant | 0 | 0 | The paper discusses a clinical condition (cystinuria/lisinuric lithiasis) and treatment outcomes, reporting no quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-lysine. |
| popPK | Carli_1983 | irrelevant | 2 | 8 | The paper reports pharmacokinetic parameters for the antibiotic cephalexin (specifically its lysine salt), not for the amino acid L-lysine as a subject substance. |
| popPK | Catanese_1985 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the drug bendazac, not for L-lysine, which is only present as a salt form of the exposure vehicle. |
| PGx | Chang_2022 | not_relevant | 0 | 0 | The paper describes the development and efficacy of a nanodrug formulation, not a pharmacogenomic effect on the PK/PD of L-lysine. |
| popPK | Chang_2024 | relevant | 8 | 4 | The paper reports the development of a kinetic model and discusses Metabolic Clearance Rates (MCR) for lysine, but specific numeric parameter values are not explicitly listed in the provided abstract text. |
| PGx | Chang_2026 | not_relevant | 0 | 0 | The paper describes a novel nanodrug delivery system using a poly-L-lysine coating to target BIRC5 in cancer cells; it does not report the pharmacokinetics or pharmacodynamics of the drug L-lysine itself. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a radiolabeled RGD peptide, and L-lysine is mentioned only as the chemical moiety used for labeling, not as the subject substance. |
| popPK | Chen_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a zinc phthalocyanine conjugated with lysine (ZnPc-(Lys)(5)) as a drug, not the toxicokinetics of L-lysine itself. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper reports on the purification of epsilon-poly-l-lysine (a polymer) using an aqueous two-phase system, not the toxicokinetic disposition of the monomer L-lysine in a biological system. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a review of epsilon-poly-L-lysine (EPL) and lysine-based dendrimers (polymers), not the small molecule L-lysine, and it does not report quantitative toxicokinetic parameters for L-lysine itself. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper focuses on the antibacterial efficacy of nanoparticles containing L-lysine, reporting no toxicokinetic parameters (e.g., half-life, clearance, bioaccumulation) for L-lysine itself. |
| PGx | Chowdhury_2022 | not_relevant | 0 | 0 | The paper reports on metabolic reprogramming in maize roots and does not involve human pharmacogenomics or a drug named l_lysine. |
| popPK | Cingi_2021 | irrelevant | 0 | 0 | The paper is a review of nasal anatomy and pharmacotherapy; "lysine" appears only in the phrase "lysine aspirin" (likely an error for lysine acetylsalicylate or a comparator) and no toxicokinetic parameters for L-lysine are reported. |
| popPK | Cowles_2009 | irrelevant | 0 | 0 | The paper is a review of lisdexamfetamine (a prodrug containing l-lysine), not a study reporting kinetic parameters for l-lysine itself as a toxicological subject. |
| popPK | Cristofoli_2022 | irrelevant | 0 | 0 | The paper investigates diclofenac permeation using L-lysine as a counter-ion/formulation excipient, not the toxicokinetics of L-lysine itself. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper reports structural insights (cryo-EM) and functional mechanisms of the transporter, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for L-lysine. |
| popPK | Dawnay_2003 | irrelevant | 0 | 0 | The paper focuses on the renal clearance of advanced glycation end products (AGEs), not the toxicokinetics of L-lysine itself. |
| popPK | Dorhout_1990 | irrelevant | 0 | 0 | The paper investigates lithium kinetics and the use of lysine vasopressin as a pharmacological agent, containing no toxicokinetic data for L-lysine. |
| popPK | Escobedo_2025 | irrelevant | 0 | 0 | The paper investigates the delivery of gentamicin (an antibiotic) for treating urinary tract infections in mice; L-lysine is only part of the cell-penetrating peptide sequence (CGKRK) and no kinetic parameters for L-lysine itself are reported. |
| popPK | Escudero-Saiz_2024 | irrelevant | 0 | 0 | The paper studies the clearance of uremic toxins (indoxyl sulfate and p-cresyl sulfate) in hemodialysis patients, using lysine acetylsalicylic acid only as a comparator analgesic, not l-lysine as the subject substance for kinetic parameter extraction. |
| PGx | Fasinu_2013 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 inhibition by flavonoids and polymers (including poly(l-lysine)) affecting felodipine metabolism, not pharmacogenomics of L-lysine. |
| popPK | Fiorentino_2020 | irrelevant | 0 | 0 | The paper is a review on lysine acetyltransferase (KAT) inhibitors and discusses lysine as a protein residue being acetylated, but it does not report any toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance L-lysine itself. |
| popPK | Flanagan_1975 | irrelevant | 0 | 0 | The paper describes a protein purification method using L-lysine derivatives as competing ligands, containing no toxicokinetic parameters for L-lysine. |
| popPK | Fusco_2014 | irrelevant | 0 | 0 | The paper focuses on molecular mechanisms of HDAC6-mediated acetylation of TRIM50, and l-lysine is mentioned only as a specific amino acid residue (Lys-372) rather than as the subject substance for toxicokinetic analysis. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper investigates the effects of aspirin on protein degradation mechanisms (proteasome/autophagy) and lysine post-translational modifications (acetylation/ubiquitination), not the toxicokinetic parameters (ADME) of the substance L-lysine. |
| popPK | Garcia_2021 | irrelevant | 0 | 0 | The paper discusses necroptosis and ubiquitination of MLKL at specific lysine residues (K219), but does not contain toxicokinetic parameters for the substance L-lysine. |
| popPK | Geisler_2010 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanisms of mitophagy in Parkinson's disease and contains no toxicokinetic parameters for L-lysine. |
| PGx | Ghasemzadeh-Hasankolaei_2026 | not_relevant | 0 | 0 | The paper studies co-exposure to biopolymers (including poly-L-lysine) and drugs in 3D liver spheroids, but does not report pharmacogenomic effects on the PK or PD of L-lysine. |
| popPK | Giugliano_1982 | irrelevant | 0 | 0 | The paper studies glucose kinetics in response to lysine acetylsalicylate (LAS), not the toxicokinetics of L-lysine itself. |
| popPK | Glibowicka_2022 | irrelevant | 0 | 0 | The paper investigates the proteolytic stability of antimicrobial peptide analogs of 6K-F17 (which contains lysine residues) rather than the toxicokinetics of L-lysine itself. |
| popPK | Glover_2016 | relevant | 6 | 2 | The paper reports qualitative kinetic findings (uptake rates, tissue distribution) for L-lysine in hagfish, but the evidence text contains only descriptive rankings ("lowest rate", "highest accumulation") rather than specific numeric parameters like rate constants or concentrations. |
| popPK | Gonsho_1994 | irrelevant | 0 | 0 | The provided evidence contains only metadata and processing logs from a document extraction tool (GROBID) with no scientific content, data, or mention of L-lysine. |
| popPK | González-Martin_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lysine clonixinate (an analgesic), not L-lysine (an amino acid), which is a different substance. |
| popPK | Gou_2016 | irrelevant | 0 | 0 | The paper is a review on prodrug design targeting lysine residues in serum albumin and does not report toxicokinetic parameters for L-lysine as a substance. |
| popPK | Grace_2004 | irrelevant | 0 | 0 | The paper discusses the pegylation of interferon alpha-2 at lysine residues (part of the protein structure) and its in vitro antiviral activity; it does not report toxicokinetic parameters for the free amino acid L-lysine as a subject substance. |
| popPK | Guo_2011 | irrelevant | 0 | 0 | The subject of the study is a radiolabeled peptide used for imaging, not L-lysine; any mentions of Lys are part of the peptide's chemical structure, not a standalone substance with kinetic parameters being reported. |
| popPK | Harsiddharay_2022 | irrelevant | 0 | 0 | Poly-L-lysine is used as a coating material for a drug delivery vehicle and is not the subject of toxicokinetic parameter extraction. |
| popPK | Hasenoehrl_2019 | irrelevant | 0 | 0 | The paper investigates the metabolic pathway and persistence of Mycobacterium tuberculosis, using lysine as a metabolic intermediate or analog for studying bacterial virulence, not as the subject of a toxicokinetic study in humans or animals. |
| popPK | He_2019 | irrelevant | 0 | 0 | The paper focuses on RNF34-mediated autophagic degradation of MAVS in the context of viral immunity and contains no data regarding L-lysine toxicokinetics. |
| popPK | Hou_2017 | irrelevant | 0 | 0 | The paper is a review of USP30's role in mitochondrial quality control and does not report any toxicokinetic parameters for L-lysine. |
| popPK | Hu_2023_3 | irrelevant | 0 | 0 | The paper focuses on doxorubicin (DOX) loaded in poly(L-lysine) nanoparticles for cancer therapy; L-lysine acts solely as a polymer component, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Hua_2009 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of p53 cleavage by granzyme K in tumor cells and does not contain any toxicokinetic data for l-lysine. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | L-lysine is used solely as a structural building block (N-Boc-L-lysine) to synthesize the radiopharmaceutical DZ-Lys-TCO, and the study characterizes the pharmacokinetics of the synthesized conjugate and PET tracer, not the free amino acid itself. |
| popPK | Jackson_1985 | irrelevant | 0 | 0 | The study measures the clearance of theophylline, where lysine is only used as a salt counterion (vehicle) and not the subject substance. |
| popPK | Jacobs_1988 | irrelevant | 0 | 0 | Lysine is used solely as a pharmacological agent to inhibit renal tubular reabsorption, and the reported kinetic parameters (fractional clearances) belong to amylase, lipase, and lysozyme, not lysine. |
| popPK | Jangam_2021 | irrelevant | 0 | 0 | The paper studies phenytoin prodrugs where L-lysine is a structural component (precursor) and does not report kinetic parameters for L-lysine itself. |
| popPK | Jeon_2022 | irrelevant | 0 | 0 | The paper focuses on BMP-2 delivery using poly-L-lysine (PLL) as a polymer carrier, not the toxicokinetics of the essential amino acid L-lysine. |
| PGx | Ji_2004 | not_relevant | 0 | 0 | The paper describes a genotyping method for MTHFR polymorphisms and does not report pharmacokinetic or pharmacodynamic parameters for L-lysine. |
| popPK | Kaminskas_2009 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of PEGylated poly-L-lysine dendrimers (macromolecular carriers), not the kinetic parameters of free L-lysine as a small molecule substance. |
| popPK | Kanellopoulos_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of radiolabeled neurotensin analogs, not L-lysine, which appears only as a structural component of the peptides. |
| popPK | Karacalioglu_2006 | irrelevant | 2 | 1 | The paper studies the biodistribution of a radiolabeled complex ((99m)Tc-DMSA-l-lysine) for imaging purposes, reporting qualitative uptake and semi-quantitative ratios rather than intrinsic kinetic parameters (half-life, clearance, partition coefficients) of L-lysine itself. |
| popPK | Karlstetter_2020 | irrelevant | 0 | 0 | The paper analyzes N-acetyl-lysine-furan adducts as biomarkers for furan exposure, so the kinetic data (excretion rates) belong to furan and its metabolites, not l_lysine. |
| PGx | Kato_2021 | not_relevant | 0 | 0 | The paper discusses a synthetic biology counter-selectable marker for plasmid curing in bacteria, not human pharmacogenomics or the PK/PD of L-lysine as a drug. |
| popPK | Kolyvanov_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antidepressant GSB-106, where L-lysine is merely a structural component of the peptide, not the subject substance for kinetic parameter extraction. |
| popPK | Koo_2012 | irrelevant | 0 | 0 | The paper focuses on the antitumor efficacy of docetaxel-loaded micelles where L-lysine is merely a structural component of the polymer carrier, not the subject substance for toxicokinetic evaluation. |
| popPK | Kwon_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for HIV-neutralizing antibodies (VRC07-523LS and N6LS variants), not for the substance l_lysine. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper describes microbial genome sequencing for L-lysine production, not human pharmacogenomics or PK/PD parameters of L-lysine as a drug. |
| PGx | Lei_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of L-lysine on autoimmune hepatitis and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of Natalizumab, a monoclonal antibody, and does not contain kinetic parameters for L-lysine. |
| popPK | Lin_2015 | irrelevant | 0 | 0 | The paper investigates the role of the WNK4 kinase protein in lung injury and does not report toxicokinetic parameters for the amino acid L-lysine. |
| popPK | Liu_2011_2 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying a monoclonal antibody in monkey serum, using Lys-C as an enzymatic reagent rather than studying the kinetics of L-lysine. |
| popPK | Long_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of antibody-drug conjugates (ADCs) and their linkers, where lysine is a component of the dipeptide linker (Valine-Lysine-PAB), not the subject substance of the kinetic study. |
| popPK | Lämmle_1984 | irrelevant | 0 | 0 | The paper studies the kinetics of streptokinase/plasminogen activator complexes in plasma, with Lysine appearing only as part of the chemical name (L-lysine residue) and not as the subject substance. |
| popPK | López-Doménech_2021 | irrelevant | 0 | 0 | The paper investigates mitochondrial quality control and mentions lysine residues in the context of protein ubiquitination, not L-lysine toxicokinetics. |
| popPK | Ma_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a gadolinium-containing poly(L-lysine) micelle formulation, not the toxicokinetic parameters of L-lysine itself. |
| PGx | Machulkin_2024 | not_relevant | 0 | 0 | The paper evaluates the PK/PD of PSMA-targeting radioligands but does not report any pharmacogenomic effects (gene variants) on the metabolism of L-lysine. |
| popPK | Maiorino_2014 | irrelevant | 0 | 0 | The paper is a review of basal insulin analogues, and lysine appears only as a structural component (LysB29, LysB28) of the insulin molecules, not as the subject substance. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of busulfan; L-lysine appears only as an endogenous metabolite associated with busulfan clearance, not as the subject substance for kinetic parameter extraction. |
| popPK | Mezö_1996 | irrelevant | 0 | 0 | The paper focuses on a GnRH antagonist conjugate where poly-L-lysine serves as a carrier/vehicle, and the reported kinetic parameters (body/blood survival) are for the conjugate, not L-lysine itself. |
| popPK | Miao_2002 | irrelevant | 0 | 0 | L-lysine is used solely as a co-infused competitive inhibitor to modify the pharmacokinetics of the radiolabeled peptide 188Re-CCMSH, and no kinetic parameters for l-lysine itself are reported. |
| popPK | Michéa-Hamzehpour_1991 | irrelevant | 0 | 0 | The paper investigates the diffusion of quinolones through the outer membrane of Pseudomonas aeruginosa, where L-lysine is used solely as a competing substrate or analytical reagent to demonstrate transport protein interactions, not as the subject of toxicokinetic study. |
| PGx | Mohiuddin_2020 | not_relevant | 0 | 0 | The paper investigates chemical inhibitors of bacterial persistence (specifically L-lysine and other drugs) and does not report any human pharmacogenomic effects on PK or PD parameters. |
| PGx | Morin_1971 | not_relevant | 5 | 8 | L-lysine is used as a probe amino acid in a study of cystinuria genetics (a genetic disease of amino acid transport), not as a drug subject to pharmacogenomic analysis of its PK/PD parameters. |
| PGx | Nemeria_2021 | not_relevant | 0 | 0 | The paper is a review on protein-protein interactions in 2-oxoacid dehydrogenase complexes and does not report pharmacokinetic or pharmacodynamic data for L-lysine. |
| PGx | Neuweger_2009 | not_relevant | 0 | 0 | The paper concerns data visualization software for microbial metabolism and does not report pharmacokinetic or pharmacodynamic effects of gene variants on L-lysine in a pharmacological context. |
| popPK | Nilsson_1994 | irrelevant | 0 | 0 | The paper characterizes the enzyme lipoamidase which hydrolyzes lipoyllysine (a modified derivative), but does not report toxicokinetic parameters (half-life, clearance, distribution) for L-lysine itself. |
| popPK | Ning_2025 | irrelevant | 0 | 0 | The paper focuses on the design of imaging probes for lysine aldehyde (allysine), a modified metabolite in fibrosis, and does not report toxicokinetic parameters for L-lysine as a xenobiotic subject. |
| PGx | Ohtake_2018 | not_relevant | 0 | 0 | The paper reports on the engineering of a transglutaminase enzyme using non-canonical amino acids (including an analogue of L-lysine), not on the pharmacogenomics of L-lysine as a drug. |
| popPK | Okuda_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PEGylated lysine dendrimers (nanoparticles), not L-lysine itself, and no kinetic parameters for free L-lysine are reported. |
| popPK | Ono_1988 | irrelevant | 0 | 0 | The study subjects are mice, rats, rabbits, and monkeys, and the substance is a complex peptide (muroctasin) containing lysine, not L-lysine itself. |
| popPK | Pokrovsky_2021 | irrelevant | 1 | 1 | The study investigates the pharmacokinetics of the enzyme L-lysine α-oxidase, not the kinetic disposition of L-lysine itself; L-lysine levels are only reported as a substrate depletion effect of the enzyme. |
| popPK | Pope_2015 | irrelevant | 0 | 0 | The paper focuses on the kinetics of butyrylcholinesterase (BChE) and organophosphorus toxicants, using poly-L-lysine only as a material component for copolymers rather than as the subject substance for toxicokinetic analysis. |
| popPK | Pähler_1999 | irrelevant | 0 | 0 | The paper reports the quantitation of a protein modification (N epsilon-(dichloroacetyl)-L-lysine) as a biomarker for perchloroethene exposure, not the toxicokinetic parameters of free L-lysine. |
| popPK | Qiu_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a stearic acid-modified PSMA-targeting peptide-drug conjugate, not for the substance l-lysine. |
| PGx | Quantin_2018 | not_relevant | 0 | 0 | The paper discusses the immobilization of CYP enzymes for xenobiotic metabolism and mentions poly-l-lysine only as a chemical reagent for film assembly, not as a drug for which pharmacokinetics are analyzed. |
| popPK | Rebouche_1980 | irrelevant | 0 | 0 | The paper investigates the tissue distribution and activity of carnitine biosynthetic enzymes (specifically those metabolizing the lysine derivative epsilon-N-trimethyl-L-lysine), not the toxicokinetic parameters (half-life, clearance, partition coefficients) of l-lysine itself. |
| popPK | Rice_1985 | irrelevant | 0 | 0 | The paper uses N-sigma-dansyl-L-lysine as a fluorescent membrane probe to assess cell death, not to study the toxicokinetics of L-lysine itself. |
| PGx | Sahm_2000 | not_relevant | 0 | 0 | The paper describes metabolic engineering in bacteria for L-lysine production, not pharmacogenomics of L-lysine as a drug. |
| popPK | Schuermans_2025 | irrelevant | 0 | 0 | The paper focuses on necrotic debris clearance in liver injury and uses poly-L-lysine (PLK) as a tool to disassemble debris, but does not report toxicokinetic parameters for L-lysine itself. |
| popPK | Schön_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for omega-3 fatty acids (EPA and DHA) in a lysine salt formulation, where lysine acts as the counter-ion/carrier rather than the subject substance of interest. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper studies the kinetics of microparticle uptake by macrophages, not the toxicokinetic parameters of l-lysine; poly-l-lysine is used solely as a surface coating for the drug delivery vehicle. |
| popPK | Simpson_2025 | irrelevant | 0 | 0 | The paper focuses on PSMA-targeted theranostic compounds where lysine is part of the chemical structure, not L-lysine as the subject substance for toxicokinetic study. |
| popPK | Sivakumar_2023 | irrelevant | 0 | 0 | The paper investigates poly-lysine peptides (polymers of lysine) as antimalarial drugs and reports IC50 values for parasite inhibition, not toxicokinetic parameters (half-life, clearance, etc.) for L-lysine as a subject substance. |
| popPK | Sivakumar_2024 | irrelevant | 0 | 0 | The paper studies the antimicrobial activity of poly-lysine peptides against Plasmodium falciparum in vitro, not the toxicokinetic disposition of L-lysine as a substance. |
| popPK | Song_2016 | irrelevant | 0 | 0 | The paper is a review on histone methylation enzymes and their inhibitors, where lysine refers to amino acid residues in proteins, not the substance L-lysine as a toxicokinetic subject. |
| popPK | Songok_2018 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and proteolytic stability of lysine-containing peptides, but contains no quantitative toxicokinetic parameters for L-lysine. |
| popPK | Stapelfeldt_1996 | irrelevant | 0 | 0 | The paper studies the chemical kinetics of a reaction between hexanal and L-lysine in an in vitro two-phase system, not the toxicokinetics (absorption, distribution, metabolism, excretion) of L-lysine as a substance in a biological organism. |
| PGx | Stella_2021 | not_relevant | 0 | 0 | The paper investigates bacterial biosensors and amino acid production in Vibrio natriegens, not pharmacogenomics or PK/PD parameters of L-lysine in humans or animal models. |
| popPK | Struthers_1980 | relevant | 10 | 2 | The paper reports the toxicokinetics (excretion and tissue distribution) of lysinoalanine, a substance distinct from l-lysine, where l-lysine appears only as a metabolic product or labeling component. |
| popPK | Suwandi_2026 | irrelevant | 0 | 0 | The paper discusses KAT6A inhibitors and mentions lysine only as the substrate residue for acetylation, not as the subject substance for toxicokinetic parameter extraction. |
| PGx | Szypuła_2026 | not_relevant | 0 | 0 | The paper studies plant biosynthesis and does not report any pharmacogenomic effect on PK or PD parameters. |
| popPK | Tanaka_1986 | irrelevant | 0 | 0 | The paper focuses on the purification and characterization of a rat liver protease, where poly-L-lysine is used only as an activator, not as the subject for toxicokinetic analysis. |
| popPK | Tedeschini_2021 | irrelevant | 0 | 0 | The paper describes lysine only as a site for antibody-drug conjugation, not L-lysine as the subject substance for toxicokinetic parameter extraction. |
| PGx | Timmer_2021 | not_relevant | 0 | 0 | The paper studies faecal microbiome composition in metabolic disorders and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of L-lysine. |
| popPK | Timperanza_2023 | irrelevant | 0 | 0 | The paper studies poly-L-lysine polymers as carriers for radionuclides, not the toxicokinetics of the free L-lysine amino acid. |
| PGx | Timperanza_2024 | not_relevant | 0 | 0 | The paper evaluates the in vivo pharmacokinetics of a synthetic poly-L-lysine-based radiopharmaceutical (a carrier molecule) and does not report on the pharmacogenomics (gene variants) of the drug L-lysine or any genetic effects on drug disposition. |
| popPK | Timperanza_2024_2 | irrelevant | 0 | 0 | The paper studies poly-L-lysine as a clearing agent for radioimmunotherapy, not L-lysine (the amino acid) as the subject substance for toxicokinetic parameter extraction. |
| popPK | Tran_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of an anti-PD-L1 antibody fragment, using lysine only as the site for stochastic radiolabeling, and does not report kinetic parameters for L-lysine itself. |
| PGx | Vavilthota_2025 | not_relevant | 0 | 0 | The paper describes the antimicrobial and wound-healing properties of engineered peptides, with no mention of pharmacogenomics, genetic variants, or pharmacokinetic/pharmacodynamic parameters influenced by genotype. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper studies a synthetic fluorinated polypeptide polymer (F-PLL) for gene delivery, not the endogenous amino acid L-lysine, and reports no kinetic parameters for L-lysine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on viral pathogenesis and mutation (Lys253Arg in viral E2 protein) and contains no toxicokinetic parameters for L-lysine. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper describes a probiotic microneedle delivery system where poly-l-lysine (PLL) is used as a coating material, not as the subject substance for toxicokinetic analysis. |
| PGx | Ward_2018 | not_relevant | 0 | 0 | The provided text is a licensing and copyright agreement form for Touro College and does not contain any scientific data, pharmacogenomic information, or details regarding L-lysine pharmacokinetics or pharmacodynamics. |
| popPK | Wattendorf_2008 | irrelevant | 0 | 0 | The paper studies polyelectrolyte microcapsules coated with poly-L-lysine grafted with PEG as a drug delivery system, not the toxicokinetics of the free amino acid L-lysine. |
| popPK | Weston_2024 | irrelevant | 1 | 0 | The paper focuses on amino acid transport and metabolism in lactating dairy cows, reporting on mammary net uptakes and milk production rather than systemic toxicokinetic parameters like half-life or clearance for L-lysine. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper investigates the covalent binding of furmonertinib and osimertinib to lysine residues on albumin; lysine is an amino acid residue, not the subject substance. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | The paper focuses on prostate cancer imaging with GnRH peptides in mice, and l-lysine is not the subject substance nor are any of its kinetic parameters reported. |
| popPK | Yang_2009 | irrelevant | 0 | 0 | The paper studies a peptide conjugate containing Lys as part of its structure for melanoma therapy, not the toxicokinetics of L-lysine as the subject substance. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The paper uses lysine reactivity profiling to study drug interactions with albumin; lysine acts as a chemical/analytical probe, not as the subject substance with toxicokinetic parameters. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper studies G6PD deficiency and bacterial infection in C. elegans, containing no toxicokinetic data for L-lysine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper investigates insulin-Fc conjugates and uses lysine as a structural attachment site (LysB29) for conjugation, not as a subject toxicokinetic substance. |
| popPK | Yin_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug bufalin, while poly-L-lysine is only used as a structural component of the nanoparticle carrier, not as the subject substance. |
| PGx | Yu_2014 | not_relevant | 0 | 0 | The paper focuses on the metabolism and bioactivation of toosendanin, not the pharmacokinetics or pharmacodynamics of L-lysine itself. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a PEGylated uricase enzyme, not for L-lysine. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper studies a genetic variant associated with a metabolic disorder (AMOXAD) and its effect on enzyme kinetics, not a pharmacogenomic effect on the PK/PD of a drug (l-lysine is an endogenous metabolite here, not a therapeutic agent with measured PK/PD in the context of a drug trial). |
| popPK | Zoabi_2024 | irrelevant | 0 | 0 | The paper studies chiral polyurea nanocapsules synthesized from l-lysine, not the toxicokinetics of the l-lysine molecule itself; no kinetic parameters for free l-lysine are reported. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 398 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_lysine%5D&body=Drug%3A%20l_lysine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_lysine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 22:42 UTC</sub>
