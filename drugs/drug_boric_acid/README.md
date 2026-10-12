<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S02A&quot;,&quot;href&quot;:&quot;atc/S02A.md&quot;},{&quot;label&quot;:&quot;boric acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BoricAcid_Jansen1984_reference&quot;,&quot;label&quot;:&quot;Jansen_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_boric_acid/BoricAcid_Jansen1984_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# boric acid

- **generic name:** boric acid
- **ATC codes:** `S02AA03`
- **DrugBank:** [DB11326](https://go.drugbank.com/drugs/DB11326) · **PubChem:** [CID 7628](https://pubchem.ncbi.nlm.nih.gov/compound/7628)
- **molar mass:** 61.833 g/mol (BH3O3) — DrugBank
- **groups:** approved, investigational

## About

Boric acid is an antiseptic used against infections, including ear infections. It remains in use as an approved medicine, mainly in ear-drop preparations for the ear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72451064](https://www.wikidata.org/wiki/Q72451064) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| boric acid (boric_acid, boron (boric acid)) | parent | 61.833 | BH3O3 | DrugBank | [7628](https://pubchem.ncbi.nlm.nih.gov/compound/7628) | Jansen_1984, Usuda_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:56 | 22:40 | 1/1/1 | 6/1/0 | 0/0/0 | 685,037/20,482 | ollama / glm-5.3-flash | 23 | 1/17 | 23/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span> | [Jansen_1984_reference](drugs/drug_boric_acid/BoricAcid_Jansen1984_reference.md) | ▶ model + simulator | 2-compartment, IV | 7 | Jansen JA et al., Boric acid single dose pharmacokinetics…, Archives of toxicology (1984) | [10.1007/BF00316588](https://doi.org/10.1007/BF00316588) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Usuda_1998_reference](drugs/drug_boric_acid/BoricAcid_Usuda1998_reference.md) | — | 1-compartment (no model) | 7 | Usuda K et al., Serum and urinary boron levels in rats…, Archives of toxicology (1998) | [10.1007/s002040050530](https://doi.org/10.1007/s002040050530) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Syvänen_2012_reference](drugs/drug_boric_acid/BoricAcid_Syvnen2012_reference.md) | — | 2-compartment (no model) | 4 | Syvänen S et al., Alteration in P-glycoprotein functional…, The AAPS journal (2012) | [10.1208/s12248-011-9318-1](https://doi.org/10.1208/s12248-011-9318-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Amorim_2012_Avoidance_behaviour](drugs/drug_boric_acid/pd_Amorim_2012_Avoidance_behaviour.md) | Avoidance behaviour ← boric acid · model not identified | — | Amorim MJ et al., Boric acid as reference substance: pros…, Ecotoxicology (London, Engl… (2012) | [10.1007/s10646-011-0832-9](https://doi.org/10.1007/s10646-011-0832-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Amorim_2012_EC50](drugs/drug_boric_acid/pd_Amorim_2012_EC50.md) | Reproduction ← boric acid · inhibition effect | — | Amorim MJ et al., Boric acid as reference substance: pros…, Ecotoxicology (London, Engl… (2012) | [10.1007/s10646-011-0832-9](https://doi.org/10.1007/s10646-011-0832-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Amorim_2012_LC50](drugs/drug_boric_acid/pd_Amorim_2012_LC50.md) | Survival (lethality) ← boric acid · inhibition effect | — | Amorim MJ et al., Boric acid as reference substance: pros…, Ecotoxicology (London, Engl… (2012) | [10.1007/s10646-011-0832-9](https://doi.org/10.1007/s10646-011-0832-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Assis_2025_regeneration](drugs/drug_boric_acid/pd_Assis_2025_regeneration.md) | regeneration of E. bigeminus fragments after 7 days exposure ← boric acid · inhibition effect | — | Assis O et al., Using fragmenting enchytraeid species i…, Ecotoxicology (London, Engl… (2025) | [10.1007/s10646-025-02961-1](https://doi.org/10.1007/s10646-025-02961-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Nemcova_2012_reproduction_inhibition_compared_with_controls](drugs/drug_boric_acid/pd_Nemcova_2012_reproduction_inhibition_compared_with_controls.md) | reproduction (inhibition compared with controls) ← boric acid · inhibition effect | — | Nemcova B et al., Impact of platinum on the soil inverteb…, Neuro endocrinology letters… (2012) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Owojori_2011_avoidance](drugs/drug_boric_acid/pd_Owojori_2011_avoidance.md) | avoidance behavior of Oppia nitens ← boric acid · inhibition effect | — | Owojori OJ et al., Can avoidance behavior of the mite Oppi…, Environmental toxicology an… (2011) | [10.1002/etc.658](https://doi.org/10.1002/etc.658) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peters_2008_Inhibition_of_D3_embryonic_stem_cell_differentiation_into_cardiomyocytes](drugs/drug_boric_acid/pd_Peters_2008_Inhibition_of_D3_embryonic_stem_cell_differentia.md) | Inhibition of D3 embryonic stem cell differentiation into cardiomyocytes ← boric acid · direct sigmoid Emax (Hill) effect | — | Peters AK et al., Evaluation of the embryotoxic potency o…, Toxicological sciences : an… (2008) | [10.1093/toxsci/kfn126](https://doi.org/10.1093/toxsci/kfn126) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">fish</span> | [Staal_2018_M_PQ_angle](drugs/drug_boric_acid/pd_Staal_2018_M_PQ_angle.md) | Meckel's-palatoquadrate (M-PQ) angle ← boric acid · model not identified | — | Staal YCM et al., Head skeleton malformations in zebrafis…, Archives of toxicology (2018) | [10.1007/s00204-018-2320-y](https://doi.org/10.1007/s00204-018-2320-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Rolshausen_2005_inhibition_of_ascospore_germination_of_Eutypa_lata](drugs/drug_boric_acid/pd_Rolshausen_2005_inhibition_of_ascospore_germination_of_Eutyp.md) | inhibition of ascospore germination of Eutypa lata ← boric acid · inhibition effect | — | Rolshausen PE et al., Use of Boron for the Control of Eutypa…, Plant disease (2005) | [10.1094/PD-89-0734](https://doi.org/10.1094/PD-89-0734) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Rolshausen_2005_inhibition_of_mycelial_growth_of_Eutypa_lata](drugs/drug_boric_acid/pd_Rolshausen_2005_inhibition_of_mycelial_growth_of_Eutypa_lata.md) | inhibition of mycelial growth of Eutypa lata ← boric acid · inhibition effect | — | Rolshausen PE et al., Use of Boron for the Control of Eutypa…, Plant disease (2005) | [10.1094/PD-89-0734](https://doi.org/10.1094/PD-89-0734) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 106 matched, 66 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jansen_1984.pdf` | Jansen JA et al., Boric acid single dose pharmacokinetics…, Archives of toxicology (1984) | popPK | 10 | [10.1007/BF00316588](https://doi.org/10.1007/BF00316588) | [6732506](https://pubmed.ncbi.nlm.nih.gov/6732506) | Human IV boric acid PK with full numeric compartmental parameters (Cl, t1/2, volumes) reported directly in the abstract. |
| `Usuda_1998.pdf` | Usuda K et al., Serum and urinary boron levels in rats…, Archives of toxicology (1998) | popPK | 10 | [10.1007/s002040050530](https://doi.org/10.1007/s002040050530) | [9765061](https://pubmed.ncbi.nlm.nih.gov/9765061) | Full PK parameters (t1/2, Vd, CL, ka, Cmax, Tmax) for boron after sodium tetraborate/boric acid dosing are reported directly in the abstract. |
| `Assis_2025.pdf` | Assis O et al., Using fragmenting enchytraeid species i…, Ecotoxicology (London, Engl… (2025) | pd | 5 | [10.1007/s10646-025-02961-1](https://doi.org/10.1007/s10646-025-02961-1) | [40932556](https://www.ncbi.nlm.nih.gov/pubmed/40932556) | metadata signals extractable PD data (EC50) |
| `Bori_2015.pdf` | Bori J et al., An Alternative Approach to Assess the H…, Bulletin of environmental c… (2015) | pd | 5 | [10.1007/s00128-015-1647-9](https://doi.org/10.1007/s00128-015-1647-9) | [26350730](https://www.ncbi.nlm.nih.gov/pubmed/26350730) | metadata signals extractable PD data (EC50) |
| `Amorim_2012.pdf` | Amorim MJ et al., Boric acid as reference substance: pros…, Ecotoxicology (London, Engl… (2012) | pd | 4 | [10.1007/s10646-011-0832-9](https://doi.org/10.1007/s10646-011-0832-9) | [22113457](https://www.ncbi.nlm.nih.gov/pubmed/22113457) | metadata signals extractable PD data (EC50) |
| `Archana_2016.pdf` | Archana A et al., Nutrient composition and antioxidant ac…, Food chemistry (2016) | pd | 4 | [10.1016/j.foodchem.2015.11.003](https://doi.org/10.1016/j.foodchem.2015.11.003) | [26616993](https://www.ncbi.nlm.nih.gov/pubmed/26616993) | metadata signals extractable PD data (IC50) |
| `Huang_2026.pdf` | Huang Q et al., Flexible Radioactive Patch: Reshaping t…, ACS applied materials & int… (2026) | pd | 4 | [10.1021/acsami.6c12098](https://doi.org/10.1021/acsami.6c12098) | [42504417](https://www.ncbi.nlm.nih.gov/pubmed/42504417) | metadata signals extractable PD data (Emax) |
| `Li_2016.pdf` | Li C et al., Comparison of Helicobacter pylori Ureas…, Planta medica (2016) | pd | 4 | [10.1055/s-0035-1558229](https://doi.org/10.1055/s-0035-1558229) | [26669678](https://www.ncbi.nlm.nih.gov/pubmed/26669678) | metadata signals extractable PD data (IC50) |
| `Nemcova_2012.pdf` | Nemcova B et al., Impact of platinum on the soil inverteb…, Neuro endocrinology letters (2012) | pd | 4 | not captured | [23353863](https://www.ncbi.nlm.nih.gov/pubmed/23353863) | metadata signals extractable PD data (EC50) |
| `Niemeyer_2018.pdf` | Niemeyer JC et al., Boric acid as reference substance for e…, Ecotoxicology (London, Engl… (2018) | pd | 4 | [10.1007/s10646-018-1915-7](https://doi.org/10.1007/s10646-018-1915-7) | [29492805](https://www.ncbi.nlm.nih.gov/pubmed/29492805) | metadata signals extractable PD data (EC50) |
| `Rolshausen_2005.pdf` | Rolshausen PE et al., Use of Boron for the Control of Eutypa…, Plant disease (2005) | pd | 4 | [10.1094/PD-89-0734](https://doi.org/10.1094/PD-89-0734) | [30791243](https://www.ncbi.nlm.nih.gov/pubmed/30791243) | metadata signals extractable PD data (EC50) |
| `Temel_2019.pdf` | Temel Y et al., The Effect of Mercury Chloride and Bori…, Biological trace element re… (2019) | pd | 4 | [10.1007/s12011-018-1601-x](https://doi.org/10.1007/s12011-018-1601-x) | [30523573](https://www.ncbi.nlm.nih.gov/pubmed/30523573) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T17:48:01.954031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-AlGhafar_2026 | irrelevant | 0 | 0 | This is a spectrofluorimetric analytical method paper for caffeic acid and curcumin; boric acid appears only as a reagent/buffer component, with no PK parameters for it. |
| popPK | Amorim_2012 | irrelevant | 0 | 0 | Ecotoxicology study of boric acid toxicity in soil invertebrates (LC50/EC50), not a pharmacokinetic study with disposition parameters. |
| PGx | Aslan_2025 | not_relevant | 0 | 0 | Study examines boric acid as a feed supplement in quails with feather colour genotypes; no pharmacokinetic or pharmacodynamic parameters of boric acid are measured or linked to genotype. |
| popPK | Assis_2025 | irrelevant | 0 | 0 | Ecotoxicology study using boric acid as a reference toxicant in enchytraeids; no pharmacokinetic parameters reported. |
| popPK | Bori_2015 | irrelevant | 0 | 0 | This is an ecotoxicological soil avoidance study with boric acid as a contaminant, not a pharmacokinetic study; no PK parameters exist. |
| PGx | Brdar-Jokanović_2020 | not_relevant | 2 | 2 | Plant review of boron nutrition; no pharmacokinetic/pharmacodynamic parameters of boric acid as a drug with genotype effects. |
| PGx | Cao_2013 | not_relevant | 0 | 0 | Paper concerns BMP8B variants and cattle growth traits, with no boric acid PK/PD data. |
| popPK | Catto_2025 | irrelevant | 0 | 0 | This is an Alzheimer's drug-efficacy study of netoglitazone in mice; boric acid appears only as a tissue-clearing buffer component, with no PK parameters for it. |
| popPK | Cebeci_2022 | irrelevant | 0 | 0 | In-vitro anticancer study with EC50/cell assays, no pharmacokinetic disposition parameters for boric acid. |
| popPK | Dreute_2025 | irrelevant | 0 | 0 | This is a cancer cell metabolism/synthetic lethality study with no boric acid PK data or disposition parameters. |
| popPK | Goessens_2025 | irrelevant | 0 | 0 | Systematic review of acute aflatoxicosis incidence/mortality in humans; no boric acid PK parameters reported. |
| popPK | Haarhuis_2026 | irrelevant | 0 | 0 | This is a human TMAO/L-carnitine pharmacokinetic study; boric acid is not mentioned at all. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | Boric acid is only a material component of a radioactive patch; no PK parameters for boric acid are reported. |
| popPK | Hwang_2026 | irrelevant | 0 | 0 | A narrative review of herbal/probiotic intravaginal formulations for vaginitis with no pharmacokinetic parameters for boric acid; no numeric disposition values present. |
| popPK | Ince_2011 | irrelevant | 0 | 0 | In vitro rat ileum contraction study with no pharmacokinetic parameters for boric acid. |
| popPK | Jarullah_2025 | irrelevant | 0 | 0 | This is a genetic/lipid biomarker study of FADS1 polymorphism in diabetes; no boric acid PK parameters are reported anywhere. |
| popPK | Kervezee_2014 | irrelevant | 0 | 0 | Boric acid appears only as a reagent (buffer component in HPLC mobile phase); the PK study subject is quinidine in rats, with no boric acid disposition parameters. |
| popPK | Kirschenbaum_2021 | irrelevant | 0 | 0 | This is an Alzheimer's plaque-clearing imaging study in mice; boric_acid is not the subject drug and no PK disposition parameters for it appear. |
| popPK | Kirschenbaum_2023 | irrelevant | 0 | 0 | This is a whole-brain imaging study of anti-Aβ therapies in APP/PS1 mice; boric_acid is not mentioned and no PK parameters for it appear. |
| popPK | Kołodziejczyk_2026 | irrelevant | 0 | 0 | A review of dendrimers and boron clusters for BNCT with no pharmacokinetic parameters for boric acid; no numeric disposition values present. |
| popPK | Li_2021 | irrelevant | 0 | 0 | This is a Salmonella infection/antimicrobial clearance study in mice with enrofloxacin; boric acid is not mentioned and no PK parameters for it appear. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | This is a PK study of mycophenolic acid in kidney transplant recipients; boric acid is not mentioned at all. |
| popPK | Mohamed_2025 | irrelevant | 0 | 0 | This is a sensor-development study for acetaminophen measurement in breast milk, with no boric acid PK parameters reported. |
| popPK | Nemcova_2012 | irrelevant | 0 | 0 | Boric acid is only a reference toxicant in an ecotoxicity test; no PK parameters reported. |
| popPK | Niemeyer_2018 | irrelevant | 0 | 0 | Ecotoxicity study of boric acid in soil invertebrates; no pharmacokinetic disposition parameters reported. |
| popPK | Owojori_2011 | irrelevant | 0 | 0 | Toxicity (avoidance EC50) study in mites, not a pharmacokinetic study of boric acid; no disposition parameters reported. |
| popPK | Owojori_2014 | irrelevant | 0 | 0 | Ecotoxicity study of boric acid effects on mites; no pharmacokinetic parameters reported. |
| popPK | Palchak_2026 | irrelevant | 0 | 0 | Formulation study of terpenes in polymeric micelles with no boric acid PK parameters. |
| popPK | Peters_2008 | irrelevant | 0 | 0 | In-vitro embryotoxicity screening (EST) reporting EC50/REP values, not pharmacokinetic disposition parameters for boric acid. |
| popPK | Rolshausen_2005 | irrelevant | 0 | 0 | This is a plant pathology study of boric acid as a fungicide for grapevines, with no pharmacokinetic disposition parameters. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | Review of paediatric excipients with no PK parameters for boric acid; no numeric disposition values present. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | A review of chitosan injectable hydrogels with no pharmacokinetic parameters for boric acid and no numeric disposition values present. |
| popPK | Syvänen_2012 | irrelevant | 0 | 0 | This is a population PK study of quinidine (with tariquidar/kainate) in rats; boric acid appears only as an HPLC buffer reagent, with no boric acid PK parameters. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | Boric acid is only a reagent (Kjeldahl method); no PK parameters for boric acid are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:48 UTC</sub>
