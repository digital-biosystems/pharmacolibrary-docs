<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Streptolysin O (Streptococcus pyogenes)&quot;}]"></div>

# Streptolysin O (Streptococcus pyogenes)

- **generic name:** Streptolysin O (Streptococcus pyogenes)
- **T3DB:** [T3D2622](http://www.t3db.ca/toxins/T3D2622) · **PubChem:** none

## About

Streptolysin O is a hemolytic exotoxin produced by Streptococcus pyogenes. Streptolysin O is an oxygen-labile leukocidin.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Streptolysin O is a hemolytic exotoxin produced by Streptococcus pyogenes.
- **Mechanism of toxicity:** Streptolysin O binds to cholesterol on eukaryotic cell membranes, then is able to lyse them.
- **Health effects:** Streptolysin O is a hemolytic exotoxin.
- **Acute toxicity:** LD50: 8 ug/mg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2622">T3DB T3D2622</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 98072-47-0</small></p>

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
| 2026-11-11 17:33 | 33:24 | 0/0/0 | 0/0/0 | 0/0/0 | 710,167/21,472 | ollama / glm-5.3-flash | 29 | 4/25 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 81 matched, 81 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2013.pdf` | Chen CK et al., [Study on activation of benzo(a)pyrene…, Zhonghua lao dong wei sheng… (2013) | pd | 5 |  | [24064117](https://www.ncbi.nlm.nih.gov/pubmed/24064117) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-11 17:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_1990 | irrelevant | 0 | 0 | Streptolysin-O is used only as a reagent to permeabilize cells; no toxicokinetic parameters of the toxin are reported. |
| popPK | Ashbaugh_2000 | irrelevant | 0 | 0 | This is a colonization/immune-response study; no toxicokinetic parameters (half-life, clearance, rate constants) for streptolysin O are reported, only anti-SLO antibody titres. |
| popPK | Ashikari_2006 | irrelevant | 0 | 0 | The paper concerns indocyanine green dye retention in human eyes, with no toxicokinetic parameters for streptolysin O. |
| popPK | Attali_2004 | irrelevant | 0 | 0 | In vitro cell lysis study with no kinetic parameters of streptolysin O disposition; substance only used as an experimental reagent. |
| popPK | Ayllon_2021 | irrelevant | 1 | 1 | This is an in vitro liposome/hemolysis inhibition study; SLO is the target toxin, not a substance with toxicokinetic parameters, and the few half-life values cited belong to liposomes from prior references, not SLO's own disposition. |
| popPK | Basile_2011 | irrelevant | 0 | 0 | The subject substance is CVX-4164 (an IgG-dye conjugate) in rabbits, not streptolysin O; streptolysin O does not appear at all. |
| popPK | Beekman_2025 | irrelevant | 0 | 0 | The paper models lymphocyte migration and radiation-induced lymphopenia in mice; streptolysin O does not appear as a subject substance, and no kinetic parameters for it are present. |
| popPK | Biffen_1993 | irrelevant | 0 | 0 | Streptolysin-O is only used as a permeabilizing reagent in a cell-signaling study; no toxicokinetic parameters for it are reported. |
| popPK | Boesewetter_2006 | irrelevant | 0 | 0 | In vitro gene-expression/dose-response study of A549 cells with no toxicokinetic parameters for streptolysin O. |
| popPK | Bruce_2002 | irrelevant | 0 | 0 | Streptolysin-O appears only as a permeabilizing reagent in an in vitro cell signaling study with no toxicokinetic parameters for the toxin. |
| popPK | Buekers_2022 | irrelevant | 0 | 0 | This is an HBM exposure study of glyphosate/AMPA in children; streptolysin O does not appear at all as a study substance, so no kinetic parameters exist for it. |
| popPK | Buekers_2023 | irrelevant | 0 | 0 | The paper concerns arsenic species in human urine with no kinetic parameters for streptolysin O. |
| popPK | Bufan_2024 | irrelevant | 0 | 0 | This is a mouse immunology study of micronutrient supplementation and influenza vaccine response; streptolysin O is never mentioned and no toxicokinetic parameters of any kind are present. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper concerns benzo(a)pyrene metabolism by lipoxygenase; streptolysin O is not the subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Cheng_2019 | irrelevant | 0 | 0 | Cell biology mechanistic study of SLO-induced LAP in endothelial cells; no toxicokinetic parameters of SLO at all, despite some percentages in figures. |
| popPK | Cheng_2026 | irrelevant | 1 | 1 | In vitro cell biology study of S. pyogenes virulence/autophagy with no kinetic parameters of streptolysin O measured or reported. |
| popPK | Chávez_2019 | irrelevant | 0 | 0 | Paper studies Slo3 potassium channel isoform expression in mouse tissues; no streptolysin O toxicokinetic parameters. |
| popPK | Datta_2005 | irrelevant | 0 | 0 | A genetic/virulence study of streptolysin S; no toxicokinetic parameters for streptolysin O are reported anywhere. |
| popPK | Deng_2026 | irrelevant | 0 | 0 | This is a clinical case report with genomic/virulence gene analysis of S. pyogenes; no toxicokinetic parameters (half-life, clearance, partition coefficients, PBPK, etc.) for streptolysin O are reported or referenced. |
| popPK | Duijm_1997 | irrelevant | 0 | 0 | The kinetic parameters (blood refreshment times) describe fluorescein dye in glaucoma patients, not the toxicokinetics of streptolysin O, which never appears as the subject substance. |
| popPK | Dye_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of theophylline in cats, not streptolysin O from Streptococcus pyogenes. |
| popPK | Dye_1990 | irrelevant | 0 | 0 | The kinetic data concern theophylline, not streptolysin O, which does not appear as the subject substance. |
| popPK | Elbendary_2023 | irrelevant | 0 | 0 | This is a clinical treatment trial measuring anti-streptolysin O antibody titers as a biomarker of streptococcal infection; no toxicokinetic parameters (half-life, clearance, Vd, rate constants, etc.) for streptolysin O are reported. |
| popPK | Escajadillo_2017 | irrelevant | 1 | 1 | The paper is an in vitro/animal efficacy study of RBC nanosponges against SLO; the only kinetic-like number (half-life ~40 h) belongs to the nanosponge vehicle, not to SLO itself, and no SLO toxicokinetic parameters are quantified. |
| PGx | Fujikawa_2026 | not_relevant | 0 | 0 | Paper reports an engineered SLO toxin variant (protein mutation, not host gene variant) affecting assay permeabilization performance; no pharmacogenomic effect on PK/PD of a drug. |
| popPK | Galli_1994 | irrelevant | 0 | 0 | Streptolysin-O is used only as a technical permeabilization reagent in CHO cell exocytosis assays; no kinetic parameters of SLO's own disposition are reported. |
| popPK | Ghezzi_2010 | irrelevant | 0 | 0 | No streptolysin O toxicokinetic parameters are present; the paper concerns Drosophila BK channels and drug tolerance, with no numeric values. |
| popPK | Ghezzi_2011 | irrelevant | 0 | 0 | Review on Drosophila drug tolerance mechanisms; streptolysin O is not the subject and no toxicokinetic parameters appear. |
| popPK | Ghezzi_2017 | irrelevant | 0 | 0 | This paper concerns alcohol tolerance epigenetics in Drosophila and contains no toxicokinetic parameters for streptolysin O at all. |
| popPK | Granneman_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of theophylline with zileuton in humans; streptolysin O does not appear at all. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | This is a drug-inhibitor (luteolin vs. SLO) mechanism study with binding kinetics (KD, ka, kd) for luteolin, not toxicokinetic disposition parameters of SLO in vivo. |
| popPK | Gupta_2015 | irrelevant | 0 | 0 | No kinetic parameters for streptolysin O are reported; the paper concerns ZW800 imaging agent in mice, with no SLO toxicokinetic data. |
| popPK | HALBERT_1961 | irrelevant | 2 | 5 | This is an acute toxicity study (LD50, ECG effects) in rabbits — it reports lethal dose endpoints, not toxicokinetic parameters such as half-life, clearance, or rate constants for streptolysin O. |
| popPK | HANNA_1965 | irrelevant | 0 | 0 | The substance studied is streptococcal pyrogenic exotoxin (not streptolysin O), and no quantitative kinetic parameter for streptolysin O itself is reported; streptolysin O appears only as a comparator in discussion. |
| popPK | Hendeles_1985 | irrelevant | 0 | 0 | The paper concerns theophylline pharmacokinetics in asthma patients; streptolysin O does not appear as the subject substance. |
| popPK | Hill_1988 | irrelevant | 0 | 0 | The paper reports kinetic parameters (clearance, absorption times) for theophylline in children, not for streptolysin O; streptolysin O does not appear at all. |
| popPK | Håkansson_2005 | irrelevant | 0 | 0 | Mechanistic cell biology study of SLO's effect on bacterial evasion with no quantitative kinetic parameters of SLO disposition. |
| popPK | Inoue_1976 | irrelevant | 0 | 0 | In vitro mechanism-of-hemolysis study (hit numbers, not kinetic parameters such as half-life, clearance, or rate constants) with no quantitative toxicokinetic data. |
| popPK | Iwasaki_1989 | irrelevant | 0 | 0 | This paper concerns theophylline pharmacokinetics, not streptolysin O toxicokinetics. |
| popPK | Keyel_2011 | irrelevant | 1 | 1 | This is an in vitro cell biology study of membrane blebbing clearance; no organism-level, human or animal, quantitative toxicokinetic parameters for streptolysin O are measured. |
| popPK | Khemrattrakool_2025 | irrelevant | 0 | 0 | This paper concerns emodepside and ivermectin in mosquitoes; streptolysin O / Streptococcus pyogenes does not appear at all, and no kinetic parameters for the subject substance are reported. |
| PGx | Koroleva_2023 | not_relevant | 0 | 0 | Paper describes electrochemical electrode engineering with streptolysin O for CYP3A4 immobilization; SLO is an electrode modifier, not a gene variant, and no pharmacogenomic effect on erythromycin PK/PD is reported. |
| popPK | Langshaw_2023 | irrelevant | 1 | 0 | Virulence/pathogenesis study of streptolysin O in S. pyogenes infection; no toxicokinetic parameters (half-life, clearance, partitioning, etc.) for SLO are reported. |
| popPK | Li_2013 | irrelevant | 0 | 0 | This is a Drosophila genetics study of benzyl alcohol tolerance via the slo gene; no toxicokinetic parameters for streptolysin O appear anywhere. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper concerns benzyl alcohol (a solvent drug of abuse) effects on the slo BK channel in Drosophila, not streptolysin O of Streptococcus pyogenes, and contains no PK/PD pharmacogenomic effect for that target. |
| popPK | Li_2021 | irrelevant | 0 | 0 | A review of AFM methods in immunology mentioning streptolysin O only as an example of pore-forming toxins, with no kinetic parameters. |
| popPK | Lu_2015 | irrelevant | 1 | 1 | No toxicokinetic parameters for streptolysin O/S. pyogenes; mechanistic cell biology study with bacterial counts in vitro, key results in figures/supplemental material not provided. |
| popPK | Minotti_1992 | irrelevant | 0 | 0 | The paper studies theophylline pharmacokinetics in asthmatic patients; streptolysin O does not appear anywhere as a study substance. |
| popPK | Mucklow_1985 | irrelevant | 0 | 0 | The paper concerns theophylline pharmacokinetics; SLO appears only tangentially if at all, and no SLO kinetic parameters are present. |
| popPK | Musher_1974 | irrelevant | 0 | 0 | Streptolysin O appears only as an in vitro lymphocyte stimulation reagent; no toxicokinetic parameters of any kind are reported. |
| popPK | Napirei_2004 | irrelevant | 0 | 0 | Streptolysin O is used only as a necrosis-inducing reagent on cell lines; no kinetic parameters for it are reported. |
| PGx | Neklason_1999 | not_relevant | 0 | 0 | Paper concerns DHCR7 mutations in Smith-Lemli-Opitz syndrome, no drug (streptolysin O) or PK/PD pharmacogenomic effects. |
| popPK | Nixon_2017 | irrelevant | 0 | 0 | The paper is about scleral lens complications with no streptolysin O toxicokinetic data whatsoever. |
| popPK | Njeshi_2024 | irrelevant | 0 | 0 | The paper reviews toxicokinetics of emodepside, not streptolysin O; the substance of interest never appears as subject. |
| popPK | Peterson_2010 | irrelevant | 0 | 0 | In vitro cytotoxicity dose-response study with no kinetic parameters (half-life, clearance, partitioning) for streptolysin O. |
| popPK | Riegner_2026 | irrelevant | 1 | 1 | In vitro immunology study of GAS-infected human neutrophils with no toxicokinetic parameters (no half-life, clearance, partitioning, or disposition modeling) for streptolysin O. |
| popPK | Rosales_1997 | irrelevant | 0 | 0 | Streptolysin O is used only as a laboratory permeabilization reagent; no toxicokinetic parameters of the toxin itself are measured. |
| popPK | Salamanca-Fernández_2024 | irrelevant | 0 | 0 | This is a human biomonitoring study of phthalate metabolites and BDNF with no toxicokinetic parameters at all; streptolysin O from Streptococcus pyogenes does not appear anywhere in the paper. |
| popPK | Sarfati_2008 | irrelevant | 0 | 0 | The paper is a review of CD47/TSP-1/SIRP-alpha immunology with no toxicokinetic parameters for streptolysin O; the substance does not even appear. |
| popPK | Schillemans_2023 | irrelevant | 0 | 0 | The paper is a human biomonitoring/epidemiology study of PFAS and BMI; streptolysin O does not appear as a substance and no kinetic parameters for it exist. |
| popPK | Schreiber_1998 | irrelevant | 0 | 0 | The paper concerns the Slo3 potassium channel in spermatocytes, not streptolysin O from Streptococcus pyogenes, and contains no kinetic parameters for that substance. |
| popPK | Seebeck_2000 | irrelevant | 0 | 0 | Streptolysin O appears only as a permeabilising reagent in rat mast-cell secretion assays; no kinetic parameters for streptolysin O are reported. |
| popPK | Shao_1999 | irrelevant | 0 | 0 | The paper studies BK potassium channels in rat hippocampal neurons; streptolysin O does not appear and no toxicokinetic parameters for it are present. |
| popPK | Soboslay_1994 | irrelevant | 0 | 0 | Streptolysin O (SL-O) appears only as an in vitro mitogenic/immune-response reagent; no kinetic parameter for it is reported anywhere, human onchocerciasis immunology study of ivermectin. |
| popPK | Sontag_1991 | irrelevant | 0 | 0 | Streptolysin-O appears only as a permeabilization reagent in vitro, with no kinetic parameters for SLO itself. |
| popPK | Srivastava_2002 | irrelevant | 0 | 0 | Streptolysin O appears only via anti-streptolysin-O antibody titers as a marker of infection; no kinetic parameters (half-life, clearance, etc.) for the toxin are reported. |
| popPK | Subramanian_2020 | irrelevant | 1 | 1 | Streptolysin O appears only as a comparator toxin in in vitro hemolysis/binding assays; no toxicokinetic parameters for SLO, and even the peptide ED50 values live in Appendix Table S3 not provided. |
| popPK | Sugiura_2026 | irrelevant | 0 | 0 | Streptolysin O appears only as an anti-streptolysin O antibody titre in a clinical case report; no kinetic parameters (half-life, clearance, etc.) for the toxin are reported. |
| popPK | Timmer_2009 | irrelevant | 0 | 0 | Mechanistic apoptosis/virulence study with no toxicokinetic parameters, no half-life, rate constants, or disposition data. |
| popPK | Tsuchida_1999 | irrelevant | 0 | 0 | Streptolysin O appears only as a permeabilization reagent; no kinetic parameters for streptolysin O itself are reported. |
| popPK | Tune_2021 | irrelevant | 0 | 0 | Sleep/immune response study in mice with SRBC antigen; no toxicokinetic parameters for streptolysin O at all. |
| popPK | Tuomela_2022 | irrelevant | 0 | 0 | Streptolysin O is merely an analytical reagent used to permeabilize cells; no toxicokinetic parameters for SLO are reported, and numeric values live in figures/supplementary data. |
| popPK | Uchiyama_2015 | irrelevant | 0 | 0 | Mechanistic study of SLO's effect on neutrophil function with no toxicokinetic parameters (no half-life, clearance, partition coefficients, or disposition model). |
| popPK | Usenik_2026 | irrelevant | 0 | 0 | The paper is a human biomonitoring study of urinary mercury from dental amalgam, with no kinetic parameters for streptolysin O; SLO does not appear at all. |
| popPK | Valliammai_2020 | irrelevant | 0 | 0 | The paper reports antibiofilm/antivirulence effects of 5-dodecanolide in vitro; no toxicokinetic parameters for streptolysin O or the organism's disposition are quantified. |
| PGx | Velarde_2017 | not_relevant | 2 | 5 | Bacterial toxin gene mutation (nga G330D) altering streptolysin O stability, not a host pharmacogenomic effect on a drug PK/PD parameter. |
| popPK | Wagner_1992 | irrelevant | 0 | 0 | Streptolysin O appears only as a laboratory permeabilizing reagent, not the subject of any kinetic parameter. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | Study concerns CREB regulation of BK channels and benzyl alcohol tolerance in Drosophila; no streptolysin O or PK/PD parameters. |
| PGx | Zhan_2010 | not_relevant | 0 | 0 | SLO is used as a cell permeabilization reagent in a reprogramming study; no gene variant/genotype effect on any PK/PD parameter is reported. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper is an imaging-instrument development study; no toxicokinetic parameters, tables, values, or model outputs for streptolysin_O appear anywhere in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstreptolysin_o_streptococcus_pyogenes%5D&body=Drug%3A%20streptolysin_o_streptococcus_pyogenes%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_streptolysin_o_streptococcus_pyogenes/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
