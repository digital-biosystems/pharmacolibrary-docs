<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;bezlotoxumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bezlotoxumab_Yee2020_reference&quot;,&quot;label&quot;:&quot;Yee_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# bezlotoxumab

- **generic name:** bezlotoxumab
- **ATC codes:** `J06BB21`, `J06BC03`
- **DrugBank:** [DB13140](https://go.drugbank.com/drugs/DB13140) · **PubChem:** none
- **groups:** approved

## About

Bezlotoxumab is a monoclonal antibody used to prevent the recurrence of Clostridioides difficile infections. It is given by intravenous injection. It is authorised in the European Union for this indication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4900370](https://www.wikidata.org/wiki/Q4900370), [Wikipedia](https://en.wikipedia.org/wiki/Bezlotoxumab?oldid=1369632457) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Yee_2020_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> review reference. [Run it in the simulator](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md?tab=Simulation) · [record](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Yee_2020_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yee_2019_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2019_reference.md) | — | 1-compartment (no model) | 0 | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yee_2019_CDI_recurrence](drugs/drug_bezlotoxumab/pd_Yee_2019_CDI_recurrence.md) | CDI recurrence ← bezlotoxumab · direct Emax (saturable) effect | — | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yee_2020_rCDI](drugs/drug_bezlotoxumab/pd_Yee_2020_rCDI.md) | recurrent Clostridium difficile infection (rCDI) ← bezlotoxumab · direct Emax (saturable) effect | — | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:11 | 0:04 | 1/1/0 | 2/0/0 | 0/0/0 | 4,274/188 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_2023.pdf` | de Almeida C et al., Predicted Bezlotoxumab Exposure in Pati…, Clinical therapeutics (2023) | popPK | 9 | [10.1016/j.clinthera.2023.02.006](https://doi.org/10.1016/j.clinthera.2023.02.006) | [36906440](https://pubmed.ncbi.nlm.nih.gov/36906440) | The paper is a population PK simulation study for bezlotoxumab using an existing model, but the evidence provided only contains predicted exposure changes (%) rather than the specific quantitative PK parameter values (e.g., clearance, volume) of the model itself. |

<sub>queue written 2026-11-23 17:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2018 | irrelevant | 2 | 4 | The paper provides a review of the mechanism and clinical efficacy (recurrence rates) of bezlotoxumab, including some raw exposure values (Cmax, AUC, t1/2) from Phase III trials, but it does not present a population pharmacokinetic model or derived clearance/volume parameters. |
| PGx | Kinoshita_2018 | not_relevant | 0 | 0 | The paper describes preclinical and clinical efficacy of bezlotoxumab for Clostridium difficile infection, including binding affinity to toxin variants and clinical trial outcomes, but does not report any pharmacogenomic effects (e.g., impact of patient genotypes) on PK or PD parameters. |
| popPK | Peng_2019 | irrelevant | 0 | 0 | In vitro DARPin antitoxin study; bezlotoxumab only appears as a potency comparator (EC50), with no PK/disposition parameters. |
| popPK | Peritore-Galve_2025 | irrelevant | 0 | 0 | This is an efficacy/neutralization study of AZD5148 vs bezlotoxumab in mice; no PK parameters (CL, V, half-life, population-PK model) for bezlotoxumab are reported. |
| popPK | Simeon_2019 | irrelevant | 0 | 0 | This is a DARPin antitoxin engineering study; bezlotoxumab is only a comparator in EC50 potency assays, with no PK parameters (CL, V, half-life with volume, or PK model) reported. |
| popPK | Yee_2019 | relevant | 10 | 0 | The paper describes a population PK model for bezlotoxumab, but the specific numeric parameter values (CL, V, etc.) are not included in the provided abstract text. |
| PGx | Yee_2019 | not_relevant | 0 | 0 | The paper analyzes population PK/PD of bezlotoxumab but does not investigate the impact of gene variants or genotypes on PK/PD parameters. |
| popPK | Yee_2020 | irrelevant | 1 | 2 | The paper is an exposure-response (E-R) and time-to-event analysis of clinical efficacy; while it mentions PK values in the introduction, it does not present a PK model or detailed quantitative disposition parameters for bezlotoxumab as its primary subject. |
| PGx | Yee_2020 | not_relevant | 0 | 0 | The study analyzes exposure-response relationships and clinical covariates (specifically endogenous IgG titers) but does not investigate the impact of genetic variants or genotypes on bezlotoxumab's PK or PD parameters. |
| popPK | de_2023 | relevant | 9 | 3 | The paper is a population PK simulation study for bezlotoxumab using an existing model, but the evidence provided only contains predicted exposure changes (%) rather than the specific quantitative PK parameter values (e.g., clearance, volume) of the model itself. |
| PGx | de_2023 | not_relevant | 0 | 0 | The study investigates the impact of hematopoietic stem cell transplantation (HSCT) and albumin levels on bezlotoxumab exposure, which is a clinical/physiological covariate, not a gene variant or genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbezlotoxumab%5D&body=Drug%3A%20bezlotoxumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bezlotoxumab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:08 UTC</sub>
