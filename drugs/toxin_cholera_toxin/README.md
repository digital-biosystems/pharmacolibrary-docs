<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Cholera toxin&quot;}]"></div>

# Cholera toxin

- **generic name:** Cholera toxin
- **T3DB:** [T3D2623](http://www.t3db.ca/toxins/T3D2623) · **PubChem:** none

## About

Cholera toxin (Ctx) is produced by Vibrio cholerae. Cholera enterotoxin is an A-B5 toxin. It contains 5 binding (B) subunits of 11,500 daltons, an active subunit of 23,500 daltons, and a bridging piece of 5,500 daltons that links A1 to the 5B subunits. …

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Cholera toxin (Ctx) is produced by Vibrio cholerae. It is responsible for the harmful effects of cholera infection.
- **Mechanism of toxicity:** The effect is dependent on a specific receptor, monosialosyl ganglioside (GM1 ganglioside) present on the surface of intestinal mucosal cells. Once it has entered the cell, the A1 subunit enzymatically transfers ADP ribose from NAD to the Gs alpha subunit of the heterotrimeric G protein, that regulates the adenylate cyclase system. …
- **Health effects:** Cholera toxin (Ctx) is responsible for the harmful effects of cholera infection, an an infectious gastroenteritis. In its most severe forms, cholera is one of the most rapidly fatal illnesses known.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2623">T3DB T3D2623</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 9012-63-9</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Reid_1995_reference](drugs/toxin_cholera_toxin/CholeraToxin_Reid1995_reference.md) | — | 1-compartment (no model) | 0 | Reid JM et al., Preclinical pharmacology of cholera tox…, Cancer chemotherapy and pha… (1995) | [10.1007/BF00689194](https://doi.org/10.1007/BF00689194) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 06:09 | 1:03:06 | 0/1/0 | 0/0/0 | 0/0/0 | 592,510/23,149 | einfracz / qwen3.8-27b | 41 | 3/27 | 41/0 | 0 |

## Coverage

- **PubMed hits:** 443 matched, 184 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reid_1995.pdf` | Reid JM et al., Preclinical pharmacology of cholera tox…, Cancer chemotherapy and pha… (1995) | popPK | 10 | [10.1007/BF00689194](https://doi.org/10.1007/BF00689194) | [7767946](https://pubmed.ncbi.nlm.nih.gov/7767946) | The paper reports specific quantitative pharmacokinetic parameters (half-lives, clearance, Vd) for cholera toxin in mice, with all numeric values explicitly provided in the text. |
| `Janicot_1987.pdf` | Janicot M et al., Fate of injected 125I-labeled cholera t…, European journal of biochem… (1987) | popPK | 9 | [10.1111/j.1432-1033.1987.tb10816.x](https://doi.org/10.1111/j.1432-1033.1987.tb10816.x) | [3816813](https://pubmed.ncbi.nlm.nih.gov/3816813) | The paper reports quantitative time-course data on the uptake, subcellular localization (percent of injected dose, fold enrichment), and intracellular processing of cholera toxin in rat liver. |

<sub>queue written 2026-11-11 06:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Naser_2004 | irrelevant | 0 | 0 | The paper uses cholera toxin as a growth factor in cell culture media to cultivate human sebocytes and does not report any toxicokinetic parameters (e.g., half-life, clearance) for cholera toxin itself. |
| popPK | Abe_2006 | irrelevant | 0 | 0 | The paper uses cholera toxin solely as a comparative adjuvant in an immunology study and reports no toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for the toxin. |
| popPK | Al-Mamun_2023 | irrelevant | 0 | 0 | The paper focuses on in silico screening of phytochemicals for anti-diarrheal potential and contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for cholera toxin itself. |
| PGx | Ali-Rahmani_2011 | not_relevant | 2 | 5 | Paper studies HFE variants and sphingolipid binding of cholera toxin, not pharmacokinetic/pharmacodynamic effects of the drug itself. |
| popPK | Andrew_2013 | irrelevant | 0 | 0 | The paper studies Chlamydia muridarum infection, and cholera toxin is used only as an adjuvant in the vaccine, with no kinetic parameters reported for it. |
| popPK | Azimi_2015 | irrelevant | 0 | 0 | The paper is a conceptual hypothesis regarding the therapeutic mechanism of cholera toxin in cystic fibrosis and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Balachandran_2002 | irrelevant | 0 | 0 | The paper focuses on pneumococcal pathogenesis and immunity, using cholera toxin only as an immunological adjuvant, with no kinetic parameters reported for the toxin itself. |
| PGx | Barth_2020 | not_relevant | 0 | 0 | The paper studies viral satellites and their effect on phage gene expression and mobility, not the pharmacokinetics or pharmacodynamics of cholera toxin as a drug in humans. |
| popPK | Bernard_1991 | irrelevant | 0 | 0 | The paper uses cholera toxin only as a pharmacological stimulus to investigate cholesteryl ester metabolism in macrophages, and it reports no quantitative toxicokinetic parameters for the toxin itself. |
| popPK | Berry_2004 | irrelevant | 0 | 0 | The paper uses cholera toxin solely as an adjuvant in a vaccine study and does not report any pharmacokinetic or toxicokinetic parameters (e.g., half-life, clearance, distribution) for cholera toxin itself. |
| PGx | Block_1984 | not_relevant | 0 | 0 | The paper describes cell line mutants with altered cAMP signaling pathways; it does not report a pharmacogenomic effect (genotype-dependent change) on the pharmacokinetics or pharmacodynamics of cholera toxin in a biological context. |
| popPK | Bogaert_2009 | irrelevant | 0 | 0 | The paper focuses on immune responses to Streptococcus pneumoniae in mice, with cholera toxin used only as a vaccine adjuvant, and no toxicokinetic parameters for cholera toxin are reported. |
| popPK | Cenci_1995 | irrelevant | 0 | 0 | The paper studies gastric candidiasis in mice and uses cholera toxin solely as an immunological modulator to assess Th1/Th2 responses, reporting no toxicokinetic parameters for cholera toxin. |
| popPK | Cil_2017 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of the CFTR inhibitor (R)-BPO-27, not the toxicokinetic parameters of the subject substance cholera toxin. |
| popPK | Cline_1976 | irrelevant | 0 | 0 | The paper investigates ricinoleate as the primary subject, using cholera toxin only as a comparator to demonstrate that cholera toxin does not alter intestinal permeability (clearance of markers), without reporting quantitative kinetic parameters for the toxin itself. |
| popPK | Cornelli_1990 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for GM1 ganglioside, using cholera toxin only as an analytical reagent for detection. |
| popPK | Das_2018 | irrelevant | 0 | 0 | The paper describes a nanoparticle therapeutic strategy for neutralizing cholera toxin and reports binding affinity/efficacy data for the decoy nanoparticles, but it does not report any quantitative toxicokinetic parameters (such as half-life, clearance, volume of distribution, or partition coefficients) for the cholera toxin itself in any organism. |
| popPK | Davids_2006 | irrelevant | 0 | 0 | The paper focuses on the role of the polymeric immunoglobulin receptor in defense against Giardia; cholera toxin is mentioned only in a single concluding sentence as prior evidence for pIgR-mediated neutralization, with no quantitative toxicokinetic parameters provided. |
| popPK | Ding_2009 | irrelevant | 0 | 0 | Cholera toxin is used solely as an adjuvant in a study of Helicobacter pylori immunity, with no kinetic parameters reported for the toxin itself. |
| PGx | Dixit_2014 | not_relevant | 0 | 0 | The paper characterizes genetic determinants of cholera toxin expression and antibiotic resistance in Vibrio cholerae bacteria, but does not investigate how human genetic variants influence the pharmacokinetics or pharmacodynamics of cholera toxin. |
| popPK | Ekong_2009 | irrelevant | 0 | 0 | The paper investigates the immunological efficacy of a vaccine adjuvant (CTA2B, a nontoxic cholera toxin derivative) and does not report quantitative toxicokinetic parameters such as half-life or clearance for the substance. |
| popPK | Fadahunsi_2025 | irrelevant | 0 | 0 | The paper describes the in silico design of a vaccine where cholera toxin subunit B is used solely as an adjuvant, and no toxicokinetic parameters for the toxin itself are reported. |
| popPK | Fang_2019 | irrelevant | 0 | 0 | The paper is a survey of bacterial prevalence and genetics in environmental samples and contains no toxicokinetic parameters for cholera toxin. |
| popPK | Farack_1983 | irrelevant | 0 | 0 | The paper focuses on the secretagogue mechanism of deoxycholic acid, and cholera toxin is used only as a positive control for the inhibitor RMI 12330 A without reporting its kinetic parameters. |
| popPK | Feldman_1980 | irrelevant | 0 | 0 | The study measures enzyme activity (carbonic anhydrase) rather than toxicokinetic parameters like half-life or clearance for cholera toxin. |
| popPK | Fihn_2001 | irrelevant | 0 | 0 | The paper measures the transport kinetics of 51Cr-EDTA and 14C-mannitol, using cholera toxin only as an agent to induce fluid secretion, rather than measuring kinetic parameters of the toxin itself. |
| popPK | Flemström_1999 | irrelevant | 0 | 0 | The study investigates mucus permeability and secretory responses, using cholera toxin as a challenge agent without reporting kinetic parameters (half-life, clearance, etc.) for its disposition. |
| PGx | Ghoubay-Benallaoua_2011 | not_relevant | 0 | 0 | The paper studies limbal cell culture kinetics and does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of cholera toxin. |
| popPK | Giannella_1976 | irrelevant | 0 | 0 | The study focuses on Salmonella typhimurium, using cholera toxin only as a comparator for permeability, and does not report kinetic parameters for cholera toxin. |
| popPK | Goerg_1980 | irrelevant | 0 | 0 | The paper studies intestinal fluid and electrolyte transfer (secretion/absorption rates) rather than the systemic toxicokinetic disposition parameters (half-life, clearance, distribution) of the toxin. |
| popPK | Gong_2015 | irrelevant | 0 | 0 | The paper studies H. pylori vaccine efficacy in mice where cholera toxin is used solely as a comparator adjuvant, reporting no toxicokinetic parameters for cholera toxin itself. |
| PGx | Gouy_1994 | not_relevant | 0 | 0 | The paper describes a mechanism of action/cell signaling (calcium influx) triggered by the B subunit of cholera toxin, not a genetic variation in the host that alters the PK/PD of the toxin. |
| popPK | Hays_2016 | irrelevant | 0 | 0 | The paper studies ETEC vaccine efficacy in mice using cholera toxin only as an adjuvant, with no kinetic parameters for cholera toxin itself. |
| popPK | Hirano_2003 | irrelevant | 0 | 0 | Cholera toxin appears only as an adjuvant in a study on Haemophilus influenzae clearance; no kinetic parameters for the toxin itself are reported. |
| popPK | Hitzler_2011 | irrelevant | 0 | 0 | Cholera toxin is used solely as a vaccine adjuvant in an immunology study, with no kinetic parameters reported for it. |
| popPK | Hocking_1999 | irrelevant | 0 | 0 | The paper focuses on identifying Helicobacter pylori vaccine antigens in mice, where cholera toxin is used solely as an adjuvant and no toxicokinetic parameters for cholera toxin are reported. |
| popPK | Hong_2010 | irrelevant | 0 | 0 | Cholera toxin is used as an adjuvant for a vaccine study, and no toxicokinetic parameters for it are reported. |
| popPK | Hotomi_1998 | irrelevant | 0 | 0 | The paper investigates immunological responses and bacterial clearance kinetics, using cholera toxin only as an adjuvant without reporting any toxicokinetic parameters for the toxin itself. |
| popPK | Hotomi_2002 | irrelevant | 0 | 0 | Cholera toxin is used as an immunological adjuvant for Haemophilus influenzae research, and the paper reports immune responses rather than kinetic parameters for cholera toxin. |
| popPK | Hotomi_2005 | irrelevant | 0 | 0 | The paper investigates immune responses to Haemophilus influenzae vaccines where cholera toxin is used only as an adjuvant, with no kinetic parameters reported for cholera toxin itself. |
| popPK | Hou_2002 | irrelevant | 0 | 0 | The paper uses cholera toxin as an adjuvant in an immunization study and reports immune responses (antibody levels), not toxicokinetic parameters (e.g., half-life, clearance) for cholera toxin. |
| PGx | Imai_2004 | not_relevant | 0 | 0 | The paper investigates the immunogenicity of a toxin and the effect of an MHC haplotype on antibody production, which is an immune response, not a pharmacokinetic or pharmacodynamic parameter of the drug cholera toxin itself. |
| popPK | Ishiwata-Endo_2022 | irrelevant | 0 | 0 | The paper discusses the enzymatic mechanism of cholera toxin and host protein hydrolysis (ARH family) but does not report quantitative toxicokinetic parameters (e.g., clearance, half-life, distribution) for the toxin itself in vivo. |
| popPK | Jiao_2002 | irrelevant | 0 | 0 | The paper studies vaccine efficacy and bacterial clearance, with cholera toxin appearing only as an adjuvant/co-exposure and no kinetic parameters provided. |
| PGx | Jubyda_2023 | not_relevant | 0 | 0 | The paper describes antimicrobial resistance patterns and genomic changes in Vibrio cholerae, not the pharmacokinetics or pharmacodynamics of the cholera toxin. |
| PGx | Khatrawi_2026 | not_relevant | 0 | 0 | The paper reports on the computational design of a vaccine candidate using cholera toxin as an adjuvant, not on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cholera toxin. |
| popPK | Kikuta_1990 | irrelevant | 0 | 0 | The paper studies cholera toxin B subunit as an adjuvant for influenza vaccines in mice and reports immune response outcomes (antibody levels, protection), not toxicokinetic parameters (half-life, clearance, etc.) for the toxin. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The paper describes the immunogenicity of a bacterial vaccine candidate (Vibrio cholerae strains expressing TcpA) and does not investigate pharmacogenomic effects on the PK or PD of cholera toxin. |
| PGx | Kim_2024 | not_relevant | 0 | 0 | The paper concerns Japanese encephalitis virus vaccine development; cholera toxin B is used only as a scaffold/adjuvant, and there is no report of pharmacogenomic effects on PK or PD parameters. |
| popPK | Klemke_2000 | irrelevant | 0 | 0 | The paper studies the signal transduction properties of the G protein XLalphas, using cholera toxin only as an enzymatic tool to detect interactions, rather than characterizing the toxicokinetics of cholera toxin itself. |
| popPK | Klinz_1990 | irrelevant | 0 | 0 | The paper describes cellular mechanistic effects (G-protein regulation) in vitro, not quantitative toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Kuipers_2016 | irrelevant | 0 | 0 | The paper studies the immunological mechanism of cholera toxin subunit B as an adjuvant against pneumococcal infection, not the toxicokinetic disposition of the toxin itself. |
| popPK | Kuipers_2017 | irrelevant | 0 | 0 | The paper investigates pneumococcal colonization and immune response using cholera toxin subunit B (CTB) as an adjuvant, not as the subject of toxicokinetic analysis. |
| popPK | Kurono_1999 | irrelevant | 0 | 0 | The paper is an immunology study where cholera toxin is used as an adjuvant, reporting immune parameters (antibody titers) rather than toxicokinetic parameters of the toxin itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the development of a Klebsiella pneumoniae nanovaccine using cholera toxin B subunit as a carrier/adjuvant, reporting immunogenicity and protection outcomes rather than quantitative toxicokinetic parameters for cholera toxin itself. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper uses cholera toxin as a reference adjuvant control for H. pylori vaccines in mice and reports no toxicokinetic parameters (half-life, clearance, etc.) for cholera toxin itself. |
| popPK | Lu_2010 | irrelevant | 0 | 0 | The paper reports on the immunogenicity of a pneumococcal vaccine where cholera toxin is used solely as an adjuvant, providing no toxicokinetic parameters for cholera toxin itself. |
| PGx | López-Paniagua_2017 | not_relevant | 0 | 0 | The paper studies cell culture conditions for limbal epithelial stem cells and does not investigate the pharmacokinetics or pharmacodynamics of cholera toxin in humans or animal models, nor does it involve any genetic variants. |
| PGx | Melmed_1983 | not_relevant | 0 | 0 | The paper studies how cholera toxin affects lipoprotein lipase activity as a tool for signaling pathway analysis, rather than how gene variants affect the PK/PD of cholera toxin as a therapeutic agent. |
| popPK | Monteiro_1999 | irrelevant | 0 | 0 | The study reports hemodynamic and functional parameters (GFR, urinary flow, sodium reabsorption) of the kidney tissue itself, not toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) of the cholera toxin substance. |
| popPK | Moro-Sibilot_2016 | irrelevant | 0 | 0 | The paper uses cholera toxin as an immunogen to study IgA-secreting cell migration, reporting no toxicokinetic parameters. |
| PGx | Murphy_2008 | not_relevant | 0 | 0 | The paper describes bacterial genetics and pathogenicity islands in Vibrio cholerae, not human pharmacogenomics or drug PK/PD. |
| PGx | Nagata_1984 | not_relevant | 1 | 0 | The paper investigates the mechanism of interferon resistance in macrophages using cholera toxin as a probe for cAMP pathways, but it does not report a pharmacogenomic effect on the PK or PD of cholera toxin itself as a therapeutic agent. |
| popPK | Ohori_2020 | irrelevant | 0 | 0 | The paper is an immunology study where cholera toxin is used as a mucosal adjuvant to boost antibody responses, not as the subject of toxicokinetic analysis. |
| popPK | Olivier_2007 | irrelevant | 0 | 0 | The paper studies bacterial colonization dynamics, not the toxicokinetic parameters of cholera toxin as a substance. |
| popPK | Park_2018 | irrelevant | 0 | 0 | The paper uses cholera toxin only to induce an inflammatory model to study lymphangiogenesis and does not report any quantitative toxicokinetic parameters for the toxin itself. |
| popPK | Parruti_1993 | irrelevant | 0 | 0 | The paper studies the expression of beta-arrestin-1, using cholera toxin only as a pharmacological inducer of cAMP, and reports no toxicokinetic parameters for cholera toxin itself. |
| popPK | Pasolli_2000 | irrelevant | 0 | 0 | The paper uses cholera toxin solely as an analytical reagent for detection and does not report any toxicokinetic parameters for the toxin. |
| PGx | Pierce_1987 | not_relevant | 0 | 0 | The paper studies the immunogenicity of live Vibrio cholerae vaccines in rabbits and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cholera toxin as a drug in humans. |
| popPK | Rahman_2026 | irrelevant | 0 | 0 | The paper is an in-silico study investigating phytochemical inhibitors of cholera toxin subunit B, and reports no toxicokinetic parameters (half-life, clearance, etc.) for cholera toxin itself. |
| PGx | Rahman_2026 | not_relevant | 0 | 0 | The paper investigates in-silico pharmacodynamics of phytochemicals against cholera toxin, not how human gene variants alter the PK/PD of a specific drug. |
| popPK | Rao_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell signaling where cholera toxin is used as a pharmacological tool to probe G-protein pathways, not as a subject of toxicokinetic analysis. |
| popPK | Reilly_1981 | irrelevant | 0 | 0 | The paper studies the biochemical mechanism of cholera toxin on adenylate cyclase in vitro, not the toxicokinetic parameters (half-life, clearance, etc.) of the substance. |
| popPK | Rollwagen_1993 | irrelevant | 0 | 0 | The paper investigates immune responses to Campylobacter and uses cholera toxin only as a cross-reactive comparator/adjuvant, containing no toxicokinetic parameters for cholera toxin. |
| PGx | Rosen_1979 | not_relevant | 2 | 5 | The paper uses cholera toxin to select cell variants and study cAMP signaling pathways, not as a drug whose PK/PD is modified by a specific pharmacogenomic variant in a clinical or physiological context. |
| popPK | Rost_1991 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ganglioside GM1, not cholera toxin; cholera toxin is used only as an analytical reagent for quantification. |
| popPK | Sabirov_2001 | irrelevant | 0 | 0 | The paper studies the immune response to a bacterial infection (NTHi) in mice, where cholera toxin is used only as an immunological adjuvant, not as the subject substance for toxicokinetic analysis. |
| popPK | Sabirov_2004 | irrelevant | 0 | 0 | The paper uses cholera toxin solely as an adjuvant for an immunization study to enhance bacterial clearance, with no toxicokinetic or pharmacokinetic parameters for the toxin itself reported. |
| popPK | Schlenker_2024 | irrelevant | 0 | 0 | The paper investigates the immunological mechanism (ER stress and STING activation) of cholera toxin in mouse macrophages and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cholera toxin. |
| PGx | Schulz_2012 | not_relevant | 0 | 0 | The paper studies the effect of AhR ligands on peanut allergy sensitization where cholera toxin is used only as an adjuvant, and it does not investigate pharmacogenomic variations affecting the PK or PD of cholera toxin itself. |
| popPK | Seven_2020 | irrelevant | 0 | 0 | The paper uses cholera toxin B subunit solely as a delivery vehicle for the neurotoxin saporin to study neuron death mechanisms, without reporting any toxicokinetic parameters (half-life, clearance, etc.) for cholera toxin itself. |
| popPK | Shahror_2026 | irrelevant | 0 | 0 | The paper uses cholera toxin B (CTB) solely as an anterograde tracer for axonal sprouting, not as the subject of toxicokinetic analysis, and no kinetic parameters for cholera toxin are reported. |
| popPK | Siflinger-Birnboim_1993 | irrelevant | 0 | 0 | The paper measures endothelial permeability to albumin in vitro, not the toxicokinetic parameters (half-life, clearance, etc.) of cholera toxin itself. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper studies Cryptococcus neoformans, and cholera toxin B is only mentioned as a reagent for lipid raft staining, with no kinetic data for the toxin itself. |
| popPK | Sjöqvist_1993 | irrelevant | 0 | 0 | The paper reports kinetics for tracer molecules (51Cr-EDTA and [14C]mannitol) used to study intestinal permeability, not for cholera toxin itself, which was only the inducing agent. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper uses cholera toxin subunit B (CTB) as a targeting ligand for nanoparticle delivery in glaucoma therapy, not as the subject of toxicokinetic analysis. |
| popPK | Spira_1983 | irrelevant | 0 | 0 | The paper studies the colonization of the intestine by Vibrio cholerae bacteria in rabbits, not the toxicokinetics of the cholera toxin protein as a substance. |
| PGx | Streuli_1985 | not_relevant | 0 | 0 | The paper reports in vitro cell variants with altered ganglioside biosynthesis affecting cholera toxin binding, but it does not report a pharmacogenomic effect on PK/PD parameters in a pharmacological context involving drug treatment. |
| popPK | Talwar_1992 | irrelevant | 0 | 0 | The paper discusses vaccines for fertility control and cancer (targeting hCG and GnRH) and contains no data, parameters, or mention of cholera toxin. |
| popPK | Tamura_1996 | irrelevant | 0 | 0 | Cholera toxin is used only as an adjuvant for influenza vaccine immunization, and no kinetic parameters for cholera toxin itself are reported. |
| popPK | Tanaka_2007 | irrelevant | 0 | 0 | The paper investigates immune responses to phosphorylcholine, and cholera toxin is used only as a mucosal adjuvant, not as the subject substance for kinetic analysis. |
| popPK | Thiagarajah_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life) and potency (KI) for the drug CFTR(inh)-172, while cholera toxin is used only as an experimental inducer/comparator. |
| popPK | Trzciński_2008 | irrelevant | 0 | 0 | The paper studies immune protection in mice where cholera toxin is used solely as an adjuvant, and no toxicokinetic parameters for cholera toxin are reported. |
| popPK | Tusé_2022 | irrelevant | 2 | 1 | The subject substance is EPICERTIN (a recombinant analog of cholera toxin B subunit), not cholera toxin itself, so the kinetic parameters belong to a different substance. |
| PGx | Ullah_2021 | not_relevant | 0 | 0 | The paper reports in silico design of a vaccine using cholera toxin B subunit as an adjuvant, not a pharmacogenomic study of cholera toxin PK/PD. |
| popPK | Uren_2005 | irrelevant | 0 | 0 | The paper is an immunological study on protection against infection in mice and does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for cholera toxin. |
| popPK | Vaerman_1985 | irrelevant | 0 | 0 | The paper focuses on the immunological neutralization of cholera toxin by IgA antibodies and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Velin_2005 | irrelevant | 0 | 0 | The paper investigates immune mechanisms (mast cells) in Helicobacter clearance, using cholera toxin only as a vaccine adjuvant, and reports no toxicokinetic parameters for the toxin itself. |
| popPK | Vermoote_2013 | irrelevant | 0 | 0 | Cholera toxin is used only as a mucosal adjuvant in a vaccine study, with no kinetic parameters reported for it. |
| popPK | Wan_1982 | irrelevant | 1 | 0 | The paper investigates cholera toxin-HRP conjugates as neuroanatomical probes in rats and reports only qualitative comparisons of relative residence times (e.g., "twice as long") without providing specific quantitative toxicokinetic parameters like half-lives or rate constants for the toxin itself. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for NgR-Fc, and cholera toxin is used only as an anterograde tracer, not as the subject substance. |
| popPK | Waugh_2013 | irrelevant | 0 | 0 | The paper describes a cell fractionation protocol and mentions cholera toxin only in the context of GM1 as a receptor, providing no toxicokinetic parameters or numeric data for the toxin itself. |
| popPK | Yoshii_2026 | irrelevant | 0 | 0 | The paper is an immunology study on mucosal vaccination where cholera toxin serves as an immunogen/challenge agent, reporting no toxicokinetic parameters. |
| PGx | Yoshikawa_2002 | not_relevant | 0 | 0 | The study investigates genetic variation (MHC haplotypes) in its effect on immune responses to an influenza vaccine, where cholera toxin is only used as an adjuvant; it does not examine pharmacogenomic effects on the PK or PD parameters of cholera toxin itself. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | Cholera toxin is used solely as a retrograde neuroanatomical tracer, not as a drug subject to pharmacogenomic analysis. |
| popPK | Zeng_2015 | irrelevant | 0 | 0 | The paper focuses on the immunological efficacy of compound 48/80 and does not report toxicokinetic parameters for cholera toxin, which is used only as a comparator adjuvant. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper studies cholera toxin subunit B (CTB) as a targeting ligand on liposomes, not the toxicokinetics of cholera toxin itself as a toxicological subject. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper uses cholera toxin B subunit as an adjuvant in a vaccine study and reports immune responses to Chlamydia, not toxicokinetic parameters for cholera toxin. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | The paper focuses on P. aeruginosa vaccine development, and cholera toxin (specifically CTB) is used only as a comparator adjuvant, with no kinetic parameters reported for it. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on an RSV nanovaccine and uses cholera toxin B only as a comparator adjuvant, with no toxicokinetic parameters reported for cholera toxin. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | Cholera toxin subunit B (CTB) is used solely as an experimental tracer to label axons, not as the subject of toxicokinetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholera_toxin%5D&body=Drug%3A%20cholera_toxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cholera_toxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 06:04 UTC</sub>
