<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) ethylenedicysteine&quot;}]"></div>

# technetium (99mTc) ethylenedicysteine

- **generic name:** technetium (99mTc) ethylenedicysteine
- **ATC codes:** `V09CA06`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Technetium 99mTc ethylenedicysteine is a diagnostic radiopharmaceutical used for imaging the renal system. It is a standard agent used in clinical practice for kidney function studies.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kabasakal_1995_reference](drugs/drug_technetium_99mtc_ethylenedicysteine/Technetium99mtcEthylenedicysteine_Kabasakal1995_reference.md) | — | 1-compartment (no model) | 2 | Kabasakal L et al., Evaluation of technetium-99m-ethylenedi…, Journal of nuclear medicine… (1995) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kabasakal_1995_2_reference](drugs/drug_technetium_99mtc_ethylenedicysteine/Technetium99mtcEthylenedicysteine_Kabasakal1995v2_reference.md) | — | 1-compartment (no model) | 1 | Kabasakal L et al., Clinical comparison of technetium-99m-E…, Journal of nuclear medicine… (1995) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:28 | 0:03 | 1/1/0 | 0/0/0 | 0/0/0 | 4,585/204 | einfracz / qwen3.8-27b | 4 | 3/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Das_2000 | irrelevant | 0 | 0 | The paper studies 188Re-ethylene dicysteine, not 99mTc-ethylene dicysteine, and provides biodistribution percentages rather than compartmental PK parameters for the target drug. |
| PGx | Das_2000 | not_relevant | 0 | 0 | The paper evaluates 188Re-ethylene dicysteine and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics of 99mTc-ethylene dicysteine. |
| popPK | Filipczak_2020 | irrelevant | 2 | 0 | The study reports diagnostic imaging parameters (uptake constant K and efficiency index KEi) derived from dynamic renal scintigraphy images, rather than standard population pharmacokinetic parameters (CL, V, ka, t1/2) from plasma concentration-time data. |
| PGx | Filipczak_2020 | not_relevant | 0 | 0 | The paper describes a new quantitative parameter (Kidney Efficiency Index) for dynamic renal scintigraphy using 99mTc-EC but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Kabasakal_1995 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters of technetium-99m-ethylenedicysteine in renal disorders but does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| PGx | Kabasakal_1995_2 | not_relevant | 0 | 0 | The paper compares the pharmacokinetics of different radiotracers but does not investigate any genetic variants or pharmacogenomic effects on the drug's PK/PD parameters. |
| PGx | Kabasakal_1999 | not_relevant | 0 | 0 | The paper investigates the technical reproducibility of (99m)Tc-EC clearance in a small patient cohort but does not report any pharmacogenomic effects or gene variants. |
| PGx | Kabasakal_2000 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetics and clinical utility of 99mTc-EC but contains no information on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Kuśmierek_2017 | irrelevant | 3 | 2 | The study uses technetium-99m-EC as a diagnostic agent to evaluate renal function parameters (split function, transit times) after ESWL, rather than reporting population-pharmacokinetic parameters (CL, V, half-life) of the drug itself. |
| PGx | Kuśmierek_2017 | not_relevant | 0 | 0 | The paper investigates renal scintigraphy imaging techniques and does not report any pharmacogenomic effects on the PK or PD of the tracer. |
| popPK | Moran_1999 | irrelevant | 1 | 0 | The text is a review discussing the development of radiopharmaceuticals and does not contain specific quantitative pharmacokinetic parameter values (such as clearance, volume, or half-life) for the subject drug. |
| PGx | Moran_1999 | not_relevant | 0 | 0 | The text is a review of renal nuclear imaging agents and discusses renal clearance in general, but it does not report any pharmacogenomic effects (gene variant/genotype/phenotype) on the PK or PD of Technetium-99m-EC. |
| popPK | Pagou_2009 | irrelevant | 0 | 0 | The paper is a review discussing gallium-68 compounds for PET imaging and does not report pharmacokinetic parameters for technetium-99mtc ethylenedicysteine. |
| PGx | Pagou_2009 | not_relevant | 0 | 0 | The paper discusses gallium-68 compounds and their applications in molecular imaging; it does not report pharmacogenomic effects on the PK/PD of technetium_99mtc_ethylenedicysteine. |
| popPK | Pietrzak-Stelasiak_2017 | irrelevant | 2 | 0 | The study evaluates the diagnostic efficacy of parametric renal clearance images generated from 99mTc-EC data for detecting renal scars, but does not report quantitative pharmacokinetic disposition parameters (e.g., GFR, clearance rates, volume of distribution) for the drug itself. |
| PGx | Pietrzak-Stelasiak_2017 | not_relevant | 0 | 0 | The paper evaluates diagnostic imaging methods for renal scarring in children and does not investigate pharmacogenomic effects on PK/PD parameters. |
| popPK | Schechter_2009 | irrelevant | 1 | 0 | This studies 99mTc-EC-DG, not technetium-99m ethylenedicysteine itself, and provides no readable numeric PK parameters; residence times are referred to in a table not provided. |
| popPK | Yanagi_2013 | irrelevant | 1 | 0 | The study investigates a novel conjugate (EC-[(d-Asp)5]2) rather than pure technetium_99mtc_ethylenedicysteine, and reports qualitative biodistribution data without providing quantitative compartmental PK parameters (CL, V, Q) for the subject drug. |
| PGx | Yanagi_2013 | not_relevant | 0 | 0 | The paper is a chemical/radiochemical design study of a new radiotracer and contains no information on human gene variants, genotypes, or pharmacogenomic effects on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_ethylenedicysteine%5D&body=Drug%3A%20technetium_99mtc_ethylenedicysteine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_ethylenedicysteine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 07:27 UTC</sub>
