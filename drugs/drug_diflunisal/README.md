<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;diflunisal&quot;}]"></div>

# diflunisal

- **generic name:** diflunisal
- **ATC codes:** `N02BA11`
- **DrugBank:** [DB00861](https://go.drugbank.com/drugs/DB00861) · **PubChem:** [CID 3059](https://pubchem.ncbi.nlm.nih.gov/compound/3059)
- **molar mass:** 250.1976 g/mol (C13H8F2O3) — DrugBank
- **groups:** approved

## About

Diflunisal is a non-steroidal anti-inflammatory drug used to treat pain, osteoarthritis, and rheumatoid arthritis. It remains an approved medicine, with an authorised product in the European Union, where it is also indicated for familial amyloid neuropathy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2602750](https://www.wikidata.org/wiki/Q2602750) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diflunisal | parent | 250.198 | C13H8F2O3 | DrugBank | [3059](https://pubchem.ncbi.nlm.nih.gov/compound/3059) | Gao_1998 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Gao_1998_reference](drugs/drug_diflunisal/Diflunisal_Gao1998_reference.md) | — | 1-compartment (no model) | 2 | Gao L et al., [Determination of diflunisal in plasma…, Yao xue xue bao = Acta phar… (1998) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Mano_2007_AZTG](drugs/drug_diflunisal/pd_Mano_2007_AZTG.md) | 3'-azido-3'-deoxythymidine glucuronidation (AZTG) ← diflunisal · inhibition effect | — | Mano Y et al., Inhibitory potential of nonsteroidal an…, European journal of clinica… (2007) | [10.1007/s00228-006-0241-9](https://doi.org/10.1007/s00228-006-0241-9) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">in vitro</span> | [Vietri_2000_MPA_glucuronidation_rate](drugs/drug_diflunisal/pd_Vietri_2000_MPA_glucuronidation_rate.md) | MPA glucuronidation ← diflunisal · direct Emax (saturable) effect | — | Vietri M et al., Mycophenolic acid glucuronidation and i…, European journal of clinica… (2000) | [10.1007/s002280000227](https://doi.org/10.1007/s002280000227) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=diflunisal).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `UGT1A9` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), TTR (unknown), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:05 | 1:59 | 0/1/0 | 2/0/0 | 0/0/0 | 193,688/11,640 | einfracz / qwen3.8-27b | 9 | 7/4 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 81 matched, 60 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_1998.pdf` | Gao L et al., [Determination of diflunisal in plasma…, Yao xue xue bao = Acta phar… (1998) | popPK | 9 |  | [11939069](https://pubmed.ncbi.nlm.nih.gov/11939069) | Reports human PK parameters (half-lives) for diflunisal after oral administration, though clearance and volume values are not explicitly listed in the evidence provided. |
| `Ray_1983.pdf` | Ray JE et al., High-performance liquid chromatographic…, Journal of pharmaceutical s… (1983) | popPK | 9 | [10.1002/jps.2600721209](https://doi.org/10.1002/jps.2600721209) | [6663474](https://pubmed.ncbi.nlm.nih.gov/6663474) | The study is a PK study of diflunisal in humans using a two-compartment model, but specific parameter values (CL, V, ka) are not listed, only AUC ratios and qualitative trends. |
| `Mano_2006.pdf` | Mano Y et al., In vitro drug interaction between diflu…, Biopharmaceutics & drug dis… (2006) | pd | 5 | [10.1002/bdd.507](https://doi.org/10.1002/bdd.507) | [16733833](https://www.ncbi.nlm.nih.gov/pubmed/16733833) | metadata signals extractable PD data (IC50) |
| `Vietri_2000.pdf` | Vietri M et al., Inhibition of human liver phenol sulfot…, European journal of clinica… (2000) | pd | 5 | [10.1007/s002280050725](https://doi.org/10.1007/s002280050725) | [10853883](https://www.ncbi.nlm.nih.gov/pubmed/10853883) | metadata signals extractable PD data (IC50) |
| `Abe_2018.pdf` | Abe DO et al., Diflunisal-adjoined cobalt(iii)-polypyr…, Dalton transactions (Cambri… (2018) | pd | 4 | [10.1039/c8dt03448f](https://doi.org/10.1039/c8dt03448f) | [30225483](https://www.ncbi.nlm.nih.gov/pubmed/30225483) | metadata signals extractable PD data (IC50) |
| `Choi_2005.pdf` | Choi JS et al., Role of monocarboxylic acid transporter…, The Journal of pharmacy and… (2005) | pd | 4 | [10.1211/jpp.57.9.0013](https://doi.org/10.1211/jpp.57.9.0013) | [16105239](https://www.ncbi.nlm.nih.gov/pubmed/16105239) | metadata signals extractable PD data (IC50) |
| `Kasuya_2001.pdf` | Kasuya F et al., Inhibitory effect of quinolone antimicr…, Biochemical pharmacology (2001) | pd | 4 | [10.1016/s0006-2952(01)00667-0](https://doi.org/10.1016/s0006-2952(01)00667-0) | [11434910](https://www.ncbi.nlm.nih.gov/pubmed/11434910) | metadata signals extractable PD data (IC50) |
| `McDougall_1988.pdf` | McDougall P et al., Action of the nonsteroidal anti-inflamm…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90790-3](https://doi.org/10.1016/0006-2952(88)90790-3) | [3355604](https://www.ncbi.nlm.nih.gov/pubmed/3355604) | metadata signals extractable PD data (IC50) |
| `Pacifici_1991.pdf` | Pacifici GM et al., Conjugation of benzoic acid with glycin…, Developmental pharmacology… (1991) | pd | 4 | [10.1159/000457499](https://doi.org/10.1159/000457499) | [1811921](https://www.ncbi.nlm.nih.gov/pubmed/1811921) | metadata signals extractable PD data (IC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 |  | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Squires_1999.pdf` | Squires RF et al., Honokiol and magnolol increase the numb…, Neurochemical research (1999) | pd | 4 | [10.1023/a:1021116502548](https://doi.org/10.1023/a:1021116502548) | [10591411](https://www.ncbi.nlm.nih.gov/pubmed/10591411) | metadata signals extractable PD data (EC50) |
| `Ghosal_2011.pdf` | Ghosal A et al., Characterization of human liver enzymes…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.036996](https://doi.org/10.1124/dmd.110.036996) | [21123164](https://www.ncbi.nlm.nih.gov/pubmed/21123164) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kiang_2005.pdf` | Kiang TK et al., UDP-glucuronosyltransferases and clinic…, Pharmacology & therapeutics (2005) | pgx | 5 | [10.1016/j.pharmthera.2004.10.013](https://doi.org/10.1016/j.pharmthera.2004.10.013) | [15781124](https://www.ncbi.nlm.nih.gov/pubmed/15781124) | metadata signals extractable PGX data (UGT1A7) |

<sub>queue written 2026-10-07 06:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bergamo_1989 | not_relevant | 2 | 1 | The paper reports qualitative comparative effects and percentage changes in renal function and thromboxane for standard doses, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., EC50, Emax) for diflunisal. |
| popPK | Berk_2026 | irrelevant | 0 | 0 | This is a clinical efficacy study for ATTR amyloidosis that reports disease progression scores (Kumamoto, PND) and does not contain any pharmacokinetic parameters (CL, V, ka, etc.) for diflunisal. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of general NSAID interactions and does not provide any quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for diflunisal. |
| PD | Brouwers_1994 | not_relevant | 1 | 0 | The text is a qualitative review of NSAID drug interactions and mentions diflunisal only in the context of concentration changes, without providing any numeric PD parameters or exposure-response data. |
| PD | Chen_2005 | not_relevant | 0 | 0 | The paper reports in vitro IC50s and in vivo ED50s for novel compounds, with diflunisal serving only as a qualitative reference for analgesic activity without providing specific numeric PD parameters or exposure-response data for diflunisal. |
| PD | Cheng_2007 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic effects (prolonged profile) and bioavailability ratios, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for diflunisal. |
| PD | Choi_2005 | not_relevant | 3 | 2 | The paper reports IC50 and Ki values for the inhibition of benzoic acid transport by NSAIDs in Caco-2 cells, which is a pharmacokinetic/transport mechanism study, not a pharmacodynamic (therapeutic effect) exposure-response relationship for diflunisal. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of boceprevir and only mentions diflunisal as an enzyme inhibitor in an in vitro assay, reporting no pharmacogenomic effects on diflunisal PK or PD. |
| popPK | Gupta_1991 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of calcium binding in guinea-pig tracheal cartilage, and diflunisal is used only as a tool compound (ATPase inhibitor) rather than as the subject drug for pharmacokinetic analysis. |
| PD | Gupta_1991 | not_relevant | 0 | 0 | The paper studies calcium sequestration in tracheal cartilage and KCl concentration-response curves; diflunisal is only mentioned as a single-point inhibitor of calcium uptake, with no dose-response or PD parameters reported for it. |
| PD | Gøtzsche_1989 | not_relevant | 2 | 1 | The text is a qualitative review summary stating that dose-response effects were small, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed dose-effect curves for diflunisal. |
| PGx | Herman_1994 | not_relevant | 2 | 2 | The paper reports metabolic differences associated with oral contraceptive use and smoking (environmental factors), not with genetic variants or genotypes. |
| popPK | Hung_1998 | irrelevant | 4 | 2 | The study investigates the hepatic disposition of diflunisal esters (prodrugs) in an in situ rat liver model, reporting parameters for the esters and basic moments (MTT) for the metabolite, but does not provide standard population PK parameters (CL, V, ka) for diflunisal itself. |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper compares the pharmacodynamics of transthyretin stabilizers (binding/stabilization) but does not report any pharmacogenomic effects (e.g., gene variant impacts) on the PK or PD of diflunisal. |
| PGx | Jin_1993 | not_relevant | 0 | 0 | The paper describes the cloning and expression of a UGT enzyme and its in vitro activity on diflunisal, but it does not report an association between a human gene variant and a PK or PD parameter in vivo. |
| PD | Johnson_1991 | not_relevant | 1 | 0 | The text is a qualitative review of NSAID therapy in the elderly and mentions diflunisal only in the context of dosage reduction for renal disease, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper reports in vitro UGT inhibition kinetics (IC50) of diflunisal, which is a drug-drug interaction mechanism study, not a pharmacogenomic effect of a gene variant on a PK/PD parameter. |
| popPK | Kasuya_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50 values) in mouse mitochondria, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kiang_2005 | not_relevant | 0 | 0 | The text states that the glucuronidation of diflunisal is not affected by drugs, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Knights_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldosterone glucuronidation inhibition by NSAIDs, not a pharmacokinetic study reporting disposition parameters for diflunisal. |
| PD | Knights_2009 | not_relevant | 3 | 3 | The paper reports in vitro enzyme inhibition kinetics (IC50/Ki) of aldosterone glucuronidation by diflunisal, which is a mechanistic pharmacology study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The paper investigates the inhibition of aldosterone glucuronidation by diflunisal and other NSAIDs, which is a drug-drug interaction or physiological effect, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of diflunisal itself. |
| PD | Lin_2020 | not_relevant | 0 | 0 | The paper discusses patisiran, not diflunisal, and reports clinical outcomes rather than numeric pharmacodynamic parameters. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | The paper focuses on in silico structural profiling and ligand optimization for transthyretin amyloidosis and does not report any pharmacokinetic parameters for diflunisal. |
| PD | Lomoio_2025 | not_relevant | 0 | 0 | The paper is an in silico structural and docking study of TTR variants and ligands (including diflunisal) and does not report any pharmacokinetic or pharmacodynamic exposure-response or dose-response data. |
| PD | Macdonald_1990 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, metabolic pathways) and does not contain any pharmacodynamic or exposure-response data. |
| popPK | Maier_2021 | irrelevant | 0 | 0 | The paper studies the effect of antibiotics on gut microbiota and does not involve diflunisal or its pharmacokinetics. |
| PD | Maier_2021 | not_relevant | 0 | 0 | The paper focuses on antibiotic activity spectra and antidote screening for gut bacteria; diflunisal is mentioned only as a tested compound in a single-point survival assay without dose-response modeling or PD parameter estimation. |
| PGx | Mano_2005 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of UGT1A1 by diflunisal, not a pharmacogenomic effect where a gene variant alters the drug's PK/PD parameters. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The study investigates enzyme inhibition (drug-drug interaction) of UGT2B7 by NSAIDs in vitro and does not examine gene variants or genotypes (pharmacogenomics). |
| popPK | McDougall_1988 | irrelevant | 0 | 0 | The study investigates mitochondrial pharmacology (calcium movements) rather than systemic pharmacokinetics, and diflunisal is only a comparator. |
| PGx | Omura_2021 | not_relevant | 0 | 0 | The paper investigates the metabolism of dotinurad; diflunisal is only mentioned as a reference inhibitor in UGT assays, not as the drug of interest for pharmacogenomics. |
| popPK | Ray_1983 | relevant | 9 | 2 | The study is a PK study of diflunisal in humans using a two-compartment model, but specific parameter values (CL, V, ka) are not listed, only AUC ratios and qualitative trends. |
| popPK | Serlin_1980 | irrelevant | 2 | 0 | The study focuses on the interaction between diflunisal and warfarin, reporting warfarin pharmacokinetic changes and diflunisal concentrations, but does not provide quantitative disposition parameters (CL, V, ka) for diflunisal itself. |
| PGx | Sha_2024 | not_relevant | 0 | 0 | The paper investigates the biochemical properties of a TTR mutation and the in-vitro stabilizing effects of drugs, but does not report in-vivo pharmacokinetic or pharmacodynamic parameters for diflunisal in humans. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of GABA(A) receptor modulation by diflunisal, reporting efficacy and potency (EC50/IC50) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro binding assay involving GABA receptors and diflunisal is tested only as a negative control, with no pharmacokinetic parameters reported. |
| PD | Squires_1993 | not_relevant | 0 | 0 | The paper reports that diflunisal failed to potentiate the GABA-antagonistic effect of norfloxacin and does not provide any numeric PD parameters or concentration-effect data for diflunisal. |
| popPK | Squires_1999 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding study where diflunisal is used only as a comparator for structural activity, reporting no pharmacokinetic parameters. |
| PD | Squires_1999 | not_relevant | 0 | 0 | The paper focuses on honokiol and magnolol; diflunisal is only mentioned as a comparative monophenol in a qualitative statement without providing specific numeric PD parameters (EC50, Emax) for it. |
| PGx | Takahashi_2014 | not_relevant | 1 | 0 | The paper studies the clinical efficacy of diflunisal in patients with a specific genetic disease (TTR Val30Met) but does not report how this genotype alters the pharmacokinetics or pharmacodynamics of the drug itself. |
| popPK | Tempero_1977 | relevant | 4 | 5 | The paper is a review that reports qualitative PK parameters (half-life, protein binding, excretion) for diflunisal, but lacks the specific compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| PD | Tempero_1977 | not_relevant | 2 | 1 | The paper is a review that qualitatively describes pharmacodynamic effects (uricosuria, PG inhibition) and PK properties but does not provide numeric PD parameters or quantitative exposure-response curves. |
| PD | Todd_1985 | not_relevant | 0 | 0 | The text is a qualitative review of suprofen that mentions diflunisal only as a comparator for efficacy, without providing any numeric PD parameters or exposure-response data for diflunisal. |
| PD | Todd_1986 | not_relevant | 0 | 0 | The paper is a review of pirprofen and only mentions diflunisal as a comparator for analgesic activity without providing any specific pharmacodynamic or exposure-response data for diflunisal. |
| PD | Wallace_1987 | not_relevant | 1 | 0 | The text is a review discussing plasma protein binding changes in the elderly and mentions diflunisal only as an example of a drug with altered free fraction, without providing any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Woodward_1994 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on GABA receptors and does not report any pharmacokinetic disposition parameters for diflunisal. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding diflunisal or any pharmacodynamic relationship. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or mention of diflunisal pharmacodynamics. |
| popPK | Şenkardeş_2016_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on diflunisal derivatives for anti-HCV and anticancer activity, containing no pharmacokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiflunisal%5D&body=Drug%3A%20diflunisal%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diflunisal/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 06:04 UTC</sub>
