<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Caproic acid&quot;}]"></div>

# Caproic acid

- **generic name:** Caproic acid
- **T3DB:** [T3D4595](http://www.t3db.ca/toxins/T3D4595) · **PubChem:** [CID 8892](https://pubchem.ncbi.nlm.nih.gov/compound/8892)

## About

It is a colorless oily liquid smelling of cheese. It is a fatty acid found naturally in various animal fats and oils. Caproic acid is a medium chain triglycerides (MCT). …

- **Category:** Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4595">T3DB T3D4595</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 142-62-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:30776">ChEBI 30776</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ishiwata_1996_reference](drugs/toxin_caproic_acid/CaproicAcid_Ishiwata1996_reference.md) | — | 1-compartment (no model) | 0 | Ishiwata K et al., A brain uptake study of [1-(11)C]hexano…, Annals of nuclear medicine (1996) | [10.1007/BF03165404](https://doi.org/10.1007/BF03165404) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 23:15 | 16:27 | 0/1/0 | 0/0/0 | 0/0/0 | 421,782/22,731 | einfracz / qwen3.8-27b | 11 | 0/9 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 77 matched, 75 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishiwata_1996.pdf` | Ishiwata K et al., A brain uptake study of [1-(11)C]hexano…, Annals of nuclear medicine (1996) | popPK | 8 | [10.1007/BF03165404](https://doi.org/10.1007/BF03165404) | [8800460](https://pubmed.ncbi.nlm.nih.gov/8800460) | The paper reports quantitative brain uptake parameters (time-radioactivity curves, brain:blood ratios) for hexanoate (caproic acid) in mice, with specific numeric values provided in the text. |
| `Ishiwata_1995.pdf` | Ishiwata K et al., Synthesis and preliminary evaluation of…, Annals of nuclear medicine (1995) | popPK | 5 | [10.1007/BF03165010](https://doi.org/10.1007/BF03165010) | [7779532](https://pubmed.ncbi.nlm.nih.gov/7779532) | The study uses [1-11C]hexanoate (a radiolabeled isotope of caproic acid/hexanoic acid) to assess fatty acid metabolism kinetics in mice, but specific numeric kinetic parameters (e.g., clearance rates, half-lives) are described qualitatively rather than explicitly provided as extractable numbers in the text. |
| `Himanen_2012.pdf` | Himanen M et al., Phytotoxicity of low-weight carboxylic…, Chemosphere (2012) | pd | 4 | [10.1016/j.chemosphere.2012.02.058](https://doi.org/10.1016/j.chemosphere.2012.02.058) | [22440635](https://www.ncbi.nlm.nih.gov/pubmed/22440635) | metadata signals extractable PD data (EC50) |
| `Sharma_2008.pdf` | Sharma S et al., Identification of enzymes involved in t…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.108.021444](https://doi.org/10.1124/dmd.108.021444) | [18573861](https://www.ncbi.nlm.nih.gov/pubmed/18573861) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-09 23:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksel_1991 | irrelevant | 0 | 0 | The study examines 17-hydroxyprogesterone caproate (a progestin), not caproic acid, and reports no toxicokinetic parameters for caproic acid. |
| popPK | Ansell_2004 | irrelevant | 0 | 0 | The paper discusses vitamin K antagonists and mentions epsilon amino caproic acid (not caproic acid) only as an adjunctive therapy for local bleeding, with no kinetic parameters for caproic acid. |
| popPK | Boggess_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for hydroxyprogesterone caproate (17-OHPC), not caproic acid; caproic acid is not the subject substance. |
| popPK | Bowersox_2011 | irrelevant | 0 | 0 | The paper reports kinetic parameters for naronapride and its metabolites, not caproic acid. |
| popPK | Caritis_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 17-hydroxyprogesterone caproate (17-OHPC), which is a different substance from caproic acid (hexanoic acid). |
| popPK | Caritis_2023 | irrelevant | 0 | 0 | The paper investigates 17-hydroxyprogesterone caproate (a prodrug of progesterone), not caproic acid (hexanoic acid) as the subject substance for toxicokinetic parameters. |
| popPK | Caritis_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 17-hydroxyprogesterone caproate, not caproic acid (which appears only as a suffix in the prodrug name). |
| popPK | Chen_2017 | irrelevant | 0 | 0 | Caproic acid (as 6-amino-caproic acid) is used as an experimental reagent (procoagulant) in an intracerebral hemorrhage study, not as the subject of toxicokinetic analysis. |
| popPK | Della_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 17-alpha-hydroxyprogesterone caproate (a prodrug of progesterone), not caproic acid (hexanoic acid). |
| popPK | Durkan_2014 | irrelevant | 0 | 0 | The paper studies a radiolabeled peptide conjugate for PET imaging and does not report kinetic parameters for caproic_acid. |
| popPK | Epps_1988 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of dinitrophenylated human serum albumin (DNP-HSA), where caproic acid is used only as a chemical spacer group in the conjugate, not as the subject substance for kinetic analysis. |
| popPK | Fortaner_2021 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| PGx | Gao_2023 | not_relevant | 0 | 0 | The paper investigates fecal caproic acid levels as a biomarker for Mild Cognitive Impairment and does not report pharmacokinetic or pharmacodynamic parameters of caproic acid as a drug, nor any gene variant effects on these parameters. |
| popPK | García_2024 | irrelevant | 0 | 0 | The paper focuses on the gut microbiota metabolism of saffron apocarotenoids (crocins/crocetin), and caproic acid (hexanoic acid) is only noted as a short-chain fatty acid with changed levels, not as the subject of kinetic parameter determination. |
| popPK | George_1984 | irrelevant | 0 | 0 | The paper studies creatine kinase, and caproic acid (epsilon-amino caproic acid) is only mentioned as an enzyme inhibitor, not as the subject of toxicokinetic study. |
| popPK | Gomez_1998 | irrelevant | 0 | 0 | The paper studies the effect of progesterone analogues (including gestonorone caproate, which contains the word "caproate" but is a distinct steroid, not caproic acid) on macrophage receptors in guinea pigs and does not report toxicokinetic parameters for caproic acid. |
| popPK | Ishiwata_1995 | relevant | 5 | 2 | The study uses [1-11C]hexanoate (a radiolabeled isotope of caproic acid/hexanoic acid) to assess fatty acid metabolism kinetics in mice, but specific numeric kinetic parameters (e.g., clearance rates, half-lives) are described qualitatively rather than explicitly provided as extractable numbers in the text. |
| popPK | Kalisch_2024 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of furan and its metabolites in rats, not caproic_acid, which is the target substance. |
| popPK | Karlstetter_2020 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and biomarkers of furan, not caproic_acid. |
| popPK | Koizumi_1987 | irrelevant | 0 | 0 | The paper investigates the biodistribution of 67Ga-labeled antibodies and contains no kinetic parameters for caproic acid. |
| popPK | Kropp_1999 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and metabolism of BMIPP, not caproic acid. |
| popPK | Leach_1984 | irrelevant | 0 | 0 | The study focuses on the kinetics of fibrinogen clearance, using caproic acid only as a pharmacological agent to modulate fibrinolysis, rather than measuring the toxicokinetic parameters of caproic acid itself. |
| popPK | Loftus_1993 | irrelevant | 0 | 0 | The paper reports kinetic parameters for di-2-(ethylhexyl) adipate (DEHA) and its metabolite 2-ethylhexanoic acid, not caproic acid (hexanoic acid). |
| popPK | Magarian_2016 | irrelevant | 0 | 0 | The paper studies the clearance of hexanoic acid (caproic acid) via ultrafiltration in a bioprocess, which is not a toxicokinetic parameter in a biological system. |
| popPK | Marlin_2025 | irrelevant | 0 | 0 | The paper focuses on PSMA-targeted radiopharmaceuticals for imaging and does not report toxicokinetic parameters for caproic acid. |
| popPK | Metcalf_2019 | irrelevant | 0 | 0 | The paper studies cabazitaxel nanoparticles and does not report toxicokinetic parameters for caproic acid. |
| popPK | Mogensen_1977 | irrelevant | 0 | 0 | The paper focuses on renal tubular protein reabsorption inhibition using epsilon-amino-caproic acid as a tool, not on the kinetic parameters (half-life, clearance, etc.) of caproic acid. |
| popPK | Novotná_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the glutamine antagonist prodrugs (P11, DRP-104) and their active metabolite DON, not for caproic acid. |
| popPK | Onsrud_1985 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of hydroxyprogesterone caproate (a progestin), not caproic acid, and the evidence contains no kinetic parameters for the target substance. |
| popPK | Palanisamy_2019 | irrelevant | 0 | 0 | The paper is a molecular docking and pharmacophore study of phytochemicals from Euclea crispa targeting HER2, and does not report any toxicokinetic parameters for caproic acid. |
| popPK | Papadopoulos_2012 | irrelevant | 0 | 0 | The paper focuses on the neurosteroid drug candidate caprospinol, not caproic acid (hexanoic acid); caproic acid is only part of the ester structure of the subject compound. |
| popPK | Pellowska_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for MH84, not caproic acid, and does not provide kinetic parameters for the target substance. |
| popPK | Shaik_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 17-hydroxyprogesterone caproate, not caproic acid (hexanoic acid). |
| PGx | Sharma_2008 | not_relevant | 0 | 0 | The study identifies CYP3A4/5 as the metabolizing enzymes for 17-OHPC but does not report any pharmacogenomic effect (i.e., association between a specific gene variant and a PK/PD parameter). |
| popPK | Sharma_2010 | irrelevant | 0 | 0 | The paper studies the metabolism of 17alpha-hydroxyprogesterone caproate, not caproic acid, and contains no kinetic parameters for caproic acid. |
| popPK | Sharma_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 17α-hydroxyprogesterone caproate, which is a distinct steroid derivative, not caproic acid (hexanoic acid). |
| popPK | Shimada_2018 | irrelevant | 0 | 0 | The paper studies alkylsulfanyl analogs (hexanoic acid derivatives) as ligands, not caproic acid (hexanoic acid) toxicokinetics, and no kinetic parameters for caproic acid are reported. |
| popPK | Shirai_1992 | irrelevant | 0 | 0 | The paper reports triglyceride levels and enzymatic rates related to a lipoprotein lipase defect, but does not provide toxicokinetic parameters (half-life, clearance, partition coefficients) for caproic acid. |
| popPK | Spivak_2018 | irrelevant | 0 | 0 | The paper focuses on the synthesis of ingenol derivatives and their ability to reverse HIV latency, with no kinetic data for caproic acid. |
| popPK | Stubbs_2021 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the ketone ester BH-BD and its metabolite BHB, with caproic acid (hexanoate) appearing only as a hydrolysis product and not as the primary subject of kinetic analysis, and no numeric parameters for caproic acid are provided. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring static serum concentrations of caproic acid in relation to antibiotic exposure and depression, reporting no toxicokinetic parameters (half-life, clearance, rate constants) for caproic acid. |
| popPK | Takács-Novák_1999 | irrelevant | 0 | 0 | The paper studies the partition coefficients of quaternary ammonium drug counter-ions (caproate) in vitro, not the toxicokinetic parameters of caproic acid itself. |
| popPK | Tao_2023 | irrelevant | 0 | 0 | The paper is a review on the ethnopharmacology of Rubus idaeus and does not report any quantitative toxicokinetic parameters for caproic acid. |
| popPK | Teichert_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alpha-lipoic acid, not caproic acid, and does not report kinetic parameters for caproic acid. |
| popPK | Teichert_2005 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for alpha-lipoic acid, not caproic acid. |
| popPK | Teixeira_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a radiolabeled peptide (99mTc-HYNIC-Ahx-cycMSH) where caproic acid (hexanoic acid) is merely a structural linker, not the subject substance. |
| popPK | Troisi_2026 | irrelevant | 0 | 0 | The paper reports metabolomic changes in a clinical cohort as biomarkers for MASLD, containing no quantitative toxicokinetic parameters (half-life, clearance, etc.) for caproic acid. |
| PGx | Troisi_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of a diet on caproic acid levels in MASLD patients, not the pharmacokinetics or pharmacodynamics of caproic acid as a drug. |
| popPK | Trüssel_2009 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of antibody fragments (scFv-F8) and does not report any toxicokinetic parameters for caproic acid. |
| popPK | Uehara_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 99mTc-labeled imaging probes (RGD peptides) and mentions hexanoic acid/caproic acid derivatives only as chemical linkers or reagents, not as the subject substance. |
| popPK | Umehara_2000 | irrelevant | 0 | 0 | The paper focuses on the metabolism of olanexidine in dog liver microsomes, and caproic acid is not the subject of toxicokinetic characterization (it appears only as a metabolic byproduct of a different substance's side chain cleavage in an in vitro system, not as the primary subject of TK parameter extraction). |
| popPK | Virseda-Berdices_2022 | irrelevant | 0 | 0 | The paper reports changes in plasma levels of caproic_acid (as 2-keto-n-caproic acid) in a clinical cohort but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Xu_2012 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of 18F-labeled pyrazolo[1,5-a]pyrimidine derivatives in mice, and does not mention caproic acid or report any kinetic parameters for it. |
| popPK | Yamamura_1999 | irrelevant | 1 | 0 | The paper studies a technetium-labeled radiopharmaceutical analogue of hexanoic acid (caproic acid) for liver imaging, not the pharmacokinetic parameters of caproic acid itself. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The paper focuses on the physicochemical properties and transfection efficiency of lipid nanoparticles, with no toxicokinetic parameters for caproic acid. |
| popPK | Zahradnik_1995 | irrelevant | 0 | 0 | no_text gate: only 17 chars of text extracted (&lt; 400) |
| popPK | Zeng_2013 | irrelevant | 0 | 0 | The paper studies the biodistribution of Technetium-99m labeled fatty acid conjugates (technetium complexes), not the toxicokinetics of the subject substance caproic acid itself. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | The paper describes an analytical method for 17alpha-hydroxyprogesterone caproate, not caproic acid (hexanoic acid), and contains no kinetic parameters for the target substance. |
| popPK | Zhong_2020 | irrelevant | 0 | 0 | The paper focuses on tizanidine formulation and pharmacokinetics, using caproic acid solely as a co-exposure/counterion for ion-pair formation, not as the subject substance. |
| popPK | Zlotnikov_2025 | irrelevant | 0 | 0 | The paper focuses on L-asparaginase and polyamine transporters in cancer cells, mentioning caproate only as a competitive inhibitor ligand, not as the subject of toxicokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcaproic_acid%5D&body=Drug%3A%20caproic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_caproic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 23:13 UTC</sub>
