<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;fibrinogen (125I)&quot;}]"></div>

# fibrinogen (125I)

- **generic name:** fibrinogen (125I)
- **ATC codes:** `V09GB01`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Fibrinogen I-125 is a radioactive diagnostic agent used for cardiovascular imaging.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q106830016](https://www.wikidata.org/wiki/Q106830016) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Meyer_1978_reference](drugs/drug_fibrinogen_125i/Fibrinogen125i_Meyer1978_reference.md) | — | 1-compartment (no model) | 0 | Meyer EC et al., Fibrinogen clearance from alveoli, Journal of applied physiolo… (1978) | [10.1152/jappl.1978.45.4.516](https://doi.org/10.1152/jappl.1978.45.4.516) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Owen_1976_Albumin](drugs/drug_fibrinogen_125i/pd_Owen_1976_Albumin.md) | Albumin extravascular in bone tissue biomarker turnover ← fibrinogen_125i | — | Owen M et al., Extravascular albumin in bone tissue, The Journal of physiology (1976) | [10.1113/jphysiol.1976.sp011369](https://doi.org/10.1113/jphysiol.1976.sp011369) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:11 | 0:04 | 0/1/0 | 1/0/0 | 0/0/0 | 3,905/195 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1992 | irrelevant | 0 | 0 | The study uses 125I-fibrinogen as a diagnostic tracer to measure fibrin accretion in a thrombosis model, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Agnelli_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of hirudin versus heparin in rabbits, but it does not report any pharmacogenomic effects based on genetic variants or genotypes. |
| popPK | Baker_1985 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and thrombus uptake of 99mTc-acylplasmins, with fibrinogen_125i used only as a comparator agent, and no specific PK parameters for fibrinogen are reported. |
| PGx | Baker_1985 | not_relevant | 0 | 0 | The paper investigates the synthesis and thrombus uptake of radiolabeled acylplasmins in animal models and contains no data regarding genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Bent-Hansen_1991 | irrelevant | 1 | 2 | The study focuses on the pharmacokinetics of 131I-albumin, using 125I-fibrinogen only as a plasma volume marker/comparator to define tissue plasma volume rather than as the subject drug. |
| PGx | Bent-Hansen_1991 | not_relevant | 0 | 0 | The paper reports physiological capillary permeability in rabbit ears using 125I-fibrinogen as a plasma marker, with no mention of gene variants or pharmacogenomic effects. |
| popPK | Bent-Hansen_1991_2 | irrelevant | 1 | 0 | Fibrinogen was used only as a plasma reference for albumin, and no quantitative PK parameters for fibrinogen are reported. |
| PGx | Bent-Hansen_1991_2 | not_relevant | 0 | 0 | The paper describes physiological plasma disappearance and tissue uptake in normal rabbits without any genetic variation or pharmacogenomic analysis. |
| popPK | Cox_1992 | irrelevant | 0 | 0 | The study measures in vitro binding of 125I-fibrinogen to platelets to characterize pentamidine, not the pharmacokinetics of fibrinogen. |
| PGx | Cox_1992 | not_relevant | 0 | 0 | The paper reports in vitro pharmacology of pentamidine on platelets but contains no human pharmacogenomic data linking genetic variants to PK or PD parameters. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | The paper is a review of radionuclide imaging in renal transplants where radioiodinated fibrinogen is mentioned only as a diagnostic agent, not a subject of PK parameter estimation. |
| PGx | Dubovsky_1988 | not_relevant | 0 | 0 | The paper is a review of radionuclide diagnostics in renal transplants and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fibrinogen-125i. |
| popPK | Harwig_1975 | irrelevant | 4 | 1 | The paper studies the effect of iodination level on the clearance of fibrinogen in animals, but does not provide specific quantitative PK parameter values (like CL or Vd numbers) for the standard drug entity, only qualitative trends and a thrombus-to-blood ratio. |
| PGx | Harwig_1975 | not_relevant | 0 | 0 | The paper studies the effect of iodination levels on fibrinogen clearance and thrombus uptake in animals, with no mention of human gene variants or pharmacogenomics. |
| popPK | Lee_1977 | irrelevant | 2 | 0 | The paper is a methodological comparison of radioiodination techniques (IC vs. modified CT) using fibrinogen as a model protein, focusing on labeling efficacy and aggregation rather than reporting specific quantitative population PK parameters (CL, V) for 125I-fibrinogen itself. |
| PGx | Lee_1977 | not_relevant | 0 | 0 | The paper describes radioiodination methods for protein labeling and their impact on in vivo stability/clearance, containing no information on human gene variants or pharmacogenomics. |
| PGx | Meyer_1978 | not_relevant | 0 | 0 | The study investigates physiological clearance of 125I-fibrinogen in dogs but does not report any pharmacogenomic effects or gene variants. |
| popPK | Owen_1976 | irrelevant | 0 | 0 | The study focuses on albumin distribution and uses 125I-fibrinogen only as a marker to determine the volume of intravascular plasma, not as the subject drug for PK parameter estimation. |
| PGx | Owen_1976 | not_relevant | 0 | 0 | The paper investigates the distribution of albumin in bone tissue and uses I-125-fibrinogen as a plasma volume marker; it does not report any pharmacogenomic effect on PK/PD parameters of fibrinogen. |
| popPK | Sherman_1982 | irrelevant | 2 | 0 | The primary subject of the study is Fibronectin (FN) turnover, and while 125I-fibrinogen is used as a co-administered tracer to demonstrate binding/clearance interactions, no quantitative pharmacokinetic parameters (CL, V, t1/2) are reported for the fibrinogen itself. |
| PGx | Sherman_1982 | not_relevant | 0 | 0 | The study investigates fibronectin turnover in rabbits and does not report pharmacogenomic effects on the PK/PD of fibrinogen_125i. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfibrinogen_125i%5D&body=Drug%3A%20fibrinogen_125i%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fibrinogen_125i/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:10 UTC</sub>
