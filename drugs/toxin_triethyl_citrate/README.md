<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Triethyl citrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TriethylCitrate_Choi2024_reference&quot;,&quot;label&quot;:&quot;Choi_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_triethyl_citrate/TriethylCitrate_Choi2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TriethylCitrate_Kim2019_reference&quot;,&quot;label&quot;:&quot;Kim_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_triethyl_citrate/TriethylCitrate_Kim2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Triethyl citrate

- **generic name:** Triethyl citrate
- **T3DB:** [T3D4833](http://www.t3db.ca/toxins/T3D4833) · **PubChem:** [CID 6506](https://pubchem.ncbi.nlm.nih.gov/compound/6506)
- **groups:** investigational

## About

Triethyl citrate is used in foods as a flavouring agent, solvent and surface-active agent Triethyl citrate is an ester of citric acid. It is a colorless, odorless liquid used as a food additive (E number E1505) to stabilize foams, especially as whipping aid for egg white. In pharmaceutical coatings and plastics. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4833">T3DB T3D4833</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 77-93-0</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Triethyl citrate (triethyl_citrate) | parent | 276.285 | C12H20O7 | PubChem | [6506](https://pubchem.ncbi.nlm.nih.gov/compound/6506) | Choi_2024 |

## Start here

> **Choi_2024_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> Pooled human liver microsomes. [Run it in the simulator](drugs/toxin_triethyl_citrate/TriethylCitrate_Choi2024_reference.md?tab=Simulation) · [record](drugs/toxin_triethyl_citrate/TriethylCitrate_Choi2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="in vitro" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Choi_2024_reference](drugs/toxin_triethyl_citrate/TriethylCitrate_Choi2024_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Choi H et al., Identification of candidate exposure bi…, Environment international (2024) | [10.1016/j.envint.2024.108980](https://doi.org/10.1016/j.envint.2024.108980) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Kim_2019_reference](drugs/toxin_triethyl_citrate/TriethylCitrate_Kim2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim H et al., Pharmacokinetics and Metabolism of Acet…, Pharmaceutics (2019) | [10.3390/pharmaceutics11040162](https://doi.org/10.3390/pharmaceutics11040162) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-16 17:03 | 8:06 | 2/0/0 | 0/0/0 | 0/0/0 | 181,841/12,782 | einfracz / qwen3.8-flash-next | 13 | 0/2 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 44 matched, 44 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jo_2024.pdf` | Jo EK et al., Suspect screening candidate exposure bi…, Environment international (2024) | popPK | 8 | [10.1016/j.envint.2024.109062](https://doi.org/10.1016/j.envint.2024.109062) | [39442320](https://pubmed.ncbi.nlm.nih.gov/39442320) | The study reports kinetic profiles and estimated urinary elimination half-lives for ATEC metabolites in humans, though only a summary range (1.6-3.0 h) is provided in the abstract rather than full per-subject numeric data or detailed PBPK parameters in the evidence. |
| `Choi_2024.pdf` | Choi H et al., Identification of candidate exposure bi…, Environment international (2024) | popPK | 6 | [10.1016/j.envint.2024.108980](https://doi.org/10.1016/j.envint.2024.108980) | [39307008](https://pubmed.ncbi.nlm.nih.gov/39307008) | The paper reports quantitative apparent half-lives (&lt;15 min) for triethyl citrate (ATEC) in an in vitro human liver microsome metabolism assay. |

<sub>queue written 2026-11-16 17:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adel_2014 | irrelevant | 0 | 0 | Triethyl citrate appears only as a plasticizer for a drug delivery coating, with no toxicokinetic parameters reported for it. |
| popPK | Adye_2023 | irrelevant | 0 | 0 | The paper uses triethyl citrate solely as a plasticizer in the manufacturing of 3D-printed extraction sorbents; the kinetic parameters reported belong to acetaminophen and indomethacin, not triethyl citrate. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is an epidemiological exposure study focusing on biomonitoring and risk assessment, reporting no quantitative toxicokinetic parameters for triethyl citrate. |
| popPK | Dong_2018 | irrelevant | 0 | 0 | Triethyl citrate is used only as a plasticizer in the formulation, not as the subject of the toxicokinetic study. |
| popPK | Hirasawa_2020 | irrelevant | 0 | 0 | Triethyl citrate is merely a component of the drug formulation (excipient), and the pharmacokinetic data provided belong to tacrolimus, not triethyl citrate. |
| popPK | Jeon_2025 | irrelevant | 3 | 0 | The paper focuses on Acetyl triethyl citrate (ATEC), not triethyl citrate (TEC); TEC is identified only as a minor in vitro metabolite with no kinetic parameters reported for it. |
| popPK | Jeon_2026 | irrelevant | 2 | 0 | The paper is an exposure/biomonitoring study reporting environmental concentrations and estimated daily intakes, but does not report quantitative toxicokinetic parameters (such as half-lives, rate constants, or partition coefficients). |
| popPK | Jo_2024 | relevant | 8 | 4 | The study reports kinetic profiles and estimated urinary elimination half-lives for ATEC metabolites in humans, though only a summary range (1.6-3.0 h) is provided in the abstract rather than full per-subject numeric data or detailed PBPK parameters in the evidence. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for Acetyl Triethyl Citrate (ATEC), not Triethyl Citrate (TEC). |
| popPK | Schmidt_1986 | irrelevant | 0 | 0 | The paper discusses drug release from polymer membranes where citric acid triethyl ester is merely a solvent/plasticizer excipient, not the subject of toxicokinetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriethyl_citrate%5D&body=Drug%3A%20triethyl_citrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triethyl_citrate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-16 17:00 UTC</sub>
