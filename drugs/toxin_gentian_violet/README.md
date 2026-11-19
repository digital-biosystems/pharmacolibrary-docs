<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Gentian Violet&quot;}]"></div>

# Gentian Violet

- **generic name:** Gentian Violet
- **T3DB:** [T3D4821](http://www.t3db.ca/toxins/T3D4821) · **DrugBank:** [DB00406](https://go.drugbank.com/drugs/DB00406) · **PubChem:** [CID 3468](https://pubchem.ncbi.nlm.nih.gov/compound/3468)
- **groups:** approved

## About

A dye that is a mixture of violet rosanilinis with antibacterial, antifungal, and anthelmintic properties.

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** For the treatment of bacterial and fungal infections inside the mouth (thrush) and skin, also for the prevention of transmission of Chagas' disease (as a blood additive).
- **Mechanism of toxicity:** Gentian Violet is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …
- **Acute toxicity:** LD<sub>50</sub>=420 mg/kg (rat, oral).
- **Treatment:** If the compound has been ingested, rapid gastric lavage should be performed using 5% sodium bicarbonate. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4821">T3DB T3D4821</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 14426-25-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:604234">ChEBI 604234</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gentian_violet).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC22A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (intercalation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 17:38 | 24:01 | 0/0/0 | 0/0/0 | 0/0/0 | 1,167,707/29,558 | ollama / glm-5.3-flash | 55 | 5/50 | 55/0 | 0 |

## Coverage

- **PubMed hits:** 165 matched, 127 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhao_2018.pdf` | Zhao G et al., Effects of Benzoapyrene on migration an…, Journal of cellular biochem… (2018) | pd | 4 | [10.1002/jcb.26683](https://doi.org/10.1002/jcb.26683) | [29345337](https://www.ncbi.nlm.nih.gov/pubmed/29345337) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-13 17:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdulkareem_2025 | irrelevant | 0 | 0 | Gentian violet is not the subject (or mentioned at all); the kinetic parameters (half-life, VDss, clearance) belong to thyme essential oil constituents o-cymene and gamma-terpinene predicted in silico. |
| popPK | Aly_2022 | irrelevant | 0 | 0 | Gentian violet appears only as "crystal violet" assay reagent; no toxicokinetic parameters for the substance are reported. |
| PGx | Aoki-Nonaka_2025 | not_relevant | 0 | 0 | Paper evaluates antimicrobial effects of an antibiofilm peptide, not gentian violet (crystal violet is only a stain), and no gene variant affects drug PK/PD parameters. |
| PGx | Arslan_2012 | not_relevant | 0 | 0 | Paper studies Cyclamen extract effects on CYP expression and cytotoxicity, not gene variants affecting gentian violet PK/PD. |
| PGx | Atıcı_2024 | not_relevant | 0 | 0 | Crystal violet is used only as a cell-staining assay reagent, not as a drug with measured PK/PD parameters or gene-variant effects. |
| popPK | Badisa_2009 | irrelevant | 0 | 5 | Gentian violet (crystal violet) is used only as a dye in the cytotoxicity assay method, not as a study substance with any kinetic parameters. |
| popPK | Bandara_2016 | irrelevant | 0 | 0 | Gentian (crystal) violet appears only as a biofilm staining assay reagent, and the kinetic parameters concern ciprofloxacin/farnesol liposomes, not gentian violet. |
| popPK | Banga_2026 | irrelevant | 0 | 0 | Gentian violet is not the subject substance; crystal violet appears only as an analytical staining reagent in an in vitro antibacterial study of thymosin β4, with no toxicokinetic parameters. |
| popPK | Berntssen_2018 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PGx | Boichuk_2023 | not_relevant | 0 | 0 |  |
| popPK | Borg_2001 | irrelevant | 0 | 0 | Gentian violet appears only as a topical treatment mentioned in passing; no kinetic parameters of any kind are reported. |
| PGx | Brands_2019 | not_relevant | 0 | 0 | Crystal violet is used only as a cell viability staining assay, not as a therapeutic drug, and no gene variant effect on its PK/PD is reported. |
| popPK | Carević_2022 | irrelevant | 0 | 0 | The paper is about hesperetin's antimicrobial/toxicity parameters; crystal violet (gentian violet) appears only as an analytical biofilm stain, with no kinetic parameters for gentian_violet itself. |
| popPK | Carneiro_2026 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining reagent; kinetic parameters concern valencene/nootkatone ADMET predictions, no gentian violet toxicokinetics. |
| popPK | Carter_1976 | irrelevant | 0 | 0 | Gentian violet only appears as an analytical reagent (crystal violet); the study reports no kinetic parameters for the substance. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | Crystal violet here is only a staining reagent for biofilm assays; no toxicokinetic parameters are reported. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | Crystal violet (gentian violet) appears only as an analytical staining reagent in biofilm assays; no toxicokinetic parameters for it are reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a biofilm staining reagent/analytical dye; the paper reports no kinetic parameters for it. |
| popPK | Cheng_2014 | irrelevant | 0 | 0 | Gentian (crystal) violet appears only as an analytical staining reagent for biofilms; the paper's substances are sodium houttuyfonate and imipenem, with no kinetic parameters for gentian violet. |
| popPK | Chitolina_2025 | irrelevant | 0 | 0 | Gentian violet (crystal violet) is only used as an analytical assay reagent for biofilm staining; no toxicokinetic parameters of gentian violet are reported. |
| popPK | Chong_2026 | irrelevant | 0 | 0 | Gentian (crystal) violet appears only as an analytical biofilm staining reagent; all kinetic-like parameters (phage latent period, adsorption, titers) concern bacteriophage/bacteria, not gentian violet toxicokinetics, and no numeric parameters for the substance exist. |
| popPK | Cipriani_2009 | irrelevant | 0 | 0 | Gentian violet is absent; the paper concerns platelet lysate effects on fibroblasts, with "crystal violet" only as an analytical stain, not a studied toxicokinetic substance. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a biofilm staining dye/analytical reagent; no toxicokinetic parameters for it are reported. |
| popPK | Datey_2019 | irrelevant | 0 | 0 | Gentian violet does not appear as a subject substance anywhere; "crystal violet" is only an analytical staining reagent, and the paper reports biofilm efficacy data, not toxicokinetic parameters, for any substance. |
| popPK | Dawei_2012 | irrelevant | 0 | 0 | Crystal violet appears only as an analytical biofilm stain; no toxicokinetic parameter for gentian violet is reported anywhere. |
| PGx | Diaz_2019 | not_relevant | 0 | 0 | No gene variant or pharmacogenomic effect; gentian violet not studied (crystal violet only a staining reagent). |
| PGx | Diaz_2020 | not_relevant | 0 | 0 | Gentian violet (crystal violet) is only used as a biomass staining reagent, not as a drug with gene-variant-associated PK/PD effects. |
| popPK | Domagala_2018 | irrelevant | 0 | 0 | The paper studies Photofrin-PDT and autophagy; gentian violet (crystal violet) appears only as a cell-viability analytical dye with no kinetic parameters. |
| popPK | Dong_2011 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as an analytical staining reagent in a bacterial genetics study, with no kinetic parameters for the substance. |
| popPK | Edwards_2016 | irrelevant | 0 | 0 | A review of wound-dressing performance with no toxicokinetic parameters for gentian violet; it explicitly claims no absorption of components. |
| popPK | Fahim_2025 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a biofilm staining reagent; there are no toxicokinetic parameters for it. |
| PGx | Fauzia_2023 | not_relevant | 1 | 0 | Paper studies H. pylori genetic variants affecting bacterial biofilm formation phenotype, with no pharmacogenomic effect on PK/PD parameters of gentian violet (crystal violet used only as a staining assay, not the drug). |
| popPK | Fedarko_1995 | irrelevant | 0 | 0 | Crystal violet appears only as an analytical dye for cell counting; no kinetic parameters of gentian violet are reported. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining reagent for biofilms; no toxicokinetic parameters for the substance. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | Gentian violet does not appear as a study substance at all; crystal violet is used only as an analytical staining reagent for biofilm biomass, and the paper reports antibacterial efficacy, not any kinetic parameters. |
| popPK | Glahder_2005 | irrelevant | 0 | 0 | No gentian violet (methylene violet 4) kinetic parameters at all; the paper is an electroporation method study where "crystal violet" appears only as a cell viability stain, not a subject substance with kinetics. |
| popPK | Gonçalves_2012 | irrelevant | 0 | 0 | The paper is about cadmium cytotoxicity and the chelator [15]pyN5; gentian violet is absent (crystal violet is only an assay dye), and no toxicokinetic parameters are reported. |
| PGx | Gould_2017 | not_relevant | 0 | 0 | Study examines CP30 virulence in feline T. foetus with crystal violet assays; no gentian violet drug PK/PD or pharmacogenomic effects reported. |
| popPK | Granick_2017 | irrelevant | 0 | 0 | Gentian violet does not appear as a subject substance; the paper is an in vitro biofilm ultrasound study with crystal violet used only as a stain and no toxicokinetic parameters. |
| popPK | Graybill_1993 | irrelevant | 0 | 0 | Gentian violet is mentioned only as a historical aside, not as a subject of any kinetic parameters. |
| popPK | Griffiths_1994 | irrelevant | 0 | 0 | Gentian violet appears only as a DNA staining dye/analytical reagent in a cell viability assay; no toxicokinetic parameters for it are reported. |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | Gentian violet appears only as an inactive ingredient in a cantharidin topical formulation; no toxicokinetic parameters for gentian violet are reported. |
| popPK | Han_2026 | irrelevant | 0 | 0 | Fish immunology study of Rab5b against Vibrio; gentian violet is not the subject and no toxicokinetic parameters (crystal violet appears only as a staining reagent). |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The paper studies curcumin-loaded liposomes against S. mutans biofilm; gentian violet is not the subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining reagent; no toxicokinetic parameters for it. |
| PGx | Huang_2026 | not_relevant | 0 | 0 | Paper studies caffeine/TAS2R10 effects on cisplatin sensitivity in HNSCC cells; gentian violet is not the studied drug (crystal violet is only an assay stain), and no pharmacogenomic effect on its PK/PD is reported. |
| popPK | Isawumi_2026 | irrelevant | 0 | 0 | The paper studies riboflavin-antibiotic synergy; "crystal violet" appears only as a biofilm staining reagent, and no toxicokinetic parameter for gentian violet exists. |
| popPK | Islam_2026 | irrelevant | 1 | 0 | This is a photocatalytic degradation/ADMET in-silico study of methyl violet, not a toxicokinetic study; no kinetic parameters for gentian violet in any organism, and any ADMET numbers are computational predictions for degradation products. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | Paper is about linalool antibiofilm activity against A. baumannii; gentian violet appears only as analytical crystal violet staining reagent, with no toxicokinetic parameters. |
| popPK | Junqueira_2023 | irrelevant | 0 | 0 | Gentian violet is absent; "crystal violet" appears only as a cytotoxicity assay dye, and there are no toxicokinetic parameters for it. |
| popPK | Khalifa_2025 | irrelevant | 0 | 0 | Gentian violet does not appear except as crystal violet staining reagent; the paper is about cinnamaldehyde with no toxicokinetic parameters for gentian violet. |
| popPK | Khan_2017 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a biofilm staining reagent; no kinetic parameters of gentian violet are reported. |
| popPK | Kitagaki_2006 | irrelevant | 0 | 0 | Gentian (crystal) violet appears solely as an analytical staining reagent in the cytotoxicity assay, not as a subject substance with any toxicokinetic parameters. |
| popPK | Ko_1991 | irrelevant | 0 | 0 | Gentian violet appears only as a histological staining reagent; no toxicokinetic parameters for it are reported. |
| popPK | Kouakou_2025 | irrelevant | 0 | 0 | This study concerns hops β-acids (lupulone, colupulone) in human nasal cell cultures; gentian violet only appears as crystal violet stain/cytotoxicity assay, not as a subject substance with kinetic parameters. |
| popPK | Krislee_2019 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a biofilm staining reagent; all parameters concern 1-monolaurin and rifampicin, with no toxicokinetic data. |
| popPK | Lacerda_2005 | irrelevant | 1 | 2 | Gentian violet (crystal violet) appears only as a comparator dye; partition coefficients are for rhodamine derivatives, not gentian violet toxicokinetics. |
| PGx | Li_2023 | not_relevant | 0 | 0 | Paper studies MLN4924 effects on limbal stem cells; gentian violet only appears as a staining reagent, no pharmacogenomic PK/PD content. |
| popPK | Li_2026 | irrelevant | 0 | 0 | Crystal violet (gentian violet) appears only as a biofilm staining reagent; all parameters belong to CORM-3 and CO release, not gentian violet toxicokinetics. |
| PGx | Lison_2008 | not_relevant | 0 | 0 | Paper concerns silica nanoparticle dosimetry in cytotoxicity assays, with no pharmacogenomic or PK/PD findings for gentian violet. |
| popPK | Littlefield_1985 | irrelevant | 1 | 0 | A lifetime dietary carcinogenicity bioassay with tumor incidences and VSD risk extrapolation, but no toxicokinetic parameters (half-life, clearance, partition coefficients, rate constants) for gentian violet. |
| popPK | Lowdon_2021 | irrelevant | 0 | 0 | The paper is an MIP colorimetric sensor for amoxicillin; crystal/gentian violet appears only as a comparator dye in binding experiments, with no toxicokinetic parameters. |
| popPK | Lukianova_2025 | irrelevant | 0 | 0 | The paper's subject is a Bacillus subtilis lectin; "crystal violet" (gentian violet) appears only as an analytical staining reagent, with no kinetic parameters for gentian_violet itself. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | Gentian/crystal violet appears only as an analytical staining reagent, not the subject substance, and no kinetic parameters of any kind are reported. |
| popPK | Manetta_1990 | irrelevant | 0 | 0 | Crystal violiolet (gentian violet) is only used as a cell stain; no toxicokinetic parameters exist. |
| popPK | Mineura_1989 | irrelevant | 0 | 0 | Gentian violet is not the subject; crystal violet appears only as a colony staining reagent, and no toxicokinetic parameters of it are reported. |
| popPK | Mizuhashi_2026 | irrelevant | 0 | 0 | The study's kinetic parameters concern gentamicin in cadaver joint effusion; "crystal violet" is only a dye tracer (and not gentian violet anyway), so no toxicokinetic parameter for gentian_violet exists. |
| popPK | Musa_2010 | irrelevant | 0 | 0 | Crystal violet is used only as an analytical dye in the cytotoxicity assay, not as the subject substance with any kinetic parameters; no gentian violet toxicokinetics reported. |
| popPK | Musa_2011 | irrelevant | 0 | 0 | Gentian violet appears only as the crystal violet dye used in a cytotoxicity assay reagent, not as a substance with any toxicokinetic parameters. |
| popPK | Namie_2026 | irrelevant | 0 | 0 | Gentian violet never appears as a study substance; "crystal violet" is only an analytical staining reagent in biofilm assays, and no toxicokinetic parameters exist for it. |
| popPK | Nazarova_2026 | irrelevant | 0 | 0 | Gentian violet appears only as the crystal violet dye used for biofilm staining of Lactobacillus isolates; no toxicokinetic parameters for it are reported anywhere. |
| PGx | OToole_2011 | not_relevant | 0 | 0 | Paper describes a crystal violet biofilm assay protocol, not a pharmacogenomic effect on gentian violet PK/PD parameters. |
| popPK | Okuno_2012 | irrelevant | 0 | 0 | Gentian/crystal violet appears only as a cell-viability staining reagent, not as a study substance with any kinetic parameters. |
| popPK | Omar_2025 | irrelevant | 0 | 0 | Gentian violet is not the subject substance; crystal violet appears only as an analytical stain in the biofilm assay, and no toxicokinetic parameters for it are reported. |
| popPK | Pan_2022 | irrelevant | 0 | 0 | The paper studies Elsinochrome A photodynamic action on Candida albicans; gentian violet (crystal violet) appears only as a biofilm staining reagent, with no kinetic parameters for it. |
| popPK | Panmanee_2013 | irrelevant | 0 | 0 | Gentian violet is not the subject; crystal violet is used only as an in vitro biofilm-staining reagent with no toxicokinetic parameters. |
| popPK | Pengfei_2024 | irrelevant | 0 | 0 | The paper studies pinaverium bromide pharmacokinetics; "crystal violet" (a gentian violet dye) appears only as a biofilm staining reagent, with no kinetic parameters for gentian violet. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | Gentian violet does not appear; "crystal violet" is used only as an analytical staining reagent, and all pharmacokinetics concern betulinic acid via in silico prediction. |
| popPK | Piotrowski_2017 | irrelevant | 0 | 0 | Gentian violet does not appear as a subject substance here; crystal violet is only a staining reagent, and no toxicokinetic parameters of any substance are reported. |
| popPK | Proskurnin_2011 | irrelevant | 2 | 1 | Gentian violet (crystal violet) appears only as an in vitro calibration dye; no toxicokinetic parameters are reported for it, and the animal-model clearance kinetics concern ICG, MB and TB, not gentian violet. |
| popPK | Qanash_2026 | irrelevant | 0 | 0 | Gentian (crystal) violet appears only as a reagent in antibiofilm assays; no toxicokinetic parameters for it are reported anywhere, and no animal dosing exists. |
| PGx | Qureshi_2025 | not_relevant | 0 | 0 | No pharmacogenomic effect on gentian violet PK/PD; paper is about stem cell differentiation with crystal violet/MTT merely as assays. |
| popPK | Rachmawati_2022 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as an analytical dye in the biofilm staining assay; no toxicokinetic parameters for it are reported. |
| popPK | Rao_2018 | irrelevant | 0 | 0 | A clinical case report of lymphoma treatment with no kinetic parameters for gentian violet whatsoever. |
| popPK | Razdan_2026 | irrelevant | 0 | 0 | Gentian violet does not appear; crystal violet is only an assay reagent and no kinetic parameters for it are reported. |
| popPK | Rimon_2025 | irrelevant | 0 | 0 | Gentian violet does not appear as a study substance; crystal violet is used only as a biofilm staining reagent and the paper reports no kinetic parameters; key values also live in supplemental tables/figures. |
| PGx | Sakulterdkiat_2012 | not_relevant | 0 | 0 | Paper concerns curcumin resistance and ABC transporters; gentian violet is only a staining dye, no drug. |
| popPK | Salamah_1986 | irrelevant | 1 | 1 | Gentian violet appears only as a microbiological dye/uptake marker in bacterial plasmid studies, with no quantitative toxicokinetic parameters. |
| popPK | Santajit_2025 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining dye in biofilm assays; no kinetic parameters for gentian_violet are reported. |
| popPK | Scremin_1982 | irrelevant | 0 | 0 | Crystal (gentian) violet is used only as an intravascular casting/marker reagent; no toxicokinetic parameters are reported. |
| popPK | Segner_1993 | irrelevant | 0 | 0 | Gentian violet is not a study subject; "crystal violet" appears only as a cytotoxicity staining assay, and no kinetic parameters for it are reported (values would be in tables not provided). |
| PGx | Semiz_2023 | not_relevant | 0 | 0 | Crystal/gentian violet is used only as a cell-viability staining dye; the study examines ABS effects on CYP enzymes, not any pharmacogenomic effect on gentian violet PK/PD. |
| popPK | Sharma_2021 | irrelevant | 0 | 2 | This is a photophysical/encapsulation study of crystal violet in bile-salt micelles (binding constants, quantum yields, micellar partition coefficients), not in-vivo toxicokinetics; the partition coefficient is a micelle:aqueous physicochemical value, not a tissue compartment parameter. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | Gentian violet appears only as the crystal violet staining assay reagent; the paper reports no kinetic parameters for it. |
| popPK | Staats_2021 | irrelevant | 0 | 0 | This paper studies Staphylococcus aureus aggregation/biofilm; "crystal violet" appears only as a biofilm staining assay, not gentian violet toxicokinetics, and no kinetic parameters for the substance are present. |
| popPK | Sugiura_2026 | irrelevant | 0 | 0 | Clinical case series of intrapleural GV irrigation reporting only bacterial clearance times; no kinetic parameters (half-life, rates, partition coefficients, concentrations) for gentian violet are present. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | Gentian violet appears only as a crystal violet staining reagent in an antimicrobial in-vitro study with no toxicokinetic parameters for it. |
| popPK | Suter_2026 | irrelevant | 0 | 0 | Gentian violet does not appear as a subject; crystal violet is only mentioned as an MTT-related cytocompatibility assay reagent, with no toxicokinetic parameters. |
| popPK | Szemerédi_2026 | irrelevant | 0 | 0 | Gentian violet (crystal violet, a triphenylmethane dye) appears only as a biofilm-staining/assay reagent in this E. coli efflux pump inhibitor study, with no toxicokinetic parameters, half-lives, rate constants, or disposition models for it. |
| popPK | Tagliaferri_1987 | irrelevant | 0 | 0 | Gentian violet does not appear; "crystal violet" is only an assay staining reagent, not a kinetic subject substance. |
| popPK | Udayabhanu_2018 | irrelevant | 0 | 0 | Gentian violet appears only as a test dye substrate for photocatalytic degradation by TiO2 nanoparticles; no toxicokinetic parameters for gentian violet are reported. |
| popPK | Vandevelde_2015 | irrelevant | 0 | 0 | Gentian violet is absent; crystal violet appears only as a staining reagent, with no kinetic parameters. |
| popPK | Vemulapalli_2000 | irrelevant | 0 | 0 | Paper concerns Brucella vaccine genetics; gentian violet does not appear as a study substance and no kinetic parameters are reported. |
| popPK | Wachowska_2016 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a staining reagent, and the paper reports no kinetic parameters for it; PDT uses verteporfin as the studied photosensitizer. |
| popPK | Waldrop_2014 | irrelevant | 0 | 0 | Gentian violet (crystal violet) is used only as a biofilm staining dye in an in vitro microbiology experiment, with no toxicokinetic parameters of the substance. |
| popPK | Wan_2025 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a laboratory staining reagent for biofilm assays; no toxicokinetic parameters for it are reported. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | Gentian violet appears only as a crystal violet staining reagent; all kinetic-like parameters (MIC, LD50) concern cordycepin, not gentian violet. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | Gentian violet does not appear as a study substance; "crystal violet" is only a biofilm staining reagent, and no kinetic parameters for it are reported. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining reagent for biofilm biomass, not as a studied substance; no kinetic parameters. |
| popPK | Watson_1994 | irrelevant | 1 | 0 | Gentian violet appears only as "crystal violet" used for staining cells, with all kinetic parameters (e.g., t½ 35 min) belonging to hydrogen peroxide, not gentian violet, and no numeric toxicokinetic values for gentian violet are present. |
| PGx | Wei_2019 | not_relevant | 0 | 0 | Study concerns chrysin-sorafenib synergy in HCC cells via ERK1/2, with no genetic variant effect on gentian violet PK/PD reported. |
| popPK | Wongpanit_2012 | irrelevant | 0 | 0 | Gentian violet is not studied; the paper examines sorption/release of other dyes (crystal violet, etc.) on silk fibroin films with no toxicokinetic parameters. |
| popPK | Xian_2024 | irrelevant | 0 | 0 | Gentian violet (crystal violet) appears only as a staining reagent; no toxicokinetic parameters are reported. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | Gentian violet does not appear as a study substance; "crystal violet" is only a biofilm staining reagent, with no kinetic parameters for gentian violet. |
| PGx | Yamamoto_2002 | not_relevant | 0 | 0 | Paper concerns troglitazone metabolism and CYP3A4, not gentian_violet, and reports no genotype-driven PK/PD effect. |
| popPK | Yosboonruang_2025 | irrelevant | 0 | 0 | This is an antimicrobial activity study of cannabidiol against A. baumannii; gentian violet (crystal violet) appears only as a biofilm staining reagent, and no toxicokinetic parameters are reported. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | Gentian violet appears only as crystal violet staining reagent in a biofilm assay; no toxicokinetic parameters for the substance are present. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Crystal violet is only a staining reagent; no toxicokinetic parameters for gentian violet are reported. |
| popPK | Zhao_2001 | irrelevant | 0 | 0 | The paper concerns phenylalanine pharmacokinetics in rats; gentian violet appears only as "crystal violet" staining reagent, with no kinetic parameters for it. |
| popPK | Zhao_2018 | irrelevant | 0 | 0 | Gentian violet is not the subject substance; "crystal violet" is only a staining method in a study of benzo[a]pyrene's effects on lung cancer cells, with no kinetic parameters for gentian violet. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | Gentian violet is not studied; crystal violet appears only as a biofilm staining reagent, and no toxicokinetic parameters for it are reported. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | Gentian violet appears only as a biofilm staining reagent; no toxicokinetic parameters for it are reported. |
| popPK | de_2020 | irrelevant | 0 | 0 | Gentian violet does not appear as a study subject; "crystal violet" is only an analytical reagent in a cytotoxicity assay, and all kinetic-like numbers (IC50) belong to a different compound (MIH 2.4Bl). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgentian_violet%5D&body=Drug%3A%20gentian_violet%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_gentian_violet/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
