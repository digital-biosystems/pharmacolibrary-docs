<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Gliotoxin&quot;}]"></div>

# Gliotoxin

- **generic name:** Gliotoxin
- **T3DB:** [T3D3604](http://www.t3db.ca/toxins/T3D3604) · **PubChem:** [CID 6223](https://pubchem.ncbi.nlm.nih.gov/compound/6223)

## About

Gliotoxin is a sulfur-containing antibiotic produced by several species of fungi, some of which are pathogens of humans such as Aspergillus, and also by species of Trichoderma, and Penicillium. Gliotoxin possesses immunosuppressive properties as it may suppress and cause apoptosis in certain types of cells of the immune system, including neutrophils, eosinophils, granulocytes, macrophages, and thymocytes.

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Gliotoxin is a sulfur-containing antibiotic produced by several species of fungi, some of which are pathogens of humans such as Aspergillus, and also by species of Trichoderma, and Penicillium. Gliotoxin possesses immunosuppressive properties.
- **Mechanism of toxicity:** Gliotoxin possesses immunosuppressive properties as it may suppress and cause apoptosis in certain types of cells of the immune system, including neutrophils, eosinophils, granulocytes, macrophages, and thymocytes. It also acts as an inhibitor of farnesyl transferase. …
- **Health effects:** Gliotoxin has immunosuppressive effects. It is also cytotoxic and causes neurite degeneration.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3604">T3DB T3D3604</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 67-99-2</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 13:23 | 13:26 | 0/0/0 | 0/0/0 | 0/0/0 | 433,321/9,739 | ollama / glm-5.3-flash | 17 | 2/15 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bernardo_2003.pdf` | Bernardo PH et al., A novel redox mechanism for the glutath…, The Journal of biological c… (2003) | popPK | 5 | [10.1074/jbc.M304825200](https://doi.org/10.1074/jbc.M304825200) | [12947114](https://pubmed.ncbi.nlm.nih.gov/12947114) | Quantitative uptake kinetics of gliotoxin in a cell line (1500-fold accumulation, model prediction) but only limited numeric parameters in the abstract, no full kinetic constants. |

<sub>queue written 2026-11-15 13:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alanzi_2024 | irrelevant | 0 | 0 | Purely computational docking/MD study using gliotoxin as a ligand; no kinetic, half-life, or disposition parameters measured in any organism. |
| popPK | Arias_2018 | irrelevant | 0 | 0 | Review of immunology/virulence role of gliotoxin with no kinetic parameters of any kind reported and no numeric values present. |
| popPK | Banerjee_2016 | irrelevant | 0 | 0 | Gliotoxin appears only as an experimental inhibitor of astrocytes, not as the subject of any kinetic parameter. |
| popPK | Berger_2025 | irrelevant | 1 | 2 | Analytical biomonitoring method paper; gliotoxin appears only as an analyte with LOQ and validation data, no kinetic parameters; the only kinetics cited are for AFB1, OTA and CIT. |
| popPK | Berger_2025_2 | irrelevant | 1 | 1 | This is an analytical biomonitoring method paper (LC-MS/MS in urine); the only numeric gliotoxin value is a quantitation limit (1.5 μg/l), with no kinetic parameters — the toxicokinetics section explicitly states there are almost no data for GT. |
| popPK | Bernardo_2003 | relevant | 5 | 4 | Quantitative uptake kinetics of gliotoxin in a cell line (1500-fold accumulation, model prediction) but only limited numeric parameters in the abstract, no full kinetic constants. |
| popPK | Boesewetter_2006 | irrelevant | 0 | 0 | In vitro gene expression/dose-response study of gliotoxin-exposed A549 cells with no kinetic parameters (no half-life, clearance, rate constants, or partition coefficients). |
| popPK | Bossou_2017 | irrelevant | 1 | 2 | In vitro cytotoxicity/inflammatory study in HCE cells with applied concentrations and time-course toxicity curves; no toxicokinetic parameters (half-life, clearance, rate constants, partitioning) for gliotoxin are reported. |
| popPK | Chang_2013 | irrelevant | 0 | 0 | This is a biosynthesis/enzymology study in a fungal expression system with no toxicokinetic parameters or in vivo kinetic data for gliotoxin. |
| popPK | Chotirmall_2014 | irrelevant | 0 | 0 | Review of Aspergillus immune evasion mechanisms with no quantitative toxicokinetic parameters for gliotoxin. |
| popPK | Comas_2019 | irrelevant | 1 | 2 | A nanoparticle drug-delivery study with only cytotoxicity (IC50) and cell uptake data; no toxicokinetic parameters (half-life, clearance, rate constants, partition coefficients) for gliotoxin measured. |
| popPK | Dayeh_2005 | irrelevant | 1 | 0 | In vitro toxicity screening (Toxikokinetic?) with only dose-response comparison of sensitivity; no kinetic parameters for gliotoxin. |
| popPK | De_2019 | irrelevant | 1 | 0 | Biomonitoring/exposure study measuring mycotoxin levels in children with no kinetic parameters; gliotoxin is a co-measured exposure, not a kinetic subject. |
| popPK | Delbaje_2025 | irrelevant | 1 | 0 | A review on GT biosynthesis and self-defense mechanisms in fungi with no quantitative toxicokinetic parameters for gliotoxin reported. |
| popPK | Elsharkawy_2005 | irrelevant | 0 | 0 | This is a review of hepatic stellate cell apoptosis mechanisms mentioning gliotoxin only as a potential therapeutic agent, with no kinetic parameters at all. |
| popPK | Favilla_2006 | irrelevant | 0 | 0 | This is a toxicity screening study reporting LC50 values for seven compounds including gliotoxin in invertebrates — lethality endpoints, not any kinetic parameter (half-life, clearance, rate constant, partition coefficient, etc.). |
| popPK | Frenzel_2011 | irrelevant | 0 | 0 | Gliotoxin only appears as one of 80 screened cytotoxic compounds in an in vitro MYC drug-sensitivity study; no toxicokinetic parameters of any kind are reported for it. |
| popPK | Gräbsch_2006 | irrelevant | 1 | 4 | Only EC50 dose-response values from an in vitro protozoan cytotoxicity assay; no toxicokinetic parameters. |
| popPK | Guo_2011 | irrelevant | 1 | 3 | It is a compound-identification and molluscicidal (LC50) potency study — LC50 values are dose-response/ecotoxicity, not toxicokinetic parameters (no half-life, clearance, rate constants, or partition coefficients); gliotoxin is the subject but no kinetic parameter is reported. |
| popPK | Guo_2019 | irrelevant | 1 | 0 | This is a photosynthesis/herbicide mechanism study (PSII inhibition, docking); no toxicokinetic parameters (half-life, clearance, partitioning, PBPK) of gliotoxin. |
| popPK | Hara_1995 | irrelevant | 0 | 0 | Gliotoxin is used only as a farnesyltransferase inhibitor drug in a C. elegans phenotype assay; no kinetic parameters of any kind are reported. |
| popPK | Hatabu_2006 | irrelevant | 0 | 0 | In vitro antimalarial efficacy study with no kinetic parameters for gliotoxin measured. |
| popPK | Huber_2022 | irrelevant | 0 | 0 | Review of ETP biosynthesis and biological activities; no toxicokinetic parameters for gliotoxin reported. |
| popPK | Hurne_2000 | irrelevant | 0 | 0 | In vitro mechanistic study of gliotoxin's action on rabbit muscle creatine kinase; no toxicokinetic parameters of gliotoxin itself. |
| popPK | Hurne_2002 | irrelevant | 1 | 1 | In vitro mechanistic study of calcium influx in murine thymocytes with no toxicokinetic parameters for gliotoxin. |
| popPK | Illek_2023 | irrelevant | 2 | 3 | Gliotoxin appears only as a pharmacological tool (10 µM) to probe CFTR chloride currents and epithelial resistance in vitro; no toxicokinetic parameters (half-life, clearance, Vmax/Km, partition coefficients) are reported. |
| PGx | Jain_2018 | not_relevant | 1 | 2 | Paper describes gene regulation of gliotoxin biosynthesis/virulence in A. fumigatus, not a pharmacokinetic or pharmacodynamic drug parameter affected by a genotype. |
| popPK | Johns_2017 | irrelevant | 0 | 0 | The paper studies phosphopantetheinyl transferase PptA in Aspergillus fumigatus; gliotoxin appears only as a secondary metabolite detected via LC-MS, with no kinetic parameters of its disposition. |
| popPK | Karus_2015 | irrelevant | 0 | 0 | Gliotoxin (NaFAc) appears only as a metabolic perturbation tool in a neurophysiology study with no kinetic parameters for the substance itself. |
| popPK | Kroll_1999 | irrelevant | 0 | 0 | Mechanistic in vitro study of proteasome inhibition with no toxicokinetic parameters for gliotoxin. |
| popPK | Lantry_2000 | irrelevant | 0 | 0 | This is a chemoprevention efficacy study with tumor incidence/multiplicity outcomes only; no kinetic parameters (half-life, clearance, Vd, rates) for gliotoxin are reported. |
| popPK | Lorito_1994 | irrelevant | 1 | 1 | Gliotoxin is merely one of several antifungal compounds in an in vitro spore-germination ED50 synergy bioassay, with no toxicokinetic parameters; ED50 values belong to efficacy against a phytopathogenic fungus, not disposition kinetics. |
| popPK | MASON_1951 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| popPK | McBean_1994 | irrelevant | 0 | 0 | The substance studied is alpha-aminoadipate (a "gliotoxic" compound), not the mycotoxin gliotoxin, and Ki values are enzyme/transport inhibition constants, not gliotoxin toxicokinetics. |
| popPK | McMahon_2012 | irrelevant | 0 | 0 | This is a chemistry/synthesis paper with no kinetic parameters for gliotoxin of any kind. |
| popPK | McMinn_1991 | irrelevant | 0 | 0 | An immunological effect study in mouse skin with no kinetic parameters (no half-life, rate constant, or concentrations); "prolonged retention" is only qualitative. |
| popPK | Mizuma_2002 | irrelevant | 3 | 5 | The substance studied is cyclo(Phe-Ser), a precursor of gliotoxin (not gliotoxin itself), with absorption transport parameters measured in isolated rat intestine; some kinetic constants are described but full numeric values are not clearly presented in the provided abstract. |
| popPK | Mizuma_2003 | irrelevant | 1 | 0 | The kinetic parameters (Vmax, Km, CLabs, CLpas) are for cyclo(Phe-Ser), a biosynthetic intermediate/precursor related to gliotoxin, not for gliotoxin itself; no gliotoxin kinetic values appear. |
| popPK | Monti_1999 | irrelevant | 0 | 0 | Aspirochlorine mechanism-of-action study; gliotoxin appears only as a comparator mycotoxin with no kinetic parameters of any kind. |
| popPK | OMalley_1994 | irrelevant | 0 | 0 | Gliotoxin appears only as a descriptive term for a gliotoxic reagent (alpha-aminoadipic acid), with no kinetic parameters of gliotoxin itself. |
| popPK | Orr_2004 | irrelevant | 2 | 3 | Mechanistic in-vitro cell study with only exposure concentrations and uptake statements ("rapid accumulation/sequestration"), no kinetic parameters (half-life, rate constants, Vmax/Km, clearance) reported numerically. |
| popPK | Ottenheijm_1978 | irrelevant | 0 | 0 | This is a chemistry paper on resolution and crystal structure of gliotoxin analogues, with no toxicokinetic parameters. |
| PGx | Penalva-Olcina_2024 | not_relevant | 1 | 2 | Ecotoxicity study in Daphnia magna with no gene variant/genotype altering PK/PD parameters of gliotoxin. |
| popPK | Peterson_2010 | irrelevant | 1 | 1 | In vitro cytotoxicity/dose-response study of gliotoxin in cell lines with no toxicokinetic parameters (no half-life, clearance, rate constants, or partition coefficients). |
| popPK | Renshaw_2003 | irrelevant | 0 | 0 | Gliotoxin is used only as an NF-kappaB inhibitor tool compound in an apoptosis assay; no kinetic parameters for gliotoxin appear. |
| popPK | STANLEY_1946 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Scherlach_2021 | irrelevant | 1 | 0 | This is a structural/enzymology study of the gliotoxin biosynthesis enzyme GliG, with no toxicokinetic parameters (half-life, clearance, partitioning, etc.) for gliotoxin in any organism; residual activity percentages are not TK parameters. |
| popPK | Schmied_2026 | irrelevant | 0 | 0 | Exposure biomonitoring study; gliotoxin was not detected in any urine samples and no kinetic parameters were measured. |
| popPK | Serrander_2007 | irrelevant | 0 | 0 | Gliotoxin appears only as a failed NOX4 inhibitor with IC50&gt;100 µM reported; no kinetic parameters of gliotoxin disposition. |
| popPK | Stoszko_2020 | irrelevant | 0 | 0 | This is a mechanistic HIV latency-reversal study; it contains no toxicokinetic parameters (half-life, clearance, Vd, rate constants) for gliotoxin, only in vitro potency and cytotoxicity concentrations. |
| popPK | Trown_1972 | irrelevant | 1 | 1 | This is a mechanism-of-action study on antiviral activity; no quantitative toxicokinetic parameters for gliotoxin (half-life, clearance, rate constants, etc.) are reported. |
| popPK | Vidal-García_2018 | irrelevant | 2 | 4 | This is a biomarker/microbial-production study measuring bmGT (a fungal metabolite) concentrations in cultures and patient sera; no kinetic parameters (half-life, clearance, rate constants, model) for gliotoxin disposition are reported. |
| popPK | Waring_1996 | irrelevant | 2 | 0 | This is a review of gliotoxin's biological activities with no numeric toxicokinetic parameters of its own reported. |
| popPK | Welch_2014 | irrelevant | 0 | 0 | A chemistry review of isolation, biosynthesis and synthesis with no toxicokinetic parameters for gliotoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgliotoxin%5D&body=Drug%3A%20gliotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_gliotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
