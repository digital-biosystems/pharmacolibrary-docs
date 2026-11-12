<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Pertussis toxin&quot;}]"></div>

# Pertussis toxin

- **generic name:** Pertussis toxin
- **T3DB:** [T3D2595](http://www.t3db.ca/toxins/T3D2595) · **PubChem:** none

## About

Pertussis toxin (PTX; 106 kDa) is one of the numerous toxins from Bordetella pertussis, the agent of the whooping cough disease. Pertussis toxin belongs to the A-B5 bacterial toxin superfamily. It is composed of a B oligomer (subunits S1, S2, S3, (2)S4, and S5), responsible for its binding to target cells, and a A moiety (subunit S1) that exhibits ADP-ribosyltransferase activity.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Pertussis toxin (PTX; 106 kDa) is one of the numerous toxins from Bordetella pertussis, the agent of the whooping cough disease.
- **Mechanism of toxicity:** After binding to the cell receptors, pertussis toxin (PTX) is endocytosed and the A moiety translocates into the cytosol where it expresses the ADP-ribosyltransferase activity on heterotrimeric G proteins. ADP-ribosylated G-proteins loose their ability to transduce signals. …
- **Health effects:** Pertussis toxin is an exotoxin produced by Bordetella pertussis, the agent of the whooping cough disease.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2595">T3DB T3D2595</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 70323-44-3</small></p>

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
| 2026-11-11 13:09 | 1:29:04 | 0/0/0 | 0/0/0 | 0/0/0 | 1,448,757/47,500 | ollama / glm-5.3-flash | 70 | 9/52 | 70/0 | 0 |

## Coverage

- **PubMed hits:** 516 matched, 250 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magoski_1995.pdf` | Magoski NS et al., Dopaminergic transmission between ident…, Journal of neurophysiology (1995) | pd | 4 | [10.1152/jn.1995.74.3.1287](https://doi.org/10.1152/jn.1995.74.3.1287) | [7500151](https://www.ncbi.nlm.nih.gov/pubmed/7500151) | metadata signals extractable PD data (IC50) |
| `Wiley_1991.pdf` | Wiley JW et al., Mechanism of action of peptide YY to in…, Gastroenterology (1991) | pd | 4 | [10.1016/0016-5085(91)90257-l](https://doi.org/10.1016/0016-5085(91)90257-l) | [1848199](https://www.ncbi.nlm.nih.gov/pubmed/1848199) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-11 13:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aare_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cannabidiol, not pertussis toxin (PTX here denotes paclitaxel), so pertussis toxin never appears as a subject substance. |
| popPK | Abadal_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of paclitaxel, not pertussis toxin; pertussis toxin is not the subject substance anywhere in the evidence. |
| popPK | Acquaye-Seedah_2018 | irrelevant | 2 | 2 | This is a mechanistic antibody-neutralisation study (ELISA, cell imaging); no in vivo toxicokinetic parameters of PTx (half-life, clearance, partitioning) are reported; numeric values are ELISA EC50s/affinities and some data (Tables S1, Figures) live in supplements. |
| popPK | An_1994 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental tool to block G-protein signaling; no toxicokinetic parameters of pertussis toxin are reported. |
| popPK | Anand-Srivastava_1990 | irrelevant | 0 | 0 | Pertussis toxin is only used as an experimental tool to attenuate adenylate cyclase inhibition; no kinetic parameters for pertussis toxin are reported. |
| popPK | Auderset_2019 | irrelevant | 1 | 1 | This is a vaccine immunogenicity/protection study in mice where "clearance" refers to bacterial (Bordetella pertussis) CFU clearance, not toxicokinetics of pertussis toxin itself; no PK parameters (half-life, clearance, t½) of the toxin are reported. |
| popPK | Bahia_1998 | irrelevant | 0 | 0 | Pertussis toxin serves only as an experimental reagent; no toxicokinetic parameters for the toxin itself are reported. |
| popPK | Bailey_2025 | irrelevant | 0 | 0 | The paper concerns phosphite-assisted bioaugmentation of Pseudomonas veronii for toluene degradation in soil microcosms; pertussis toxin does not appear anywhere, and no kinetic parameters for it exist. |
| popPK | Bharadwaj_2019 | irrelevant | 0 | 0 | The substance is paclitaxel (PTX), not pertussis toxin; no pertussis toxin kinetic data present. |
| popPK | Binkhathlan_2024 | irrelevant | 1 | 1 | "PTX" in this paper is paclitaxel (an anticancer drug), not pertussis toxin; there are no kinetic parameters for pertussis toxin itself. |
| popPK | Boehm_2018 | irrelevant | 0 | 0 | This is a vaccine efficacy/challenge study in mice with antibody and bacterial burden outcomes, and no toxicokinetic parameters (half-life, clearance, rate constants, etc.) are reported for pertussis toxin. |
| PGx | Bolan_2007 | not_relevant | 0 | 0 | Pertussis toxin is merely an experimental tool blocking Gi signaling; no gene variant/genotype effect on any PK/PD parameter is reported. |
| popPK | Bordat_2022 | irrelevant | 0 | 0 | "Ptx" here is paclitaxel, not pertussis toxin; the kinetic parameters (AUC, bioavailability, half-life) belong to paclitaxel prodrugs in mice, not to pertussis toxin. |
| PGx | Bottero_2007 | not_relevant | 0 | 0 | Bacterial ptxS1 polymorphisms are studied for vaccine escape, not a host pharmacogenomic effect on a PK/PD parameter of pertussis toxin as a drug. |
| popPK | Boursaux-Eude_1999 | irrelevant | 0 | 0 | This is a vaccine-efficacy/sequencing study of B. pertussis infection in mice with no toxicokinetic parameters of pertussis toxin. |
| PGx | Boursaux-Eude_1999 | not_relevant | 0 | 0 | Reports bacterial gene sequence variation and vaccine protection, not a pharmacogenomic effect on pertussis toxin PK/PD parameters. |
| popPK | Bowton_2010 | irrelevant | 0 | 0 | Pertussis toxin appears only as a experimental tool (PTX-sensitivity of a signaling pathway), with no kinetic parameters for the toxin itself. |
| PGx | Bowton_2010 | not_relevant | 2 | 3 | Pertussis toxin is only used as an experimental tool to probe signaling; no pharmacokinetic/pharmacodynamic parameter of pertussis toxin itself is measured relative to a gene variant. |
| popPK | Brezillon_2003 | irrelevant | 0 | 0 | Pertussis toxin appears only as a mechanistic sensitivity modifier (Gi-coupling control), with no kinetic parameters reported for it. |
| popPK | Bruss_1999 | irrelevant | 2 | 2 | The half-life (38.4 d) and volume of distribution (87.8 ml/kg) are numeric and present, but they describe the kinetics of the administered pertussis immunoglobulin (IgG antibodies), not pertussis toxin itself; the toxin is the target, not the subject substance. |
| popPK | Buddy_2022 | irrelevant | 0 | 0 | This is a clinical safety/immunogenicity study of a live attenuated vaccine containing inactivated pertussis toxin; no quantitative toxicokinetic parameters (half-life, clearance, rates, partitioning) for pertussis toxin are reported, and no numeric kinetic values appear. |
| PGx | Byrne_2006 | not_relevant | 0 | 0 | This is a microbiological epidemiology study of B. pertussis strain alleles (prn, ptxS1); no pharmacogenomic effects on pertussis toxin PK/PD parameters are reported. |
| popPK | Cai_2012 | irrelevant | 0 | 0 | The kinetic parameters (half-life, AUC, clearance) belong to paclitaxel, so pertussis toxin does not appear as the subject substance in any way. |
| popPK | Cai_2022 | irrelevant | 0 | 0 | Pertussis toxin is not the subject — "PTX" here refers to paclitaxel in a nanoparticle drug-delivery study, with no toxicokinetic parameters for pertussis toxin. |
| popPK | Callahan_2004 | irrelevant | 0 | 0 | Pertussis toxin is used only as an experimental tool to block G-proteins; no kinetic parameters for it are reported. |
| popPK | Callmann_2019 | irrelevant | 0 | 0 | The paper concerns a paclitaxel (PTX) prodrug, not pertussis toxin; it is a different substance entirely, and PK values live in Table 1/figures not provided. |
| popPK | Canthaboo_2000 | irrelevant | 0 | 0 | This is an immunogenicity/vaccine efficacy study with no kinetic parameters for pertussis toxin itself. |
| popPK | Cao_2024 | irrelevant | 0 | 0 | No pertussis toxin or any toxicokinetic parameter for it appears in this nanoparticle cancer therapy paper. |
| popPK | Carbonetti_2007 | irrelevant | 1 | 1 | Mechanistic infection study in mice with no numeric kinetic parameters for pertussis toxin reported in the evidence. |
| popPK | Cazanga_2023 | irrelevant | 0 | 0 | The kinetic data concern florfenicol in rabbits; pertussis toxin is not the subject substance. |
| popPK | Chen_2023 | irrelevant | 1 | 0 | "PTX" in this paper is paclitaxel, not pertussis toxin; the kinetic parameters (t1/2, AUC, Cmax) belong to paclitaxel nanoparticle formulations, a different subject substance. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper's kinetic parameters (clearance, AUC) pertain to paclitaxel, not pertussis toxin; pertussis toxin is absent from the evidence entirely. |
| popPK | Chen_2024_2 | irrelevant | 0 | 0 | "PTX" in this paper is paclitaxel, a chemotherapy drug, not pertussis toxin; all kinetic parameters (t½, AUC, clearance) belong to paclitaxel/baicalin derivative formulations. |
| popPK | Cherukula_2019 | irrelevant | 0 | 0 | The "PTX" in this paper is paclitaxel (a chemotherapy drug), not pertussis toxin; there are no toxicokinetic parameters for pertussis toxin, and the nanoparticle PK values (e.g., AUC 39.66 µg·h/mL) belong to paclitaxel-ICG nanoparticles in mice, with details in tables/figures not fully provided. |
| popPK | Chirizzi_2025 | irrelevant | 0 | 0 | The substance is paclitaxel, not pertussis toxin; no toxicokinetic parameters for pertussis toxin exist. |
| popPK | Chow_2012 | irrelevant | 0 | 0 | A qualitative review of monoclonal antibodies against toxins; no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for pertussis toxin are reported anywhere in the evidence, which consists only of discussion and reference-list fragments. |
| popPK | Coburn_1970 | irrelevant | 0 | 0 | The paper reports renal calcium/phosphate clearance in dogs; pertussis toxin is not mentioned at all as a study substance. |
| popPK | Communi_2001 | irrelevant | 0 | 0 | Pertussis toxin is only mentioned as a tool to demonstrate G(i)-coupling of a receptor; no toxicokinetic parameters for pertussis toxin are reported. |
| popPK | Corum_2019 | irrelevant | 0 | 0 | The kinetic parameters reported are for pentoxifylline, not pertussis toxin, so the subject substance differs. |
| popPK | DeJong_2022 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protection study in mice with no toxicokinetic parameters for pertussis toxin (PT appears only as a vaccine antigen). |
| popPK | De_2026 | irrelevant | 0 | 0 | The kinetic parameters (clearance, volume, bioavailability) belong to paclitaxel and its metabolites, not pertussis toxin. |
| popPK | Deng_2025 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; all kinetic parameters (t1/2, Vd, AUC) belong to paclitaxel-loaded nanoparticles. |
| PGx | Denoël_2005 | not_relevant | 0 | 0 | Mouse vaccine immunogenicity study with no host genetic variant effects on pertussis toxin PK/PD parameters. |
| popPK | Drewett_1990 | irrelevant | 2 | 1 | PTX is used as an experimental tool (mechanism/pharmacology study in PC12 cells), with no toxicokinetic parameters; the only numbers are pharmacological concentrations. |
| popPK | Drewett_1992 | irrelevant | 0 | 0 | Pertussis toxin is used only as a pharmacological tool (PTX-pretreatment) in an in vitro signaling study; no kinetic parameters for PTX are reported. |
| popPK | Eby_2015 | irrelevant | 0 | 0 | The paper reviews neutrophil immune response to B. pertussis infection and contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for pertussis toxin as a substance. |
| popPK | Emo_2020 | irrelevant | 0 | 0 | Pertussis toxin is used only as an experimental tool to block GPCR signaling in T cell motility studies; no toxicokinetic parameters (half-life, clearance, etc.) for pertussis toxin are reported. |
| popPK | Faber_2025 | irrelevant | 0 | 0 | This is a 7T MRI imaging protocol paper on pertussis_toxin-free human neuroimaging; no toxicokinetic parameters of pertussis_toxin appear anywhere. |
| popPK | Fadugba_2014 | irrelevant | 0 | 0 | This is a vaccine immunogenicity study measuring antibody titers and cytokine responses to pertussis toxin, with no toxicokinetic parameters (half-life, clearance, partitioning, etc.) reported. |
| popPK | Feng_2023 | irrelevant | 0 | 0 | The paper concerns hemin-coated nanoparticles for chemotherapeutics; pertussis toxin appears nowhere and no kinetic parameters for it exist. |
| popPK | Frick_1981 | irrelevant | 0 | 0 | The paper concerns hydrocortisone and parathyroid hormone effects on phosphate transport in rats; pertussis toxin is not studied and no toxicokinetic parameters for it are reported. |
| popPK | Fukusumi_2001 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental tool to block G(i)/G(o) signaling; no kinetic parameters for it are reported. |
| popPK | Fumagalli_2004 | irrelevant | 0 | 0 | Pertussis toxin appears only as a pharmacological tool to block Gi coupling in receptor assays; no toxicokinetic parameters for pertussis toxin are reported. |
| popPK | Furze_2008 | irrelevant | 0 | 0 | Pertussis toxin is only a pertussis-toxin pretreatment tool to block neutrophil clearance; no kinetic parameters of pertussis toxin itself are reported. |
| popPK | Gellai_1990 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental tool to abolish alpha-2 adrenoceptor signaling; no kinetic parameters of pertussis toxin are reported. |
| popPK | Godson_2000 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental inhibitor of LXA4-induced phagocytosis in vitro, with no kinetic parameters for the toxin itself. |
| popPK | Guntupalli_1987 | irrelevant | 0 | 0 | The paper studies PTH and phosphate handling in rats; pertussis toxin is not a subject substance and no kinetic parameters for it appear. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper concerns paclitaxel (PTX) polymer-drug conjugates; pertussis toxin is not the subject substance and no kinetic parameters for it appear. |
| popPK | Gzyl_2004 | irrelevant | 0 | 0 | Genetic study of pertussis toxin gene alleles in vaccine strains; no toxicokinetic parameters reported. |
| PGx | Gzyl_2004 | not_relevant | 0 | 0 | Study concerns bacterial toxin gene variants and vaccine efficacy, not pharmacogenomic effects on PK/PD parameters of pertussis toxin as a drug. |
| PGx | Gzyl_2007 | not_relevant | 2 | 2 | Study examines bacterial allele variants (ptxS1/prn) affecting vaccine efficacy in clearance, not a host gene variant altering PK/PD parameters of pertussis toxin as a drug. |
| popPK | Hagelüken_1994 | irrelevant | 0 | 0 | Pertussis toxin is only used as an experimental tool (PTX treatment to ADP-ribosylate G-proteins); the toxicokinetic-like parameters (EC50, log Q values) belong to propranolol and local anesthetics, not to pertussis toxin itself. |
| popPK | Hall_1999 | irrelevant | 1 | 0 | This is an infection time-course/immunology study in rats; pertussis toxin appears only as an antigen for antibody measurement, with no kinetic parameters (no half-life, clearance, etc.) reported. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper's "PTX" is paclitaxel, not pertussis toxin; no pertussis toxin toxicokinetic parameters are present, and the pharmacokinetic values (AUC, t1/2) are not shown numerically anyway. |
| PGx | Hashimoto_2000 | not_relevant | 0 | 0 | Pertussis toxin is used only as an experimental tool to inhibit Gαi; no gene variant effect on PTX pharmacokinetics or pharmacodynamics is reported. |
| popPK | He_2026 | irrelevant | 0 | 0 | PTX in this paper is paclitaxel, not pertussis toxin; the substance does not match, and any kinetic parameters belong to paclitaxel micelles in rats. |
| popPK | Hempel_1998 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental pharmacologic tool, with no kinetic parameters for the toxin itself. |
| popPK | Ho_1998 | irrelevant | 0 | 0 | The paper is about Gz protein biochemistry, not toxicokinetic parameters of pertussis toxin itself. |
| popPK | Hollenhorst_2022 | irrelevant | 0 | 0 | Pertussis toxin is used only as a pharmacological tool/inhibitor of Gαi signalling in mouse trachea; no kinetic parameters (half-life, clearance, etc.) for pertussis toxin itself are reported. |
| popPK | Homburger_1987 | irrelevant | 0 | 0 | Pertussis toxin is only an ADP-ribosylation reagent for probing G-proteins; no toxicokinetic parameters reported. |
| popPK | Hu_2016 | irrelevant | 0 | 0 | The paper reports PK parameters (t1/2, AUC, CL, VSS) for dexamethasone and paclitaxel micelles in mice, but pertussis toxin is not the subject substance anywhere in the paper. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | PTX here is paclitaxel, not pertussis toxin; it is a nanoparticle drug-delivery formulation study with no toxicokinetic parameters for pertussis toxin. |
| popPK | Jiang_2014 | irrelevant | 0 | 0 | The paper is about paclitaxel-loaded micelles; pertussis toxin is not mentioned at all, so no kinetic parameters exist for it. |
| popPK | Johnson_1991 | irrelevant | 1 | 0 | Pertussis toxin is used only as a pharmacological tool to block G-proteins in a functional study; no toxicokinetic parameters for pertussis toxin are reported. |
| popPK | Kanaho_1989 | irrelevant | 0 | 0 | Biochemical study of G-protein substrates in rabbit tissues; no kinetic parameters of pertussis toxin itself. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protective efficacy study in mice; pertussis toxin appears only as a vaccine antigen/assay reagent with antibody titers and no toxicokinetic parameters (no half-life, clearance, Vd, rate constants, etc.). |
| popPK | Kato_2025 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; the paper reports dose intensities and clinical outcomes for a carboplatin/paclitaxel regimen with no toxicokinetic parameters for pertussis toxin. |
| popPK | Kawahara_2021 | irrelevant | 0 | 0 | "PTX" in this paper is paclitaxel, not pertussis toxin; nopertussis toxin toxicokinetic parameters are reported. |
| popPK | Ke_2010 | irrelevant | 0 | 0 | The paper concerns paclitaxel conjugates, not pertussis toxin, with no kinetic parameters for pertussis toxin. |
| popPK | Ke_2017 | irrelevant | 0 | 0 | The substance is paclitaxel (PTX) in polymer nanocarriers; pertussis toxin does not appear at all. |
| popPK | Khayrani_2019 | irrelevant | 0 | 0 | The paper concerns glycosylated paclitaxel/immunoliposomes; pertussis toxin does not appear at all, and there are no toxicokinetic parameters. |
| popPK | Khodor_2026 | irrelevant | 0 | 0 | Pertussis toxin appears only as an adjuvant in the ovalbumin sensitization protocol; the pharmacokinetic data concern MSC-derived exosomes, not pertussis toxin, and no kinetic parameter for pertussis toxin is reported. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The subject substance here is paclitaxel (PTX), not pertussis toxin; any kinetic parameters (AUC, Vss, clearance) belong to paclitaxel formulations, not pertussis toxin. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | Pertussis toxin appears only as a pharmacological tool (Gαi inhibitor) in cell signaling experiments with suPAR/fMLF; no toxicokinetic parameters for pertussis toxin are reported or quantified. |
| popPK | Kirimanjeswara_2005 | irrelevant | 2 | 2 | Bacterial clearance curves (CFU versus time in mouse lungs) with PTx as immunology topic — not PTx toxicokinetic parameters like half-life, partition coefficients, and clearance. |
| popPK | Klimova_2022 | irrelevant | 0 | 0 | This is a bacterial infection/immunopathogenesis study in mice — pertussis toxin acts as a virulence factor of Bordetella pertussis, and no toxicokinetic parameters of pertussis toxin itself are reported. |
| popPK | Kobayashi_2006 | irrelevant | 0 | 0 | Paper studies FGF-23 regulation in hyperparathyroidism; no toxicokinetic parameters for pertussis toxin are reported anywhere. |
| PGx | Kodama_2004 | not_relevant | 0 | 0 | Genetic variation of pertussis toxin gene alleles is described, but no pharmacokinetic/pharmacodynamic parameter effect is reported. |
| popPK | Kovalyk_2026 | irrelevant | 0 | 0 | "PTX" here denotes paclitaxel, a chemotherapeutic loaded into radiopaque polymer particles, not pertussis toxin; no kinetic parameters for pertussis toxin appear. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of paclitaxel nanocrystals, not pertussis toxin; PTX here is paclitaxel (also a "PTX" abbreviation trap) and pertussis toxin never appears. |
| PGx | Lahdenperä_2008 | not_relevant | 0 | 0 | Gene expression kinetics after antigen re-stimulation, not a pharmacogenomic effect on pertussis toxin PK/PD parameters. |
| popPK | Lau_1979 | irrelevant | 0 | 0 | "PTX" here means parathyroidectomized rats in a renal calcium/phosphate transport study — pertussis toxin does not appear at all, and no toxicokinetic parameters for it are reported. |
| popPK | Lau_1982 | irrelevant | 0 | 0 | The paper studies calcium handling/spontaneous hypercalciuria in rats; pertussis toxin is not mentioned at all, so no pertussis_toxin kinetic parameters exist. |
| popPK | Lelièvre_2006 | irrelevant | 0 | 0 | Pertussis toxin appears only as a pharmacological tool for G(i) sensitivity testing in Xenopus oocytes; no kinetic parameters for pertussis toxin are reported. |
| popPK | Lell_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of pentoxifylline in children with cerebral malaria, not pertussis toxin; the substance is not the subject of any kinetic parameter. |
| popPK | Li_2009 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental sensitivity probe in a neurodevelopment study with no kinetic parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper concerns paclitaxel (PTX)-loaded nanocarriers, not pertussis toxin, and contains no toxicokinetic parameters for the subject substance. |
| popPK | Li_2018_2 | irrelevant | 0 | 0 | PTX here denotes paclitaxel, not pertussis toxin; the kinetic parameters (V1, V2, Q, CL) belong to a different substance. |
| popPK | Li_2019 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; all kinetic parameters (half-life, AUC, Vd, clearance) belong to paclitaxel and S-HM-3, a completely different substance. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The subject substance is paclitaxel (PTX), not pertussis toxin; no kinetic parameters for pertussis toxin appear anywhere in the evidence. |
| popPK | Ling_2017 | irrelevant | 0 | 0 | The subject substance is paclitaxel (PTX) prodrug liposomes, not pertussis toxin; no kinetic parameters for pertussis toxin exist in this paper. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; no pertussis toxin data at all. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper concerns paclitaxel and cisplatin delivery; pertussis toxin is not mentioned and no toxicokinetic parameters for it appear. |
| popPK | Lou_2021 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; pharmacokinetic data concern paclitaxel prodrugs in mice, with no pertussis toxin parameters. |
| popPK | Luo_2017 | irrelevant | 0 | 0 | The subject substance is paclitaxel (PTX), not pertussis toxin; no pertussis toxin kinetic parameters exist in this paper. |
| popPK | Luo_2019 | irrelevant | 0 | 0 | The paper concerns paclitaxel drug-delivery nanoparticles; pertussis toxin is not the subject and no kinetic parameters for it appear. |
| PGx | Luu_2018 | not_relevant | 0 | 0 | Paper describes bacterial proteomic differences between B. pertussis strains; no drug, gene variant, or PK/PD pharmacogenomic effect is reported. |
| popPK | Maderazo_1990 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of pentoxifylline and analogs, not pertussis toxin; pertussis toxin is absent from the evidence entirely. |
| popPK | Mahon_1996 | irrelevant | 0 | 0 | Pertussis toxin appears only as a vaccine antigen/immunological stimulus; the kinetic data are bacterial (B. pertussis) clearance from lungs, with no TK parameters for pertussis toxin itself. |
| popPK | Maleki_2021 | irrelevant | 0 | 0 | The paper studies paclitaxel/etoposide nanoparticles; pertussis toxin does not appear, and no toxicokinetic parameters for it are present. |
| PGx | Matczak_2023 | not_relevant | 0 | 0 | This is a microbiology study of B. pertussis fimbrial serotypes; no host gene variant affecting pertussis toxin PK/PD parameters is reported. |
| popPK | Mauser_2024 | irrelevant | 0 | 0 | The paper's substance is paclitaxel (PTX) in protein nanoparticles — pertussis toxin does not appear at all, so no kinetic parameters (e.g., t½ 122 h, τ=9.7/302 h) pertain to pertussis toxin. |
| popPK | Miguel_2022 | irrelevant | 0 | 0 | This is a review on nanotechnology for anticancer drugs (doxorubicin, paclitaxel); no toxicokinetic parameters for pertussis toxin are present anywhere. |
| PGx | Millen_2015 | not_relevant | 2 | 5 | The paper describes bacterial (Bordetella pertussis) gene variants affecting toxin function (binding and lymphocytosis), not a pharmacogenomic effect of a drug on PK/PD parameters of pertussis toxin as a therapeutic agent. |
| PGx | Mizuta_2008 | not_relevant | 0 | 0 | Pertussis toxin is only used as a mechanistic tool for Gi coupling; no gene variant/genotype effects on pertussis toxin PK/PD are reported. |
| popPK | Mooi_1988 | irrelevant | 0 | 0 | Qualitative review of bacterial virulence factors with no toxicokinetic parameters for pertussis toxin. |
| PGx | Mooi_1998 | not_relevant | 0 | 0 | Paper describes antigenic polymorphism and vaccine-driven evolution of B. pertussis virulence proteins, with no pharmacokinetic or pharmacodynamic drug parameters. |
| popPK | Muley_2025 | irrelevant | 0 | 0 | The paper is about paclitaxel (PTX), a different substance from pertussis toxin, so no kinetic parameters pertain to the subject substance. |
| popPK | Murthy_1998 | irrelevant | 0 | 0 | Pertussis toxin is used only as a pharmacological inhibitor of Gi proteins; no kinetic parameters for the toxin itself are reported. |
| popPK | N_2025 | irrelevant | 0 | 0 | The substance is docetaxel (PTX abbreviation), not pertussis toxin, and no numeric kinetic parameters for pertussis toxin appear. |
| popPK | Nascimento-Silva_2005 | irrelevant | 0 | 0 | Pertussis toxin appears only as a pharmacological inhibitor of GPCR signaling in vitro; no kinetic parameters for it are reported. |
| popPK | Ng_2011 | irrelevant | 0 | 0 | Pertussis toxin is used only as a mechanistic inhibitor of neutrophil migration in mice; no kinetic parameters for the toxin are reported. |
| popPK | Nguyen_2015 | irrelevant | 1 | 0 | This is an antibody efficacy study in mice and baboons reporting WBC and bacterial clearance outcomes, with no quantitative toxicokinetic parameters (half-life, clearance, volumes, rate constants) for pertussis toxin itself. |
| PGx | Nguyen_2020 | not_relevant | 0 | 0 | This is an immuno-prophylaxis study in animals; no gene variant/genotype/phenotype effects on pertussis toxin PK/PD are reported. |
| popPK | Nie_2026 | irrelevant | 0 | 0 | "PTX" here is paclitaxel, not pertussis toxin; the paper's pharmacokinetics concern paclitaxel nanoparticles as a different substance. |
| popPK | Padmakumar_2019 | irrelevant | 0 | 0 | The subject is paclitaxel (PTX), not pertussis toxin; no pertussis toxin data appear at all. |
| popPK | Padmakumar_2019_2 | irrelevant | 0 | 0 | The substance "PTX" in this paper is paclitaxel, a chemotherapy drug, not pertussis toxin, so no kinetic parameters for pertussis_toxin are present. |
| popPK | Panchenko_1998 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental reagent/tool; no kinetic parameters for PT are reported. |
| popPK | Petersen_1992 | irrelevant | 0 | 0 | Immunology study measuring lymphocyte responses to pertussis toxin as antigen; no kinetic parameters for pertussis toxin. |
| popPK | Pittman_1984 | irrelevant | 0 | 0 | A narrative review of pertussis toxin's mechanism of action with no quantitative toxicokinetic parameters of any kind. |
| popPK | Poudel_2020 | irrelevant | 0 | 0 | "PTX" here refers to paclitaxel, not pertussis toxin; no pertussis toxin kinetic parameters are reported. |
| popPK | Puiu_2021 | irrelevant | 0 | 0 | This is a materials-science paper on paclitaxel-loaded magnetite/cyclodextrin nanoparticles with no kinetic parameters for pertussis toxin at all. |
| popPK | Rami_2021 | irrelevant | 0 | 0 | This is a vaccine immunogenicity study; quantitative lung clearance is a bacterial burden outcome, not a toxicokinetic parameter of pertussis toxin itself. |
| popPK | Rege_2019 | irrelevant | 0 | 0 | "PTX" in this paper refers to paclitaxel, not pertussis toxin; all kinetic parameters (AUC, IC50) belong to paclitaxel formulations, a different substance. |
| popPK | Renfro_1984 | irrelevant | 0 | 0 | The Vmax/Km values pertain to phosphate transport in chick renal brush-border membranes, not to pertussis toxin; pertussis toxin is not the subject substance and no kinetic parameters for it appear. |
| popPK | Roduit_2002 | irrelevant | 0 | 0 | Immunogenicity/protective efficacy vaccine study in mice with antibody titers and bacterial clearance, no toxicokinetic parameters for pertussis toxin. |
| popPK | Rong_2021 | irrelevant | 0 | 0 | This is a paclitaxel nanomedicine paper; pertussis toxin is not a subject and no kinetic parameters for it appear. |
| popPK | Sabatelle_2022 | irrelevant | 0 | 0 | This is a drug-delivery/pharmacokinetic study of paclitaxel nanoparticles, with pertussis toxin not appearing as the subject substance and no kinetic parameters for it. |
| popPK | Sarkar_2022 | irrelevant | 0 | 0 | The paper concerns paclitaxel (PTX) release from nanoparticles, not pertussis toxin; no kinetic parameters for pertussis toxin are present. |
| popPK | Schaeffer_2001 | irrelevant | 0 | 0 | In vitro monocyte phagocytosis study with pertussis toxin used as an experimental agent; no toxicokinetic parameters reported. |
| popPK | Schaeffer_2004 | irrelevant | 0 | 0 | This is an in vitro immunology study of SP-A binding to B. pertussis LPS, not pertussis toxin toxicokinetics; no kinetic parameters are reported. |
| popPK | Schlenker_2024 | irrelevant | 0 | 0 | This is a mechanistic innate-immune signaling study of pertussis toxin in murine macrophages in vitro, with no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) reported. |
| popPK | Sedney_2023 | irrelevant | 0 | 0 | PTx is studied as a virulence factor affecting bacterial clearance in mice; no toxicokinetic parameters (half-life, clearance, etc.) for PTx itself are reported, and key CFU data appear in figures not provided. |
| popPK | Sedney_2024 | irrelevant | 2 | 0 | Immunology study of PTx effects on bacterial clearance in neonatal mice with no kinetic parameters of any kind. |
| popPK | Seow_2013 | irrelevant | 0 | 0 | Pertussis toxin is only used as a signaling inhibitor in an in vitro immunology study; no toxicokinetic parameters for it are reported. |
| popPK | Seto_2025 | irrelevant | 0 | 0 | The paper concerns paclitaxel (PTX), not pertussis toxin; "PTX" here is a different substance and no pertussis toxin kinetic parameters appear. |
| popPK | Shen_2024 | irrelevant | 0 | 0 | The paper reports kinetics of paclitaxel and ginsenoside Rg3, not pertussis toxin; pertussis_toxin is not the subject substance anywhere in the evidence. |
| popPK | Shi_2010 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental treatment of monocytes with no kinetic parameters reported. |
| popPK | Shibasaki_1994 | irrelevant | 0 | 0 | The paper concerns cadmium and pentoxifylline (PTX) nephrotoxicity in rats, with no kinetic parameters for pertussis toxin. |
| popPK | Shukla_2003 | irrelevant | 0 | 0 | The paper concerns pentoxifylline (PTX) and oxidative stress in melanoma-bearing mice, not pertussis toxin, and contains no toxicokinetic parameters. |
| popPK | Shumilla_2004 | irrelevant | 0 | 0 | The paper is an in vitro immunology study with no quantitative toxicokinetic parameters for pertussis toxin. |
| popPK | Skiba_2023 | irrelevant | 0 | 0 | Pertussis toxin does not appear; the kinetic data (whole-body uptake, t1/2) concern pteryxin and valproate in zebrafish larvae, a different substance entirely; PTX here is pteryxin, not pertussis toxin. |
| popPK | Smyth_1988 | irrelevant | 0 | 0 | Pertussis toxin appears only as an experimental tool to block G proteins; no toxicokinetic parameters for it are reported. |
| PGx | Suyama_2025 | not_relevant | 0 | 0 | Bacterial proteomics study of B. pertussis strains; no host gene variant effect on pertussis toxin PK/PD parameters. |
| popPK | Trachte_1995 | irrelevant | 0 | 0 | Pertussis toxin is used only as a pharmacological tool to test receptor coupling mechanisms; no toxicokinetic parameters of pertussis toxin are reported. |
| popPK | Uney_2019 | irrelevant | 0 | 0 | The paper reports kineticparameters for pentoxifylline, not pertussis toxin; pertussis toxin does not appear as the subject substance. |
| PGx | Vaughan_2014 | not_relevant | 0 | 0 | This is an epitope review of B. pertussis immunity with no pharmacogenomic data on pertussis toxin PK/PD parameters. |
| popPK | Vishwanath_2023 | irrelevant | 0 | 0 | The paper's subject substance is paclitaxel in BSA nanoparticles; pertussis toxin is not studied, and no numeric kinetic values for pertussis toxin appear. |
| popPK | Volpi_2016 | irrelevant | 0 | 0 | Pertussis toxin only appears as a co-treatment/adjuvant in EAE induction and an in vitro Gi inhibitor; all kinetic parameters (plasma concentrations, Table S1) concern ADX88178, not pertussis toxin. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | Pertussis toxin appears only as a pharmacological tool to probe G-protein signaling in vitro, with no toxicokinetic parameters for the toxin itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper concerns a paclitaxel/chlorin e6 nanoparticle-hydrogel delivery system ("PTX" = paclitaxel, not pertussis toxin) with no kinetic parameters for pertussis toxin. |
| popPK | Watanabe_2002 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protection study in mice with antibody and cytokine responses only — no kinetic parameters for pertussis toxin are reported. |
| popPK | Weinger_2011 | irrelevant | 0 | 0 | Pertussis toxin appears only as a co-exposure reagent (IV injection doses 0/2 days) in an EAE disease model; no toxicokinetic parameters for the substance are reported. |
| PGx | Wen_2013 | not_relevant | 0 | 0 | Pertussis toxin is used only as an experimental pretreatment tool; no gene variant affects its PK/PD. |
| popPK | Xiong_2026 | irrelevant | 1 | 1 | PTX in this paper is paclitaxel (Abraxane/nab-PTX), not pertussis toxin, so all the rich PK parameters (t1/2, AUC, CL, Vd, tissue AUCs) belong to a different substance. |
| popPK | Xu_2024 | irrelevant | 1 | 10 | The "PTX" in this beagle dog study is pentoxifylline (a methylxanthine drug) with its metabolites M1/M5 — not pertussis toxin — so the numeric PK parameters (T1/2, CL/F, Vd/F, AUC) fully readable here belong to a different substance. |
| popPK | Yadav_2023 | irrelevant | 0 | 0 | "PTX" in this paper is paclitaxel, a different substance; pertussis toxin does not appear at all. |
| popPK | Yadav_2023_2 | irrelevant | 0 | 0 | The substance studied is paclitaxel (abbreviated PTX), not pertussis toxin; the paper is a nanoformulation cancer study with no pertussis toxin toxicokinetics. |
| popPK | Yadav_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of paclitaxel and bortezomib; pertussis toxin is not the subject substance and appears nowhere. |
| popPK | Yang_2013 | irrelevant | 0 | 0 | The substance studied is paclitaxel, not pertussis toxin; pertussis toxin does not appear at all. |
| popPK | Ye_2021 | irrelevant | 0 | 0 | The substance is pertussis toxin unrelated; "PTX" here denotes paclitaxel in a prodrug study with no pertussis toxin kinetic data. |
| popPK | Ye_2022 | irrelevant | 0 | 0 | The paper's "PTX" is paclitaxel, not pertussis toxin, so any kinetic parameters (AUC, clearance, Vz in beagle dogs) belong to a different substance. |
| PGx | Zawadka_2014 | not_relevant | 1 | 2 | This is a bacterial virulence study (ptxP alleles affecting pertussis toxin production/toxicity in vitro), not a pharmacogenomic effect on a PK/PD parameter of a drug. |
| popPK | Zen_2010 | irrelevant | 0 | 0 | This is an immunology review about pentraxins and complement in autoimmune disease, with no kinetic parameter of pertussis toxin anywhere. |
| popPK | Zhang_1997 | irrelevant | 0 | 0 | Pertussis toxin appears only as an analytical tool in an in vitro labeling method; no kinetic parameters measured. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The paper concerns paclitaxel drug delivery; pertussis toxin does not appear at all and no kinetic parameters are given. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The paper reports PK parameters for DOX and PTX nanomicellar formulations; pertussis toxin (PTX is here paclitaxel) is not the subject substance, and no PTX (paclitaxel) kinetic values pertain to pertussis toxin. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The kinetic data concern paclitaxel from a drug-coated balloon, not pertussis toxin, and no numeric toxicokinetic parameters for pertussis toxin appear. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The subject substance is paclitaxel, not pertussis_toxin; no kinetic parameters for pertussis_toxin appear anywhere. |
| popPK | Zhao_2018 | irrelevant | 0 | 0 | The paper concerns paclitaxel and IL-2 nanoparticle delivery; pertussis toxin is not a subject substance and no kinetic parameters for it appear. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper concerns zwitterionic micelles carrying paclitaxel; pertussis toxin is not the subject and no quantitative kinetic parameters for it appear in the evidence. |
| popPK | Zheng_2022 | irrelevant | 0 | 0 | The paper studies pentoxifylline (PTX) in a mouse BCAS model; pertussis toxin is never mentioned and no kinetic parameters for it exist. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper is about paclitaxel (PTX), not pertussis toxin; no pertussis toxin data at all. |
| popPK | Škopová_2025 | irrelevant | 0 | 0 | This is a vaccine reactogenicity/immunogenicity study; pertussis toxin appears only as a vaccine component being detoxified, with no kinetic parameters (half-life, clearance, partitioning, etc.) for the toxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpertussis_toxin%5D&body=Drug%3A%20pertussis_toxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pertussis_toxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
