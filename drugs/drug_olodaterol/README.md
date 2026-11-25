<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;olodaterol&quot;}]"></div>

# olodaterol

- **generic name:** olodaterol
- **ATC codes:** `R03AC19`, `R03AL06`
- **DrugBank:** [DB09080](https://go.drugbank.com/drugs/DB09080) · **PubChem:** [CID 11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295)
- **molar mass:** 386.448 g/mol (C21H26N2O5) — DrugBank
- **groups:** approved, investigational

## About

Olodaterol is an ultra-long-acting beta-2 adrenergic agonist used to treat chronic obstructive pulmonary disease. It is given by inhalation using metered-dose spray or aerosol formulations. It is approved for use and marketed under the trade name Striverdi Respimat.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7088466](https://www.wikidata.org/wiki/Q7088466), [Wikipedia](https://en.wikipedia.org/wiki/Olodaterol?oldid=1384487255) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olodaterol | parent | 386.448 | C21H26N2O5 | DrugBank | [11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295) | Borghardt_2016, Borghardt_2016_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Borghardt_2016_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016_reference.md) | — | 1-compartment (no model) | 2 | Borghardt JM et al., Investigating pulmonary and systemic ph…, British journal of clinical… (2016) | [10.1111/bcp.12780](https://doi.org/10.1111/bcp.12780) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Borghardt_2016_2_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016v2_reference.md) | — | 1-compartment (no model) | 3 | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_bronchial_contractility](drugs/drug_olodaterol/pd_Calzetta_2017_bronchial_contractility.md) | bronchial contractility ← olodaterol · direct Emax (saturable) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_bronchial_contractility_2](drugs/drug_olodaterol/pd_Calzetta_2017_bronchial_contractility_2.md) | bronchial contractility ← tiotropium/olodaterol mixture · direct Emax (saturable) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_olodaterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← olodaterol/tiotropium (fixed-dose combination) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:24 | 0:04 | 2/0/0 | 1/2/0 | 0/0/0 | 3,504/187 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Borghardt_2016 | not_relevant | 0 | 0 | The study models the pharmacokinetics of olodaterol in healthy volunteers but does not report any analysis of the impact of gene variants or genotypes on PK parameters. |
| PGx | Borghardt_2016_2 | not_relevant | 0 | 0 | The paper evaluates population pharmacokinetics based on disease status (asthma, COPD, healthy) but does not report any pharmacogenomic (gene variant) effects. |
| popPK | Bouyssou_2010 | irrelevant | 0 | 0 | The paper is a preclinical pharmacodynamic study focusing on receptor binding and bronchoprotection, and does not report quantitative pharmacokinetic parameters (e.g., CL, Vd) for olodaterol. |
| PGx | Bouyssou_2010 | not_relevant | 0 | 0 | The paper describes the preclinical pharmacological profile of olodaterol in animal models and does not report any pharmacogenomic effects or genotype-dependent variations in PK/PD parameters. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | The study reports ex vivo pharmacodynamic parameters (potency and efficacy) for olodaterol in equine bronchi, not pharmacokinetic disposition parameters. |
| PGx | Calzetta_2017 | not_relevant | 0 | 0 | The paper studies a pharmacological drug-drug interaction in an ex vivo equine model and contains no pharmacogenomic data (gene variant/genotype effects) on olodaterol's PK/PD. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations, not a PK study; no olodaterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Ichinose_2017 | irrelevant | 0 | 0 | This is a study protocol for a COPD efficacy trial (lung function, exercise, physical activity) with no PK parameters for olodaterol. |
| popPK | Voskrebenzev_2026 | irrelevant | 0 | 0 | This is an MRI imaging study of tiotropium/olodaterol effects in COPD; no PK parameters (CL, V, ka, half-life) for olodaterol are reported. |
| popPK | Xing_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in organo pharmacological activity of new β2-agonist analogues, not the pharmacokinetics of olodaterol. |
| PGx | Xing_2021 | not_relevant | 0 | 0 | The paper describes the design and activity of novel compounds but does not investigate olodaterol or the impact of gene variants on its PK/PD. |
| popPK | Yi_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry/biological evaluation study of new beta-2 agonists, using olodaterol only as a comparator in in vitro assays, and reports no population pharmacokinetic parameters for olodaterol. |
| PGx | Yi_2020 | not_relevant | 0 | 0 | The paper describes the design and synthesis of new beta-agonists and compares them to olodaterol in vitro, but it does not investigate any genetic variants or pharmacogenomic effects on olodaterol's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolodaterol%5D&body=Drug%3A%20olodaterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olodaterol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:21 UTC</sub>
