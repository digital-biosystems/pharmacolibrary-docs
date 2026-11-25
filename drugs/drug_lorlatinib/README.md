<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lorlatinib

- **generic name:** lorlatinib
- **ATC codes:** `L01ED05`
- **DrugBank:** [DB12130](https://go.drugbank.com/drugs/DB12130) · **PubChem:** [CID 71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823)
- **molar mass:** 406.421 g/mol (C21H19FN6O2) — DrugBank
- **groups:** approved, investigational

## About

Lorlatinib is a protein kinase inhibitor used to treat non-small-cell lung carcinoma. It is taken by mouth. It is authorised in the European Union and sold in the United States, Canada, and Japan.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27285820](https://www.wikidata.org/wiki/Q27285820), [Wikipedia](https://en.wikipedia.org/wiki/Lorlatinib?oldid=1329260404) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lorlatinib | parent | 406.421 | C21H19FN6O2 | DrugBank | [71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823) | Chen_2021, Damoiseaux_2022_2 |

## Start here

> **Hibma_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md?tab=Simulation) · [record](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hibma JE et al., Evaluation of the absolute oral bioavai…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04368-1](https://doi.org/10.1007/s00280-021-04368-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) | — | 1-compartment (no model) | 7 (+1 cov.) | Chen J et al., Population pharmacokinetic model with t…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Damoiseaux_2022_2_reference](drugs/drug_lorlatinib/Lorlatinib_Damoiseaux2022v2_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chen_2021_2_IC_ORR](drugs/drug_lorlatinib/pd_Chen_2021_2_IC_ORR.md) | IC‐ORR ← lorlatinib · direct linear effect | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_2_TEAE](drugs/drug_lorlatinib/pd_Chen_2021_2_TEAE.md) | TEAEs grade ≥ 3 ← lorlatinib · direct linear effect | model (no simulator) | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_2_hypercholesterolemia_grade_3](drugs/drug_lorlatinib/pd_Chen_2021_2_hypercholesterolemia_grade_3.md) | hypercholesterolemia grade ≥ 3 ← lorlatinib · direct linear effect | model (no simulator) | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:20 | 0:04 | 1/2/0 | 3/0/0 | 0/0/0 | 3,393/146 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2021 | not_relevant | 1 | 0 | The paper evaluates metabolizer phenotypes (CYP3A5, CYP2C19) as covariates but concludes they did not significantly impact lorlatinib clearance; no pharmacogenomic effect is reported. |
| popPK | Chen_2021_2 | irrelevant | 1 | 0 | The paper describes exposure-response analyses for safety and efficacy using exposure metrics derived from a previously published PK model, but it does not report the underlying population pharmacokinetic parameter values (CL, V, Q, ka) for lorlatinib itself. |
| PGx | Chen_2021_2 | not_relevant | 0 | 0 | The paper reports exposure-response relationships for safety and efficacy but does not analyze the effect of gene variants (pharmacogenomics) on PK or PD parameters. |
| popPK | Damoiseaux_2022 | relevant | 10 | 0 | The paper describes a population PK model for lorlatinib in mice, but the provided abstract lacks the specific numeric parameter values (CL, V, etc.). |
| PGx | Damoiseaux_2022 | not_relevant | 1 | 2 | The study evaluates pharmacokinetic parameters in genetically modified mice (animal models) rather than reporting a human pharmacogenomic effect of a specific gene variant on lorlatinib exposure or response. |
| popPK | Sun_2022 | irrelevant | 2 | 0 | The paper reports qualitative PK data (CSF/plasma ratios, concentrations) and references a population PK model, but does not provide specific quantitative disposition parameters (CL, V, Q, ka) in the text. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The study examines lorlatinib's brain penetration (PK) and CNS efficacy target concentrations, but it does not report any pharmacogenomic effect (influence of a host gene variant/genotype on PK/PD). |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The paper is a methodological study on NCA sampling windows and does not report specific PK parameters for lorlatinib. |
| PGx | Takahashi_2026 | not_relevant | 0 | 0 | The paper focuses on non-compartmental analysis methodology and does not report pharmacogenomic effects on lorlatinib. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blorlatinib%5D&body=Drug%3A%20lorlatinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lorlatinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 13:51 UTC</sub>
