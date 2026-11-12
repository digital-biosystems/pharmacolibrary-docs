<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Histidine&quot;}]"></div>

# L-Histidine

- **generic name:** L-Histidine
- **T3DB:** [T3D4363](http://www.t3db.ca/toxins/T3D4363) · **DrugBank:** [DB00117](https://go.drugbank.com/drugs/DB00117) · **PubChem:** [CID 6274](https://pubchem.ncbi.nlm.nih.gov/compound/6274)
- **groups:** approved, investigational, nutraceutical

## About

Histidine is an alpha-amino acid with an imidazole functional group. It is one of the 22 proteinogenic amino acids. Histidine was first isolated by German physician Albrecht Kossel in 1896. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Route of exposure:** absorbed from the small intestine via an active transport mechanism requiring the presence of sodium.
- **Sources and uses:** The actions of supplemental L-histidine are entirely unclear. It may have some immunomodulatory as well as antioxidant activity. …
- **Mechanism of toxicity:** Since the actions of supplemental L-histidine are unclear, any postulated mechanism is entirely speculative. However, some facts are known about L-histidine and some of its metabolites, such as histamine and trans-urocanic acid, which suggest that supplemental L-histidine may one day be shown to have immunomodulatory and/or antioxidant activities. …
- **Acute toxicity:** ORL-RAT LD<sub>50</sub> > 15000 mg/kg, IPR-RAT LD<sub>50</sub> > 8000 mg/kg, ORL-MUS LD<sub>50</sub> > 15000 mg/kg, IVN-MUS LD<sub>50</sub> > 2000 mg/kg

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4363">T3DB T3D4363</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 71-00-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15971">ChEBI 15971</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| L-Histidine (l_histidine) | parent | 155.157 | C6H9N3O2 | PubChem | [6274](https://pubchem.ncbi.nlm.nih.gov/compound/6274) | Wang_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Wang_2018_reference](drugs/toxin_l_histidine/LHistidine_Wang2018_reference.md) | — | 1-compartment (no model) | 2 | Wang XX et al., Semi-Mechanistic Population Pharmacokin…, Pharmaceutical research (2018) | [10.1007/s11095-017-2322-0](https://doi.org/10.1007/s11095-017-2322-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=l_histidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HAL (unknown), HARS1 (unknown), HDC (unknown), SLC16A10 (inhibitor), SLC16A10 (substrate), SLC38A3 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 13:05 | 40:15 | 0/1/0 | 0/0/0 | 0/0/0 | 592,654/29,314 | einfracz / qwen3.8-27b | 45 | 4/39 | 45/0 | 0 |

## Coverage

- **PubMed hits:** 1897 matched, 133 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang XX et al., Semi-Mechanistic Population Pharmacokin…, Pharmaceutical research (2018) | popPK | 10 | [10.1007/s11095-017-2322-0](https://doi.org/10.1007/s11095-017-2322-0) | [29305823](https://pubmed.ncbi.nlm.nih.gov/29305823) | The paper reports quantitative PBPK parameters (Vmax, Km) for L-histidine disposition in mice, with key values present in the abstract text. |

<sub>queue written 2026-11-10 12:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelkader_2015 | irrelevant | 0 | 0 | The paper focuses on analytical characterization and lipophilicity (partition coefficient) of carnosine (a histidine derivative) in vitro, with no kinetic parameters (half-life, clearance, etc.) for l_histidine. |
| popPK | Audag_2022 | irrelevant | 0 | 0 | The paper is a review of respiratory physiotherapy in pediatrics and contains no kinetic data for L-histidine. |
| popPK | Baroutis_2026 | irrelevant | 0 | 0 | The paper studies the photochemical cross-linking of proteins by verteporfin, where L-histidine is used only as a singlet oxygen quencher to test the mechanism, not as a subject of toxicokinetic analysis. |
| popPK | Barragué_2017 | irrelevant | 0 | 0 | The paper is a clinical case report on Hepatitis E virus (HEV) and does not report toxicokinetic parameters for l-histidine. |
| popPK | Bartlett_2023 | irrelevant | 0 | 0 | The paper describes the design and biomechanical testing of a prosthetic ankle mechanism and contains no data regarding the toxicokinetics of l-histidine. |
| popPK | Baslow_1997 | irrelevant | 0 | 0 | The paper is a review focusing on the metabolism of N-acetyl-L-histidine (a derivative/metabolite) rather than quantitative toxicokinetic parameters for L-histidine itself. |
| popPK | Blank_2008 | irrelevant | 0 | 0 | The paper is a review of histidine-rich glycoprotein (HRG), a plasma protein, and does not report toxicokinetic parameters for the amino acid L-histidine. |
| popPK | Bouceiro-Mendes_2019 | irrelevant | 0 | 0 | The paper is a case report of a *Mycobacterium marinum* infection and contains no information regarding the toxicokinetics of L-histidine. |
| popPK | Butler_2025 | irrelevant | 0 | 0 | The paper reports a clinical case of benzodiazepine withdrawal and does not contain any kinetic parameters for L-histidine. |
| popPK | Carson_2007 | irrelevant | 0 | 0 | The paper is a review of phosphodiesterase type 5 inhibitors for erectile dysfunction and does not report any toxicokinetic parameters for l_histidine. |
| popPK | Chang_2014 | irrelevant | 0 | 0 | The paper focuses on the safety evaluation of depside salt injection (Danshen) and does not report any kinetic parameters for l_histidine. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a review on efflux transporters and drug disposition during pregnancy (focusing on nitrofurantoin, glyburide, etc.) and does not report kinetic parameters for l-histidine. |
| popPK | Choe_2015 | irrelevant | 0 | 0 | The paper reports on romiplostim pharmacokinetics and adverse events in a human patient, with no mention of l-histidine or its kinetic parameters. |
| popPK | Coop_2022 | irrelevant | 0 | 0 | The paper is a clinical case report regarding antibiotic desensitization in a patient with cerebral palsy and contains no kinetic data or parameters for L-histidine. |
| popPK | Cooper_2019 | irrelevant | 0 | 0 | The paper reports a clinical case of varicella zoster infection and does not contain any toxicokinetic parameters for L-histidine. |
| popPK | Couser_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on tumoral calcinosis treatment and does not report any toxicokinetic parameters for L-histidine. |
| popPK | Cristofoli_2022 | irrelevant | 0 | 0 | The paper investigates diclofenac as the subject substance, using L-histidine only as a formulation excipient/counter-ion for ion pairing, and reports no kinetic parameters for L-histidine itself. |
| popPK | Cumin_1990 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the renin inhibitor CGP 38 560, which contains an L-histidine residue, but does not report kinetic parameters for L-histidine itself. |
| popPK | Cupit_1981 | irrelevant | 0 | 0 | The paper is a general review of the clinical pharmacist's role in institutional settings and contains no toxicokinetic data for l-histidine. |
| popPK | Curtis_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug LED209, not for L-histidine, which is mentioned only as part of the bacterial target protein name. |
| popPK | Danhof_2015 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic modeling for various drugs (e.g., phenobarbital, theophylline) and does not contain kinetic parameters for L-histidine. |
| popPK | Daniel_2004 | irrelevant | 0 | 0 | The paper is a mechanistic review of SLC15 transporters and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-histidine. |
| popPK | Delépine_1990 | irrelevant | 0 | 0 | The paper discusses the treatment of osteosarcoma and the pharmacokinetics of high-dose methotrexate (HDMTX), containing no kinetic data for l-histidine. |
| popPK | Dhungel_2026 | irrelevant | 0 | 0 | The paper focuses on in silico pharmacokinetics of alkaloids (stepharine, etc.) from Stephania glandulifera and does not report quantitative kinetic parameters for L-histidine. |
| popPK | Dostalek_2012 | irrelevant | 0 | 0 | The paper is a general review regarding the effect of diabetes on drug pharmacokinetics and does not contain quantitative kinetic parameters for L-histidine. |
| popPK | Däpp_2011 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of radiolabeled bombesin analogues, not l-histidine; l-histidine is merely a component of the peptide structure. |
| popPK | Elsamadisi_2020 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of nortriptyline (a tricyclic antidepressant) and does not contain any data regarding l-histidine. |
| popPK | Fuchs_2025 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 viral kinetics and immune response in a lung transplant recipient, with no mention of l-histidine toxicokinetics. |
| popPK | Galera_2015 | irrelevant | 0 | 0 | The paper reports on sirolimus toxicity and treatment, with no mention of L-histidine as the subject substance. |
| popPK | Grace_2004 | irrelevant | 0 | 0 | The paper discusses pegylation of interferon at histidine residues for antiviral activity, not the toxicokinetics of L-histidine as a substance. |
| popPK | Guddati_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for gabapentin, not l_histidine. |
| PGx | Guilherme_2017 | not_relevant | 0 | 0 | The paper investigates genetic associations with athletic status and carnosine metabolism, not the pharmacokinetic or pharmacodynamic effects of L-histidine as a drug. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of Pseudomonas aeruginosa bacteria and their virulence factors, not the kinetic parameters of the substance l-histidine (which is only mentioned as a component of a kinase name). |
| popPK | Gutiérrez-González_2014 | irrelevant | 0 | 0 | The paper is a dermatology case report regarding skin pigmentation changes after ustekinumab therapy and contains no toxicokinetic data for L-histidine. |
| popPK | Hirayu_2022 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of teicoplanin (TEIC), not l-histidine. |
| popPK | Hironiwa_2016 | irrelevant | 0 | 0 | The paper reports kinetic parameters for an antibody and its antigen (IL-6R), not for l-histidine, which is mentioned only as a structural component (amino acid) of the antibody. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanism of p62 S-acylation in autophagy and does not report any toxicokinetic parameters for L-histidine. |
| popPK | Hui_2023 | irrelevant | 0 | 0 | The paper is a case report on a human patient regarding over-sedation from morphine and benzodiazepines, and contains no mention or kinetic data for L-histidine. |
| popPK | J_2019 | irrelevant | 0 | 0 | The paper is an interview regarding ICH-M10 guidance and contains no toxicokinetic data or parameters for l-histidine. |
| popPK | Jacob_2025 | irrelevant | 0 | 0 | The paper describes an allergic reaction to alteplase and contains no kinetic parameters for l-histidine. |
| popPK | Jelliffe_2022 | irrelevant | 0 | 0 | The paper is a general educational commentary on population pharmacokinetic modeling and precision dosing principles for physicians, with no specific data or parameters for L-histidine. |
| popPK | Jordan_2014 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of warfarin in a patient case and does not report any kinetic parameters for L-histidine. |
| popPK | Kaiser_2020 | irrelevant | 0 | 0 | The paper describes radiopaque densities in a child (likely medication/foreign bodies) and does not report quantitative toxicokinetic parameters for L-histidine. |
| PGx | Kamal_2009 | not_relevant | 0 | 0 | The paper studies the disposition of carnosine (a dipeptide containing histidine) and l-histidine metabolism in the context of the Pept2 transporter, not the pharmacokinetics of l-histidine itself as a specific drug entity in a clinical pharmacogenomic context. |
| popPK | Kara_2010 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetic interaction of phenytoin and hydrocortisone in a human patient, with no mention of L-histidine. |
| popPK | Kawamura_2017 | irrelevant | 0 | 0 | The paper is a case report on protein-losing enteropathy secondary to cholesterol crystal embolism and contains no data on L-histidine toxicokinetics. |
| popPK | Kekomäki_1981 | irrelevant | 0 | 0 | The paper reports on the management of uremia and metabolic balance in a neonate but does not provide any quantitative toxicokinetic parameters (half-life, clearance, etc.) for L-histidine itself, which is used only as a component of the nutritional solution. |
| PGx | Kiliś-Pstrusińska_2012 | not_relevant | 3 | 2 | The paper focuses on the dipeptide carnosine (beta-alanyl-L-histidine) and CNDP1 polymorphisms in kidney diseases, not the PK/PD of L-histidine itself. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The paper is a review of nutrient transport mechanisms at the blood-retinal barrier and does not report pharmacogenomic effects of gene variants on the PK/PD parameters of L-histidine. |
| popPK | Lam_2012 | irrelevant | 0 | 0 | The paper discusses linezolid-associated thrombocytopenia and does not mention l-histidine or provide any toxicokinetic parameters for it. |
| popPK | Lambert_2005 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a radiolabeled compound ((188)Re-HDD/lipiodol), not for L-histidine. |
| popPK | Lamsfus_2024 | irrelevant | 0 | 0 | The paper reports the pharmacokinetic clearance of histidine-rich protein-2 (HRP2), a parasite antigen, not the essential amino acid L-histidine. |
| popPK | Larenkov_2020 | irrelevant | 0 | 0 | The paper studies 68Ga-labeled folic acid conjugates with a histidine/glutamic acid tag, but does not report toxicokinetic parameters for L-histidine itself. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on a radiopharmaceutical ([131I]IM(HE)3AAN) where histidine (His) is merely part of the peptide sequence, not the subject substance for which toxicokinetic parameters are reported. |
| popPK | Ling_2025 | irrelevant | 0 | 0 | The paper describes a nanosystem (FLAGC) where L-histidine is a structural component for drug delivery, not a subject of toxicokinetic parameter measurement. |
| popPK | Macheras_2022 | irrelevant | 0 | 0 | The paper is a theoretical review on general oral drug absorption kinetics (PBFTPK) and does not report specific quantitative kinetic parameters for L-histidine. |
| popPK | Magalhães-Costa_2015 | irrelevant | 0 | 0 | The paper reports a case of adverse renal effects from 5-aminosalicylate and contains no kinetic parameters or data for L-histidine. |
| popPK | Maher_2021 | irrelevant | 0 | 0 | The paper is a clinical case report of a dermatological condition treated with dupilumab and contains no data on L-histidine. |
| popPK | Mahmud_2015 | irrelevant | 0 | 0 | The paper describes a clinical case of tuberculosis and ascariasis treated with streptokinase and does not contain any toxicokinetic data for L-histidine. |
| popPK | Matoba_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for oxaliplatin, not l_histidine. |
| popPK | Mitten_2001 | irrelevant | 0 | 0 | The paper discusses legal issues regarding medical clearance after brain injury and does not contain any data or kinetic parameters for L-histidine. |
| popPK | Mizumo_1997 | irrelevant | 0 | 0 | The study measures insulin and glucose kinetics in response to Cyclo(His-Pro), not the toxicokinetic parameters of L-histidine itself. |
| popPK | Mizuta_1993 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for levodopa and D-penicillamine, with no mention or data regarding l-histidine. |
| popPK | Mráz_2019 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of ethylene oxide adducts (HEVL/HEVH) and L-histidine appears only as a structural component of the β-globin chain, not as the subject substance for kinetic parameter extraction. |
| popPK | Mulholland_2008 | irrelevant | 0 | 0 | The paper describes a clinical case of Aeromonas hydrophila folliculitis and contains no kinetic data for L-histidine. |
| PGx | Muzammil_2016 | not_relevant | 0 | 0 | The paper discusses oral delivery of monoclonal antibodies via FcRn and mentions L-histidine only as a formulation buffer component, reporting no pharmacogenomic effects on PK/PD. |
| popPK | Needham_2019 | irrelevant | 0 | 0 | The paper is a biographical profile of a scientist and contains no toxicokinetic data, parameters, or experimental results for l-histidine or any other substance. |
| popPK | Niisato_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding respiratory therapy (intrapulmonary percussive ventilation) and contains no kinetic parameters or mention of L-histidine. |
| popPK | Niyonshuti_2024 | irrelevant | 0 | 0 | The paper describes a chromatographic method for doxorubicin where L-histidine is used solely as a buffer component in the release media, not as the subject of toxicokinetic study. |
| popPK | Oppenheimer_1963 | irrelevant | 0 | 0 | The paper is a news article regarding the awarding of the Fermi Prize to J. Robert Oppenheimer and contains no toxicokinetic data for L-histidine. |
| popPK | Park_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for alectinib, not l_histidine. |
| PGx | Peters_2020 | not_relevant | 2 | 1 | The paper reviews carnosine (a dipeptide) and its pharmacogenomics (CNDP1), not L-histidine, and lacks quantitative PK/PD data for L-histidine. |
| popPK | Plucinski_2018 | irrelevant | 0 | 0 | The paper reports the half-life of the malaria antigen HRP2 (histidine-rich protein 2), not the amino acid L-histidine. |
| popPK | Plucinski_2019 | irrelevant | 0 | 0 | The paper measures the clearance kinetics of malaria parasite antigens (LDH, Aldo, HRP2), not the amino acid L-histidine. |
| popPK | Poon_2011 | irrelevant | 0 | 0 | The paper is a review of the protein Histidine-rich glycoprotein (HRG), not the amino acid L-histidine, and contains no toxicokinetic parameters. |
| popPK | Pott_2019 | irrelevant | 0 | 0 | The paper describes a case of spontaneous Hepatitis C virus clearance and contains no kinetic parameters for L-histidine. |
| popPK | Powell_2021 | irrelevant | 0 | 0 | The paper reports pharmacogenetic data and toxicity outcomes for the drug docetaxel, not toxicokinetic parameters for l_histidine. |
| popPK | Priebatsch_2017 | irrelevant | 0 | 0 | The paper is a review on the functional regulation of the plasma protein Histidine-Rich Glycoprotein (HRG) by Zinc, focusing on metal binding affinities (Kd) and biological functions, rather than reporting toxicokinetic parameters (half-life, clearance, etc.) for the amino acid L-histidine. |
| popPK | Quigg_1995 | irrelevant | 0 | 0 | The paper reports a clinical case of cryoglobulinemic glomerulonephritis treated with cyclophosphamide and contains no kinetic parameters for L-histidine. |
| popPK | Reddy_2015 | irrelevant | 0 | 0 | The paper is a surgical case report on thumb reconstruction and contains no data regarding the toxicokinetics of L-histidine. |
| popPK | Ricci_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on pemphigus vulgaris and contains no toxicokinetic data for L-histidine. |
| popPK | Ritz_1994 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of frusemide in chronic renal failure and does not contain data for l-histidine. |
| popPK | Roberts_2010 | irrelevant | 0 | 0 | The paper is a review on drug structure-transport relationships (focusing on drugs like lidocaine, aspirin, and phenol) and does not contain any quantitative toxicokinetic data for L-histidine. |
| popPK | Rostami-Afshari_2025 | irrelevant | 0 | 0 | The paper studies renal function and metabolomic profiles in Myalgic Encephalomyelitis, mentioning histidine only as a background metabolite without providing any kinetic parameters (half-life, clearance, partition coefficients) for l_histidine. |
| PGx | Seif_2018 | not_relevant | 0 | 0 | The paper analyzes genome-scale metabolic reconstructions of Salmonella strains and does not involve human pharmacokinetics or pharmacodynamics of l-histidine. |
| popPK | Shankar_2019 | irrelevant | 0 | 0 | The provided evidence is a professional biography and contains no experimental data or kinetic parameters for l_histidine. |
| popPK | Sheikh_2021 | irrelevant | 0 | 0 | The paper is a case report regarding HIV pre-exposure prophylaxis and creatinine clearance in a transgender patient, containing no kinetic parameters for L-histidine. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The paper focuses on a nanoplatform for atherosclerosis treatment and contains no toxicokinetic parameters for L-histidine (which appears only as part of a peptide sequence). |
| popPK | Shimizu_2019 | irrelevant | 0 | 0 | The paper is a clinical case report on exercise-induced acute kidney injury in a patient with hereditary renal hypouricemia and contains no kinetic parameters for L-histidine. |
| popPK | Shimokawa_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters (half-life, uptake factor) for selenoneine (2-selenyl-Nα, Nα, Nα-trimethyl-L-histidine) and total selenium, not for L-histidine itself. |
| popPK | Shoji_1992 | irrelevant | 0 | 0 | The paper is a clinical case report on pseudo-Bartter syndrome in a human and does not contain any kinetic parameters for L-histidine. |
| popPK | Shrivastava_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding ureteric stump syndrome and renal calculi, with no mention of L-histidine or any toxicokinetic parameters. |
| popPK | Sjöqvist_1986 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of tricyclic antidepressants (nortriptyline, imipramine) and debrisoquine, with no mention of L-histidine. |
| PGx | Song_2014 | not_relevant | 0 | 0 | The paper discusses histidine-dipeptides (carnosine/anserine) as nutrients or bioactive agents in the context of metabolic syndrome, not a specific drug labeled 'l_histidine', and does not report pharmacogenomic changes in the PK/PD of 'l_histidine' itself. |
| popPK | Spaas_2023 | irrelevant | 0 | 0 | The paper studies the enzyme CARNS1 and carnosine (a dipeptide containing histidine) in MS models, but does not report toxicokinetic parameters for L-histidine itself. |
| popPK | Stamell_2013 | irrelevant | 0 | 0 | The paper is a clinical case report on melanoma treatment and immune response, containing no kinetic parameters for L-histidine. |
| PGx | Stella_2021 | not_relevant | 0 | 0 | The paper focuses on microbial biosensor development in Vibrio natriegens and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of L-histidine. |
| popPK | Summers_2009 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the treatment of warts with Candida antigen and contains no toxicokinetic data for L-histidine. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a review/commentary on pig-to-human kidney xenotransplantation and does not report any toxicokinetic parameters for l-histidine. |
| PGx | Timmer_2021 | not_relevant | 0 | 0 | The paper focuses on faecal microbiome composition in Urea Cycle Disorders and PKU, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of L-histidine. |
| popPK | Toor_2025 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of the therapeutic protein TIMP2 (modified with PEG), where histidine is used solely as a chemical conjugation site/tag, not as the subject substance. |
| popPK | Treem_1990 | irrelevant | 0 | 0 | The paper is a review of pediatric liver transplantation complications focusing on cyclosporine pharmacokinetics and does not contain any toxicokinetic data for L-histidine. |
| PGx | Trost_2010 | not_relevant | 0 | 0 | The paper reports the genome sequence of a bacterial pathogen, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Ursulino_2026 | not_relevant | 0 | 0 | The paper investigates biomarkers for COVID-19 diagnosis and genetic predisposition to infection risk, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Vezina_2024 | not_relevant | 0 | 0 | The paper discusses L-histidine as a bacterial nutrient and auxotrophy, not as a drug subject to pharmacogenomic analysis. |
| popPK | Wang_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetics for a radiolabeled VIP analogue (MY34), not L-histidine, which was only used as a modification/tag. |
| popPK | Weatherell_1988 | irrelevant | 0 | 0 | The paper focuses on fluoride uptake and clearance in dentine and does not report any kinetic parameters for L-histidine. |
| popPK | Whitmore_1994 | irrelevant | 0 | 0 | The paper is a clinical case report on mycosis fungoides and contains no toxicokinetic data for L-histidine. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the surgical removal of cystine stones and does not report any quantitative toxicokinetic parameters for L-histidine or L-cystine. |
| PGx | Yang_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of valacyclovir, not L-histidine. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper investigates the kinetics of HMGB1 clearance, not l-histidine, which is not the subject substance. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The paper focuses on a histidine-based nanoparticle carrier for insulin delivery, and no pharmacokinetic parameters for L-histidine itself are reported. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper focuses on the physiological role of histamine receptors in glucose variability and glutamate clearance, with no toxicokinetic parameters for L-histidine reported. |
| popPK | Zou_2024 | irrelevant | 0 | 0 | The paper studies the glycosylation and plasmin-cleavage kinetics of histidine-rich glycoprotein (HRG), not the toxicokinetic parameters of the amino acid L-histidine. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of beta-alanine, while L-histidine is only present as a co-administered component (300 mg) of the test formulation. |
| popPK | de_2027 | irrelevant | 0 | 0 | The paper studies the effect of L-histidine on Nickel binding and translocation, not the toxicokinetic parameters of L-histidine itself. |
| popPK | unknown_1957 | irrelevant | 0 | 0 | The text is an obituary erratum regarding Ward Evans and J. Robert Oppenheimer, containing no toxicokinetic data for L-histidine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_histidine%5D&body=Drug%3A%20l_histidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_histidine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 12:55 UTC</sub>
