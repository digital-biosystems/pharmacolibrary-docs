<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Shiga toxin subunit A&quot;}]"></div>

# Shiga toxin subunit A

- **generic name:** Shiga toxin subunit A
- **T3DB:** [T3D2609](http://www.t3db.ca/toxins/T3D2609) · **PubChem:** none

## About

Shiga toxin, also called verotoxin, is produced by Shigella dysenteriae. Shiga toxins belongs to the family of A-B5 toxins. The A subunit (32,000 molecular weight) is responsible for the toxic action of the protein, and the B subunit (7,700 molecular weight) is responsible for binding to a specific cell type.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Shiga toxin, also called verotoxin, is produced by Shigella dysenteriae.
- **Mechanism of toxicity:** Shiga toxin causes the glycosidase cleavage of ribosomal eucaryotic 28S rRNA, resulting in inhibition of protein synthesis in susceptible cells.
- **Health effects:** Shiga toxin is produced by Shigella dysenteriae. Shigella dysenteriae can cause shigellosis (bacillary dysentery).
- **Acute toxicity:** LD50: 1.3 ug/mg (Intraperitoneal, Mouse)
LD50: 450 ng/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2609">T3DB T3D2609</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

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
| 2026-11-11 16:32 | 13:55 | 0/0/0 | 0/0/0 | 0/0/0 | 297,398/12,392 | ollama / glm-5.3-flash | 17 | 4/13 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 37 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bitzan_2009 | irrelevant | 2 | 8 | The reported half-lives, clearance, and volume of distribution belong to the anti-Shiga toxin monoclonal antibodies (cαStx1/cαStx2), not to shiga toxin subunit A itself. |
| popPK | Bording-Jorgensen_2020 | irrelevant | 1 | 0 | This is a study of bacterial shedding/microbiological clearance durations in STEC patients, not toxicokinetic parameters (half-life, Vd, rate constants, etc.) for shiga_toxin_subunit_a itself. |
| popPK | Chauhan_2019 | irrelevant | 1 | 1 | In vitro biochemical characterization (SPR affinity KD of A-B subunit reconstitution), not toxicokinetic parameters of shiga toxin disposition in vivo. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | This is an epidemiological transmission (R0) study of EHEC serogroups in cattle; shiga toxin subunit A itself has no kinetic parameters measured, only Shiga toxin gene presence as a detection criterion. |
| popPK | Chow_2012 | irrelevant | 1 | 0 | A qualitative review of monoclonal antibodies against toxins with no kinetic parameters for shiga toxin subunit A; only protection/isotype statistics, no numeric TK values anywhere. |
| popPK | Debatis_2023 | irrelevant | 0 | 0 | The kinetic parameters measure degradation/stability of anti-Stx2 VHH antibodies, not disposition of the shiga toxin A subunit itself, and no kinetic values for the toxin are reported. |
| popPK | Dhawi_2026 | irrelevant | 0 | 0 | Clinical report of peritoneal dialysis management in STEC-HUS children with no kinetic parameters for shiga toxin. |
| popPK | Dowling_2005 | irrelevant | 2 | 7 | The kinetic parameters (clearance, Vd, half-life) are for the chimeric antibody cαStx2, the administered substance, not for shiga_toxin_subunit_a itself, which only appears indirectly as the antibody's target; the numeric values are present in the abstract. |
| popPK | Fayad_2025 | irrelevant | 2 | 3 | The PK parameters (Cmax, t1/2) reported are for INM004, the anti-Stx equine antibody therapeutic, not for shiga toxin subunit A itself; half-life values are readable but belong to a different substance, and full PK tables live in supplementary material. |
| popPK | Gu_2009 | irrelevant | 0 | 0 | Vaccine immunogenicity/protection study in mice; no kinetic parameters for Shiga toxin subunit A reported. |
| popPK | Hall_2018 | irrelevant | 0 | 0 | Infection/disease model only; no kinetic parameters of Shiga toxin reported anywhere. |
| popPK | Harrison_2013 | irrelevant | 0 | 0 | This is a review of dietary fatty acids' effects on food-borne pathogens (including Shiga toxin-producing E. coli as a pathogen study, not Shiga toxin subunit A toxicokinetics), with no kinetic parameters for the substance. |
| popPK | Hiriart_2018 | irrelevant | 0 | 0 | The paper describes a development/overview of anti-Stx F(ab')2 antibody therapy; kinetics reported relate to the antibody product, not Shiga toxin subunit A, and no numeric values appear in the evidence. |
| popPK | Hiriart_2024 | irrelevant | 2 | 5 | The PK parameters (Cmax, t1/2, AUC) reported here are for the equine antibody INM004, not for the Shiga toxin itself, which only serves as the neutralization target. |
| popPK | Jesudas_2023 | irrelevant | 0 | 0 | A clinical review of consumptive thrombocytopenias in humans; shiga toxin mentioned only as a diagnostic category with no kinetic parameters. |
| popPK | Johannes_2018 | irrelevant | 0 | 0 | This is a review of RNA delivery technologies; Shiga toxin B-subunit appears only as a keyword/trafficking reference and no toxicokinetic parameters for shiga toxin subunit A are reported. |
| popPK | Jääskeläinen_2023 | irrelevant | 1 | 0 | This is a diagnostic/outcome study of STEC clearance times in patients, not toxicokinetic parameters of shiga toxin subunit A; only a median clearance time of infection (22-23 days) is reported, no kinetic parameters of the toxin itself. |
| popPK | Kim_2010 | irrelevant | 1 | 1 | A microbiology/vaccine-vehicle study with only an LD50 determination mentioned but no toxicokinetic parameters (half-life, clearance, distribution, uptake rates) and no numeric values provided. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a review of genomic evolution of enteric pathogens with no toxicokinetic parameters for shiga toxin subunit A; Shiga toxin appears only as a virulence gene/diagnostic target. |
| popPK | McCartney_2025 | irrelevant | 1 | 3 | The paper measures stool shedding duration of STEC bacteria (and other enteropathogens) in humans, not toxicokinetic parameters of shiga toxin subunit A itself; no half-life, clearance, or distribution values for the toxin are reported. |
| popPK | Melton-Celsa_2015 | irrelevant | 1 | 1 | The only kinetic parameters (serum half-lives ~50 and 145 h) belong to the anti-Stx antibodies, not to shiga toxin subunit A itself; Stx1/Stx2 appear only as the toxin being neutralized, with no disposition data for the substance. |
| popPK | Mondini_2015 | irrelevant | 0 | 0 | Mouse cancer efficacy study of STxB-E7 vaccine; no toxicokinetic parameters for shiga toxin subunit A reported. |
| popPK | Moonens_2012 | irrelevant | 0 | 0 | _structural biology of a bacterial adhesin with no toxicokinetic parameters for Shiga toxin subunit A. |
| popPK | Mühlen_2020 | irrelevant | 0 | 0 | The paper reports antibiotic effects on Stx expression and disease outcomes in mice with no kinetic parameters; Shiga toxin is measured as an outcome, not toxicokinetically. |
| popPK | Mühlen_2021 | irrelevant | 0 | 0 | This is a drug-screening study of T3SS inhibitors; Shiga toxin appears only as an expression readout and no toxicokinetic parameters for shiga toxin subunit A are reported. |
| popPK | Mühlen_2024 | irrelevant | 0 | 0 | Microbiota/dysbiosis study of antibiotic treatment in a C. rodentium mouse model; no toxicokinetic parameters for shiga toxin subunit A anywhere. |
| popPK | Pearson_2014 | irrelevant | 0 | 0 | This is a review of immunology/inflammation in EHEC infection with no toxicokinetic parameters for Shiga toxin subunit A and no numeric values. |
| popPK | Peterson_2025 | irrelevant | 0 | 0 | Epidemiological public health study of STEC exclusion durations with no toxicokinetic parameters for shiga toxin subunit A. |
| popPK | Sacerdoti_2023 | irrelevant | 1 | 0 | This is a disease/marker study of Stx2 in rats with renal damage and MV biomarkers; no toxicokinetic parameters (half-life, clearance of toxin, rate constants) are reported, and values reside in figures not provided. |
| popPK | Sheng_2006 | irrelevant | 1 | 2 | Bacterial colonization kinetics of E. coli in cattle with no toxicokinetic parameters (half-life, clearance, rates) for Shiga toxin itself. |
| popPK | Tamminen_2018 | irrelevant | 0 | 0 | This is an epidemiological/exposure study of E. coli O157:H7 shedding in cattle with no toxicokinetic parameters for Shiga toxin subunit A. |
| popPK | Tremblay_2013 | irrelevant | 3 | 1 | Therapeutic efficacy study of antibodies against Shiga toxin in mice with no kinetic parameters of the toxin reported; any numerical PK values are not present in the evidence. |
| popPK | Veneti_2019 | irrelevant | 0 | 0 | This is a public health survey of STEC control measures; "clearance" refers only to microbiological stool clearance, with no toxicokinetic parameters for shiga toxin subunit A. |
| popPK | Wolthuis_2025 | irrelevant | 0 | 0 | The kinetic parameters (clearance, half-life, PBPK/popPK model) all pertain to eliglustat, not Shiga toxin subunit A, which appears only as a pharmacodynamic target context; no kinetic parameter of Shiga toxin subunit A itself is reported. |
| popPK | Šumilo_2025 | irrelevant | 0 | 0 | This is a cost-effectiveness/decision-tree study of childcare exclusion for STEC infection, not a toxicokinetic study of shiga toxin subunit A; no kinetic parameters for the toxin appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bshiga_toxin_subunit_a%5D&body=Drug%3A%20shiga_toxin_subunit_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_shiga_toxin_subunit_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
