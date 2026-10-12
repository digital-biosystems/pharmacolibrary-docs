<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;zinc sulfate&quot;}]"></div>

# zinc sulfate

- **generic name:** zinc sulfate
- **ATC codes:** `A12CB01`, `B05XA18`
- **DrugBank:** [DB09322](https://go.drugbank.com/drugs/DB09322) · **PubChem:** [CID 24424](https://pubchem.ncbi.nlm.nih.gov/compound/24424)
- **molar mass:** 161.472 g/mol (O4SZn) — DrugBank
- **groups:** approved, investigational

## About

Zinc sulfate is a zinc salt used as a mineral supplement to treat or prevent zinc deficiency, and can also be added to intravenous solutions as an electrolyte. It is an approved medicine, widely available as a supplement, and also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q204954](https://www.wikidata.org/wiki/Q204954) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:30 | 0:52 | 0/0/0 | 2/1/0 | 0/0/1 | 69,138/2,572 | einfracz / qwen3.8-27b | 6 | 2/7 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Nusetti_2010_3H_taurine_transport](drugs/drug_zinc_sulfate/pd_Nusetti_2010_3H_taurine_transport.md) | [3H]taurine transport ← zinc sulfate · direct Emax (saturable) effect | — | Nusetti S et al., Effects of zinc ex vivo on taurine upta…, Journal of biomedical scien… (2010) | [10.1186/1423-0127-17-S1-S13](https://doi.org/10.1186/1423-0127-17-S1-S13) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Tran_2004_AZ](drugs/drug_zinc_sulfate/pd_Tran_2004_AZ.md) | absorbed zinc ← zinc_sulfate · direct sigmoid Emax (Hill) effect | — | Tran CD et al., Zinc absorption as a function of the do…, The American journal of cli… (2004) | [10.1093/ajcn/80.6.1570](https://doi.org/10.1093/ajcn/80.6.1570) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Weston_1977_chemotaxis](drugs/drug_zinc_sulfate/pd_Weston_1977_chemotaxis.md) | chemotaxis ← zinc sulfate · direct linear effect | — | Weston WL et al., Zinc correction of defective chemotaxis…, Archives of dermatology (1977) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **miR-146a** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Li_2023](drugs/drug_zinc_sulfate/pgx_Li_2023_miR_146a_Q100.md) | Li Y et al., Effect of miR-146a polymorphism on lipo…, Cellular and molecular biol… (2023) | [10.14715/cmb/2023.69.12.7](https://doi.org/10.14715/cmb/2023.69.12.7) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 59 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guillard_1984.pdf` | Guillard O et al., Comparative pharmacokinetics of [65Zn]z…, Journal of pharmaceutical s… (1984) | popPK | 9 | [10.1002/jps.2600731139](https://doi.org/10.1002/jps.2600731139) | [6520772](https://pubmed.ncbi.nlm.nih.gov/6520772) | The paper describes a comparative pharmacokinetic study of zinc sulfate in rabbits using a two-compartment model, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| `Cunningham_2020.pdf` | Cunningham B et al., Effects of three zinc-containing sunscr…, Aquatic toxicology (Amsterd… (2020) | pd | 5 | [10.1016/j.aquatox.2019.105355](https://doi.org/10.1016/j.aquatox.2019.105355) | [31790937](https://www.ncbi.nlm.nih.gov/pubmed/31790937) | metadata signals extractable PD data (EC50) |
| `Skornik_1983.pdf` | Skornik WA et al., Relative toxicity of inhaled metal sulf…, The American review of resp… (1983) | pd | 5 | [10.1164/arrd.1983.128.2.297](https://doi.org/10.1164/arrd.1983.128.2.297) | [6309044](https://www.ncbi.nlm.nih.gov/pubmed/6309044) | metadata signals extractable PD data (EC50) |
| `Jorge_2005.pdf` | Jorge RA et al., Use of sodium dodecyl sulfate and zinc…, Ecotoxicology and environme… (2005) | pd | 4 | [10.1016/j.ecoenv.2004.09.005](https://doi.org/10.1016/j.ecoenv.2004.09.005) | [15883100](https://www.ncbi.nlm.nih.gov/pubmed/15883100) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T17:30:18.441445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akbaba_2020 | irrelevant | 0 | 0 | The study is an in vitro/in planta toxicity assessment using Allium cepa root cells, reporting mitotic and chromosome aberration indices rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Cao_2013 | irrelevant | 0 | 0 | The paper is a microbiology study on bacterial growth and metal tolerance, not a pharmacokinetic study of zinc sulfate in humans or animals. |
| popPK | Careli_2025 | irrelevant | 0 | 0 | The study is a bioavailability and growth performance trial in pigs, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for zinc sulfate. |
| PD | Careli_2025 | not_relevant | 3 | 2 | The study reports dose-response trends (linear/quadratic) for growth and tissue zinc concentrations but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve for zinc sulfate. |
| popPK | Chavant_2021 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics, and zinc sulfate is used only as a reagent for protein precipitation in the sample preparation method. |
| PD | Chavant_2021 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying tacrolimus and its metabolites; zinc sulfate is used only as a reagent for protein precipitation, and no pharmacodynamic or exposure-response relationship for zinc sulfate is reported. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of metallothionein expression and protein phosphorylation in cell lines, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| PD | Chen_2014 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship for metallothionein expression but focuses on molecular mechanisms (PP2A/MTF-1) and does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on in-vitro bioavailability (Caco-2 transport) and in-vivo anti-anemic efficacy, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for zinc sulfate. |
| popPK | Cunningham_2020 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Cunningham_2020 | not_relevant | 0 | 0 | The paper studies the toxicological effects of zinc-containing sunscreens on sea urchin embryos, not the pharmacodynamics of zinc sulfate in a clinical or pharmacological context. |
| popPK | Dougherty_2012 | irrelevant | 0 | 0 | The study is a clinical trial assessing vitamin A status and does not report pharmacokinetic parameters for zinc sulfate. |
| PD | Dougherty_2012 | not_relevant | 2 | 1 | The paper reports a clinical trial of vitamin A and zinc sulfate but does not provide a pharmacokinetic-pharmacodynamic model, concentration-effect curve, or specific numeric PD parameters (e.g., EC50, Emax) for zinc sulfate; it only notes a potential dose-response for vitamin A based on group means. |
| popPK | Fani_2020 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Feldmann_2019 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of zinc supplementation on diarrhea and weight gain in calves, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume of distribution. |
| PD | Feldmann_2019 | not_relevant | 2 | 1 | The study reports clinical efficacy (hazard ratios, weight gain differences) for fixed doses but does not model the relationship between measured serum zinc concentrations and the pharmacodynamic effects, nor does it provide a dose-response curve with parameters like Emax or EC50. |
| popPK | Fodil_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and antibacterial/antioxidant properties of zinc oxide nanoparticles, not the pharmacokinetics of zinc sulfate. |
| PD | Fodil_2024 | not_relevant | 2 | 1 | The study reports IC50 values for antioxidant activity and uses polynomial modeling for antibacterial effects, but it is a materials science/nanoparticle characterization study, not a pharmacodynamic analysis of zinc sulfate as a drug in a biological system. |
| popPK | Georgiou_2022 | irrelevant | 0 | 0 | The study investigates the effect of human experimenter sex on mouse behavior in response to ketamine, and does not involve zinc_sulfate or its pharmacokinetics. |
| PD | Georgiou_2022 | not_relevant | 0 | 0 | The paper investigates the effect of experimenter sex on ketamine response in mice and does not report any pharmacodynamic or exposure-response relationship for zinc sulfate. |
| popPK | Guillard_1984 | relevant | 9 | 0 | The paper describes a comparative pharmacokinetic study of zinc sulfate in rabbits using a two-compartment model, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| popPK | Irfan_2026 | irrelevant | 1 | 1 | The study is a clinical trial of zinc sulfate efficacy in pediatric diarrhea that reports serum concentration changes but provides no quantitative pharmacokinetic parameters (CL, V, t1/2) or compartmental model. |
| popPK | Jorge_2005 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on mussels reporting NOEC/IC50 values, not a pharmacokinetic study with disposition parameters for zinc sulfate. |
| popPK | Jäger_2024 | irrelevant | 0 | 0 | The paper discusses the pharmacological effects of antifungal tetrazoles on steroidogenesis in cell lines and is completely unrelated to zinc sulfate pharmacokinetics. |
| PD | Jäger_2024 | not_relevant | 0 | 0 | The paper studies oteseconazole and other tetrazole antifungals, not zinc sulfate, and does not report numeric PD parameters for the target drug. |
| popPK | Kalaba_2024 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study using zinc sulfate only as a precursor for synthesizing zinc oxide nanoparticles, and it does not report any pharmacokinetic parameters for zinc sulfate. |
| PD | Kalaba_2024 | not_relevant | 3 | 2 | The paper reports MICs, FIC indices, and cytotoxicity IC50s for a nanoparticle combination, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for zinc sulfate. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper is a materials science study on the synthesis and characterization of metal oxide nanocomposites, not a pharmacokinetic study of zinc sulfate. |
| PD | Khan_2023 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of a ternary metal oxide nanocomposite, not a pharmacodynamic or exposure-response analysis of zinc sulfate as a drug. |
| popPK | Larson_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rapamycin in dogs, not zinc_sulfate. |
| PD | Larson_2016 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC, t1/2) for rapamycin in dogs and contains no pharmacodynamic, exposure-response, or dose-response data. |
| PGx | Li_2023 | not_relevant | 3 | 0 | While a pharmacogenomic association is reported (miR-146a rs2910164 effect on zinc sulfate therapy), the specific PK/PD parameter values are only described qualitatively (higher/lower), and the data tables containing the quantitative effect sizes are missing from the provided text. |
| popPK | Li_2023_2 | irrelevant | 0 | 0 | The paper focuses on the identification of ACE-inhibitory peptides and their interaction with zinc ions, not on the pharmacokinetics of zinc sulfate. |
| PD | Li_2023_2 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic inhibition (IC50) and chelation properties of a peptide, not a pharmacodynamic exposure-response or dose-response relationship for zinc sulfate in a biological system. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper is a plant physiology study on blueberry budbreak using zinc sulfate as a defoliant, not a pharmacokinetic study of zinc sulfate in humans or animals. |
| PD | Lin_2021 | not_relevant | 2 | 1 | The paper reports a lack of significant dose-response for zinc sulfate and focuses on qualitative phytohormone dynamics rather than extractable numeric PD parameters (e.g., EC50, Emax) for the drug. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine A, not zinc sulfate, and does not contain any data for the target drug. |
| PD | Liu_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of Cyclosporine A and the effect of Baicalin on it; it does not study Zinc Sulfate or report any pharmacodynamic (exposure-response) parameters. |
| popPK | Ma_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Nagamine_2000 | not_relevant | 0 | 0 | The study evaluates the efficacy of zinc sulfate combination therapy in Hepatitis C patients with a specific viral genotype (genotype 1b), but does not investigate how human genetic variants affect the pharmacokinetics or pharmacodynamics of zinc sulfate itself. |
| popPK | Noreikaitė_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid (MMF metabolite) and the effects of cyclosporine/everolimus, with no mention of zinc_sulfate. |
| PD | Noreikaitė_2017 | not_relevant | 0 | 0 | The paper analyzes the effect of cyclosporine and everolimus on mycophenolate mofetil pharmacokinetics, not the pharmacodynamics of zinc sulfate. |
| popPK | Nusetti_2010 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo mechanistic investigation of zinc's effect on taurine transport in goldfish retinal cells, not a pharmacokinetic study of zinc sulfate disposition. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review on radiomitigators for radiation injury and does not contain any pharmacokinetic data for zinc sulfate. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain any specific data, analysis, or numeric parameters for zinc sulfate. |
| popPK | Paixão_2008 | irrelevant | 0 | 0 | The study is an in vitro ecotoxicology assay on algae using zinc sulfate as a reference toxicant, not a pharmacokinetic study. |
| PD | Paixão_2008 | not_relevant | 4 | 2 | The paper reports EC50 values for zinc sulfate as part of a method validation study, but the specific numeric values are not provided in the abstract, making them non-extractable from the given text. |
| PGx | Rao_2018 | not_relevant | 0 | 0 | The paper is a case report on the co-occurrence of Wilson disease and oculocutaneous albinism; it does not investigate how gene variants affect the pharmacokinetics or pharmacodynamics of zinc sulfate. |
| PGx | Ren_2025 | not_relevant | 0 | 0 | The paper studies the sleep-promoting effects of lavender oil in mice and uses zinc sulfate only as a control agent to block olfactory pathways, not as the primary drug for pharmacogenomic analysis. |
| popPK | Richard_2022 | irrelevant | 0 | 0 | The study investigates the effects of a high-fructose diet on brown adipose tissue glucose uptake and the gut microbiome, with no mention of zinc sulfate pharmacokinetics. |
| PD | Richard_2022 | not_relevant | 0 | 0 | The paper investigates the effect of high-fructose diet on brown adipose tissue glucose uptake and does not involve zinc sulfate or report any pharmacodynamic parameters. |
| popPK | Ringeling_2022 | irrelevant | 0 | 0 | The paper is a bioanalytical method validation study for vancomycin and clindamycin, where zinc sulfate is used only as a reagent for protein precipitation, not as the subject drug for pharmacokinetic analysis. |
| PD | Ringeling_2022 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for vancomycin and clindamycin; zinc sulfate is used only as a precipitation reagent in sample preparation, and no pharmacodynamic or exposure-response relationship for zinc sulfate is reported. |
| popPK | Saadh_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| PD | Saadh_2021 | not_relevant | 3 | 2 | The paper reports an IC50 for punicalagin and a qualitative fold-change for the combination with zinc, but does not provide a specific dose-response curve or numeric PD parameters (like Emax or EC50) for zinc sulfate alone or the combination. |
| popPK | Saeed_2015 | irrelevant | 0 | 0 | This is a toxicology study reporting EC50/LC50 values for zinc sulfate in fish, not a pharmacokinetic study of disposition parameters. |
| popPK | Scott_2003 | irrelevant | 0 | 0 | The paper describes an in-vitro biochemical assay for kinase activity using zinc sulfate as a reagent, not a pharmacokinetic study of zinc sulfate as a drug. |
| PD | Scott_2003 | not_relevant | 0 | 0 | The paper describes a biochemical assay method for kinase activity using zinc sulfate as a reagent, not a pharmacodynamic study of zinc sulfate as a therapeutic agent. |
| popPK | Shabbir_2023 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Shabbir_2023 | not_relevant | 0 | 0 | The paper focuses on the green synthesis of zinc oxide nanoparticles and their antibacterial/antioxidant properties, not on the pharmacokinetics or pharmacodynamics of zinc sulfate in a biological system. |
| PGx | Sharquie_2023 | not_relevant | 0 | 0 | The paper describes the clinical use of topical zinc sulfate for treating xeroderma pigmentosum lesions but contains no data on gene variants or their impact on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Singh_2017 | not_relevant | 0 | 0 | The study investigates the neurotoxic mechanisms of zinc sulfate involving nitric oxide synthase but does not report any pharmacogenomic associations or genotype-based differences in PK/PD parameters. |
| popPK | Skornik_1983 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Song_2014 | irrelevant | 0 | 0 | The study is a toxicological investigation of element distribution and homeostasis, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for zinc sulfate. |
| popPK | Tang_2013 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and gene expression analysis, not a pharmacokinetic study, and reports no disposition parameters for zinc sulfate. |
| popPK | Tran_2004 | irrelevant | 2 | 3 | The study measures total absorbed zinc mass using stable isotope ratios but does not report compartmental pharmacokinetic parameters such as clearance, volume of distribution, or bioavailability fractions. |
| popPK | Vietri_2002 | irrelevant | 0 | 0 | The study focuses on the sulfation of apomorphine, and zinc sulfate is used only as a reagent for precipitation, not as the subject drug for pharmacokinetic analysis. |
| PD | Vietri_2002 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, IC50) for apomorphine sulfation and its inhibition, not a pharmacodynamic exposure-response relationship for zinc sulfate. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarriers for phytochemicals in diabetic wound healing and does not mention zinc sulfate or report any pharmacokinetic parameters. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not report any pharmacodynamic or exposure-response data for zinc sulfate. |
| popPK | Weston_1977 | irrelevant | 0 | 0 | The study focuses on the immunological correction of chemotaxis defects in acrodermatitis enteropathica and does not report any pharmacokinetic parameters for zinc sulfate. |
| popPK | Woillard_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciclosporin, not zinc_sulfate. |
| PD | Woillard_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling and Bayesian estimation of Ciclosporin AUC for dose adjustment, with no mention of zinc sulfate or any pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Wu_2003 | not_relevant | 0 | 0 | The paper reports the efficacy of zinc sulfate therapy in Wilson disease patients but does not investigate how specific gene variants or genotypes affect the pharmacokinetic or pharmacodynamic parameters of zinc. |
| popPK | Wuehler_2008 | irrelevant | 1 | 0 | The study is a clinical trial measuring plasma zinc concentrations and morbidity outcomes, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxcarbazepine (OXC) and its metabolite MHD, not zinc_sulfate. |
| PD | Yang_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for oxcarbazepine's metabolite, not a pharmacodynamic (PD) or exposure-response model, and does not involve zinc sulfate. |
| popPK | de_1992 | irrelevant | 0 | 0 | The study is a mechanistic cell biology investigation using zinc sulfate as an inducer of gene expression, not a pharmacokinetic study of zinc sulfate disposition. |
| PD | de_1992 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response relationship between zinc sulfate-induced ras protein levels and gap junction loss, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
