<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08B&quot;,&quot;href&quot;:&quot;atc/V08B.md&quot;},{&quot;label&quot;:&quot;barium sulfate without suspending agents&quot;}]"></div>

# barium sulfate without suspending agents

- **generic name:** barium sulfate without suspending agents
- **ATC codes:** `V08BA02`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Schwickert_1995_esophageal_transit_time](drugs/drug_barium_sulfate_without_suspending_agents/pd_Schwickert_1995_esophageal_transit_time.md) | esophageal transit time ← none · model not identified | — | Schwickert HC et al., Motility disorders of the esophagus: di…, European journal of radiolo… (1995) | [10.1016/0720-048x(95)00693-k](https://doi.org/10.1016/0720-048x(95)00693-k) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:21 | 0:04 | 0/0/0 | 0/1/0 | 0/0/0 | 3,473/175 | einfracz / qwen3.8-27b | 4 | 3/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 17 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casteel_1998 | irrelevant | 0 | 0 | The study uses barium sulfate as a radiopaque contrast marker to measure gastric emptying time in swine, not to characterize its pharmacokinetic parameters (CL, V, etc.). |
| PGx | Casteel_1998 | not_relevant | 0 | 0 | The paper studies gastric emptying in swine using barium sulfate as a radiopaque marker and does not report any pharmacogenomic effects (gene variants/genotypes) on the PK or PD of barium sulfate itself. |
| popPK | Hady_1983 | irrelevant | 0 | 0 | The study investigates nasal mucociliary clearance using barium sulfate as a diagnostic tracer, not pharmacokinetic disposition parameters. |
| PGx | Hady_1983 | not_relevant | 0 | 0 | The paper studies nasal mucociliary clearance using barium sulfate as a particle marker, not as a drug, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Hsu_2020 | irrelevant | 0 | 0 | The paper is a review of nanoparticle X-ray contrast agents and does not provide pharmacokinetic parameters for barium sulfate. |
| PGx | Hsu_2020 | not_relevant | 0 | 0 | The paper is a review on nanoparticle contrast agents and does not report any pharmacogenomic effects on the PK/PD of barium sulfate. |
| popPK | Ishikawa_1991 | irrelevant | 0 | 0 | Barium sulfate is used as a diagnostic contrast agent in renal angiography, not as the subject drug for pharmacokinetic parameter extraction. |
| PGx | Ishikawa_1991 | not_relevant | 0 | 0 | The paper investigates cyclosporine nephrotoxicity and uses barium sulfate only as an imaging contrast agent, not as a therapeutic drug, and does not report any pharmacogenomic effects. |
| popPK | Killingsworth_1987 | irrelevant | 0 | 0 | The paper is a case study of a dog with immotile cilia syndrome where barium sulfate is used only as a diagnostic agent for bronchography, not for pharmacokinetic analysis. |
| PGx | Killingsworth_1987 | not_relevant | 0 | 0 | The paper describes a case of immotile cilia syndrome in a dog and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of barium sulfate. |
| popPK | Konduru_2017 | irrelevant | 1 | 0 | This rat nanoparticle-corona study reports no quantitative BaSO4 pharmacokinetic parameters; lung-clearance figures are background only. |
| popPK | Laukkarinen_2007 | irrelevant | 0 | 0 | The study evaluates the structural patency and toxicity of a biliary stent in swine, not the pharmacokinetic disposition of barium sulfate. |
| PGx | Laukkarinen_2007 | not_relevant | 0 | 0 | The paper studies a biodegradable biliary stent in a large animal model and does not investigate pharmacogenomic effects or any pharmacokinetic/pharmacodynamic parameters of barium sulfate as a drug. |
| popPK | MORROW_1964 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PGx | MORROW_1964 | not_relevant | 0 | 0 | The paper discusses the clearance of insoluble dust, which is unrelated to the pharmacokinetic or pharmacodynamic effects of barium sulfate. |
| popPK | Moda_2018 | irrelevant | 0 | 0 | Barium sulfate is only a swallowing-imaging contrast agent, and no pharmacokinetic disposition parameters are reported. |
| popPK | Nakashima_2006 | irrelevant | 0 | 0 | Barium sulfate is used as a contrast agent to visualize dialysate flow in dialyzers, not as a subject drug for pharmacokinetic analysis. |
| PGx | Nakashima_2006 | not_relevant | 0 | 0 | The paper uses barium sulfate as a contrast medium to study dialyzer flow, not as a therapeutic drug, and does not report pharmacogenomic effects. |
| popPK | Normann_1965 | irrelevant | 0 | 0 | Barium sulfate is used as a serum-adsorption reagent, and no pharmacokinetic parameters for it are reported. |
| popPK | Peatfield_1983 | irrelevant | 0 | 0 | The paper investigates the physiological effect of barium sulphate dust on mucus secretion in cats, which is a toxicological/physiological study, not a pharmacokinetic study of barium sulphate disposition. |
| PGx | Peatfield_1983 | not_relevant | 0 | 0 | The paper investigates the physiological response of cat tracheae to inert dust and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Rodrigues-Grande_1987 | irrelevant | 0 | 0 | This is a histological/electron microscopy study of lung clearance in dogs using barium sulfate dust as an irritant/exposure agent, not a pharmacokinetic study of barium_sulfate_without_suspending_agents as a drug. |
| PGx | Rodrigues-Grande_1987 | not_relevant | 0 | 0 | The paper studies the pathological effects of inhaled barium sulphate dust on lung tissue and does not investigate pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Scheeren_2014 | irrelevant | 0 | 0 | Barium sulfate is used as a swallowing-study contrast agent, with no pharmacokinetic disposition parameters reported. |
| popPK | Schwickert_1993 | irrelevant | 0 | 0 | The study uses barium sulfate as a diagnostic contrast agent to assess esophageal motility (transit time) and does not report pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| PGx | Schwickert_1993 | not_relevant | 0 | 0 | The paper evaluates the diagnostic utility of a barium-rice meal for esophageal motility disorders and contains no information regarding pharmacogenomics, gene variants, or drug metabolism. |
| popPK | Schwickert_1995 | irrelevant | 0 | 0 | The paper uses barium sulfate as a diagnostic contrast agent for esophageal motility and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Schwickert_1995 | not_relevant | 0 | 0 | The paper evaluates a diagnostic method (barium-rice test) for esophageal motility disorders and contains no information on pharmacogenomics or pharmacokinetics of barium sulfate. |
| popPK | Takahashi_1987 | irrelevant | 2 | 4 | The study measures tissue retention and local clearance half-lives of barium sulfate in rat trachea, but does not report systemic population pharmacokinetic parameters like clearance (CL), volume of distribution (V), or absorption rate (ka) for the drug as a systemic entity. |
| PGx | Takahashi_1987 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of barium in rats but does not involve human genetics, gene variants, or any pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbarium_sulfate_without_suspending_agents%5D&body=Drug%3A%20barium_sulfate_without_suspending_agents%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_barium_sulfate_without_suspending_agents/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
