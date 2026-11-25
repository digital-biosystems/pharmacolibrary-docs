<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;Vitamin A&quot;}]"></div>

# Vitamin A

- **generic name:** Vitamin A
- **ATC codes:** `V04CB01`
- **DrugBank:** [DB00162](https://go.drugbank.com/drugs/DB00162) · **PubChem:** [CID 445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354)
- **molar mass:** 286.4516 g/mol (C20H30O) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Retinol is a fat-soluble vitamin A alcohol used to prevent and treat deficiency, particularly conditions affecting vision. It is administered orally or by injection into muscle, and applied topically in skincare products to reduce signs of aging. This generic medication is widely used and listed as an essential medicine by the World Health Organization.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q424976](https://www.wikidata.org/wiki/Q424976), [Wikipedia](https://en.wikipedia.org/wiki/Retinol?oldid=1386184736) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| retinol | parent | 286.452 | C20H30O | DrugBank | [445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354) | Green_2021 |
| beta-carotene | metabolite | 536.888 | C40H56 | PubChem | [5280489](https://pubchem.ncbi.nlm.nih.gov/compound/5280489) | Green_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Adams_1995_reference](drugs/drug_vitamin_a/VitaminA_Adams1995_reference.md) | — | 1-compartment (no model) | 0 | Adams WR et al., Effects of N-(4-hydroxyphenyl)retinamid…, Proceedings of the Society… (1995) | [10.3181/00379727-208-43849](https://doi.org/10.3181/00379727-208-43849) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Green_2021_reference](drugs/drug_vitamin_a/VitaminA_Green2021_reference.md) | — | parent + metabolite (no model) | 1 | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:25 | 0:03 | 0/2/0 | 0/0/0 | 0/0/0 | 3,750/162 | einfracz / qwen3.8-27b | 5 | 3/2 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_1995 | not_relevant | 0 | 0 | The study examines the effect of the drug 4-HPR on vitamin A kinetics in rats and does not involve any gene variants, genotypes, or pharmacogenomic mechanisms. |
| popPK | Cifelli_2007 | irrelevant | 3 | 0 | The text describes a review or overview of modeling approaches and summarizes findings without providing specific quantitative parameter values (CL, V, etc.) in the evidence. |
| PGx | Cifelli_2007 | not_relevant | 0 | 0 | The paper reviews mathematical modeling of vitamin A kinetics in response to exogenous factors and nutritional status, but does not report pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Czuba_2024 | irrelevant | 2 | 1 | In vitro cell-culture study of retinoid metabolism/gene expression in LX-2 cells; no PK disposition parameters (CL, V, half-life with volume, or population-PK model) for vitamin A are reported. |
| popPK | Fattore_2000 | irrelevant | 1 | 0 | The study measures hepatic vitamin A levels as a toxicological endpoint to assess the potency of dioxins (PCDD/Fs) and does not provide pharmacokinetic disposition parameters (CL, V, etc.) for vitamin A. |
| PGx | Fattore_2000 | not_relevant | 0 | 0 | The study investigates the toxicological effects of dioxins on vitamin A levels in rats and does not report pharmacogenomic effects (gene variants) on the PK or PD of vitamin A as a drug. |
| PGx | Green_2021 | not_relevant | 0 | 0 | The paper presents a compartmental model for beta-carotene/retinol kinetics in healthy older adults without investigating the impact of genetic variants (pharmacogenomics) on these pharmacokinetic parameters. |
| popPK | Green_2022 | irrelevant | 2 | 0 | The paper describes a review and simulation methodology for theoretical subjects rather than reporting original quantitative pharmacokinetic parameter values (CL, V, etc.) from actual experimental data. |
| PGx | Green_2022 | not_relevant | 0 | 0 | The paper focuses on using model simulations for theoretical subjects to validate vitamin A assessment methods and does not discuss gene variants or pharmacogenomics. |
| popPK | Lietz_2016 | irrelevant | 1 | 0 | This is a review article discussing the methodology of Retinol isotope dilution without reporting original quantitative pharmacokinetic parameter values for vitamin A. |
| PGx | Lietz_2016 | not_relevant | 0 | 0 | The paper reviews stable isotope techniques for vitamin A status and discusses non-genetic confounders (infection, liver disease, age), but does not report any gene variant or genotype effects. |
| popPK | Lopez-Teros_2022 | relevant | 7 | 2 | The paper describes a compartmental model for Vitamin A kinetics in human women and reports TBS ranges (225-1348 umol), but specific pharmacokinetic parameter values (CL, V, Q, ka) are not listed in the evidence, appearing only as assigned values in the methods or simulated results. |
| PGx | Lopez-Teros_2022 | not_relevant | 0 | 0 | The paper describes the development of a compartmental model for vitamin A kinetics in theoretical women but does not investigate or report the effect of any gene variant, genotype, or genotype-phenotype on these pharmacokinetic parameters. |
| popPK | Pedersen_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of retinoids on cholinergic properties in a murine cell line, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Pedersen_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of retinoids on cellular cholinergic properties, not the impact of human gene variants or genotypes on the pharmacokinetics or pharmacodynamics of vitamin A. |
| popPK | Pein_2017 | irrelevant | 0 | 0 | The study is mechanistic (lipidomics and signaling) and does not report quantitative pharmacokinetic parameters such as clearance or volume for vitamin A. |
| PGx | Pein_2017 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of Vitamin A signaling on lipid composition and Akt activation, but does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Prom_2022 | irrelevant | 1 | 0 | The study measures serum concentrations of beta-carotene (a vitamin A precursor) and retinol at discrete time points but does not report pharmacokinetic parameters such as clearance, volume of distribution, or absorption rates. |
| PGx | Prom_2022 | not_relevant | 0 | 0 | The paper investigates the effects of beta-carotene supplementation on colostrum composition and calf serum levels, but does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of vitamin A. |
| popPK | Rivero-Pino_2025 | irrelevant | 0 | 0 | This is a chemical/nutritional characterization of an invasive seaweed (Rugulopteryx okamurae); retinol is only mentioned as a volatile compound, with no PK parameters for vitamin A. |
| popPK | Soprano_2000 | irrelevant | 0 | 0 | The study focuses on the molecular binding and transactivation properties of retinoic acid receptors in vitro, not on pharmacokinetic parameters like clearance or volume. |
| PGx | Soprano_2000 | not_relevant | 0 | 0 | The paper compares different protein isoforms (RARbeta4) of a receptor, not genetic variants/alleles in a population. |
| popPK | Sorg_2002 | irrelevant | 0 | 0 | The study investigates the photophysical depletion of epidermal vitamin A in mice rather than its systemic pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Sorg_2002 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect on a PK or PD parameter of vitamin_a; it describes the effects of UV exposure on vitamin A levels in mice. |
| popPK | Tan_2015 | relevant | 10 | 0 | The paper reports a compartmental pharmacokinetic model for vitamin A (retinol) in rats, but the specific numeric parameter values are not present in the provided abstract evidence. |
| PGx | Tan_2015 | not_relevant | 0 | 0 | The paper compares vitamin A kinetics between neonatal and adult rats (age-based physiological differences) and does not investigate pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Tanumihardjo_2023 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PGx | Tanumihardjo_2023 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic modeling of vitamin A in lactating women but does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Tippmann_2009 | irrelevant | 0 | 0 | The study focuses on the mechanistic up-regulation of ADAM10 by retinoids and reports no pharmacokinetic parameters for vitamin A. |
| PGx | Tippmann_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a vitamin A analog (acitretin) on ADAM10 expression in Alzheimer's disease models, rather than reporting a pharmacogenomic effect (gene variant influencing PK/PD) of vitamin A itself. |
| popPK | Trottier_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of the immune response to measles virus and does not report pharmacokinetic parameters for vitamin A. |
| PGx | Trottier_2009 | not_relevant | 0 | 0 | The paper describes the immunological mechanism of vitamin A/retinoids against measles virus but does not report any pharmacogenomic variations affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | This is a dietary intake survey of micronutrients (including vitamin A) in Chinese children, with no pharmacokinetic parameters such as CL, V, ka, or half-life reported. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The study investigates the mechanism of ATRA's effect on diabetes (GSIS impairment) in rats and cells, not its pharmacokinetic disposition parameters (CL, Vd, etc.). |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of ATRA on glucose metabolism in rats and cells but does not report any pharmacogenomic differences (gene variants/genotypes) affecting ATRA's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvitamin_a%5D&body=Drug%3A%20vitamin_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vitamin_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 07:21 UTC</sub>
