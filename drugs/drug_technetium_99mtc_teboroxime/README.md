<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) teboroxime&quot;}]"></div>

# technetium (99mTc) teboroxime

- **generic name:** technetium (99mTc) teboroxime
- **ATC codes:** `V09GA03`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

This diagnostic radiopharmaceutical is used to examine the cardiovascular system. Its current clinical use status is not specified in the provided facts.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub> | [Johnson_1993_reference](drugs/drug_technetium_99mtc_teboroxime/Technetium99mtcTeboroxime_Johnson1993_reference.md) | — | 1-compartment (no model) | 2 | Johnson G et al., Early myocardial clearance kinetics of…, Journal of nuclear medicine… (1993) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Johnson_1990_reference](drugs/drug_technetium_99mtc_teboroxime/Technetium99mtcTeboroxime_Johnson1990_reference.md) | — | 1-compartment (no model) | 0 | Johnson LL et al., Clinical experience with technetium-99m…, The American journal of car… (1990) | [10.1016/0002-9149(90)90614-7](https://doi.org/10.1016/0002-9149(90)90614-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:27 | 0:05 | 1/1/0 | 0/0/0 | 0/0/0 | 6,983/453 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 12 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berman_1991 | irrelevant | 2 | 0 | The paper is a clinical review of imaging agents and describes qualitative pharmacokinetic properties (rapid clearance) without providing quantitative PK parameter values. |
| PGx | Berman_1991 | not_relevant | 0 | 0 | The paper is a review of clinical imaging protocols for 99mTc-teboroxime and does not report any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Fang_2019 | irrelevant | 0 | 0 | The paper is a review of radiotracers for myocardial perfusion imaging and does not report quantitative pharmacokinetic parameters for technetium-99mtc_teboroxime. |
| PGx | Fang_2019 | not_relevant | 0 | 0 | The paper is a review of new 99mTc radiotracers and does not report any pharmacogenomic effects or genetic variants influencing pharmacokinetic or pharmacodynamic parameters. |
| PGx | Johnson_1990 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and imaging properties of technetium-99m teboroxime but does not report any gene variants, genotypes, or phenotypes affecting its PK/PD parameters. |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | The paper is a clinical review of imaging protocols for technetium 99m teboroxime and does not report quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Johnson_1991 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and imaging protocol for technetium 99m teboroxime but contains no information regarding gene variants or pharmacogenomic effects. |
| popPK | Johnson_1992 | irrelevant | 1 | 0 | The paper is a diagnostic imaging study assessing image quality and correlation with thallium, reporting no quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Johnson_1992 | not_relevant | 0 | 0 | The paper reports clinical diagnostic performance and imaging protocols for 99mTc-teboroxime but contains no information on gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| PGx | Johnson_1993 | not_relevant | 0 | 0 | The study reports pharmacokinetic differences due to coronary stenosis (flow restriction) in canine models, not due to genetic variants or genotypes. |
| popPK | Johnson_1994 | irrelevant | 0 | 0 | The text is a general review of clinical utility and qualitative imaging characteristics, lacking any quantitative population pharmacokinetic parameters or compartmental model values for technetium-99mtc_teboroxime. |
| PGx | Johnson_1994 | not_relevant | 0 | 0 | The text describes the pharmacokinetic properties and clinical applications of technetium-99m-teboroxime but does not report any pharmacogenomic effects. |
| popPK | Li_1991 | irrelevant | 0 | 0 | The study focuses on quantitative myocardial perfusion imaging accuracy in anesthetized dogs using a coronary stenosis model, rather than reporting systemic population pharmacokinetic parameters (CL, V, ka) for technetium-99mtc_teboroxime. |
| PGx | Li_1991 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic behavior of the imaging agent 99mTc-teboroxime in animal models but does not report any effects of gene variants, genotypes, or genetic phenotypes on its PK or PD parameters. |
| popPK | Links_1991 | irrelevant | 1 | 2 | This is a simulation study regarding SPECT image reconstruction artifacts based on tracer washout kinetics, not a study reporting quantitative population pharmacokinetic parameters (CL, V, Q) for the drug. |
| PGx | Links_1991 | not_relevant | 0 | 0 | The paper discusses imaging artifacts due to tracer washout kinetics in computer simulations and contains no information about gene variants or pharmacogenomics. |
| popPK | Nickles_1993 | irrelevant | 1 | 1 | The study investigates the isotope Technetium-94m-teboroxime, not the target drug Technetium-99mTc-teboroxime, and reports only a single clearance half-time without a compartmental PK model. |
| PGx | Nickles_1993 | not_relevant | 0 | 0 | The paper reports on the synthesis, dosimetry, and PK properties of a different isotope (Technetium-94m-teboroxime) in a small clinical cohort, with no mention of pharmacogenomic effects on the specified drug (Technetium-99mtc-teboroxime). |
| popPK | Okada_2014 | irrelevant | 1 | 0 | Canine tracer-clearance study, but it reports no quantitative PK disposition parameters; clearance curves are in a figure not provided. |
| popPK | Yamagami_1994 | irrelevant | 3 | 1 | The study reports a myocardial clearance rate constant (k) as a diagnostic marker for coronary artery disease, not a systemic pharmacokinetic parameter (e.g., total body clearance, volume of distribution) for the drug itself. |
| PGx | Yamagami_1994 | not_relevant | 0 | 0 | The paper evaluates a diagnostic imaging protocol for coronary artery disease and does not report pharmacogenomic or genetic effects on the PK/PD parameters of the tracer. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_teboroxime%5D&body=Drug%3A%20technetium_99mtc_teboroxime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_teboroxime/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:26 UTC</sub>
