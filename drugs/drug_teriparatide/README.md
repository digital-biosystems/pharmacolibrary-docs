<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05A&quot;,&quot;href&quot;:&quot;atc/H05A.md&quot;},{&quot;label&quot;:&quot;teriparatide&quot;}]"></div>

# teriparatide

- **generic name:** teriparatide
- **ATC codes:** `H05AA02`
- **DrugBank:** [DB06285](https://go.drugbank.com/drugs/DB06285) · **PubChem:** none
- **groups:** approved, investigational

## About

Teriparatide, a parathyroid hormone analogue, is used to treat osteoporosis, including postmenopausal osteoporosis, and other bone diseases. It is an approved medicine with several authorised products in the European Union, mainly for osteoporosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411781](https://www.wikidata.org/wiki/Q411781) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ose_2017_BMD](drugs/drug_teriparatide/pd_Ose_2017_BMD.md) | change in bone mineral density ← teriparatide acetate · stimulation effect | — | Ose A et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2017) | [10.1002/jcph.949](https://doi.org/10.1002/jcph.949) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_PTHR1_internalization](drugs/drug_teriparatide/pd_Sahbani_2019_PTHR1_internalization.md) | PTHR1 internalization ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_arrestin](drugs/drug_teriparatide/pd_Sahbani_2019_arrestin.md) | β‐arrestin recruitment ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_cAMP](drugs/drug_teriparatide/pd_Sahbani_2019_cAMP.md) | intracellular cAMP ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Satterwhite_2010_Calcium](drugs/drug_teriparatide/pd_Satterwhite_2010_Calcium.md) | serum calcium ← teriparatide · indirect response — drug stimulates the production of serum calcium | — | Satterwhite J et al., Pharmacokinetics of teriparatide (rhPTH…, Calcified tissue internatio… (2010) | [10.1007/s00223-010-9424-6](https://doi.org/10.1007/s00223-010-9424-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teriparatide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTH (modulator), PTH1R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:03 | 1:42 | 0/0/0 | 3/0/0 | 0/0/0 | 153,823/5,330 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ose_2017.pdf` | Ose A et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.949](https://doi.org/10.1002/jcph.949) | [28614613](https://pubmed.ncbi.nlm.nih.gov/28614613) | The paper describes a population PK model for teriparatide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| `Raykova_2022.pdf` | Raykova E et al., A randomized pharmacokinetic/pharmacody…, Expert opinion on biologica… (2022) | popPK | 9 | [10.1080/14712598.2021.1970742](https://doi.org/10.1080/14712598.2021.1970742) | [34405742](https://pubmed.ncbi.nlm.nih.gov/34405742) | The paper describes a PK bioequivalence study for teriparatide, but specific quantitative parameter values (CL, V, t1/2) are not provided in the abstract text. |

<sub>queue written 2026-10-07 10:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Frost_2011 | irrelevant | 0 | 0 | The study reports PET parameters (K(i), SUV) for the radiotracer (18)F-fluoride, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug teriparatide itself. |
| popPK | Guers_2017 | irrelevant | 0 | 0 | The study investigates the physiological effects of PTH on vascular endothelial function in rats, not the pharmacokinetic disposition parameters (clearance, volume, etc.) of teriparatide. |
| popPK | Langdahl_2017 | irrelevant | 0 | 0 | The study reports bone mineral density efficacy outcomes, not pharmacokinetic parameters, for teriparatide. |
| popPK | Mohanty_2024 | irrelevant | 0 | 0 | This is a clinical outcomes study evaluating surgical complications and patient-reported outcomes in patients taking teriparatide, with no reporting of pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Monzem_2023 | irrelevant | 0 | 0 | The study is a bone mechanobiology study in mice investigating structural changes (Micro-CT) after PTH (1-34) administration, reporting no pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Musso_1989 | irrelevant | 0 | 0 | The study investigates the renal vasodilator effects and pharmacodynamics of PTH fragments in isolated rat kidneys, not the pharmacokinetic disposition parameters (CL, V, etc.) of teriparatide. |
| popPK | Ose_2017 | relevant | 10 | 0 | The paper describes a population PK model for teriparatide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| popPK | Portales-Castillo_2022 | irrelevant | 0 | 0 | The paper is an in-vitro functional receptor study investigating PTH1R mutations and does not contain pharmacokinetic data for teriparatide. |
| popPK | Raykova_2022 | relevant | 9 | 0 | The paper describes a PK bioequivalence study for teriparatide, but specific quantitative parameter values (CL, V, t1/2) are not provided in the abstract text. |
| popPK | Rooney_2022 | irrelevant | 0 | 0 | The study focuses on histomorphometric analysis of bone formation and remodeling mechanisms, not the pharmacokinetic disposition parameters of teriparatide. |
| popPK | Sahbani_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study comparing the bone anabolic effects and receptor signaling of teriparatide and abaloparatide in mice, containing no pharmacokinetic parameters. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of the imaging tracer [18F]FDG to assess gastrointestinal motility, not the disposition parameters of teriparatide itself. |
| popPK | Stratford_2014 | irrelevant | 0 | 0 | The study evaluates a hybrid PTH-CBD peptide, not teriparatide, so it does not report PK parameters for the subject drug. |
| popPK | Tsujimoto_2012 | relevant | 4 | 0 | The study involves population pharmacokinetic analysis of teriparatide, but specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract/evidence, which only reports qualitative differences in AUC and Cmax. |
| popPK | Winer_2025 | irrelevant | 0 | 0 | The study reports bone health and growth outcomes in response to PTH 1-34 treatment, not pharmacokinetic parameters like clearance or volume. |
| popPK | Xiong_2022 | irrelevant | 1 | 0 | The study focuses on the production and in vitro characterization (binding and receptor stimulation) of a PTH-Fc fusion protein in plants, reporting no in vivo pharmacokinetic parameters (CL, V, t1/2) for teriparatide or the fusion. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bteriparatide%5D&body=Drug%3A%20teriparatide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_teriparatide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
