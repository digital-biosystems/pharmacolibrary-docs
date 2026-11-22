<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Zeranol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zeranol_Qu2024_mass_value_mg&quot;,&quot;label&quot;:&quot;Qu_2024_mass_value_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zeranol_Qu2024_value&quot;,&quot;label&quot;:&quot;Qu_2024_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zeranol/Zeranol_Qu2024_value.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Zeranol

- **generic name:** Zeranol
- **T3DB:** [T3D3675](http://www.t3db.ca/toxins/T3D3675) · **PubChem:** [CID 22283](https://pubchem.ncbi.nlm.nih.gov/compound/22283)
- **groups:** experimental, vet_approved

## About

Zeranol is isolated from Fusarium species. It is an anabolic agent and estrogenic agent (mainly veterinary use). Zeranol is used as a growth promoter for food animals. …

- **Category:** Fungal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Zeranol is a mycotoxin derived from fungi in the Fusarium family, and may be found as a contaminant in fungus-infected crops.
- **Mechanism of toxicity:** Zeranol acts as an agonist at the estrogen receptors, interfering with the binding of natural estrogens. This disrupts hormone levels and affects a number of signaling processes, leading to various reproductive disorders in males and females. …
- **Health effects:** Zeranol is an estrogen-like endocrine disrupting chemical that interferes with the binding of natural estrogens, disrupting hormone levels and causing various reproductive disorders in males and females. It has been shown to cause developmental problems in animals by causing tissue malformations and produce irregularities in the estrous cycle. …
- **Carcinogenicity:** Not listed by IARC.
- **Minimal risk levels (ATSDR):** Estimated acceptable daily intake is 0 - 0.5 ug/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3675">T3DB T3D3675</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 26538-44-3</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zeranol | parent | 322.401 | C18H26O5 | PubChem | [22283](https://pubchem.ncbi.nlm.nih.gov/compound/22283) | Qu_2024 |
| Beta-zearalenol (beta-ZOL) | metabolite | 320.385 | C18H24O5 | PubChem | [5933650](https://pubchem.ncbi.nlm.nih.gov/compound/5933650) | Qin_2026 |
| Zearalenone (ZEN) (Zearalenone) | metabolite | 318.369 | C18H22O5 | PubChem | [5281576](https://pubchem.ncbi.nlm.nih.gov/compound/5281576) | Qin_2026, Qu_2024 |

## Start here

> **Qu_2024_mass_value_mg** — <span class="pk-badge pk-badge--orange">Needs review</span> female Dezhou donkeys, n = 4. [Run it in the simulator](drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg.md?tab=Simulation) · [record](drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: T1_tmax</sub> | [Qu_2024_mass_value_mg](drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg.md) | ▶ model + simulator | 1-compartment, IV | 4 | Qu H et al., Toxicokinetics of Zearalenone following…, Toxins (2024) | [10.3390/toxins16010051](https://doi.org/10.3390/toxins16010051) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [↳ value](drugs/toxin_zeranol/Zeranol_Qu2024_value.md) | ▶ model + simulator | 1-compartment, IV | 6 |  |  |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Qin_2026_reference](drugs/toxin_zeranol/Zeranol_Qin2026_reference.md) | — | general linear (no model) | 9 | Qin J et al., Toxicokinetics, Biotransformation, Excr…, Toxins (2026) | [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">cattle</span> | [Leporati_2012_zeranol](drugs/toxin_zeranol/pd_Leporati_2012_zeranol.md) | zeranol ← zeranol · model not identified | — | Leporati M et al., Fit-for-purpose in veterinary drug resi…, Journal of separation scien… (2012) | [10.1002/jssc.201100691](https://doi.org/10.1002/jssc.201100691) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 06:42 | 15:07 | 2/1/0 | 0/1/0 | 0/0/0 | 369,778/26,692 | einfracz / qwen3.8-flash-next | 9 | 2/5 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 41 matched, 41 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Card_2012 | irrelevant | 0 | 0 | The paper reports soil sorption coefficients (K(OC)) for environmental fate, which are physicochemical parameters, not toxicokinetic parameters describing disposition in biological organisms. |
| popPK | De_2012 | irrelevant | 1 | 0 | The paper describes an analytical method for zearalenone and its metabolites, not zeranol, and reports no toxicokinetic parameters. |
| popPK | Devreese_2012 | irrelevant | 0 | 0 | The paper describes analytical methods for detecting mycotoxins and mentions zeranol metabolites (zearalanols) as analytes, but reports no quantitative toxicokinetic parameters (rates, volumes, half-lives) for zeranol. |
| popPK | Dong_2010 | irrelevant | 0 | 0 | The paper reports kinetic parameters for zearalenone (ZEA), not zeranol; while zeranol is a metabolite of zearalanol (which is a metabolite of zearalenone), zearalanol was not detected here, and no zeranol-specific data is presented. |
| popPK | Faisal_2020 | irrelevant | 1 | 0 | The paper reports protein binding affinities (K values) for zeranol (α-ZAL) and other metabolites with serum albumins, but not toxicokinetic parameters like half-lives, clearance, or Vmax/Km for metabolism. |
| popPK | Gopinath_1984 | irrelevant | 0 | 0 | The paper reports kinetic parameters for Growth Hormone (GH), not for zeranol; zeranol is only a treatment condition affecting GH kinetics. |
| popPK | Heitzman_1983 | irrelevant | 2 | 1 | This is a general review of anabolic agents (including zeranol) that discusses kinetic concepts qualitatively but provides no specific quantitative parameters (such as half-lives, clearance rates, or partition coefficients) for zeranol in the provided text. |
| popPK | Hoffmann_1976 | irrelevant | 3 | 0 | The text discusses zeranol's general metabolic fate (non-catabolized, enterohepatic circulation) but provides no quantitative kinetic parameters or numeric values. |
| popPK | Lega_2017 | irrelevant | 2 | 0 | The paper mentions zeranol but reports only qualitative comparative results (biliary vs urine/liver) without providing any quantitative toxicokinetic parameters or time-course data. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper reports an analytical method for detecting zearalenone and its metabolites in human urine for exposure assessment, but reports no quantitative toxicokinetic parameters (half-life, clearance, volume of distribution, etc.). |
| popPK | Loy_1988 | irrelevant | 0 | 0 | The paper reports on physiological growth responses and hormone levels (GH, insulin, glucose) in steers but does not provide any quantitative toxicokinetic parameters for zeranol. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The paper investigates zearalenone-14-glucoside and zearalenone (ZEN), which are fungal mycotoxins, not zeranol; zeranol is not mentioned or studied as the subject substance. |
| popPK | Mukherjee_2014 | relevant | 10 | 3 | The paper develops a PBTK model for zeranol (ZAL) with specific kinetic parameters (partition coefficients, rate constants) presented in Tables 1-3 and referenced supplementary tables, but the numerical values for these tables are not included in the provided text snippet. |
| PGx | Pfeiffer_2010 | not_relevant | 1 | 0 | The study identifies which UGT isoforms (proteins/enzymes) metabolize zeranol but does not investigate human genetic polymorphisms (alleles) or their effect on pharmacokinetic parameters. |
| PGx | Rivera-Núñez_2025 | not_relevant | 2 | 3 | The study reports epidemiological associations between gene variants and birth/placental weights (toxicological endpoints) rather than pharmacokinetic parameters (e.g., AUC, CL) or specific pharmacodynamic drug response metrics for zeranol. |
| popPK | Slobodchikova_2018 | irrelevant | 0 | 0 | The paper describes the development and validation of an analytical LC-MS method for detecting mycotoxins in plasma; it does not report any toxicokinetic parameters (e.g., half-life, clearance, Vd) for zeranol. |
| popPK | Warth_2014 | irrelevant | 0 | 0 | The paper is an exposure study on mycotoxins; it mentions the absence of zeranol-related compounds (zearalanols) but reports no toxicokinetic parameters for zeranol itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzeranol%5D&body=Drug%3A%20zeranol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zeranol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 06:35 UTC</sub>
