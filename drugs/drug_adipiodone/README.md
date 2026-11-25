<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;adipiodone&quot;}]"></div>

# adipiodone

- **generic name:** adipiodone
- **ATC codes:** `V08AC04`
- **DrugBank:** [DB04711](https://go.drugbank.com/drugs/DB04711) · **PubChem:** none
- **groups:** approved, withdrawn

## About

Adipiodone is a water-soluble iodinated contrast agent used for X-ray imaging. It is administered by intrauterine or intravenous routes. The drug is no longer in use as it has been withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4682934](https://www.wikidata.org/wiki/Q4682934), [Wikipedia](https://en.wikipedia.org/wiki/Adipiodone?oldid=1368156079) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lin_1977_reference](drugs/drug_adipiodone/Adipiodone_Lin1977_reference.md) | — | 1-compartment (no model) | 0 | Lin SK et al., Iodipamide kinetics: capacity-limited b…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600661204](https://doi.org/10.1002/jps.2600661204) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Feld_1975_bile_flow](drugs/drug_adipiodone/pd_Feld_1975_bile_flow.md) | bile flow biomarker turnover ← iodipamide excretion | — | Feld GK et al., The choleretic effect of iodipamide, The Journal of clinical inv… (1975) | [10.1172/JCI107959](https://doi.org/10.1172/JCI107959) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Feld_1975_erythritol_clearance](drugs/drug_adipiodone/pd_Feld_1975_erythritol_clearance.md) | erythritol clearance biomarker turnover ← iodipamide excretion | — | Feld GK et al., The choleretic effect of iodipamide, The Journal of clinical inv… (1975) | [10.1172/JCI107959](https://doi.org/10.1172/JCI107959) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:30 | 0:03 | 0/1/0 | 2/0/0 | 0/0/0 | 4,168/169 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bito_1976 | irrelevant | 0 | 0 | The study focuses on the facilitated transport of prostaglandins across the blood-brain barrier in rabbits, and iodipamide is used only as a potential transport inhibitor/comparator, not as the subject of a pharmacokinetic analysis. |
| PGx | Bito_1976 | not_relevant | 0 | 0 | The paper studies prostaglandin transport across the blood-brain barrier in rabbits and does not investigate pharmacogenomic effects on the PK or PD of adipiodone. |
| popPK | Burgener_1975 | irrelevant | 0 | 0 | The study focuses on intravenous cholangiography with iodipamide in dogs, not the pharmacokinetics of adipiodone. |
| PGx | Burgener_1975 | not_relevant | 0 | 0 | The paper studies liver function damage in dogs and does not report any pharmacogenomic effects of gene variants on pharmacokinetics or pharmacodynamics. |
| popPK | Burgener_1976 | irrelevant | 0 | 0 | The study focuses on iodipamide (a contrast agent) and anticholinergics in dogs, not adipiodone; no adipiodone PK parameters are present. |
| PGx | Burgener_1976 | not_relevant | 0 | 0 | The study reports the effect of cholinergic drugs on the biliary kinetics of the contrast agent iodipamide in dogs, which is not a pharmacogenomic effect of the drug adipiodone. |
| popPK | Feld_1975 | irrelevant | 0 | 0 | The paper studies the choleretic (bile flow) properties of iodipamide in dogs, not the population pharmacokinetics of adipiodone (a non-steroidal anti-inflammatory drug), and reports no PK parameters for adipiodone. |
| PGx | Feld_1975 | not_relevant | 0 | 0 | The paper reports on the choleretic effects of iodipamide in a canine model without investigating genetic variants or pharmacogenomic factors. |
| popPK | Kormano_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of contrast agents (diaziratoate and iodipamide), not adipiodone. |
| PGx | Kormano_1979 | not_relevant | 0 | 0 | The study describes volume of distribution of contrast media based on hematocrit and concentration, not pharmacogenomic effects. |
| popPK | LAJOS_1956 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PGx | LAJOS_1956 | not_relevant | 0 | 0 | The paper discusses the effect of bile acid on the clearance of biligrafin, which is unrelated to the drug adipiodone. |
| popPK | Lauteala_1986 | irrelevant | 4 | 2 | The study is primarily a cellular response (WBCL) analysis using a single time-point clearance observation (4% remaining at 30 min) rather than a full quantitative PK parameter derivation, and it concerns iodipamide ethyl ester, not adipiodone. |
| PGx | Lauteala_1986 | not_relevant | 0 | 0 | The paper studies the immune response to a contrast agent (iodipamide ethyl ester) and does not mention adipiodone, genetic variants, or pharmacogenomics. |
| popPK | Lin_1977 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of iodipamide in dogs, not adipiodone. |
| PGx | Lin_1977 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of iodipamide in dogs and contains no information regarding adipiodone or pharmacogenomic variations. |
| popPK | Odlind_1985 | irrelevant | 0 | 0 | The paper studies the renal handling of iothalamate, not adipiodone. |
| PGx | Odlind_1985 | not_relevant | 0 | 0 | The paper investigates the renal pharmacokinetics of iothalamate, not the pharmacogenomics of adipiodone. |
| popPK | Rosenberg_1980 | irrelevant | 0 | 0 | The paper focuses on iodipamide (a different drug) as a comparator and does not report pharmacokinetic parameters for adipiodone. |
| PGx | Rosenberg_1980 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic comparison of two contrast agents in animals, but contains no pharmacogenomic data or genotype-based effects. |
| popPK | Song_1976 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of iodipamide, not adipiodone. |
| PGx | Song_1976 | not_relevant | 0 | 0 | The paper investigates the effect of serum albumin on the pharmacokinetics of iodipamide (not adipiodone) and does not report on any genetic variants or pharmacogenomic effects. |
| popPK | Swanson_1985 | irrelevant | 0 | 0 | The paper reviews ionic contrast media (diatrizoic and iothalamic acids), and "adipiodone" is not a recognized drug in this context (likely a confusion with iopamidol or similar), and no specific PK parameters for the requested drug are provided. |
| PGx | Swanson_1985 | not_relevant | 0 | 0 | The paper reviews the chemistry and usage of contrast media without mentioning adipiodone or any pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Badipiodone%5D&body=Drug%3A%20adipiodone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_adipiodone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:30 UTC</sub>
