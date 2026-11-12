<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Listeriolysin O&quot;}]"></div>

# Listeriolysin O

- **generic name:** Listeriolysin O
- **T3DB:** [T3D2605](http://www.t3db.ca/toxins/T3D2605) · **PubChem:** none

## About

Listeriolysin O (LLO) is a hemolysin produced by the bacterium Listeria monocytogenes, the pathogen responsible for causing listeriosis. The toxin may be considered a virulence factor, since it is crucial for the virulence of L. monocytogenes.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Listeriolysin O (LLO) is a hemolysin produced by the bacterium Listeria monocytogenes, the pathogen responsible for causing listeriosis.
- **Mechanism of toxicity:** Listeriolysin O is a thiol-activated cholesterol-dependent pore forming toxin protein. LLO is selectively activated within the acidic phagosomes of cells that have phagocytosed L. monocytogenes. …
- **Health effects:** Listeriolysin O (LLO) is a hemolysin produced by the bacterium Listeria monocytogenes, the pathogen responsible for causing listeriosis. The toxin may be considered a virulence factor, since it is crucial for the virulence of L. monocytogenes. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2605">T3DB T3D2605</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 112627-82-4</small></p>

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
| 2026-11-11 10:11 | 24:53 | 0/0/0 | 0/0/0 | 0/0/0 | 404,716/9,292 | ollama / glm-5.3-flash | 34 | 1/17 | 34/0 | 0 |

## Coverage

- **PubMed hits:** 91 matched, 93 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balakrishnan_2017 | irrelevant | 0 | 0 | Listeriolysin O only triggers BPI expression in cell culture; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for listeriolysin_o are reported anywhere. |
| popPK | Besançon_2025 | irrelevant | 0 | 0 | An in vitro study of liposomal neutralization of listeriolysin O with no kinetic parameters (no half-life, rate constants, clearances or disposition values) for the toxin. |
| popPK | Bronchalo-Vicente_2015 | irrelevant | 1 | 0 | Listeriolysin O appears only as a Listeria virulence/antigen in a melanoma immunotherapy study; there are no ADME/toxicokinetic parameters (half-life, clearance, Vd, partitioning, Vmax/Km) for LLO, only in vitro infection CFU and immune response percentages. |
| popPK | Brzoza_2004 | irrelevant | 0 | 0 | Immunology study of Listeria infection in mice with no toxicokinetic parameters for listeriolysin O. |
| popPK | Chantret_2010 | irrelevant | 0 | 0 | Listeriolysin O never appears; the study concerns free oligosaccharide metabolism in HepG2 cells, with only streptolysin O mentioned as a permeabilization reagent. |
| popPK | Cheng_2022 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters (clearance, volumes of distribution) for ciprofloxacin, not listeriolysin_o, which does not appear at all. |
| PGx | Curtis_2016 | not_relevant | 0 | 0 | Listeriolysin O is a bacterial virulence factor, not a drug; the paper reports hemA mutation effects on antibiotic tolerance, not a pharmacogenomic effect on a PK/PD parameter of listeriolysin O. |
| popPK | Deng_2020 | irrelevant | 0 | 0 | No toxicokinetic parameter for listeriolysin O; paper reports only bacterial load counts and virulence gene mRNA expression (HlyA) in broilers, no half-lives, rates or model. |
| popPK | Emeny_2007 | irrelevant | 0 | 0 | Study of stress/β-adrenergic effects on Listeria infection; listeriolysin O appears only as an immune tetramer marker, no toxicokinetic parameters. |
| popPK | Emödy_1980 | irrelevant | 0 | 0 | This is a virulence/clearance study of alpha-haemolysin in E. coli, a different substance, with no kinetic parameters for listeriolysin O. |
| popPK | Espinosa-Vinals_2025 | irrelevant | 0 | 0 | This is a vaccine immunogenicity study about Bordetella pertussis clearance; listeriolysin_o is not studied and no toxicokinetic parameters for it appear. |
| PGx | Ferluga_2021 | not_relevant | 0 | 0 | No pharmacogenomic effect on any PK/PD parameter for listeriolysin O is reported; the paper discusses TB vaccines broadly without gene-variant effect data. |
| popPK | Filipová_2005 | irrelevant | 0 | 0 | No kinetic parameters for listeriolysin O; paper concerns enterococcal virulence factors and aminoglycoside resistance with no toxicokinetic data. |
| popPK | Gekara_2009 | irrelevant | 0 | 0 | Immunology/signaling study of LLO-driven inflammation in mice; no kinetic parameters (half-life, clearance, Vd, etc.) reported. |
| PGx | Grode_2005 | not_relevant | 0 | 0 | Listeriolysin O is a vaccine antigens/virulence factor of recombinant BCG, not a therapeutic drug; no host genetic variant affecting its PK/PD parameters is reported. |
| popPK | Guzman_1995 | irrelevant | 0 | 0 | A cell biology study of Listeria invasion of dendritic cells with no toxicokinetic parameters for listeriolysin O; no numeric values present. |
| popPK | Guzmán_1996 | irrelevant | 0 | 0 | Mechanistic apoptosis study with no toxicokinetic parameters for listeriolysin O; no numeric kinetic values present. |
| popPK | Hang_2024 | irrelevant | 0 | 0 | The paper concerns the sodium-channel inhibitor VX-548 for acute pain; listeriolysin O is never mentioned and no kinetic parameters for it exist. |
| popPK | Hess_1996 | irrelevant | 0 | 0 | Listeriolysin appears only as a recombinant virulence trait in a Salmonella infection study, with no kinetic parameter for listeriolysin_o. |
| popPK | Ismail_2017 | irrelevant | 0 | 0 | LLO (listeriolysin) appears only as a model T-cell epitope fused to Leishmania parasites in an immunology study; no toxicokinetic parameters of listeriolysin O are reported. |
| PGx | Klebl_2001 | not_relevant | 0 | 0 | Paper concerns yeast N-glycosylation gene expression (LLO lipid-linked oligosaccharide), not listeriolysin O or any pharmacogenomic PK/PD effect. |
| PGx | Lage_2010 | not_relevant | 0 | 0 | Listeriolysin O is a bacterial delivery vehicle for shRNA, not a drug; no gene variant affects PK/PD of a drug itself with pharmacogenomic effect reported. |
| popPK | Lee_2018 | irrelevant | 1 | 1 | Listeriolysin O appears only as a coating reagent on magnetic contrast agents; no kinetic parameters (half-life, clearance, partition, Vmax/Km etc.) for LLO itself are reported, and no numeric LLO values are present. |
| popPK | León_2020 | irrelevant | 0 | 0 | This is a mechanistic infection/virulence study (granzyme B cleaving listeriolysin O); no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for LLO are reported, only cleavage assays and CFU counts in cells. |
| popPK | Li_2022 | irrelevant | 0 | 0 | Study of acacetin inhibiting LLO virulence; no kinetic parameters for listeriolysin O are reported. |
| popPK | Lu_2019 | irrelevant | 0 | 0 | Paper studies baicalein inhibition of LLO hemolytic activity in infection models; LLO is only the bacterial toxin target, with no kinetic disposition parameters and no numeric toxicokinetic values present. |
| popPK | Martínez_2009 | irrelevant | 0 | 0 | The paper concerns bacterial contamination and depuration in shellfish; no toxicokinetic parameters for listeriolysin_o or any half-lives, rate constants, or kinetic models are reported. |
| popPK | Oliveira_2025 | irrelevant | 0 | 0 | A review of Listeria gut pathogenesis mechanisms with no kinetic parameters for listeriolysin O and no numeric values in the evidence. |
| PGx | Parra-Flores_2025 | not_relevant | 0 | 0 | Listeriolysin O is a bacterial virulence factor (hly gene), not a drug; the paper reports genomic typing of L. monocytogenes strains with no pharmacokinetic or pharmacodynamic parameters. |
| popPK | Stambas_2002 | irrelevant | 0 | 0 | Immunology vaccine study in mice with no toxicokinetic parameters for listeriolysin O. |
| popPK | Subramanian_2020 | irrelevant | 0 | 0 | LLO appears only alongside PLY/SLO in cytokine and hemolysis assays; no kinetic parameters (half-life, clearance, partitioning, rates) for LLO are reported, and figures/ED50 values live in EV figures/appendix tables. |
| popPK | Susar_2026 | irrelevant | 0 | 0 | The substance is levamisole (FLO/LLO abbreviations are free/liposomal levamisole), not listeriolysin_o, so no kinetic parameters for the target substance exist here. |
| popPK | Tattoli_2013 | irrelevant | 0 | 0 | Mechanistic cell biology study of Listeria escape from autophagy with no toxicokinetic parameters for listeriolysin O. |
| popPK | Therkildsen_2019 | irrelevant | 0 | 0 | No toxicokinetic parameters for listeriolysin O; paper concerns E. coli α-hemolysin (HlyA) and P2X7 receptor fibrosis in mice. |
| popPK | Van_2018 | irrelevant | 0 | 0 | A systematic review of the validity of a disability survey instrument (GALI); listeriolysin_o does not appear and there are no toxicokinetic parameters of any kind. |
| popPK | Yang_2010 | irrelevant | 1 | 0 | This is a review of TNF and pulmonary edema; listeriolysin appears only as a mechanistic mention of pore-forming toxins, with no kinetic parameters for it reported or measurable here. |
| popPK | Yang_2018 | irrelevant | 1 | 2 | This is a mechanistic cell signaling/edema study of LLO's effects on ENaC with dose and time-point data, but no toxicokinetic parameters (half-life, clearance, partition coefficients, rate constants); values present are treatment concentrations and edema ratios. |
| popPK | Yin_2011 | irrelevant | 1 | 0 | Listeriolysin O appears only as an antibody/antigen endpoint in a Listeria infection study; no LLO toxicokinetic parameters are reported and the LD50 belongs to the bacteria, not LLO. |
| PGx | Zhao_2020 | not_relevant | 0 | 0 | Paper concerns Aeromonas hydrophila virulence genes and vaccines, not listeriolysin O pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhou_2017 | irrelevant | 0 | 0 | This is a curcumin-LLO inhibition/antibacterial efficacy study (molecular docking, hemolysis, murine infection); no toxicokinetic parameters of LLO are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blisteriolysin_o%5D&body=Drug%3A%20listeriolysin_o%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_listeriolysin_o/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
