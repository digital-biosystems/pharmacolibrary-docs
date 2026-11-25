<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;galactose&quot;}]"></div>

# galactose

- **generic name:** galactose
- **ATC codes:** `V04CE01`, `V08DA02`
- **DrugBank:** [DB11735](https://go.drugbank.com/drugs/DB11735) · **PubChem:** [CID 3037556](https://pubchem.ncbi.nlm.nih.gov/compound/3037556)
- **molar mass:** 180.1559 g/mol (C6H12O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Galactose is a simple sugar used as a diagnostic agent to test liver function or as an ultrasound contrast medium. It is given by intravenous injection or intrauterine instillation, typically as a powder prepared into a solution.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q66589593](https://www.wikidata.org/wiki/Q66589593), [Wikipedia](https://en.wikipedia.org/wiki/Galactose?oldid=1378169616) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| galactose | parent | 180.156 | C6H12O6 | DrugBank | [3037556](https://pubchem.ncbi.nlm.nih.gov/compound/3037556) | Henderson_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Henderson_1982_reference](drugs/drug_galactose/Galactose_Henderson1982_reference.md) | — | 1-compartment (no model) | 5 | Henderson JM et al., First-order clearance of plasma galacto…, Gastroenterology (1982) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:31 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 3,950/180 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 105 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreasen_1976 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of diazepam, and galactose is mentioned only as a diagnostic probe (galactose elimination capacity) for liver function, not as the subject drug for PK parameter estimation. |
| PGx | Andreasen_1976 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of diazepam in liver disease and does not report a pharmacogenomic effect on galactose parameters. |
| popPK | Boehm_2019 | irrelevant | 0 | 0 | This is an in vitro interference study for glucose sensors, not a pharmacokinetic study of galactose disposition. |
| PGx | Boehm_2019 | not_relevant | 0 | 0 | The paper discusses sensor interference of galactose on glucose monitoring devices, not the pharmacokinetics or pharmacodynamics of galactose in humans or any pharmacogenomic effects. |
| popPK | Filip_2026 | irrelevant | 0 | 0 | The paper investigates adverse reactions and basophil activation caused by antivenoms containing α-GAL epitopes, not the pharmacokinetics of galactose itself. |
| PGx | Filip_2026 | not_relevant | 0 | 0 | The paper investigates adverse drug reactions (anaphylaxis) caused by antivenoms in patients sensitized to alpha-gal (a structural carbohydrate, not a genetic variant in the traditional pharmacogenomic sense regarding PK/PD parameters like Cmax, AUC, etc.) and does not report changes in the pharmacokinetic or pharmacodynamic parameters of galactose. |
| PGx | Henderson_1982 | not_relevant | 0 | 0 | The paper examines the effect of liver disease (a phenotypic condition) on galactose clearance, not a pharmacogenomic effect (gene variant) as requested. |
| popPK | Hu_1995 | relevant | 8 | 2 | The study applies a pharmacokinetic model to galactose in patients, but the specific quantitative parameter values are not listed in the provided abstract or evidence. |
| PGx | Hu_1995 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic study of galactose in patients with liver dysfunction, but does not report on the effect of genetic variants or genotypes on these parameters. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The study focuses on the physicochemical and antioxidant properties of black soldier fly larvae protein, using d-galactose only as an agent to induce oxidative stress, and contains no pharmacokinetic parameters for galactose. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The study investigates the antioxidant properties of black soldier fly larvae protein and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of galactose. |
| popPK | Ibrahim_2024 | irrelevant | 0 | 0 | This is a structural characterization study of a fungal exopolysaccharide; galactose appears only as a monosaccharide component, with no PK parameters. |
| popPK | Ichihara_1997 | irrelevant | 0 | 0 | The study focuses on hepatic blood flow and blood pool volume using a radiolabeled ligand (99mTc-GSA) for imaging, not the population pharmacokinetics (CL, V, ka) of galactose itself. |
| PGx | Ichihara_1997 | not_relevant | 0 | 0 | The paper discusses imaging methods for liver function using a radiotracer, not the pharmacogenomics of the drug galactose. |
| popPK | Keiding_2018 | irrelevant | 0 | 0 | This is a review article discussing PET imaging of liver function using 18F-FDGal as a probe, not a study reporting PK parameters for galactose itself. |
| PGx | Keiding_2018 | not_relevant | 0 | 0 | The paper is a review on liver PET imaging using galactose analogs and does not report any gene variants or pharmacogenomic effects on drug parameters. |
| popPK | Luo_2019 | irrelevant | 0 | 0 | This is a structural/bioactivity study of a polysaccharide; galactose appears only as a sugar component, with no PK parameters. |
| popPK | Muñoz-Castiblanco_2022 | irrelevant | 0 | 0 | This is a polysaccharide characterization/antioxidant study; galactose appears only as a monosaccharide component/reference standard, with no PK parameters. |
| popPK | Nataraj_2022 | irrelevant | 0 | 0 | This is a structural/antioxidant characterization of a mushroom polysaccharide; galactose appears only as a monosaccharide component, with no PK parameters. |
| popPK | Nguimbou_2014 | irrelevant | 0 | 0 | The paper analyzes the chemical composition of plant mucilage, specifically mentioning galactose as a sugar component, and contains no pharmacokinetic data, models, or disposition parameters. |
| PGx | Nguimbou_2014 | not_relevant | 0 | 0 | The paper is about food chemistry and antioxidant properties of taro mucilage, containing no pharmacogenomic data or drug PK/PD parameters. |
| popPK | Perfetti_2024 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of the drug govorestat, where galactose is a substrate/analyte rather than the drug of interest. |
| PGx | Perfetti_2024 | not_relevant | 0 | 0 | The paper evaluates govorestat, an aldose reductase inhibitor used to treat galactosemia, and does not study galactose as a drug nor investigate genetic variants. |
| popPK | Sabutski_2020 | irrelevant | 0 | 0 | This is a synthetic chemistry paper on naphthoquinone-thioglycoside conjugates; galactose is only a sugar building block, with no PK parameters reported. |
| popPK | Ueda_1975 | irrelevant | 0 | 0 | This is a chemoreception/taxis study in slime mold, not a pharmacokinetic study of galactose; no PK parameters are reported. |
| popPK | Uesugi_1999 | irrelevant | 2 | 0 | Galactose is used as a metabolic probe to evaluate liver function (galactose elimination capacity/Vmax), not as the subject drug for standard PK parameter characterization (CL, V, etc.). |
| PGx | Uesugi_1999 | not_relevant | 0 | 0 | The paper evaluates liver function using galactose as a substrate in an animal model and does not investigate the influence of human gene variants or genotypes on galactose pharmacokinetics. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | This is a polysaccharide extraction/structure/bioactivity study; galactose appears only as a monosaccharide component of a polysaccharide, with no PK parameters. |
| popPK | Winne_1987 | irrelevant | 2 | 0 | The study is an in-vitro/mechanistic model analysis of intestinal permeability using a closed segment, reporting diffusion resistance percentages rather than systemic pharmacokinetic parameters (CL, V, t1/2) for the drug galactose. |
| PGx | Winne_1987 | not_relevant | 0 | 0 | The study examines pre-epithelial diffusion resistance of galactose in a rat model, focusing on physical barrier properties rather than any pharmacogenomic effects. |
| popPK | Winterdahl_2011 | irrelevant | 0 | 0 | The study investigates hepatic blood perfusion using PET tracers (18F-FDG, 11C-MG, 18F-FDGal) in pigs, not the pharmacokinetics of the drug galactose. |
| PGx | Winterdahl_2011 | not_relevant | 0 | 0 | The paper is a preclinical imaging study in pigs measuring hepatic blood perfusion using FDG/FDGal PET and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of galactose. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgalactose%5D&body=Drug%3A%20galactose%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_galactose/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:28 UTC</sub>
