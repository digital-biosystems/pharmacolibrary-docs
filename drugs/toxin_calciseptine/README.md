<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Calciseptine&quot;}]"></div>

# Calciseptine

- **generic name:** Calciseptine
- **T3DB:** [T3D2539](http://www.t3db.ca/toxins/T3D2539) · **PubChem:** none

## About

Calciseptine is a peptide toxin produced by the Black mamba (Dendroaspis polylepis polylepis). It is a smooth muscle relaxant and an inhibitor of cardiac contractions.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Calciseptine is a peptide toxin produced by the Black mamba (Dendroaspis polylepis polylepis).
- **Mechanism of toxicity:** Calciseptine is a specific blocker of the L-type calcium channel, and as a result also a smooth muscle relaxant and an inhibitor of cardiac contractions.
- **Health effects:** Calciseptine is neurotoxic.
- **Acute toxicity:** LD50: 0.32 mg/kg (Subcutaneous, Mouse)
LD50: 0.25 mg/kg (Intravenous, Mouse)
LD50: 0.941 (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2539">T3DB T3D2539</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 134710-25-1</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 20:07 | 1:17:30 | 0/0/0 | 0/0/0 | 0/0/0 | 1,717,780/40,857 | einfracz / qwen3.8-27b | 94 | 20/74 | 94/0 | 0 |

## Coverage

- **PubMed hits:** 913 matched, 264 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2019.pdf` | Zhou L et al., Absolute cross sections for chemoradiat…, The Journal of chemical phy… (2019) | pd | 5 | [10.1063/1.5090259](https://doi.org/10.1063/1.5090259) | [31117770](https://www.ncbi.nlm.nih.gov/pubmed/31117770) | metadata signals extractable PD data (exposure-response) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klotz_2003.pdf` | Klotz U, Tramadol--the impact of its pharmacokin…, Arzneimittel-Forschung (2003) | pgx | 7 | [10.1055/s-0031-1299812](https://doi.org/10.1055/s-0031-1299812) | [14650359](https://www.ncbi.nlm.nih.gov/pubmed/14650359) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Trexler_2019.pdf` | Trexler AW et al., 2,4,6-Tribromophenol Exposure Decreases…, Toxicological sciences : an… (2019) | pgx | 7 | [10.1093/toxsci/kfz155](https://doi.org/10.1093/toxsci/kfz155) | [31368499](https://www.ncbi.nlm.nih.gov/pubmed/31368499) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Shigeta_2016.pdf` | Shigeta M et al., Rapid and efficient analysis of gene fu…, Genes to cells : devoted to… (2016) | pgx | 5 | [10.1111/gtc.12379](https://doi.org/10.1111/gtc.12379) | [27219625](https://www.ncbi.nlm.nih.gov/pubmed/27219625) | metadata signals extractable PGX data (slc45a2) |
| `Zimmermann_1995.pdf` | Zimmermann T et al., Prediction of phenotype for dextrometho…, Arzneimittel-Forschung (1995) | pgx | 5 |  | [7893267](https://www.ncbi.nlm.nih.gov/pubmed/7893267) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-09 19:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agius_2021 | not_relevant | 0 | 0 | The paper focuses on the whole genome sequencing and pathogenicity of a novel bacterial species, containing no information on pharmacogenomics, calciseptine, or PK/PD parameters. |
| popPK | Ahuja_2022 | irrelevant | 0 | 0 | The paper is a review on occupational exposure limits for pharmaceuticals (levofloxacin, dienogest, ASA) and does not mention or report kinetic parameters for calciseptine. |
| popPK | Aiassa_2019 | irrelevant | 0 | 0 | The paper is an epidemiological study on genetic damage in humans and does not report any toxicokinetic parameters for calciseptine. |
| PGx | Akhtar_2026 | not_relevant | 0 | 0 | The paper is a broad review on CRISPR-Cas9 in pharmacology and does not mention calciseptine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Amiri_2013 | irrelevant | 0 | 0 | The paper studies the physical and magnetic properties of superparamagnetic iron oxide nanoparticles (SPIONs) and their protein coronas for MRI contrast, and does not mention or measure calciseptine. |
| PGx | Anderson_1987 | not_relevant | 0 | 0 | The paper reports on skin tumorigenesis in mice using chemical carcinogens and UV light, with no mention of calciseptine or pharmacogenomics. |
| popPK | Angeli_2023 | irrelevant | 0 | 0 | The paper studies substituted furan sulfonamides as carbonic anhydrase inhibitors and contains no data, parameters, or mention of calciseptine. |
| popPK | Angeli_2024 | irrelevant | 0 | 0 | The paper evaluates phthalazine sulfonamide derivatives as carbonic anhydrase inhibitors and does not study the toxicokinetics of calciseptine. |
| PGx | Aronson_2008 | not_relevant | 0 | 0 | The paper studies clevidipine, not calciseptine, and does not report pharmacogenomic effects. |
| popPK | Arthur_2015 | irrelevant | 0 | 0 | The paper reports kinetic parameters for S9632 (CAS 1359963-68-0), not calciseptine. |
| popPK | Azuma_2018 | irrelevant | 0 | 0 | The paper focuses on the removal of pharmaceutical compounds from wastewater and does not report toxicokinetic parameters for calciseptine. |
| popPK | Bailly_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for caspofungin, not calciseptine. |
| popPK | Barbeau_2015 | irrelevant | 0 | 0 | The paper studies polycyclic aromatic hydrocarbons (pyrene/BaP) and their metabolites, not calciseptine. |
| popPK | Bhowmik_2026 | irrelevant | 0 | 0 | The paper focuses on the bioinformatics analysis of Carbonic Anhydrase-Related Proteins (CA VIII, X, XI) in cancer and neurological diseases and does not contain any toxicokinetic data or mention of the substance calciseptine. |
| popPK | Bienert_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for propofol, not calciseptine. |
| popPK | Bigelow_2012 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of fipronil, not calciseptine. |
| popPK | Bonassi_1999 | irrelevant | 0 | 0 | The paper discusses epidemiological biomarkers (chromosomal aberrations) and environmental exposure assessment generally, with no mention of calciseptine or any specific toxicokinetic parameters. |
| PGx | Breuel_1991 | not_relevant | 0 | 0 | The paper discusses prajmalium, not calciseptine. |
| PGx | Brizzolara_2020 | not_relevant | 0 | 0 | The paper discusses postharvest fruit physiology and storage technologies, which is unrelated to the pharmacokinetics of the antibiotic calciseptine. |
| popPK | Bruzzese_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for rifametane, not calciseptine. |
| popPK | Cannon_2019 | irrelevant | 0 | 0 | The paper investigates the effects of Tetrabromobisphenol A (TBBPA) on ABC transporters in rats, and does not mention or study calciseptine. |
| PGx | Capasso_2024 | not_relevant | 0 | 0 | The paper discusses bacterial carbonic anhydrases and their properties, which is completely unrelated to the pharmacokinetics or pharmacodynamics of calciseptine or any human pharmacogenomic effect. |
| popPK | Caricato_2019 | irrelevant | 0 | 0 | The paper focuses on carbonic anhydrase biomarkers in mussels exposed to general pollution, with no mention of calciseptine or its kinetic parameters. |
| popPK | Celikler_2009 | irrelevant | 0 | 0 | The paper is a biomonitoring study of genotoxic risk in humans exposed to electromagnetic fields and does not involve calciseptine or report any toxicokinetic parameters for it. |
| popPK | Chen_2001 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for HI-236, not calciseptine. |
| popPK | Cheng_2012 | irrelevant | 0 | 0 | The paper describes a general ADMET database tool and does not report specific toxicokinetic parameters for calciseptine. |
| PGx | Collette_2021 | not_relevant | 0 | 0 | The paper investigates clopidogrel resistance in carotid artery stenting, not calciseptine. |
| popPK | Corley_1994 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for 2-butoxyethanol, not calciseptine. |
| popPK | Cornejo_2018 | irrelevant | 0 | 0 | The paper investigates the tissue distribution and electrophysiology of the Kir7.1 potassium channel in mice and contains no data for calciseptine. |
| popPK | Cornforth_2023 | irrelevant | 0 | 0 | The paper investigates chromosome aberrations in human lymphocytes induced by radiation and contains no data regarding the substance calciseptine. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper is a review of autoimmune hemolytic anemia and does not mention calciseptine or pharmacogenomic effects on its PK/PD. |
| popPK | Cox_2024 | irrelevant | 0 | 0 | The paper focuses on epidemiological causation models for benzene and formaldehyde regarding acute myeloid leukemia, with no mention of calciseptine or its toxicokinetic parameters. |
| popPK | DAnza_2025 | irrelevant | 0 | 0 | The study focuses on genotoxic biomarkers (aneuploidy, chromosomal aberrations) in donkeys and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Demchuk_2018 | irrelevant | 0 | 0 | The paper focuses on dimethyl sulfide (DMS), not calciseptine, and reports toxic load exponents for DMS rather than kinetic parameters for the target substance. |
| popPK | Desai_2024 | irrelevant | 0 | 0 | The paper describes a QSP model for CRISPR-Cas gene therapy (LNP, mRNA, sgRNA) and contains no data for the substance calciseptine. |
| popPK | Dichiera_2023 | irrelevant | 0 | 0 | The paper is a functional genomics and phylogenetic study of carbonic anhydrase 4 in teleost fish and contains no data related to the toxicokinetics of calciseptine. |
| popPK | Dollinger_2018 | irrelevant | 0 | 0 | The paper studies the environmental transport of chlorpyrifos with surfactants and does not contain any data or kinetic parameters for calciseptine. |
| PGx | Duconge_2017 | not_relevant | 0 | 0 | The paper discusses clopidogrel pharmacogenetics, not calciseptine. |
| popPK | Durán-Vinet_2021 | irrelevant | 0 | 0 | The paper is a review on CRISPR/Cas technologies for monitoring harmful algae blooms and contains no toxicokinetic data for calciseptine. |
| popPK | Durán-Vinet_2023 | irrelevant | 0 | 0 | The paper discusses CRISPR-Cas technology for marine biomonitoring and does not contain any data or parameters for the substance calciseptine. |
| popPK | Elias_2026 | irrelevant | 0 | 0 | The paper is a review on gene editing strategies for neurological disorders and does not mention calciseptine or provide any toxicokinetic parameters. |
| popPK | Ellis-Hutchings_2014 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and mode of action of sulfoxaflor, not calciseptine. |
| popPK | Elsherbiny_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on genotoxicity in healthcare workers exposed to chemotherapeutic drugs and does not report kinetic parameters for calciseptine. |
| PGx | Fatima_2025 | not_relevant | 0 | 0 | The text is a general overview of pharmacogenomics and CRISPR technologies and does not report any specific pharmacokinetic or pharmacodynamic effects of a gene variant on the drug calciseptine. |
| popPK | Fay_1999 | irrelevant | 0 | 0 | The paper is a toxicological profile for Di(2-ethylhexyl)phthalate (DEHP), not calciseptine, and contains no kinetic parameters for the target substance. |
| PGx | Fijałkowska_2025 | not_relevant | 0 | 0 | The paper describes in silico ADME properties of ACP-105 and does not report pharmacogenomic effects on PK/PD parameters of calciseptine. |
| popPK | Gallo_2021 | irrelevant | 0 | 0 | The paper is a review on extremophiles and environmental bioremediation and does not report any toxicokinetic parameters for calciseptine. |
| PGx | Gandon_2024 | not_relevant | 0 | 0 | The paper discusses evolutionary dynamics of pathogens and host resistance strategies using CRISPR systems, which is unrelated to pharmacogenomics or calciseptine. |
| popPK | García_2021 | irrelevant | 0 | 0 | The paper is a review of wastewater treatment technologies and does not report toxicokinetic parameters for calciseptine. |
| popPK | Goodman_2006 | irrelevant | 0 | 0 | The paper focuses on bisphenol A and does not contain any data or parameters for calciseptine. |
| PGx | Gopalakrishna_2023 | not_relevant | 0 | 0 | The paper investigates CRISPR-Cas9 transcriptional regulation and gene editing in Group B Streptococcus, and is completely unrelated to the pharmacokinetics or pharmacodynamics of calciseptine. |
| popPK | Gopinath_2001 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for zidovudine (AZT), not calciseptine. |
| popPK | Grimmer_1984 | irrelevant | 0 | 0 | The paper focuses on the carcinogenic potency of PAHs in exhaust condensate and does not contain any toxicokinetic parameters for calciseptine. |
| popPK | Grimmer_1987 | irrelevant | 0 | 0 | The paper reports on the carcinogenic potency and bioassay results of flue gas condensate fractions, not the toxicokinetic parameters (such as half-life, clearance, or partition coefficients) of calciseptine. |
| popPK | Groll_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for caspofungin and amphotericin B, not calciseptine. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for troxipide, not calciseptine. |
| popPK | Güngör_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and docking studies of carbonic anhydrase inhibitors and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Hajji_2014 | irrelevant | 0 | 0 | The paper focuses on polyphenol recovery from olive mill wastewater using aqueous two-phase systems and does not contain any toxicokinetic parameters for calciseptine. |
| popPK | Hamid_2013 | irrelevant | 0 | 0 | The paper studies the fate of 16 steroidal hormones during anaerobic digestion and does not mention or measure calciseptine. |
| popPK | Hao_2023 | irrelevant | 0 | 0 | The paper focuses on synthetic DNA biomarkers for cancer diagnostics and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Henderson_2005 | irrelevant | 0 | 0 | The paper is a review of the genotoxicity of styrene, not calciseptine, and does not report kinetic parameters for the target substance. |
| popPK | Hoffman_1991 | irrelevant | 0 | 0 | The paper reports toxicity data for ethylene oxide/propylene oxide copolymer (UCON 50-HB-5100), not calciseptine. |
| popPK | Hopf_2012 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of propylene glycol methyl ether (PGME), not calciseptine. |
| popPK | Hsiao_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for felodipine, not calciseptine. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper identifies a susceptibility gene (WDPCP) for coronary atherosclerosis using GWAS/TWAS and does not mention calciseptine or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The paper describes the genomic diversity and virulence of the bacterium Shewanella algae, not the pharmacokinetics or pharmacodynamics of the drug calciseptine. |
| popPK | Huuskonen_2022 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and risk assessment of ortho-toluidine (OT), not calciseptine; no parameters for the target substance are reported. |
| popPK | Huyen_2024 | irrelevant | 0 | 0 | The paper describes a diagnostic assay for Neisseria meningitidis and does not contain any toxicokinetic data for calciseptine. |
| popPK | Hyodo-Taguchi_1984 | irrelevant | 0 | 0 | The paper studies the carcinogenicity of MNNG in fish and does not mention or measure calciseptine. |
| popPK | Jekat_1992 | irrelevant | 0 | 0 | The paper studies the toxicology of 3-(4-methoxyphenyl)-3-methylbutylester (MPMBE), not calciseptine, and contains no kinetic parameters for calciseptine. |
| PGx | Jurowski_2026 | not_relevant | 0 | 0 | The paper concerns the ADME of phencyclidine analogues, not calciseptine. |
| popPK | Kacew_2020 | irrelevant | 0 | 0 | The paper discusses the toxicokinetics of Tetrabromobisphenol A (TBBPA), not calciseptine. |
| popPK | Kalinin_2026 | irrelevant | 0 | 0 | The paper discusses mitochondrial carbonic anhydrases and their metabolic roles, containing no data or kinetic parameters for calciseptine. |
| popPK | Kalliora_2018 | irrelevant | 0 | 0 | The paper is an epidemiological review of pesticide associations with congenital abnormalities and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Kanakia_2013 | irrelevant | 0 | 0 | The paper characterizes an MRI contrast agent (GNP-Dex) and does not contain data for calciseptine. |
| popPK | Karanewsky_2015 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for the compound S2227 (2-(4-methylphenoxy)-N-(1H-pyrazol-3-yl)-N-(2-thienylmethyl)acetamide), not calciseptine. |
| popPK | Karanewsky_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the umami flavor compound S3643, not calciseptine. |
| popPK | Kardailsky_2025 | irrelevant | 0 | 0 | The paper focuses on CRISPR-Cas applications for environmental DNA (eDNA) and RNA monitoring, and does not contain any toxicokinetic data or parameters for the substance calciseptine. |
| PGx | Karlikanovaite-Balikci_2019 | not_relevant | 0 | 0 | The paper focuses on activated sludge wastewater treatment systems and microbial kinetics, which is unrelated to the pharmacogenomics of calciseptine. |
| popPK | Kecskés_1993 | irrelevant | 0 | 0 | The paper focuses on the topical anti-inflammatory activity of methylprednisolone aceponate, not calciseptine, and contains no kinetic parameters for the target substance. |
| popPK | Kennedy_1985 | irrelevant | 0 | 0 | The paper studies the dermal toxicity of ammonium perfluorooctanoate, not calciseptine. |
| popPK | Kennedy_1986 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for ammonium perfluorooctanoate, not calciseptine. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for diclofenac sodium salt, not calciseptine. |
| popPK | Kinney_1989 | irrelevant | 0 | 0 | The paper studies the acute inhalation toxicity of ammonium perfluorononanoate, not calciseptine, and reports no kinetic parameters for the target substance. |
| popPK | Kirman_2011 | irrelevant | 0 | 0 | The paper discusses toxicokinetic parameters and biomonitoring equivalents for DDT and its metabolites (DDE, DDD), not calciseptine. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses the interaction potential of lercanidipine via CYP3A4 and P-gp but does not mention calciseptine or specific genetic variants affecting its PK/PD. |
| PGx | Klotz_2003 | not_relevant | 0 | 0 | The paper compares statins, not calciseptine, and discusses general drug interactions rather than pharmacogenomic effects. |
| PGx | Klotz_2003_2 | not_relevant | 0 | 0 | The paper discusses tramadol, not calciseptine. |
| popPK | Knudsen_2020 | irrelevant | 0 | 0 | The study characterizes the toxicokinetics of 2,4,6-tribromophenol (TBP), not calciseptine. |
| popPK | Kobayakawa_2020 | irrelevant | 0 | 0 | The paper studies Kif1c and p130Cas in osteoclasts and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Kojis_2026 | irrelevant | 0 | 0 | The paper is a review of carbonic anhydrases and does not contain any kinetic data for calciseptine. |
| PGx | Kovalev_2024 | not_relevant | 0 | 0 | The paper is a review on genetic engineering and pathogen resistance in poplar trees and does not discuss calciseptine or human pharmacogenomics. |
| popPK | Krause_1995 | irrelevant | 0 | 0 | The paper investigates iopamidol and ioversol, not calciseptine. |
| popPK | Krystek_2019 | irrelevant | 0 | 0 | The paper focuses on the metabolite BDCPP of TDCPP and does not contain any data for calciseptine. |
| PGx | Kumbara_2025 | not_relevant | 0 | 0 | The paper focuses on CRISPR guide RNA design and genetic variation in gene editing targets, not pharmacokinetics or pharmacodynamics of the drug calciseptine. |
| PGx | Kumbara_2026 | not_relevant | 0 | 0 | The paper describes a computational tool for CRISPR guide RNA design and does not report on the pharmacokinetics or pharmacodynamics of calciseptine. |
| PGx | Laforest_2022 | not_relevant | 0 | 0 | The paper is a review on CRISPR gene-editing delivery mechanisms in plants and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calciseptine. |
| PGx | Larouche_2023 | not_relevant | 0 | 0 | The paper reviews lipid-lowering therapies (ANGPTL3/ApoC-III inhibitors) and does not mention the drug calciseptine or its pharmacokinetics/pharmacodynamics. |
| PGx | Latella_2016 | not_relevant | 0 | 0 | The paper studies gene editing (CRISPR/Cas9) of the RHO gene in a mouse model for Retinitis Pigmentosa, focusing on protein knock-down, and does not report pharmacokinetic or pharmacodynamic effects of any drug. |
| popPK | Lehmler_2022 | irrelevant | 0 | 0 | The paper is a systematic review of urinary 3-phenoxybenzoic acid (3-PBA) levels as a biomarker for pyrethroid exposure and does not report any data or kinetic parameters for calciseptine. |
| popPK | Leusch_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apafant and digoxin in mice, with no mention or data regarding calciseptine. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper focuses on detecting chromosomal abnormalities in spontaneous miscarriage using next-generation sequencing and does not discuss calciseptine pharmacokinetics or pharmacodynamics. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper reviews plant gene editing technologies and has no connection to the drug calciseptine or human pharmacogenomics. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for clopidogrel, not calciseptine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a computational network pharmacology study on coronary atherosclerosis and does not report toxicokinetic parameters for calciseptine. |
| popPK | Lilienblum_2016 | irrelevant | 0 | 0 | The paper is a safety opinion on Phenoxyethanol, a different substance from calciseptine. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for casirivimab and imdevimab, not calciseptine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a machine learning study on silkworm toxicity prediction and does not report toxicokinetic parameters for calciseptine. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper is a review on CRISPR genome editing in sugar crops and does not mention calciseptine, pharmacokinetics, or pharmacodynamics. |
| PGx | Lu_2021 | not_relevant | 0 | 0 | The paper is a review of CRISPR-Cas9 methods for creating animal models and does not report pharmacogenomic effects on calciseptine. |
| PGx | Lu_2021_2 | not_relevant | 0 | 0 | The paper discusses comparative genomics of Bifidobacterium bifidum strains and has no content related to the pharmacokinetics or pharmacodynamics of calciseptine. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The study investigates the therapeutic effects and mechanisms of Fuling-Zexie formula in a hyperuricemia mouse model, containing no data on calciseptine or pharmacogenomic interactions. |
| popPK | Lu_2024_2 | irrelevant | 0 | 0 | The paper is a review of environmental DNA monitoring technologies and does not contain any toxicokinetic parameters for calciseptine. |
| popPK | Luo_2014 | irrelevant | 0 | 0 | The paper is a review on micropollutants in wastewater treatment and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Luttringer_2003 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of epiroprim, not calciseptine. |
| popPK | MIlls_1981 | irrelevant | 0 | 0 | The paper investigates copper and molybdenum kinetics in rats, and calciseptine is not mentioned or measured. |
| popPK | Mahata_2003 | irrelevant | 0 | 0 | The paper reports on arsenic exposure and cytogenetic effects, and does not contain any data, parameters, or mentions of calciseptine. |
| popPK | Mahmudpour_2021 | irrelevant | 0 | 0 | The paper is a virtual screening study for TMPRSS2 inhibitors and does not contain any toxicokinetic parameters for calciseptine. |
| popPK | Mamidi_1995 | irrelevant | 0 | 0 | The paper reports tissue distribution data for clofazimine, not calciseptine. |
| popPK | Mateuca_2006 | irrelevant | 0 | 0 | The paper is a review of cytogenetic endpoints (chromosome aberrations and micronuclei) for genotoxicity and does not contain any toxicokinetic parameters or data for calciseptine. |
| popPK | Matsunaga_1991 | irrelevant | 0 | 0 | The paper reports kinetic parameters for sparfloxacin, not calciseptine. |
| popPK | Meek_2013 | irrelevant | 0 | 0 | The paper focuses on 2-butoxyethanol as a case study for PBPK modeling guidance, with no mention or data for calciseptine. |
| popPK | Meijer_2021 | irrelevant | 0 | 0 | The paper describes a database construction for Chemicals of Emerging Concern (CECs) and does not report specific toxicokinetic parameters for the substance calciseptine. |
| PGx | Migliore_2006 | not_relevant | 0 | 0 | The paper investigates the genotoxic effects of environmental styrene exposure and metabolic polymorphisms, not the pharmacokinetics or pharmacodynamics of the drug calciseptine. |
| PGx | Mishra_2026 | not_relevant | 0 | 0 | The paper is a perspective on diagnostic technologies (HTS and CRISPR) and does not discuss calciseptine or its pharmacokinetics/pharmacodynamics. |
| popPK | Miyakoda_1995 | irrelevant | 0 | 0 | The paper focuses on the mechanisms of action of pranidipine, not calciseptine, and does not report toxicokinetic parameters for the target substance. |
| popPK | Murawski_2020 | irrelevant | 0 | 0 | The paper reports biomonitoring concentrations of lysmeral metabolites, not kinetic parameters for calciseptine. |
| popPK | Nagao_1994 | irrelevant | 0 | 0 | The paper investigates the molecular biology and tissue distribution of carbonic anhydrase V and does not contain any toxicokinetic parameters for calciseptine. |
| popPK | Ni_2008 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of triptolide, not calciseptine. |
| popPK | Niazi_2019 | irrelevant | 0 | 0 | The paper is a genetic association study regarding chromosomal aberrations and does not contain any toxicokinetic data for calciseptine. |
| popPK | Nirel_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between particulate matter exposure and congenital anomalies, containing no toxicokinetic parameters for calciseptine. |
| popPK | Norppa_2001 | irrelevant | 0 | 0 | The paper discusses genetic polymorphisms and chromosome damage biomarkers but does not mention or provide any toxicokinetic data for calciseptine. |
| PGx | Norppa_2001 | not_relevant | 0 | 0 | The paper discusses genetic polymorphisms and their effects on genotoxicity but does not mention the drug calciseptine or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Norppa_2006 | not_relevant | 0 | 0 | The paper discusses chromosomal aberrations as cancer risk biomarkers and does not mention calciseptine or its pharmacokinetics/pharmacodynamics. |
| popPK | Ohtakara_2024 | irrelevant | 0 | 0 | The paper is a radiotherapy planning study for brain metastases and does not contain any toxicokinetic data or parameters for calciseptine. |
| popPK | Okladnikova_2005 | irrelevant | 0 | 0 | The paper investigates plutonium (239Pu) cytogenetics and does not report kinetic parameters for calciseptine. |
| popPK | Paiva_2011 | irrelevant | 0 | 0 | The paper reports genotoxicity endpoints in humans exposed to a pesticide mixture, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for calciseptine. |
| popPK | Pal_2023 | irrelevant | 0 | 0 | The paper is a review on CRISPR/Cas technology for algal bloom detection and contains no kinetic parameters for calciseptine. |
| popPK | Pal_2026 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Pandalai_2025 | irrelevant | 0 | 0 | The paper reports risk assessment data for glutaraldehyde, not calciseptine. |
| popPK | Pandey_2025 | irrelevant | 0 | 0 | The paper is a review on CRISPR-Cas gene editing technology and contains no mention of the substance calciseptine or any toxicokinetic parameters. |
| popPK | Parkkila_2026 | irrelevant | 0 | 0 | The paper is a review of carbonic anhydrase enzymes and does not contain any toxicokinetic data for calciseptine. |
| popPK | Parrott_2009 | irrelevant | 0 | 0 | The paper describes the evolution and characterization of noncoding RNAs (snaRs) in primates and contains no toxicokinetic data for calciseptine. |
| popPK | Parrott_2011 | irrelevant | 0 | 0 | The paper focuses on the evolution and expression of the snaR family of small non-coding RNAs and contains no data regarding the toxicokinetics of calciseptine. |
| popPK | Pastor-Arroyo_2021 | irrelevant | 0 | 0 | The paper studies phosphate transport in rats and does not mention or report any kinetic parameters for calciseptine. |
| popPK | Patel_2025 | irrelevant | 0 | 0 | The paper is a systematic review of occupational exposures to construction coating chemicals (isocyanates, epoxies, amines) and does not mention calciseptine or report any toxicokinetic parameters for it. |
| popPK | Phillippe_1994 | irrelevant | 0 | 0 | The paper studies myometrial contractions in rats using aluminum fluoride and does not mention or report kinetic parameters for calciseptine. |
| popPK | Pluym_2020 | irrelevant | 0 | 0 | The paper focuses on 7-hydroxycitronellal (7-HC) and reports biomonitoring exposure data, not toxicokinetic parameters for calciseptine. |
| PGx | Ramaiah_2019 | not_relevant | 0 | 0 | The paper studies immune escape mutations in Mycobacterium tuberculosis T-cell epitopes and does not involve the drug calciseptine or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Ramakrishnan_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of bortezomib in myeloma cell lines and does not mention or provide data for calciseptine. |
| popPK | Ren_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for chicoric acid (CA), not calciseptine. |
| popPK | Ristori_1989 | irrelevant | 0 | 0 | The paper studies plasma catecholamines in rainbow trout and does not mention or measure calciseptine. |
| PGx | Robertson_2025 | not_relevant | 0 | 0 | The paper is a review on CRISPR-Cas genome editing in yeast for metabolic engineering and does not involve calciseptine or its pharmacokinetics/pharmacodynamics. |
| popPK | Roegner_2018 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of a SERCA protein in blue crabs and does not contain any toxicokinetic parameters for the substance calciseptine. |
| PGx | Salehi_2021 | not_relevant | 0 | 0 | The paper studies the antifungal efficacy of caspofungin-coated nanoparticles in Candida, not a pharmacogenomic effect on the PK or PD of calciseptine. |
| popPK | Santovito_2014 | irrelevant | 0 | 0 | The paper is an epidemiological study on chromosomal damage in nurses and does not report any toxicokinetic parameters for calciseptine. |
| popPK | Santovito_2014_2 | irrelevant | 0 | 0 | The paper concerns radiology technicians and ionizing radiation, and contains no data on calciseptine. |
| popPK | Sarikaya_2007 | irrelevant | 0 | 0 | The paper investigates the toxicity of fenitrothion, not calciseptine. |
| popPK | Scherer_2017 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for lysmeral (lilial), not calciseptine. |
| popPK | Schmidt_2020 | irrelevant | 0 | 0 | The paper investigates the role of carbonic anhydrase inhibitors (acetazolamide, etc.) in fear extinction in rats and does not contain any data regarding calciseptine. |
| popPK | Scholten_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis of benzene exposure and genotoxic markers (chromosomal aberrations/micronuclei) and does not report any toxicokinetic parameters for calciseptine. |
| PGx | Schubert_2026 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of CYP2C19 affecting clopidogrel and mavacamten, not calciseptine. |
| PGx | Seth_2013 | not_relevant | 0 | 0 | The paper is a review about using zebrafish to model metabolic disease and does not mention calciseptine or report any pharmacokinetic/pharmacodynamic effects. |
| PGx | Sharrar_2024 | not_relevant | 0 | 0 | The paper describes a gene editing tool (AiEvo2) and has no content related to the drug calciseptine or its pharmacokinetics/pharmacodynamics. |
| PGx | Shi_2022 | not_relevant | 0 | 0 | The paper discusses genetic variants in fish affecting feed conversion efficiency, not a pharmacogenomic effect of calciseptine. |
| PGx | Shigeta_2016 | not_relevant | 0 | 0 | The paper describes a CRISPR-Cas9 gene editing method in Xenopus tropicalis and does not report any pharmacokinetic or pharmacodynamic data for calciseptine or any other drug. |
| PGx | Shimizu_1992 | not_relevant | 0 | 0 | The paper studies metoprolol, not calciseptine. |
| popPK | Silano_2019 | irrelevant | 0 | 0 | The paper assesses the toxicokinetics and safety of trimellitic acid, tris(2-ethylhexyl) ester, not calciseptine. |
| popPK | Silano_2020 | irrelevant | 0 | 0 | The paper evaluates the safety and migration of styrene (CAS 100-42-5), not calciseptine, and contains no kinetic parameters for the target substance. |
| popPK | Silvestre_2020 | irrelevant | 0 | 0 | The paper focuses on BTEX (benzene, toluene, ethylbenzene, xylenes) exposure and epigenetic changes, with no mention or data regarding calciseptine. |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetic modeling for aripiprazole, not calciseptine. |
| PGx | Singh_2023 | not_relevant | 0 | 0 | The paper reviews engineering microbial cell factories for bioactive molecule production, containing no clinical pharmacogenomic or PK/PD data for calciseptine. |
| PGx | Small_2023 | not_relevant | 0 | 0 | The paper reports a GWAS for aortic stenosis, not a pharmacogenomic study of calciseptine's PK or PD. |
| popPK | Spînu_2022 | irrelevant | 0 | 0 | The paper describes a probabilistic AOP model for developmental neurotoxicity using a dataset of 88 compounds, but does not report any quantitative toxicokinetic parameters for calciseptine. |
| popPK | Srinivas_2010 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic changes in acute renal failure rat models for various drugs, but it does not mention calciseptine or provide any kinetic parameters for it. |
| popPK | Stadler_2022 | irrelevant | 0 | 0 | The paper concerns ethylenethiourea (ETU), a metabolite of dithiocarbamate fungicides, and does not mention or provide kinetic parameters for calciseptine. |
| popPK | Stoeckelhuber_2017 | irrelevant | 0 | 0 | The paper focuses on 7-hydroxycitronellal, not calciseptine, and reports no kinetic parameters for the target substance. |
| popPK | Stoeckelhuber_2018 | irrelevant | 0 | 0 | The paper investigates 7-hydroxycitronellal, not calciseptine, and contains no data for the target substance. |
| popPK | Sweeney_2008 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of 1,4-dioxane and does not mention or report any data for calciseptine. |
| popPK | Sweeney_2015 | irrelevant | 0 | 0 | The paper focuses on risk assessment for ethylbenzene, not calciseptine. |
| popPK | Sweeney_2016 | irrelevant | 0 | 0 | The paper reports PBPK parameters and toxicity data for 1,2-dichloroethane, not calciseptine. |
| popPK | Szucki_2023 | irrelevant | 0 | 0 | The paper discusses metallurgical processes and inclusion formation in steel, containing no toxicokinetic data for calciseptine. |
| popPK | Tachibana_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sitafloxacin, not calciseptine. |
| popPK | Terry_2014 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for the substance sulfoxaflor, not calciseptine. |
| PGx | Tiwari_2023 | not_relevant | 0 | 0 | The paper reviews CRISPR/Cas genome editing in tomatoes and does not contain any pharmacogenomic data or information on the drug calciseptine. |
| PGx | Toljan_2019 | not_relevant | 0 | 0 | The paper discusses clopidogrel pharmacogenetics and does not mention calciseptine. |
| popPK | Tomášek_2023 | irrelevant | 0 | 0 | The paper reports concentrations of metals in calcified aortic valves and does not contain any kinetic data or mention of the substance calciseptine. |
| popPK | Torralba-Sanchez_2023 | irrelevant | 0 | 0 | The paper focuses on the physicochemical partition coefficients of per- and polyfluoroalkyl substances (PFAS) and does not contain any data for calciseptine. |
| PGx | Trexler_2019 | not_relevant | 0 | 0 | The paper investigates the effect of 2,4,6-Tribromophenol on P-glycoprotein transport in the brain and does not mention calciseptine or pharmacogenomic variants. |
| popPK | Tyl_1995 | irrelevant | 0 | 0 | The paper reports on ethylene glycol (EG), not calciseptine, and contains no data for the target substance. |
| PGx | Uğur_2026 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of pyrethrins in Allium cepa, not the pharmacokinetics or pharmacodynamics of calciseptine, and contains no pharmacogenomic data. |
| popPK | Vanden_2007 | irrelevant | 0 | 0 | The paper is a website description for a PPAR resource and contains no kinetic data for calciseptine. |
| popPK | Venkatesan_2007 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for clofazimine, not the target substance calciseptine. |
| popPK | Venta_1991 | irrelevant | 0 | 0 | The paper concerns a genetic mutation in Carbonic Anhydrase II and does not involve calciseptine or toxicokinetic parameters. |
| PGx | Vercauteren_2024 | not_relevant | 0 | 0 | This is a review on CRISPR-based genomics methods and contains no information regarding calciseptine pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper discusses clinical characteristics of HRAS-mutant pheochromocytoma and does not mention calciseptine or its pharmacokinetics/pharmacodynamics. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper investigates PAH biomarkers in humans and does not contain any data or parameters for calciseptine. |
| popPK | Wiesinger_2026 | irrelevant | 0 | 0 | The paper is a systematic review prioritizing food contact chemicals based on hazard data and does not report any toxicokinetic parameters for calciseptine or any other specific substance. |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The paper focuses on rutacecarpine derivatives for Alzheimer's disease and does not mention calciseptine or its toxicokinetic parameters. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper describes a CRISPR-based diagnostic assay for gene genotyping and viral detection, not the pharmacokinetics or pharmacodynamics of calciseptine. |
| popPK | Würthwein_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for liposomal amphotericin B and caspofungin, not calciseptine. |
| popPK | Würthwein_2013 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for caspofungin, not calciseptine. |
| PGx | Xie_2020 | not_relevant | 0 | 0 | The paper reviews the pharmacogenomics of 5-fluorouracil, not calciseptine. |
| PGx | Xie_2026 | not_relevant | 0 | 0 | The paper describes genetic engineering of a probiotic bacterium for dairy fermentation and is completely unrelated to calciseptine or human pharmacogenomics. |
| popPK | Yamada_1992 | irrelevant | 0 | 0 | The paper studies imidapril, a different substance, and does not report kinetic parameters for calciseptine. |
| popPK | Yan_2020 | irrelevant | 0 | 0 | The paper discusses the toxicokinetics of 1,3-dichloropropene, not calciseptine. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper reports on the creation of a genetic animal model for beta-thalassemia and does not involve the drug calciseptine or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Yoshimi_2016 | not_relevant | 0 | 0 | The paper reports a method for CRISPR-Cas mediated gene knock-in in rat zygotes (including CYP2D6) but does not contain data on pharmacokinetic or pharmacodynamic effects of calciseptine. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper describes a diagnostic assay for melanoma ctDNA and does not report any pharmacokinetic or pharmacodynamic parameters of calciseptine. |
| PGx | Zhao_2021 | not_relevant | 0 | 0 | The paper investigates the deacylation of ghrelin by Notum and does not mention calciseptine or any pharmacogenomic effect on its PK/PD parameters. |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | The paper reports radiation physics cross-sections for cisplatin, not toxicokinetic parameters for calciseptine. |
| PGx | Zhou_2022 | not_relevant | 0 | 0 | The paper reviews SARS-CoV-2 detection methods and contains no information on calciseptine or pharmacogenomics. |
| PGx | Zhuang_2025 | not_relevant | 0 | 0 | The paper is a review of CRISPR-based SNP detection technologies and does not contain any data regarding the pharmacokinetics or pharmacodynamics of calciseptine. |
| PGx | Zimmermann_1995 | not_relevant | 0 | 0 | The study investigates dextromethorphan, not calciseptine. |
| popPK | Zober_1995 | irrelevant | 0 | 0 | The paper studies the kinetics and health outcomes of vinclozolin, not calciseptine. |
| popPK | Zou_2012 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of naringin, not calciseptine. |
| popPK | Zou_2023 | irrelevant | 0 | 0 | The paper describes a method for detecting CRISPR off-target effects and does not mention the substance calciseptine or report any toxicokinetic parameters. |
| popPK | do_2015 | irrelevant | 0 | 0 | The study is an epidemiological biomonitoring assessment of chromosomal damage in tannery workers and does not report any toxicokinetic parameters for calciseptine or any other specific substance. |
| popPK | unknown_1993 | irrelevant | 0 | 0 | The paper studies 1,3-butadiene, not calciseptine. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-life, excretion rates, tissue distribution) for glyphosate, not calciseptine. |
| popPK | unknown_2016_2 | irrelevant | 0 | 0 | The paper discusses abamectin (an insecticide), not calciseptine, and does not report kinetic parameters for the target substance. |
| popPK | unknown_2016_3 | irrelevant | 0 | 0 | The paper is a risk assessment of picarbutrazox, not calciseptine, and contains no kinetic parameters for the subject substance. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper is a risk assessment for captan, a different substance, and does not report kinetic parameters for calciseptine. |
| popPK | unknown_2017_10 | irrelevant | 0 | 0 | The paper discusses the toxicokinetics and safety of pyraziflumid, not calciseptine. |
| popPK | unknown_2017_2 | irrelevant | 0 | 0 | The paper concerns Octamethylcyclotetrasiloxane (D4), not calciseptine. |
| popPK | unknown_2017_3 | irrelevant | 0 | 0 | The paper discusses Decamethylcyclopentasiloxane (D5), not calciseptine, and contains no kinetic parameters for the target substance. |
| popPK | unknown_2017_4 | irrelevant | 0 | 0 | The paper reports toxicological data (NOAELs, ADI) for isofetamid, a different substance, and contains no kinetic parameters or mention of calciseptine. |
| popPK | unknown_2017_5 | irrelevant | 0 | 0 | The paper is a risk assessment for flometoquin (a different substance) and does not report any kinetic parameters for calciseptine. |
| popPK | unknown_2017_6 | irrelevant | 0 | 0 | The paper reports on the risk assessment of folpet, not calciseptine. |
| popPK | unknown_2017_7 | irrelevant | 0 | 0 | The paper is a risk assessment for 2,4-D (a phenoxy herbicide) and does not study calciseptine. |
| popPK | unknown_2017_8 | irrelevant | 0 | 0 | The paper assesses cyclaniliprole, not calciseptine, and provides toxicological endpoints (NOAEL/LOAEL) rather than kinetic parameters for the target substance. |
| popPK | unknown_2017_9 | irrelevant | 0 | 0 | The paper reports risk assessment data for fenquinotrione, not calciseptine. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper reports on the toxicology of desmedipham, not calciseptine. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The paper concerns flubendiamide, not calciseptine, and reports no toxicokinetic parameters for the target substance. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The paper concerns fluxametamide, not calciseptine, and provides no kinetic parameters for the target substance. |
| popPK | unknown_2020_2 | irrelevant | 0 | 0 | The paper concerns dichlobentiazox, not calciseptine. |
| popPK | unknown_2020_3 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and toxicological data for monepantel, not calciseptine. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper concerns paraquat, not calciseptine, and reports no kinetic parameters for the subject substance. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The paper discusses triethylenetetramine (TETA), not calciseptine. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | The paper concerns the risk assessment of pyridachlometyl, not calciseptine, and does not report kinetic parameters for the target substance. |
| popPK | unknown_2023_3 | irrelevant | 0 | 0 | The paper discusses the toxicokinetics and risk assessment of dimesulfazet, not calciseptine. |
| popPK | unknown_2023_4 | irrelevant | 0 | 0 | The paper assesses the risk of cyphenothrin, not calciseptine, and contains no data for the target substance. |
| popPK | unknown_2023_5 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for marbofloxacin, not calciseptine. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The paper discusses the toxicology and risk assessment of quinofumelin, not calciseptine. |
| popPK | unknown_2024_2 | irrelevant | 0 | 0 | The paper concerns the risk assessment of 3-nitrooxypropanol (3-NOP), not calciseptine, and provides no kinetic parameters for the target substance. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The paper reports on the risk assessment of ferimzone, not calciseptine, and does not contain kinetic parameters for the target substance. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The paper is a risk assessment for cyclopyranil and does not mention calciseptine or provide any toxicokinetic parameters for it. |
| popPK | van_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for galantamine, not calciseptine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalciseptine%5D&body=Drug%3A%20calciseptine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calciseptine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
