<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;cyfluthrin&quot;}]"></div>

# cyfluthrin

- **generic name:** cyfluthrin
- **ATC codes:** `P03BA01`
- **DrugBank:** [DB13828](https://go.drugbank.com/drugs/DB13828) · **PubChem:** not captured
- **molar mass:** 434.288 g/mol (C22H18Cl2FNO3) — DrugBank
- **groups:** experimental

## About

Cyfluthrin is a pyrethroid insecticide used to kill insects and other ectoparasites. It is not an approved human medicine; it appears only as an experimental substance, and its use is mainly as an insecticide rather than a drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q61641151](https://www.wikidata.org/wiki/Q61641151) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cyfluthrin | parent | 434.288 | C22H18Cl2FNO3 | DrugBank | — | Rodríguez_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Rodríguez_2018_reference](drugs/drug_cyfluthrin/Cyfluthrin_Rodrguez2018_reference.md) | — | 1-compartment (no model) | 5 | Rodríguez JL et al., Bioavailability and nervous tissue dist…, Food and chemical toxicolog… (2018) | [10.1016/j.fct.2018.05.012](https://doi.org/10.1016/j.fct.2018.05.012) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Lanteigne_2015_acute_toxicity_immobilization_mortality](drugs/drug_cyfluthrin/pd_Lanteigne_2015_acute_toxicity_immobilization_mortality.md) | acute toxicity (immobilization/mortality) ← cyfluthrin · inhibition effect | — | Lanteigne M et al., Mixture toxicity of imidacloprid and cy…, Archives of environmental c… (2015) | [10.1007/s00244-014-0086-7](https://doi.org/10.1007/s00244-014-0086-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Loha_2012_mortality_efficacy_against_Callosobruchus_maculatus](drugs/drug_cyfluthrin/pd_Loha_2012_mortality_efficacy_against_Callosobruchus_maculatu.md) | mortality/efficacy against Callosobruchus maculatus ← β-cyfluthrin · stimulation effect | — | Loha KM et al., Bio-efficacy evaluation of nanoformulat…, Journal of environmental sc… (2012) | [10.1080/03601234.2012.669254](https://doi.org/10.1080/03601234.2012.669254) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Cao_2011_Ca2_i](drugs/drug_cyfluthrin/pd_Cao_2011_Ca2_i.md) | intracellular calcium concentration elevation ← β-cyfluthrin · direct sigmoid Emax (Hill) effect | — | Cao Z et al., Mechanisms of pyrethroid insecticide-in…, The Journal of pharmacology… (2011) | [10.1124/jpet.110.171850](https://doi.org/10.1124/jpet.110.171850) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Starr_2012_motor_activity](drugs/drug_cyfluthrin/pd_Starr_2012_motor_activity.md) | motor activity ← pyrethroid mixture (permethrin, cypermethrin, β-cyfluthrin, deltamethrin, esfenvalerate) brain concentration · direct sigmoid Emax (Hill) effect | — | Starr JM et al., Environmentally relevant mixtures in cu…, Toxicological sciences : an… (2012) | [10.1093/toxsci/kfs245](https://doi.org/10.1093/toxsci/kfs245) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:05 | 3:56 | 0/1/0 | 2/2/0 | 0/0/0 | 43,760/3,533 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rodríguez_2018.pdf` | Rodríguez JL et al., Bioavailability and nervous tissue dist…, Food and chemical toxicolog… (2018) | popPK | 9 | [10.1016/j.fct.2018.05.012](https://doi.org/10.1016/j.fct.2018.05.012) | [29751079](https://pubmed.ncbi.nlm.nih.gov/29751079) | Rat toxicokinetic study with two-compartment model and numeric parameters (AUC, Cmax, T1/2β, bioavailability) reported directly in the abstract. |
| `Quindroit_2019.pdf` | Quindroit P et al., Estimating the cumulative human exposur…, Toxicology letters (2019) | popPK | 7 | [10.1016/j.toxlet.2019.05.007](https://doi.org/10.1016/j.toxlet.2019.05.007) | [31077771](https://pubmed.ncbi.nlm.nih.gov/31077771) | A PBPK/toxicokinetic model including cyfluthrin is described, but the numeric parameter values are not shown in the evidence (likely in tables/supplementary material not provided). |
| `Starr_2012.pdf` | Starr JM et al., Environmentally relevant mixtures in cu…, Toxicological sciences : an… (2012) | popPK | 7 | [10.1093/toxsci/kfs245](https://doi.org/10.1093/toxsci/kfs245) | [22872056](https://pubmed.ncbi.nlm.nih.gov/22872056) | Toxicokinetic study in rats dosed with a mixture including β-cyfluthrin, reporting elimination half-lives, but the evidence only states half-lives were &lt;7h without per-tissue numeric values (likely in tables/figures not provided). |
| `Hughes_2016.pdf` | Hughes MF et al., Environmentally relevant pyrethroid mix…, Toxicology (2016) | pd | 5 | [10.1016/j.tox.2016.06.013](https://doi.org/10.1016/j.tox.2016.06.013) | [27330022](https://www.ncbi.nlm.nih.gov/pubmed/27330022) | metadata signals extractable PD data (sigmoid) |
| `Lanteigne_2015.pdf` | Lanteigne M et al., Mixture toxicity of imidacloprid and cy…, Archives of environmental c… (2015) | pd | 5 | [10.1007/s00244-014-0086-7](https://doi.org/10.1007/s00244-014-0086-7) | [25298152](https://www.ncbi.nlm.nih.gov/pubmed/25298152) | metadata signals extractable PD data (EC50) |
| `Starr_2014.pdf` | Starr JM et al., Environmentally relevant mixing ratios…, Toxicology (2014) | pd | 5 | [10.1016/j.tox.2014.02.016](https://doi.org/10.1016/j.tox.2014.02.016) | [24631210](https://www.ncbi.nlm.nih.gov/pubmed/24631210) | metadata signals extractable PD data (sigmoid) |
| `Mohapatra_1999.pdf` | Mohapatra R et al., Evaluation of cyfluthrin and fenfluthri…, The Journal of communicable… (1999) | pd | 4 | not captured | [10810595](https://www.ncbi.nlm.nih.gov/pubmed/10810595) | metadata signals extractable PD data (EC50) |
| `Pan_2025.pdf` | Pan W et al., Laboratory and field evaluation of inte…, Environmental entomology (2025) | pd | 4 | [10.1093/ee/nvaf054](https://doi.org/10.1093/ee/nvaf054) | [40577796](https://www.ncbi.nlm.nih.gov/pubmed/40577796) | metadata signals extractable PD data (EC50) |
| `Scollon_2009.pdf` | Scollon EJ et al., In vitro metabolism of pyrethroid pesti…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.108.022343](https://doi.org/10.1124/dmd.108.022343) | [18948380](https://www.ncbi.nlm.nih.gov/pubmed/18948380) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |

<sub>queue written 2026-10-07T12:05:17.406319+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2011 | irrelevant | 0 | 0 | In-vitro mechanistic study of calcium influx in mouse neurons; no PK disposition parameters for cyfluthrin. |
| PGx | He_2025 | not_relevant | 3 | 5 | Reports genotype–resistance (mortality) associations in mosquitoes, not a PK/PD parameter change of cyfluthrin by a gene variant. |
| popPK | Hughes_2016 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PGx | Jin_2026 | not_relevant | 3 | 4 | Reports population-level correlation between F1534S kdr allele frequency and beta-cyfluthrin mortality (resistance phenotype), not a fitted pharmacogenomic effect on a PK/PD parameter. |
| PGx | Jones_2010 | not_relevant | 2 | 2 | Only qualitative docking statement that CYP6G1 cannot accommodate cyfluthrin; no PK/PD parameter effect reported. |
| PGx | Kudom_2020 | not_relevant | 2 | 2 | Insecticide resistance (kdr F1534C) in mosquitoes vs cyfluthrin susceptibility is not a pharmacogenomic effect on a PK/PD parameter of a drug in humans. |
| popPK | Lanteigne_2015 | irrelevant | 0 | 0 | Toxicity (EC50) study, not pharmacokinetics; no disposition parameters reported. |
| PGx | Leng_1999 | not_relevant | 4 | 2 | Hypothesizes interindividual carboxylesterase differences affecting cyfluthrin metabolism, but no genotype/phenotype effect on a PK/PD parameter is quantified. |
| popPK | Loha_2012 | irrelevant | 0 | 0 | This is an insecticidal bioefficacy study reporting EC50 toxicity values, not pharmacokinetic disposition parameters for cyfluthrin. |
| PGx | Major_2022 | not_relevant | 6 | 3 | Reports vgsc resistance alleles associated with cyfluthrin resistance in amphipods, but no fitted PK/PD parameter effect sizes are extractable from the abstract. |
| popPK | Mohapatra_1999 | irrelevant | 0 | 0 | Insecticidal efficacy study (EC50/EC90) in mosquitoes, no pharmacokinetic disposition parameters for cyfluthrin. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | This is an insecticide efficacy/residue study in beetles and trees, not a pharmacokinetic study with disposition parameters for cyfluthrin. |
| popPK | Quindroit_2019 | relevant | 7 | 3 | A PBPK/toxicokinetic model including cyfluthrin is described, but the numeric parameter values are not shown in the evidence (likely in tables/supplementary material not provided). |
| PGx | Scollon_2009 | not_relevant | 3 | 4 | Reports enzyme isoform-mediated metabolism and species CL(int) differences for beta-cyfluthrin, but no gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Starr_2012 | relevant | 7 | 3 | Toxicokinetic study in rats dosed with a mixture including β-cyfluthrin, reporting elimination half-lives, but the evidence only states half-lives were &lt;7h without per-tissue numeric values (likely in tables/figures not provided). |
| popPK | Starr_2014 | irrelevant | 0 | 0 | no_text gate: only 230 chars of text extracted (&lt; 400) |
| popPK | Weston_2010 | irrelevant | 0 | 0 | Environmental monitoring study of pyrethroid concentrations in water; no pharmacokinetic parameters for cyfluthrin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:05 UTC</sub>
